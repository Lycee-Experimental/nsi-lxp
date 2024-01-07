# tests

assert indice_min([5]) == 0
assert indice_min([2, 4, 1, 1]) == 2
assert indice_min([5, 3, 2, 5, 2]) == 2


# autres tests

assert indice_min([7]) == 0
assert indice_min([8, 9]) == 0
assert indice_min([9, 8]) == 1
assert indice_min([8, 8]) == 0
assert indice_min([7, 8, 9]) == 0
assert indice_min([8, 7, 9]) == 1
assert indice_min([8, 9, 7]) == 2
assert indice_min([8, 9, 8]) == 0
assert indice_min([9, 8, 8]) == 1
assert indice_min([8, 8, 9]) == 0
assert indice_min([8, 8, 8]) == 0
