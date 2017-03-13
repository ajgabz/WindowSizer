/**
 * Created by aarongaba on 2017-02-22.
 */

/* Note: \u00D7 is the Unicode representation for the 'times' (x) symbol. */

function prettyPrintDimensions(height, width) {
	return (width + " \u00D7 " + height);
}

window.onload = function(){
	document.getElementById("screen-size").innerHTML = prettyPrintDimensions(screen.height, screen.width);
    document.getElementById("window-size").innerHTML = prettyPrintDimensions(window.innerHeight, window.innerWidth);
}

window.onresize = function(){
    document.getElementById("window-size").innerHTML = prettyPrintDimensions(window.innerHeight, window.innerWidth);
}


