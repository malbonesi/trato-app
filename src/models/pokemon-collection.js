import Bb from 'backbone'
import PokeModel from './pokemon-item.js'

export default Bb.Collection.extend({
  url: 'https://tratotest.herokuapp.com/pokemon',

  model: PokeModel,

  initialize: function() { 
    this.fetch() 
  },

  parse: function(res) { return res.data }

})
