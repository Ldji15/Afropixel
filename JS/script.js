import { pictures } from "./pictures.js";
import { ListeProduit } from "./ListeProduit.js";
import { gererPanier, afficherResume, fermerResume } from "./panier.js";

const liste_produits = new ListeProduit(pictures);

const photo = document.getElementById('photo');

// On affiche la grille dans #photo
photo.innerHTML = liste_produits.rendre();

// Un seul écouteur de clic pour toute la page
document.addEventListener('click', function (e) {
    // Clic sur + ou - : on modifie le panier
    const bouton = e.target.closest('button[data-action]');
    if (bouton) {
        // dataset.id est du texte : Number() le transforme en nombre
        gererPanier(liste_produits, Number(bouton.dataset.id), bouton.dataset.action);
        return;
    }

    // Clic sur la croix de la carte du panier : on la ferme
    if (e.target.closest('#fermer-panier')) {
        fermerResume();
        return;
    }

    // Clic sur l'icône du panier : on affiche la carte du panier
    if (e.target.closest('#zone-panier')) {
        afficherResume(liste_produits);
    }
});