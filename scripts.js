function printHelp() {
    var text = "List of available commands\n bar";
    return text;

}

function toggleGui() {

    var resp = "";
    var x = document.getElementById("gui");

    console.log("Style: " + x.style.display)

    if (x.style.display === "none" || x.style.display === "") {
        resp = 'Starting graphical user interface';
        x.style.display = "block";
    } else {
        resp = 'Exiting graphical user interface';
        x.style.display = "none";
    }
    return resp;

}