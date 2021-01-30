import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import LayoutCard from './components/layout/Cards/cards'

function App() {
  const cardapio = {
    "id": 1,
    "data": "02/11/2020",
    "url": "http://localhost:3001/fichatecnica",
    "typeRecipe": [
      {
        "simpleSalad": "Alface Crespa",
        "compoundSalad": "Salpicão",
        "accompany1": "Arroz",
        "accompany2": "Feijão Tropeiro",
        "Guarnição": "Farofa Rica",
        "PratoPrincipal": "Bife Bovino",
        "Opção": "Linguiça",
      }
    ]
  }
  return (
    <div>
    <LayoutCard cardapio={cardapio}></LayoutCard>  
    </div>

  );
}


export default App;
