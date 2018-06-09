
import React from 'react'
import ReactDOM from 'react-dom'
import CelebrityJokes from './components/CelebrityJokes'
import FoodJokes from './components/FoodJokes'
import { Router, Route } from 'react-router-dom'
import history from './history'


ReactDOM.render(
    <Router history={history}>
        <div>
            <Route exact path="/" component={FoodJokes}/>
            <Route path="/special" component={CelebrityJokes}/>
        </div>    
    </Router>,
    document.getElementById('app')
)

