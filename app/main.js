import PokemonController from "./Controllers/PokemonController.js";
import MyPokemonController from "./Controllers/MyPokemonController.js";

class App {
  pokemonController = new PokemonController();
  myPokemonController = new MyPokemonController();
}

window["app"] = new App();
