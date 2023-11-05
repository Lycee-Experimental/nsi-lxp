document$.subscribe(() => {
    quizdown.register(quizdownHighlight).init();
});

// Adaptation de Logic Simulator au thème
$(window).on('load', function() {
	var body = document.body;
    if (body.getAttribute('data-md-color-scheme') === 'slate') {
      Logic.setDarkMode(true);
    } else if (body.getAttribute('data-md-color-scheme') === 'default') {
      Logic.setDarkMode(false);
    }
    var darkInput = document.querySelector('input[data-md-color-media="(prefers-color-scheme: dark)"]');
    var lightInput = document.querySelector('input[data-md-color-media="(prefers-color-scheme: light)"]');
    darkInput.addEventListener('change', function() {
      Logic.setDarkMode(true);
    });
    lightInput.addEventListener('change', function() {
      Logic.setDarkMode(false);
    });
});


// Fonction de tri



const longueur_base = 30; // Longueur de base des éléments
const coeff_vertical = 0.2; // coeff mult. appliqué à longueur_base pour les dimensions verticales
const coeff_barre = 0.75; // coeff mult. appliqué à la longueur de base pour obenir la largeur d'une barre
const largeur_max_canvas = 500;
const hauteur_max_canvas = 230;
const decalage_texte = 10;
const taille_defaut = 15; // Taille du tableau par défaut
const delai = 750; // délai entre deux animations
let couleurTexte = "#555"; // couleur des étiquettes
const couleurLignes = "#555"; // couleur des contours des rectangles
const couleurZoneEtude = "rgba(200,200,200,0.8)"; // couleur de remplissage de la zone d'étude
let taille_tableau; // Taille du tableau
let tableau;
let canvas;
let enCours = true;
let x0, y0; // positions du coin inférieur gauche de la première barre
let ctx; // le contexte pour le dessin (affecté dans l'initialisation)
// Mélange du tableau avec Fisher-Yates
Array.prototype.shuffle = function () {
    let i = this.length;
    if (i == 0) return this;
    while (--i) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

// Normalisation de x de [min_entre, max_entree] vers [min_sortie, max_sortie]
function normalise(x, min_entree, max_entree, min_sortie, max_sortie) {
    return (x - min_entree) * (max_sortie - min_sortie) / (max_entree - min_entree) + min_sortie;
}

// Renvoie la couleur associée à x dans l'arc en ciel
function arcEnCiel(x) {
    const m = normalise(x, 0, taille_tableau, 0, 359);
    return 'hsl(' + m + ',100%,50%)';
}

// création d'un tableau croissant
function croissant(algo) {
    taille_tableau = taille_defaut;
    tableau = Array.from({ length: taille_tableau }, (_, i) => i);
    initialisation(algo, "[" + tableau.join() + "]");
}

// création d'un tableau décroissant
function decroissant(algo) {
    taille_tableau = taille_defaut;
    tableau = Array.from({ length: taille_tableau }, (_, i) => taille_tableau - 1 - i);
    initialisation(algo, "[" + tableau.join() + "]");
}

// (ré)Initialisation du graphe
function initialisation(algo, tab = null) {
    canvas = document.getElementById('canvas');
    if (tab) {
        tableau = JSON.parse(tab);
        taille_tableau = tableau.length;
    }
    else {
        taille_tableau = taille_defaut;
        tableau = Array.from({ length: taille_tableau }, (_, i) => i);
        tableau.shuffle();
    }

    canvas.width = Math.max(
        largeur_max_canvas,
        (taille_tableau + 2 * 2) * longueur_base
    );
    canvas.height = Math.max(
        hauteur_max_canvas,
        coeff_vertical * longueur_base * Math.max(...tableau)
    );
    ctx = canvas.getContext('2d');
    ctx.font = "20px Helvetica";
    ctx.textAlign = "center";
    x0 = (canvas.width - taille_tableau * longueur_base) / 2 + longueur_base
    y0 = canvas.height - longueur_base


    if (algo == "selection") {
        let iterateur = triSelection(tableau);
        setTimeout(() => {
            enCours = true;
            dessineSelection(iterateur);
        }, 1.25 * delai);
    } else if (algo == "insertion") {
        let iterateur = triInsertion(tableau);
        setTimeout(() => {
            enCours = true;
            dessineInsertion(iterateur);
        }, 1.25 * delai);
    } else if (algo == "bulle") {
        let iterateur = triBulle(tableau);
        setTimeout(() => {
            enCours = true;
            dessineBulle(iterateur);
        }, 1.25 * delai);
    } else if (algo == "fusion") {
        let iterateur = triFusion(tableau);
        setTimeout(() => {
            enCours = true;
            dessineFusion(iterateur);
        }, 1.25 * delai);
    } else if (algo == "rapide") {
        let iterateur = triRapide(tableau);
        setTimeout(() => {
            enCours = true;
            dessineRapide(iterateur);
        }, 1.25 * delai);
    }

    enCours = false;
}

// dessin de la figure
// a, b et c sont des indices à mettre en évidence
function dessineSelection(iterateur) {
    let resultat = iterateur.next().value;
    if ((typeof resultat == 'undefined') || (resultat === null)) {
        return null
    } else {
        let a = resultat[0];
        let b = resultat[1];
        let c = resultat[2];

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = couleurLignes;
        if (c != -1) {
            // Le rectangle de la zone étudiée
            ctx.fillStyle = couleurZoneEtude;
            ctx.fillRect(
                x0 + (c - (1 - coeff_barre) / 2) * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (taille_tableau - c),
                - 0.8 * canvas.height
            );
            ctx.lineWidth = 2;
            ctx.strokeRect(
                x0 + (c - (1 - coeff_barre) / 2) * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (taille_tableau - c),
                - 0.8 * canvas.height
            );
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < tableau.length; i++) {
            // la barre i
            ctx.fillStyle = arcEnCiel(tableau[i]);
            ctx.fillRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );
            ctx.strokeRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );

            // Les textes
            ctx.fillStyle = couleurTexte;
            // La valeur au-dessus de chaque barre
            ctx.fillText(
                tableau[i],
                x0 + (i + coeff_barre * 0.5) * longueur_base,
                y0 - coeff_vertical * longueur_base * tableau[i] - decalage_texte
            );
            if (i == a) {
                // le texte min
                ctx.fillText(
                    "min",
                    x0 + (i + coeff_barre * 0.5) * longueur_base,
                    y0 + 2.5 * decalage_texte
                );
            }
            if (i == b) {
                // le texte pointeur
                ctx.fillText(
                    "👇🏼",
                    x0 + (i + coeff_barre * 0.5) * longueur_base,
                    y0 - coeff_vertical * longueur_base * tableau[i] - 4 * decalage_texte
                );
            }
        }
        if (!enCours) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return null;
        } else {
            setTimeout(() => {
                dessineSelection(iterateur);
            }, delai);
        }
    }
}

function* triSelection(tableau) {
    for (let i = 0; i < tableau.length - 1; i++) {
        yield [i, -1, i];
        let i_mini = i;
        for (let j = i + 1; j < tableau.length; j++) {
            yield [i_mini, j, i];
            if (tableau[j] < tableau[i_mini]) {
                i_mini = j
                yield [i_mini, j, i];
            }
        }
        const temp = tableau[i];
        tableau[i] = tableau[i_mini];
        tableau[i_mini] = temp;
        yield [i, i_mini, i];
    }
    yield [-1, -1, -1];
}

function dessineInsertion(iterateur) {
    let resultat = iterateur.next().value;
    if ((typeof resultat == 'undefined') || (resultat === null)) {
        return null
    } else {

        let a = resultat[0];
        let b = resultat[1];
        let c = resultat[2];
        let d = resultat[3];

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = couleurLignes;
        // Le rectangle de la zone étudiée
        if (c != -1) {
            ctx.fillStyle = couleurZoneEtude;
            ctx.fillRect(
                x0 - (1 - coeff_barre) / 2 * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (c + 1),
                - 0.8 * canvas.height
            );
            ctx.lineWidth = 2;
            ctx.strokeRect(
                x0 - (1 - coeff_barre) / 2 * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (c + 1),
                - 0.8 * canvas.height
            );
        }
        // La valeur stockée en attente d'insertion
        if (d != -1) {
            ctx.fillStyle = arcEnCiel(d);
            ctx.fillRect(
                longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * d - 5
            );
            ctx.strokeRect(
                longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * d - 5
            );
            ctx.fillStyle = couleurTexte;
            ctx.fillText(
                d,
                (1 + 0.5 * coeff_barre) * longueur_base,
                y0 - coeff_vertical * longueur_base * d - decalage_texte
            )
        }

        ctx.lineWidth = 1;
        for (let i = 0; i < tableau.length; i++) {
            // la barre i
            ctx.fillStyle = arcEnCiel(tableau[i]);
            ctx.fillRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );
            ctx.strokeRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );

            // Les textes
            ctx.fillStyle = couleurTexte;
            // La valeur au-dessus de chaque barre
            ctx.fillText(
                tableau[i],
                x0 + (i + coeff_barre * 0.5) * longueur_base,
                y0 - coeff_vertical * longueur_base * tableau[i] - decalage_texte
            );
            if (i == a) {
                // le texte min
                ctx.fillText(
                    "❓",
                    x0 + (i + coeff_barre * 0.5) * longueur_base,
                    y0 - coeff_vertical * longueur_base * tableau[i] - 4 * decalage_texte
                );
            }
            if (i == b) {
                // le texte pointeur
                ctx.fillText(
                    "👇🏼",
                    x0 + (i + coeff_barre * 0.5) * longueur_base,
                    y0 - coeff_vertical * longueur_base * tableau[i] - 4 * decalage_texte
                );
            }
        }

        if (!enCours) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return null;
        } else {
            setTimeout(() => {
                dessineInsertion(iterateur);
            }, delai);
        }
    }
}

function* triInsertion(tableau) {
    for (let i = 1; i < tableau.length; i++) {
        yield [-1, i, i, -1];
        let valeur = tableau[i]
        yield [-1, i, i, valeur];
        let j = i;
        yield [j - 1, j, i, valeur];
        while ((j > 0) && (tableau[j - 1] > valeur)) {
            tableau[j] = tableau[j - 1];
            yield [-1, j - 1, i, valeur];
            j--;
            yield [j - 1, j, i, valeur];
        }
        tableau[j] = valeur
        yield [-1, j, i, -1];
    }
    yield [-1, -1, -1, -1];
}

function dessineBulle(iterateur) {
    let resultat = iterateur.next().value;
    if ((typeof resultat == 'undefined') || (resultat === null)) {
        return null
    } else {

        let a = resultat[0];
        let b = resultat[1];
        let c = resultat[2];

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = couleurLignes;
        if (c != -1) {
            // Le rectangle de la zone étudiée
            ctx.fillStyle = couleurZoneEtude;
            ctx.fillRect(
                x0 - (1 - coeff_barre) / 2 * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (c + 1),
                - 0.8 * canvas.height
            );
            ctx.lineWidth = 2;
            ctx.strokeRect(
                x0 - (1 - coeff_barre) / 2 * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (c + 1),
                - 0.8 * canvas.height
            );
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < tableau.length; i++) {
            // la barre i
            ctx.fillStyle = arcEnCiel(tableau[i]);
            ctx.fillRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );
            ctx.strokeRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );

            // Les textes
            ctx.fillStyle = couleurTexte;
            // La valeur au-dessus de chaque barre
            ctx.fillText(
                tableau[i],
                x0 + (i + coeff_barre * 0.5) * longueur_base,
                y0 - coeff_vertical * longueur_base * tableau[i] - decalage_texte
            );
            if (i == a) {
                // le texte min
                ctx.fillText(
                    "❓",
                    x0 + (i + coeff_barre * 0.5) * longueur_base,
                    y0 - coeff_vertical * longueur_base * tableau[i] - 4 * decalage_texte
                );
            }
            if (i == b) {
                // le texte pointeur
                ctx.fillText(
                    "👇🏼",
                    x0 + (i + coeff_barre * 0.5) * longueur_base,
                    y0 - coeff_vertical * longueur_base * tableau[i] - 4 * decalage_texte
                );
            }
        }
        if (!enCours) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return null;
        } else {
            setTimeout(() => {
                dessineInsertion(iterateur);
            }, delai);
        }
    }
}

function* triBulle(tableau) {
    echange = true;
    for (let i = tableau.length - 1; i > 0; i--) {
        // yield [-1, -1, i];
        echange = false;
        for (let j = 0; j < i; j++) {
            yield [j + 1, j, i];
            if (tableau[j] > tableau[j + 1]) {
                const temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
                yield [-1, j + 1, i];
                echange = true
            }
        }
        if (!echange) {
            return [-1, -1, -1]
        }
    }
}

function dessineFusion(iterateur) {
    let resultat = iterateur.next().value;
    if ((typeof resultat == 'undefined') || (resultat === null)) {
        return null
    } else {

        let a = resultat[0];
        let b = resultat[1];
        let c = resultat[2];

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = couleurLignes;
        if (a != -1) {
            // Le rectangle de la zone étudiée
            ctx.fillStyle = couleurZoneEtude;
            ctx.fillRect(
                x0 - (1 - coeff_barre) / 2 * longueur_base + a * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (b - a),
                - 0.8 * canvas.height
            );
            ctx.lineWidth = 2;
            ctx.strokeRect(
                x0 - (1 - coeff_barre) / 2 * longueur_base + a * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (b - a),
                - 0.8 * canvas.height
            );
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < tableau.length; i++) {
            // la barre i
            ctx.fillStyle = arcEnCiel(tableau[i]);
            ctx.fillRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );
            ctx.strokeRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );

            // Les textes
            ctx.fillStyle = couleurTexte;
            // La valeur au-dessus de chaque barre
            ctx.fillText(
                tableau[i],
                x0 + (i + coeff_barre * 0.5) * longueur_base,
                y0 - coeff_vertical * longueur_base * tableau[i] - decalage_texte
            );
        }
        if (!enCours) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return null;
        } else {
            setTimeout(() => {
                dessineFusion(iterateur);
            }, delai);
        }
    }
}

function* triFusion(tableau, debut = 0, fin = null) {
    if (fin === null) {
        fin = tableau.length;
    }

    if (fin - debut <= 1) {
        if (fin - debut == 1) {
            yield [debut, fin, -1]
        } else {
            return [-1, -1, -1]
        }
    } else {
        yield [debut, fin, -1];
        let milieu = (fin + debut) >> 1

        let iterateur_gauche = triFusion(tableau, debut, milieu);
        let iterateur_droit = triFusion(tableau, milieu, fin);

        // retours récursifs à gauche
        let recursion = true;
        let resultat;
        while (recursion) {
            resultat = iterateur_gauche.next();
            if (!resultat.done) {
                yield resultat.value;
            } else {
                recursion = false;
            }
        }

        // retours récursifs à droite
        recursion = true
        while (recursion) {
            resultat = iterateur_droit.next();
            if (!resultat.done) {
                yield resultat.value;
            } else {
                recursion = false;
            }
        }

        yield [debut, fin, -1];

        // Fusion
        const gauche = tableau.slice(debut, milieu)
        const droite = tableau.slice(milieu, fin)
        console.log("gauche", gauche)
        console.log("droite", droite)
        let i_gauche = 0;
        let i_droite = 0;
        let i_tableau = debut;
        let changement = false;
        while ((i_gauche < gauche.length) && (i_droite < droite.length)) {
            console.log("G/D", gauche[i_gauche], droite[i_droite]);
            if (gauche[i_gauche] <= droite[i_droite]) {
                tableau[i_tableau] = gauche[i_gauche];
                i_gauche++;
            } else {
                tableau[i_tableau] = droite[i_droite];
                i_droite++;
                changement = true;
            }
            i_tableau++;
        }
        while (i_gauche < gauche.length) {
            tableau[i_tableau] = gauche[i_gauche];
            i_gauche++;
            i_tableau++;
        }
        while (i_droite < droite.length) {
            tableau[i_tableau] = droite[i_droite];
            i_droite++;
            i_tableau++;
        }

        if (changement) {
            yield [debut, fin, -1]
        }
        return [-1, -1, -1]
    }
}

function dessineRapide(iterateur) {
    let resultat = iterateur.next().value;
    if ((typeof resultat == 'undefined') || (resultat === null)) {
        return null
    } else {
        ctx.font = "18px Helvetica";
        let a = resultat[0];
        let b = resultat[1];
        let c = resultat[2];
        let d = resultat[3];
        let e = resultat[4];

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = couleurLignes;
        if (a != -1) {
            // Le rectangle de la zone étudiée
            ctx.fillStyle = couleurZoneEtude;
            ctx.fillRect(
                x0 - (1 - coeff_barre) / 2 * longueur_base + a * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (b - a),
                - 0.8 * canvas.height
            );
            ctx.lineWidth = 2;
            ctx.strokeRect(
                x0 - (1 - coeff_barre) / 2 * longueur_base + a * longueur_base,
                y0 + (1 - coeff_barre) / 2 * longueur_base,
                longueur_base * (b - a),
                - 0.8 * canvas.height
            );
        }

        // La valeur du pivot
        if (d != -1) {
            ctx.fillStyle = arcEnCiel(d);
            ctx.fillRect(
                longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * d - 5
            );
            ctx.strokeRect(
                longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * d - 5
            );
            ctx.fillStyle = couleurTexte;
            ctx.fillText(
                d,
                (1 + 0.5 * coeff_barre) * longueur_base,
                y0 - coeff_vertical * longueur_base * d - decalage_texte
            );
            ctx.fillText(
                "pivot",
                (1 + 0.5 * coeff_barre) * longueur_base,
                y0 + 2.5 * decalage_texte
            );
        }
        // Les barres
        ctx.lineWidth = 1;
        for (let i = 0; i < tableau.length; i++) {
            // la barre i
            ctx.fillStyle = arcEnCiel(tableau[i]);
            ctx.fillRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );
            ctx.strokeRect(
                x0 + i * longueur_base,
                y0,
                coeff_barre * longueur_base,
                - coeff_vertical * longueur_base * tableau[i] - 5
            );

            // Les textes
            ctx.fillStyle = couleurTexte;
            // La valeur au-dessus de chaque barre
            ctx.fillText(
                tableau[i],
                x0 + (i + coeff_barre * 0.5) * longueur_base,
                y0 - coeff_vertical * longueur_base * tableau[i] - decalage_texte
            );
            if (i == e) {
                // le texte pivot
                ctx.fillText(
                    "curseur",
                    x0 + (i + coeff_barre * 0.5) * longueur_base,
                    y0 + 2.5 * decalage_texte
                );
            }
            if (i == c) {
                // le texte pointeur
                ctx.fillText(
                    "i",
                    x0 + (i + coeff_barre * 0.5) * longueur_base,
                    y0 - coeff_vertical * longueur_base * tableau[i] - 4 * decalage_texte
                );
            }
        }
        if (!enCours) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return null;
        } else {
            setTimeout(() => {
                dessineRapide(iterateur);
            }, 1.75 * delai);
        }
    }
}

function* triRapide(tableau, debut = 0, fin = null) {
    if (fin === null) {
        fin = tableau.length;
    }

    if (fin - debut <= 1) {
        if (fin - debut == 1) {
            yield [debut, fin, -1, -1, -1]
        } else {
            return [-1, -1, -1, -1, -1]
        }
    } else {
        let pivot = tableau[fin - 1];
        let frontiere = debut;

        yield [debut, fin, -1, pivot, frontiere];

        for (let i = debut; i < fin - 1; i++) {
            yield [debut, fin, i, pivot, frontiere];
            if (tableau[i] <= pivot) {
                const temp = tableau[frontiere];
                tableau[frontiere] = tableau[i];
                tableau[i] = temp;
                frontiere++;
                yield [debut, fin, i, pivot, frontiere];
            }
        }

        const temp = tableau[frontiere];
        tableau[frontiere] = pivot;
        tableau[fin - 1] = temp;

        yield [debut, fin, -1, pivot, frontiere];

        let iterateur_gauche = triRapide(tableau, debut, frontiere);
        let iterateur_droit = triRapide(tableau, frontiere + 1, fin);

        // retours récursifs à gauche
        let recursion = true;
        let resultat;
        while (recursion) {
            resultat = iterateur_gauche.next();
            if (!resultat.done) {
                yield resultat.value;
            } else {
                recursion = false;
            }
        }

        // // retours récursifs à droite
        recursion = true
        while (recursion) {
            resultat = iterateur_droit.next();
            if (!resultat.done) {
                yield resultat.value;
            } else {
                recursion = false;
            }
        }

        return [-1, -1, -1, -1, -1]
    }
}
