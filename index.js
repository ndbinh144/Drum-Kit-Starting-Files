const sounds = new Map();
sounds.set("w", "sounds/tom-1.mp3");
sounds.set("a", "sounds/tom-2.mp3");
sounds.set("s", "sounds/tom-3.mp3");
sounds.set("d", "sounds/tom-4.mp3");
sounds.set("j", "sounds/snare.mp3");
sounds.set("k", "sounds/crash.mp3");
sounds.set("l", "sounds/kick-bass.mp3");

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

const drumButtons = document.querySelectorAll(".drum");

for (const button of drumButtons) {
  button.addEventListener("click", function () {
    makeSound(button.textContent);
  });
}

function makeSound(key) {
  const button = document.querySelector(`.${key}`);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200);
  const audio = new Audio(sounds.get(key));
  audio.play();
}
