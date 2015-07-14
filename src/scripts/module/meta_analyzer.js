import _ from 'lodash';
import cheerio from 'cheerio';

export default class MetaAnalyzer {

	constructor(master, html) {
		this.master = master;
		this.html = html;
	}

	analyze() {
		let $ = cheerio.load(this.html);
		let ret = _.cloneDeep(this.master);
		// check whether the selector match or not, and add a prop
		ret.elements = _.map(ret.elements, (el) => {
			el.didPassed = !!$(el.selector).length;
			return el;
		});
		// count items and calculate percentage of passed items
		let requiredItemCount = _.filter(ret.elements, { required: true }).length;
		let passedItemCount = _.filter(ret.elements, { didPassed: true, required: true }).length;
		let percentagePassed = passedItemCount / requiredItemCount * 100;
		ret.itemCount = ret.elements.length;
		ret.requiredItemCount = requiredItemCount;
		ret.passedItemCount = passedItemCount;
		ret.percentagePassed = (percentagePassed >= 100) ? 100 : percentagePassed;

		return ret;
	}

}
