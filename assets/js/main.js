
//parallax
$(function(){

	if($(window).width() >480 ) {

		var scene = $('.white-clouds').get(0);

		var parallax = new Parallax(scene);
	}

});

// switch night to day


var ocarina = $('.ocarina-click-area');
ocarina.on('click', function(e){
	console.log('hey');
	var backgroundNight = $('.background-night');
	if(backgroundNight.css('opacity') == 1) {
		TweenMax.to(backgroundNight, 1, {opacity: 0});
	} else {
		TweenMax.to(backgroundNight, 1, {opacity: 1});
	}
})


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
	TweenMax.to('.lake-box', 0.2, {opacity: 1, visibility: "visible"});

});

lakeArea.mouseleave(function(){
	TweenMax.to('.lake', 1, {scale: 1});
	TweenMax.to('.lake-box', 0.2, {opacity: 0, visibility: "hidden"});
});

castleArea.mouseenter( function(){
	TweenMax.to('.castle', 1, {scale: 1.07});
	TweenMax.to('.castle', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.castle', 0.1, {x:"-=20", yoyo: true, repeat: 5});
	TweenMax.to('.castle-box', 0.2, {opacity: 1, visibility: "visible"});

});

castleArea.mouseleave(function(){
	TweenMax.to('.castle', 1, {scale: 1});
	TweenMax.to('.castle-box', 0.2, {opacity: 0, visibility: "hidden"});
});

forestArea.mouseenter( function(){
	TweenMax.to('.forest', 1, {scale: 1.07});
	TweenMax.to('.forest', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.forest', 0.1, {x:"-=20", yoyo: true, repeat: 5});
	TweenMax.to('.forest-box', 0.2, {opacity: 1, visibility: "visible"});

});

forestArea.mouseleave(function(){
	TweenMax.to('.forest', 1, {scale: 1});
	TweenMax.to('.forest-box', 0.2, {opacity: 0, visibility: "hidden"});
});

mountainArea.mouseenter( function(){
	TweenMax.to('.death-mountain', 1, {scale: 1.07});
	TweenMax.to('.death-mountain', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.death-mountain', 0.1, {x:"-=20", yoyo: true, repeat: 5});
	TweenMax.to('.death-mountain-box', 0.2, {opacity: 1, visibility: "visible"});

});

mountainArea.mouseleave(function(){
	TweenMax.to('.death-mountain', 1, {scale: 1});
	TweenMax.to('.death-mountain-box', 0.2, {opacity: 0, visibility: "hidden"});
});

ranchArea.mouseenter( function(){
	TweenMax.to('.ranch', 1, {scale: 1.07});
	TweenMax.to('.ranch', 0.1, {x:"+=20", yoyo: true, repeat: 5});
	TweenMax.to('.ranch', 0.1, {x:"-=20", yoyo: true, repeat: 5});
	TweenMax.to('.ranch-box', 0.2, {opacity: 1, visibility: "visible"});

});

ranchArea.mouseleave(function(){
	TweenMax.to('.ranch', 1, {scale: 1});
	TweenMax.to('.ranch-box', 0.2, {opacity: 0, visibility: "hidden"});
});


//tingle
var tingle = $('.tingle');

function moveTingleIn(){
	if($(window).width() > 480) {
		TweenMax.to( tingle, 2, {top: '-60%'});
	} else {
		return;
	}
}

function makeTingleTalk() {
	if($(window).width() > 480) {
		TweenMax.to('.intro-box', 1, {opacity: 1});
	} else {
		return;
	}
}

function killTingleIntro() {
	if($(window).width() > 480) {
		$('.intro-box').css('display', "none");
	}
}

setTimeout(moveTingleIn, 5000);
setTimeout(makeTingleTalk, 7200);
setTimeout(killTingleIntro, 11200);

//mobile

$(window).resize(function(){
	if($(window).width() <= 480) {
		$('.modal-mobile').css('visibility', 'visible');
	} else {
		$('.modal-mobile').css('visibility', 'hidden');
	}
})

//desktop

// $(window).resize(function(){
// 	if($(window).width() > 480) {
// 		$('.modal-desktop').css('visibility', 'visible');
// 	} else {
// 		$('.modal-desktop').css('visibility', 'hidden');
// 	}
// })

// Navi Mouse

function moveNavi(posX, posY){
	var navi = $('.cursor');
	navi.css({
		'top': posY,
		'left': posX,
	});
}

function createParticle(posX, posY){
	var singleParticle = $('<div>');
	var size = Math.random() * 10 + 1;
	var color;
	var random = Math.floor(Math.random() * 2);

	if(random == 0) {
		color = '#8BAFCB';
	} else {
		color = '#ffffff';
	}

	singleParticle.css({
		'width': size,
		'height': size,
		'background-color': color,
		'top': posY + (Math.random() * 30) - 15 + "px",
		'left': posX + (Math.random() * 50) - 25 + "px",
	});
	singleParticle.addClass('particle');
	$('.overlay').append(singleParticle);
	TweenMax.to(singleParticle, 2, {y: "+=400px", opacity: 0, onComplete: function() {
		$(singleParticle).remove();
	}})
}

var cursorX = 0;
var cursorY = 0;

document.onmousemove = function(e){
	cursorX = e.pageX;
	cursorY = e.pageY;	
}

$(function(){
	if( $(window).width() > 480 ){
		setInterval(function() {
			createParticle(cursorX, cursorY);
			moveNavi(cursorX, cursorY);
		}, 33)
	}
});




















