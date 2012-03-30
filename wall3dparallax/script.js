/*
	By     : Ofelquis
	Twitter: @felquis
	Blog   : tutsmais.com.br
*/
!(function ($doc, $win) {
	
		$imgs = $doc.getElementsByTagName('img'),
		totalImg = $imgs.length - 1;

		for (var i = totalImg; i>=0; i--) {
			$imgs[i].onload = function () {
				this.style.opacity = 1;
			}
		}
	
})(document, window);