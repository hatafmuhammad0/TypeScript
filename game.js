//Rock Paper Seassor Game
import inquirer from "inquirer";
//define Variables for computer & Human
let humanScore = 0;
let computerScore = 0;
//Two Players Game : Human vs Computer 
//Defining Game Rules:
//Rock will beat Seassor
//Seasor will beat Paper
//Paper will beat Rock
//Who ever score 6 first, will win the Game Series
async function gamePlayRules() {
    //For Computer:
    let choices = ['Rock', 'Paper', 'Seasor'];
    const computerSelect = choices[Math.floor(Math.random() * 3)];
    //For Input from Human
    let humanChoice = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Select any Weapon!",
        choices: ['Rock', 'Paper', 'Seasor'],
    });
    //Setting Wining Conditions:
    if (computerSelect == "Rock" && humanChoice.select == "Seasor") {
        computerScore += 1;
    }
    else if (computerSelect == "Paper" && humanChoice.select == "Rock") {
        computerScore += 1;
    }
    else if (computerSelect == "Seasor" && humanChoice.select == "Paper") {
        computerScore += 1;
    }
    else if (computerSelect == humanChoice.select) {
        computerScore += 1;
    }
    else {
        humanScore += 1;
    }
    console.log(`Human Select = ${humanChoice.select} & Computer Select = ${computerSelect}`);
}
//Game Will Continue until someone score 6 first
while (humanScore < 6 && computerScore < 6) {
    await gamePlayRules();
    console.log("Human Score = ", humanScore, "Computer Score = ", computerScore);
}
//Winner Result 
if (humanScore > computerScore) {
    async function calling() {
        await inquirer.prompt({
            name: "playerName",
            type: "input",
            message: "Please type Name",
        }).then((name) => {
            console.log(`Congratulation ${name.playerName}`);
        });
    }
    calling();
}
else if (computerScore > humanScore) {
    console.log("Sorry U lost & Computer Wins ... Better Luck Next Time :)");
}
