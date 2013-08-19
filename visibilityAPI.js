/**
 * Frontend Page Visibility API
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
var jsFrontendVisibilityAPI =
{
	prefix: false,
	init: function()
	{
		// get prefixes
		var prefixes = ['webkit', 'moz', 'ms', 'o'];

		// if 'hidden' is natively supported just use it
		if('hidden' in document) jsFrontendVisibilityAPI.prefix = 'hidden';

		// not natively supported
		else
		{
			// loop over all the known prefixes until we find one
			for(var i = 0; i < prefixes.length; i++)
			{
				if((prefixes[i] + 'Hidden') in document)
				{
					jsFrontendVisibilityAPI.prefix = prefixes[i];
				}
			}
		}

		// browser doesn't support Page Visibility API
		if(!jsFrontendVisibilityAPI.prefix) return false;
	},

	/**
	 * Is hidden
	 */
	isHidden: function()
	{
		// init property
		var property = jsFrontendVisibilityAPI.prefix;

		// hidden not found
		if(!property) return false;

		// redefine property
		if(property !== 'hidden') property += 'Hidden';

		return document[property];
	},

	/**
	 * Get visibility State
	 *
	 * @return string Possible results are: 'hidden', 'visible', 'prerender' or 'unloaded'
	 */
	getState: function()
	{
		// init property
		var property = jsFrontendVisibilityAPI.prefix;

		// hidden not found
		if(!property) return null;

		// redefine property
		if(property === 'hidden') property = 'visibilityState';
		else property += 'VisibilityState';

		return document[property];
	}
};

$(jsFrontendVisibilityAPI.init);
