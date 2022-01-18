import './Modalsupprimerutilisateur.css';

//--------------------------------------- Composant Modal Supprimer Utilisateur---------------------------------------------//

function Modalsupprimerutilisateur(props) { //La fonction permet d'afficher la modale de suppression d'un utilisateur
    const utilisateur = props.utilisateur; //Propriétés de l'objet utilisateur
    const toggleModalSupprimer = props.toggleModal; //Propriétés de la fonction toggleModalSupprimer qui permet d'afficher ou non la fênetre modale de suppression de l'utilisateur
  
    return (
      //Affichage de la fenêtre modale de suppression de l'utilisateur
      <div className="overlay">
        <div className="fenetre-modal">
          <p>
            Êtes-vous sur de vouloir supprimer le compte de <br />{" "}
            {utilisateur.nom} {utilisateur.prenom} ?
          </p>
          <div>
            <button
              className="btn btn-danger"
              // onClick={toggleModalSupprimer}
            >
              Supprimer
            </button>
            <button className="btn btn-light" onClick={toggleModalSupprimer}>
              Annuler
            </button>
          </div>
        </div>
      </div>
    );
  }


export default Modalsupprimerutilisateur