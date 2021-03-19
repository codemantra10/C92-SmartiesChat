function loginfunction(){
username=document.getElementById("username").value;
localStorage.setItem("fanofssname",username);
window.location="socialmedia_room.html";
}