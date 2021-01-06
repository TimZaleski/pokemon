import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi, sandboxApi } from "./AxiosService.js";

class MyPokemonService {
  async getAllPokemon() {
    let res = await sandboxApi.get('');
    ProxyState.myPokemon = res.data.map(s => new Pokemon(s));
  }
  getPokemon(id) {
    let poke = ProxyState.myPokemon.find(p => p.id === id);
    ProxyState.activePokemon = poke;
    console.log(poke);
  }

  async addPokemon() {
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    console.log(res.data);
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)];

  }

  async removePokemon() {
    let res = await sandboxApi.delete(ProxyState.activePokemon.id);
    ProxyState.myPokemon = ProxyState.myPokemon.filter(s => s.id !== ProxyState.activePokemon.id);
    ProxyState.activePokemon = null;

  }
}

export const myPokemonService = new MyPokemonService();