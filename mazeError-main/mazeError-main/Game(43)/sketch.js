var player;
var player2;
var guard1, guard2;
var canvas;
var square1,square2,square3,square4;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,end1;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,end2;
var level = 0;
var maze2wall;
var maze1wall;

var maze1Obj,maze2Obj;

function preload(){
  player = loadImage("images/player1.png");
  guard1 = loadImage("images/guard1.png");
  guard2 = loadImage("images/guard2.png");
  
}

function setup(){
  canvas = createCanvas(400,400);
 // canvas.style = "position:absolute;top:0px;bottom:0px;right:0px;left:0px;border:solid;border-color:black";
  // square1 = rect(10,800,width/3,height/3)

 // maze1Obj. = createSprite(20,380,10,10);
  //maze1Obj..shapeColor = "red";

  guard1 = createSprite(380,20,10,10);
  guard1.shapeColor = "green";

  
   // maze1Obj=new Maze1();
   //maze2Obj=new Maze2();
}
function draw(){
  background("white");
  text(mouseX+", "+mouseY,mouseX,mouseY);

  

 edges = createEdgeSprites();



 //drawSprites(player);
 //drawSprites(end1);
 //drawSprites(end2);
 //drawSprites(guard1);


 
if(level===0){
  fill("red")
  text("press enter to start",100,100)
}
  if(keyDown(ENTER) && level===0){
    
    level=1;
  }

  if(level===1){ 
    maze1Obj = new Maze1();
    maze1Obj.display();

    if(keyDown(UP_ARROW)){
      maze1Obj.player.position.y -= 5;
    }
    if(keyDown(DOWN_ARROW)){
      maze1Obj.player.position.y +=5;
    }
    if(keyDown(RIGHT_ARROW)){
      maze1Obj.player.position.x +=5;
    }
    if(keyDown(LEFT_ARROW)){
      maze1Obj.player.position.x -=5;
    } 
    console.log(maze1Obj);
    maze1Obj.player.bounceOff(edges[0]);
    maze1Obj.player.bounceOff(edges[1]);
    maze1Obj.player.bounceOff(edges[2]);
    maze1Obj.player.bounceOff(edges[3]);
  

  maze1Obj.player.bounceOff(wall1);
    maze1Obj.player.bounceOff(wall2);
    maze1Obj.player.bounceOff(wall3);
    maze1Obj.player.bounceOff(wall4);
    maze1Obj.player.bounceOff(wall5);
    maze1Obj.player.bounceOff(wall6);
    maze1Obj.player.bounceOff(wall7);
    maze1Obj.player.bounceOff(wall8);
    maze1Obj.player.bounceOff(wall9);
    maze1Obj.player.bounceOff(wall10);


    
 // drawSprites();
    // end1 = createSprite(395,5,5,5);
    // end1.shapeColor = "red";

    if(maze1Obj.player.x>=395 && maze1Obj.player.y<=5 && level===1){
    
      console.log(level);
      level=2;
     // maze1Obj.destroy();
      maze1wall.destroyEach(); 
      //end1.destroy() 
     // maze1Obj.player.position.x=20;
      //maze1Obj.player.position.y=380
      console.log("end level 1 ")
     
      //console.log("end");
     // console.log(wall2);

     //maze1Obj.player2 = createSprite(20,380,10,10);
     //maze1Obj.player2.shapeColor = "yellow";

     drawSprites(maze1Obj.player);
     drawSprites(end1);
     drawSprites(end2);
     drawSprites(guard1);
     

    }
  }
 
  
  
     if(level===2){

     // drawSprites(maze1Obj.player2);
     
      maze2Obj=new Maze2();

       maze2Obj.display();
  

    maze1Obj.player.bounceOff(wall11);
    maze1Obj.player.bounceOff(wall12);
    maze1Obj.player.bounceOff(wall13);
    maze1Obj.player.bounceOff(wall14);
    maze1Obj.player.bounceOff(wall15);
    maze1Obj.player.bounceOff(wall16);
    maze1Obj.player.bounceOff(wall17);
    maze1Obj.player.bounceOff(wall18);
    maze1Obj.player.bounceOff(wall19);
    maze1Obj.player.bounceOff(wall20);

     if(maze1Obj.player.x>=395 && maze1Obj.player.y<=5){
      level = 3;
      maze2wall.destroyEach();
//maze2Obj.destroy();
console.log("maze2 destroy")
clear ()





}
  
   }
   
  
 



//drawSprites();

}


