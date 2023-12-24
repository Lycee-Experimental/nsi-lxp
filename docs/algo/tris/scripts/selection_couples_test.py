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

# Autres tests
eleves = [
    (4, "Targeur Samia"),
    (3, "Blennie Aymeric"),
    (5, "Alose Tom"),
    (2, "Targeur Samir"),
]
tri_eleves(eleves)
assert eleves == [
    (5, "Alose Tom"),
    (4, "Targeur Samia"),
    (3, "Blennie Aymeric"),
        (2, "Targeur Samir"),
]
