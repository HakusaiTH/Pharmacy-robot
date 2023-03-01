//const audio = new Audio("/static/audio/พาราเซตามอล.mp3");
const btn_a = document.getElementById("btn_a");
r_sta = 1;
document.getElementById("r").addEventListener('click',()=>{
    r_sta ++;
    if((r_sta % 2) == 0){
        audio.play();
        btn_a.src = "/static/images/speker.png"
    }
    else{
        audio.pause();audio.currentTime = 0;
        btn_a.src = "/static/images/speke_nr.png"
    }
})

document.getElementById("g").addEventListener('click',()=>{
    document.getElementById("num_n").style.display = "flex";
    document.getElementById("container").style.display = "none";
})

const firebaseConfig = {
    apiKey: "AIzaSyAOVcuWyl3yErJWlCNM3k6xxrfdylTuz4g",
    authDomain: "esp-test-10187.firebaseapp.com",
    databaseURL: "https://esp-test-10187-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esp-test-10187",
    storageBucket: "esp-test-10187.appspot.com",
    messagingSenderId: "714305910642",
    appId: "1:714305910642:web:8b07517deef3b059ed8feb"
  };
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();

    document.getElementById("g").addEventListener('click',()=>{
        var firebaseRef = firebase.database().ref().child("Status");
        firebaseRef.set(d_);
    })
});

console.log("pass");  