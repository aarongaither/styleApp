$(document).ready(function() {
    function setUser () {
        $('#modal-btn-one').hide();
        $('#modal-btn-two').hide();
        $('#signed-in-name').show();
        $('#sign-out-btn').show();
    }

    function checkAuth () {
       $.get("/api/auth/check", function(data) {
            console.log(data ? 'user: ' + data : 'No user logged in.')
            if (data) {
                setUser()
            }
       }) 
    }

    checkAuth()

});