import { createStore } from 'vuex'
import app from './module/app'
import movie from './module/movie'
export default createStore({
  

  modules:{
    app,
    movie
  }
})
