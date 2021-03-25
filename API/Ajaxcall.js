$(document).ready(function(){
    $.ajax({
        url :'http://192.168.0.143:8000',
        data :'{"data","TEST"}',
        type : 'POST',
        jsonCallback : 'callback',
        success : function(data){
            var ret = jQuery.parseJSON(data);
            $('#get-response').html(ret.msg);
            console.log('Success.');
        },
        error: function(xhr,status,error){
         console.log('Error :' + error.message);
         $('#get-response').html('Error connecting to the server.');
        },
    });
});