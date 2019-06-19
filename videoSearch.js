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
  console.log("Click")

  axios.get("https://api-v3.igdb.com/games/", {
    headers: {
      'Access-Control-Allow-Origin': 'https://www.igdb.com/oauth/authorize',
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

$.ajax({
  type: "POST",
  beforeSend: function(request) {
    request.setRequestHeader('Access-Control-Allow-Origin', 'https://www.igdb.com/oauth/authorize');
  }
});
