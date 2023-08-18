

export class Shape{

    constructor(fill){
        
        this.fill = fill;
        this.text = text;


    }

    setColor(fill){

        this.fill = fill
    }

}

//This is where my circle section begins

export class Circle extends Shape {

    constructor(fill, radius){

        super(fill)
        this.radius = radius
       
    }

    render(){

        return `   <circle cx="150" cy="100" r="80" fill="${this.fill}" /> `
   
    }
    
}

//This is where my square section begins

export class Square extends Shape {

    constructor(fill){

        super(fill)

       
        
        
    }

    render(){

        return   ` rect width="100%" height="100%" fill="${this.fill}"/> `
   
    }
    
}

//This is where my triangle section begins

export class Triangle extends Shape {

    constructor(fill, text){

        super(fill, text)

    }

    render(){

        return ` <polygon points="185,20 310,220 60, 220" style="${this.fill}" /> `
   
    }
    
}