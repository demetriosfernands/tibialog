import React, {useEffect, useState} from 'react';
import './App.css';
import { Cabecalho } from './components/Cabecalho/Index';
import { CardLog } from "./components/CardLog/Index";
import api from './services/api';
import {Simulate} from "react-dom/test-utils";
import lostPointerCapture = Simulate.lostPointerCapture;

function App() {

    const [logs, setLogs] = useState([]);
    const [danos, setDanos] = useState(0);
    const [healou, setHealou] = useState(0);
    const [qtdItens, setQtdItens] = useState(0);

    useEffect(() => {

        carregarLogs();
        getTotalDamage();
        getTotalHealed();
        getTotalItens();

    },[])

    function getTotalDamage() {
        let qtdDanos = 0;

        if (logs.length > 0) {
            logs.map((log: any) => {
                if(log.info.indexOf("lose") !== -1) {
                    qtdDanos++;
                };
            })
            setDanos(qtdDanos);
        };
    }

    function getTotalItens() {
        let qtdItens = 0;

        if (logs.length > 0) {
            logs.map((log: any) => {
                if(log.info.indexOf("Loot") !== -1) {
                    qtdItens++;
                };
            })
            setQtdItens(qtdItens);
        };
    }

    function getTotalHealed() {
        let qtdHealed = 0;

        if (logs.length > 0) {
            logs.map((log: any) => {
                if(log.info.indexOf("healed") !== -1) {
                    qtdHealed++;
                };
            })
            setHealou(qtdHealed);
        };
    }

    async function carregarLogs(){
        const response = await api.get('/log');
        setLogs(response.data);
    }

  return (
    <div className="App">
      <Cabecalho />
      <div className="infoContainer">
        <p>Levou dano {danos} vezes</p>
        <p>Se healou {healou} vezes</p>
        <p>Pegou {qtdItens} itens</p>
      </div>
      <div className="logContainer">
          {logs.map((log: any, index) =>(
              <CardLog key={index} hora={log.hora} info={log.info} />
          ))}
      </div>
    </div>
  );
}

export default App;
