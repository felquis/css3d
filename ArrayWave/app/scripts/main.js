;(function ($, window, document, undefined) {
	$(function () {
		var Matriz = [
				['a1', 'a2', 'a3', 'a4'],
				['b1', 'b2', 'b3', 'b4'],
				['c1', 'c2', 'c3', 'c4'],
				['d1', 'd2', 'd3', 'd4']
			],

			$canvas = $('#canvas'),

			MatrizDOM = [],

		// Função que retorna um HTML que representa uma matriz de array
			toHTML = function (matriz) {
				var html = [];

				html.push('<div class="principal">');

				$.each(matriz, function (i, e) {
						if ($.isArray(e)) {
							html.push('<div class="line">');
								$.each(e, function (i, e) {
									html.push('<span>'+e+'</span>');
								});
							html.push('</div>');
						}
				});

				html.push('</div>');

				return (html.join(''));
			}

		$canvas.html(toHTML(Matriz));

	// Cria uma matriz que representa a matriz em questão só que no DOM
	(function () {
		//	MatrizDOM

		$canvas.find('.line').each(function (i, e) {
		// Cada coluna e seus itens são instancias do DOM
			var colunas = (function () {
				var col = [];

				$(e).find('span').each(function (i, e) {
					col.push($(this));
				});

				return col;
			}());

		// Marca uma linha
			MatrizDOM.push(colunas);
		});
	}());


	var pointY, pointX, myPointY, myPointX, result,
		valorMaximo = 10;

	// Hover nos span, retorna a posição do elemento no Array
		$canvas.on('mouseenter', 'span', function () {
			var $this = $(this),
				myPointY = $this.parent().index(),
				myPointX = $this.index(); 

				console.log(myPointX, myPointY);

				$.each(MatrizDOM, function (PointY, arr) {
					$.each(arr, function (PointX) {
						result = valorMaximo - Math.max(Math.abs(myPointX - PointY), Math.abs(myPointY - PointX));

						MatrizDOM[PointX][PointY].html(result);
					});
				});
		});
	});
}(jQuery, window, document));