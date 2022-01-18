import './Carteutilisateur.css'
import React, { useState } from 'react';
import Modalediterutilisateur from '../Modalediterutilisateur/Modalediterutilisateur';
import Modalsupprimerutilisateur from '../Modalsupprimerutilisateur/Modalsupprimerutilisateur';

//--------------------------------------- Composant Carte utilisateur---------------------------------------------//

function Carteutilisateur(props) { //Fonction permettant de créer une carte et ses modales
    const utilisateur = props.utilisateur; //On stock ici les différents utilisateurs
    const voir = props.voir; // On stock ici la fonction voir et l'id de l'utilisateur visé
    const [modalEditer, setModalEditer] = useState(false); //On déclare la variable d'état d'affichage de la modale "Editer"
    const [modalSupprimer, setModalSupprimer] = useState(false); //On déclare la variable d'état d'affichage de la modale "Supprimer"
  
    const toggleModalEditer = () => { //La fonction permet de changer l'état de la modale "Editer" quand on l'appel
      setModalEditer(!modalEditer);
      
        //ajouter la class 'modal-ouvert' au body pour bloque rla scroll barre et inversement
        const body = document.body;
        body.classList.toggle("modal-ouverte");

    };
  
    const toggleModalSupprimer = () => { //La fonction permet de changer l'état de la modale "Supprimer" quand on l'appel
      setModalSupprimer(!modalSupprimer);

        const body = document.body;
        body.classList.toggle("modal-ouverte");

    };
  
    if (modalEditer) { //Si modalEditer est à true, on affiche la modale d'édition de l'utilisateur
      return (
        <Modalediterutilisateur
          utilisateur={utilisateur}
          toggleModal={toggleModalEditer}
        />
      );
    } else if (modalSupprimer) { //Si modalSupprimer est à true, on affiche la modale de suppression de l'utilisateur
      return (
        <Modalsupprimerutilisateur
          utilisateur={utilisateur}
          toggleModal={toggleModalSupprimer}
        />
      );
    } else { //Sinon on affiche la carte utilisateur
      return (
        //Affichage de la carte utilisateur
        <div className="carte">
          <div className="image-carte">
            <img src="assets/images/user.jfif" alt=""></img>
          </div>
          <div className="corps-carte">
            <div className="identite-personne">
              <div className="nom-carte">
                <h4>{utilisateur.nom}</h4>
              </div>
              <div className="prenom-carte">{utilisateur.prenom}</div>
            </div>
            <div className="bouton-carte d-flex flex-row flex-wrap align-items-center justify-content-center">
              <button
                className="btn btn-info w-100 consulter"
                onClick={voir}
                id={utilisateur.id}
              >
                Bibliothèque
              </button>
  
              <button
                className="btn btn-warning w-40 editer"
                onClick={toggleModalEditer}
              >
                Editer
              </button>
              <button
                className="btn btn-danger w-40 supprimer"
                onClick={toggleModalSupprimer}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

export default Carteutilisateur