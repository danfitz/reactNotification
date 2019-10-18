import React, { Component } from "react";
import axios from "axios"; // React library for GET request
import WillfulLogo from "./willful-icon.png";

// Just the react REPO url
const reactRepoUrl = "https://api.github.com/repos/facebook/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reactRepoDescription: "",
      isNotificationOpen: false
    };
  }

  // This method takes a url and sends a GET request then returns the response.data
  fetchRepoData = async (url) => {
    try {
      const response = await axios(url);
      const repoData = response.data;
      return repoData;

    } catch(error) {
      console.log(error); // log error if it occurs
    };
  };
  
  // This method opens and closes notification
  // IF notification is OPENING, it fetches repo data and sets state
  // IF notification is CLOSING, it just sets state
  handleClick = async () => {
    if (!this.state.isNotificationOpen) {

      const reactRepoData = await this.fetchRepoData(reactRepoUrl);
  
      this.setState({
        reactRepoDescription: reactRepoData.description,
        isNotificationOpen: true
      });

    } else {

      this.setState({
        isNotificationOpen: false
      });

    };
  };

  render() {
    return (
      <main>

        {/* This ternary conditionally displays notification IF (1) notification is opened */}
        {/* and (2) repo description was successfully fetched */}
        {this.state.isNotificationOpen && this.state.reactRepoDescription ? (

          <div className="notification banner">

            <img className="willfulLogo" src={WillfulLogo} alt="Willful" />
            <p className="notificationMessage">{this.state.reactRepoDescription}</p>

            <button className="closeNotification" onClick={this.handleClick}>
              <span className="visuallyHidden">Close notification</span>
              <span aria-hidden="true">X</span>
            </button>

          </div>

        ) : null }

        <button className="openNotification banner" onClick={this.handleClick}>
          what is react?
        </button>

      </main>
    );
  };
}

export default App;
