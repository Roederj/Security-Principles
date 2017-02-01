
window.onload = hideExplanations;

// Function to hide goodCode on page load
//function hideGoodCode() {
//    var hideCode = document.getElementsByClassName("goodCode");

//    for (var i = 0; i < hideCode.length; i++) {
//        hideCode[i].style.visibility = "hidden";
//    }

//    //    window.alert(arr[0].textContent);
//}

// Hides Explanations on page load
function hideExplanations() {
    var hideDivs = document.getElementsByClassName("explainCode");

    hideDivs[0].style.visibility = "hidden";
}

//Shows explanations on mouse hover
function showExplanation(id) {
    var showDivs = document.getElementById("explainDefault");

    window.alert(showDivs.textContent);

    switch (id) {
        case "bad1":
            showDivs = document.getElementById("explainBad1");
            break;
        case "bad2":
            showDivs = document.getElementById("explainBad2");
            break;
        case "good1":
            showDivs = document.getElementById("explainGood1");
            break;
        case "good2":
            showDivs = document.getElementById("explainGood2");
            break;
        case "good3":
            showDivs = document.getElementById("explainGood3");
            break;

            window.alert(showDivs[0].textContent);
            showDivs[0].style.visibility = "visible";
    }
}