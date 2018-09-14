import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import updateUser from "./actions/user-acctions";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <input onChange={this.onUpdateUser} />
          {this.props.user}
          <hr />
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

// const mapStateToProps = state => ({
//   products: state.products,
//   user: state.user
// });

// const mapsActionsToProps = {
//   onUpdateUser: updateUser
// };

export default App;
