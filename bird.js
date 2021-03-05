class bird extends base{
    
    constructor(x, y){

        super(x , y , 45, 45);
         
        this.image = loadImage('images/bird.png');
         
        this.image2 = loadImage('images/smoke.png');

        this.trajectory = [];

    }

     display(){

        /*
        
        this.body.position.x = mouseX;
        
        this.body.position.y = mouseY;
        
        */
        
        super.display();

        if(this.body.velocity.x > 10 && this.body.position.x > 195){

        var position  = [this.body.position.x, this.body.position.y];
        
        this.trajectory.push(position);
        
    }

        for(var i = 0; i < this.trajectory.length; i++ ){
            
            image(this.image2, this.trajectory[i][0], this.trajectory[i][1] );

        }

        
    
    }
     
 }