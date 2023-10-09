
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCtrf9NMs00ZK1sCRsIrUhy3MOFnpJ-W_M",
  authDomain: "chatterbox-895fb.firebaseapp.com",
  projectId: "chatterbox-895fb",
  storageBucket: "chatterbox-895fb.appspot.com",
  messagingSenderId: "826192767507",
  appId: "1:826192767507:web:66403bd7f74418836d2de6",
  measurementId: "G-YGSQQ8X34G"
};
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
