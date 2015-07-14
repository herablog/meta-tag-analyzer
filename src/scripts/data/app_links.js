export let appLinks = {
	'id': 'app_links',
	'name': 'App Links',
	'website': 'https://developers.facebook.com/docs/applinks',
	'elements': [
		{
			'selector': 'meta[property="al:ios:url"]',
			'name': 'al:ios:url',
			'description': 'Your iOS app\'s custom scheme. e.g. example://applinks',
			'description_ja': 'iOSアプリのカスタムスキーマを指定します。 (例) example://applinks',
			'required': true
		},
		{
			'selector': 'meta[property="al:ios:app_store_id"]',
			'name': 'al:ios:app_store_id',
			'description': 'Your app ID in the App Store.',
			'description_ja': 'App Store内のアプリIDを指定します。',
			'required': true
		},
		{
			'selector': 'meta[property="al:ios:app_name"]',
			'name': 'al:ios:app_name',
			'description': 'Your iOS app name.',
			'description_ja': 'iOSアプリの名前を指定します。',
			'required': true
		},
		{
			'selector': 'meta[property="al:android:url"]',
			'name': 'al:android:url',
			'description': 'Your Android app\'s custom scheme. e.g. example://applinks',
			'description_ja': 'Androidアプリのカスタムスキーマを指定します。 (例) example://applinks',
			'required': true
		},
		{
			'selector': 'meta[property="al:android:package"]',
			'name': 'al:android:package',
			'description': 'Your Android app\'s package name.',
			'description_ja': 'Androidアプリのパッケージ名を指定します。',
			'required': true
		},
		{
			'selector': 'meta[property="al:android:app_name"]',
			'name': 'al:android:app_name',
			'description': 'Your Android app name.',
			'description_ja': 'Androidアプリの名前を指定します。',
			'required': true
		}
	]
};
