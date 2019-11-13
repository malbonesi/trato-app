import Bb from 'backbone'
import PokemonItem from './pokemon-item.js'

export default Bb.Collection.extend({
  url: 'https://tratotest.herokuapp.com/pokemon',

  model: PokemonItem,
  
  comparator: 'dexId',

  initialize: function() { 
    this.fetch() 
  },

  parse: function(res) { 
    return res.data
  }

})
