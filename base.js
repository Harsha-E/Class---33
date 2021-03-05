class base {
    constructor(x, y, width, height){
        var options = {
            restitution : 0.8 ,
            friction : 0.9,
            density : 1,

        }
        this.body = Bodies.rectangle(x, y, width, height , options);
        this.width = width;
        this.height = height;
        World.add(qwerty, this.body);

        this.image = loadImage('images/wood1.png');

    }

    display(){

        var angle = this.body.angle;

        push();
        
        translate(this.body.position.x , this.body.position.y);
        rotate(angle);
        
        imageMode(CENTER);
        strokeWeight(3);
        stroke(225);
        fill(102, 102, 255);
        image(this.image , 0 ,0 , this.width,this.height);
        pop();

    }

}