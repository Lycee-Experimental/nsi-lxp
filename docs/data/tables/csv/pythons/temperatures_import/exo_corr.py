# Import
temperatures = []
with open(file="temperatures_2020.csv", mode="r", encoding="utf-8") as fichier:
    fichier.readline()
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(",")
        temperatures.append(valeurs)

# Typage
for entree in temperatures:
    entree[1] = int(entree[1])
    entree[3] = float(entree[3])
    entree[4] = float(entree[4])
    entree[5] = float(entree[5])
