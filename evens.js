// function isEven(x){
//   if (x %2==0) {
//     return(true);
//   }
//   else {
//     return(false);
//   }
// }


function isEven(n){
  if(n == 1){
    return(false);
  }
  else if (n == 0) {
    return(true);
  }
  else if (n < 0) {
    return (isEven(-1*n));
  }
  else {
    return (isEven(n-2));
  }
}
