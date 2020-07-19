class Block {
constructor(x,y,height,angle) {
this.body=Bodies.rectangle(x,y,20,height);
World.add(world,this.body);
Matter.Body.setAngle(this.body,angle); 
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("red"); 
    rectMode(CENTER);
    rect( 0, 0, this.width, this.height);
    pop();

}
}