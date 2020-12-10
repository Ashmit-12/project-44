class Maze{
    constructor(){

    }

    initialize(){
        fill("white");

        //Outer Walls of Maze
        wall1 = createSprite(width/2,40,width-100,2);
        wall2 = createSprite(width/2,height-40,width-100,2);
        wall3=createSprite(50,height/2,2,height-80);
        wall4=createSprite(width-50,height/2,2,height-80);
        
        //Inner walls of Maze
        wall5 = createSprite(width/2,100,width-175,2);
        wall6 = createSprite(385,height-100,600,2);
        wall7=createSprite(90,height/2,2,height-200);
        wall15=createSprite(1130,height-100,630,2);
        wall8=createSprite(width-90,height/2,2,height-200);

        //InterWalls of Maze Middle to right side
        wall9=createSprite(200,100,10,10);
        wall10=createSprite(width/2,125,2,50);
        wall11=createSprite(width/2+75,150,150,2);
        wall12=createSprite(width/2+50,250,2,200);
        wall13=createSprite(width/2+150,175,2,50);
        wall14=createSprite(width/2+175,200,2,50); //final till here
        wall15=createSprite(width/2+175,150,50,2);
        wall16=createSprite(width/2,250,180,2);
        wall17=createSprite(width/2+100,350,80,2);
        wall18=createSprite(width/2+175,275,50,2);
        wall19=createSprite(width/2+175,350,50,2);







        //left side
        wall20=createSprite(120,220,55,2);
        wall21=createSprite(120,330,55,2);
    }
}