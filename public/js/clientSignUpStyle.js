let signedInUsername = $('#signed-in-name').hide();
let signOutBtn = $('#sign-out-btn').hide();

$('#modal-btn-one').on('click', function() {
    $('#modal-one').fadeIn("fast", function() {});
});

$('#modal-btn-two').on('click', function() {
    $('#modal-two').fadeIn("fast", function() {});
});

$('#cancel-btn').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});

$('#cancel-btn-two').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});

$('.cancel-signup').on('click', function() {
    $('.modal').fadeOut("fast", function() {});
});