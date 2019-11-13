import Mn from 'backbone.marionette'
import _ from 'underscore'

export default Mn.View.extend({
  tagName: 'div',  
  
  template: _.template(`<button class="btn btn-primary">New</button>`),
  
  className: 'my-2',
  
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
