import { createRouter } from '../core/core'
import Home from './Home'
import Movie from './Movie'
import NotFound from './NotFound'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '.*', component: NotFound } // '.*' === '.{0,}'
])