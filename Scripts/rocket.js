
$(document).ready(function() {

    $("#Rocket").click(function() {
        $(this).css("animation", "blastoff 1.1s");

        window.setTimeout(function () {
            window.location.href = "CPlusProjects.html#Captured";
        }, 1000);
    });

});