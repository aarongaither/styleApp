$(document).ready(function() {
    function setUser (name) {
        $('#modal-btn-one').hide();
        $('#modal-btn-two').hide();
        $('#signed-in-name').show().text(name);
        $('#sign-out-btn').show().attr('href', '../api/auth/signout');
        $('#modal-two').fadeOut("fast", function() {});
    }

    function unSetUser () {
        $('#signed-in-name').hide().text('name');
        $('#sign-out-btn').hide().attr('href', '');
        $('#modal-btn-one').show();
        $('#modal-btn-two').show();
    }

    function checkAuth () {
       $.get("/api/auth/check", function(data) {
            console.log(data ? 'user: ' + data : 'No user logged in.')
            data ? setUser(data) : unSetUser();
       }) 
    }

    checkAuth()

});