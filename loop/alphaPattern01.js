
let n = 5;
  for(let i = 1; i<= n ;i++){
    for(let j= 0; j< i ; j++){
        process.stdout.write(String.fromCharCode( j + 65 ));  // 65 is the ASCII value or A ; 
    }
    console.log();
  }