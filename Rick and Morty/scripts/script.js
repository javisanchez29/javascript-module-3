function buildRoot() {
  const root = document.getElementById("root")
  root.innerHTML = '<div id="header"><h1>Rick and Morty API</h1></div>' +
    '<div id="content">' +
      '<div id="sidebar"><div id="chapters"></div></div>' +
      '<div id="main"></div>' +
    '</div>'
}


buildRoot()
