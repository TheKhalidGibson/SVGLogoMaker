

class Shape{

    constructor(fill = "green", width = "300", height = "200"){
        
        this.fill = fill;
        this.width = width;
        this.height = height;


    }





}

//This is where my circle section begins

class Circle extends Shape {

    constructor(fill, radius, width, height){

        super(fill, width, height)
        this.radius = radius
    }

    render(){

        return `  <circle cx="150" cy="100" r="80" fill="${this.fill}"/> `
   
    }
    
}

//This is where my square section begins

class Square extends Shape {

    constructor(fill, width, height){

        super(fill, width, height)
        
        
    }

    render(){

        return   ` <rect width="100%" height="100%" fill="${this.fill}"/> `
   
    }
    
}

//This is where my triangle section begins

class Triangle extends Shape {

    constructor(fill, width, height){

        super(fill, width, height)

    }

    render(){

        return ` <polygon points="185,20 310,220 60, 220" style="${this.fill}" /> `
   
    }
    
}