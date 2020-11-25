//Create variables here`
var dog,dogpic, happyDog, happypic, database, foodS, foodStock;

function preload()
{
  //load images here
  dogpic=loadImage("dogImg1.png");
  happypic=loadImage("dogImg.png");
}


function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200)
  dog.addImage(dogpic);
  dog.scale=0.3;

  database=firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  drawSprites();
  stroke("black"); 
  text("Food remaining : "+foodS,170,200); 
  textSize(13); text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happypic);
    
  }


}

function readStock(data){
    foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

    database.ref('/').update({
      Food:x
    })
}



