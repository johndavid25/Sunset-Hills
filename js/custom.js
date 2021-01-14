document.getElementById("buildingSolution").addEventListener("click", sunset);
document.getElementById("clear").addEventListener("click", clear);


function sunset() {
  let building1 = parseInt(document.getElementById("building1").value);
  let building2 = parseInt(document.getElementById("building2").value);
  let building3 = parseInt(document.getElementById("building3").value);
  let building4 = parseInt(document.getElementById("building4").value);
  let building5 = parseInt(document.getElementById("building5").value);

  let userArray = new Array();
  userArray.push(building1);
  userArray.push(building2);
  userArray.push(building3);
  userArray.push(building4);
  userArray.push(building5);

  let maxHeight = userArray[0];
  let ascendingArray = new Array();
  ascendingArray.push(maxHeight);

  for (let loop = 1; loop < userArray.length; loop++) {
    if (userArray[loop] > maxHeight) {
      maxHeight = userArray[loop];
      ascendingArray.push(maxHeight);
    }
  }

  document.getElementById("output").innerText = `The buildings that will see the sunset are [${ascendingArray.join(", ")}]`;
}



function clear() {
    document.getElementById("building1").value = "";
    document.getElementById("building2").value = "";
    document.getElementById("building3").value = "";
    document.getElementById("building4").value = "";
    document.getElementById("building5").value = "";
    document.getElementById("output").innerText = "";
}