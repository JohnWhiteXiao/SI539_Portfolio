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

function fillStar() {
    document.getElementById("star").src='images/star_unhighlight.png';
}
  
function unFavorite() {
    document.getElementById("star").src='images/star_unhighlight.png';
    document.getElementById("1").style.display = "none";
}


