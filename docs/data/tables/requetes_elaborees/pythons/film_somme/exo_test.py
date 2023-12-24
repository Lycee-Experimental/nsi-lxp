# Tests publics
assert abs(somme(films, "Gross") - 33072.07) < 10**-6, "Erreur sur la somme de 'Gross'"

# Tests aléatoires
def somme_corr(donnees, descripteur):
    return sum([entree[descripteur] for entree in donnees])


for descripteur in ["Year", "Rating", "Votes", "Minutes", "Gross"]:
    attendu = somme_corr(films, descripteur)
    assert abs(somme(films, descripteur) - attendu) < 10**-3, f"Erreur sur la somme de '{descripteur}'"

entiers = [
    {1: 0, 2: 1, 3: 5},
    {1: 0, 2: 1, 3: 5},
]
assert somme(entiers, 1) == 0, "Erreur dans un test secret"
assert somme(entiers, 2) == 2, "Erreur dans un test secret"
assert somme(entiers, 3) == 10, "Erreur dans un test secret"
