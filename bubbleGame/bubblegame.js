
function makeBubble(){
    let clutter ="";
 
    for(let i=1;i<=102;i++){
       let rn =Math.floor(Math.random()*10)
   clutter +=` <div class="bubble">${rn}</div>`
   
   }
   
   document.querySelector(".pbtm").innerHTML=clutter;
}


let timer=60;
let hitrn=0;
let score = 0;
function increaseScore(){
    
document.querySelector("#scorevalue").textContent=score;
score+= 10;
}

 let timerInterval = function runTimer(){
    setInterval(function(){
        
        if(timer>0){
            timer--;
        }else{
            clearInterval(timerInterval)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
        document.querySelector("#timervalue").textContent=timer;
    },1000);
}

function getnewHit (){
   hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}

document.querySelector(".pbtm").addEventListener("click",function(details){
    let clickedNumber=(Number(details.target.textContent));
    if(clickedNumber===hitrn){
        increaseScore();
        makeBubble();
        getnewHit();
    }
});

increaseScore();
getnewHit();
timerInterval(); 
makeBubble();
