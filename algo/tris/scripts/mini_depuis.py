def indice_minimum_depuis(tableau, i):
    i_mini = i
    ...

# Tests
assert indice_minimum_depuis([3, 8, 1, 5, 4], 0) == 2, "Erreur en partant de l'indice 0"
assert indice_minimum_depuis([3, 8, 1, 5, 4], 1) == 2, "Erreur en partant de l'indice 1"
assert indice_minimum_depuis([3, 8, 1, 5, 4], 2) == 2, "Erreur en partant de l'indice 2"
assert indice_minimum_depuis([3, 8, 1, 5, 4], 4) == 4, "Erreur en partant de l'indice 4"
print("Bravo !")
