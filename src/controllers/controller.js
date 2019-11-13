import Mn from 'backbone.marionette'
import RootView from '../views/root'
import PokemonList from '../views/pokemon-list'
import PokemonCollection from '../models/pokemon-collection'
import Menu from '../views/menu'

export default Mn.Object.extend({

  initialize: function () {
    this.pokemonCollection = new PokemonCollection()
  },

  start: function () {
    let rootView = new RootView()

    rootView.showChildView('menu', new Menu({
			collection: this.pokemonCollection
		}))

    rootView.showChildView('main', new PokemonList({
      collection: this.pokemonCollection
    }))

    this.pokemonCollection.fetch()
  },
})
