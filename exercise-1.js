function upperCaser(input) {
    // SOLUTION GOES HERE
    if(typeof input !== "string") return console.log("Add strings, please!");
    return input.toUpperCase();
}

module.exports = upperCaser