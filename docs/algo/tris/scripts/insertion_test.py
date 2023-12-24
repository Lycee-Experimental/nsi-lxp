# Tests
tableau_0 = [3, 1, 2]
tri_insertion(tableau_0)
assert tableau_0 == [1, 2, 3], "Erreur avec [3, 1, 2]"

tableau_1 = [1, 2, 3, 4]
tri_insertion(tableau_1)
assert tableau_1 == [1, 2, 3, 4], "Erreur avec [1, 2, 3, 4]"

tableau_2 = [-2, -5]
tri_insertion(tableau_2)
assert tableau_2 == [-5, -2], "Erreur avec des valeurs négatives"

tableau_3 = []
tri_insertion(tableau_3)
assert tableau_3 == [], "Erreur avec un tableau vide"

# Autres tests
tableau_4 = [i for i in range(100, 0, -1)]
tri_insertion(tableau_4)
assert tableau_4 == [i for i in range(1, 101)]
