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

var platform = "pc"

var userChoice = "portal";
// + userChoice + "?platform=" + platform 
//api_key=[e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8
var apikey = "e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8";
var baseUrl = "http://www.giantbomb.com/api";

// construct the uri with our apikey
var GamesSearchUrl = baseUrl + '/search/?api_key=' + apikey + '&format=json';
var query = "Batman";

$("body").on("click", "#search", function () {
  console.log("Click")
  



  // send off the query
  $.ajax({
    url: GamesSearchUrl + '&query=' + encodeURI(query),
    dataType: "jsonp",
    
  })  
  

  
      .then(function(response) {
      console.log(response)
    });
});

    
