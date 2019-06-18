 $.get('header.html',function(response){ 
    $('#header').html(response); 
	console.log(response)
   });


    
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


$("body").on("click", "#search", function () {
 
console.log("Click")

var queryURL = "https://api-v3.igdb.com/games/"




$.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {

 console.log(response)

});

});

$.ajax({
  type: "POST",
  beforeSend: function(request) {
    request.setRequestHeader("Access-Control-Allow-Origin", "https://www.igdb.com/oauth/authorize")
  }
});
