$( document ).ready(function() {
var requestUrl = "http://ip-api.com/json";

    $.ajax({
      url: requestUrl,
      type: 'GET',
      success: function(json)
      {
        $('#recomended').html(json.country);
      },
      error: function(err)
      {}
    });
    
});
