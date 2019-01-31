
function randomImg1() {
    var myImages1 = new Array();
    myImages1[1] = "img/aboutme.png";
    myImages1[2] = "img/aboutme5.png";
    myImages1[3] = "img/aboutme2.png";
    myImages1[4] = "img/aboutme3.png";
    myImages1[5] = "img/aboutme4.png";

    var rnd = Math.floor( Math.random() * myImages1.length );
    if( rnd == 0) {
        rnd = 1;
    }
    document.getElementById("changeimg").src = myImages1[rnd];
}

