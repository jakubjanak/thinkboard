import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  modifyNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", modifyNote);

router.delete("/:id", deleteNote);

export default router;
