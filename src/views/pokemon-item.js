import Mn from 'backbone.marionette'
import _ from 'underscore'

export default Mn.View.extend({
  initialize: function(){
    this.headers = ['dexId', 'name', 'type1', 'generation']
    //this.templateStr = this.headers.map(header => `<td><%= ${header} %></td>`) 
  },
  tagName: 'tr',

  template: _.template(`
    <td><%= dexId %></td>
    <td><%= name %></td>
    <td><%= type1 %></td>
    <td><%= generation %></td>
    <td>
    <button class="edit btn btn-primary">Edit</button>
    <button class="delete btn btn-danger">Delete</button>
    </td>
  `),

  className: '', 

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
      attrs[key] = inputs.find(input => input.dataset.key === key).value
    })
    this.model.set({isEditing: false}).save(attrs);
  },

  cancelEdit: function(){
    this.model.set({ isEditing: false })
  },

  render: function(){
    if(!this.model.get('isEditing')){

      this.$el.html(this.template(this.model.attributes))
    
    } else {
      let htmlStr = this.headers.map(key => (
        `<td><input type="text" value=${this.model.get(`${key}`)} data-key=${key}></td>`
      ))
      this.$el.html(
        htmlStr.join('')+
        `<td>
          <button class="save btn btn-primary">Save</button>
          <button class="cancel btn btn-secondary">Cancel</button>
        </td>`    
      )
    }
    return this
  }
})
