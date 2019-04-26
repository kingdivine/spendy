import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import BarGraph from '././components/charts/BarGraph/BarGraph';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <title>Spendy</title>
          <Switch>
              <Route path='/transactions/day'  component={BarGraph }/>
              <Route path='/transactions/time' component={() => <div>/transactions/time</div>}/>
              <Route path='/average-spend/day' component={() => <div>/average-spend/day</div>}/>
              <Route path='/heatmap' component={() => <div>/heatmap</div>}/>
              <Redirect to="/transactions/day"/>  
          </Switch>  
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
