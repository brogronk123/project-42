const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var maxDrops = 100;
var drops = [];
var thunder;
var thunderCreatedFrame = 0;
function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200,200);
    if(frameCount%150===0) {
        for(var i = 0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
    
}

function draw(){
    background("black");
    Engine.update(engine);
    var number = Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10,10);
        switch(number){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;
        }
        thunder.scale = random(0.3,0.6);
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){ 
        thunder.destroy(); 
    }
    umbrella.display();
    //displaying rain drops 
    for(var i = 0; i<maxDrops; i++){ 
        drops[i].showDrop(); 
        drops[i].updateY(); 
    }
    
    drawSprites();
}   