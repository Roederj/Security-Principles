
function showRecord() {
    var patientName = document.getElementById("patientName").value;

    switch (patientName) {
        case "Sue Marie":
            document.getElementById("goodEncap").innerHTML = "<table>" +
            "<tr>" +
                "<td><h1>Patient Name</h1></td>" +
                "<td><h1>Patient ID</h1></td>" +
                "<td><h1>Room Number</h1></td>" +
            "</tr>" +
            "<tr>" +
                "<td><p>Sue Marie</p></td>" +
                "<td><p>AB-1234</p></td>" +
                "<td><p>E312</p></td>" +
            "</tr>" +
            "</table>";
            break;
        case "John Richards":
            document.getElementById("goodEncap").innerHTML = "<table>" +
            "<tr>" +
                "<td><h1>Patient Name</h1></td>" +
                "<td><h1>Patient ID</h1></td>" +
                "<td><h1>Room Number</h1></td>" +
            "</tr>" +
                "<tr>" +
                "<td><p>John Richards</p></td>" +
                "<td><p>CD-3579</p></td>" +
                "<td><p>W156</p></td>" +
                "</tr>" +
            "</table>";
            break;
        case "Trevor Robbins":
            document.getElementById("goodEncap").innerHTML = "<table>" +
            "<tr>" +
                "<td><h1>Patient Name</h1></td>" +
                "<td><h1>Patient ID</h1></td>" +
                "<td><h1>Room Number</h1></td>" +
            "</tr>" +
                "<tr>" +
                "<td><p>Trevor Robbins</p></td>" +
                "<td><p>EF-4862</p></td>" +
                "<td><p>E243</p></td>" +
                "</tr>" +
                "</table>";
            break;
        case "Tanya Hall":
            document.getElementById("goodEncap").innerHTML = "<table>" +
            "<tr>" +
                "<td><h1>Patient Name</h1></td>" +
                "<td><h1>Patient ID</h1></td>" +
                "<td><h1>Room Number</h1></td>" +
            "</tr>" +
                "<tr>" +
                "<td><p>Tanya Hall</p></td>" +
                "<td><p>HJ-7896</p></td>" +
                "<td><p>W324</p></td>" +
                "</tr>" +
                "</table>";
            break;
    }

}
