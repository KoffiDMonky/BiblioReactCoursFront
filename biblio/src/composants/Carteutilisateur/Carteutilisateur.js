import './Carteutilisateur.css'


//--------------------------------------- Composant Carte utilisateur---------------------------------------------//

function Carteutilisateur(props) { //Fonction permettant de créer une carte et ses modales
    const utilisateur = props.utilisateur; //On stock ici les différents utilisateurs
    const voir = props.voir; // On stock ici la fonction voir et l'id de l'utilisateur visé
    
        return (
        //Affichage de la carte utilisateur
        <div className="carte utilisateur">
          <div className="image-carte">
          <img src="https://img.icons8.com/ios/90/000000/gender-neutral-user.png"/>
          </div>
          <div className="corps-carte">
            <div className="identite-personne">
              <div className="nom-carte">
                <h4>{utilisateur.nom}</h4>
              </div>
              <div className="prenom-carte">{utilisateur.prenom}</div>
            </div>
            <div className="bouton-carte d-flex flex-row flex-wrap align-items-center justify-content-center">
              <button
                className="btn btn-info w-100 consulter"
                onClick={voir}
                id={utilisateur.id}
              >
                Bibliothèque
              </button>
  
              {/* <button
                className="btn btn-warning w-40 editer"
                onClick={toggleModalEditer}
              >
                Editer
              </button>
              <button
                className="btn btn-danger w-40 supprimer"
                onClick={toggleModalSupprimer}
              >
                Supprimer
              </button> */}
            </div>
          </div>
        </div>
      );
    }


export default Carteutilisateur