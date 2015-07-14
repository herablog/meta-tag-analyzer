export let twitterCardsApp = {
	'id': 'twitter_cards_app',
	'name': 'Twitter Cards (App)',
	'website': 'https://dev.twitter.com/cards/types/app',
	'elements': [
		{
			'selector': 'meta[name="twitter:app:id:iphone"]',
			'name': 'twitter:app:id:iphone',
			'description': 'Your app ID for iPhone in the App Store.',
			'description_ja': 'iPhoneアプリのApp Store IDを指定します。',
			'required': true
		},
		{
			'selector': 'meta[name="twitter:app:id:ipad"]',
			'name': 'twitter:app:id:ipad',
			'description': 'Your app ID for iPad in the App Store.',
			'description_ja': 'iPadアプリのApp Store IDを指定します。',
			'required': false
		},
		{
			'selector': 'meta[name="twitter:app:url:iphone"]',
			'name': 'twitter:app:url:iphone',
			'description': 'Your iPhone app\'s custom URL scheme (you must include “://” after your scheme name).',
			'description_ja': 'iPhoneアプリのカスタムURLスキーマを指定します。(例) twitter://',
			'required': true
		},
		{
			'selector': 'meta[name="twitter:app:url:ipad"]',
			'name': 'twitter:app:url:ipad',
			'description': 'Your iPad app\'s custom URL scheme (you must include “://” after your scheme name).',
			'description_ja': 'ipadアプリのカスタムURLスキーマを指定します。(例) twitter://',
			'required': false
		},
		{
			'selector': 'meta[name="twitter:app:id:googleplay"]',
			'name': 'twitter:app:id:googleplay',
			'description': 'Your app\'s package name in the Google Play.',
			'description_ja': 'Androidアプリのパッケージネームを指定します。',
			'required': true
		},
		{
			'selector': 'meta[name="twitter:app:url:googleplay"]',
			'name': 'twitter:app:url:googleplay',
			'description': 'Your Android app\'s custom URL scheme (you must include “://” after your scheme name).',
			'description_ja': 'AndroidアプリのカスタムURLスキーマを指定します。(例) twitter://',
			'required': true
		},
		{
			'selector': 'meta[name="twitter:app:country"]',
			'name': 'twitter:app:country',
			'description': 'If your application is not available in the US App Store, you must set this value to the two-letter country code for the App Store that contains your application.',
			'description_ja': 'アメリカのストアで利用できない場合には、2文字の国コードを指定します。',
			'required': false
		}
	]
};
