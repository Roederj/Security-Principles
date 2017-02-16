
function cycleImages() {
    var image1 = '<img src="Images/domainBad1.png" height="200" width="200"/>';
    var image2 = '<img src="Images/domainBad2.png" height="200" width="200"/>';
    var image3 = '<img src="Images/domainBad3.png" height="200" width="200"/>';
    var image4 = '<img src="Images/domainBad4.png" height="200" width="200"/>';
    var image5 = '<img src="Images/domainBad5.png" height="200" width="200"/>';
    var image6 = '<img src="Images/domainBad6.png" height="200" width="200"/>';
    var whichImage = document.images.item(0).src;
    var newImage = whichImage;
    //window.alert(whichImage);

    switch (whichImage) {
        case (image1):
            newImage = image2;
            break;
        case (image2):
            newImage = image3;
            break;
        case (image3):
            newImage = image4;
            break;
        case (image4):
            newImage = image5;
            break;
        case (image5):
            newImage = image1;
            break;
    }

    document.images.item(0).write("newImage");
}