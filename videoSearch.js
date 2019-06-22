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

  axios.get("http://www.giantbomb.com/search" , {
    dataType: "jsonp",
                    jsonp: 'json_callback',
                    data: {
                        api_key: '[e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8]',
                        query: 'mass effect',
                        format: 'jsonp',
                        field_list: 'name'
      
    }
  })
    .then(response => {
      // Do work here
      console.log(response)
      console.log(response.data);
      console.log(response.data.result.title);
      console.log(response.data.result.description);
      console.log(response.data.result.image);
      console.log(response.data.result.genre);
      console.log(response.data.result.score);

      var cardDiv = $("<div>");
      cardDiv.addClass("card");

      var cardImage = $("<img>");
      cardImage.attr("class","card-image-top");
      cardImage.attr("src",response.data.result.image);

      var cardBody = $("<div>");
      cardBody.attr("class","card-body");

      var cardTitle = $("<h5>").text(response.data.result.title);
      cardTitle.attr("class","card-title");

      var cardDescribe = $("<p>").text(response.data.result.description);
      cardDescribe.attr("class","card-text");

      var cardFooter1 = $("<p>");
      cardFooter1.attr("class","card-text");

      var cardFooter2 = $("<p>");
      cardFooter2.attr("class","card-text");

      var cardGenre = $("<small>").text(response.data.result.genre);
      cardGenre.attr("class", "text-muted");

      var cardScore = $("<small>").text("Score: " + response.data.result.score);
      cardScore.attr("class", "text-muted");

      cardFooter1.append(cardGenre);

      cardFooter2.append(cardScore);
      
      cardBody.append(cardTitle);
      cardBody.append(cardDescribe);
      cardBody.append(cardFooter1);
      cardBody.append(cardFooter2);

      cardDiv.append(cardImage);
      cardDiv.append(cardBody);

      $("#card-deck").prepend(cardDiv);
      
      
    })
    .catch(e => {
      console.log("error", e);
    });

});

