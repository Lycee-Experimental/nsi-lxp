#Tests
attendus = [0.299 * couleur["rouge"] + 0.587 * couleur["vert"] + 0.114 * couleur["bleu"] for couleur in dico_couleurs]

assert all(abs(g - a) < 10**-6 for g, a in zip(niveaux_gris, attendus))