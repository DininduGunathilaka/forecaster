const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.blue("New note added!"));
  } else {
    console.log(chalk.red("Title already exists!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green(title + " note removed successfully"));
  } else {
    console.log(chalk.red("No notes found with the title: " + title));
  }
};

const saveNotes = (notes) => {
  const noteJSON = JSON.stringify(notes);
  fs.writeFileSync("note.json", noteJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("note.json");
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNodes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
};
