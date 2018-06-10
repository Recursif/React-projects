
import React from 'react'
import ReactDOM from 'react-dom'
import CelebrityJokes from './components/CelebrityJokes'
import FoodJokes from './components/FoodJokes'
import Callback from './components/Callback'
import { Router, Route } from 'react-router-dom'
import history from './history'

import { requireAuth } from './utils/AuthService'

ReactDOM.render(
    <Router history={history}>
        <div>
            <Route exact path="/" component={FoodJokes}/>
            <Route path="/special" component={CelebrityJokes} onEnter={requireAuth} />
            <Route path="/callback" component={Callback} />
        </div>    
    </Router>,
    document.getElementById('app')
)

