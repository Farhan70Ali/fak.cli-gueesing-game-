#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6: ",
    },
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number.");
}
else {
    console.log("You guessed the wrong number");
}
