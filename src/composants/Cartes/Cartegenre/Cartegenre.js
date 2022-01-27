import './Cartegenre.css';
import React, { useState } from 'react';
import Modalgenre from '../Modalgenre/Modalgenre'

//--------------------------------------- Composant Carte Genre---------------------------------------------//

function Cartegenre(props) { //Fonction permettant d'afficher les cartes de genre
    const genre = props.genre; //On stock ici les différents genres
    const [modalGenre, setModalGenre] = useState(false); //On déclare la variable d'état d'affichage de la modale "Genre"
  
    const toggleModalGenre = () => {
      setModalGenre(!modalGenre);

      //ajouter la class 'modal-ouvert' au body pour bloquer la scrollbar et inversement
        const body = document.body;
        body.classList.toggle("modal-ouverte");

    };
  
    return (
      <div>
        <div className="carte genre">
          <div className="image-carte d-flex justify-content-center align-items-center ">
          <img src="https://img.icons8.com/ios-filled/100/000000/storytelling.png"/>
          </div>
          <div className="corps-carte">
            <div className="identite-livre">
              <div className="titre-carte">
                <h2>{genre.nomGenre}</h2>
              </div>
            </div>
            <div className="bouton-carte">
              <button
                className="btn btn-danger w-100 consulter"
                onClick={toggleModalGenre}
              >
                Consulter
              </button>
            </div>
          </div>
        </div>
        {modalGenre && (
          <Modalgenre genre={genre} toggleModal={toggleModalGenre} />
        )}
      </div>
    );
  }

  export default Cartegenre;