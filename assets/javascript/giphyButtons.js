var platformValue = "";
var genreValue= "";
var ratingValue="";

$(document).ready(function () {
    console.log("really ready!");

});
//For Platforms ***********************************

var searchFor = [];

$(document).on("click", "#pc", function () {
    platformValue = 94;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=computer%20game%20logo=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var pcImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            pcImage.attr("src", results[0].images.fixed_height_still.url);
            pcImage.attr("data-still", results[0].images.fixed_height_still.url);
            pcImage.attr("data-animate", results[0].images.fixed_height.url);
            pcImage.attr("data-type", "still");
            pcImage.attr("class", "gif");
            pcImage.attr("class","card-image-top")

            var pcGifTitle = $("<h5>");
            pcGifTitle.attr("class","card-title");
            pcGifTitle.text("PC");


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(pcImage);
            gifDiv.append(pcGifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#platform-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);
        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });

    console.log($("#pc").text());
    searchFor.push($("#pc").text());
    console.log(searchFor);
    $("#platform").hide();



});




$(document).on("click", "#nintendoSwitch", function () {

    platformValue = 157;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=nintendo%20switch%20device&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var nswitchImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            nswitchImage.attr("src", results[0].images.fixed_height_still.url);
            nswitchImage.attr("data-still", results[0].images.fixed_height_still.url);
            nswitchImage.attr("data-animate", results[0].images.fixed_height.url);
            nswitchImage.attr("data-type", "still");
            nswitchImage.attr("class", "gif");
            nswitchImage.attr("class", "card-image-top");

            var nswitchGifTitle = $("<h5>");
            nswitchGifTitle.attr("class","card-title");
            nswitchGifTitle.text("Nintendo Switch"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(nswitchImage);
            gifDiv.append(nswitchGifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#platform-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });

    console.log($("#nintendoSwitch").text());
    searchFor.push($("#nintendoSwitch").text());
    console.log(searchFor);
    $("#platform").hide();

});




$(document).on("click", "#playstation4", function () {

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=playstation%20controler&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body"); 
            // Creating an image tag
            var play4Image = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            play4Image.attr("src", results[0].images.fixed_height_still.url);
            play4Image.attr("data-still", results[0].images.fixed_height_still.url);
            play4Image.attr("data-animate", results[0].images.fixed_height.url);
            play4Image.attr("data-type", "still");
            play4Image.attr("class", "gif");
            play4Image.attr("class", "card-image-top");

            var play4GifTitle = $("<h5>");
            play4GifTitle.attr("class","card-title");
            play4GifTitle.text("Playstation 4"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(play4Image);
            gifDiv.append(play4GifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#platform-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });


    console.log($("#playstation4").text());
    searchFor.push($("#playstation4").text());
    console.log(searchFor);
    $("#platform").hide();

});


$(document).on("click", "#xboxOne", function () {

    platformValue = 145;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=xbox=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body"); 
            // Creating an image tag
            var xboxImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            xboxImage.attr("src", results[0].images.fixed_height_still.url);
            xboxImage.attr("data-still", results[0].images.fixed_height_still.url);
            xboxImage.attr("data-animate", results[0].images.fixed_height.url);
            xboxImage.attr("data-type", "still");
            xboxImage.attr("class", "gif");
            xboxImage.attr("class", "card-image-top");

            var xboxGifTitle = $("<h5>");
            xboxGifTitle.attr("class","card-title");
            xboxGifTitle.text("Xbox One"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(xboxImage);
            gifDiv.append(xboxGifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#platform-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });


    console.log($("#xboxOne").text());
    searchFor.push($("#xboxOne").text());
    console.log(searchFor);
    $("#platform").hide();

});


// For Age Ranges ***************************************************

$(document).on("click", "#everyone", function () {
    ratingValue = 6;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=no%20age%20limit&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body"); 
            // Creating an image tag
            var everyoneImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            everyoneImage.attr("src", results[0].images.fixed_height_still.url);
            everyoneImage.attr("data-still", results[0].images.fixed_height_still.url);
            everyoneImage.attr("data-animate", results[0].images.fixed_height.url);
            everyoneImage.attr("data-type", "still");
            everyoneImage.attr("class", "gif");
            everyoneImage.attr("class", "card-image-top");

            var everyoneGifTitle = $("<h5>");
            everyoneGifTitle.attr("class","title");
            everyoneGifTitle.text("For All Ages"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(everyoneImage);
            gifDiv.append(everyoneGifTitle);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#age-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });


    console.log($("#everyone").text());
    searchFor.push($("#everyone").text());
    console.log(searchFor);
    $("#ageRange").hide();

});


$(document).on("click", "#teen", function () {


    ratingValue = 1;


    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=teen%20video%20gamer&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class", "card-body");
            // Creating an image tag
            var teenImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            teenImage.attr("src", results[0].images.fixed_height_still.url);
            teenImage.attr("data-still", results[0].images.fixed_height_still.url);
            teenImage.attr("data-animate", results[0].images.fixed_height.url);
            teenImage.attr("data-type", "still");
            teenImage.attr("class", "gif");
            teenImage.attr("class", "card-image-top");

            var teenImageGifTitle = $("<h5>");
            teenImageGifTitle.attr("class","title");
            teenImageGifTitle.text("Teen"); 

            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(teenImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#age-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });



    console.log($("#teen").text());
    searchFor.push($("#teen").text());
    console.log(searchFor);
    $("#ageRange").hide();

});

$(document).on("click", "#mature", function () {
    ratingValue = 16;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=mature&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var matureImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            matureImage.attr("src", results[0].images.fixed_height_still.url);
            matureImage.attr("data-still", results[0].images.fixed_height_still.url);
            matureImage.attr("data-animate", results[0].images.fixed_height.url);
            matureImage.attr("data-type", "still");
            matureImage.attr("class", "gif");

            var matureGifTitle = $("<h5>");
            matureGifTitle.attr("class","title");
            matureGifTitle.text("Mature"); 

            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(matureImage);
            gifDiv.append(matureGifTitle)
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#age-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });



    console.log($("#mature").text());
    searchFor.push($("#mature").text());
    console.log(searchFor);
    $("#ageRange").hide();

});

$(document).on("click", "#adult", function () {
    ratingValue = 23;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=adult&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var adultImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            adultImage.attr("src", results[0].images.fixed_height_still.url);
            adultImage.attr("data-still", results[0].images.fixed_height_still.url);
            adultImage.attr("data-animate", results[0].images.fixed_height.url);
            adultImage.attr("data-type", "still");
            adultImage.attr("class", "gif");

            var adultGifTitle = $("<h5>");
            adultGifTitle.attr("class","title");
            adultGifTitle.text("Adult"); 

            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(adultImage);
            gifDiv.append(adultGifTitle)
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#age-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });

    $.ageCheck({minAge: minAge = 18}); 

    console.log($("#adult").text());
    searchFor.push($("#adult").text());
    console.log(searchFor);
    $("#ageRange").hide();
});

// For Genres *****************************************


$(document).on("click", "#fighting", function () {

    genreValue = 9;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=video_game%20fighting&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            // Creating an image tag
            var fightImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            fightImage.attr("src", results[0].images.fixed_height_still.url);
            fightImage.attr("data-still", results[0].images.fixed_height_still.url);
            fightImage.attr("data-animate", results[0].images.fixed_height.url);
            fightImage.attr("data-type", "still");
            fightImage.attr("class", "gif");    

            var fightGifTitle = $("<h5>");
            fightGifTitle.attr("class","title");
            fightGifTitle.text("Fighting"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(fightImage);
            gifDiv.append(fightGifTitle)
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });

    console.log($("#fighting").text());
    searchFor.push($("#fighting").text());
    console.log(searchFor);
    $("#genre").hide();


});



$(document).on("click", "#puzzles", function () {

    genreValue = 18;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=video_game%20puzzles&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var puzzleImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            puzzleImage.attr("src", results[0].images.fixed_height_still.url);
            puzzleImage.attr("data-still", results[0].images.fixed_height_still.url);
            puzzleImage.attr("data-animate", results[0].images.fixed_height.url);
            puzzleImage.attr("data-type", "still");
            puzzleImage.attr("class", "gif");

            var puzzleGifTitle = $("<h5>");
            puzzleGifTitle.attr("class","title");
            puzzleGifTitle.text("Puzzles"); 

            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(puzzleImage);
            gifDiv.append(puzzleGifTitle)
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });

    console.log($("#puzzles").text());
    searchFor.push($("#puzzles").text());
    console.log(searchFor);
    $("#genre").hide();


});



$(document).on("click", "#rolePlaying", function () {

    genreValue = 5;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=video games dungeons and dragons&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var roleImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            roleImage.attr("src", results[0].images.fixed_height_still.url);
            roleImage.attr("data-still", results[0].images.fixed_height_still.url);
            roleImage.attr("data-animate", results[0].images.fixed_height.url);
            roleImage.attr("data-type", "still");
            roleImage.attr("class", "gif");

            var roleGifTitle = $("<h5>");
            roleGifTitle.attr("class","title");
            roleGifTitle.text("Role Playing"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(roleImage);
            gifDiv.append(roleGifTitle)
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });

    console.log($("#rolePlaying").text());
    searchFor.push($("#rolePlaying").text());
    console.log(searchFor);
    $("#genre").hide();


});


$(document).on("click", "#sport", function () {
    genreValue = 3;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=sports%20video%20games&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var sportsImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            sportsImage.attr("src", results[0].images.fixed_height_still.url);
            sportsImage.attr("data-still", results[0].images.fixed_height_still.url);
            sportsImage.attr("data-animate", results[0].images.fixed_height.url);
            sportsImage.attr("data-type", "still");
            sportsImage.attr("class", "gif");

            var sportsGifTitle = $("<h5>");
            sportsGifTitle.attr("class","title")    ;
            sportsGifTitle.text("Sport"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(sportsImage);
            gifDiv.append(sportsGifTitle)
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });


    console.log($("#sport").text());
    searchFor.push($("#sport").text());
    console.log(searchFor);
    $("#genre").hide();
});


$(document).on("click", "#adventure", function () {

    genreValue = 43;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=adventure%20video%20games&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var adventureImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            adventureImage.attr("src", results[0].images.fixed_height_still.url);
            adventureImage.attr("data-still", results[0].images.fixed_height_still.url);
            adventureImage.attr("data-animate", results[0].images.fixed_height.url);
            adventureImage.attr("data-type", "still");
            adventureImage.attr("class", "gif");

            var adventureGifTitle = $("<h5>");
            adventureGifTitle.attr("class","title");
            adventureGifTitle.text("Adventure"); 


            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(adventureImage);
            gifDiv.append(adventureGifTitle)
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });

    console.log($("#adventure").text());
    searchFor.push($("#adventure").text());
    console.log(searchFor);
    $("#genre").hide();


});


$(document).on("click", "#arcade", function () {


    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj&q=arcade%20style%20video%20game&limit=10&offset=0&rating=G&lang=en";
    genreValue = "";

    console.log(queryURL);
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            console.log(response);
            var results = response.data;

            var gifDiv = $("<div>");
            gifDiv.attr("class","card-body");
            // Creating an image tag
            var arcadeImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item

            arcadeImage.attr("src", results[0].images.fixed_height_still.url);
            arcadeImage.attr("data-still", results[0].images.fixed_height_still.url);
            arcadeImage.attr("data-animate", results[0].images.fixed_height.url);
            arcadeImage.attr("data-type", "still");
            arcadeImage.attr("class", "gif");

            var arcadeGifTitle = $("<h5>");
            arcadeGifTitle.attr("class","title");
            arcadeGifTitle.text("Arcade"); 

            // Appending the animalImage we created to the "gifDiv" div we created
            gifDiv.addClass("gifDiv");
            gifDiv.append(arcadeImage);
            gifDiv.append(arcadeGifTitle)
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#genre-gifs-appear-here").prepend(gifDiv);
            $("#gifs-appear-here").prepend(gifDiv);

        })

    // $("body").on("click", ".gif", function () {
    //     console.log("click")
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-type");
    //     // Then, set the image's data-state to animate
    //     // Else set src to the data-still value
    //     if (state === ("still")) {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-type", "animate");
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-type", "still");
    //     }
    // });

    console.log($("#arcade").text());
    searchFor.push($("#arcade").text());
    console.log(searchFor);
    $("#genre").hide();

});

$(document).on('click','img',function(){
    console.log("click")
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-type");
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === ("still")) {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-type", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-type", "still");
    }
});

var database = firebase.database();

//Intitial variables for the search count. 

var seSearch=0;
var stSearch=0;
var smSearch=0;
var saSearch=0;
var sfightSearch=0;
var spuzzleSearch=0;
var srpgSearch=0;
var ssportsSearch=0;
var sarcadeSearch=0;
var sadventureSearch=0;
var spcSearch=0;
var sxboxSearch=0;
var splaystationSearch=0;
var sswitchSearch=0;
var genreSelect;
var ageSelect;
var platformSelect;



database.ref().set({
    "SearchStats":{
        Ratings:{
            "Everyone":seSearch,
            "Teen":stSearch,
            "Mature":smSearch,
            "Adult":saSearch,
        },
        Genre:{
            "Fighting":sfightSearch,
            "Puzzles":spuzzleSearch,
            "Roleplaying":srpgSearch,
            "Sports":ssportsSearch,
            "Arcade":sarcadeSearch,
            "Adventure":sadventureSearch,
      },
        Platform:{
            "PC":spcSearch,
            "XboxOne":sxboxSearch,
            "Playstation4":splaystationSearch,
            "NintendoSwitch":sswitchSearch,
        }         
    },
});

database.ref("SearchStats").on("value", function(snapshot){

  database.ref("SearchStats/Genre").on("value", function(genreSnapshot){
  if(genreSnapshot.val().Adventure == null || undefined || NaN){
    adventureSearch = 0;
  }else{
      adventureSearch = genreSnapshot.val().Adventure;
  }
  if(genreSnapshot.val().Fighting == null || undefined || NaN){
      fightSearch = 0;
  }else{
        fightSearch = genreSnapshot.val().Fighting;
  }
  if(genreSnapshot.val().Arcade == null || undefined || NaN){
      arcadeSearch = 0;
  }else{
      arcadeSearch = genreSnapshot.val().Arcade;//ref("Genre/Arcade").val();
  }
  if(genreSnapshot.val().Puzzles == null || undefined || NaN){
      puzzleSearch = 0;
  }else{
      puzzleSearch = genreSnapshot.val().Puzzles; //ref("Genre/Puzzles").val();
  }
  if(genreSnapshot.val().Sports == null || undefined || NaN){//////////////////////////////
      sportsSearch = 0;
  }else{
      sportsSearch = genreSnapshot.val().Sports; 
  }
  if(genreSnapshot.val().Roleplaying == null || undefined || NaN){
      rpgSearch = 0;
  }else{
      rpgSearch = genreSnapshot.val().Roleplaying; //ref("Genre/Roleplaying").val();

  }
});

  database.ref("SearchStats/Ratings").on("value", function(ratingsSnapshot){
  if(ratingsSnapshot.val().Everyone == null || undefined || NaN){
      eSearch = 0;
  }else{
      eSearch = ratingsSnapshot.val().Everyone;
  }
  if(ratingsSnapshot.val().Teen == null || undefined || NaN){
      tSearch = 0;
  }else{
      tSearch = ratingsSnapshot.val().Teen
  }
  if(mSearch = ratingsSnapshot.val().Mature == null || undefined || NaN){
      mSearch = 0;
  }else{
      mSearch = ratingsSnapshot.val().Mature
  }
  if(ratingsSnapshot.val().Adult == null || undefined || NaN){
      aSearch = 0;
  }else{
      aSearch = ratingsSnapshot.val().Adult; //ref("Genre/Roleplaying").val();

  }
});
  database.ref("SearchStats/Genre").on("value", function(platformSnapshot){
  if(platformSnapshot.val().XboxOne == null || undefined || NaN){
      xboxSearch = 0;
  }else{
      xboxSearch = platformSnapshot.val().XboxOne; //ref("Genre/Roleplaying").val();

  }
  if(platformSnapshot.val().Playstation4 == null || undefined || NaN){
      playstationSearch = 0;
  }else{
      playstationSearch = platformSnapshot.val().Playstation4; //ref("Genre/Roleplaying").val();

  }
  if(platformSnapshot.val().NintendoSwitch == null || undefined || NaN){
      switchSearch = 0;
  }else{
      switchSearch = platformSnapshot.val().NintendoSwitch; //ref("Genre/Roleplaying").val();

  }
  if(platformSnapshot.val().PC == null || undefined || NaN){
      pcSearch = 0;
  }else{
      pcSearch = platformSnapshot.val().PC; //ref("Genre/Roleplaying").val();

  }
  });







    //xboxSearch = snapshot.val().XboxOne; //ref("Platform/Xbox One").val();
    //playstationSearch = snapshot.val().Playstation4; //ref("Platform/Playstation 4").val();
    //switchSearch = snapshot.val().NintendoSwitch; //ref("Platform/Nintendo Switch").val();
    //pcSearch = snapshot.val().pc; //ref("Platform/PC").val();









});

//
$("body").on("click", ".gen", function(){
  genreSelect = $(this).attr("value");
  console.log(genreSelect)
  });
//
$("body").on("click", ".plat", function(){
  platformSelect = $(this).attr("value");
  console.log(platformSelect)
  });
$("body").on("click", ".ages", function(){
  ageSelect = $(this).attr("value");
  console.log(ageSelect)
  });

$("body").on("click", "#search", function(){
   
  console.log(fightSearch);

  switch (genreSelect) {
      case "fighting":
          fightSearch++
          database.ref("SearchStats/Genre/Fighting").set(fightSearch);
        break;
      case "puzzles":
          puzzleSearch++
          database.ref("SearchStats/Genre/Puzzles").set(puzzleSearch);
        break;
      case "role-playing":
         rpgSearch++
         database.ref("SearchStats/Genre/Roleplaying").set(rpgSearch);
        break;
      case "sport":
        sportsSearch++
        database.ref("SearchStats/Genre/Sports").set(sportsSearch);
        break;
      case "adventure":
          adventureSearch++
          database.ref("SearchStats/Genre/Adventure").set(adventureSearch);
        break;
      case "arcade":
        arcadeSearch++
        database.ref("SearchStats/Genre/Arcade").set(arcadeSearch);
        break;
      default:
          break;
    }
    switch (ageSelect) {
      case "everyone":
          eSearch++
          database.ref("SearchStats/Ratings/Everyone").set(eSearch);
        break;
      case "teen":
          tSearch++
          database.ref("SearchStats/Ratings/Teen").set(tSearch);
        break;
      case "mature":
         mSearch++
         database.ref("SearchStats/Ratings/Mature").set(mSearch);
        break;
      case "adult":
        aSearch++
        database.ref("SearchStats/Ratings/Adult").set(aSearch);
        break;
      default:
          break;
    }
    switch (platformSelect) {
      case "nintendo-switch":
          switchSearch++
          database.ref("SearchStats/Platform/Nintendo Switch").set(switchSearch);
        break;
      case "pc":
          pcSearch++
          database.ref("SearchStats/Platform/PC").set(pcSearch);
        break;
      case "xboxOne":
         xboxSearch++
         database.ref("SearchStats/Platform/XboxOne").set(xboxSearch);
        break;
      case "playstation4":
        playstationSearch++
        database.ref("SearchStats/Platform/Playstation4").set(playstationSearch);
        break;
      default:
          break;
    }
});
