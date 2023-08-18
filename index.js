import inquirer from "inquirer";
import fs from "fs/promises";

const fs = require("fs")
let SVG = require("./lib/svg")

let example = new SVG("AND", "green", "triangle", "yellow");

let {fill, shape, logo} = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'fill',
        message: "What color would you like the svg fill to be?",
        choices: ['Green', 'Blue', 'Red', 'Yellow', 'Orange', 'Pink']
      },
      {
        type: 'list',
        name: 'shape',
        message: "What shape would you like the svg to be?",
        choices: ['square', 'circle', 'triangle']
      },
      {
        type: 'input',
        name: 'logo',
        message: "What logo would you like for the svg? Up to 3 characters",
      },
     ])




fs.writeFile("shape.svg", example.markUp, function(err){

    if(err)
    console.log(err)
})