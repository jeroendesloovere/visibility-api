/**
 * Frontend Page Visibility API Test
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
var jsFrontendVisibilityAPITest =
{
	init: function()
	{
		// bind visibility change
		document.addEventListener(jsFrontendVisibilityAPI.prefix + 'visibilitychange', function(e)
		{
			document.title = jsFrontendVisibilityAPI.getState();
		}, false);
	}
};

$(jsFrontendVisibilityAPITest.init);
