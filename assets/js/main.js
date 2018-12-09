function submitForm() {
    //get form values
    //make AJAX post
    //hide form
    $('#form').css({'display': 'none'}).fadeOut();
    //show spinner
    $('.spinner').css({'display': 'block'}).fadeIn();
    //on success response show message

    setTimeout(function () {
        $('.spinner').css({'display': 'none'}).fadeOut();
        $('.success-message').css({'display': 'block'}).fadeIn();
    }, 500);
}