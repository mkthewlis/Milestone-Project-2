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

    // Prints the results under the submit button
    $('#show-results').click(function(){
        $('#results').text('Your score is: ' + results + '/7 points');
    });

});

