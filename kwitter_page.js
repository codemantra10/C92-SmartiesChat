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
username=localStorage.getItem("fanofssname");
room_name=localStorage.getItem("privateroomname");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output2").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout2(){
window.location="index.html";
}
function sendtext(){
message=document.getElementById("text").value;
firebase.database().ref("/").child(room_name).push({
name:username,
message:message,
like:0
});
}