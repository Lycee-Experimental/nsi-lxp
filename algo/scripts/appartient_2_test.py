# Tests
assert appartient_2(12, [3, 5, 6, 12, 33, 56, 99])
assert appartient_2(22, [3, 5, 6, 12, 33, 56, 99]) == False

# Autres tests
assert appartient_2(12, []) == False
liste_1 = [i for i in range(10, 100)]
assert appartient_2(50, liste_1)
assert appartient_2(9, liste_1) == False





