$(function(){
  loadImage();

  $("#cat").on("click", function() {
    guessCat();
    return false;
  })
  $("#dog").on("click", function() {
    guessDog();
    return false;
  })
});

var correctGuesses = 0;
var currentImage = 0;
var images = [
  {kind: "cat", src: "http://www.catsofaustralia.com/images/bengalphoto2.jpg" },
  {kind: "dog", src: "http://fc05.deviantart.net/fs42/f/2009/123/b/9/Fluffy_Puppy_by_Lorna_Ann8.jpg" },
  {kind: "dog", src: "http://freedogpics.com/wp-content/uploads/2014/10/golden-retriever-puppy-cutest-paw.jpg" },
  {kind: "cat", src: "http://dims.vetstreet.com/dims3/MMAH/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F31%2F1ba400a28511e087a80050568d634f%2Ffile%2FBengal-3-645mk062211.jpg" }
  ]

function loadImage(){
  if (images[currentImage] !== undefined) {
    $("#guessing-image").attr("src", images[currentImage].src)}
  else {
    completeGame();
  }
}

function guessCat() {
  if (images[currentImage].kind==="cat") {
    correctGuesses++;
  }
  $("#correct-guesses").text(correctGuesses);
  currentImage++;
  loadImage();
 }

function guessDog() {
  if (images[currentImage].kind==="dog") {
    correctGuesses++;
  }
  $("#correct-guesses").text(correctGuesses);
  currentImage++;
  loadImage();
 }

function completeGame() {
  window.alert("Congrats. You guessed correctly " + correctGuesses + " out of " + images.length + " times.")
 }
