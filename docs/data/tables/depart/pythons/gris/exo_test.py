#Tests
attendus = [0.299 * couleur[1] + 0.587 * couleur[2] + 0.114 * couleur[3] for couleur in liste_couleurs]

assert all(abs(g - a) < 10**-6 for g, a in zip(niveaux_gris, attendus))