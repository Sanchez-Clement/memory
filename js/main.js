var card = ["img/image1.jpeg", "img/image1.jpeg", "img/image2.jpeg", "img/image2.jpeg", "img/image3.jpeg", "img/image3.jpeg", "img/image4.jpeg", "img/image4.jpeg", "img/image5.jpeg", "img/image5.jpeg", "img/image6.jpeg", "img/image6.jpeg", "img/image7.jpeg", "img/image7.jpeg"];

var restant = [];
var essai = 0;
var secondes = 0;
var clicStop = 0;
var stopChrono;



/**
 * shuffleArray - random in the array card
 *
 * @param  {type} card an array with all the src
 * @return {type}      card in order random
 */
function shuffleArray(card) {
  for (var i = card.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = card[i];
    card[i] = card[j];
    card[j] = temp;
  }
  return card;
}



/**
 * temps - chrono in secondes
 *
 * @return {type}  no return
 */
function temps() {
  secondes++;
  document.getElementById("temps").innerHTML = "Temps :" + secondes;
}



/**
 * lancerJeu - To launch the game
 *
 * @return {type}  no return
 */
function lancerJeu() {
  document.getElementById("temps").innerHTML = "Temps :" + secondes;
  document.getElementById("carte").style.display = "flex";
  document.getElementById("go").style.display = "none";
  document.getElementById("cerveau").style.display = "none";
  stopChrono = setInterval(temps, 1000);
  essai = 0;
  document.getElementById("essais").innerHTML = "Nombre d'essai : " + essai;
  secondes = 0;
}

// function bonbon() {
// play(this);
// }
shuffleArray(card);
var choices = [];
for (var i = 0; i < card.length; i++) {

  document.getElementsByTagName("img")[i].src = card[i];;

}



/**
 * play - push the choices in an array and compare the two choices
 *
 * @param  {type} img it's one of the 14 cards
 * @return {type}     no return
 */
function play(img) {


  if (img.classList == "retournes" && clicStop == 0) {

    img.classList.remove("retournes");

    choices.push(img);
    console.log(choices);

    if (choices.length == 2) {
      if (choices[0].src == choices[1].src) {
        console.log("bien joue");
        choices[0].onclick = "";
        choices[1].onclick = "";
        choices = [];
      } else {

        essai++;
        clicStop++;
        document.getElementById("essais").innerHTML = "Nombre d'essai : " + essai;
        setTimeout(function() {
          choices[0].classList.add("retournes");
          choices[1].classList.add("retournes");
          choices = [];
          clicStop = 0;
        }, 800);


      }

      restant = document.getElementsByClassName("retournes");
      console.log(restant);
      if (restant.length == 0) {
        alert("gagne ! " + "Tu as mis " + secondes + " secondes et " + essai + " essais !");
        clearInterval(stopChrono);


      }
    }
  }
}
