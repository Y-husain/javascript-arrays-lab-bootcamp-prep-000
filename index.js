const app = "I don't do much."


function kittens(){
  return ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeFirstKitten() {
  return kittens.shift()
}

function removeLastKitten(){
  return kittens.pop()
}
