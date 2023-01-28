$(function() {
gundongTxt($(".contanted-build .main-profession"), 3000, 5 );
gundongTxt($(".contanted-index .main-info"), 1000, 5);
gundongTxt($(".contanted-control .module-left .main-info"), 2000, 4);
gundongTxt($(".contanted-control .module-center .main-info"), 3000, 5);
gundongTxt($(".contanted-farm .module-left .main-info"), 2000, 4);
gundongTxt($(".contanted-farm .module-center .main-info"), 3000, 5);
gundongTxt($(".contanted-each .info-list-box"), 5000, 5 );



!$('.banner-common').length > 0 || (function () {
// 党建banner
let timejg=3000;//轮播间隔时间
let size = $('.banner-img ul li').size();
for(let i=1;i<=size; i++){
	$('.banner-btn').append('<a href="javascript:(void)"></a>')
}

$('.banner-img ul li').eq(0).show();
$('.banner-btn a').eq(0).addClass('active')
$('.banner-btn a').mouseover(function(){
	$(this).addClass('active').siblings().removeClass('active');
	let index = $(this).index();
	i=index;
	$('.banner-img ul li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
});

let i = 0;
let time = setInterval(move,timejg);

function move(){
	i++;
	if(i==size){
		i=0;
	}
	$('.banner-btn a').eq(i).addClass('active').siblings().removeClass('active');
	$('.banner-img ul li').eq(i).fadeIn(300).siblings().fadeOut(300);
}

$('.banner-build').hover(function(){
	clearInterval(time);
},function(){
	time = setInterval(move,timejg);
});
})();


// cloud audio
$('.main-cloud-audio .audio-box')
	.find('.btn')
	.on('click',
	function(){
		if ($(this).is('.stop')){
			$(this)
				.find('.icon')
				.removeClass('icon-audio')
				.addClass('icon-stop')
				.end()
				.find('.txt')
				.text('点击停止')
				.end()
				.removeClass('stop');
			$('#audio-cloud')[0].play();
		}else{
			$(this)
				.find('.icon')
				.addClass('icon-audio')
				.removeClass('icon-stop')
				.end()
				.find('.txt')
				.text('点击开始')
				.end()
				.addClass('stop');
			$('#audio-cloud')[0].pause();
		}
	}
);

// $('.main-cloud-audio .audio-box')
// 	.find('.icon-sound')
// 	.on('click',
// 	function(){
// 		$('#audio-cloud').prop('volume', 0)
// 		// if( $('#audio-cloud').is('.jingyin') ){
// 		// 	$('#audio-cloud').prop('volume', 100).removeClass('jingyin');
// 		// }else{
// 		// 	$('#audio-cloud').prop('volume', 0)
// 		// 	$('#audio-cloud').addClass('jingyin');
// 		// }
// 	}
// );
// cloud right
$('.main-cloud-audio .audio-checkbox-box')
	.find('.qu-checkbox')
	.on('click',
	function(){
		if ($(this).parent().is('.more')){
			$(this).parent().find('.checkbox').addClass('cur');
			$(this).next('.cun-checkbox-main').show();
			$(this).parent().removeClass('more');
		}
		// else{
		// 	$(this).parent().addClass('more');
		// 	$(this).parent().find('.checkbox').removeClass('cur');
		// 	$(this).parent().find('.cun-checkbox-main').hide();
		// };
	}
);


// 全选反选
$(".audio-checkbox-box .checkbox-list .qu-checkbox").find('input[type=checkbox]').on("change", function () {
	if (this.checked) {
			$(this).parent().next().find("input[type='checkbox']").prop("checked", true);
	} else {
			$(this).parent().next().find("input[type='checkbox']").prop("checked", false);
	}
	let checkedLengthAll = $('.audio-checkbox-box .cun-checkbox').find('input[type=checkbox]:checked').length;
	$('.audio-box .title').find('.num').text(checkedLengthAll);
});
$(".audio-checkbox-box .checkbox-list .cun-checkbox input").on("change", function () {
	let inputLength = $(this).parents('.cun-checkbox-main').find('input').length;
	let checkedLength = $(this).parents('.cun-checkbox-main').find('input[type=checkbox]:checked').length;
	let checkedLengthAll = $('.audio-checkbox-box .cun-checkbox').find('input[type=checkbox]:checked').length;
	 $('.audio-box .title').find('.num').text(checkedLengthAll);
	if (checkedLength == inputLength) {
			$(this).parents('.cun-checkbox-main').siblings('.qu-checkbox').find("input[type='checkbox']").prop("checked", true);
	} else {
			$(this).parents('.cun-checkbox-main').siblings('.qu-checkbox').find("input[type='checkbox']").prop("checked", false);
	}
});
// cctv
// $('.contanted-cctv .list-box')
// 	.find('.second-list')
// 	.on('click', 
// 	function(){
// 		let videoLenght = $('.video-box.show').length;


// 		$('.video-box')
// 			.eq(0)
// 			.addClass('show')
// 			.show();
// 		// console.log(videoLenght);
// 	});
$('.contanted-cctv .main-video')
	.find('.btn-close')
	.on('click', 
	function(){
		$(this)
			.parent()
			.hide()
			.removeClass('show');
		let videoLenght = $('.video-box.show').length;
		if( videoLenght == 1 ){
			$('.video-box.show')
				.css({
					width:'100%',
					margin:'0'
				});
		}
	}
);



// 二级菜单
$('.page-contanted').find('.frist-list').on('click', function(){
	if( $(this).parent().is('.show') ){
		$(this)
		.nextAll('.second-list')
		.hide()
		.end()
		.parent().removeClass('show');
	}else{
		$(this)
		.nextAll('.second-list')
		.show()
		.end()
		.parent().addClass('show');
	}
});
// link
$('.btn-back-head').on('click', function(){
	window.history.go(-1);
});
$('.contanted-control .list-cctv, .list-aqxc').find('.list').on('click', function(){
	window.location.href='/cctv.html'
});
	// video-layer
$('.contanted-farm .list-cctv')
	.find('.list')
	.on('click', 
	function(){
		if( !$(this).is('.more') ){
			$('.page-mask,.layer-video')
				.show();
		}
	});
$('.list-cctv')
	.find('.second-list')
	.on('click', 
	function(){
		$('.page-mask,.layer-video')
			.show();
	}
);
// layer
$('.layer-video').find('.btn-close').on('click', function(){
	$(this).parents('.layer-video').hide();
	$('.page-mask').hide();
});
// map-nav
$('.map-nav').find('.nav').on('click', function(){
	let index = $(this).index();
	$(this).addClass('cur').siblings().removeClass('cur');
	if ( index == 0 ){
		$(this).parents('.module-center').find('.a_link').show()
		$('.module-center-map').find('img').hide();
	}else{
		$('.module-center-map').find('img').show().attr({src:'./images/img-08-'+ index++ +'.png'});
		$(this).parents('.module-center').find('.a_link').hide()
	}
	

});
// $('.map-nav').find('.nav').eq(1).on('click', function(){
// 	$('.module-center-map').show().find('img').attr({src:'./images/img-08-1.png'});
// });
// $('.map-nav').find('.nav').eq(2).on('click', function(){
// 	$('.module-center-map').show().find('img').attr({src:'./images/img-08-2.png'});
// });
// $('.map-nav').find('.nav').eq(3).on('click', function(){
// 	$('.module-center-map').show().find('img').attr({src:'./images/img-08-3.png'});
// });
// $('.map-nav').find('.nav').eq(4).on('click', function(){
// 	$('.module-center-map').show().find('img').attr({src:'./images/img-08-4.png'});
// });
	
});

function gundongTxt (divBox, time, listNum) {
	let listLength = $(divBox).find('li').length;
	if (listLength > listNum){
		let $this = divBox;
		let scrollTimer;
		$this.hover(function() {
			clearInterval(scrollTimer);
		}, function() {
			scrollTimer = setInterval(function() {
				scrollNews($this);
			}, time);
		}).trigger("mouseleave");

		function scrollNews(obj) {
			var $self = obj.find("ul");
			var lineHeight = $self.find("li:first").height(); 
			$self.animate({
				"marginTop": -lineHeight + "px"
			}, 600, function() {
				$self.css({
					marginTop: 0
				}).find("li:first").appendTo($self);
			})
		}
	}
}