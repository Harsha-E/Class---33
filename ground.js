class ground{
    constructor(x, y, width, height){
         this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
         this.width = width;
         this.height = height;
         World.add(qwerty, this.body);
         
     }
     display(){

         rectMode(CENTER);
         strokeWeight(0);
         stroke(40);
         fill(128, 32, 0);
         rect(this.body.position.x, this.body.position.y, this.width,this.height);
 
     }
     
 }