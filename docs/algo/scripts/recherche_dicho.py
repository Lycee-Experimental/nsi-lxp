def recherche_dichotomique(ma_liste, valeur) :
    ...



# Tests
valeurs = [2, 3, 6, 7, 11, 14, 18, 19, 24]
assert recherche_dichotomique(valeurs, 14) == 5
assert recherche_dichotomique(valeurs, 2) == 0
assert recherche_dichotomique(valeurs, 24) == 8
assert recherche_dichotomique([1, 3, 6, 9, 10], 7) is None
assert recherche_dichotomique(valeurs, 2000) is None







