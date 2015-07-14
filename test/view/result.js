describe('result view', function() {

  var params = {
    current: {
      name: 'name',
      elements: [
        {
          name: 'name',
          description: 'description',
          'description_ja': '説明文',
          required: true,
          didPassed: true
        },
        {
          name: 'name1',
          description: 'description1',
          'description_ja': '説明文1',
          required: false,
          didPassed: false
        }
      ],
      website: 'http://website.com/'
    },
    lang: ''
  };
  var resultA = riot.mount(document.body, 'result', params)[0];

  it('shoud show result values', function() {
    var root = resultA.root;
    expect(root.querySelector('caption').innerText).to.equal(params.current.name);
    expect(root.querySelector('td').innerText).to.equal(params.current.elements[0].name);
    expect(root.querySelector('td:nth-child(2)').innerText).to.equal(params.current.elements[0].description);
    expect(root.querySelector('td:nth-child(3)').innerText).to.equal('*');
    expect(root.querySelector('td:nth-child(4)').innerText).to.equal('Passed');
    expect(root.querySelector('aside').innerText.indexOf('More about ' + params.current.name)).to.equal(0);
    expect(root.querySelector('aside a').href).to.equal(params.current.website);
    expect(root.querySelector('aside a').innerText).to.equal(params.current.website);

    expect(root.querySelector('tr:nth-child(2) td').innerText).to.equal(params.current.elements[1].name);
    expect(root.querySelector('tr:nth-child(2) td:nth-child(2)').innerText).to.equal(params.current.elements[1].description);
    expect(root.querySelector('tr:nth-child(2) td:nth-child(3)').innerText).to.equal('-');
    expect(root.querySelector('tr:nth-child(2) td:nth-child(4)').innerText).to.equal('Failed');
  });

  it('shoud show Japanese description', function() {
    var paramsJa = params;
    paramsJa.lang = 'ja';
    var resultJa = riot.mount(document.body, 'result', paramsJa)[0];
    expect(resultJa.root.querySelector('td:nth-child(2)').innerText).to.equal(params.current.elements[0].description_ja);
    expect(resultJa.root.querySelector('tr:nth-child(2) td:nth-child(2)').innerText).to.equal(params.current.elements[1].description_ja);
  });

});
