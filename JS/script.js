// On importe le tableau "pictures" depuis le fichier pictures.js et ListeProduit.....

import { pictures } from "./pictures.js";
import { ListeProduit } from "./ListeProduit.js";

const liste_produits = new ListeProduit(pictures);

const photo = document.getElementById('photo');

// On affiche la grille dans #photo
photo.innerHTML = liste_produits.rendre();


