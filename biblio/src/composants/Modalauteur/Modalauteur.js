import './Modalauteur.css';

//--------------------------------------- Composant Modal Auteur---------------------------------------------//

function Modalauteur(props) {
    const auteur = props.auteur;
    const livre = auteur.livres;
    const toggleModal = props.toggleModal;
  
    return (
      <div className="overlay">
        <div className="fenetre-modal">
          <h1>{auteur.nomAuteur}</h1>
          {/* <AuteurLivre auteur={auteur} /> */}
          <h6>Oeuvres</h6>
  
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc
            sollicitudin, lobortis ligula eget, suscipit magna. Integer cursus at
            purus sit amet consectetur. Vivamus tristique sapien quis lectus
            faucibus, tincidunt porta quam tristique. Pellentesque imperdiet nisl
            blandit justo volutpat ornare.
          </p>
          <button className="close-modal btn btn-light" onClick={toggleModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }

  export default Modalauteur;