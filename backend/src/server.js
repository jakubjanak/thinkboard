import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json()); // getting us access to req.body
// ratelimiter for users
app.use(rateLimiter);
// added origin for frontend to solve CORS issue
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
// simple custom middleware
app.use((req, res, next) => {
  console.log(`Request method is ${req.method} & request URL is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port 5001");
  });
});
