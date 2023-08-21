

class Shape{

    constructor(fill, text, textFill){
        
        this.fill = fill;
        this.text = text;
        this.textFill = textFill;
        


    }

    setColor(fill){

        this.fill = fill;
    }

}

//This is where my circle section begins

class Circle extends Shape {

    constructor(fill, text, textFill){

        super(fill, text, textFill)
        
        
       
    }

    render(){

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.fill}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
</svg>`
   
    }
    
}

//This is where my square section begins

class Square extends Shape {

    constructor(fill, text, textFill){

        super(fill, text, textFill)

       
        
        
    }

    render(){

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="${this.fill}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
</svg>`
   
    }
    
}

//This is where my triangle section begins

class Triangle extends Shape {

    constructor(fill, text, textFill){

        super(fill, text, textFill)

    }

    render(){

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">  
<polygon points="185,20 310,220 60, 220" fill="${this.fill}" />
<text x="185" y="155" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>   
</svg>`

    }
    
}

module.exports = {Square, Circle, Triangle }