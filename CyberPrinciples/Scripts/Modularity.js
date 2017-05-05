// Add a script to highlight Navbar on hover
function lightNavMenu() {
    var navMenu = document.querySelectorAll("li");
    for (var i = 0; i < navMenu.length; i++) {
        navMenu[i].style.borderColor = "rgb(152, 230, 152)";
    }
}

function returnNavMenu() {
    var navMenu = document.querySelectorAll("li");
    for (var i = 0; i < navMenu.length; i++) {
        navMenu[i].style.borderColor = "black";
    }
}

// Add a script to highlight Border on hover
function lightBorder() {
    var border = document.getElementById("bodyWrap");
    border.style.borderColor = "rgb(152, 230, 152)";
}

function returnBorder() {
    var border = document.getElementById("bodyWrap");
    border.style.borderColor = "black";
}