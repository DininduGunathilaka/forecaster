const chalk = require('chalk')
const validator = require('validator')
const  extractTitle = require('./notes')

const print = console.log
const green = chalk.green
const red = chalk.red
const blue = chalk.blue
const greenBold = chalk.green.bold.inverse
const redBold = chalk.red.bold.inverse
const blueBold = chalk.blue.inverse

const remainingArg=process.argv.slice(3)
console.log(remainingArg)
const command = process.argv[2]
const title = extractTitle(remainingArg)

if(command ==='add'| command === 'Add'){
    print(blue('Note Added Sucessfully'))
    print(blue('Title: ')+blueBold(title))
}else if(command==='Remove' | command === 'remove'){
    print(green('Note removed Successfully!'))
}else print(red("Something went wrong"))
