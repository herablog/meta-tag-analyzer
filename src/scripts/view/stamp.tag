<stamp>

  <style scoped>
    :scope {}
    p {
      animation: stamp .2s ease-out .7s forwards;
      border: 5px solid #f36;
      border-radius: 8px;
      color: #f36;
      font-family: 'Umbrage';
      font-size: 2.4rem;
      opacity: 0;
      padding: 3px 9px;
      position: absolute;
      right: 14px;
      top: 39px;
      transform: rotate(7deg);
    }
  </style>

  <p hide={ !getComment() }>{ getComment() }</p>

  <script>
    this.score = opts.score;

    getComment() {
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
    }
  </script>

</stamp>
