
//parallax
$(function(){
	var scene = $('.wrapper').get(0);

	var parallax = new Parallax(scene);

});

// $(function(){
// 	var earth = $('.earth-container').get(0);

// 	var parallax = new Parallax(earth);
// })

// map hover areas

var lakeArea = $('.lake-click-area');
var castleArea = $('.castle-click-area');
var forestArea = $('.forest-click-area');
var mountainArea = $('.death-mountain-click-area');
var ranchArea = $('.ranch-click-area');

lakeArea.mouseenter( function(){
	TweenMax.to('.lake', 0.5, {scale: 1.07});
	TweenMax.to('.lake', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.lake', 0.1, {x:"-=20", yoyo: true, repeat: 5});

});

lakeArea.mouseleave(function(){
	TweenMax.to('.lake', 1, {scale: 1});
});

castleArea.mouseenter( function(){
	TweenMax.to('.castle', 1, {scale: 1.07});
	TweenMax.to('.castle', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.castle', 0.1, {x:"-=20", yoyo: true, repeat: 5});

});

castleArea.mouseleave(function(){
	TweenMax.to('.castle', 1, {scale: 1});
});

forestArea.mouseenter( function(){
	TweenMax.to('.forest', 1, {scale: 1.07});
	TweenMax.to('.forest', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.forest', 0.1, {x:"-=20", yoyo: true, repeat: 5});

});

forestArea.mouseleave(function(){
	TweenMax.to('.forest', 1, {scale: 1});
});

mountainArea.mouseenter( function(){
	TweenMax.to('.death-mountain', 1, {scale: 1.07});
	TweenMax.to('.death-mountain', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.death-mountain', 0.1, {x:"-=20", yoyo: true, repeat: 5});

});

mountainArea.mouseleave(function(){
	TweenMax.to('.death-mountain', 1, {scale: 1});
});

ranchArea.mouseenter( function(){
	TweenMax.to('.ranch', 1, {scale: 1.07});
	TweenMax.to('.ranch', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.ranch', 0.1, {x:"-=20", yoyo: true, repeat: 5});

});

ranchArea.mouseleave(function(){
	TweenMax.to('.ranch', 1, {scale: 1});
});


//tingle
var tingle = $('.tingle');
var tingleTalkBox = $('<div>');
var tingleWords = $('<p>');
setTimeout(function(){
	TweenMax.to( tingle, 2, {top: '-44%'});
}, 5000);

function makeTingleTalk() {
	tingle.append(tingleTalkBox);
	tingleTalkBox.addClass('tingle-text-box');
	tingleTalkBox.append(tingleWords);
	tingleWords.addClass('tingle-text');
	tingleWords.html('Kooloo-Limpah! Welcome to Hyrule! My name is Tingle. I create maps for explorers such as yourself. Lets get started!');
	TweenMax.from(tingleTalkBox, 1, {opacity: 0});
	// tingle.css('position', 'fixed');
}

setTimeout(makeTingleTalk, 7200);

//night/day
var ocarina = $('.ocarina');

ocarina.on('click', function(e){
	var bg = $('.background');
	var degrees = 0;

	if( !bg.hasClass('active')){
		console.log('check');
		TweenMax.to(bg, 2.5, {rotation: degrees += 180});
		bg.addClass('active');
		return;
	}

	if( bg.hasClass('active')) {
		TweenMax.to(bg, 2.5, {rotation: degrees += 180});
		bg.removeClass('active');
		return;
	}
});

// function incrementDegrees() {
// 	degrees += 180;
// 	return degrees
// }

//mobile

function checkForMobile(){

	if($(window).width() <= 480) {
		console.log('mobile');
		$('.modal').css('visibility', 'visible');
	} else {
		console.log('nope');
		$('.modal').css('visibility', 'hidden');
	}
}

setInterval(checkForMobile, 1);




























