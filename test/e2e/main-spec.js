'use strict';

describe('taxi', function() {
	it('should redirect to #/demo', function() {
		browser.get('/');

		browser.getLocationAbsUrl().then(function(url) {
			expect(url).toBe('/demo');
		});
	});
});
