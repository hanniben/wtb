window.onload = initAll;

function initAll() {
    gifOneAni();
}

function gifOneAni() {
    timer = setTimeout("gifTwoAni()", 30000);
    document.getElementById("gifThree").src = "images/spicecake_still3.png";
    document.getElementById("gifOne").src = "images/spicecake_gif1.gif";
}

function gifTwoAni() {
    timer = setTimeout("gifThreeAni()", 19000);
    document.getElementById("gifOne").src = "images/spicecake_still1.png";
    document.getElementById("gifTwo").src = "images/spicecake_gif2.gif";
}

function gifThreeAni() {
    timer = setTimeout("gifOneAni()", 28000);
    document.getElementById("gifTwo").src = "images/spicecake_still2.png";
    document.getElementById("gifThree").src = "images/spicecake_gif3.gif";
}