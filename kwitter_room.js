var firebaseConfig = {
      apiKey: "AIzaSyCcudqVi9h6_HnK-N40IQubcHgAE0TWCSk",
      authDomain: "smartiesfanchat.firebaseapp.com",
      databaseURL:"https://smartiesfanchat-default-rtdb.firebaseio.com/",
      projectId: "smartiesfanchat",
      storageBucket: "smartiesfanchat.appspot.com",
      messagingSenderId: "1074201274478",
      appId: "1:1074201274478:web:ed196b9b5e0b2a9272de7f"
    };
    firebase.initializeApp(firebaseConfig);
    var usernameofthefan=localStorage.getItem("fanofssname");
    console.log(usernameofthefan);
    document.getElementById("Welcome").innerHTML="Welcome #1 Fan,"+usernameofthefan;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log(Room_names);
 row="<div class='room_name'id="+ Room_names +"onclick='redirectroomname(this.id)'>"+Room_names+"</div> <hr>";
 document.getElementById("output").innerHTML += row;
 
      //End code
      });});}
getData();
function logout(){
window.location="index.html";
}
function createroom(){
roomname=document.getElementById("personalroomname").value;
firebase.database().ref("/").child(roomname).update({
purpose:"addingroom"
});
localStorage.setItem("privateroomname",roomname);
window.location="kwitter_page.html";
}
function redirecttoroomname(name){
console.log(name);
localStorage.setItem("privateroomname",name);
window.location="kwitter_page.html";
}

