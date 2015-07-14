export let appIndexing = {
	'id': 'app_indexing',
	'name': 'App Indexing',
	'website': 'https://developers.google.com/app-indexing/reference/deeplinks',
	'elements': [
		{
			'selector': 'link[rel="alternate"][href^="android-app://"], link[rel="alternate"][href^="ios-app://"]',
			'name': 'deeplinks',
			'description': ' The ways you can specify a relationship between content on your website and content on your app.',
			'description_ja': 'URIを指定することにより、Websiteのコンテンツとネイティブアプリのコンテンツをつなぎます。',
			'required': true
		}
	]
};
