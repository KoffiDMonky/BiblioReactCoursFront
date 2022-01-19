import './Modalgenre.css';

//--------------------------------------- Composant Modal Genre---------------------------------------------//

function Modalgenre(props) {
    const genre = props.genre;
    const livres = genre.livres;
    const toggleModal = props.toggleModal;

    const listeLivres = livres.map((livre, k) => ( //On itère dans le tableau d'objet Auteur pour les afficher dans des cartes
    <li key={k} id={k} className="list-group-item">{livre}</li>));
  
    return (
      <div className="overlay">
        <div className="fenetre-modal">
          <h1>{genre.nomGenre}</h1>
          <h6>Livres du genre:</h6>
  
          <ul className="list-group list-group-flush">
          {listeLivres}
        </ul>
          <button className="close-modal btn btn-light" onClick={toggleModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }

export default Modalgenre