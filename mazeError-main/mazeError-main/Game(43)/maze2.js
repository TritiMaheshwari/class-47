class Maze2{
    constructor(){

      player2 = createSprite(20,380,10,10);
        player2.shapeColor = "yellow";

        wall11 = createSprite(70,50,10,200);
          wall11.shapeColor = "blue";
      
          wall12 = createSprite(50,230,10,70);
          wall12.shapeColor = "blue";
      
          wall13 = createSprite(35,320,160,10);
          wall13.shapeColor = "blue";
      
          wall14 = createSprite(200,40,200,10);
          wall14.shapeColor = "blue";
      
          wall15 = createSprite(165,183,80,10);
          wall15.shapeColor = "blue";
      
          wall16 = createSprite(180,340,10,155);
          wall16.shapeColor = "blue";
      
          wall17 = createSprite(260,210,10,200);
          wall17.shapeColor = "blue";
      
          wall18 = createSprite(325,135,50,10);
          wall18.shapeColor = "blue";
      
          wall19 = createSprite(340,260,10,80);
          wall19.shapeColor = "blue";
      
          wall20 = createSprite(360,320,80,10);
          wall20.shapeColor = "blue";
      
          end2 = createSprite(395,5,5,5);
          end2.shapeColor = "red";

          maze2wall = new Group();
          maze2wall.add(wall11);
          maze2wall.add(wall12);
          maze2wall.add(wall13);
          maze2wall.add(wall14);
          maze2wall.add(wall15);
          maze2wall.add(wall16);
          maze2wall.add(wall17);
          maze2wall.add(wall18);
          maze2wall.add(wall19);
          maze2wall.add(wall20);
          maze2wall.add(end2);
          maze2wall.add(player2);

    }
    display(){
        drawSprites(maze2wall);
    }
    destroy(){
    maze2wall.destroyEach();
      
    }
}