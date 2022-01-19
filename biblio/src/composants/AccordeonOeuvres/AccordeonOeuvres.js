import './AccordeonOeuvres.css';
import React, { useState, useRef, useEffect } from 'react';

//--------------------------------------- Composant Oeuvres d'un auteur (Accordéon dans la modale de l'auteur)---------------------------------------------//

function AccordeonOeuvres(props) { //Fonction permettant d'afficher le composant "accordéon" Oeuvres de l'auteur contenu dans la modale d'un auteur

    //On stock si dessous les propriétés des oeuvres pour le afficher dynamiquement et les variable d'état permettant d'ouvrir/fermer le composant accordéon
    const oeuvres = props.oeuvres;
    const affichageBibliographie = props.bibliographie;
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
  
    const toggleState = () => { //toggleState permet de changer la valeur de toggle
      setToggle(!toggle);
    };
  
    const refHeight = useRef(); //useRef renvoie un objet ref modifiable
  
    useEffect(() => { // Permet de mettre à jour la taille de la div qui contient les oeuvres
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const listeOeuvres = oeuvres.map((oeuvre, k) => ( //On itère dans le tableau d'objet Oeuvres pour les afficher à la volée dans une liste
    <li key={k} id={k} className="list-group-item">{oeuvre}</li>));

    const AffichageOeuvres = <ul className="list-group list-group-flush">
                {listeOeuvres}
              </ul>
  
    return (
      //Affichage du composant Oeuvres de l'auteur
      <div onClick={toggleState} className="oeuvre">
        <div className="nom-oeuvre">
          <h3>
          Oeuvres
          </h3>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div
          ref={refHeight}
          className={
            toggle
              ? "toggle-description-oeuvre animated"
              : "toggle-description-oeuvre"
          }
          style={{ height: toggle ? `${heightEl}` : "0px" }}
        >
            {AffichageOeuvres}                 
        </div>
      </div>
    );
  }

export default AccordeonOeuvres;