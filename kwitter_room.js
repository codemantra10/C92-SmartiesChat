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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
