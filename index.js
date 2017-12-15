
function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
    var initArray = ["Tuula","Steph","Me"];
  initArray.forEach(callback)
}
