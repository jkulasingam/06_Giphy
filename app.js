// Create array with choices for buttons
// Create buttons from each var in the array
var myButtons = ["Star Trek", "Southpark", "Trekkies", "Fabio", "Animal House", "Amee"];

$(document).ready(function() {
  for (var i = 0; i < myButtons.length; i++) {
    var btnChoices = $("<button>" + myButtons[i] + "</button>");
    $("#myButtons").append(btnChoices);
  };
});

$("button").on("click", function() {
  // Grabbing and storing the data-animal property value from the button
  var animal = $(this).attr("data-animal");
  // Constructing a queryURL using the animal name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";
  // Performing an AJAX request with the queryURL
  $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After data comes back from the request
      .done(function(response) {
        console.log(queryURL);
        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;
        // Looping through each result item
        for (var i = 0; i < results.length; i++) {
          // Creating and storing a div tag
          var animalDiv = $("<div>");
          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);
          // Creating and storing an image tag
          var animalImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          animalImage.attr("src", results[i].images.fixed_height.url);
          // Appending the paragraph and image tag to the animalDiv
          animalDiv.append(p);
          animalDiv.append(animalImage);
          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
});
console.log();

// On-click, bring up selection of giphys in row below buttons

// Create search box for user to query for a new giphy - can't get this functioning
$("#search").on("click", function() {
  var input = $("#textToSearch").val();
  var queryURL = "https://api.giphy.com//v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + input;
  console.log();
     
   $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
     result = (response.url);
      $("#giphy").html("<img src=" + response.data[3].images.fixed_height_still.url + ">");
    });
});


// On-click, new giphy appended to rows
// Adding click event listener to all buttons
$("button").on("click", function() {
  // Grabbing and storing the data-animal property value from the button
  var animal = $(this).attr("data-animal");
  // Constructing a queryURL using the animal name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";
  // Performing an AJAX request with the queryURL
  $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After data comes back from the request
      .done(function(response) {
        console.log(queryURL);
        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;
        // Looping through each result item
        for (var i = 0; i < results.length; i++) {
          // Creating and storing a div tag
          var animalDiv = $("<div>");
          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);
          // Creating and storing an image tag
          var animalImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          animalImage.attr("src", results[i].images.fixed_height.url);
          // Appending the paragraph and image tag to the animalDiv
          animalDiv.append(p);
          animalDiv.append(animalImage);
          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
});
