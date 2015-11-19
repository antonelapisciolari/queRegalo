function login ()
{
var valid = false
var username = document.getElementById("user-email").value;
var password = document.getElementById("user-pw").value;

var unArray = ["fran@gmail.com", "agos@gmail.com", "anto", "admin"];  // as many as you like - no comma after final entry
var pwArray = ["regalo", "regalo", "regalo", "admin"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((username == unArray[i]) && (password == pwArray[i])) {
valid = true;
}
if (valid)
{
window.location = "main.html";
}
else
{
window.location = "index.html"; // Redirecting to other page.
} 
valid = false;
}

}	
	


function logout ()
{

window.location = "index.html"; // Redirecting to other page.

}	
	