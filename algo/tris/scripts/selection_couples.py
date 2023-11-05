def indice_minimum_depuis(tableau, i):
    ...


def tri_eleves(tableau):
    ...


eleves = [
    (4, "Targeur Samia"),
    (5, "Blennie Aymeric"),
    (5, "Alose Tom"),
    (6, "Targeur Samir"),
]
tri_eleves(eleves)

# Tests
assert eleves == [
    (6, "Targeur Samir"),
    (5, "Alose Tom"),
    (5, "Blennie Aymeric"),
    (4, "Targeur Samia"),
]


