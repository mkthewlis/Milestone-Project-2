//Set results at zero at the beginning of the quiz
let results = 0;

//Only runs function when page is ready
$(document).ready(function(){


    //Adds class to correct answer to change background color - but this only adds one point per turn
    $('.true').one('click', function() {
        $(this).addClass('correct');
        //Increases user result by one point
        results ++;
        });



    //Adds class to incorrect answer to change background color
    $('.false').click(function(){
        $(this).addClass('incorrect');
        });
});

    
