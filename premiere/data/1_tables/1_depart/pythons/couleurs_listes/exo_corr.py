# liste_1 est la liste des noms des couleurs
liste_1 = [c[0] for c in liste_couleurs]

# liste_2 est la liste des composantes vertes des couleurs
liste_2 = [c[3] for c in liste_couleurs]

# liste_3 est la liste des noms des couleurs dont la composante rouge est supérieure ou égale à 200
liste_3 = [c[0] for c in liste_couleurs if c[1] >= 200]

# liste_4 est la liste des noms des couleurs dont la composante rouge est strictement supérieure à la bleue
liste_4 = [c[0] for c in liste_couleurs if c[1] >= c[3]]

# liste_5 est la liste des noms des couleurs dont la composante bleue est plus grande que la verte et la rouge
liste_5 = [c[0] for c in liste_couleurs if c[3] >= c[2] and c[3] >= c[1]]

# liste_6 est la liste des triplets formés par les trois composantes de chaque couleur
liste_6 = [(c[1], c[2], c[3]) for c in liste_couleurs]
