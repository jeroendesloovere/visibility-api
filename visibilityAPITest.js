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
			if(jsFrontendVisibilityAPI.isHidden())
			{
				console.log(jsFrontendVisibilityAPI.getVisibilityState());
			}
		}, false);
	}
};

$(jsFrontendVisibilityAPITest.init);
