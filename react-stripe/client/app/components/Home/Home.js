import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setupBegan: false,
      isLoadingFieldsNeeded: true,
      error: null,
    };

    this.fetchFieldsNeeded = this.fetchFieldsNeeded.bind(this);
    this.onClickBeginSetup = this.onClickBeginSetup.bind(this);

  }

  componentWillMount() {
    this.fetchFieldsNeeded();
  }

  fetchFieldsNeeded() {
    fetch('/api/stripe/account/get',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      }).then(res => res.json())
        .then(json => {
          const {
            success,
            messages,
            setupBegan,
          } = json;

          if (success) {
            this.setState({
              setupBegan,
              isLoadingFieldsNeeded: false ,
            })
          } else {
            // Failed
            this.setState({
              error: message,
              isLoadingFieldsNeeded: false
            })
          }
        })
  }

  onClickBeginSetup() {
    console.log('onClickBeginSetup')
  }

  render() {
    const {
      isLoadingFieldsNeeded,
      setupBegan,
      error,
    } = this.state;

    if (isLoadingFieldsNeeded) {
      return (
        <p>Loading...</p>
      )
    }

    if (setupBegan) {
      return (
        <div>
        {
          (error) ? (
            <p>{error}</p>
          ) : (null)
        }
          <button onClick={this.onClickBeginSetup}>
            Begin Setup
          </button>

        <p>By clicking setup you agree to the TOS for stripe and us.</p>
        </div>
      )
    }

    return (
      <>
      {
        (error) ? (
          <p>{error}</p>
        ) : (null)
      }
        <p>Start adding Stripe elements</p>
      </>
    );
  }
}

export default Home;
