window.onload = initAll;

function initAll() {
    gifOneAni();
}

function gifOneAni() {
    timer = setTimeout("gifTwoAni()", 30000);
    document.getElementById("gifThree").src = "images/spicecake_still3.png";
    document.getElementById("gifOne").src = "https://media2.giphy.com/media/MeVaDEhr0Smo5HeLtr/giphy.gif?cid=790b76112b187339c33365a53bba416ebfba8b23a299457b&rid=giphy.gif&ct=g";
}

function gifTwoAni() {
    timer = setTimeout("gifThreeAni()", 19000);
    document.getElementById("gifOne").src = "images/spicecake_still1.png";
    document.getElementById("gifTwo").src = "https://media0.giphy.com/media/57zZvwEdqTgvEF4trC/giphy.gif?cid=790b7611d1ceb021e5fda937af7fcbe58a768fbe1337aed4&rid=giphy.gif&ct=g";
}

function gifThreeAni() {
    timer = setTimeout("gifOneAni()", 28000);
    document.getElementById("gifTwo").src = "images/spicecake_still2.png";
    document.getElementById("gifThree").src = "https://media1.giphy.com/media/cVH9UVAfrntciKS5L5/giphy.gif?cid=790b7611a47bcf8cc4234bb84e295f16352f0d7ebdf23421&rid=giphy.gif&ct=g";
}