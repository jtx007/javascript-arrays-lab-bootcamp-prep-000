const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name);
  //appends kitten to end of array
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  //prepends a kitten to beginning of array
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  //removes last kitten from array
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  //removes first kitten from array
}

function appendKitten(name) {
  var newArray = kittens.push(name);
  return newArray;

}
