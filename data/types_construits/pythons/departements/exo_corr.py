# liste_1 contient tous les noms des départements
liste_1 = [nom for nom in departements]

# liste_2 contient toutes les surfaces des départements
liste_2 = [departements[nom] for nom in departements]

# liste_3 contient les noms des départements 
# strictement mesurant moins de 1000 km²
liste_3 = [nom for nom in departements if departements[nom] < 1000]

# liste_4 contient les surfaces des départements
# dont le nom contient la chaîne "Seine"
liste_4 = [departements[nom] for nom in departements if "Seine" in nom]

# liste_5 contient les noms des départements
# dont le nom débute par un "S"
# et la surface est comprise entre 5 000 et 7 000 km²
liste_5 = [departements[nom] for nom in departements if nom[0] == "S" and 5000 <= departements[nom] <= 7000]