const inquirer = require ("inquirer")
const fs = require ("fs/promises")

const {Circle, Square, Triangle} = require("./lib/shapes.js")
// let SVG = require("./lib/svg")

// let example = new SVG("AND", "green", "triangle", "yellow");

inquirer
    .prompt([
      {
        type: 'list',
        name: 'fill',
        message: "What color would you like the svg fill to be?",
        choices: ['Green', 'Blue', 'Red', 'Yellow', 'Orange', 'Pink']
      },
      {
        type: 'list',
        name: 'textFill',
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
        name: 'text',
        message: "What logo would you like for the svg? Up to 3 characters",
      },
     ])




     .then (function(data){
        console.log(data)
      
        let image = ""
        let fileName = ""
        if (data.shape === "square"){
          const square = new Square(data.fill. data.text, data.textFill)
          image = square.render()
          fileName = "./examples/square.svg"
        } else if (data.shape === "circle"){
          const circle = new Circle(data.fill, data.text, data.textFill)
          image = circle.render()
          fileName = "./examples/circle.svg"
        } else {
          const triangle = new Triangle(data.fill, data.text, data.textFill)
          image = triangle.render()
          fileName = "./examples/triangle.svg"

        }

        fs.writeFile(fileName, image, function(err){

            if(err)
            console.log(err)
        })

})
