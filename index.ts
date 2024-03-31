import inquirer from "inquirer";

async function main() {
    let myBalance: number = 10000;
    const myPin: number = 2345;

    const pinAnswer = await inquirer.prompt([
        {
            name: "pinCode",
            message: "Enter your PIN number:",
            type: "number"
        }
    ]) as { pinCode: number };

    if (pinAnswer.pinCode === myPin) {
        console.log("Correct PIN code!");

        const actionAns = await inquirer.prompt([
            {
                name: "action",
                message: "Select an option:",
                type: "list",
                choices: ["withdraw", "check balance", "fastCash"]
            }
        ]) as { action: string };

        console.log(actionAns.action);

        if (actionAns.action === "withdraw") {
            const amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the withdrawal amount:",
                    type: "number"
                }
            ]) as { amount: number };

            console.log(amountAns.amount);

            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance!");
            } else {
                myBalance -= amountAns.amount;
                console.log(`Withdrawal successful. Your remaining balance is: ${myBalance}`);
            }

        } else if (actionAns.action === "fastCash") {
            const fastCashAns = await inquirer.prompt([
                {
                    name: "cash",
                    message: "Select cash:",
                    type: "list",
                    choices: ["1000", "5000", "3000", "9000"]
                }
            ]) as { cash: string };

            const cashAmount = parseInt(fastCashAns.cash);
            if (cashAmount > myBalance) {
                console.log("Insufficient balance!");
            } else {
                myBalance -= cashAmount;
                console.log(`FastCash successful. Your remaining balance is: ${myBalance}`);
            }

        } else if (actionAns.action === "check balance") {
            console.log(`Your balance is: ${myBalance}`);
        }

    } else {
        console.log("Incorrect PIN code!");
    }
}

main();
