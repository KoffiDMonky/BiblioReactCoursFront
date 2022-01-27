import Cartegenre from '../Cartegenre/Cartegenre';


//--------------------------------------- Composant Liste de genre---------------------------------------------//

function Listegenres(props) {
  const genres = props.genre;
  const listeGenre = genres.map((genre, k) => (
    <div key={k} id={k}>
      <Cartegenre genre={genre}></Cartegenre>
    </div>
  ));

  return (
    <div className="container-carte">
      <div className="titre-conteneur">
        <h1>
          Liste des genres
        </h1>
      </div>
      <div className="collection-carte">{listeGenre}</div>
    </div>
  );
}

  export default Listegenres;