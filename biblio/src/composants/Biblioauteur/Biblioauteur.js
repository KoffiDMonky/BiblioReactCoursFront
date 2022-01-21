function Biblioauteur(props) {

    //On stock si dessous les propriétés de l'auter et ses oeuvres pour le afficher dynamiquement et la fonction permettant de toggle la bibliographie
    const toggleBiblio = props.bibliographie;
    const auteur = props.auteur[0];
    const oeuvres = auteur.oeuvres;

    const listeOeuvres = oeuvres.map((oeuvre, k) => ( //On itère dans le tableau d'objet Auteur pour les afficher dans des cartes
    <li key={k} id={k} className="list-group-item">{oeuvre}</li>));

  return (
      <div className="fenetre-modal">
          <h3>Bibliographie de {auteur.nomAuteur}</h3>
        <ul className="list-group list-group-flush">
          {listeOeuvres}
        </ul>
        <button
            className="close-modal btn btn-light"
            onClick={toggleBiblio}
          >
            <i className="fas fa-angle-double-left"></i>
          </button>
      </div>
  );
}

export default Biblioauteur;
