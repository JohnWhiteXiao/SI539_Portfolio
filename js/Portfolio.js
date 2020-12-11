function chatText() {
    var text;
    // Get the value of the input field with id="chat-box"
    text = document.getElementById("chat-box").value;
    console.log(text);
    var sp = document.createElement("span");
    sp.classList.add("chat-me");
    var node = document.createTextNode(text);
    sp.appendChild(node);
    var element = document.getElementById("chat-record");
    element.appendChild(sp);
    // document.getElementById("chat-me").innerHTML = text;
    document.getElementById("chat-box").value = null;
}

function fillStar1() {
    document.getElementById("star_1").src='images/star_highlight.png';
}

function fillStar2() {
    document.getElementById("star_2").src='images/star_highlight.png';
}

function fillStar3() {
    document.getElementById("star_3").src='images/star_highlight.png';
}

function fillStar4() {
    document.getElementById("star_4").src='images/star_highlight.png';
}

function fillStar5() {
    document.getElementById("star_5").src='images/star_highlight.png';
}

function fillStar6() {
    document.getElementById("star_6").src='images/star_highlight.png';
}
  
function unFavorite1() {
    document.getElementById("star_1").src='images/star_unhighlight.png';
    document.getElementById("1").style.display = "none";
}

function unFavorite2() {
    document.getElementById("star_2").src='images/star_unhighlight.png';
    document.getElementById("2").style.display = "none";
}

function unFavorite3() {
    document.getElementById("star_3").src='images/star_unhighlight.png';
    document.getElementById("3").style.display = "none";
}

function unFavorite4() {
    document.getElementById("star_4").src='images/star_unhighlight.png';
    document.getElementById("4").style.display = "none";
}
