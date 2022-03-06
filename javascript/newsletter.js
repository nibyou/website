
document.addEventListener("DOMContentLoaded", function(event) {

    $('#ny-m5-submit').click(function () {
        $.ajax({
            url: "https://phpapi.nibyou.com/mailinglist-client/api.php",
            data: {'email': $('#email').val()},
            success: function(result) {
                formSuccessMessage();
            },
            error: function(result) {
                formErrorMessage();
            }
        });
    });

    let formSuccessMessage = function () {
            $('#email').css('display', 'none');
            $('#ny-m5-submit').css('display', 'none');
            $('#ny-m5-success').css('display', 'block');
    };

    let formErrorMessage = function () {
            $('#email').css('display', 'none');
            $('#ny-m5-submit').css('display', 'none');
            $('#ny-m5-error').css('display', 'block');
    }
});