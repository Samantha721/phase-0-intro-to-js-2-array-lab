const cats = ["Milo", "Otis", 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat (name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}

function appendCat (name) {
    const newcats = cats.slice();
    newcats.push (name);
    return newcats;
}

function prependCat(name) {
    const hellocats = cats.slice();
    hellocats.unshift(name);
    return hellocats;
}

function removeLastCat() {
    const staycats = cats.slice();
    staycats.pop();
    return staycats;
}

function removeFirstCat () {
    const byecats = cats.slice();
    byecats.shift();
    return byecats;
}

