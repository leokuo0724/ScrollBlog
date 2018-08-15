// 滾輪滑動
$(window).scroll(function(){
	zoomImg();
	navbarScroll();
	signatureScroll();
});

// MoveIt function
$.fn.moveIt = function(){
	var instances = [];

	$(this).each(function(){
		instances.push(new moveItItem($(this)));
	});

	window.addEventListener('scroll',function(){
		var scrollTop = $(window).scrollTop();
		instances.forEach(function(inst){
			inst.update(scrollTop);
		});
	}, {passive: true});
}
var moveItItem = function(ev){
	this.ev = ev;
	this.speed = parseInt(this.ev.attr('data-scroll-speed'));
};
moveItItem.prototype.update = function(scrollTop){
	this.ev.css('transform','translateY('+ -((scrollTop-2210)/(this.speed/1.2)) +'px)');
};

// 啟動contact中的動畫
$('.wrapper .box').moveIt();

// 呼叫簽名動畫
function signatureScroll(){
	var scroll = $(window).scrollTop();
	if(scroll>1400 && scroll<1440){
		startTimer();
	}
	// if(scroll>1300 && scroll<1431){
	// 	var minorScroll = scroll-1300;
	// 	var newScroll = parseInt(minorScroll / 4);
	// 	var src = 'img/'+newScroll+'.png';
	// 	$('#animator img').attr('src',src);
	// }
}

// 放大首圖
function zoomImg(){
	var scroll = $(window).scrollTop();
	$('.zoom img').css({
		width: (100 + scroll/5) + '%'
		,top: -(scroll/10) + '%',
		'-webkit-filter': 'blur('+(scroll/200)+'px)',
		filter: 'blur('+(scroll/200)+'px)'
	});
}
// 導航欄下滑active
function navbarScroll(){
	var y = window.scrollY;
	// console.log(y);
	if(y>470){
		$('.nav').addClass('active');
	} else if(y<470){
		$('.nav').removeClass('active');
	}
}

// 點擊滑動到指定點
$('a').on('click', function(ev){
	ev.preventDefault();
	var offsetValue = $($(this).attr('href')).offset().top;
	$('html, body').animate({scrollTop:offsetValue-25},400,'linear');
	// $('#animator img').attr('src','img/32.png');
	$('#animator img').attr('src','');
	startTimer();
});

// 播放signature
var timer = null;
var page = 0;
function startTimer(){
	if(timer == null){
		timer = setInterval(signature,50);
	}
}
function signature(){
	page++;
	var src = 'img/'+page+'.png';
	$('#animator img').attr('src',src);
	if(page >= 32){
		page = 0;
		clearInterval(timer);
		timer = null;
	}
}
