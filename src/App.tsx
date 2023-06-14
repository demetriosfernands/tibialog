import React, {useEffect, useState} from 'react';
import './App.css';
import { Cabecalho } from './components/Cabecalho/Index';
import { CardLog } from "./components/CardLog/Index";
import api from './services/api';

function App() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {

        carregarLogs();

    },[])

    async function carregarLogs(){
        const response = await api.get('/log');
        setLogs(response.data);
    }

  return (
    <div className="App">
      <Cabecalho />
      <div className="logContainer">
          {logs.map((log: any, index) =>(
              <CardLog key={index} hora={log.hora} info={log.info} />
          ))}
      </div>
    </div>
  );
}

export default App;
