# meta Tag Analyzer for Chrome Extension

[This is a Chrome Extension](https://chrome.google.com/webstore/detail/fjaojohahonilkanpijpfhkekbegbkfa/) to analyze the quality of your site's meta information.

![Preview](https://raw.githubusercontent.com/herablog/meta-tag-analyzer/master/screenshots/preview.png)

## \<meta\> is hot right now
Meta element is known as the web site's information for browsers, search engines, or other web services. Basically, we can use the element to show specific page description, keywords, and other metadata.

For example, this is an old-styled elements.

```html
<head>
  <title>website</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
</head>
```

It's simple!

However, it's not enough nowadays. It used to be more common to spend one's browsing time in front of a desktop PC, and be found one's favorite website via google.com. Web service providers used to think only about search engines, when hoping to make their site become popular. But, recently, websites have to connect with multiple services now that people uses a lot of applications on mobile such as Facebook, Twitter, and other native applications. It's important how links to a website look like on those platforms in order to increase  page views.

This is a **modern** style!

```html
<head>
  <meta charset="utf-8">
  <title>website</title>
  <meta name="keywords" content="">
  <meta name="description" content="">
  <meta property="fb:app_id" content="">
  <meta property="og:locale" content="">
  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">
  <meta property="og:site_name" content="">
  <meta property="og:description" content="">
  <meta property="al:ios:url" content="">
  <meta property="al:ios:app_store_id" content="">
  <meta property="al:ios:app_name" content="">
  <meta property="al:android:url" content="">
  <meta property="al:android:package" content="">
  <meta property="al:android:app_name" content="">
  <meta name="twitter:card" content="">
  <meta name="twitter:site" content="">
  <meta name="twitter:url" content="">
  <meta name="twitter:title" content="">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="">
  <meta name="twitter:app:country" content="">
  <meta name="twitter:app:name:iphone" content="">
  <meta name="twitter:app:id:iphone" content="">
  <meta name="twitter:app:url:iphone" content="">
  <meta name="twitter:app:name:googleplay" content="">
  <meta name="twitter:app:id:googleplay" content="">
  <meta name="twitter:app:url:googleplay" content="">
  <link rel="alternate" href="android-app://">
</head>
```

WHOOOO!

There are many types of meta elements. I think meta is the hottest element of all of the HTML elements. It's so difficult to remember which elements do you need for your site.

Don't worry!
You can learn your site's meta condition easily by using this extension.


## Installation
You can install this extension from [the Chrome Web Store](https://chrome.google.com/webstore/detail/fjaojohahonilkanpijpfhkekbegbkfa/).

## Start Analyzing
After installing, this extension will start analyzing. When you finished loading a website, the site's score is shown over the icon.
If you'd like to learn more information about the score, click the icon. You can see which elements were needed, and which passed or not.

## Popup
When you click the icon, a popup is displayed.

![Popup](https://raw.githubusercontent.com/herablog/meta-tag-analyzer/master/screenshots/popup.png)

### Score

![Score](https://raw.githubusercontent.com/herablog/meta-tag-analyzer/master/screenshots/popup_score.png)

The popup shows the score of your site between 0 to 100. It's **NOT** important to get a perfect score. You should check which meta passed or not, and any differences from other sites.

### Bar Graph

![Bar Graph](https://raw.githubusercontent.com/herablog/meta-tag-analyzer/master/screenshots/popup-bar.png)

The bar indicates the percentage of passed elements in each category. The percentage includes only required elements. By putting your mouse over the bar, the percentage value is shown. Clicking the bar causes detailed information to be shown on the table.

### Table

![Table](https://raw.githubusercontent.com/herablog/meta-tag-analyzer/master/screenshots/popup-table.png)

The table shows elements' name, description, whether they're required, and result. There are two types of value in the result: Passed or Failed. If you find any failed elements, maybe you should consider adding the element into your HTML.

## Parameters
This extension will check the following parameters.

### HTML Meta (basic elements)

- `title` (Required) The title of your content.
- `meta name="description"` (Required) A one to two sentence description of your content.

More about HTML Meta: https://support.google.com/webmasters/answer/35624?hl=en

### Open Graph

- `meta[property="og:title"]` (Required) The title of your content. You should not include your brand name or the domain.
- `meta[property="og:type"]` (Required) The type of your content, e.g., website, article, video.movie etc.
- `meta[property="og:description"]` (Required) A one to two sentence description of your content.
- `meta[property="og:image"]` (Required) An image URL which should represent your content.
- `meta[property="og:url"]` (Required) The canonical URL of your content.
- `meta[property="og:local"]` (Optional) The locales this content is available in. This is not required, but Facebook says setting this parameter is important to rank up.
- `meta[property="og:site_name"]` (Optional) The web site name or brand name.
- `meta[property="fb:app_id"]` (Optional) A Facebook App ID that identifies your website to Facebook. You can analyze the traffic in Facebook.

More about Open Graph: https://developers.facebook.com/docs/sharing/best-practices

### App Links

- `meta[property="al:ios:url"]` (Required) Your iOS app's custom scheme. e.g. example://applinks
- `meta[property="al:ios:app_store_id"]` (Required) Your app ID in the App Store.
- `meta[property="al:ios:app_name"]` (Required) Your iOS app name.
- `meta[property="al:android:url"]` (Required) Your Android app's custom scheme. e.g. example://applinks
- `meta[property="al:android:package"]` (Required) Your Android app's package name.
- `meta[property="al:android:app_name"]` (Required) Your Android app name.

More about App Links: https://developers.facebook.com/docs/applinks

### Twitter Cards (web)

- `meta[name="twitter:card"]` (Required) The type of twitter card to use; summary, photo, gallery, app etc.
- `meta[name="twitter:site"]` (Required) The Twitter @username the card should be attributed to. Required for Twitter Card analytics.
- `meta[name="twitter:title"]` (Required) The title of your content.
- `meta[name="twitter:description"]` (Required) About 200 characters description of your content.
- `meta[name^="twitter:image"]` (Optional) An image URL which should represent your content.

More about Twitter Cards (web): https://dev.twitter.com/cards/getting-started

### Twitter Cards (app)

- `meta[name="twitter:app:id:iphone"]` (Required) Your app ID for iPhone in the App Store.
- `meta[name="twitter:app:url:iphone"]` (Required) Your iPhone app’s custom URL scheme (you must include “://” after your scheme name).
- `meta[name="twitter:app:id:ipad"]` (Optional) Your app ID for iPad in the App Store.
- `meta[name="twitter:app:url:ipad"]` (Optional) Your iPad app’s custom URL scheme (you must include “://” after your scheme name).
- `meta[name="twitter:app:id:googleplay"]` (Required) Your app's package name in the Google Play.
- `meta[name="twitter:app:url:googleplay"]` (Required) Your Android app’s custom URL scheme (you must include “://” after your scheme name).
- `meta[name="twitter:app:country"]` (Optional) If your application is not available in the US App Store, you must set this value to the two-letter country code for the App Store that contains your application.

More about Twitter Cards (app): https://dev.twitter.com/cards/types/app

### App Indexing

- `link[rel="alternate"][href^="android-app://"]` (Required) The ways you can specify a relationship between content on your website and content on your app.

More about App Indexing: https://developers.google.com/app-indexing/reference/deeplinks

## License
This code is released under the MIT license.
