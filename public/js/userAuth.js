$(document).ready(function() {
    function setUser () {
        //change links to profile link, with name
        //add signout link
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