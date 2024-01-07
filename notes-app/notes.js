const fs = require("fs");
const chalk = require('chalk')

const getNotes = function () {
  return "Your notes...";
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note){
    return note.title===title
  })
  if(duplicateNotes.length===0){
    notes.push({
      title:title,
      body:body
    })
    saveNotes(notes)
    console.log(chalk.blue('New note added!'))
  }else{
    console.log(chalk.red('Title already exists!'))
  }
};

const removeNote = function(title){
  console.log(chalk.green(title+' note removed successfully'))
}

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
  removeNote:removeNote
};
