#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}
async function welcome(){
    let welcomeText = chalkAnimation.neon("Salik Calculator: Welcome EveryOne");
    await sleep();
    welcomeText.stop();

}
await welcome();

async function askQuestions(){
    const answer= await inquirer
   .prompt([
     {
         type:"list",
         name:"operator",
         message:"Select operation to be performed \n",
         choices:["Add","Sub","Multi","Div"]
     },
     {
         type:"number",
         name:"fNum",
         message:"Enter first number:"
     },
     {
         type:"number",
         name:"sNum",
         message:"Enter second number:"
     }
   ]);

    if(answer.operator == "Add"){
        console.log(`${answer.fNum} + ${answer.sNum} = ${answer.fNum + answer.sNum}`); 
    }
    else 
    if(answer.operator == "Sub"){
        console.log(`${answer.fNum} + ${answer.sNum} = ${answer.fNum - answer.sNum}`); 
    }else 
    if(answer.operator == "Div"){
        console.log(`${answer.fNum} + ${answer.sNum} = ${answer.fNum / answer.sNum}`); 
    }else if(answer.operator == "Multi"){
        console.log(`${answer.fNum} + ${answer.sNum} = ${answer.fNum * answer.sNum}`); 
    }
};

async function startAgain(){
    do{
        await askQuestions();
        var again= await inquirer.
        prompt({
            type:"input",
            name:"restart",
            message:" Do you want to continue again? Press yes or no:"
        })
    }
    while(again.restart =='y'|| again.restart=='Y'||again.restart=='yes'||again.restart=='Yes')
}
startAgain();