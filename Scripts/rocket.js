
$(document).ready(function() {

    $("#rocket").click(function() {
        $(this).css("animation", "blastoff 1.1s");

        window.setTimeout(function () {
            window.location.href = "CPlusProjects.html#Captured";
        }, 1000);
    });


    lightSwitch(0);

    function lightSwitch(num) {
        if($("#l" + num).length != 0) {
            $("#l" + num).css("color", "white");

            window.setTimeout(function () {
                lightSwitch(parseInt(num) + 1);
            }, 150);
        }
        else {
            $(".fade").css("animation", "fadein 3.0s");
            $(".fade").css("opacity", 1);
        }
    }

});