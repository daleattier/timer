$(document).ready(function() {
    // timer function
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        var refresh = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            var output = minutes + " : " + seconds;
            display.text(output);
            if(minutes == 03 & seconds == 00){
                display.text("3 min warning");
                var music = $("#over_music")[0];
                music.play();
            }
            $("title").html(output + " - TimerTimer");
            if( document.getElementById('ispaused').checked == false){
                if (--timer < 0) {
                    display.text("Time's Up!");
                    //clearInterval(refresh);  // exit refresh loop
                    if (timer == -1){
                        var music = $("#over_music")[0];
                        music.play();
                    }
                    if (timer < -60) {
                        clearInterval(refresh);  // exit refresh loop
                        var music = $("#over_music")[0];
                        music.play();
                        startTimer(duration, display);
                    }
                }
            } 
        }, 1000);

    }

    // start timer
    jQuery(function ($) {
        var display = $('#time');
        startTimer(Seconds, display);
    });

    // show help information
    $('#help-info').hide();
    $('#help-btn').hover( function() { $('#help-info').toggle(); } );
})
