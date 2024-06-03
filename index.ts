#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.underline.yellow("\n\t\tWELCOME TO ALEEZE SIMPLE CALCULATOR...."));
const answer = await inquirer.prompt([
   
    { 
        message: chalk.underline.cyan("Enter first number"),
         type: "number", 
         name: "firstNumber"
         },
    { 
        message: chalk.underline.cyan("Enter second number"), 
        type: "number",
         name: "secondNumber"
         },
    {
      message: chalk.underline.magenta("Select one of the operators to perform operation"),
      type: "list",
      name: "operator",
      choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
  ]);
  
  //Conditional Test
  if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
  } 
  else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  }
   else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  }
   else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
  } 
  else {
    console.log(chalk.underline.red("Please select valid operator"));
  } 