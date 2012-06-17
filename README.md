Blogger Widget
=============
List all posts.

##Usage:

###First , include jQuery library.

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
```

###Include widget
```html
<script src='https://raw.github.com/0xlen/bloggerWidget/master/widget.js'></script>
```

###Setting argument
```html
$('#log').bloggerWidget({
	/* Blogger URL */
	url: 'http://len.hack-stuff.com',
	/* Loading img */
	img: 'http://ppt.cc/689~'
})
```

##Sample
* Create new tab

* ```html
<style>
    #log li ul{
        max-height: 300px;
        overflow: auto;
    }
</style>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src='https://raw.github.com/0xlen/bloggerWidget/master/widget.js'></script>
<script>
$(function(){
    $('#log').bloggerWidget({
        url: 'http://len.hack-stuff.com',
        img: 'http://ppt.cc/689~'
     })
});
</script>
<ul id="log"></ul>
   ```

* [http://len.hack-stuff.com/p/post.html](http://len.hack-stuff.com/p/post.html)
