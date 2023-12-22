 let n= 5;
let count=0;     
 for(let i=1; i<=n; i++){
    for(let j=1 ;j<=i; j++){
        process.stdout.write(String.fromCharCode( count  + 65 ));
        count++;    //it increases the alpahabet ;
    }
    console.log();
 }