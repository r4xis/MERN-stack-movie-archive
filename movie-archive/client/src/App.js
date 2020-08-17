import React, { Component } from 'react'
import AppNavbar from './components/AppNavbar'
import MovieList from './components/MovieList'
import { Provider } from 'react-redux'
import store from './store'
import MovieModal from './components/MovieModal'
import { Container } from 'reactstrap'
import { loadUser } from "./actions/authActions"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <MovieList />
            <MovieModal />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
