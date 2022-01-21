import './Cartegenre.css';
import React, { useState } from 'react';
import Modalgenre from '../Modalgenre/Modalgenre'

//--------------------------------------- Composant Carte Genre---------------------------------------------//

function Cartegenre(props) {
    const genre = props.genre;
    const [modalGenre, setModalGenre] = useState(false);
  
    const toggleModalGenre = () => {
      setModalGenre(!modalGenre);

      //ajouter la class 'modal-ouvert' au body pour bloque rla scroll barre et inversement
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
            <div className="identite-livre d-flex flex-column justify-content-center align-items-center">
              <div className="titre-carte d-flex flex-column justify-content-center align-items-center">
                <h2>{genre.nomGenre}</h2>
              </div>
            </div>
            <div className="bouton-carte d-flex flex-row flex-wrap align-items-center justify-content-center">
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