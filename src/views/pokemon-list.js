import Mn from 'backbone.marionette'
import PokemonItem from './pokemon-item'
import _ from 'underscore'

const TableBody = Mn.CollectionView.extend({
  tagName: 'tbody',
  childView: PokemonItem,

})

export default Mn.View.extend({
  tagName: 'table',
  template: _.template(`
    <thead>
      <tr>
        <th scope="col">DexId</th>
        <th scope="col">Name</th>
        <th scope="col">Type1</th>
        <th scope="col">Type2</th>
        <th scope="col">Generation</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody></tbody>
  `),

  className: 'table',

  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },

  onRender() {
    this.showChildView('body', new TableBody({
      collection: this.collection
    }));
  }
})
