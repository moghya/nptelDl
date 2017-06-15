window.onload = function () {
	document.getElementById("downIt").onclick = function (){
		var courseCode=document.getElementById('courseCode').value;
		chrome.runtime.sendMessage(courseCode);		
	}
}