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
         console.log(firebase_message_id);
         console.log(message_data);
         like=message_data["like"];
         name_fan=message_data["name"];
         message=message_data["message"];
         name_tag="<h4 class='name_tag'>"+name_fan+"<img class='user_tick'src='tick.png'></h4>";
         message_tag="<h4 class='message_h4'>"+message+"</h4>"
         like_button="<button class='btn btn-danger'id='"+firebase_message_id+"'value='"+like+"'onclick='update_like(this.id)'>Like Post: "+like+"</button>";
         document.getElementById("output2").innerHTML+=name_tag+message_tag+like_button+"<hr>";
//Start code

//End code
      } });  }); }
getData();
function logout2(){
window.location="index.html";
localStorage.removeItem("fanofssname");
localStorage.removeItem("privateroomname");
}
function sendtext(){
message=document.getElementById("text").value;
firebase.database().ref("/").child(room_name).push({
name:username,
message:message,
like:0
});
}
function update_like(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
});
}

