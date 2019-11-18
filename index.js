function selectSoundToPlay(option) {
  let soundPath;
  switch(option){
    case 'w':
      soundPath = `sounds/tom-0.mp3`;
      break;
    case 'a':
      soundPath = `sounds/tom-1.mp3`;
      break;
    case 's':
      soundPath = `sounds/tom-2.mp3`;
      break;
    case 'd':
      soundPath = `sounds/tom-3.mp3`;
      break;
    case 'j':
      soundPath = `sounds/tom-4.mp3`;
      break;
    case 'k':
      soundPath = `sounds/tom-5.mp3`;
      break;
    case 'l':
      soundPath = `sounds/tom-6.mp3`;
      break;
  }
  return soundPath;
}

function playSound(soundPath) {
  let audio = new Audio(soundPath);
  audio.play();
}

function buttonAnimation(evt) {
  let currentButton = document.querySelector("." + evt);
  currentButton.classList.add("pressed");
  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 100);
}

document.addEventListener("keydown", (e) => {
  const path = selectSoundToPlay(e.key);
  buttonAnimation(e.key);
  playSound(path);
});

const numberOfButtons = document.querySelectorAll(".drum").length;

for(let i=0; i < numberOfButtons; i++) {
    let curbutton = document.querySelectorAll(".drum")[i];
    let path = selectSoundToPlay(curbutton.innerText);
    curbutton.addEventListener("click", function () {
      buttonAnimation(curbutton.innerText);
      playSound(path);
    });
}
