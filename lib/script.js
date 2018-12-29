$(function() {
	// 延迟加载
	var lazyloadDOM = $('#lazyload')[0].outerHTML;
	function addTimeStamp() {
		$('#lazyload ul li img').each(function() {
			$(this).attr('data-src', $(this).attr('data-src') + '?' + Date.now());
		});
	}
	addTimeStamp();
	$('#lazyload').terseBanner({
		arrow: true,
		adaptive: true,
		auto: 0
	});
})