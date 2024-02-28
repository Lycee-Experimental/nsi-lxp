# --- HDR ---#
url_fichier = "films.csv"
encodage = "utf-8"

from js import fetch

reponse = await fetch(f"{url_fichier}")
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
def somme(donnees, descripteur):
    """Renvoie la somme des valeurs de ce descripteur"""
    return sum([entree[descripteur] for entree in donnees])


def moyenne(donnees, descripteur):
    """Renvoie la moyenne des valeurs de ce descripteur"""
    return somme(donnees, descripteur) / len(donnees)


# Compléter le code
...
moyenne_valide = ...

print(moyenne_valide)