import csv
attendu = []
with open("temperatures_2020.csv", "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=",")
    for ligne in lecteur:
        attendu.append(ligne)

# Typage
for entree in attendu:
    entree["jour"] = int(entree["jour"])
    entree["tmin"] = float(entree["tmin"])
    entree["tmax"] = float(entree["tmax"])
    entree["tmoy"] = float(entree["tmoy"])

assert temperatures == attendu, "Erreur d'import ou de typage"