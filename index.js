var numberOfDrumsButtons = document.querySelectorAll(".drum").length;





const audios = {
    "w": new Audio("sounds/Godspeed.mp3"),
    "a": new Audio("sounds/Chanel.mp3"),
    "s": new Audio("sounds/In My Room.mp3"),
    "d": new Audio("sounds/Ivy.mp3"),
    "j": new Audio("sounds/Frank Ocean - Pink  White.mp3"),
    "k": new Audio("sounds/Thinkin Bout You.mp3"),

    "l": new Audio("sounds/White Ferrari - Frank Ocean  (music video).mp3")

}

for (var i = 0; i < numberOfDrumsButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //basically we need to figure out which button
        //triggered the event
        var buttonInnerHTML = this.innerHTML;

        const currentAudio = audios[buttonInnerHTML]
        if (currentAudio.paused) {
            currentAudio.play();
        }
        else {
            currentAudio.pause()
        }




    })
}
//for keyboard press
// Define an object that maps keys to audio elements
const audioElements = {
 "w": new Audio("sounds/Godspeed.mp3"),
    "a": new Audio("sounds/Chanel.mp3"),
    "s": new Audio("sounds/In My Room.mp3"),
    "d": new Audio("sounds/Ivy.mp3"),
    "j": new Audio("sounds/Frank Ocean - Pink  White.mp3"),
    "k": new Audio("sounds/Thinkin Bout You.mp3"),

    "l": new Audio("sounds/White Ferrari - Frank Ocean  (music video).mp3")
};

// Add event listener for keydown events
document.addEventListener("keydown", function(event) {
  // Get the key pressed
  const key = event.key;
  
  // Check if the key corresponds to an audio element
  if (audioElements.hasOwnProperty(key)) {
    // Get the audio element for the key
    const audio = audioElements[key];
    
    // If the audio is currently playing, pause it
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      // Otherwise, play the audio
      audio.play();
    }
  }
});







//TO ADD: on click play sounds
//function makeSound(event){
//    let key=event.key;
//   document.querySelectorAll(".drum").innerHTML="The key was: " + key;
//}

/*document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
  
  });
  
  
  function makeSound(key) {

  

  
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/Godspeed.mp3");
        tom1.play();
        break;
  
      case "a":
        var tom2 = new Audio("sounds/Chanel.mp3");
        tom2.play();
        break;
  
      case "s":
        var tom3 = new Audio("sounds/In My Room.mp3");
        tom3.play();
        break;
  
      case "d":
        var tom4 = new Audio("sounds/Ivy.mp3");
        tom4.play();
        break;
  
      case "j":
        var snare = new Audio("sounds/Frank Ocean - Pink  White.mp3");
        snare.play();
        break;
  
      case "k":
        var crash = new Audio("sounds/Thinkin Bout You.mp3");
        crash.play();
        break;
  
      case "l":
        var kick = new Audio("sounds/White Ferrari - Frank Ocean  (music video).mp3");
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }
*/