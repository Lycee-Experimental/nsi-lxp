# --- HDR ---#
url_fichier = "films.csv"
encodage = "utf-8"

from js import fetch

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)

import csv

films = []
with open("films.csv", "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=";")
    for entree in lecteur:
        entree["Ranking"] = int(entree["Ranking"])
        entree["Year"] = int(entree["Year"])
        entree["Minutes"] = int(entree["Minutes"])
        entree["Rating"] = float(entree["Rating"])
        entree["Votes"] = int(entree["Votes"])
        entree["Gross"] = float(entree["Gross"])
        films.append(entree)

# --- HDR ---#
def projection(donnees, descripteur):
    """Renvoie la liste des valeurs de ce descripteur"""
    return [entree[descripteur] for entree in donnees]

dico_genres = {}
meilleur_genre = None
maxi = 0

# Compléter le code

print(meilleur_genre)
print(maxi)
print([entree["Name"] for entree in films if meilleur_genre in entree["Genres"]])
