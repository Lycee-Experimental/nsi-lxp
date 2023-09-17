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
import csv
with open("temperatures_2020.csv", "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=",")
    temperatures = [entree for entree in lecteur]

# Typage
for entree in temperatures:
    entree["jour"] = int(entree["jour"])
    entree["tmin"] = float(entree[...])
    entree[...] = ...(...[...])
    ...