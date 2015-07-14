describe('analyzer view', function() {

  var opts = {
    metaInfo: {
      score: 10.8,
      services: [
        {
          id: 'a',
          percentageAllItems: 10.7,
          percentagePassed: 0.8,
          name: 's',
          elements: [],
          website: 'http://website/'
        },
        {
          id: 'b',
          percentageAllItems: 10.8,
          percentagePassed: 0.9,
          name: 's1',
          elements: ['a'],
          website: 'http://website1/'
        }
      ]
    }
  };
  var analyzer = riot.mount(document.body, 'analyzer', opts)[0];

  it('should return initialized analyzer values', function() {
    expect(analyzer.score).to.equal(Math.floor(opts.metaInfo.score));
    expect(analyzer.current.name).to.equal(opts.metaInfo.services[0].name);
    expect(analyzer.current.idx).to.equal(0);
    expect(analyzer.current.elements).to.equal(opts.metaInfo.services[0].elements);
    expect(analyzer.current.website).to.equal(opts.metaInfo.services[0].website);
  });

  it('should return updated analyzer values after executing onBarClick', function() {
    var el = document.createElement('div');
    el.setAttribute('data-index', '1');
    var e = {
      currentTarget: el
    };
    analyzer.onBarClick(e);
    expect(analyzer.current.name).to.equal(opts.metaInfo.services[1].name);
    expect(analyzer.current.idx).to.equal(1);
    expect(analyzer.current.elements).to.equal(opts.metaInfo.services[1].elements);
    expect(analyzer.current.website).to.equal(opts.metaInfo.services[1].website);
  });

});
