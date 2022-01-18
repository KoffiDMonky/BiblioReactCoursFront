import './Utilisateurs.css';
import Carteutilisateur from '../Carteutilisateur/Carteutilisateur';

//--------------------------------------- Composant Utilisateur---------------------------------------------//

function Utilisateurs(props) { //La fonction utilisateurs permet d'afficher la liste des utilisateurs
    const utilisateurs = props.utilisateur; //On déclare la variable utilisateurs pour récupérer les propriétés utilisateur
    const voir = props.voir; //On déclare la variable voir pour récupérer la fonction voirUtilisateur
  
    //On itère dans le tableau d'objets Utilisateur pour afficher chaque utilisateur dans une carte
    const listeUtilisateur = utilisateurs.map((utilisateur, k) => (
      <div key={k} id={k}>
        <Carteutilisateur
          utilisateur={utilisateur}
          voir={voir}
        ></Carteutilisateur>
      </div>
    ));
  
    return ( //Affichage de la liste des utilisateurs
      <div className="container-carte">
        <div className="titre-conteneur">
          <h1>Liste des utilisateurs</h1>
        </div>
        <div className="collection-carte">
          {listeUtilisateur}
        </div>
      </div>
    );
  }



export default Utilisateurs;