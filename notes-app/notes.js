const fs = require("fs");
const chalk = require('chalk')
const getNotes = function () {
  return "Your notes...";
};
const addNotes = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title:title,
    body:body
  })
};

const saveNotes = function(notes){
  const noteJSON = JSON.stringify(notes)
  fs.writeFileSync('note.json',noteJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("note.json");
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch (e) {
    return []
  }
};

module.exports = {
  getNodes: getNotes,
  addNotes: addNotes,
};
