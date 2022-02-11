var cat, catImg, mouse, mouseImg;
var catImgMoving,  catImgFinal;
var mouseImgMoving, mouseImgFinal;
var garden, gardenImg;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse2.png");

    catImgMoving = loadAnimation("images/cat2.png", "images/cat3.png");  
    mouseImgMoving = loadAnimation("images/mouse2.png", "images/mouse3.png");

    catImgFinal = loadAnimation("images/cat4.png");
    mouseImgFinal = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870, 600);
    cat.addAnimation("catSlipping",catImg);
    cat.scale = 0.2;

    mouse = createSprite(300, 650);
    mouse.addAnimation("mouseSlipping",mouseImg);
    mouse.scale = 0.1;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

   if(cat.x - mouse.x < (cat.width - mouse.width)/2 ){
        cat.velocityX = 0;
        cat.addAnimation("catFinal", catImgFinal);
        cat.changeAnimation("catFinal");
        cat.x = 350;
        cat.scale = 0.2;


        mouse.addAnimation("mouseFinal", mouseImgFinal);
        mouse.changeAnimation("mouseFinal");
        mouse.scale = 0.1;
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImgMoving);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.addAnimation("catRunning", catImgMoving);
        cat.changeAnimation("catRunning");
        cat.velocityX = -5;
    }

}
