temperatures = []
with open(file="temperatures_2020.csv", mode="r", encoding="utf-8") as fichier:
    ligne = fichier.readline()
    ligne_propre = ligne.strip()
    descripteurs = ligne_propre.split(",")
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(",")
        dico = {}
        for i in range(len(descripteurs)):
            dico[descripteurs[i]] = valeurs[i]
        temperatures.append(dico)
