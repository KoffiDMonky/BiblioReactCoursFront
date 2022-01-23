import './Carteauteur.css';
import React, { useState } from 'react';
import Modalauteur from '../Modalauteur/Modalauteur'

//--------------------------------------- Composant Carte Auteur---------------------------------------------//

function Carteauteur(props) { //Fonction permettant d'afficher les cartes d'auteur
  const auteur = props.auteur;
  const [modalAuteur, setModalAuteur] = useState(false);

  const toggleModalAuteur = () => {
    setModalAuteur(!modalAuteur);

    //ajouter la class 'modal-ouvert' au body pour bloque rla scroll barre et inversement
    const body = document.body;
    body.classList.toggle("modal-ouverte");

  };

  return (
    <>
      <div className="carte auteur">
      <div className="image-carte">
      <img src="https://img.icons8.com/ios/100/000000/mark-twain.png"/>
      <img src="https://img.icons8.com/ios/100/000000/pretty-woman.png"/>
          </div>
        <div className="corps-carte">
          <div className="identite-livre d-flex flex-column justify-content-center align-items-center">
            <div className="titre-carte d-flex flex-column justify-content-center align-items-center">
              <h2>{auteur.nomAuteur}</h2>
            </div>
          </div>
          <div className="bouton-carte d-flex flex-row flex-wrap align-items-center justify-content-center">
            <button
              className="btn btn-warning w-100 consulter"
              onClick={toggleModalAuteur}
            >
              Consulter Bibliographie
            </button>
          </div>
        </div>
      </div>
      {modalAuteur && (
        <Modalauteur auteur={auteur} toggleModal={toggleModalAuteur} />
      )}
    </>
  );
}

  export default Carteauteur;