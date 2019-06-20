var  xmlhttp = new XMLHttpRequest();
    var url = "https://api-endpoint.igdb.com/games/1942?fields=*";
   

    xmlhttp.open('GET',url,true);

    
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.setRequestHeader("user-key", "aa3e0b6b7fcfadd761e44c68eee3e3e0");    

xmlhttp.onload = function () {
    console.log("success")
  // Request finished. Do processing here.
};

xmlhttp.send(url);





$(document).ready(function () {
  console.log("ready!");

  //firebase key configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDProkYgdjY3rTaaca5u9VipRAeaPKJnjE",
    authDomain: "video-search-5c1ee.firebaseapp.com",
    databaseURL: "https://video-search-5c1ee.firebaseio.com",
    projectId: "video-search-5c1ee",
    storageBucket: "video-search-5c1ee.appspot.com",
    messagingSenderId: "607886212195",
    appId: "1:607886212195:web:c661006422412d65"
  };
  firebase.initializeApp(firebaseConfig);
  console.log("firebase");


});

var userChoice = "games"


$("body").on("click", "#search", function () {
  console.log("Clicked")
    
     xmlhttp.open('GET',url,true);
    
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.setRequestHeader("user-key", "aa3e0b6b7fcfadd761e44c68eee3e3e0");    
    console.log(xmlhttp)
    xmlhttp.send();


  axios.get("https://api-endpoint.igdb.com/games/1942?fields=*", {
    headers: {
      'Access-Control-Allow-Origin': '*',
      "user-key": "aa3e0b6b7fcfadd761e44c68eee3e3e0",
      
      Accept: "application/json"
      
    }
  })
    .then(response => {
      // Do work here
      console.log(response.data);
    })
    .catch(e => {
      console.log("error", e);
    });

});




