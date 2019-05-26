// DISLIKED BUTTON
$(".disliked-button").click(function(){
    console.log("Disliked button clicked!")
    //$(this).addClass("disliked-button-clicked"); // Change color when button clicked
    var partNumber = this.getAttribute('data-part-number'); 
    var token = this.getAttribute('data-token');
    var data = {
        part_number: partNumber,
        button: "disliked",
        csrfmiddlewaretoken : token
    };
    
    $.post("/products/ratings/", data).done(function(response)  {
        // Do stuff once you get the response back, like updating the like button's CSS
        console.log(response);
        if(response['success']) {
            console.log(response);
            $('.prod-liked').text(response['new_liked']);
            $('.prod-disliked').text(response['new_disliked']);
        } 
        else {
            console.log('it failed :(')
            console.log(response)
        }
    });
})

// LIKED BUTTON
$(".liked-button").click(function(){
    console.log("Liked button clicked!")
    //$(this).addClass("liked-button-clicked"); // Change color when button clicked
    var partNumber = this.getAttribute('data-part-number');
    var token = this.getAttribute('data-token');
    var data = {
        part_number: partNumber,
        button: "liked",
        csrfmiddlewaretoken: token
    };
    
    $.post("/products/ratings/", data).done(function(response)  {
        // Do stuff once you get the response back, like updating the like button's CSS
        if(response['success']) {
            $('.prod-liked').text(response['new_liked']);
            $('.prod-disliked').text(response['new_disliked']);
        } 
        else {
            console.log('it failed :(')
            console.log(response)
        }
    });
})