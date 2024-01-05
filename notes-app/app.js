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

yargs.command({
    command: 'list',
    describe: 'List down the notes',
    handler: function(){
        console.log('Listed the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the notes',
    handler: function(){
        console.log('Read the notes')
    }
})

console.log(yargs.argv)