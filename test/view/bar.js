describe('bar view', function() {

  var opts = {
    services: [
      {
        id: 'a',
        percentageAllItems: 10.7,
        percentagePassed: 0.8,
        name: 's'
      }
    ]
  };
  var bar = riot.mount(document.body, 'bar', opts)[0];
  var li = bar.root.querySelector('li');
  var span = li.querySelector('span');
  var b = li.querySelector('b');
  var i = li.querySelector('i');

  it('should show bar values', function() {
    expect(li.getAttribute('data-service')).to.equal(opts.services[0].id);
    expect(li.getAttribute('data-index')).to.equal('0');
    expect(li.getAttribute('style')).to.equal('width: ' + opts.services[0].percentageAllItems + '%;');
    expect(span.getAttribute('style')).to.equal('width: ' + opts.services[0].percentagePassed + '%;');
    expect(b.innerText).to.equal(opts.services[0].name);
    expect(i.innerText).to.equal(Math.floor(opts.services[0].percentagePassed) + '%');
  });

  it('should execute parent onBarClick when clicking the bar', function(done) {
    bar.parent = {
      onBarClick: function(e) {
        expect(!!e).to.equal(true);
        done();
      }
    };
    li.click();
  });

});
