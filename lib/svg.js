

// let {fill, shape, logo} = await inquirer
//     .prompt([
//       {
//         type: 'list',
//         name: 'fill',
//         message: "What color would you like the svg fill to be?",
//         choices: ['Green', 'Blue', 'Red', 'Yellow', 'Orange', 'Pink']
//       },
//       {
//         type: 'list',
//         name: 'shape',
//         message: "What shape would you like the svg to be?",
//         choices: ['square', 'circle', 'triangle']
//       },
//       {
//         type: 'input',
//         name: 'logo',
//         message: "What logo would you like for the svg? Up to 3 characters",
//       },
//      ])
  class Svg{
  constructor(){
    this.fill = "";
    this.textFill = "";


  }

    render(){

      return  
    `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">


      <circle cx="150" cy="100" r="80" fill="${this.fill}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">SVG</text>

    </svg>`
    }
}

module.exports = Svg
 