// let pokemonid = int (random(1, 3)); 
// let pkmDes = 'https://pokeapi.co/api/v2/characteristic/' + String(pokemonid);
// let pkmapi = 'https://pokeapi.co/api/v2/pokemon/'  + String(pokemonid);

let pkmDes = 'https://pokeapi.co/api/v2/characteristic/';
let pkmapi = 'https://pokeapi.co/api/v2/pokemon/' ;


let pkmd;
let pkm; 
let pkmWeight;

let weight;

let weights = [];

let ypos = 140;
let xpos = 20;

async function getpkm(){
  let pokemonid = int (random(1, 30));

  let data = await fetch(pkmDes + String(pokemonid));
  let pdata = await fetch(pkmapi  + String(pokemonid));
  let jdata = await data.json();
  let pkmdata = await pdata.json();
  pkmd = jdata.descriptions[7].description;
  
  pkmName = pkmdata.name;
  pkmWeight = pkmdata.weight;
}


function setup() {
  createCanvas(400, 400);
  
  getpkm();

  weight = loadImage("assets/weight.png");

  // for (let i = 0 ; i < int(pkmWeight); i++){
  //   weights[i] = new we(20, 250);
  // }

  we();

  pokemonid = random(0,150); 
}

function draw() {
  background(255);
  textSize(40);

  text(pkmName, 20, 50);

  textSize(28);
  text("\"" + pkmd + "\"", 20, 100);

  textSize(16);
  text("how heavy this pokemon is:", 20, 130);

  // for (let j = 0 ; j < int(pkmWeight); j++){
  //   // wei.jitter();
  //   weights[j].display();
  // }

  
  // image(weight, 20, 20);
  we();
}
  

function we(){
  let ypos = 140;
  let xpos = 20;

  

  for (let i = 0 ; i < int(pkmWeight); i++){
    image(weight, xpos, ypos);
    ypos += (10);
    if (ypos > 360){
      ypos = 140;
      xpos += 70;
    }


  //   // if (i > 0 && i < 10){
  //   //   image(weight, 20, 140 + (i * 20));
  //   // } 
  //   // else if (i > 10){
  //   //   image(weight, 110, 140 + ((i-10) * 20));
  //   // }
  //   // image(weight, 20, 140 + (i*10));
  }
}
// class we {
//   constructor(x, y){
//     this.x = x; 
//     this.y = y; 

//     // this.weight = loadImage("assets/weight.png");
//   }

//   jitter(){
//     this.x += random(0, 5);
//     this.y += random(0,5);
//   }

//   display(){
//     // image(this.weight, this.x, this.y);
//     textSize(40);
//     text(pkmName, this.x , this.y);
//   }
// }