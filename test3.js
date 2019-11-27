nSEW = function(input) {
    // Your code goes here
    var position = [0,0];
    var directions = input.split("");
    for (var i = 0; i < directions.length; i++){
      if (directions[i] === "N"){
        position[0] += 1;
      } else if (directions[i] === "S"){
        position[0] -= 1;
      } else if (directions[i] === "E") {
        position[1] += 1;
      } else if (directions[i] === "W") {
        position[1] -= 1;
      }
    }
    var distanceFromStart = Math.abs(position[0]) + Math.abs(position[1]);
    return distanceFromStart;
};


console.log(nSEW("SWN"));
console.log(nSEW("NNNW"));
