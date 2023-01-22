function creatable() {
    var egyik = document.getElementById("egyik").value;
    var masik = document.getElementById("masik").value;
    var atfogo = document.getElementById("atfogo").value;

    if ((Math.pow(egyik, 2) + Math.pow(masik, 2)) == Math.pow(atfogo, 2)) {
        alert("A derékszögű háromszög megszerkeszthető!");
    } else {
        alert("A derékszögű háromszög NEM szerkeszthető meg!");
    }
}

function randomSides() {
    var allInput = document.querySelectorAll('[type="text"]');
    for (let i = 0; i < 3; i++) {
        allInput[i].value = Math.floor(Math.random() * 91) + 10;
    }
}

function hypotenuse() {
    var egyik = document.getElementById("egyik").value;
    var masik = document.getElementById("masik").value;
    document.getElementById("atfogo").value = parseInt(Math.sqrt(Math.pow(egyik, 2) + Math.pow(masik, 2))*1000)/1000;
}