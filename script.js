var span=document.getElementsByTagName("span");
var lE=document.getElementById("left");
var rE=document.getElementById("right");
var n=document.getElementById("nose");
var m=document.getElementById("mouth");
function left(){
    // alert("Left Eye");
    lE.style.fill='white';
    span.innerHTML="this is Left Eye";
}
function leftLeave(){
    lE.style.fill='#ED51EA';
}
function right(){
    // alert("Right Eye");
    rE.style.fill='white';
    span.innerHTML="this is Right Eye";
}
function rightLeave(){
    rE.style.fill='#ED51EA';
}
function nose(){
    // alert("Nose");
    n.style.fill='white';
    span.innerHTML="this is Nose";
}
function noseLeave(){
    n.style.fill='#ED51EA';
}
function mouth(){
    // alert("Mouth");
    m.style.fill='white';
    span.innerHTML="this is Mouth";
}
function mouthLeave(){
    m.style.fill='#ED51EA';
}