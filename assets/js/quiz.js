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
        $(".result-display").show();
        $(".results-btn").show();
        if (results > 5){
            console.log('test');
            $('#results').text('Congratulations! Your score is: ' + results + '/7 points');
        } else if (results < 5 && results > 2){
            console.log('oops');
            $('#results').text('Well done for trying! Your score is: ' + results + '/7 points');
        } else {
            $('#results').text('Better luck next time! Your score is: ' + results + '/7 points');           
        }
    });
});