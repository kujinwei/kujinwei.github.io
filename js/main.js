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

function loadContent(htmlUrl){
    $.get(htmlUrl, {}, function(data){
        $('#container').html(data);
    }, 'html');
}

loadContent("html/it.html");
