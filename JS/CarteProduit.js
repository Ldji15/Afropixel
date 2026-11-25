/* 
   CLASSE 1 : CarteProduit
   Représente UN produit : ses infos + la quantité choisie.*/

export class CarteProduit {
    constructor(id, nom, prix, categorie, url) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.categorie = categorie;
        this.url = url;
        this.quantite = 0; // au départ, rien n'est choisi
    }

    // Fabrique le HTML de la carte (ne l'affiche pas, renvoie juste du texte)
    // data-id     : à quel produit appartient le clic
    // data-action : ce que fait le bouton (ajouter ou retirer)
    // data-qte    : repère le chiffre à mettre à jour
    rendre() {
        return `
            <div class="shape_carte_produit">
                <img class="image_produit" src="${this.url}" alt="${this.nom}" data-id="${this.id}">
                <div>${this.nom}</div>
                <div>${this.prix} CFA</div>
                <div class="div_actions">
                    <button data-id="${this.id}" data-action="ajouter">+</button>
                    <span data-qte="${this.id}">${this.quantite}</span>
                    <button data-id="${this.id}" data-action="retirer">-</button>
                </div>
            </div>
        `;
    }
}