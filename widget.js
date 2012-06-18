(function($){
    $.fn.bloggerWidget = function(set){
        var settings = $.extend({
            url : 'http://steven5538.hack-stuff.com' ,
            img : 'img/loading.gif' ,
        } ,set)

    $(this).each(function(){
        var obj = this
        $(obj).append('<div style=text-align:center;> \
                       <img id=loadingICO src=' + settings.img +
                      ' /></div>')
        $.ajax({
            url: settings.url + '/feeds/posts/summary?alt=json&callback=?' ,
            type: 'GET' ,
            dataType: 'json' ,
            cache: false ,
            async: true ,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "text/javascript");
            },
            success: function(rss){
                $(rss.feed.entry).each(function(i){
                    var link;
                    for (var l = 0 ; l < this.link.length ; l++){
                        if ( this.link[l].rel == 'alternate' ){
                            link = this.link[l].href;
                        }
                    }
                    $( obj ).append('<li><a href=###>'
                    + this.title.$t
                    + '</a></li>' );

                    $( obj ).find('li').eq(i).append('<ul>'
                    + this.summary.$t.replace(/\n/g,'<br/>')
                    + '<br/>'
                    + '<a target=_TOP href='
                    //+ $('link[rel="alternate"]',this).attr('href')
                    + link
                    + '>Read more...</a>'
                    + '</ul>');

                   $( obj ).find('li ul').eq(i).slideUp('fast');
                   $( obj ).find('li').filter(':has(a)').eq(i).click(function(){
                       $( obj ).find('li ul').eq(i).toggle('slow');
                   })
                })
            } ,
            complete: function(){
                $('#loadingICO').remove();
            }

        });
    });
  }  
})(jQuery);
