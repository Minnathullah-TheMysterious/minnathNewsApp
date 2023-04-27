import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      text: "black",
    };
  }

  handleToggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
        text: "white",
      });
    } else {
      this.setState({
        mode: "light",
        text: "black",
      });
    }
  };

  handleCountryCode = () => {
    console.log('ae')
  };
  

  pageSize = 6;
  apiKey = "45890530df224bbab7fded0071ee7eac";
  country = "in";
  q="cricket"

  render() {
    return (
      <>
        <Router>
          <Navbar
            title="NewsMonkey"
            mode={this.state.mode}
            toggleMode={this.handleToggleMode}
            text={this.state.text}
            countryCode={this.handleCountryCode}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  category="general"
                  apiKey={this.apiKey}
                  q={this.q}
                  key="general" //a unique key is required for remounting the componenet
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  category="business"
                  apiKey={this.apiKey}
                  q={this.q}
                  key="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  category="entertainment"
                  apiKey={this.apiKey}
                  q={this.q}
                  key="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  category="health"
                  apiKey={this.apiKey}
                  q={this.q}
                  key="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  category="science"
                  apiKey={this.apiKey}
                  q={this.q}
                  key="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  category="sports"
                  apiKey={this.apiKey}
                  q={this.q}
                  key="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  category="technology"
                  apiKey={this.apiKey}
                  q={this.q}
                  key="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
