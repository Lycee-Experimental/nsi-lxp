# Tests
# liste_1 contient tous les noms des départements
attendu = [nom for nom in departements]
assert liste_1 == attendu, "Erreur sur la liste 1"

# liste_2 contient toutes les surfaces des départements
attendu = [departements[nom] for nom in departements]
assert liste_2 == attendu, "Erreur sur la liste 2"

# liste_3 contient les noms des départements
# strictement mesurant moins de 1000 km²
attendu = [nom for nom in departements if departements[nom] < 1000]
assert liste_3 == attendu, "Erreur sur la liste 3"

# liste_4 contient les surfaces des départements
# dont le nom contient la chaîne "Seine"
attendu = [departements[nom] for nom in departements if "Seine" in nom]
assert liste_4 == attendu, "Erreur sur la liste 4"

# liste_5 contient les noms des départements
# dont le nom débute par un "S"
# et la surface est comprise entre 5 000 et 7 000 km²
attendu = [departements[nom] for nom in departements if nom[0] == "S" and 5000 <= departements[nom] <= 7000]
assert liste_5 == attendu, "Erreur sur la liste 5"
