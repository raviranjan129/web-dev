let n = 5; 
for (let i = 1; i<= n ; i++){  // outer loop 
    for(let j = 1; j<= n-i; j++){ // inner loop to print space;
        process.stdout.write(" ");
        
    }
    for(let k = 1 ; k<=2*i-1; k++){  // inner loop to print " * " ;
        process.stdout.write("*");
    }
    console.log();
}