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

			var top = _top(line, col, MatrizDOM),
				left = _left(line, col, MatrizDOM),
				right = _right(line, col, MatrizDOM),
				bottom = _bottom(line, col, MatrizDOM);

			MatrizDOM[line][col].html(9);

			if (!!top) {
				top.html(9 - 1);
			}
			if (!!left) {
				left.html(9 - 1);
			}
			if (!!right) {
				right.html(9 - 1);
			}
			if (!!bottom) {
				bottom.html(9 - 1);
			}
			
		});

// Captura o de cima
var _top = function (l, c, array) {
	l = l - 1;
	c = c;

	if (!!array[l]) {
		if (!!array[l][c]) {
			return array[l][c];
		}
	}
}
var _bottom = function (l, c, array) {
	l = l + 1;
	c = c;

	if (!!array[l]) {
		if (!!array[l][c]) {
			return array[l][c];
		}
	}
}

var _left = function (l, c, array) {
	l = l;
	c = c - 1;

	if (!!array[l]) {
		if (!!array[l][c]) {
			return array[l][c];
		}
	}
}

var _right = function (l, c, array) {
	l = l;
	c = c + 1;

	if (!!array[l]) {
		if (!!array[l][c]) {
			return array[l][c];
		}
	}
}

var _TopLeft = function (l, c, array) {
	l = l - 1;
	c = c - 1;

	if (!!array[l]) {
		if (!!array[l][c]) {
			return array[l][c];
		}
	}
}
var _BottomLeft = function (l, c, array) {
	l = l + 1;
	c = c - 1;

	if (!!array[l]) {
		if (!!array[l][c]) {
			return array[l][c];
		}
	}
}
var _TopRight = function (l, c, array) {
	l = l - 1;
	c = c + 1;

	if (!!array[l]) {
		if (!!array[l][c]) {
			return array[l][c];
		}
	}
}
var _BottomRight = function (l, c, array) {
	l = l + 1;
	c = c + 1;

	if (!!array[l]) {
		if (!!array[l][c]) {
			return array[l][c];
		}
	}
}
	});
}(jQuery, window, document));

var ArrayTeste = [
			['a1', 'a2', 'a3', 'a4'],
			['b1', 'b2', 'b3', 'b4'],
			['c1', 'c2', 'c3', 'c4'],
			['d1', 'd2', 'd3', 'd4']
		];

var teste = function (l, c) {

	var numLine = ArrayTeste.length;
	var numCol  = ArrayTeste[0].length;
	var lineMeio = Math.floor( numLine / 2 );
	var colMeio = Math.floor( numCol / 2 );

	console.log(ArrayTeste[lineMeio][colMeio]);

/*
	0, 0
	0, 1
	0, 2

	1, 0
	1, 1
	1, 2

	2, 0
	2, 1
	2, 2
*/

	for (var i = 0; i < numLine; i++) {
		for (var c = 0; c < numCol; c++) {
			console.log('L : ',i, 'C: ', c, ' = ', ArrayTeste[i][c]);
		}
	}
}

/*
7, 7, 7, 7, 7
7, 8, 8, 8, 7
7, 8, 9, 8, 7
7, 8, 8, 8, 7
7, 7, 7, 7, 7


6, 7, 7, 7, 7
6, 7, 8, 8, 8
6, 7, 8, 9, 8
6, 7, 8, 8, 8
6, 7, 7, 7, 7

0, 0 = 9
0, 1 = 8
0, 2 = 7
0, 3 = 6
0, 4 = 5

9, 8, 7, 6, 5
8, 8, 7, 6, 5
7, 7, 7, 6, 5
6, 6, 6, 6, 5
5, 5, 5, 5, 5
*/