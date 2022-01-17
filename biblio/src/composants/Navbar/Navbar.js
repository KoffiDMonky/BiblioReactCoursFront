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
  
        {/* <div className="search-container">
          <input
            type="text"
            name="search"
            placeholder="Titre, genre ou auteur..."
            className="search-input"
          />
          <a href="#" className="search-btn">
            <i className="fas fa-search"></i>
          </a>
        </div> */}
      </div>
    );
  }

export default Navbar;