<score>

  <style scoped>
    :scope {}
    dl {
      display: table;
      padding: 10px;
    }
    dt {
      display: table-cell;
      padding: 0 5px 0 0;
      vertical-align: baseline;
    }
    dd {
      animation: fadeIn .5s ease-out .3s forwards;
      color: rgb(58, 230, 183);
      font-size: 2.5rem;
      opacity: 0;
    }
  </style>

  <dl>
    <dt>Score</dt>
    <dd>{ opts.score }</dd>
  </dl>

</score>
