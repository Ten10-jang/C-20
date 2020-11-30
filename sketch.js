function setup(){
    createCanvas(800,400);
   // createSprite(400, 200, 50, 50);
    fixedrectangle = createSprite(100,150,30,60);
     movingrectangle = createSprite(150,150,30,30);
      fixedrectangle.shapeColor= "green"; 
      movingrectangle.shapeColor="green";
     }
       function draw() {
          background(255,255,255);
           movingrectangle.x=mouseX;
            movingrectangle.y=mouseY;
             console.log(movingrectangle.x);
              if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2)
              { 
                fixedrectangle.shapeColor= "red";
               movingrectangle.shapeColor="red"; 
              } 
               else
               { 
                 fixedrectangle.shapeColor= "green";
                  movingrectangle.shapeColor="green";
                 } 
                 drawSprites(); 
                }