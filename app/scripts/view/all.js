riot.tag('bar', '<ul> <li each="{ service, i in opts.services }" data-service="{ service.id }" data-index="{ i }" riot-style="width: { service.percentageAllItems }%;" onclick="{ parent.onClick }"> <span riot-style="width: { service.percentagePassed }%;"></span><b>{ service.name }</b><i>{ Math.floor(service.percentagePassed) }%</i> </li> </ul>', 'bar , [riot-tag="bar"] {} bar ul , [riot-tag="bar"] ul { cursor: pointer; display: flex; font-size: .3rem; margin: 0 10px 25px; } bar ul li , [riot-tag="bar"] ul li { border-right: 1px solid #eee; box-sizing: border-box; font-size: 2em; height: 2.2em; padding: 1px; position: relative; } bar ul li:first-child, [riot-tag="bar"] ul li:first-child,bar ul li:first-child span , [riot-tag="bar"] ul li:first-child span { border-radius: 2px 0 0 2px; } bar ul li:last-child, [riot-tag="bar"] ul li:last-child,bar ul li:last-child span[style*="width:100%;"] , [riot-tag="bar"] ul li:last-child span[style*="width:100%;"] { border-radius: 0 2px 2px 0; } bar ul li:last-child , [riot-tag="bar"] ul li:last-child { border: none; -webkit-box-flex: 0; } bar ul li[data-service="html_meta"] , [riot-tag="bar"] ul li[data-service="html_meta"] { background: rgba(255, 163, 123, .2); } bar ul li[data-service="open_graph"] , [riot-tag="bar"] ul li[data-service="open_graph"] { background: rgba(133, 154, 207, .14); } bar ul li[data-service="app_links"] , [riot-tag="bar"] ul li[data-service="app_links"] { background: rgba(133, 154, 207, .14); } bar ul li[data-service="twitter_cards_web"] , [riot-tag="bar"] ul li[data-service="twitter_cards_web"] { background: rgba(124, 192, 244, .1); } bar ul li[data-service="twitter_cards_app"] , [riot-tag="bar"] ul li[data-service="twitter_cards_app"] { background: rgba(124, 192, 244, .1); } bar ul li[data-service="app_indexing"] , [riot-tag="bar"] ul li[data-service="app_indexing"] { background: rgba(222, 246, 146, .2); } bar ul span , [riot-tag="bar"] ul span { background: red; display: block; height: 2.2em; left: 0; position: absolute; top: 0; } bar ul li[data-service="html_meta"] span , [riot-tag="bar"] ul li[data-service="html_meta"] span { background: rgba(241, 101, 41, 1); } bar ul li[data-service="open_graph"] span , [riot-tag="bar"] ul li[data-service="open_graph"] span { background: rgba(59, 87, 157, 1); } bar ul li[data-service="app_links"] span , [riot-tag="bar"] ul li[data-service="app_links"] span { background: rgba(59, 87, 157, 1); } bar ul li[data-service="twitter_cards_web"] span , [riot-tag="bar"] ul li[data-service="twitter_cards_web"] span { background: rgba(85, 172, 238, 1); } bar ul li[data-service="twitter_cards_app"] span , [riot-tag="bar"] ul li[data-service="twitter_cards_app"] span { background: rgba(85, 172, 238, 1); } bar ul li[data-service="app_indexing"] span , [riot-tag="bar"] ul li[data-service="app_indexing"] span { background: rgba(165, 198, 59, 1); } bar ul b , [riot-tag="bar"] ul b { bottom: -2.5em; color: #999; display: inline-block; font-weight: normal; height: 2.2em; left: 0; position: absolute; width: 100%; } bar ul li:hover b , [riot-tag="bar"] ul li:hover b { color: #333; transition: color .2s ease-out; } bar ul i , [riot-tag="bar"] ul i { color: #18D7A2; display: inline-block; height: 2.2em; left: 0; opacity: 0; position: absolute; top: -1em; width: 100%; } bar ul li:hover i , [riot-tag="bar"] ul li:hover i { opacity: 1; transition: opacity .2s ease-out; }', function(opts) {
    this.onClick = function(e) {
      this.parent.onBarClick(e);
    }.bind(this);
  
});

riot.tag('logo', '<header> <h1>meta Tag Analyzer</h1> </header>', 'logo , [riot-tag="logo"] {} logo header , [riot-tag="logo"] header { background: #4a8fe2; height: 55px; margin: 0 0 10px; } logo h1 , [riot-tag="logo"] h1 { color: #fff; font-family: \'KaushanScript-Regular\'; line-height: 55px; padding: 0 10px; }', function(opts) {


});

riot.tag('analyzer', '<logo></logo> <score score="{ score }"></score> <stamp score="{ score }"></stamp> <bar services="{ services }"></bar> <result current="{ current }" lang="{ lang }"></result>', 'analyzer { color: #444; display: block; font-family: sans-serif; min-height: 280px; position: relative; width: 600px; } /*! * "KaushanScript-Regular" is lisenced under the SIL Open Font License 1.1 * by http://www.fontsquirrel.com/fonts/kaushan-script */ @font-face { font-family: \'KaushanScript-Regular\'; src: url(\'fonts/KaushanScript-Regular.eot\'); src: local(\'☺\'), url(\'fonts/KaushanScript-Regular.woff\') format(\'woff\'), url(\'fonts/KaushanScript-Regular.ttf\') format(\'truetype\'), url(\'fonts/KaushanScript-Regular.svg\') format(\'svg\'); font-weight: normal; font-style: normal; } /*! * "Umbrage" is lisenced under the Vic Fieger License v1.00 * by http://www.fontsquirrel.com/license/Umbrage */ @font-face { font-family: \'Umbrage\'; src: url(\'fonts/Umbrage.eot?#iefix\') format(\'embedded-opentype\'), url(\'fonts/Umbrage.woff\') format(\'woff\'), url(\'fonts/Umbrage.ttf\') format(\'truetype\'), url(\'fonts/Umbrage.svg#Umbrage\') format(\'svg\'); font-weight: normal; font-style: normal; } /* keyframes */ @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } } @keyframes stamp { 0% { opacity: 0; } 80% { opacity: 1; transform: scale(1.5) rotate(7deg); } 100% { opacity: 1; transform: scale(1) rotate(7deg); } } @keyframes topToBottom { 0% { transform: scaleY(100%); transform-origin: center bottom; } 100% { transform: scaleY(0); transform-origin: center bottom; } }', function(opts) {

    var data = opts.metaInfo;
    this.lang = navigator.language;
    this.score = Math.floor(data.score);
    this.services = data.services;
    this.current = {
      name: this.services[0].name,
      idx: 0,
      elements: this.services[0].elements,
      website: this.services[0].website
    };

    this.onBarClick = function(e) {
      var idx = Number(e.currentTarget.getAttribute('data-index'));
      this.current.name = this.services[idx].name;
      this.current.idx = idx;
      this.current.elements = this.services[idx].elements;
      this.current.website = this.services[idx].website;
      this.update();
    }.bind(this);

  
});

riot.tag('result', '<figure> <table class="action"> <caption>{ opts.current.name }</caption> <thead> <tr> <th>Tag</th> <th>Description</th> <th>Required</th> <th>Result</th> </tr> </thead> <tbody> <tr each="{ item in opts.current.elements }"> <td>{ item.name }</td> <td>{ item[\'description_\' + parent.lang] || item.description }</td> <td>{ item.required ? \'*\' : \'-\' }</td> <td data-didpassed="{ item.didPassed }">{ item.didPassed ? \'Passed\' : \'Failed\' }</th> </tr> </tbody> </table> <aside>More about { opts.current.name }: <a href="{ opts.current.website }" target="_blank">{ opts.current.website }</a></aside> </figure>', 'result , [riot-tag="result"] {} result figure , [riot-tag="result"] figure { padding: 0 10px 10px; position: relative; } result table , [riot-tag="result"] table { line-height: 1.2; transition: opacity .4s ease-out; width: 100%; word-break: break-word; } result table caption , [riot-tag="result"] table caption { font-weight: bold; margin: 0 0 5px; } result table thead , [riot-tag="result"] table thead { background: #eee; } result table th , [riot-tag="result"] table th { border-radius: 2px; font-weight: normal; } result table th , [riot-tag="result"] table th { padding: 1px; } result table tr:nth-child(even) , [riot-tag="result"] table tr:nth-child(even) { background: #f8f8f8; } result table td , [riot-tag="result"] table td { padding: 2px; } result table td:first-child , [riot-tag="result"] table td:first-child { white-space: nowrap; } result table td:nth-child(3) , [riot-tag="result"] table td:nth-child(3) { text-align: center; width: 60px; } result table td:nth-child(4) , [riot-tag="result"] table td:nth-child(4) { text-align: center; width: 60px; } result table td[data-didPassed="true"] , [riot-tag="result"] table td[data-didPassed="true"] { color: #18D7A2; } result table td[data-didPassed="false"] , [riot-tag="result"] table td[data-didPassed="false"] { color: #f69; } result figure aside , [riot-tag="result"] figure aside { color: #999; font-size: .6rem; padding: 8px 4px 2px; } result figure aside a , [riot-tag="result"] figure aside a { color: #4a8fe2; outline: none; text-decoration: none; } result figure aside a:hover , [riot-tag="result"] figure aside a:hover { text-decoration: underline; }', function(opts) {
    this.lang = opts.lang.substr(0, 2);
  
});

riot.tag('score', '<dl> <dt>Score</dt> <dd>{ opts.score }</dd> </dl>', 'score , [riot-tag="score"] {} score dl , [riot-tag="score"] dl { display: table; padding: 10px; } score dt , [riot-tag="score"] dt { display: table-cell; padding: 0 5px 0 0; vertical-align: baseline; } score dd , [riot-tag="score"] dd { animation: fadeIn .5s ease-out .3s forwards; color: rgb(58, 230, 183); font-size: 2.5rem; opacity: 0; }', function(opts) {


});

riot.tag('stamp', '<p hide="{ !getComment() }">{ getComment() }</p>', 'stamp , [riot-tag="stamp"] {} stamp p , [riot-tag="stamp"] p { animation: stamp .2s ease-out .7s forwards; border: 5px solid #f36; border-radius: 8px; color: #f36; font-family: \'Umbrage\'; font-size: 2.4rem; opacity: 0; padding: 3px 9px; position: absolute; right: 14px; top: 39px; transform: rotate(7deg); }', function(opts) {
    this.score = opts.score;

    this.getComment = function() {
      var score = Number(this.score);
      if (score >= 100) {
        return 'Excellent!';
      } else if (score >= 50) {
        return 'Great';
      } else if (score >= 30) {
        return 'Good';
      } else if (score >= 10) {
        return 'Okay';
      } else {
        return '';
      }
    }.bind(this);
  
});
