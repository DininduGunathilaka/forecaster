const chalk = require("chalk");
const yargs = require("yargs");
const note = require("./notes");
//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.addNotes(argv.title, argv.body);
  },
});

//Create remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption:true,
      type:'string'
    },
  },
  handler: function () {
    console.log("Removing the note");
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List down all the notes",
  handler: function () {
    console.log("List down all the notes");
  },
});

yargs.command({
  command: "read",
  describe: "Read a notes",
  handler: function () {
    console.log("Read a notes");
  },
});

yargs.parse();
