
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

function showExplanation() {

}