from random import randint

# Tests
valeurs = [2, 3, 6, 7, 11, 14, 18, 19, 24]
assert recherche_dichotomique(valeurs, 14) == 5
assert recherche_dichotomique(valeurs, 2) == 0
assert recherche_dichotomique(valeurs, 24) == 8
assert recherche_dichotomique([1, 3, 6, 9, 10], 7) is None
assert recherche_dichotomique(valeurs, 2000) is None

# Autres tests
assert recherche_dichotomique([], 24) is None
liste_2 = [randint(1, 1000) for i in range(2000)]
assert recherche_dichotomique(liste_2, 1500) is None
liste_3 = [i for i in range(500)]
assert recherche_dichotomique(liste_3, 100) == 100



