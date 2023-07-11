var sea,ship; 
var seaImg,shipImg; 
function preload(){ 
  seaImg = loadImage("sea.png");
   shipImg = loadAnimation("ship-1.png","ship-1.png", "ship-2.png","ship-1.png");
   }
   function setup(){ 
    createCanvas(400,400);
     background("blue");
      

      ship = createSprite(130,200,30,30); 
      ship.addAnimation("movingShip",shipImg);
      ship.scale =0,25;
     
      sea=createSprite(400,200);
      sea.addImage(seaImg);
      sea.velocityX = -5; 
      sea.scale=0.3; 

      } 
     function draw() { 
     background(0);
     if(sea.x < 0) {
      sea.x = sea.x + 200;
     }
      sea.velocityX = -3;
      drawSprites();
       }