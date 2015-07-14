<bar>

  <style scoped>
    :scope {}
    ul {
      cursor: pointer;
      display: flex;
      font-size: .3rem;
      margin: 0 10px 25px;
    }
    ul li {
      border-right: 1px solid #eee;
      box-sizing: border-box;
      font-size: 2em;
      height: 2.2em;
      padding: 1px;
      position: relative;
    }
    ul li:first-child,
    ul li:first-child span {
      border-radius: 2px 0 0 2px;
    }
    ul li:last-child,
    ul li:last-child span[style*="width:100%;"] {
      border-radius: 0 2px 2px 0;
    }
    ul li:last-child {
      border: none;
      -webkit-box-flex: 0;
    }
    ul li[data-service="html_meta"] {
      background: rgba(255, 163, 123, .2);
    }
    ul li[data-service="open_graph"] {
      background: rgba(133, 154, 207, .14);
    }
    ul li[data-service="app_links"] {
      background: rgba(133, 154, 207, .14);
    }
    ul li[data-service="twitter_cards_web"] {
      background: rgba(124, 192, 244, .1);
    }
    ul li[data-service="twitter_cards_app"] {
      background: rgba(124, 192, 244, .1);
    }
    ul li[data-service="app_indexing"] {
      background: rgba(222, 246, 146, .2);
    }
    ul span {
      background: red;
      display: block;
      height: 2.2em;
      left: 0;
      position: absolute;
      top: 0;
    }
    ul li[data-service="html_meta"] span {
      background: rgba(241, 101, 41, 1);
    }
    ul li[data-service="open_graph"] span {
      background: rgba(59, 87, 157, 1);
    }
    ul li[data-service="app_links"] span {
      background: rgba(59, 87, 157, 1);
    }
    ul li[data-service="twitter_cards_web"] span {
      background: rgba(85, 172, 238, 1);
    }
    ul li[data-service="twitter_cards_app"] span {
      background: rgba(85, 172, 238, 1);
    }
    ul li[data-service="app_indexing"] span {
      background: rgba(165, 198, 59, 1);
    }
    ul b {
      bottom: -2.5em;
      color: #999;
      display: inline-block;
      font-weight: normal;
      height: 2.2em;
      left: 0;
      position: absolute;
      width: 100%;
    }
    ul li:hover b {
      color: #333;
      transition: color .2s ease-out;
    }
    ul i {
      color: #18D7A2;
      display: inline-block;
      height: 2.2em;
      left: 0;
      opacity: 0;
      position: absolute;
      top: -1em;
      width: 100%;
    }
    ul li:hover i {
      opacity: 1;
      transition: opacity .2s ease-out;
    }
  </style>

  <ul>
    <li each={ service, i in opts.services } data-service={ service.id } data-index={ i } style="width: { service.percentageAllItems }%;" onclick={ parent.onClick }>
      <span style="width: { service.percentagePassed }%;"></span><b>{ service.name }</b><i>{  Math.floor(service.percentagePassed) }%</i>
    </li>
  </ul>

  <script>
    onClick(e) {
      this.parent.onBarClick(e);
    }
  </script>

</bar>
