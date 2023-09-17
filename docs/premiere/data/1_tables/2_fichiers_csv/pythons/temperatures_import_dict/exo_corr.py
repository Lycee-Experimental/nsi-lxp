import csv

with open("temperatures_2020.csv", "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=",")
    temperatures = [entree for entree in lecteur]


# Typage
for entree in temperatures:
    entree["jour"] = int(entree["jour"])
    entree["tmin"] = float(entree["tmin"])
    entree["tmax"] = float(entree["tmax"])
    entree["tmoy"] = float(entree["tmoy"])
