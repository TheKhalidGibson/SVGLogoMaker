const {Triangle, Square, Circle} = require("./shapes")

test('should', () => {

    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="185,20 310,220 60, 220" style="fill:blue" />')
})

test('should', () => {

    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="red" />')
})

test('should', () => {

    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />')
})