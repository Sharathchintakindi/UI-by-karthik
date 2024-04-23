console.log("hello");

// let i =0;
// while(i<100){
//   console.log(i+1);
//   i++;
// }

// for(let j=0;j<100;j++){
//   console.log(j);
// }

for (let i = 0; i <= 100; i++) {
  if (isEven(i)) {
    console.log("Num is even:" + i);
  } else {
    console.log("Num is odd:" + i);
  }
}

console.log(1 % 2 == 0);

function isEven(i) {
  return i % 2 == 0;
}
