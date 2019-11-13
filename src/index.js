import Bb from 'backbone'
import Mn from 'backbone.marionette'
import Controller from './controllers/controller'

const App = Mn.Application.extend({

  onStart() {
    let controller = new Controller()
    controller.start()
    Bb.history.start()
  }
})

const app = new App()
app.start()
