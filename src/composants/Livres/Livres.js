import './Livres.css';
import Cartelivre from '../Cartelivre/Cartelivre';


//--------------------------------------- Composant Livres (d'un utilisateur)---------------------------------------------//

function Livres(props) { //La fonction Livres permet d'afficher la liste des livres d'un utilisateur
    const utilisateur = props.utilisateur;//On déclare la variable utilisateur pour récupérer les propriétés d'utilisateur
    const stockLivre = props.stock;//On déclare la variable stockLivre pour récupérer toute la collection de livre disponible dans la bibliothèque
    const biblio = props.biblio;//On déclare la variable biblio pour récupérer le tableau contenant les livres (sous forme d'ID) détenu par un utilisateur 

    const collecLivre = [] //On déclare un tableau de collection de livre vide
    for (var index = 0; biblio[index]; index++) { //On itère dans la biblio de l'utilisateur afin de récupérer les données des livres correspondant dans la const stockLivre
      collecLivre.push(stockLivre[biblio[index]])
    }
    
    //On itère dans le tableau d'objets livre pour afficher chaque livre dans une carte
    const collectionLivre = collecLivre.map((livre, k) => (
      <div key={k} id={k}>
        <Cartelivre livre={livre}></Cartelivre>
      </div>
    ));
  
    return (
      //Affichage du composant livre d'un utilisateur
      <div className="container-carte">
        <div className="titre-conteneur">
          <h1>
            Collection de {utilisateur.nom} {utilisateur.prenom}
          </h1>
        </div>
        <div className="collection-carte">{collectionLivre}</div>
      </div>
    );
  }

export default Livres;