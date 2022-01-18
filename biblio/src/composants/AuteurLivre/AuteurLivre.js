import './AuteurLivre.css';
import React, { useState, useRef, useEffect } from 'react';

//--------------------------------------- Composant Auteur du livre---------------------------------------------//

function AuteurLivre(props) { //Fonction permettant d'afficher le composant "accordéon" Auteur du livre contenu dans la modale d'un livre

    //On stock si dessous les propriétés des auteurs pour le afficher dynamiquement et les variable d'état permettant d'ouvrir/fermer le composant accordéon
    const auteurLivre = props.auteur;
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
            {auteurLivre} {/* Auteur: {auteur.prenom} {auteur.prenom} */}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc
            sollicitudin, lobortis ligula eget, suscipit magna.
          </p>
          <div className="boutons-auteur">
            <button className=" btn btn-light" >Bibliographie</button>
          </div>
          
          
        </div>
      </div>
    );
  }

export default AuteurLivre;