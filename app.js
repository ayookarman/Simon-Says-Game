let gameSeq=[];
let userSeq=[];

let btns=["red","orange","green","blue"];

let gameStart=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(gameStart==false){
    gameStart=true;

    levelUp();
  }
})

function levelUp() {
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;

  let randIdx=Math.floor(Math.random()*3);
  let randCol=btns[randIdx];
  let randBtn=document.querySelector(`.${randCol}`);

  gameSeq.push(randCol);

  flashBtn(randBtn);
}

function flashBtn(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250)
}

let allBtns=document.querySelectorAll(".btn");
for (let btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function btnPress(){
  let btn=this;
  flashBtn(btn);

  userCol=btn.getAttribute("id");
  userSeq.push(userCol);
  if (level>=1){
    check(userSeq.length-1);
  }
}

function check(idx) {

  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }
  else{
    h2.innerHTML=`Game Over!<b>Your score was ${level-1}</b><br>Press any key to start`;
    reset();
    document.querySelector("body").style.backgroundColor="Red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="White";
    },200);
  }
}

function reset(){
  gameStart=false;
  level=0;
  gameSeq=[];
  userSeq=[];
}