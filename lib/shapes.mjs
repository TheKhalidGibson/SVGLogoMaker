

export class Shape{

    constructor(fill = "green", width = "300", height = "200"){
        
        this.fill = fill;
        this.width = width;
        this.height = height;
        this.text = text;


    }





}

//This is where my circle section begins

export class Circle extends Shape {

    constructor(fill, radius, width, height, text, centerX, centerY){

        super(fill, width, height, text)
        this.radius = radius
        this.centerX = centerX
        this.centerY = centerY
    }

    render(){

        return `  <circle cx="${centerX}" cy="${centerY}" r="${this.radius}" fill="${this.fill}"/> `
   
    }
    
}

//This is where my square section begins

export class Square extends Shape {

    constructor(fill, width, height, text, widthPercentage, heightPercentage){

        super(fill, width, height, text)

        this.widthPercentage = widthPercentage
        this.heightPercentage = heightPercentage
        
        
    }

    render(){

        return   ` <rect width="${this.widthPercentage}" height="${this.heightPercentage}" fill="${this.fill}"/> `
   
    }
    
}

//This is where my triangle section begins

export class Triangle extends Shape {

    constructor(fill, width, height, text){

        super(fill, width, height, text)

    }

    render(){

        return ` <polygon points="185,20 310,220 60, 220" style="${this.fill}" /> `
   
    }
    
}