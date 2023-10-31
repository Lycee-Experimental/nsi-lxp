prenoms = []
with open(file="nat2021.csv", mode="r", encoding="utf-8") as fichier:
    fichier.readline()
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(";")
        valeurs[2] = int(valeurs[2])
        valeurs[3] = int(valeurs[3])
        prenoms.append(valeurs)
