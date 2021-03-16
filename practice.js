var firebaseConfig = {
    apiKey: "AIzaSyAj9-ATb73gHsi35hfhCnh49W2CEqqjk9E",
    authDomain: "kwitterpractice-b2e4a.firebaseapp.com",
    databaseURL: "https://kwitterpractice-b2e4a-default-rtdb.firebaseio.com",
    projectId: "kwitterpractice-b2e4a",
    storageBucket: "kwitterpractice-b2e4a.appspot.com",
    messagingSenderId: "580868771882",
    appId: "1:580868771882:web:4d40a314f1700e26267353"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
