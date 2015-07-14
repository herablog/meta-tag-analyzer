describe('score view', function() {

  it('shoud show score value', function() {
    var score = riot.mount(document.body, 'score', { score: '100' })[0];
    expect(score.root.querySelector('dd').innerText).to.equal('100');
  });

});
