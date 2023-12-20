/**
 * 
 */
function showHint(str) 
{
	if (str.length == 0) { 
	    document.getElementById("txtHint").innerHTML = "";
	    return;
	} else {
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	            document.getElementById("content").innerHTML = this.responseText;
	        }
	    };
	    xmlhttp.open("POST", "gethint.php?q=" + str, true);
	    xmlhttp.send();
    }
}