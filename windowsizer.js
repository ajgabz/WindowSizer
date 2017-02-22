/**
 * Created by aarongaba on 2017-02-22.
 */

/* Note: \u00D7 is the Unicode representation for the 'times' (x) symbol. */

window.onload = function(){
    document.getElementById("screen-size").innerHTML = screen.width + " \u00D7 " + screen.height;
    document.getElementById("window-size").innerHTML = window.innerWidth + " \u00D7 " + window.innerHeight;
}

window.onresize = function(){
    document.getElementById("window-size").innerHTML = window.innerWidth + " \u00D7 " + window.innerHeight;
}


