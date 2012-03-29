$(function () {
	var $elem = $('#view'),
		novoCSS = [],
		i = 0,
		sets = 30,
		x = 0.03,
		blur;
		color = 0,
		coSquema = parseInt(250 / sets);
	$(document).mousemove(function (e) {
		var xMouse = e.pageX,
			yMouse = e.pageY,
			xCenter = $(window).width()/2,
			yCenter = $(window).height()/2,
			offsetLeft = xMouse - xCenter,
			offsetTop = yMouse - yCenter;
		for (i; i<sets; i++) {
			color += coSquema;
			novoCSS.push( offsetLeft* (x*i) + 'px ' + offsetTop* (x*i) + 'px '+ (i) +'px rgb('+ color +','+ color +','+ color +')');
			novoCSS.push(',');
		}
		novoCSS.pop();
		$elem.css('textShadow',novoCSS.join(''));
		// Reset vars
			i=0;
			color = 0;
			novoCSS = [];
	});
});