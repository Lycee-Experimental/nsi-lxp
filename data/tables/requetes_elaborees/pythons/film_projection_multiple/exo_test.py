# Tests
assert projection_multiple(films, ("Name", "Year", "Rating"))[0] == ("Citizen Kane", 1941, 8.3), "Erreur"


# Tests supplémentaires
from random import sample, randrange


def projection_multiple_corr(donnees, descripteurs):
    return [tuple(entree[d] for d in descripteurs) for entree in donnees]


cles = list(films[0].keys())
for _ in range(5):
    descripteurs = sample(cles, randrange(1, len(cles)))
    attendu = projection_multiple_corr(films, descripteurs)
    assert projection_multiple(films, descripteurs) == attendu, f"Erreur sur la projection de '{descripteurs}'"
