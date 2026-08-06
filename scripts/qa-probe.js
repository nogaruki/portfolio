// Dev-only probe injected into the QA pages: reports horizontal overflow
// on screen, so a headless screenshot carries the measurements with it.
(function () {
  var de = document.documentElement;
  var over = [].slice
    .call(document.querySelectorAll("body *"))
    .filter(function (e) {
      var r = e.getBoundingClientRect();
      return r.width > 0 && r.right > de.clientWidth + 1;
    })
    .slice(0, 6)
    .map(function (e) {
      var r = e.getBoundingClientRect();
      return (
        e.tagName + "." + String(e.className).slice(0, 30) +
        " right=" + Math.round(r.right) + " w=" + Math.round(r.width)
      );
    });

  var lines = [
    "innerW=" + window.innerWidth +
      " clientW=" + de.clientWidth +
      " scrollW=" + de.scrollWidth +
      " dpr=" + window.devicePixelRatio,
  ].concat(over.length ? over : ["NO OVERFLOW"]);

  var d = document.createElement("div");
  d.id = "qa-report";
  d.textContent = lines.join("\n");
  document.body.appendChild(d);
})();
