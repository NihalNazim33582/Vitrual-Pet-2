//var database ;
const db = firebase.database();
var dog, happydDog, foodS, foodStock;
var stockbutton
var dogimg, happydogimg;
var food
var hour
var period = ""

function preload(){
  //load images here
  dogimg = loadImage("dogImg.png");
  dogimg2 = loadImage("dogImg1.png");
}

function setup() {
  food = new Food;
  food.getFS
  canvas = createCanvas(800, 800);
  dog = createSprite (displayWidth/2, DisplayHeight/2,1,1);
  dog.scale = 0.5;
  dog.addImage(dogimg, "dogimg"); 

  stockbutton = createButton("Add Stock");
  stockbutton.mousePressed(stock);
  stockbutton.position(100,100)
  
  feadbutton = createButton("Feed");
  feadbutton.mousePressed(feed);
  feadbutton.position(200,100)

} 
 

function draw() {  
  background(46, 139, 87);
  drawSprites();
  food.getFS();
  food.getLF();

  getFeedTime();
 /// foodStock = db.ref('Food');
 /// foodStock.on('value', readStock);
 noStroke();
 textSize(35)
 fill("blue")
  text("Food Remaing: "+ food.foodStock, 50, 120);
  
  text("Last Fed: "+ food.lastFed, 50, 80 )
  //text("Remember the Up arrow, will feed the dog.",50, 150);
  food.display();
// if(frameCount % 10 === 0){
   //  stock();
// }
}

//function readStock(data){
//    foodS = data.val();
//    //console.log("hello");
//}
function stock(){
  food.updateFS();
  
  console.log("Food Update")
}
function feed(){
  food.deductF();
  food.updateLF()
  if(hour > 12){
      period = "PM"
  }
  if(hour < 12){
      period = "AM"
  }
  console.log("Just feed")

}

//function writeStock(food){
//
//    firebase.database().ref("/").update({
//        Food: food
//    })
//}
async function getFeedTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  hour = datetime.slice(11,13);
  
  console.log(hour)
}