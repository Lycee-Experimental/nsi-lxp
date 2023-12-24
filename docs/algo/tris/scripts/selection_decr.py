def tri_selection_decr(tableau):
    ...

# tests
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

print("Bravo !")
