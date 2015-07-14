<analyzer>

  <style>
    analyzer {
      color: #444;
      display: block;
      font-family: sans-serif;
      min-height: 280px;
      position: relative;
      width: 600px;
    }
    /*!
     * "KaushanScript-Regular" is lisenced under the SIL Open Font License 1.1
     * by http://www.fontsquirrel.com/fonts/kaushan-script
     */
    @font-face {
    	font-family: 'KaushanScript-Regular';
    	src: url('fonts/KaushanScript-Regular.eot');
    	src: local('☺'), url('fonts/KaushanScript-Regular.woff') format('woff'), url('fonts/KaushanScript-Regular.ttf') format('truetype'), url('fonts/KaushanScript-Regular.svg') format('svg');
    	font-weight: normal;
    	font-style: normal;
    }
    /*!
     * "Umbrage" is lisenced under the Vic Fieger License v1.00
     * by http://www.fontsquirrel.com/license/Umbrage
     */
    @font-face {
      font-family: 'Umbrage';
      src: url('fonts/Umbrage.eot?#iefix') format('embedded-opentype'),  url('fonts/Umbrage.woff') format('woff'), url('fonts/Umbrage.ttf')  format('truetype'), url('fonts/Umbrage.svg#Umbrage') format('svg');
      font-weight: normal;
      font-style: normal;
    }
    /* keyframes */
    @keyframes fadeIn {
        0%   { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes stamp {
        0%   { opacity: 0; }
        80%  { opacity: 1; transform: scale(1.5) rotate(7deg); }
        100% { opacity: 1; transform: scale(1) rotate(7deg); }
    }
    @keyframes topToBottom {
        0%   { transform: scaleY(100%); transform-origin: center bottom; }
        100% { transform: scaleY(0); transform-origin: center bottom; }
    }
  </style>


  <logo></logo>
  <score score={ score }></score>
  <stamp score={ score }></stamp>
  <bar services={ services }></bar>
  <result current={ current } lang={ lang }></result>


  <script>

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

    onBarClick(e) {
      var idx = Number(e.currentTarget.getAttribute('data-index'));
      this.current.name = this.services[idx].name;
      this.current.idx = idx;
      this.current.elements = this.services[idx].elements;
      this.current.website = this.services[idx].website;
      this.update();
    }

  </script>

</analyzer>
