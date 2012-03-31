/*
	By     : Ofelquis
	Twitter: @felquis
	Blog   : tutsmais.com.br
*/
!(function ($doc, $win) {
	/*
		Faz as imagens aparecerem com um fade maneiro ;)
	*/
var $imgs = $doc.querySelectorAll('img'),
	totalImg = $imgs.length - 1,
	screenWidth = $win.screen.width / 2,
	screenHeight = $win.screen.height / 2,
	validPropertyPrefix = '',
	otherProperty = 'perspective(600px)',
// Esta function retorna a posição top e left do elemento	
	returnPosition = function (obj) {
			var currentTop = currentLeft = 0;
		if (obj.offsetParent) {
			do {
				currentTop  += obj.offsetTop;
				currentLeft += obj.offsetLeft;
			} while (obj = obj.offsetParent);
			return [currentTop, currentLeft]
		}
	};

// Faz as imagens aparecerem com uma opacidade
	for (var i = totalImg; i>=0; i--) {
		$imgs[i].onload = function () {
			this.style.opacity = 1;
		}
	}

// Verifica qual propriedade usar no browsers 
	if(typeof $imgs[0].style.webkitTransform == 'string') {
		validPropertyPrefix = 'webkitTransform';
	} else {
		validPropertyPrefix = 'MozTransform';
	}

// Adiciona o evento de mousemove ao documento
	$doc.addEventListener('mousemove', function (e) {
		// Calcula o meio de x, y da tela
		var centroX 	= e.clientX - screenWidth,
			centroY 	= screenHeight - (e.clientY + 13),
			degX   = centroX * 0.1,
			degY   = centroY * 0.1
	// Percorre os elementos adicionando as transformações
		for (var i = totalImg; i>=0; i--) {

			var pos = returnPosition($imgs[i]);

			centroX = e.clientX - pos[1],
			centroY = pos[0] - (e.clientY + 13),
			degX    = centroX * 0.1,
			degY    = centroY * 0.1

			$imgs[i].parentNode.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
		}
	});

// Adiciona o click para deixar a foto grande e para retorna-la
	$doc.addEventListener('click', function (i) {
		//console.dir(i.target);
		elem = i.target;
		if (elem.tagName.toLowerCase() == 'img') {

			if (elem.className.indexOf('lol') == -1) {
				for (var i = totalImg; i>=0; i--) {
					$imgs[i].className = 'brick';
				}

				elem.className = 'brick lol';
				console.log('poe')
			} else {
				console.log('tira')
				elem.className = 'brick';
			}
		}
	});
})(document, window);