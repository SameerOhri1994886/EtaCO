$(document).ready(function(){
    $.ajax({
        url :'http://192.168.0.143:8000',
        dataType :'text',
        type : 'post',
        contentType :'application/x-www-form-urlencoded',
        data : $(this).serialize(),
        success : function(data,textStatus,jQxhr){
            $('#post').html(data);
         },
         error: function(jqXhr,textStatus,errorThrown){
         console.log(errorThrown);
        }
});
});