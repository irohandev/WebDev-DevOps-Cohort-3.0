import chalk from 'chalk'       //modern import syntax of js previously it was like - const fs = require('fs');

console.log(chalk.blue('Hello, world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));