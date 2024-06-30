import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\tWelcome to Ahzam - Currency Converter\n"));
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    YEN: 0.0062,
    Dirham: 0.27,
    Riyal: 0.27,
};
let userans = await inquirer.prompt([
    {
        name: "from",
        message: chalk.cyanBright("Enter Your Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "YEN", "Dirham", "Riyal"]
    },
    {
        name: "to",
        message: chalk.cyanBright("\nEnter Other Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "YEN", "Dirham", "Riyal"]
    },
    {
        name: "amount",
        message: chalk.yellow("Enter Your amount"),
        type: "number",
    }
]);
let fromamount = currency[userans.from];
let toamount = currency[userans.to];
let amount = userans.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(Math.round(convertedamount));
