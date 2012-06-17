(function($){
    $.fn.bloggerWidget = function(set){
        var settings = $.extend({
            url : 'http://len.hack-stuff.com' ,
            img : 'img/loading.gif' ,
        } ,set)

    $(this).each(function(){
        var obj = this
        $(obj).append('<div style=text-align:center;> \
                       <img id=loadingICO src=' + settings.img +
                      ' /></div>')
        $.ajax({
            url: settings.url + '/feeds/posts/summary' ,
            type: 'GET' ,
            dataType: 'xml' ,
            cache: false ,
            async: true ,
            success: function(rss){
                $('entry',rss).each(function(i){
                    $( obj ).append('<li><a href=###>'
                    + $('title',this).text()
                    + '</a></li>' );

                    $( obj ).find('li').eq(i).append('<ul>'
                    + $('summary',this).text().replace(/\n/g,'<br/>')
                    + '<br/>'
                    + '<a target=_TOP href='
                    + $('link[rel="alternate"]',this).attr('href')
                    + '>Read more...</a>'
                    + '</ul>');

                   $( obj ).find('li ul').eq(i).slideUp('fast');
                   $( obj ).find('li').filter(':has(a)').eq(i).click(function(){
                       $( obj ).find('li ul').eq(i).toggle('slow');
                   })
                })
            }

        });

       $('#loadingICO').remove();
    });
  }  
})(jQuery);
