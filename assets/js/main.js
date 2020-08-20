function updateScroll() {
    $("#chat").animate({
        scrollTop: $('#chat').prop("scrollHeight")
    }, 1000);
}

$(document).ready(function() {
    //Prevent form submissions
    $("form").submit(function(e) {
        e.preventDefault();
    });

    // scroll chat smoothly to bottom
    $("#send_button").on('click', updateScroll);
});