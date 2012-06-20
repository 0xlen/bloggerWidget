Blogger Widget 1.1rc
=============

bloggerWidget 

is a widget can list your blogger posts

with

* title
* summary
* link.

It can use on

* Google Blogger
* Your own blog
* personal website ...etc

The bloggerWidget developed in jQuery and work on Internet Explorer ,Fifrefox , Chrome.

##License

bloggerWidger released under the MIT License.

##How to use?

###include jQuery library.

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
	/* The Loading img */
	img: 'http://ppt.cc/689~'
})
```

##Sample
* [http://len.hack-stuff.com/p/post.html](http://len.hack-stuff.com/p/post.html)

* ```html
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
