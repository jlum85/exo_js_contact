/*   Activité : gestion des contacts  */

// objet de base qui stocke les informations du contact
// attention : syntaxe ES6 non supportée sur IE 11 >> Tester sur Firefox, Chrome , Edge
class Contact {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }
  // méthode decrire pour afficher les infos du contact
  decrire() {
    console.log (`Nom : ${this.nom}, prénom : ${this.prenom} `);
  }
}

// objet qui gère la liste des contacts 
class contactManager {
  constructor() {
    // Initialisation du tableau qui sert à stocker les contacts
    this.listContacts = [];

    // on déclare les options à traiter
    this.listOptions =["1 : Lister les contacts", "2 : Ajouter un contact", "0 : Quitter"];  
  }
  
  ajouter(nom, prenom, noLog) {
    // contrôle complémentaire : on ajoute un contact uniquement si le nom et le prénom ne sont pas vides
    if ( nom != "" && prenom != "") {
      // Création d'un nouveau contact 
      const newContact = new Contact(nom, prenom);  
      // Ajout du contact dans la liste
      this.listContacts.push (newContact);  
      if ( !noLog ) { 
        console.log ("Le nouveau contact a été ajouté.");        
      }
    }
  }

  lister() {
    console.log ("Voici la liste de tous vos contacts :");  
    // on parcoure le tableau et pour chaque contact on fait appel à la méthode decrire pour afficher ses infos
    this.listContacts.forEach(contact => { 
      contact.decrire();
    });
  }    

  afficheListeOptions() {
    // on affiche la liste des options qui sont déclarées dans le tableau listLibOption
    for (let i=0; i < this.listOptions.length; i++){
      console.log (this.listOptions[i]);
    }
  } ;   
}

function choixOption() {
  let option = prompt("Choisissez une option : ");
  if (option === null) {
    option = "0" ;  // annuler (null)  est considéré comme quitter 
  }
  return option ; 
}

function startContactManager() {
  // création d'une instance de l'objet contactManager
  const contacts = new contactManager (); 

  // affichage du message de bienvenue et de la liste des options
  console.log ("Bienvenue dans le gestionnaire des contacts !");
  contacts.afficheListeOptions();

  // ajout de valeurs exemples sans confirmation dans la console
  contacts.ajouter ("Lévisse" , "Carole", true); 
  contacts.ajouter ("Nelsonne" , "Mélodie", true ); 

  // on demande à l'utilisateur de choisir une des options
  let choix = choixOption();

  // remarque : si on reçoit une valeur qui n'est pas une option valide, on continue à demander 
  while (choix != "0" ) {
    // choix 1 : lister les contacts
    if (choix === "1" ) {    
      contacts.lister() ;
    } 
    // choix 2 : Ajouter un contact
    else if (choix === "2" ) { 
      let nom = prompt("Entrez le nom du nouveau contact : "); 
      let prenom = prompt("Entrez le prénom du nouveau contact : "); 
      contacts.ajouter (nom , prenom);  
    }   

    console.log(" ");
    contacts.afficheListeOptions();
    choix = choixOption();
  }

  // message quand on quitte
  console.log (" ");
  console.log ("Au revoir !");
} ;

startContactManager() ; 
