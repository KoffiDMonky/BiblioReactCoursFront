import React, { useState } from 'react';
import AccordeonAuteur from "../../Accordeons/AccordeonAuteur/AccordeonAuteur";
import Biblioauteur from "../../Biblioauteur/Biblioauteur";

//--------------------------------------- Composant Modal Livre---------------------------------------------//

function Modallivre(props) {//Fonction permettant d'afficher la fenêtre modale d'un livre

  let affichage;
  //On stock si dessous les propriétés des livres pour le afficher dynamiquement
  const livre = props.livre;
  const idLivre = livre.id;
  const auteur = livre.auteur;
  const genre = livre.genre;
  const resume = livre.resume;
  const toggleModalLivre = props.toggleModal;
  

  const [consulterBiblioAuteur, setConsulterBiblioAuteur] = useState(false);

  const toggleBibliographie = () => {
    setConsulterBiblioAuteur(!consulterBiblioAuteur);

    //ajouter la class 'modal-ouvert' au body pour bloque rla scroll barre et inversement
      const body = document.body;
      body.classList.toggle("modal-ouverte");

  };



  if (consulterBiblioAuteur) {
    //Si consulterBiblioAuteur: True, on affiche la bibliographie de l'auteur

    affichage = <Biblioauteur auteur={auteur} id={props.id} bibliographie={toggleBibliographie}/>
      
  } else {
    //Si consulterAuteurs: True, on affiche la liste d'auteur

    affichage = (
   
        <div className="fenetre-modal">
          <h1>{livre.titre}</h1>
          <AccordeonAuteur auteur={auteur} bibliographie={toggleBibliographie} id={idLivre} />
          <h6>Genre littéraire: {genre}</h6>
          <p>{resume}</p>
          <button
            className="close-modal btn btn-light"
            onClick={toggleModalLivre}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

    );
  }

  return (
    //Affichage du composant Modal Livre
    <div className="overlay">{affichage}</div>
  );
}

export default Modallivre;
