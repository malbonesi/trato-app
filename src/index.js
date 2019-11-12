import Bb from 'backbone'
import Mn from 'backbone.marionette'
import _ from 'underscore'
//import RootView from './views/root'
import PokemonList from './views/pokemon-list'
import PokemonCollection from './models/pokemon-collection'

const App = Mn.Application.extend({
  region: '#app',

  onStart() {
    //const rootView = new RootView()
    //this.showView(rootView)
    const pokemonListView = new PokemonList({collection: new PokemonCollection()})
    this.showView(pokemonListView)

    Bb.history.start()
  }
})

const app = new App();
app.start();
