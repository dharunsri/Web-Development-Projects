var imgs = document.querySelectorAll("img");
var button = document.getElementById("dice-roll");
var randomNumber1, randomNumber2 = 6;
var p1 = document.querySelectorAll("h3")[0].textContent;
var p2 = document.querySelectorAll("h3")[1].textContent;
console.log(p1+" "+p2);

function roll(){
    randomNumber1 = Math.floor(Math.random() * 6)+1;
    randomNumber2 = Math.floor(Math.random() * 6)+1;

    var randomImage1 = "images/"+randomNumber1+".png";
    var randomImage2 = "images/"+randomNumber2+".png";

    imgs[0].setAttribute("src", randomImage1);
    imgs[1].setAttribute("src", randomImage2);
    console.log(randomNumber1 +" "+ randomNumber2);

    if(randomNumber1>randomNumber2){
        document.querySelectorAll("h3")[0].innerHTML = p1+"- WINS!";
        document.querySelectorAll("h3")[1].innerHTML = p2;
        document.querySelector("h1").innerHTML = "Let's Play";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelectorAll("h3")[1].innerHTML = p2+"- WINS!";
        document.querySelectorAll("h3")[0].innerHTML = p1;
        document.querySelector("h1").innerHTML = "Let's Play";
    }
    else{
        document.querySelector("h1").innerHTML = "Match Draw!";
        document.querySelectorAll("h3")[1].innerHTML = p2;
        document.querySelectorAll("h3")[0].innerHTML = p1;
    }
};

button.addEventListener("click",roll);