;(function ($, window, document, undefined) {
	$(function () {
		var Matriz = [
						[1, 2, 3],
						[1, 2, 3],
						[1, 2, 3]
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

	// Hover nos span, retorna a posição do elemento no Array
		$canvas.on('hover', 'span', function () {
			var $this = $(this),
				line = $this.parent().index(),
				col = $this.index();

			MatrizDOM[line][col].html('-');
		});
	});
}(jQuery, window, document));