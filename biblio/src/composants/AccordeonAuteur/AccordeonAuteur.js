import './AccordeonAuteur.css';
import React, { useState, useRef, useEffect } from 'react';

//--------------------------------------- Composant Auteur du livre (Accordéon dans la fiche livre)---------------------------------------------//

function AccordeonAuteur(props) { //Fonction permettant d'afficher le composant "accordéon" Auteur du livre contenu dans la modale d'un livre

    //On stock si dessous les propriétés des auteurs pour le afficher dynamiquement et les variable d'état permettant d'ouvrir/fermer le composant accordéon

    const auteurLivre = props.auteur;
    const nomAuteur = auteurLivre[0].nomAuteur;
    const bio = auteurLivre[0].bio;
    const affichageBibliographie = props.bibliographie;
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
  
    const toggleState = () => { //toggleState permet de changer la valeur de toggle
      setToggle(!toggle);
    };
  
    const refHeight = useRef(); //useRef renvoie un objet ref modifiable
  
    useEffect(() => { // Permet de mettre à jour la taille de la div qui contient la description de l'auteur
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    return (
      //Affichage du composant Auteur du livre
      <div onClick={toggleState} className="auteur">
        <div className="nom-auteur">
          <h3>
            {nomAuteur} 
          </h3>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div
          ref={refHeight}
          className={
            toggle
              ? "toggle-description-auteur animated"
              : "toggle-description-auteur"
          }
          style={{ height: toggle ? `${heightEl}` : "0px" }}
        >
          <p>
            {bio}
          </p>
          <div className="boutons-auteur">
            <button className=" btn btn-light" onClick={affichageBibliographie} >Bibliographie</button>
          </div>
          
          
        </div>
      </div>
    );
  }

export default AccordeonAuteur;