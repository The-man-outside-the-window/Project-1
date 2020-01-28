// This is the ajax call
//we are digging into jquery object with dot notation and using the ajax method
//required parameters: key, q

var apiKey = "";
var userQ = "";
    $.ajax(
        {
        URL: "http://api.linkpreview.net/?key=" + apiKey + "&q=" + userQ + "https://www.google.com",
       
        success: function() {
            console.log("api call succeded")
            
        },

        error: function() {
            console.log("api call failed")
            alert("Failed to find anything")
        }
    });

