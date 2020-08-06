import React from 'react';
import Table from './components/Table';

import './App.css';
import './data/bond_px.json';

function App() {
  return (
    <div className="App">
      <Table data={data}/>
    </div>
  );
}

export default App;
