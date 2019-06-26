import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import Login from "./components/login/login";

class App extends Component {
  // 'icon' property in pages is the FontAwesome icon name.
  constructor() {
    super();
    this.state = {
      pages: [
        { name: "Home", icon: "home" },
        { name: "Feed", icon: "rss" },
        { name: "Events", icon: "thumb-tack" },
        { name: "Calendar", icon: "calendar" },
        { name: "Map", icon: "map" },
        { name: "Profile", icon: "user" }
      ],
      activePage: 0
    };
  }

  switchPage = page => {
    const newActive = this.state.pages.findIndex(pg => pg.name === page.name);
    this.setState({ activePage: newActive });
  };

  render() {
    console.log(this.state);
    return <Login />;
  }
}

export default App;
