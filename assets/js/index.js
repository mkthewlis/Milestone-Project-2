//Runs jQuery code when page is ready
$(document).ready(function(){

//Smooth scroll by matching href to id of destination
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
            //Speed set to 700 milliseconds
            }, 700, 'linear')
        })
    });

// Source code: https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/