let randomNo=Math.ceil(Math.random()*20);
let score=20;
let highScore=0;



console.log(randomNo);
document.querySelector(".check").addEventListener('click', function(){
    const number=Number(document.querySelector(".guess").value);
   
    if(score===0){
        document.querySelector(".message").textContent="your are lost"; 
        }


    else if(randomNo===number)
{
    document.querySelector(".message").textContent="bravo you got it";
    document.querySelector("body").style.backgroundColor="green";
   
    document.querySelector(".number").textContent=randomNo; 
    document.querySelector(".number").style.width="30rem";
    if(score>highScore)
    document.querySelector('.highscore').textContent=highScore;
{
  highScore=score;
}
document.querySelector('.highscore').textContent=highScore;
}
   
else if (number>randomNo)
    {
        score--;
        document.querySelector(".message").textContent="your number is geater";
        document.querySelector('.highscore').textContent=highScore;
       
    }
      else if(number<randomNo){
          document.querySelector(".message").textContent="your number is lesser";
          score--;
          document.querySelector('.highscore').textContent=highScore;  
      }
      document.querySelector(".score").textContent=score;
         });
         document.querySelector(".again").addEventListener("click",function(){
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector(".number").textContent="?"; 
    document.querySelector(".number").style.width="15rem";
    randomNo=Math.ceil(Math.random()*20);
    console.log(randomNo);
    score=20;
    document.querySelector(".score").textContent=20;
    document.querySelector(".guess").value="";
    document.querySelector(".message").textContent="Start guessing..."; 
    document.querySelector('.highscore').textContent=highScore;
         });
