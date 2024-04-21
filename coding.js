#! /usr/bin/env node
import inquirer from "inquirer";
let Balance = (50000);
let PinCode = (172295);
console.log(`Your current balance is ${Balance}`);
let inputPin = await inquirer.prompt([
    { name: "Digits",
        type: "number",
        message: "Please enter your pin code" }
]);
if (inputPin.Digits === PinCode) {
    console.log("Congratulations! your pin code is correct");
    let options = await inquirer.prompt([
        { name: "operation",
            type: "list",
            message: "What do you want Cash Withdraw, Check Balance or Fast Cash?",
            choices: ["Cash Withdraw", "Check Balance", "Fast Cash"] }
    ]);
    if (options.operation === "Cash Withdraw") {
        let amount = await inquirer.prompt([
            { name: "rupee",
                type: "number",
                message: "Enter your cash amount?" }
        ]);
        Balance -= amount.rupee;
        console.log(`Your remaining amount is ${Balance}`);
    }
    else if (options.operation === "Check Balance") {
        console.log(`Your balance is ${Balance}`);
    }
    else if (options.operation === "Fast Cash") {
        let que = await inquirer.prompt([
            { name: "amount",
                type: "list",
                message: "Choose a cash amount",
                choices: [1000, 5000, 10000] }
        ]);
        if (que.amount === 1000) {
            Balance -= que.amount;
            console.log(`Your remaining balance is ${Balance}`);
        }
        else if (que.amount === 5000) {
            Balance -= que.amount;
            console.log(`Your remaining balance is ${Balance}`);
        }
        else if (que.amount === 10000) {
            Balance -= que.amount;
            console.log(`Your remaining balance is ${Balance}`);
        }
    }
    else {
        console.log("PLease inter a valid value");
    }
}
else {
    console.log("Sorry! your pin code is not correct please try again");
}
