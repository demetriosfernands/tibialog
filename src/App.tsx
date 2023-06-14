import React from 'react';
import './App.css';
import { Cabecalho } from './components/Cabecalho/Index';
import { CardLog } from "./components/CardLog/Index";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <div>
          <CardLog></CardLog>
      </div>
    </div>
  );
}

export default App;
