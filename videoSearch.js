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

$("body").on("click", "#search", function () {
  console.log("Click")

  $.ajax({
    url: "https://api.giantbomb.com/search/",
    dataType: "jsonp",
    jsonp: 'json_callback',
    data: {
        api_key: '[e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8]',
        query: 'mass effect',
        format: 'jsonp',
        field_list: 'name'
    },
    success: function(res) {
        console.log(res);
    }
});
});
    
