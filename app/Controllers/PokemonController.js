import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";

function _drawPokemon() {
  let template = ''
  ProxyState.pokemon.forEach(s => {
    let sections = s.url.split('/');
    let index = sections[6];
    template += `<li class="action capital" onclick="app.pokemonController.getPokemon('${index}')">${s.name}</li>`
  })
  document.getElementById("api-pokemon").innerHTML = template
}

function _drawActivePokemon() {
  let template = ''
  if (ProxyState.activePokemon) {
    template = ProxyState.activePokemon.Template
  }
  document.getElementById("active-pokemon").innerHTML = template
}

export default class PokemonController {
  constructor() {
    ProxyState.on('pokemon', _drawPokemon)
    ProxyState.on('activePokemon', _drawActivePokemon)

    this.getAllPokemon()
  }

  getAllPokemon() {
    try {
      pokemonService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  getPokemon(index) {
    try {
      pokemonService.getPokemon(index)
    } catch (error) {
      console.error(error)
    }
  }
}