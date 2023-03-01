const audio = new Audio("/static/audio/สวัสดี.mp3");
document.getElementById("face").addEventListener('click',()=>{
    document.getElementById("face").style.display = "none";
    document.getElementById("container").style.display = "flex";
    audio.play();
})

/*
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.addEventListener('result',function(event){
  const re = Array.from(event.results)
  .map(result=>result[0])
  .map(result=>result.transcript)
  texts = re[re.length - 1]
})

recognition.start();

*/
