

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