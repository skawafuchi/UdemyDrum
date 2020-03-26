const sounds = {
  "crash": new Audio("sounds/crash.mp3"),
  "kick-bass": new Audio("sounds/kick-bass.mp3"),
  "snare": new Audio("sounds/snare.mp3"),
  "tom-1": new Audio("sounds/tom-1.mp3"),
  "tom-2": new Audio("sounds/tom-2.mp3"),
  "tom-3": new Audio("sounds/tom-3.mp3"),
  "tom-4": new Audio("sounds/tom-4.mp3")
};

function activateButton(button) {
  document.querySelector("#" + button).classList.add("pressed");
  setTimeout(function(){document.querySelector("#" + button).classList.remove("pressed");},100);
  sounds[button].pause();
  sounds[button].currentTime = 0;
  sounds[button].play();
}

function bindAction(e) {
  if (checkSource(e, "KeyW", "crash")) {
    activateButton("crash");
  } else if (checkSource(e, "KeyA", "kick-bass")) {
    activateButton("kick-bass");
  } else if (checkSource(e, "KeyS", "snare")) {
    activateButton("snare");
  } else if (checkSource(e, "KeyD", "tom-1")) {
    activateButton("tom-1");
  } else if (checkSource(e, "KeyJ", "tom-2")) {
    activateButton("tom-2");
  } else if (checkSource(e, "KeyK", "tom-3")) {
    activateButton("tom-3");
  } else if (checkSource(e, "KeyL", "tom-4")) {
    activateButton("tom-4");
  }
}

function checkSource(source, key, name) {
  return ((source instanceof KeyboardEvent && source.code === key) || (source instanceof MouseEvent && source.srcElement.id === name));
}

document.addEventListener("keyup", bindAction);
var buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", bindAction);
}
