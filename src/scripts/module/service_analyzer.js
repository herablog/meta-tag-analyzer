import _ from 'lodash';
import MetaAnalyzer from './meta_analyzer';
import { htmlMeta } from '../data/html_meta';
import { openGraph } from '../data/open_graph';
import { appLinks } from '../data/app_links';
import { twitterCardsWeb } from '../data/twitter_cards_web';
import { twitterCardsApp } from '../data/twitter_cards_app';
import { appIndexing } from '../data/app_indexing';


/**
 * Return all services object
 * @param {string} html
 * @return {object} result
**/
export default function(html) {
	let result = {
		services: [
			new MetaAnalyzer(htmlMeta, html).analyze(),
			new MetaAnalyzer(openGraph, html).analyze(),
			new MetaAnalyzer(appLinks, html).analyze(),
			new MetaAnalyzer(twitterCardsWeb, html).analyze(),
			new MetaAnalyzer(twitterCardsApp, html).analyze(),
			new MetaAnalyzer(appIndexing, html).analyze()
		]
	};
	// add total score
	result.score = calculateScore(result.services);
	// add each service's percentage of all services
	let balances = calculateBalance(result.services);
	result.services = _.map(result.services, (s, i) => {
		result.services[i].percentageAllItems = balances[i];
		return result.services[i];
	});

	return result;
}

/**
 * Calculate score from all passed elements
 * @param {array} services result object
 * @return {number} score
**/
function calculateScore(services) {
	let percentages = _.map(services, (s, i) => {
		return services[i].percentagePassed;
	});
	let total = _.reduce(percentages, (t, p) => {
		return t + p;
	});
	return total / services.length;
}

/**
 * Calculate each balance in all elements
 * @param {array} services result object
 * @return {array} balances
**/
function calculateBalance(services) {
	let allRequiredCount = _.reduce(_.map(services, (s, i) => {
		return services[i].requiredItemCount;
	}), (a, b) => {
		return a + b;
	});

	let ret = _.map(services, (s, i) => {
		return services[i].requiredItemCount / allRequiredCount * 100;
	});
	return ret;
}
