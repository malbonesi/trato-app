import Mn from 'backbone.marionette'
import _ from 'underscore'

export default Mn.View.extend({
  tagName: 'button',  
  
  template: _.template(`<span">New</span>`),
  
  className: 'my-2 btn btn-primary',
  
  events: {
    'click': 'addModel'
  },
  
  addModel: function(){
    this.collection.add({ 
      isEditing: true 
    },
    { 
      at: 0 
    })  
  }
})
