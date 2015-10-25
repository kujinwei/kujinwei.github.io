$(document).ready(function(){
    $('a').on('click',function(event){
        var link = $(this).attr('href');
        var target = $(this).attr('target');
        $.get(link, {}, function(data){
            $('#'+target).html(data);
        }, 'html');
        event.preventDefault();
    });
});