import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 5001;

connectDB();

// middleware
app.use(express.json()); // getting us access to req.body
// simple custom middleware
app.use((req, res, next) => {
  console.log(`Request method is ${req.method} & request URL is ${req.url}`);
  next();
});

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server started on port 5001");
});
