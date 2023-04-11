import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
const greet = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function greeting() {
    let stopAnim = chalkAnimation.rainbow("Let's calculate");
    await greet();
    stopAnim.stop();
}
await greeting();
async function askQuestions() {
    await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "which operator do you want to use for your calculations",
            choices: ["add", "sub", "multi", "div"]
        },
        {
            type: "number",
            name: "num1",
            message: "enter number 1"
        },
        {
            type: "number",
            name: "num2",
            message: "enter number 2"
        }
    ])
        .then((ans) => {
        switch (ans.operator) {
            case "add":
                console.log(chalk.blueBright(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`));
                break;
            case "sub":
                console.log(chalk.green(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`));
                break;
            case "multi":
                console.log(chalk.yellowBright(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`));
                break;
            case "div":
                console.log(chalk.red(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`));
                break;
            default:
                break;
        }
    });
}
async function recall() {
    do {
        await askQuestions();
        var startNow = await inquirer
            .prompt([
            {
                type: "input",
                name: "startAgain",
                message: "Do you want to perform any more operation? y/n ?"
            }
        ]);
    } while (startNow.startAgain === "y" || startNow.startAgain === "Y");
}
recall();
