from random import randint

# Tests
valeurs = [2, 3, 6, 7, 11, 14, 18, 19, 24]
assert appartient_dichotomique(valeurs, 14)
assert appartient_dichotomique(valeurs, 2)
assert appartient_dichotomique(valeurs, 24)
assert appartient_dichotomique([1, 3, 6, 9, 10], 7) is False
assert appartient_dichotomique(valeurs, 2000) is False

# Autres tests
assert appartient_dichotomique([], 24) is False
liste_2 = [randint(1, 1000) for i in range(2000)]
assert appartient_dichotomique(liste_2, 1500) is False
liste_3 = [i for i in range(500)]
assert appartient_dichotomique(liste_3, 100)



