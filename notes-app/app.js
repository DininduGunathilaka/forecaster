const chalk = require('chalk')
const yargs = require('yargs')

//Create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    handler: function(){
        console.log('Added the new note')
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    handler : function(){
        console.log('Removing the note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List down all the notes',
    handler: function(){
        console.log('List down all the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a notes',
    handler: function(){
        console.log('Read a notes')
    }
})

console.log(yargs.argv)