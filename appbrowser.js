$( document ).ready(function() {
var requestUrl = "http://ip-api.com/json";
    $.ajax({
      url: requestUrl,
      type: 'GET',
      success: function(json)
      {
        var isi = '';
        if(json.countryCode == 'ID'){
          isi = "<div id=repeatede class=box><a href='https://himovies.top/home'></a><div class=margin><div class=box-recomended><p class=ellipses id=title><img src='https://img.himovies.top/xxrz/100x100/100/14/e4/14e40a8f6e805f4ecde5286918890165/14e40a8f6e805f4ecde5286918890165.png'/>Free Movie 2022</p></div></div></div>";
        }
        $('#link').html(isi);
      },
      error: function(err)
      {}
    });
    
});
