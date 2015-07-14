import _ from 'lodash';
import analyzer from '../../src/scripts/module/service_analyzer';
import assert from 'power-assert';

let html100 = '<title>website</title><meta name="description" content="">';
html100 += '<meta property="fb:app_id" content=""><meta property="og:locale" content=""><meta property="og:title" content="">';
html100 += '<meta property="og:type" content=""><meta property="og:url" content=""><meta property="og:image" content="">';
html100 += '<meta property="og:site_name" content=""><meta property="og:description" content=""><meta property="al:ios:url" content="">';
html100 += '<meta property="al:ios:app_store_id" content=""><meta property="al:ios:app_name" content=""><meta property="al:android:url" content="">';
html100 += '<meta property="al:android:package" content=""><meta property="al:android:app_name" content=""><meta name="twitter:card" content="">';
html100 += '<meta name="twitter:url" content=""><meta name="twitter:title" content=""><meta name="twitter:site" content=""><meta name="twitter:description" content="">';
html100 += '<meta name="twitter:image" content=""><meta name="twitter:app:country" content=""><meta name="twitter:app:name:iphone" content="">';
html100 += '<meta name="twitter:app:id:iphone" content=""><meta name="twitter:app:url:iphone" content=""><meta name="twitter:app:name:googleplay" content="">';
html100 += '<meta name="twitter:app:id:googleplay" content=""><meta name="twitter:app:url:googleplay" content=""><link rel="alternate" href="android-app://">';

let result = analyzer('<title><title><meta property="og:title"></meta>');
let result100 = analyzer(html100);

describe('service analyzer', () => {

	function calculateScore(services) {
		let percentages = _.map(services, (s, i) => {
			return services[i].percentagePassed;
		});
		let total = _.reduce(percentages, (t, p) => {
			return t + p;
		});
		return total / services.length;
	}

	it('should return 6 searvices\' result.', () => {
		assert(result.services.length === 6);
	});
	it('should return correct score.', () => {
		assert(result.score === calculateScore(result.services));
	});
	it('should return 100 when all elements has been passed.', () => {
		assert(result100.score === 100);
	});

});
