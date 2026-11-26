/* 
   MODULE : panier
   "liste" = l'objet ListeProduit, que script.js nous passe
 */

// Appelée quand on clique sur + ou -
export function gererPanier(liste, id, action) {
    const carte = liste.trouver(id);

    if (action === 'ajouter') {
        carte.ajouter();
    } else if (action === 'retirer') {
        carte.retirer();
    }

    // Met à jour le petit chiffre entre les boutons de cette carte
    const chiffre = document.querySelector(`[data-qte="${id}"]`);
    chiffre.textContent = carte.quantite;

    majPanier(liste);
    afficherResume(liste);
}

// Met à jour le petit zéro (badge) et le total sous le panier
export function majPanier(liste) {
    document.getElementById('nb-articles').textContent = liste.nombreArticles();
    //document.getElementById('total').textContent = 'Total : ' + liste.montantTotal() + ' CFA';
}

// Remplit la carte du panier (en haut à gauche) et l'affiche
export function afficherResume(liste) {
    const resume = document.getElementById('resume-panier');
    const articles = liste.articlesChoisis();

    let lignes = '';
    for (const carte of articles) {
        lignes += `
            <tr>
                <td>${carte.nom}</td>
                <td>${carte.quantite}</td>
                <td>${carte.prix} CFA</td>
                <td>${carte.quantite * carte.prix} F CFA</td>
            </tr>
        `;
    }

    // Si rien n'est choisi, une seule ligne qui occupe les 4 colonnes
    if (articles.length === 0) {
        lignes = '<tr><td colspan="4">Panier vide</td></tr>';
    }

    resume.innerHTML = `
        <button id="fermer-panier">×</button>
        <h3>Mon panier</h3>
        <table>
            <tr>
                <th>Article</th>
                <th>Qté</th>
                <th>Prix unit.</th>
                <th>Total</th>
            </tr>
            ${lignes}
        </table>
        <p class="resume_total">Total : ${liste.montantTotal()} F CFA</p>
        <button id="commander">Commander</button>
    `;
    resume.hidden = false;
}

// Cache la carte du panier
export function fermerResume() {
    document.getElementById('resume-panier').hidden = true;
}