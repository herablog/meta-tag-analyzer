describe('stamp view', function() {

  describe('score 100', function() {
    it('shoud show comment "Excellent!"', function() {
      var stamp = riot.mount(document.body, 'stamp', { score: '100' })[0];
      expect(stamp.getComment()).to.equal('Excellent!');
    });
  });

  describe('score >= 50 and 99 <= score', function() {
    it('shoud show comment "Great"', function() {
      var stamp99 = riot.mount(document.body, 'stamp', { score: '99' })[0];
      var stamp50 = riot.mount(document.body, 'stamp', { score: '50' })[0];
      expect(stamp99.getComment()).to.equal('Great');
      expect(stamp50.getComment()).to.equal('Great');
    });
  });

  describe('score >= 30 and 99 <= score', function() {
    it('shoud show comment "Good"', function() {
      var stamp49 = riot.mount(document.body, 'stamp', { score: '49' })[0];
      var stamp30 = riot.mount(document.body, 'stamp', { score: '30' })[0];
      expect(stamp49.getComment()).to.equal('Good');
      expect(stamp30.getComment()).to.equal('Good');
    });
  });

  describe('score >= 10 and 29 <= score', function() {
    it('shoud show comment "Okay"', function() {
      var stamp29 = riot.mount(document.body, 'stamp', { score: '29' })[0];
      var stamp10 = riot.mount(document.body, 'stamp', { score: '10' })[0];
      expect(stamp29.getComment()).to.equal('Okay');
      expect(stamp10.getComment()).to.equal('Okay');
    });
  });

  describe('score >= 9', function() {
    it('shoud don\'t show stamp', function() {
      var stamp9 = riot.mount(document.body, 'stamp', { score: '9' })[0];
      var stamp0 = riot.mount(document.body, 'stamp', { score: '0' })[0];
      expect(stamp9.getComment()).to.equal('');
      expect(stamp9.root.querySelector('p').getAttribute('style')).to.equal('display: none;');
      expect(stamp0.getComment()).to.equal('');
      expect(stamp0.root.querySelector('p').getAttribute('style')).to.equal('display: none;');
    });
  });

});
