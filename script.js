
const points = [
    "no",
    "yes",
    "maybe",
    "nahhh",
    "try again",
    "Dust urself off and try again",
    "Nice one",
    "In ur dreams",
];

function myFunction(){
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="18px";
    setTimeout(timeup, 4000);

    function timeup(){
        document.getElementById("response").innerHTML="8";
        document.getElementById("response").style.fontSize ="120px";
        document.getElementById("clear").value="";
    }

}