import './Stocklivres.css';
import Cartelivre from '../Cartelivre/Cartelivre';

//--------------------------------------- Composant Stocklivres---------------------------------------------//

function Stocklivres(props) { //Fonction permettant d'afficher la totalité des livres en stock dans la bibliothèque
  const livres = props.livre; //On stock tous les objets livre
  const collectionLivre = livres.map((livre, k) => ( //On itère dans cette collection d'objet livre pour les afficher dans des cartes
    <div key={k} id={k}>
      <Cartelivre livre={livre}></Cartelivre>
    </div>
  ));

  return (
    //Affichage du composant Stock de livre distinct
    <div className="container-carte">
      <div className="titre-conteneur">
        <h1>
          Liste de livres disponible dans la biblio'
        </h1>
      </div>
      <div className="collection-carte">{collectionLivre}</div>
    </div>
  );
}



export default Stocklivres;