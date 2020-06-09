/*
 * Overload when scaling
 */
function windowWidth() {
	if ( window.innerWidth ) {
		return window.innerWidth;
	} else if ( document.body && document.body.offsetWidth ) {
		return document.body.offsetWidth;
	} else {
		return 0;
	}
}

function windowHeight() {
	if ( window.innerHeight ) {
		return window.innerHeight;
	} else if ( document.body && document.body.offsetHeight ) {
		return document.body.offsetHeight;
	} else {
		return 0;
	}
}

function newRebuild() {
	if ( Width != windowWidth() || Height != windowHeight() )
	location.href = location.href;
}

/* Initialize Netscape monitoring */
if ( ! window.Width && window.innerWidth ) {
	window.onresize = newRebuild;
	Width  = windowWidth();
	Height = windowHeight();
}

/* Initialize Internet Explorer monitoring */
if ( ! window.Width && document.body && document.body.offsetWidth ) {
	window.onresize = newRebuild;
	Width  = windowWidth();
	Height = windowHeight();
}
