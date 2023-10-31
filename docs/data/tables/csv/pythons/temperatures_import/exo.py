#--- HDR ---#
url_fichier = "temperatures_2020.csv"
encodage = "utf-8"

from js import fetch

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)
#--- HDR ---#
# Import
temperatures = []
with open(file="temperatures_2020.csv", mode=..., encoding="utf-8") as fichier:
    fichier.readline()
    for ligne in ...:
        ligne_propre = ligne....
        valeurs = ligne_propre.split(...)
        temperatures.append(...)

# Typage
for entree in temperatures:
    entree[1] = int(entree[1])
    entree[3] = float(entree[...])
    entree[...] = ...(...[...])
    ...