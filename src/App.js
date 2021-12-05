import React from "react";
import "./App.css";
import Form from "./app_component/form.component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Weather from "./app_component/weather.component";

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/weatherPage" component={Weather} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

