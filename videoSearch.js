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

var userChoice = "portal"


$("body").on("click", "#search", function () {
  console.log("Click")

  axios.get("https://chicken-coop.p.rapidapi.com/games/" + userChoice + "?platform=pc", {
    headers: {
      'Access-Control-Allow-Origin': 'https://www.igdb.com/oauth/authorize',
      
       "X-RapidAPI-Host": "chicken-coop.p.rapidapi.com",
      "X-RapidAPI-Key": "09840eae9fmsh29e1cf0c587e7d6p114d45jsnfbc066e65e3c",

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
