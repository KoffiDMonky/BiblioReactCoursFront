import './App.css';
import Navbar from './composants/Navbar/Navbar';
import Bibliotheque from './composants/Bibliotheque/Bibliotheque';

//--------------------------------------- Tableau d'Objets utilisateur---------------------------------------------//
const utilisateur = [
  {
    id: "0",
    nom: "Durant",
    prenom: "Pierre",
    livresID: ["0","1","2"]
  },
  {
    id: "1",
    nom: "Dupont",
    prenom: "Gérard",
    livresID: ["0","1","3","4"]
  },
  {
    id: "2",
    nom: "Mbappe",
    prenom: "Killian",
    livresID: ["0","1","5","8"]
  },
  {
    id: "3",
    nom: "Zidane",
    prenom: "Zinedine",
    livresID: ["0","1","3","4","6","7"]
  },
  {
    id: "4",
    nom: "Jarrouseau",
    prenom: "Marc",
    livresID: ["8","1","2","4"]
  },
  {
    id: "5",
    nom: "Le texier",
    prenom: "Yvick",
    livresID: ["0","1","3","4","6","7","8"]
  },
];

//--------------------------------------- Tableau d'Objets livre---------------------------------------------//
const livre = [
  {
    id: "0",
    titre: "Harry Potter",
    genre: "Fantastique",
    auteur: "JK Rowling",
    resume:"Harry Potter, un jeune orphelin, est élevé par son oncle et sa tante qui le détestent. Alors qu'il était haut comme trois pommes, ces derniers lui ont raconté que ses parents étaient morts dans un accident de voiture. Le jour de son onzième anniversaire, Harry reçoit la visite inattendue d'un homme gigantesque se nommant Rubeus Hagrid, et celui-ci lui révèle qu'il est en fait le fils de deux puissants magiciens et qu'il possède lui aussi d'extraordinaires pouvoirs."
  },
  {
    id: "1",
    titre: "Le Hobbit",
    genre: "Aventure",
    auteur: "JRR Tolkien",
    resume:"Dans ce livre est conté l’histoire de Bilbo Sacquet, Hobbit aventureux (à la différence du reste des Hobbits). Celui-ci reçut un jour la visite de Gandalf le magicien, accompagné de Thorin Oakenshield (chef très important parmi les nains) et de sa troupe constituée de 13 joyeux nains."
  },
  {
    id: "2",
    titre: "Les Fleurs du mal",
    genre: "Poesie",
    auteur: "Charles Baudelaire",
    resume:"Les Fleurs du mal sont un recueil poétique écrit par Charles Baudelaire et publié à Paris en 1857. L’édition définitive du recueil présente une division en six sections précédées d’un poème préliminaire intitulé « Au Lecteur ». Dans ce poème où il s’adresse à son « frère » le lecteur, Baudelaire décrit une humanité réunie face à « la sottise, l’erreur, le péché », prise dans les tourments imposés par Satan et partageant les mêmes maux nés de la misère et de l’Ennui, « ce monstre délicat »."
  },
  {
    id: "3",
    titre: "Candide",
    genre: ["Tragédie ","Satire"],
    auteur: "Voltaire",
    resume:"Candide est secrètement amoureux de Cunégonde, la fille du baron et de la baronne. ... À travers les yeux de Candide, le château protecteur renvoie à un âge d'or où l'abondance et l'équilibre apparents dispensent d'une réflexion plus aboutie que la philosophie de Pangloss, précepteur de la maison."
  },
  {
    id: "4",
    titre: "La Machine infernale",
    genre: "Pièce de théâtre",
    auteur: "Jean Cocteau",
    resume:"La Machine infernale (1934) est adaptation, très libre, de l'histoire d'Oedipe qui, selon l'oracle de Delphes, devait tuer son père et épouser sa mère.  En grandissant, Oedipe est mis au courant de la prophétie et décide de quitter Corinthe afin qu'elle ne s'exécute pas."
  },
  {
    id: "5",
    titre: "Œdipe roi",
    genre: "Tragédie",
    auteur: "Sophocle",
    resume:"Enfant abandonné des souverains thébains (Laïos et Jocaste), sauvé puis adopté par Polybe, roi de Corinthe, Œdipe est effrayé un jour par l'oracle de Delphes qui lui prédit un parricide et un inceste. Il renonce alors à retourner vers ceux qu'il croit être ses parents."
  }
  ,
  {
    id: "6",
    titre: "1984",
    genre: " Fiction dystopique",
    auteur: "George Orwell",
    resume:"George Orwell décrit une société totalitaire à l'extrême basée sur l'ignorance, une société où la violence et le mensonge prévalent, où ce que l'on croit est plus important que la vérité. Dans un tel contexte, il est impossible de connaître l'histoire ni même de savoir quelle est la réalité."
  }
  ,
  {
    id: "7",
    titre: "Moby Dick",
    genre: "Récit d'aventure",
    auteur: "Herman Melville",
    resume:" Attiré par la mer et le large, Ismaël (en), le narrateur, décide de partir à la chasse à la baleine. Il embarque sur le Pequod, baleinier commandé par le capitaine Achab, avec son nouvel ami Queequeg. Achab emmène son équipage dans un voyage autour du monde à la poursuite du cachalot dont il a juré de se venger."
  
  },
  {
    id: "8",
    titre: "Don Quichotte",
    genre: "Parodie",
    auteur: "Miguel de Cervantes",
    resume:"Ce roman retrace les voyages et les aventures de Don Quichotte et Sancho Panza. Don Quichotte est un Hidalgo (gentilhomme de la noblesse) obsédé par la chevalerie et Sancho Panza, un paysan obsédé par la nourriture, est son écuyer.  Sauf à la fin, où vaincu, il rentre chez lui, malgré les suppliques de Sancho Panza."
  }
];

//--------------------------------------- Tableau d'Objets auteur---------------------------------------------//
const auteur = [
  {
    id: "0",
    nomAuteur: "JK Rowling",
    oeuvres: ["Harry Potter à l'école des sorciers","Harry Potter et la Chambre des secrets","Harry Potter et le Prisonnier d'Azkaban","Harry Potter et la Coupe de feu"]
  },
  {
    id: "1",
    nomAuteur: "JRR Tolkien",
    oeuvres: ["Le Hobbit","Le Seigneur des Anneaux","Les Aventures de Tom Bombadil"]
  },
  {
    id: "2",
    nomAuteur: "Charles Baudelaire",
    oeuvres: ["Les Fleurs du mal","Le Spleen de Paris"]
  },
  {
    id: "3",
    nomAuteur: "Voltaire",
    oeuvres: ["Candide"]
  },
  {
    id: "4",
    nomAuteur: "Jean Cocteau",
    oeuvres: ["La Machine infernale","La Lampe d'Aladin"]
  },
  {
    id: "5",
    nomAuteur: "Sophocle",
    oeuvres: ["Œdipe roi","Antigone"]
  }
  ,
  {
    id: "6",
    nomAuteur: "George Orwell",
    oeuvres: ["1984","Une histoire birmane","Une fille de pasteur","Et vive l'Aspidistra !"]
  
  }
  ,
  {
    id: "7",
    nomAuteur: "Herman Melville",
    oeuvres: ["Moby Dick","Taïpi","Omoo"]
  
  },
  {
    id: "8",
    nomAuteur: "Miguel de Cervantes",
    oeuvres: ["Don Quichotte","Le Voyage au Parnasse","Les Travaux de Persille et Sigismonde"]
  }
];

//--------------------------------------- Tableau d'Objets genre---------------------------------------------//
const genre = [
  {
    id: "0",
    nomGenre: "Fantastique",
    livres:[]
  },
  {
    id: "1",
    nomGenre: "Aventure",
    livres:[]
  },
  {
    id: "2",
    nomGenre: "Poesie",
    livres:[]
  },
  {
    id: "3",
    nomGenre: "Tragédie",
    livres:[]
  },
  {
    id: "4",
    nomGenre: "Satire",
    livres:[]
  },
  {
    id: "5",
    nomGenre: "Pièce de théâtre",
    livres:[]
  }
  ,
  {
    id: "6",
    nomGenre: "Fiction dystopique",
    livres:[] 
  }
  ,
  {
    id: "7",
    nomGenre: "Récit d'aventure",
    livres:[]
  },
  {
    id: "8",
    nomGenre: "Parodie",
    livres:[]
  }
];


//--------------------------------------- Composant App---------------------------------------------//
function App() {
  return (
    <div className="App">
      <Navbar name="Admin"/>
      <Bibliotheque utilisateur={utilisateur} livre={livre} auteur={auteur} genre={genre} />
    </div>
  );
}

export default App;
