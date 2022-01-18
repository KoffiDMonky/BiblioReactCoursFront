import "./Modalauteur.css";

//--------------------------------------- Composant Modal Auteur---------------------------------------------//

function Modalauteur(props) {
  const auteur = props.auteur;
  const oeuvres = auteur.oeuvres;
  const toggleModal = props.toggleModal;

  const listeOeuvres = oeuvres.map((oeuvre, k) => ( //On itère dans le tableau d'objet Auteur pour les afficher dans des cartes
    <li key={k} id={k} className="list-group-item">{oeuvre}</li>));
 
  return (
    <div className="overlay">
      <div className="fenetre-modal">
        <h1>{auteur.nomAuteur}</h1>
        <h5>Oeuvres:</h5>
        <ul className="list-group list-group-flush">
          {listeOeuvres}
        </ul>

        <button className="close-modal btn btn-light" onClick={toggleModal}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}

export default Modalauteur;
