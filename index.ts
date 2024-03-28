#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 4565;
console.log("Welcome to my bank");

const answerPin = await inquirer.prompt([
  { name: "userPin", message: "Enter your pin code", type: "number" },
]);
if (answerPin.userPin === myPin) {
  let choices = await inquirer.prompt([
    {
      name: "myChoice",
      message: "Make your choice",
      type: "list",
      choices: ["check balance", "withdraw", "fast withdraw"],
    },
  ]);
  if (choices.myChoice === "check balance") {
    console.log("your balance is " + myBalance);
  } else if (choices.myChoice === "withdraw") {
    let amount = await inquirer.prompt([
      {
        name: "amountToWithdraw",
        message: "How much amount you want to withdraw??",
        type: "number",
      },
    ]);
    if(amount.amountToWithdraw > myBalance){
        console.log("Insufficient balance");
    }else{
    myBalance -= amount.amountToWithdraw;
    console.log("Your remaining balance is", myBalance);}
  } else if (choices.myChoice === "fast withdraw") {
    let fastcash1 = await inquirer.prompt([
      {
        name: "fastcashing",
        message: "choose how much amount you want to withdraw",
        type: "list",
        choices: [500, 1000, 5000, 10000],
      },
    ]);
    if (fastcash1.fastcashing === 500) {
      myBalance -= fastcash1.fastcashing;
      console.log("Your remaining balance is", myBalance);
    } else if (fastcash1.fastcashing === 1000) {
      myBalance -= fastcash1.fastcashing;
      console.log("Your remaining balance is", myBalance);
    } else if (fastcash1.fastcashing === 5000) {
      myBalance -= fastcash1.fastcashing;
      console.log("Your remaining balance is", myBalance);
    } else if (fastcash1.fastcashing === 1000) {
      myBalance -= fastcash1.fastcashing;
      console.log("Your remaining balance is", myBalance);
    }
  } else {
    console.log("Incorrect Pin number");
  }
}
