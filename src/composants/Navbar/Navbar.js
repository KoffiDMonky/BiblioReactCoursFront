import React from 'react';
import './Navbar.css';

//--------------------------------------- Composant navbar---------------------------------------------//

function Navbar(props) { //Fonction permettant d'afficher la navbar
  return (
      //Affichage de la Navbar
      <div className="navbar">
        <div className="titre">
          <div className="nom">Biblio'</div>
          <div className="rectangle"></div>
        </div>
  
        <div className="bonjour"> - Bonjour {props.name} -</div>
      </div>
    );
  }

export default Navbar;