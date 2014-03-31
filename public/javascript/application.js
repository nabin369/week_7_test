$(function(){
	animateTweetInputBox();
	scrolling();
});

function animateTweetInputBox(){
	$('#tweet').focus(function(){
		$(this).animate({
			height: '90px'
		}, 500, function(){

		});
		$('.miniprofile').animate({
			height: '320px'
		}, 500, function(){

		});
	});

	$('#tweet').blur(function(){
		$(this).animate({
			height: '18px'
		}, 500, function(){

		});
		$('.miniprofile').animate({
			height: '250px'
		}, 500, function(){

		});
	});
}

function spinnerInit() {
		var opts = {
		  lines: 10, // The number of lines to draw
		  length: 5, // The length of each line
		  width: 2, // The line thickness
		  radius: 7, // The radius of the inner circle
		  corners: 1, // Corner roundness (0..1)
		  rotate: 0, // The rotation offset
		  direction: 1, // 1: clockwise, -1: counterclockwise
		  color: '#000', // #rgb or #rrggbb or array of colors
		  speed: 2, // Rounds per second
		  trail: 60, // Afterglow percentage
		  shadow: false, // Whether to render a shadow
		  hwaccel: false, // Whether to use hardware acceleration
		  className: 'spinner', // The CSS class to assign to the spinner
		  zIndex: 2e9, // The z-index (defaults to 2000000000)
		  top: 'auto', // Top position relative to parent in px
		  left: 'auto' // Left position relative to parent in px
		};
		var target = document.getElementById('spinner-container');
		var spinner = new Spinner(opts).spin(target);
   	$('.spinner-feed-post').show()
		$('#spinner-container').css("visibility", "visible")
	}

	function scrolling(){
		var posts = "<div class='content-stream'><img src='../public/images/techno.jpeg'>"
		var posts2	= "<div class='content-stream-header'>Praesent porttito @porttito - 1h</div>"
		var posts3	= "<div class='content-tweet'>Vestibulum pretium, purus et congue suscipit, justo  dapibus purus, in ultricies dui orci a erat. @tempor</div>"
		var posts4	= "<div class='content-footer'><a href='/'>Expand</a></div></div>"
		var finalPost = posts+posts2+posts3+posts4;

		$(window).scroll(function(){
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
    		
    		spinnerInit()

    		setTimeout(function() {
 					$('.spinner').fadeOut();
   				$('.main-content').append(finalPost)
   				$('.spinner-feed-post').remove().insertAfter($(".main-content:last"))
   				$('.spinner-feed-post').hide()
				}, 2000)
    }
		});
	}

