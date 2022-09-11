$( document ).ready(function() {
    jQuery.get("http://ipinfo.io", function(response) {
        var negara = response.country;
        var isi = "";
        if(negara == "SG"){
            isi = "<div id=repeat class=box><a href='https://himovies.top/home'></a><div class=margin><div class=box-content><p class=ellipses id=title><img src='https://img.himovies.top/xxrz/100x100/100/14/e4/14e40a8f6e805f4ecde5286918890165/14e40a8f6e805f4ecde5286918890165.png'/>Free Movie 2022</p></div></div></div>";
        }
        $("#recomended").html(isi);
    });
    
});
