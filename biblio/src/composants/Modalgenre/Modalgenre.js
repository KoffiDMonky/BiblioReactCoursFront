import './Modalgenre.css';

//--------------------------------------- Composant Modal Genre---------------------------------------------//

function Modalgenre(props) {
    const genre = props.genre;
    const livre = genre.livres;
    const toggleModal = props.toggleModal;
  
    return (
      <div className="overlay">
        <div className="fenetre-modal">
          <h1>{genre.nomGenre}</h1>
          {/* <GenreLivre genre={genre} /> */}
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

export default Modalgenre