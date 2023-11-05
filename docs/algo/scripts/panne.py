def indice_panne(log):
    ...


# Tests
assert indice_panne([True, False]) == 1
assert indice_panne([False, False, False]) == 0
assert indice_panne([True] * 10 + [False] * 100) == 10
assert indice_panne([True, True, False, False, False]) == 2
