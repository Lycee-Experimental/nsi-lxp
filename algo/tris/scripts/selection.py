def echange(tableau, i, j):
    tableau[i], tableau[j] = tableau[j], tableau[i]


def indice_minimum_depuis(tableau, i):
    i_mini = i
    for j in range(i + 1, len(tableau)):
        if tableau[j] < tableau[i_mini]:
            i_mini = j
    return i_mini


def tri_selection(tableau):
    ...

# Tests
tableau_0 = [3, 1, 2]
tri_selection(tableau_0)
assert tableau_0 == [1, 2, 3], "Erreur avec [3, 1, 2]"

tableau_1 = [1, 2, 3, 4]
tri_selection(tableau_1)
assert tableau_1 == [1, 2, 3, 4], "Erreur avec [1, 2, 3, 4]"

tableau_2 = [-2, -5]
tri_selection(tableau_2)
assert tableau_2 == [-5, -2], "Erreur avec des valeurs négatives"

tableau_4 = []
tri_selection(tableau_4)
assert tableau_4 == [], "Erreur avec un tableau vide"

print("Bravo !")

