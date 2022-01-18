import './Modallivre.css';
import AuteurLivre from '../AuteurLivre/AuteurLivre';


//--------------------------------------- Composant Modal Livre---------------------------------------------//

function Modallivre(props) { //Fonction permettant d'afficher la fenêtre modale d'un livre
    //On stock si dessous les propriétés des livres pour le afficher dynamiquement
    const livre = props.livre;
    const auteur = livre.auteur;
    const genre = livre.genre;
    const resume = livre.resume;
    const toggleModalLivre = props.toggleModal;
  
    return (
      //Affichage du composant Modal Livre
      <div className="overlay">
        <div className="fenetre-modal">
          <h1>{livre.titre}</h1>
          <AuteurLivre auteur={auteur} />
          <h6>Genre littéraire: {genre}</h6>
  
          <p>
            {resume}
          </p>
          <button className="close-modal btn btn-light" onClick={toggleModalLivre}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }

  export default Modallivre