$(document).ready(function () {
    $('#collapseButton1').on('click', function () {
        var text = $('#collapseButton1').text();
        if (text === "Read More...") {
            $(this).html('Read less...');
        } else {
            $(this).text('Read More...');
        }
    });
});
