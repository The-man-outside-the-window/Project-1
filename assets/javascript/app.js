// This is the ajax call
//we are digging into jquery object with dot notation and using the ajax method
//required parameters: key, q

$(document).ready(function() {
    $("textarea[name*='user_status']").blur(function () {
      var target = $(this).val();
      $.ajax({
        url: "https://api.linkpreview.net",
        dataType: 'jsonp',
        data: {q: target, key: '5a2e292e7d25bb63a2d3b4c63524cd10abe39420dc68c'},
        success: function (response) {
          $("#show_lnk").html('<img src="'+response.image+'"><h3>'+response.title+'</h3><h4>'+response.description+'</h4><a href="'+response.url+'">'+response.url+'</a>');
        }
      });
    });
  });