import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

//Simple Calculator adding 2 numbers

let result:number=0;


    let number1 = await inquirer.prompt([{
        name:"number1",
        type:"number",
        message:"Enter number 1"
    }])
    let number2 = await inquirer.prompt([{
        name:"number2",
        type:"number",
        message:"Enter number 2"
    }])
    let operator = await inquirer.prompt([{
        name:"Operator",
        type:"list",
        message:"Select Operator for Calculator",
        choices : [
            'Addition',
            'Subtraction',
            'Division',
            'Multiplication']
    }])
    let ResetGame = await inquirer.prompt([{
        name:"GameReset",
        type:"confirm",
        message:"Do u want to play again?",
    }])
    
    if (operator.Operator == "Addition"){
        result = number1.number1 + number2.number2
    }else if (operator.Operator == "Subtraction"){
        result = number1.number1 - number2.number2
    }else if (operator.Operator == "Division"){
        result = number1.number1 / number2.number2
    }else if (operator.Operator == "Multiplication"){
        result = number1.number1 * number2.number2
    }













