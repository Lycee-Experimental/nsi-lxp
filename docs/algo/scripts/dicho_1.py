def dichotomie(nombres, cible):
    debut = ...
    fin = ...
    while debut <= fin:
        milieu = ...
        if cible == ...:
            return ...
        elif cible > ...:
            ...
        else:
            ...
    return ...


# Tests
assert dichotomie([1, 2, 3, 4], 2)
assert dichotomie([1, 2, 3, 4], 1)
assert dichotomie([1, 2, 3, 4], 4)
assert not dichotomie([1, 2, 3, 4], 5)
assert not dichotomie([1, 2, 3, 4], 0)
assert not dichotomie([1, 2, 5, 6], 4)
assert dichotomie([1], 1)
assert not dichotomie([1], 0)
assert not dichotomie([], 1)
