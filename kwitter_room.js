var firebaseConfig = {
      apiKey: "AIzaSyDzrnhYTfrJfe1pB68YM6929VrU3tiNDM8",
      authDomain: "kwitter-smartieschat.firebaseapp.com",
      databaseURL:"https://kwitter-smartieschat-default-rtdb.firebaseio.com/",
      projectId: "kwitter-smartieschat",
      storageBucket: "kwitter-smartieschat.appspot.com",
      messagingSenderId: "1035024728640",
      appId: "1:1035024728640:web:9fc7946442ba6e1bb355a5"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

