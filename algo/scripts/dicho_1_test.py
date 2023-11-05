# Tests
assert dichotomie([1, 2, 3, 4], 2)
assert dichotomie([1, 2, 3, 4], 1)
assert dichotomie([1, 2, 3, 4], 4)
assert dichotomie([1, 2, 3, 4], 5) is False
assert dichotomie([1, 2, 3, 4], 0) is False
assert dichotomie([1, 2, 5, 6], 4) is False
assert dichotomie([1], 1)
assert dichotomie([1], 0) is False
assert dichotomie([], 1) is False


# Tests supplémentaires
nombres = list(range(0, 101, 2))
for cible in range(101):
    assert dichotomie(nombres, cible) == (cible % 2 == 0)

nombres = list(range(-100, 0, 2))
for cible in range(-100, 0):
    assert dichotomie(nombres, cible) == (cible % 2 == 0)

nombres = list(range(-12, 10, 3))
for cible in range(-12, 10):
    assert dichotomie(nombres, cible) == (cible % 3 == 0)
