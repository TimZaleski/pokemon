export default class Pokemon {
    constructor({ id, url, name, description, img, weight, height, types, user, sprites, base_experience }) {
      this.id = id
      this.url = url
      this.name = name
      this.description = description
      this.img = (sprites ? sprites.front_default : img);
      this.weight = weight
      this.height = height
      this.types = types
      this.user = user
      this.base_experience = base_experience
    }
  
    get Template() {
        let typeList = "";
        for (let i = 0; i < this.types.length; i++)
        {
            typeList+= (this.types[i].type.name + " ");
        }
        return `
        <img src="${this.img}">
        <h2 class="capital">${this.name}</h2>
        <p class="capital">${typeList}</p>
        <p>Height: ${this.height}  Weight: ${this.weight}</p>
        ${this.Button}
        `
      }
  
    get Button() {
      if (this.base_experience) {
        return `<button onclick="app.myPokemonController.addPokemon()">Add Pokemon</button>`
      }
      return `<button  onclick="app.myPokemonController.removePokemon()">Remove Pokemon</button>`
    }
  
  }
  