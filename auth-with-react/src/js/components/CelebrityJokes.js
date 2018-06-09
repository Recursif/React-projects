
import React, { Component } from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import { getCelebrityData } from '../utils/chuck-api'


class CelebrityJokes extends Component {
    constructor(props) {
        super(props)
        this.state = { jokes: [] }
    }

    getCelebrityJokes() {
        getCelebrityData().then(jokes => {
            this.setState(jokes)
        })
    }

    componentDidMount() {
        getCelebrityJokes()
    }

    render () {
          <div>
                <Nav />
                <h3 className="text-center">Chuck Norris Food Jokes</h3>
                <hr/>

                {jokes.map((joke, index) => (
                    <div className="col-sm-6" key={index}>
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h3 className="panel-title"><span className="btn">#{ joke.id }</span></h3>
                            </div>
                            <div className="panel-body">
                                <p> { joke.joke } </p>
                            </div>
                        </div>
                    </div>
                ))}
                
                <div className="col-sm-12">
                    <div className="jumbotron text-center">
                        <h2>View Food Jokes</h2>
                        <Link className="btn btn-lg btn-success" to='/'>Chuck Norris Food Jokes </Link>
                    </div>
                </div>
            </div>
        )    
    }
}

export default CelebrityJokes
