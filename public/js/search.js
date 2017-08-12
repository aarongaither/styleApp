$(document).ready(function() {
    $(document).on("click", "#search-all", function(){
        var svcSearch = $('#service-search').val().replace(' ', '+');
        var addySearch = $('#addyinput').val().replace(/ /g, '+');
        window.location.href = "../list/?service=" + svcSearch +"&address=" + addySearch+"/"
    });

    $(document).on("click", "#submit-login", function () { 
        $.post("/api/auth/login", {
            username : $('#login-username').val().trim(),
            password : $('#login-password').val().trim()
        }, function () {
            checkAuth()
        })

    });
});