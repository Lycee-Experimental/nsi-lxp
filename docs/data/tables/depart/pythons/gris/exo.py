liste_couleurs = [
    ["Noir", 0, 0, 0],
    ["Blanc", 255, 255, 255],
    ["Rouge", 255, 0, 0],
    ["Vert", 0, 255, 0],
    ["Bleu", 0, 0, 255],
    ["Jaune", 255, 255, 0],
    ["Cyan", 0, 255, 255],
    ["Magenta", 255, 0, 255],
    ["Argent", 192, 192, 192],
    ["Gris", 128, 128, 128],
    ["Bordeaux", 128, 0, 0],
    ["Olive", 128, 128, 0],
    ["Violet", 128, 0, 128],
    ["Marine", 0, 0, 128],
]

niveaux_gris = [0.299 * couleur[...] + 0.587 * ... + ... * ... for ... in liste_couleurs]
