import Carteauteur from './../../Cartes/Carteauteur/Carteauteur';

//--------------------------------------- Composant Liste d'auteurs---------------------------------------------//

function Listeauteurs(props) { //Fonction permettant d'afficher la liste des auteurs
    const auteurs = props.auteur; //On stock tous les objets auteur
    const listeAuteur = auteurs.map((auteur, k) => ( //On itère dans le tableau d'objet Auteur pour les afficher dans des cartes
      <div key={k} id={k}>
        <Carteauteur auteur={auteur}></Carteauteur>
      </div>
    ));
  
    return (
      //Affichage du composant Liste auteurs
      <div className="container-carte">
        <div className="titre-conteneur">
          <h1>
            Liste des auteurs
          </h1>
        </div>
        <div className="collection-carte">{listeAuteur}</div>
      </div>
    );
  }

  export default Listeauteurs;