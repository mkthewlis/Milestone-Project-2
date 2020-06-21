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

    //Increases user result by only one point if correct answer is selected
    $('.true').one('click', function() {
        results ++;
        });


        
});