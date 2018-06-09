

import React from 'react'
import ReactDOM from 'react-dom'
import Experiment from './componentApiEx'
import Button from './incrementButton'


ReactDOM.render(
    <div>
        <Button />
        <Experiment />
    </div>,
    document.getElementById("app")
)
