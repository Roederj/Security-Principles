
window.onload = hideAll, bodyHeight;
//window.onload = bodyHeight;

// Hides all explanations except default on page load
function hideAll() {
    var hideDivs = document.getElementById("explainCode");
    hideDivs.style.visibility = "hidden";

    var showDefault = document.getElementById("explainDefault");
    showDefault.style.visibility = "visible";
}


//Hide explanations on mouseout
function hideExplanations(whichStatement) {
    var showInfo = document.getElementById("explainDefault");
    showInfo.style.visibility = "visible";

    switch (whichStatement) {
        case "bad1":
            showInfo = document.getElementById("explainBad1");
            break;
        case "bad2":
            showInfo = document.getElementById("explainBad2");
            break;
        case "good1":
            showInfo = document.getElementById("explainGood1");
            break;
        case "good2":
            showInfo = document.getElementById("explainGood2");
            break;
        case "good3":
            showInfo = document.getElementById("explainGood3");
            break;
    }

    showInfo.style.visibility = "hidden";
}


//Shows explanations on mouse hover
function showExplanation(whichStatement) {
    var showInfo = document.getElementById("explainDefault");
    showInfo.style.visibility = "hidden";

    switch (whichStatement) {
            case "bad1":
                showInfo = document.getElementById("explainBad1");
                break;
            case "bad2":
                showInfo = document.getElementById("explainBad2");
                break;
            case "good1":
                showInfo = document.getElementById("explainGood1");
                break;
            case "good2":
                showInfo = document.getElementById("explainGood2");
                break;
            case "good3":
                showInfo = document.getElementById("explainGood3");
                break;
    }

    showInfo.style.visibility = "visible";
}

