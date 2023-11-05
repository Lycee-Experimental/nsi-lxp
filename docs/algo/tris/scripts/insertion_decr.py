def tri_insertion_decr(tableau):
    ...

# Tests
tableau_0 = [3, 1, 2]
tri_insertion_decr(tableau_0)
assert tableau_0 == [3, 2, 1], "Erreur avec [3, 1, 2]"

tableau_1 = [1, 2, 3, 4]
tri_insertion_decr(tableau_1)
assert tableau_1 == [4, 3, 2, 1], "Erreur avec [1, 2, 3, 4]"

tableau_2 = [-2, -5]
tri_insertion_decr(tableau_2)
assert tableau_2 == [-2, -5], "Erreur avec des valeurs négatives"

tableau_3 = []
tri_insertion_decr(tableau_3)
assert tableau_3 == [], "Erreur avec un tableau vide"
