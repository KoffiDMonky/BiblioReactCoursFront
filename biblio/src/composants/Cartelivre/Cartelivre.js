import './Cartelivre.css';
import React, { useState } from 'react';
import Modallivre from '../Modallivre/Modallivre';

//--------------------------------------- Composant Carte Livre---------------------------------------------//

function Cartelivre(props) { //Fonction permettant de créer une carte livre et sa modale
    const livre = props.livre; //On stock ici les différents livres
    const idLivre = livre.id;

    const [modalLivre, setModalLivre] = useState(false); //On déclare la variable d'état d'affichage de la modale "Livre"
  
    const toggleModalLivre = () => { //La fonction permet de changer l'état de la modale "Livre" quand on l'appel pour l'afficher ou pas
      setModalLivre(!modalLivre);

      //ajouter la class 'modal-ouvert' au body pour bloque rla scroll barre et inversement
      const body = document.body;
      body.classList.toggle("modal-ouverte");

    };
  
    return (
      //Affichage du composant carte livre
      <div>
        <div className="carte livre">
          <div className="image-carte">
            <img
              className="mh-100"
              src="assets/images/icon_livre.jpg"
              alt=""
            ></img>
          </div>
          <div className="corps-carte">
            <div className="identite-livre">
              <div className="titre-carte">
                <h5>{livre.titre}</h5>
              </div>
              <div className="genre-carte">
                Genre: {livre.genre}
              </div>
              <div className="auteur-carte">
                Auteur: {livre.auteur.nomAuteur}
              </div>
            </div>
            <div className="bouton-carte">
              <button
                className="btn btn-info w-100 "
                onClick={toggleModalLivre}
              >
                Consulter
              </button>
  
              <button className="btn btn-warning w-40 ">Editer</button>
              <button
                className="btn btn-danger w-40 "
                // onClick={handleClickSupprimer}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
        {modalLivre && (
          <Modallivre livre={livre} toggleModal={toggleModalLivre} />
        )}
      </div>
    );
  }

  export default Cartelivre