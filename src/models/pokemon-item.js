import Bb from 'backbone'

export default Bb.Model.extend({
  defaults: {
    name: '',
    type1: '',
    type2: '',
    generation: '',
    isEditing: false
  },

  idAttribute: "dexId",
})
