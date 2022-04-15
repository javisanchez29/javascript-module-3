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
  episodeLink.addEventListener("click", () => showEpisodeDetail(episode))
  return episodeLink
}

function showEpisodeDetail(episode) {
  const main = document.getElementById("main")
  main.innerHTML = `<h2>${episode.name}</h2>` +
    `<h3>${episode.episode} | ${episode.air_date} </h3>`

  const charactersContainer = document.createElement("div")
  charactersContainer.id="charactersContainer"
  main.appendChild(charactersContainer)
  episode.characters
  .forEach(characterUrl => createCharacterThumbnail(charactersContainer, characterUrl))
}

function createCharacterThumbnail(parent, characterUrl) {
  const div = document.createElement("div")
  div.classList.add("characterThumbnail")
  fetch(characterUrl)
    .then(res => res.json())
    .then(character => renderCharacterThumbnail(div, character))
  parent.appendChild(div)
}

function renderCharacterThumbnail(parent, character) {
  parent.innerHTML = `<img src=${character.image}>` +
  `<h4>${character.name}</h4>` +
  `<h5>${character.species} | ${character.status}</h5>`
}



buildRoot()
loadEpisodes()
