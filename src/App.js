import React from 'react'

import { Route } from "react-router-dom"

import BooksMain from './components/pages/BooksMain';
import Search from './components/pages/Search';
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ BooksMain } />
        <Route exact path="/search" component={ Search } />
      </div>
    );
  }
}

export default BooksApp
