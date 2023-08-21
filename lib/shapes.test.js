const {Triangle, Square, Circle} = require("./shapes")

test('should', () => {

    const shape = new Triangle("blue", "SVG", "white");
    // shape.setColor("blue");
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">  
<polygon points="185,20 310,220 60, 220" fill="blue" />
<text x="185" y="155" font-size="60" text-anchor="middle" fill="white">SVG</text>   
</svg>`)
})

test('should', () => {

    const shape = new Square("red", "SVG", "white");
    shape.setColor("red");
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="red" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`)
})

test('should', () => {

    const shape = new Circle("green", "SVG", "white");
    shape.setColor("green");
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`)
})