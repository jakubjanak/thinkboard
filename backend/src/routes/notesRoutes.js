import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  modifyNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", modifyNote);

router.delete("/:id", deleteNote);

export default router;
