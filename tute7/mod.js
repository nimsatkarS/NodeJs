console.log("This is the Mod.js");

function average(arr){
    let sum =0;
arr.forEach(element => {
    sum += element;
});
return sum / arr.length;
}

module.exports = {
    avg:average,
    name: "Sanket",
    repo: "Github"
}

module.exports.name = "Sanket";