import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PeriodicTable from './components/periodic_table_component.jsx';


export default class App extends Component {
  render() {
    return (
      <div>
        <PeriodicTable />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
