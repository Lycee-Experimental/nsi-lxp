#--- HDR ---#
from js import fetch
import csv

##########
# Villes #
##########

url_fichier = "cities.csv"
encodage = "utf-8"

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)

villes = []
with open(url_fichier, "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=",")
    for entree in lecteur:
        entree["ID"] = int(entree["ID"])
        entree["Population"] = int(entree["Population"])
        villes.append(entree)

###########
# Langues #
###########

url_fichier = "languages.csv"
encodage = "utf-8"

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)


langues = []
with open(url_fichier, "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=",")
    for entree in lecteur:
        entree["Percentage"] = float(entree["Percentage"])
        entree["IsOfficial"] = True if entree["IsOfficial"] == "T" else False
        langues.append(entree)

########
# Pays #
########

url_fichier = "countries.csv"
encodage = "utf-8"

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)

pays = []
with open(url_fichier, "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=",")
    for entree in lecteur:
        entree["SurfaceArea"] = float(entree["SurfaceArea"])
        entree["GNP"] = float(entree["GNP"])
        entree["Population"] = int(entree["Population"])
        entree["Capital"] = int(entree["Capital"]) if entree["Capital"] else -1
        pays.append(entree)
#--- HDR ---#
i_haiti = 0
while pays[i_haiti]["Name"] ... "Haiti":
    i_haiti = ...

code = pays[i_haiti][...]


langues_haiti = []
for entree in langues:
    if entree[...] == code:
        langues_haiti.append(entree)

for langue in langues_haiti:
    print(langue)
    