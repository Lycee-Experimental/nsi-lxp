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
with open(file="temperatures_2020.csv", mode="r", encoding="utf-8") as fichier:
    ...  # récupération des descripteurs
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(",")
        dico = {}
        for i in range(len(descripteurs)):
            dico[descripteurs[...]] = ...[i]
        temperatures.append(...)
