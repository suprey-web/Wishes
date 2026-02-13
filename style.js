<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

<script>
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function checkPassword(){
  const pass=document.getElementById("password").value.toLowerCase();
  if(pass==="iloveyou"){
    showScreen("screen2");
    startHack();
  } else {
    document.getElementById("wrong").innerText="Wrong password 🥺";
  }
}

function startHack(){
  const msg="Love located... Feelings detected... Forever mode activated ❤️";
  let i=0;
  const interval=setInterval(()=>{
    if(i<msg.length){
      document.getElementById("hackText").innerHTML+=msg.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      setTimeout(()=>showScreen("screen3"),1500);
    }
  },40);
}

const text=`Even though distance keeps us in different places,
you are still the closest person to my heart.

Every morning I wake up wishing I could see your sleepy face.
Every night I fall asleep replaying our conversations in my head.
You have become my comfort, my safe place, my favorite notification,
and the part of my day I look forward to the most.

So I made this little world —
not because code is special,
but because YOU are.

Every click here, every animation, every line…
is just a small way of showing that loving you
is something I don’t just say —
it’s something I put effort into.

And no matter how many miles sit between us,
my heart never learned how to stay away from you. ❤️`;


let t=0;
function typeWriter(){
  if(t<text.length){
    document.getElementById("letter").innerHTML+=text.charAt(t);
    t++;
    setTimeout(typeWriter,35);
  }
}
typeWriter();

function goToQuestions(){showScreen("screen4");}
function goToSlideshow(){showScreen("screen5");}
function goToFinal(){showScreen("screen6");}

const images=["pic1.jpg","yourphoto2.jpg","yourphoto3.jpg"];
let s=0;
setInterval(()=>{
  const slide=document.getElementById("slide");
  if(slide){
    s=(s+1)%images.length;
    slide.src=images[s];
  }
},2500);

  const captions=[
"One of my favorite memories with you ❤️",
"The smile that made me fall harder 😭",
"Proof that I got lucky fr 💖"
];

setInterval(()=>{
  const slide=document.getElementById("slide");
  const cap=document.getElementById("caption");
  if(slide){
    s=(s+1)%images.length;
    slide.src=images[s];
    cap.innerText=captions[s];
  }
},2500);

function createHeart(){
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";

  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*12+16)+"px";
  heart.style.animationDuration=(Math.random()*4+5)+"s";

  document.body.appendChild(heart);

  setTimeout(()=>heart.remove(),9000);
}

setInterval(createHeart,1000);


  function goToGame(){ showScreen("screen7"); }


function moveNo(){
  const no = document.getElementById("noBtn");
  const area = no.parentElement;

  const maxX = area.clientWidth - no.offsetWidth;
  const maxY = area.clientHeight - no.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.left = x + "px";
  no.style.top = y + "px";

  // YES button grows
  scale += 0.15;
  document.getElementById("yesBtn").style.transform = `scale(${scale})`;
}

function sheSaidYes(){
  showScreen("screen6");
  document.querySelector("#screen6 .card").innerHTML = `
    <h1>SHE SAID YESSSS ❤️😭</h1>
    <p>
      Best decision of your life btw.  
      Officially locked as my Valentine.  
      No returns. No refunds. Forever subscription activated 💍💖
    </p>
  `;
}

let scale = 1;
let noCount = 0;

const noTexts = [
  "Really?",
  "You serious??",
  "Come onnnn 😭",
  "Stop playing",
  "You must be joking",
  "Okay now I'm getting sad 🥺",
  "Why you doing this to me",
  "Last chance missy 😤"
];

function noClicked(){
  const no = document.getElementById("noBtn");
  const area = no.parentElement;

  // Move button
  const maxX = area.clientWidth - no.offsetWidth;
  const maxY = area.clientHeight - no.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.left = x + "px";
  no.style.top = y + "px";

  // Change text
  if(noCount < noTexts.length){
    no.innerText = noTexts[noCount];
    noCount++;
  }

  // YES button grows
  scale += 0.2;
  document.getElementById("yesBtn").style.transform = `scale(${scale})`;
}

  function showMemory(){
  document.getElementById("memoryText").style.display="block";
}

  function updateLove(val){
  document.getElementById("loveValue").innerText = val + "%";
}

  let score = 0;

function goToQuiz(){
  function goToQuiz(){
  score = 0;
  currentQ = 0;
  showScreen("screenQuiz");
  loadQuestion();
}

  showScreen("screenQuiz");
}

function answer(q, correct){
  if(correct) score++;
}

function finishQuiz(){
  showScreen("screen7"); // goes to Valentine game

  if(score === 3){
    document.querySelector("#screen7 .card h2").innerText =
      "Perfect Score 😭💖 You know us too well";
  }
}

const quiz = [
  {
    q: "Where did we first talk seriously?",
    a: [
      {text:"Late night chat 🌙", correct:true},
      {text:"Morning convo ☀️", correct:false}
    ]
  },
  {
    q: "Who says 'I love you' more?",
    a: [
      {text:"You 😌", correct:true},
      {text:"Me 🙈", correct:false}
    ]
  },
  {
    q: "My favorite thing about you?",
    a: [
      {text:"Your smile 😊", correct:true},
      {text:"Your height 😂", correct:false}
    ]
  }
];

let currentQ = 0;
let answered = false;

function goToQuiz(){
  showScreen("screenQuiz");
  loadQuestion();
}

function loadQuestion(){
  answered = false;
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("feedback").innerText = "";

  const q = quiz[currentQ];
  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.a.forEach(option=>{
    const btn = document.createElement("button");
    btn.innerText = option.text;
    btn.onclick = ()=>selectAnswer(btn, option.correct);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(button, correct){
  if(answered) return;
  answered = true;

  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach(b => b.disabled = true);

  if(correct){
    button.classList.add("correct");
    document.getElementById("feedback").innerText = "Yayyy correct 💖";
    confetti({particleCount:120, spread:70, origin:{y:0.6}});
  } else {
    button.classList.add("wrong");
    document.getElementById("feedback").innerText = "Aww wrong 😢";
  }

  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion(){
  currentQ++;
  if(currentQ < quiz.length){
    loadQuestion();
  } else {
    showScreen("screen7"); // Valentine game screen
  }
}

  function goToWhy(){ showScreen("screenWhy"); }

  function goToTimeline(){ showScreen("screenTime"); }

document.addEventListener("click", (e)=>{
  const spark = document.createElement("div");
  spark.innerHTML = "💖";
  spark.style.position = "fixed";
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";
  spark.style.pointerEvents = "none";
  spark.style.fontSize = "18px";
  spark.style.animation = "float 2s ease forwards";
  document.body.appendChild(spark);
  setTimeout(()=>spark.remove(),2000);
});



function missMeter(val){
  const text = document.getElementById("missText");
  if(val < 30) text.innerText = "Liar.";
  else if(val < 70) text.innerText = "Okay fair 😌";
  else text.innerText = "Aww come here 🥺💖";
}


  function startCatch(){
  const area = document.getElementById("gameArea");
  area.innerHTML = "";
  const heart = document.createElement("div");
  heart.innerHTML="❤️";
  heart.style.position="absolute";
  heart.style.fontSize="30px";
  area.appendChild(heart);

  function move(){
    heart.style.left=Math.random()*80+"%";
    heart.style.top=Math.random()*70+"%";
  }
  heart.onclick=()=>alert("You caught my heart forever 💍");
  setInterval(move,800);
}


</script>
