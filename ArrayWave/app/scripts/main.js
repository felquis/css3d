;(function ($, window, document, undefined) {
	$(function () {
		var Matriz = [
						[1, 2, 3],
						[1, 2, 3],
						[1, 2, 3]
					],

			$canvas = $('#canvas'),

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
	});
}(jQuery, window, document));