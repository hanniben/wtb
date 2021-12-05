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
    document.getElementById("gifThree").src = "https://media1.giphy.com/media/cVH9UVAfrntciKS5L5/giphy.gif?cid=790b7611a47bcf8cc4234bb84e295f16352f0d7ebdf23421&rid=giphy.gif&ct=g";
}