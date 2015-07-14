export let htmlMeta = {
	'id': 'html_meta',
	'name': 'HTML Meta',
	'website': 'https://support.google.com/webmasters/answer/35624?hl=en',
	'elements': [
		{
			'selector': 'title',
			'name': 'title',
			'description': 'The title of your content.',
			'description_ja': 'コンテンツのタイトルです。',
			'required': true
		},
		{
			'selector': 'meta[name="description"], meta[name="Description"]',
			'name': 'description',
			'description': 'A one to two sentence description of your content.',
			'description_ja': '1、2行で書かれたコンテンツの説明文です。',
			'required': true
		}
	]
};
