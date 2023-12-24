# Tests
tableau = [3, 1, 2]
tri_selection_decr(tableau)
assert tableau == [3, 2, 1], "Erreur avec [3, 1, 2]"

tableau = [1, 2, 3, 4]
tri_selection_decr(tableau)
assert tableau == [4, 3, 2, 1], "Erreur avec [1, 2, 3, 4]"

tableau = [-2, -5]
tri_selection_decr(tableau)
assert tableau == [-2, -5], "Erreur avec des valeurs négatives"

tableau = []
tri_selection_decr(tableau)
assert tableau == [], "Erreur avec un tableau vide"

# Autres tests
tableau_4 = [i for i in range(1, 101)]
tri_selection_decr(tableau_4)
assert tableau_4 == [i for i in range(100, 0, -1)]
