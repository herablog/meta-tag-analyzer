import MetaAnalyzer from '../../src/scripts/module/meta_analyzer.js';
import assert from 'power-assert';

import { htmlMeta } from '../../src/scripts/data/html_meta';

describe('meta analyzer', () => {
	let m1 = new MetaAnalyzer(htmlMeta, '<title></title>');
	let r1 = m1.analyze();

	it('should return ID string.', () => {
		assert(htmlMeta.id === r1.id);
	});
	it('should return name string.', () => {
		assert(htmlMeta.name === r1.name);
	});
	it('should return website string.', () => {
		assert(htmlMeta.website === r1.website);
	});
	it('should return 2 elements arrays.', () => {
		assert(r1.elements.length === 2);
	});
	it('should return correct item count.', () => {
		assert(r1.itemCount === 2);
	});
	it('should return correct required item count.', () => {
		assert(r1.requiredItemCount === 2);
	});

	describe('50% passed', () => {
		it('should return 1 count when the passed item count is 1', () => {
			assert(r1.passedItemCount === 1);
		});
		it('should return 50 when the passed item count is 1 and the required item count is 2.', () => {
			assert(r1.percentagePassed === 50);
		});
	});

	describe('100% passed', () => {
		let m2 = new MetaAnalyzer(htmlMeta, '<title></title><meta name="Description">');
		let r2 = m2.analyze();
		it('should return 2 count when the passed item count is 2', () => {
			assert(r2.passedItemCount === 2);
		});
		it('should return 100 when the passed item count is 2 and the required item count is 2.', () => {
			assert(r2.percentagePassed === 100);
		});
	});

	describe('0% passed', () => {
		let m3 = new MetaAnalyzer(htmlMeta, '');
		let r3 = m3.analyze();
		it('should return 0 count when the passed item count is 0', () => {
			assert(r3.passedItemCount === 0);
		});
		it('should return 0 when the passed item count is 0 and the required item count is 2.', () => {
			assert(r3.percentagePassed === 0);
		});
	});

});
