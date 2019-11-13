import Mn from 'backbone.marionette'

export default Mn.View.extend({
  
  el: '#app',

  regions: {
    menu: '.menu',
    main: '.main',
  },
})
