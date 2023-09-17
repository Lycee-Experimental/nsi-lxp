# Tests publics
assert projection(films, "Ranking")[4] == 5, "Erreur sur la projection de 'Ranking'"
assert projection(films, "Name")[4] == "Pulp Fiction", "Erreur sur la projection de 'Name'"
assert projection(films, "Year")[4] == 1994, "Erreur sur la projection de 'Year'"

# Tests aléatoires
def projection_corr(donnees, descripteur):
    return [entree[descripteur] for entree in donnees]


for descripteur in films[0]:
    attendu = projection_corr(films, descripteur)
    assert projection(films, descripteur) == attendu, f"Erreur sur la projection de '{descripteur}'"

neveux = [
    {1: "riri", 2: "fifi", 3: "loulou"},
    {1: "rara", 2: "fafa", 3: "laulau"},
]
assert projection(neveux, 1) == ["riri", "rara"], "Erreur dans un test secret"
assert projection(neveux, 2) == ["fifi", "fafa"], "Erreur dans un test secret"
