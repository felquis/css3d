;(function ($, window, document, undefined) {
  $(function () {
    var Matriz,
      regUrlMatriz = /\?matriz=([\d]*x[\d]*)/,
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
                  html.push('<span class="i"></span>');
                });
              html.push('</div>');
            }
        });

        html.push('</div>');

        return (html.join(''));
      },
      createMatriz = function (matriz) {
        var array = matriz.split('x'),
          novoArray = [],
          line = Math.ceil(array[1]);
          i = 0,
          len = Math.ceil(array[0]);

          console.log(array);

        for(i; i < len; i++) {
          novoArray.push(new Array(line));
        }

        return novoArray;
      }

    // Cria o array


    if (regUrlMatriz.test(location.search)) {
      Matriz = createMatriz(location.search.match(regUrlMatriz)[1]);
    } else {
      Matriz = createMatriz('30x30');
    }

    $canvas.html(toHTML(Matriz));

  // Cria uma matriz que representa a matriz em questão só que no DOM
  (function () {
    //  MatrizDOM

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

            MatrizDOM[PointX][PointY].attr('class', 's' + result);
          });
        });
    });
  });
}(jQuery, window, document));
