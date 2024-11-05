/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let beginning = "A ";
  let adjectives = [
    "three-eyed ",
    "gigantic ",
    "hyperactive ",
    "invisible ",
    "confused ",
    "mutant ",
    "bouncy ",
    "whistling ",
    "giggling "
  ];
  let creatures = [
    "clown ",
    "pirate ",
    "chicken ",
    "penguin ",
    "cactus ",
    "zombie ",
    "wizard ",
    "pickle ",
    "panda "
  ];
  let actions = [
    "juggled my ",
    "licked my ",
    "buried my ",
    "teleported my ",
    "painted my ",
    "exploded my ",
    "shrunk my ",
    "hid my "
  ];
  let items = [
    "socks ",
    "toothbrush ",
    "rubber duck ",
    "banana ",
    "laptop ",
    "helmet ",
    "dinner ",
    "iphone ",
    "car "
  ];
  let locations = [
    "in a hole",
    "under my bed",
    "at the river",
    "on a rollercoaster",
    "in outer space",
    "at the beach",
    "inside an elephant's butt",
    "at grandma's house"
  ];

  let randomAdjective = Math.floor(Math.random() * adjectives.length);
  let randomCreature = Math.floor(Math.random() * creatures.length);
  let randomAction = Math.floor(Math.random() * actions.length);
  let randomItem = Math.floor(Math.random() * items.length);
  let randomLocation = Math.floor(Math.random() * locations.length);

  document.querySelector("#excuse").innerHTML =
    beginning +
    adjectives[randomAdjective] +
    creatures[randomCreature] +
    actions[randomAction] +
    items[randomItem] +
    locations[randomLocation];
};
