import React, { Component } from 'react';
import axios from 'axios';
import fs from 'fs';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    selectedFile: null,
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData()
    fs.append('image', this.state.selectedFile, this.state.slectedFile.name)
    axios.post('url', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress:' + Math.round(progressEvent.loaded / progressEvent.total) * 100 +'%')
      }
    })
      .then(res => {
          console.log(res)
      })
  }
  render() {
    return (
      <div className="App">
        <input
          style={{display: 'none'}}
          type="file"
          onChange={this.fileSelectedHandler}
          ref={fileInput => this.fileInput = fileInput}
        />
        <button onClick={() => this.fileInput.click()}>Pick File</button>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default App;

/*
Use axios for http request
Dont forget to watch
https://www.youtube.com/watch?v=qZ1EFnFOGvE


Use ref to


*/
