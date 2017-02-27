window.onload = hideImages;

function hideImages() {
    var hidePics = document.getElementById("badDomainPics");
    hidePics.style.visibility = "hidden";

    var showFirst = document.getElementById("bad1");
    showFirst.style.visibility = "visible";
}

function cycleImages(whichImage) {
    var curImage = whichImage.id;
    var nextImage = whichImage.id;

    switch (curImage) {
        case "bad1":
            nextImage = document.getElementById("bad2");
            break;
        case "bad2":
            nextImage = document.getElementById("bad3");
            break;
        case "bad3":
            nextImage = document.getElementById("bad4");
            break;
        case "bad4":
            nextImage = document.getElementById("bad5");
            break;
        case "bad5":
            nextImage = document.getElementById("bad6");
            break;
        case "bad6":
            nextImage = document.getElementById("bad1");
            break;
    }
    whichImage.style.visibility = "hidden";
    nextImage.style.visibility = "visible";
}