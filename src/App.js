import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { render } from "react-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Header2 from "./components/Header/Header2";
import AppendHead from "react-append-head";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Cookies from "react-cookie";
import { PrivateRoute } from "./services/privateroute";
import MetaTags from "react-meta-tags";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
   

    items: [],
    error: null,
    isLoaded: false,
    year: "",
  };

  handleIncrement = (counter) => {
    // [... ] klonovani
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  componentDidMount = () => {
    const date = new Date();
    const year = date.getFullYear();
    this.setState({
      year: date.getFullYear(),
    });
  };

  render() {
    return (
      <React.Fragment>
       
        <div>
          <Router>
            <Switch>
              <PrivateRoute
                path="/welcome"
                warning="Prosim na pristup k teto strance se prihlaste"
              >
                <Header />
                <main className="container">
                  <DashBoard
                    delete={this.delete}
                    items={this.state.items}
                    onDownload={this.handleDownload}
                  />
                </main>
              </PrivateRoute>

              <Route path="/login">
                <Header2 />
                <Login />
              </Route>
              <Route path="/register">
                <Header2 />
                <Register />
              </Route>
              <Route path="/">
                <Header2 />
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>

       
          <div class="footer">
            {console.log(this.state.year)}

            <small>
              Copyright © {this.state.year} PhotoStorage studio{" "}
            </small>
          </div>
      
     
      </React.Fragment>
    );
  }
}
export default App;
