<result>

  <style scoped>
    :scope {}
    figure {
      padding: 0 10px 10px;
      position: relative;
    }
    table {
      line-height: 1.2;
      transition: opacity .4s ease-out;
      width: 100%;
      word-break: break-word;
    }
    table caption {
      font-weight: bold;
      margin: 0 0 5px;
    }
    table thead {
      background: #eee;
    }
    table th {
      border-radius: 2px;
      font-weight: normal;
    }
    table th {
      padding: 1px;
    }
    table tr:nth-child(even) {
      background: #f8f8f8;
    }
    table td {
      padding: 2px;
    }
    table td:first-child {
      white-space: nowrap;
    }
    table td:nth-child(3) {
      text-align: center;
      width: 60px;
    }
    table td:nth-child(4) {
      text-align: center;
      width: 60px;
    }
    table td[data-didPassed="true"] {
      color: #18D7A2;
    }
    table td[data-didPassed="false"] {
      color: #f69;
    }
    figure aside {
      color: #999;
      font-size: .6rem;
      padding: 8px 4px 2px;
    }
    figure aside a {
      color: #4a8fe2;
      outline: none;
      text-decoration: none;
    }
    figure aside a:hover {
      text-decoration: underline;
    }
  </style>

  <figure>
    <table class="action">
      <caption>{ opts.current.name }</caption>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Description</th>
          <th>Required</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr each={ item in opts.current.elements }>
          <td>{ item.name }</td>
          <td>{ item['description_' + parent.lang] || item.description }</td>
          <td>{ item.required ? '*' : '-' }</td>
          <td data-didpassed={ item.didPassed }>{ item.didPassed ? 'Passed' : 'Failed' }</th>
        </tr>
      </tbody>
    </table>
    <aside>More about { opts.current.name }: <a href={ opts.current.website } target="_blank">{ opts.current.website }</a></aside>
  </figure>

  <script>
    this.lang = opts.lang.substr(0, 2);
  </script>

</result>
