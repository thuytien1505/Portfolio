var snow = document.getElementsByClassName('snow');
var sakura = document.getElementsByClassName('sakura-flower')
var no = document.getElementsByClassName('no-animation');
var snowbg = document.getElementsByClassName('snow-bg');

function changeBackground(type) {
	console.log(type);
	switch(type) {
		case "snow":
		snowbg[0].style.backgroundImage = "url('http://www.pngmart.com/files/5/Snow-Transparent-PNG.png'), url('http://www.pngmart.com/files/5/Snow-Transparent-PNG.png')";
		break;

		case "sakura":
		snowbg[0].style.backgroundImage = "url('http://www.mcctours.com.my/wp-content/uploads/2018/01/sakura-1-1.png'), url('http://www.mcctours.com.my/wp-content/uploads/2018/01/sakura-2.png')";
		// snowbg[0].style.backgroundImage = "url('http://www.pngmart.com/files/12/Pink-Heart-Emoji-PNG-HD.png'), url('http://www.pngmart.com/files/12/Pink-Heart-Emoji-PNG-HD.png')";
		break;

		default:
		snowbg[0].style.backgroundImage = "none";
		break;
	}
}

snow[0].onclick = function(){
    setCookie("bgAni", "snow", 365);
snowbg[0].style.backgroundImage = "url('http://www.pngmart.com/files/5/Snow-Transparent-PNG.png'), url('http://www.pngmart.com/files/5/Snow-Transparent-PNG.png')"; 
}

sakura[0].onclick = function(){
    setCookie("bgAni", "sakura", 365);
    snowbg[0].style.backgroundImage = "url('http://www.mcctours.com.my/wp-content/uploads/2018/01/sakura-1-1.png'), url('http://www.mcctours.com.my/wp-content/uploads/2018/01/sakura-2.png')";
}
no[0].onclick = function(){
    setCookie("bgAni", "none", 365);
    snowbg[0].style.backgroundImage = "none";
}

changeBackground(getCookie("bgAni"));