export let twitterCardsWeb = {
	'id': 'twitter_cards_web',
	'name': 'Twitter Cards (Web)',
	'website': 'https://dev.twitter.com/cards/getting-started',
	'elements': [
		{
			'selector': 'meta[name="twitter:card"]',
			'name': 'twitter:card',
			'description': 'The type of twitter card to use; summary, photo, gallery, app etc.',
			'description_ja': 'Twitter Cardのタイプです。summary, photo, gallery, appなどが指定できます。',
			'required': true
		},
		{
			'selector': 'meta[name="twitter:site"]',
			'name': 'twitter:site',
			'description': 'The Twitter @username the card should be attributed to. Required for Twitter Card analytics.',
			'description_ja': 'Twitterのユーザーネームです。指定すると、Twitter Card analyticsを利用できます。',
			'required': true
		},
		{
			'selector': 'meta[name="twitter:title"], meta[property="og:title"]',
			'name': 'twitter:title',
			'description': 'The title of your content.',
			'description_ja': 'ページのタイトルです。',
			'required': true
		},
		{
			'selector': 'meta[name="twitter:description"], meta[property="og:description"]',
			'name': 'twitter:description',
			'description': 'About 200 characters description of your content.',
			'description_ja': '200文字程度で書かれたページの説明文です。',
			'required': false
		},
		{
			'selector': 'meta[name^="twitter:image"], meta[property="og:image"]',
			'name': 'twitter:image',
			'description': 'An image URL which should represent your content.',
			'description_ja': 'コンテンツの内容を表現する画像のURLを指定します。',
			'required': false
		}
	]
};
