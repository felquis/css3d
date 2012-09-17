;(function ($, window, document, undefined) {
	$(function () {
		var Matriz = [
						[1, 2, 3],
						[1, 2, 3],
						[1, 2, 3]
					],
			html = [],
			$canvas = $('#canvas');

		html.push('<div class="principal">');

		$.each(Matriz, function (i, e) {
				if ($.isArray(e)) {
					html.push('<div class="line">');
						$.each(e, function (i, e) {
							html.push('<span>'+e+'</span>');
						});
					html.push('</div>');
				}
		});

		html.push('</div>');

		$canvas.html(html.join(''));

		console.log(html.join(''))
	});
}(jQuery, window, document));