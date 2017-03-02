window.onload = hideImages;

function hideImages() {
    var hideBadPics = document.getElementById("badDomainPics");
    hideBadPics.style.visibility = "hidden";
    var hideGoodPics = document.getElementById("goodDomainPics");
    hideGoodPics.style.visibility = "hidden";

    var showBadFirst = document.getElementById("bad1");
    showBadFirst.style.visibility = "visible";
    var showGoodFirst = document.getElementById("good1");
    showGoodFirst.style.visibility = "visible";
}

function cycleBadImages(whichImage) {
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

function cycleGoodImages(whichImage) {
    var curImage = whichImage.id;
    var nextImage = whichImage.id;

    switch (curImage) {
        case "good1":
            nextImage = document.getElementById("good2");
            break;
        case "good2":
            nextImage = document.getElementById("good3");
            break;
        case "good3":
            nextImage = document.getElementById("good4");
            break;
        case "good4":
            nextImage = document.getElementById("good5");
            break;
        case "good5":
            nextImage = document.getElementById("good6");
            break;
        case "good6":
            nextImage = document.getElementById("good1");
            break;
    }
    whichImage.style.visibility = "hidden";
    nextImage.style.visibility = "visible";
}