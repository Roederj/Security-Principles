
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

    //var movBox = document.getElementById("testDiv");

    //switch (event.which) {
    //    case 37: //Left
    //        if (!(movBox.style.left < (0 + 'px'))) {
    //            movBox.style.left = (movBox.offsetLeft - 10) + 'px';
    //        }
    //        else if (movBox.style.left < (0 + 'px')) {
    //            movBox.style.left = 0 +'px';
    //        }
    //        break;
    //    case 38: //Up
    //        if (!(movBox.style.top < (0 + 'px'))) {
    //            movBox.style.top = (movBox.offsetTop - 10) + 'px';
    //        }
    //        else if (movBox.style.top < (0 + 'px')) {
    //            movBox.style.top = (0 + 'px');
    //        }
    //        break;
    //    case 39: //Right
    //        if (!(movBox.style.left > (window.innerWidth + movBox.style.left + 'px'))) {
    //            movBox.style.left = (movBox.offsetLeft + 10) + 'px';
    //        }
    //        else if (movBox.style.left > (window.innerWidth + movBox.style.left + 'px')) {
    //            movBox.style.left = window.innerWidth - movBox.style.left + 'px';
    //        }
    //        break;
    //    case 40: //Down
    //        if (!(movBox.style.top > (window.innerHeight + movBox.style.left + 'px'))) {
    //            movBox.style.top = (movBox.offsetTop + 10) + 'px';
    //        }
    //        else if (movBox.style.top > (window.innerHeight + movBox.style.left + 'px')) {
    //            movBox.style.top = window.innerHeight - movBox.offsetHeight + 'px';
    //        }
    //        break;
    //}
    
  
    var movBox = document.getElementById("testDiv");
    var limitBox = document.getElementById("limitDiv");
//    window.alert(limitBox.offsetHeight);
    switch (event.which) {
        case 37: //Left
            window.alert(movBox.style.left + 'px');
            if (movBox.style.left > 0 + 'px') {
                movBox.style.left = (movBox.offsetLeft - 10) + 'px';
            }
            break;
        case 38: //Up

            break;
        case 39: //Right

            break;
        case 40: //Down

            break;
    }



});