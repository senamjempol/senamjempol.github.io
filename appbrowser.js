$( document ).ready(function() {
    jQuery.get("http://ipinfo.io", function(response) {
        $("#recomended").html(response.country);
    });
    
});
