$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	console.log(scroll);
	$('.zoom img').css({
		width: (100 + scroll/5) + '%'
		,top: -(scroll/10) + '%',
		'-webkit-filter': 'blur('+(scroll/200)+'px)',
		filter: 'blur('+(scroll/200)+'px)'
	});
});

$('a').on('click', function(ev){
	ev.preventDefault();
	$('html, body').animate({scrollTop:$($(this).attr('href')).offset().top},400,'linear');
});
