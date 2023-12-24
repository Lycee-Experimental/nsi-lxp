import csv
attendu = []
with open("temperatures_2020.csv", "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=",")
    for ligne in lecteur:
        attendu.append(ligne)

assert temperatures == attendu, "Erreur d'import ou de typage"