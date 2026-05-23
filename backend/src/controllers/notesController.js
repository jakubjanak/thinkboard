export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetched notes.");
};

export const createNote = (req, res) => {
  res.status(200).json({ message: "Note created successfully!" });
};

export const modifyNote = (req, res) => {
  res.status(200).json({ message: "Note has been modified successfully!" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note has been deleted successfully!" });
};
