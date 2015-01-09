/*
  By     : Ofelquis
  Twitter: @felquis
  Blog   : tutsmais.com.br
*/
!(function ($doc, $win) {
  var screenWidth = $win.screen.width / 2,
    screenHeight = $win.screen.height / 2,
    $elem = $doc.querySelectorAll('#elem')[0],
    validPropertyPrefix = '',
    otherProperty = 'perspective(600px)';

    if(typeof $elem.style.webkitTransform == 'string') {
      validPropertyPrefix = 'webkitTransform';
    } else {
      if (typeof $elem.style.MozTransform == 'string') {
        validPropertyPrefix = 'MozTransform';
      }
    }

  $doc.addEventListener('mousemove', function (e) {
    // vars
    var centroX   = e.clientX - screenWidth,
      centroY   = screenHeight - (e.clientY + 13),
      degX   = centroX * 0.1,
      degY   = centroY * 0.1

    // Seta o rotate do elemento
    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
  });
})(document, window);
