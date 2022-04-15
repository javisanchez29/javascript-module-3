function buildRoot() {
  const root = document.getElementById("root")
  root.innerHTML =
    '<div id="content">' +
      '<div id="sidebar"><div id="episodes"></div></div>' +
      '<div id="main"></div>' +
    '</div>' +
    '<div id="header"><h1>Rick and Morty API</h1></div>'
}

function loadEpisodes() {
  fetch("https://rickandmortyapi.com/api/episode")
    .then(res => res.json())
    .then(episodes => showEpisodeLinks(episodes))
    .catch(reason => console.log(reason))
}

function showEpisodeLinks(episodes) {
  const episodesContainer = document.getElementById("episodes")
  episodes.results
    .map(createEpisodeLink)
    .forEach(node => episodesContainer.appendChild(node))
}

function createEpisodeLink(episode) {
  const episodeLink = document.createElement("div")
  episodeLink.classList.add("episodeLink")
  episodeLink.innerText = episode.name
  return episodeLink
}


buildRoot()
loadEpisodes()
