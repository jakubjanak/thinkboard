import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server started on port 5001");
});
