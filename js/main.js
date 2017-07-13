var card =["img/image1.jpeg","img/image1.jpeg","img/image2.jpeg","img/image2.jpeg","img/image3.jpeg","img/image3.jpeg","img/image4.jpeg","img/image4.jpeg","img/image5.jpeg","img/image5.jpeg","img/image6.jpeg","img/image6.jpeg","img/image7.jpeg","img/image7.jpeg"];
console.log(card);
var restant=[];
var essai = 0;
var secondes = 0;

function shuffleArray(card) {
    for (var i = card.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = card[i];
        card[i] = card[j];
        card[j] = temp;
    }
    return card;
}


shuffleArray(card);
var choices = [];
for (var i = 0; i < card.length; i++) {

  document.getElementsByTagName("img")[i].src = card[i] ;
;

}

function temps(){
  secondes ++;
  document.getElementById("temps").innerHTML= "Temps :" + secondes;
}
var stopChrono = setInterval(temps, 1000);


// function bonbon() {
// play(this);
// }

function play(img) {

  console.log(img.classList=="retournes");
  if (img.classList=="retournes") {

  img.classList.remove("retournes");

choices.push(img);
console.log(choices);
// console.log(choices[0]);
// choices[0].onclick="";
// choices[0].removeEventListener("click",bonbon;
// console.log(choices[0]);
// choices[0].addEventListener("click",function() {});
// choices[0].addEventListener("click",function() {console.log("tri")});
if (choices.length == 2 ) {
  if (choices[0].src == choices[1].src) {
    console.log("bien joue");
choices[0].onclick ="";
choices[1].onclick ="";
    choices = [];
  } else {
// choices[0].onclick="bonbon"
// choices[0].addEventListener("click",bonbon());
    // addEventListener("click",function() {play(this);});
    // .onclick ="play(img)";
    essai ++
    document.getElementById("essais").innerHTML = "Nombre d'essai : " + essai;
    setTimeout (function() {choices[0].classList.add("retournes");
    choices[1].classList.add("retournes");choices = [];},800);


  }

  restant = document.getElementsByClassName("retournes");
  console.log(restant);
  if(restant.length == 0) {
    alert("gagne");
      clearInterval(stopChrono);
  }
}
}
}
