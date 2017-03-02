
//document.addEventListener("keydown", function (event) {

//    var movBox = document.getElementById("textDiv");
//    movBox.style.position = "absolute";
//    //var curPos = document.getElementById("testDiv").getBoundingClientRect();
//    //var boxLeft = curPos.left;
//    //var boxRight = curPos.right;
//    //var boxTop = curPos.top;
//    //var boxBottom = curPos.bottom;

//    //window.alert(curPos.top);
//    if (event.keyCode == '40') {
//        moveBox.style.bottom = moveBox.style.bottom + 1000;
//    }
//});

document.addEventListener("keydown", function (event) {

    var movBox = document.getElementById("testDiv");

    switch (event.which) {
        case 37: //Left
            movBox.style.left = (movBox.offsetLeft - 10) + 'px';
            break;
        case 38: //Up
            movBox.style.top = (movBox.offsetTop - 10) + 'px';
            break;
        case 39: //Right
            movBox.style.left = (movBox.offsetLeft + 10) + 'px';
            break;
        case 40: //Down
            movBox.style.top = (movBox.offsetTop + 10) + 'px';
            break;
    }
    



});