# liste_1 est la liste des noms des couleurs
attendu = [c[0] for c in liste_couleurs]
assert liste_1 == attendu, "Erreur sur la liste 1"

# liste_2 est la liste des composantes vertes des couleurs
attendu = [c[3] for c in liste_couleurs]
assert liste_2 == attendu, "Erreur sur la liste 2"

# liste_3 est la liste des noms des couleurs dont la composante rouge est supérieure ou égale à 200
attendu = [c[0] for c in liste_couleurs if c[1] >= 200]
assert liste_3 == attendu, "Erreur sur la liste 3"

# liste_4 est la liste des noms des couleurs dont la composante rouge est strictement supérieure à la bleue
attendu = [c[0] for c in liste_couleurs if c[1] >= c[3]]
assert liste_4 == attendu, "Erreur sur la liste 4"

# liste_5 est la liste des noms des couleurs dont la composante bleue est plus grande que la verte et la rouge
attendu = [c[0] for c in liste_couleurs if c[3] >= c[2] and c[3] >= c[1]]
assert liste_5 == attendu, "Erreur sur la liste 5"

# liste_6 est la liste des triplets formés par les trois composantes de chaque couleur
attendu = [(c[1], c[2], c[3]) for c in liste_couleurs]
assert liste_6 == attendu, "Erreur sur la liste 6"
