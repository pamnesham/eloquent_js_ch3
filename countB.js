
function countBs(stringy){
  counter = 0;
  for (var i = 0; i < stringy.length; i++) {
    if (stringy[i] ==="B") {
      counter+=1;
    }
  }
  return(counter);
}


function countChar(stringy, letter){
  counter = 0;
  for (var i = 0; i < stringy.length; i++) {
    if (stringy[i] === letter) {
      counter+=1;
    }
  }
  return(counter);
}
