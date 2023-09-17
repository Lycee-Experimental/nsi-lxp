# Tests publics
assert abs(moyenne(films, "Gross") - 63.97) < 10**-3, "Erreur sur la moyenne de 'Gross'"

# Tests aléatoires
def moyenne_corr(donnees, descripteur):
    return sum([entree[descripteur] for entree in donnees]) / len(donnees)


for descripteur in ["Year", "Rating", "Votes", "Minutes", "Gross"]:
    attendu = moyenne_corr(films, descripteur)
    assert abs(moyenne(films, descripteur) - attendu) < 10**-2, f"Erreur sur la moyenne de '{descripteur}'"

entiers = [
    {1: 0, 2: 1, 3: 5},
    {1: 0, 2: 1, 3: 5},
]
assert moyenne(entiers, 1) == 0, "Erreur dans un test secret"
assert moyenne(entiers, 2) == 1, "Erreur dans un test secret"
assert moyenne(entiers, 3) == 5, "Erreur dans un test secret"
