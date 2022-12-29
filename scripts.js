function getRandomGreeting(maxWidth) {
    var resp = '';

    return resp;
}

function readFromTree(directory, file) {
    console.log('readFromTree(' + directory + ', ' + file + ')');

    fetch('https://tupartan.github.io/tree.json')
        .then(response => {
            console.log("Found: " + response);
        })
        .catch(error => {
            console.error("Not found: " + error);
        });

    var d = directory;
    var f = file;

    var resp = '';

    // If directory is not set, then use root as default
    if(typeof d === 'undefined' || d === null) {
        d = '.';
    }
    
    if (typeof f === 'undefined' || f === null) {
        // If file is not defined, return contents of directory

    } else {
        // Return file contents
    }

    return resp;

}

function printHelp() {
    
    var text = 'List of available commands\n bar';
    return text;

}

function toggleGui() {

    var resp = '';
    var x = document.getElementById('gui');

    console.log('Style: ' + x.style.display)

    if (x.style.display === 'none' || x.style.display === '') {
        resp = 'Starting graphical user interface';
        x.style.display = 'block';
    } else {
        resp = 'Exiting graphical user interface';
        $('body').terminal().echo(resp);
        x.style.display = 'none';
    }
    return resp;

}