//Set results at zero at the beginning of the quiz
let results = 0;

//Only runs function when page is ready
$(document).ready(function(){

    //Changes background color depending on answer by adding appropriate class
    $('.quiz-btn').click(function() {
        if ($(this).hasClass('true')) {
            $(this).addClass('correct');
        } else {
            $(this).addClass('incorrect');
        }
    });

    //Increases user result by one point if correct answer is selected, and an extra point if bonus is correct
    $('.true').one('click', function() {
        results ++;
        if ($(this).hasClass('bonus')){
        results ++;
        }
        });

     //Fades out other possible quiz answers when one has been selected 
    $('.quiz-btn').click(function(){
        $(this).siblings().fadeOut('300');
    });

    //Function to reveal results
    $('#show-results').click(function(){
        //Shows the box with user's results
        $(".hide-display").show();
        $(".results-btn").show();
        //States user's score with personalised prompt to try again
        $('#results').text('Your score is: ' + results + '/7 points');
        if (results === 7){
            $('.try-again').text(`You're an expert! Why not test someone else next?`)
        } else if (results > 5){
            $('.try-again').text('Well done! Why not test someone else next?')
        } else if (results < 5 && results >= 1){
            $('.try-again').text('Good effort! Would you like try again?')
        } else {
            $('.try-again').text('It looks like something went wrong! Why not try again?')
        }
    });

    //Refreshes the page so the user can start again
    $('#refresh').click(function(){
        location.href=location.href;
    });

});
