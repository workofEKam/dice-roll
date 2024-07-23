var luck1 ;
var luck2 ;
function luck(){
    return Math.floor(Math.random() * 6) + 1;
}
luck1 = luck();
luck2 = luck();
console.log(luck1);
const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  ];
  
  document.querySelector("img.img1").setAttribute("src", diceImages[luck1 - 1]);
  document.querySelector("img.img2").setAttribute("src", diceImages[luck2 - 1]);
if(luck1!==luck2){
    if(luck1>luck2){
        document.querySelector("h1").textContent="PLAYER  1 WINS";
    }
    else{  
        document.querySelector("h1").textContent="PLAYER  2 WINS";
    }
}
else{
    document.querySelector("h1").textContent="TIE";
}