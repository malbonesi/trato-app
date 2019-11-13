import Mn from 'backbone.marionette'
import _ from 'underscore'

export default Mn.View.extend({
  initialize: function(){
    this.headers = ['dexId', 'name', 'type1', 'type2', 'generation']
  },

  tagName: 'tr',

  ui: {
    edit: '.edit',
    delete: '.delete',
    save: '.save',
    cancel: '.cancel',
  },

  events: {
    'click @ui.delete': 'deleteModel',
    'click @ui.edit': 'editModel',
    'click @ui.save': 'saveModel',
    'click @ui.cancel': 'cancelEdit',
  },

  modelEvents: {
    change: 'render'
  },

  deleteModel: function () {
    this.model.destroy();
  },

  editModel: function () {
    this.model.set({ isEditing: true })
  },

  saveModel: function () {
    let attrs = {}
    
    let inputs = _.values(this.$el.find('input'))

    this.headers.forEach(key => {

      let val = inputs.find(input => input.dataset.key === key).value
      
      //cast dexId and generation to numbers
      attrs[key] = ['dexId', 'generation'].includes(key) ? +val : val
    })

    let type = 'PUT'
    let url = this.model.url()
    
    if(this.model.isNew()) {
      type = 'POST' 
      url = this.model.collection.url
    }

    this.model.save(attrs,
      {
        type: type,
        url: url,
        success: function(model, res){
          model.set({ isEditing: false })
        },
        error: function(model, res){}
      }
    )
  },

  cancelEdit: function(){
    if(this.model.isNew()){ 

      this.model.destroy()  
    
    } else {
      
      this.model.set({ isEditing: false })
    
    }  
  },

  render: function(){

    let buttons = this.model.get('isEditing') 
      ? `<td>
          <button class="save btn btn-primary">Save</button>
          <button class="cancel btn btn-secondary">Cancel</button>
         </td>`

      : `<td>
          <button class="edit btn btn-primary">Edit</button>
          <button class="delete btn btn-danger">Delete</button>
         </td>`
    
    let htmlStr = this.headers.map(key => {
      
      let value = this.model.get(key) 
        
      if(this.model.get('isEditing')){
        return `
          <td>
            <input type="text" value='${value || ''}' data-key=${key}>
          </td>
        `
      } else {
        return `<td>${value}</td>`
      }
    })

    this.$el.html(
      htmlStr.join('') +
      buttons  
    )

    return this;
  }
})
