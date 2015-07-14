export let openGraph = {
	'id': 'open_graph',
	'name': 'Facebook Open Graph',
	'website': 'https://developers.facebook.com/docs/sharing/best-practices',
	'elements': [
		{
			'selector': 'meta[property="og:title"]',
			'name': 'og:title',
			'description': 'The title of your content. You should not include your brand name or the domain.',
			'description_ja': 'コンテンツのタイトルです。サイト名、ブランド名などは含むべきではありません。',
			'required': true
		},
		{
			'selector': 'meta[property="og:type"]',
			'name': 'og:type',
			'description': 'The type of your content, e.g., website, article, video.movie etc.',
			'description_ja': 'コンテンツのタイプをwebsite, article, video.movieなどから指定します。',
			'required': true
		},
		{
			'selector': 'meta[property="og:description"]',
			'name': 'og:description',
			'description': 'A one to two sentence description of your content.',
			'description_ja': '1、2行で書かれたコンテンツの説明文です。',
			'required': true
		},
		{
			'selector': 'meta[property="og:image"]',
			'name': 'og:image',
			'description': 'An image URL which should represent your content.',
			'description_ja': 'コンテンツの内容を表現する画像のURLを指定します。',
			'required': true
		},
		{
			'selector': 'meta[property="og:url"]',
			'name': 'og:url',
			'description': 'The canonical URL of your content.',
			'description_ja': 'コンテンツのURLです。同一コンテンツに対し、複数のURLがある場合は統一されたカノニカルURLを指定します。',
			'required': true
		},
		{
			'selector': 'meta[property^="og:locale"]',
			'name': 'og:locale',
			'description': 'The locales this content is available in.',
			'description_ja': 'コンテンツの言語設定を指定します。',
			'required': false
		},
		{
			'selector': 'meta[property="og:site_name"]',
			'name': 'og:site_name',
			'description': 'The web site name or brand name.',
			'description_ja': 'サイト名やブランド名を指定します。',
			'required': false
		},
		{
			'selector': 'meta[property="fb:app_id"]',
			'name': 'fb:app_id',
			'description': 'A Facebook App ID that identifies your website to Facebook. You can analyze the traffic in Facebook.',
			'description_ja': 'Facebookに登録したアプリIDを指定します。指定すると、ドメインインサイトでFacebookのトラフィックソースをトラックできます。',
			'required': false
		}
	]
};
