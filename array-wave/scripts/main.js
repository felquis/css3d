;(function ($, window, document, undefined) {
	$(function () {
		var Matriz = [
				['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14'],
				['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14'],
				['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14'],
				['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14'],
				['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10', 'e11', 'e12', 'e13', 'e14'],
				['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'f13', 'f14'],
				['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'g11', 'g12', 'g13', 'g14'],
				['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 'h14'],
				['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10', 'i11', 'i12', 'i13', 'i14'],
				['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'j9', 'j10', 'j11', 'j12', 'j13', 'j14'],
				['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11', 'l12', 'l13', 'l14'],
				['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'm11', 'm12', 'm13', 'm14'],
				['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11', 'n12', 'n13', 'n14'],
				['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8', 'o9', 'o10', 'o11', 'o12', 'o13', 'o14']
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

				$.each(MatrizDOM, function (PointY, arr) {
					$.each(arr, function (PointX) {
						result = valorMaximo - Math.max(Math.abs(myPointX - PointY), Math.abs(myPointY - PointX));

						MatrizDOM[PointX][PointY].html('');
						MatrizDOM[PointX][PointY].attr('class', 's' + result);
					});
				});
		});
	});
}(jQuery, window, document));