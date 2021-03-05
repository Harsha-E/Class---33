class pig extends base{
    constructor(x, y){
        super(x, y, 40, 40);
        this.visibility = 255;
        this.image = loadImage('images/enemy.png');

     }

     display()
     {
        
         if(this.body.speed < 3){

        super.display();
    
     }

        else{
            
            World.remove(qwerty , this.body);

            push();

            this.visibility = this.visibility - 5;

            tint(255, this.visibility);

            image(this.image, this.body.position.x, this.body.position.y, 40, 40)

            pop();
            
        }
    
    } 
     
    score(){
        if(this.visibility < 0 && this.visibility > -1005){
            score++;
        }
    }

}