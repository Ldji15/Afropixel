const  images = [
	{
		"id": 1,
		"nom": "Femme noire",
		"prix": 25000,
		"categorie": "art",
		"url": "images/blackness.jpg"
	},
	{
		"id": 2,
		"nom": "Girls in Tech",
		"prix": 18000,
		"categorie": "technologie",
		"url": "images/deux.jpg"
	},
	{
		"id": 3,
		"nom": "Femme musulmane",
		"prix": 27500,
		"categorie": "religion",
		"url": "images/muslima.jpg"
	},
	{
		"id": 4,
		"nom": "Jigeen ci Tech",
		"prix": 20000,
		"categorie": "technologie",
		"url": "images/trois.jpg"
	},
	{
		"id": 5,
		"nom": "Les gadgets high tech",
		"prix": 19500,
		"categorie": "technologie",
		"url": "images/un.jpeg"
	},
	{
		"id": 6,
		"nom": "Centre de controle",
		"prix": 12500,
		"categorie": "papier peint",
		"url": "images/wallpaper-1.jfif"
	},
	{
		"id": 17,
		"nom": "Dark Army",
		"prix": 17000,
		"categorie": "papier peint",
		"url": "images/wallpaper-2.jpeg"
	},
	{
		"id": 20,
		"nom": "Champions d'Afrique",
		"prix": 22000,
		"categorie": "papier peint",
		"url": "images/wallpaper-3.jpg"
	},
	{
		"id": 21,
		"nom": "Bureau Mac OS",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-4.png"
	},
	{
		"id": 22,
		"nom": "Bureau Mac OS bleu",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-5.jpg"
	},
	{
		"id": 23,
		"nom": "Logo Ubuntu",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-6.jpg"
	},
	{
		"id": 24,
		"nom": "Cyber Task Force",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-7.jpg"
	},
	{
		"id": 25,
		"nom": "Regard profond",
		"prix": 17500,
		"categorie": "papier peint",
		"url": "images/wallpaper-8.jpg"
	},
	{
		"id": 26,
		"nom": "Administrateur",
		"prix": 12000,
		"categorie": "papier peint",
		"url": "images/wallpaper-9.jpg"
	},
	{
		"id": 7,
		"nom": "Cybercriminalité",
		"prix": 12001,
		"categorie": "papier peint",
		"url": "images/wallpaper-10.jfif"
	},
	{
		"id": 8,
		"nom": "Ldji",
		"prix": 90000000,
		"categorie": "papier peint",
		"url": "images/ndao_Elhadji.jpeg"
	}
];


let currentImage = '';

// quantité choisie pour chaque image : { id: quantité }
const quantites = {};

for (const image of images) {
    quantites[image.id] = 0;   // au départ, rien n'est choisi

    currentImage += `
        <div class="carte">
			<img src="${image.url}" alt="${image.nom}" onclick="ouvrirPopup(${image.id})">
			<p>${image.nom}</p>
			<p>${image.prix} CFA</p>
			<button onclick="modifQuantite(${image.id}, 'ajouter')">+</button>
			<span class="qte-${image.id}">0</span>
			<button onclick="modifQuantite(${image.id}, 'retirer')">-</button>
        </div>
    `;
}
photo.innerHTML += currentImage;

