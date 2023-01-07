// just copy and paste to brower console =]
(function (filename, type) {
  const html = document.querySelector('main').innerHTML;
  const blob = new Blob([html], {type: type});
  const url = URL.createObjectURL(blob);
  function download(url, filename) {
     const a = document.createElement('a');
     a.href = url;
     a.download = filename;
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
  }
  download(url, filename);
})(document.title + '.html', 'text/html');
