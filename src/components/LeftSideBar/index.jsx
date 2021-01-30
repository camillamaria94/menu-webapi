import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom'

export default function navBar(props) {
    return (
      <div className="LeftSideBar">
          <div className="list-container">
            <h2>Menu </h2>
            <Link to="/"className="list-container-item"> Home<br/></Link>
            <Link to="/application/createMenu" className="list-container-item"> Cardápio <br/></Link>
            <Link to="/application/createRecipe" className="list-container-item">  Receitas <br/></Link>
            <Link to="/application/createIngredients" className="list-container-item">  Ingredientes <br/></Link>
            <Link to="/application/createEquipment" className="list-container-item">  Equipamentos <br/></Link>
            <Link to="/application/createIncidencesTopo" className="list-container-item">  Incidências de Contrato <br/></Link>
            <Link to="/application/createUser" className="list-container-item">  User <br/></Link>
          </div>
      </div>
    )};
