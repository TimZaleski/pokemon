import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokemonService {
  async getAllPokemon() {
    let res = await pokeApi.get('');
    ProxyState.pokemon = res.data.results;
  }
  async getPokemon(index) {
    let res = await pokeApi.get(index)
    
    ProxyState.activePokemon = new Pokemon(res.data);
    console.log(res.data);
    console.log(ProxyState.activePokemon);
  }
}

export const pokemonService = new PokemonService();