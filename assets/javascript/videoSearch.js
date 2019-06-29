

$(document).ready(function () {
  console.log("ready!");

  //firebase key configuration
 /* var firebaseConfig = {
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


});*/


//this needs to be set on the document not on body to work
$(document).on("click", "#search", function () {
  console.log("Click")
  console.log(platformValue)
  console.log(ratingValue)
  console.log(genreValue)

//Query Friendly Button Values
  //   platform:
  // 	xbox one: 145
  // 	playstation  4: 146
  // 	nintendo switch: 157
  // 	pc: 94

  // rating:
  // 	E : 6
  // 	e 10+:29
  // 	teen: 1
  // 	mature: 16
  // 	AO: 23

  // genre:
  // 	role playing: 5
  // 	fighting: 9
  // 	sport: 3
  // 	adventure:43
  // 	puzzle: 18
  // 	arcade: n/a
  
  
  
    var queryUrl = 'http://www.giantbomb.com/api/games/?format=jsonp&api_key=e7b9ce5f17b926a054c14d54e4e5c5ef2cb2fed8&letter=&sortBy=release&filter=original_release_date:2019-01-01%2000:00:00|2020-12-31%2023:59:59,expected_release_year:2019&offset=100&region=1&minRating=4&genre=' + genreValue + '&rating=' + ratingValue + '&platform='+ platformValue + '&limit=10,&field_list=genres,name,description,rating,image'


  console.log(queryUrl)

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    user_agent: 'ourtablebootcamp',
    // url: "https://www.giantbomb.com/games/?letter=&sortBy=&platform=145&genre=&theme=&minRating=&rating=&region=&___developers=&___publishers=&fromYear=&toYear=",

    url: queryUrl, 
  
  }).done(function (response) {
    console.log(response.results)
    var resultCount = response.results;
    

    for(i=0; i < 10;i++){
      var currentGame = response.results[i];
      
          
    


    console.log(response.results[i].image.small_url)
    console.log(response.results[i].description)
    console.log(response.results[i].name)
    console.log(response.results[i].original_game_rating)
    //  console.log(response.results[i].platforms.name)
    console.log(response.results[i].original_release_date)  


    var image = currentGame.image.small_url;
    console.log("image" + image)

    var description = currentGame.description;
    console.log(description +" description")

    var name = currentGame.name
    console.log(name + " name")

    var rating = currentGame.original_game_rating;
    console.log(rating +" rating")

    

    var cardDiv = $("<div>");
      cardDiv.addClass("card bg-secondary border-danger text-white m-3 p-1");

      var cardImage = $("<img>");
      cardImage.attr("class","card-image-top");
      cardImage.attr("src",image);
      cardImage.attr("id","imageSize")

      var cardBody = $("<div>");
      cardBody.attr("class","card-body");

      var cardTitle = $("<h5>").text(name);
      cardTitle.attr("class","card-title");

      var cardDescribe = $("<p>").html(description);
      cardDescribe.attr("class","card-text");

      var cardFooter1 = $("<p>");
      cardFooter1.attr("class","card-text");

      var cardFooter2 = $("<p>");
      cardFooter2.attr("class","card-text");

      // var cardGenre = $("<small>").text("genre");
      // cardGenre.attr("class", "text-light");

      if (!(rating == undefined || rating == null)){
      var cardScore = $("<small>").text("Score: " + rating);
      cardScore.attr("class", "text-light");
      }

      // cardFooter1.append(cardGenre);

      cardFooter2.append(cardScore);

      cardBody.append(cardTitle);
      cardBody.append(cardDescribe);
      cardBody.append(cardFooter1);
      cardBody.append(cardFooter2);

      cardBody.append(cardImage);
      cardDiv.append(cardBody);

      $("#card-deck").prepend(cardDiv);
        
    }

    })
    .catch(e => {
      console.log("error", e);
    });



  });







});
