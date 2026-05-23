import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in get all getAllNotes controller!");
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const foundedNote = await Note.findById(req.params.id);
    if (!foundedNote)
      return res.status(404).json({ message: "Note has not been found!" });
    res.status(201).json(foundedNote);
  } catch (error) {
    console.error("Error in get all getAllNotes controller!");
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in post createNote controller!");
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function modifyNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note has not been found!" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in put modifyNote controller!");
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note has not been found!" });
    res.status(201).json(deletedNote);
  } catch (error) {
    console.error("Error in put modifyNote controller!");
    res.status(500).json({ message: "Internal server error" });
  }
}
