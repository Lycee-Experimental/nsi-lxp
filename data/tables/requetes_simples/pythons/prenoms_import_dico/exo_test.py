# Tests
import csv
attendu = []
with open(file="nat2021.csv", mode="r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=";")
    for entree in lecteur:
        entree["annee"] = int(entree["annee"])
        entree["nombre"] = int(entree["nombre"])
        attendu.append(entree)

assert prenoms == attendu, "Erreur d'import et/ou de typage"