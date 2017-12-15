
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
    var initArray = ["Tuula","Steph","Me"];
    initArray.forEach(callback)
    debugger;
    return initArray;
}
