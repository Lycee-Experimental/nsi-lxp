def indice(tableau, cible):
    ...




# Tests
tableau = [23, 28, 29, 35, 37]
assert indice(tableau, 23) == 0, "Erreur dans la recherche de 23"
assert indice(tableau, 29) == 2, "Erreur dans la recherche de 29"
assert indice(tableau, 37) == 4, "Erreur dans la recherche de 37"
assert indice(tableau, 10) is None, "Erreur dans la recherche de 10"
assert indice(tableau, 100) is None, "Erreur dans la recherche de 100"
