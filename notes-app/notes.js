const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
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

const showAllNotes = () => {
  const notes = loadNotes();
  console.log(chalk.cyan.inverse("Your Notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteWanted = notes.find((note) => note.title === title);
  if (noteWanted) {
    console.log(
      chalk.magentaBright.inverse(noteWanted.title) + "\n" + noteWanted.body
    );
  } else {
    console.log(chalk.red("Note not found!"));
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
  showAllNotes: showAllNotes,
  readNote: readNote,
};
