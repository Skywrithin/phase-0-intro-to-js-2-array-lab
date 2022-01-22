// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
} 

function destructivelyPrependCat() {
    cats.unshift("Bob");
} 

function destructivelyRemoveLastCat() {
    cats.pop();
} 

function destructivelyRemoveFirstCat() {
    cats.shift();
} 

function appendCat(name)
{
    var newCats = [...cats];
    newCats.push(name)
    return newCats
}

function prependCat(name)
{
    var newCats = [...cats];
    newCats.unshift(name)
    return newCats
}

function removeLastCat(name)
{
    var newCats = [...cats];
    newCats.pop(name)
    return newCats
}

function removeFirstCat(name)
{
    var newCats = [...cats];
    newCats.shift(name)
    return newCats
}


