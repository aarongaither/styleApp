$(document).ready(function() {
    function setUser (user) {
        $('#modal-btn-one').hide();
        $('#modal-btn-two').hide();
        $('#signed-in-name').show().text(user.username);
        $('#sign-out-btn').show().attr('href', '../api/auth/signout');
        $('#modal-two').fadeOut("fast", function() {});
    }

    function unSetUser () {
        $('#signed-in-name').hide().text('name').attr('href', '');
        $('#sign-out-btn').hide().attr('href', '');
        $('#modal-btn-one').show();
        $('#modal-btn-two').show();
    }

    function checkAuth () {
       $.get("/api/auth/check", function(user) {
            console.log(user)
            console.log(user ? 'user: ' + user.username : 'No user logged in.')
            user ? setUser(user) : unSetUser();
       }) 
    }

    checkAuth()

});