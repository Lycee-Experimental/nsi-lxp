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
def code_pays(pays, nom):
    """Renvoie le code d'un pays"""
    ...


def langues_parlees(pays, langues, nom):
    """Renvoie la liste des noms des langues parlées dans le pays indiqué par son nom"""
    ...

assert sorted(langues_parlees(pays, langues, "Haiti")) == ['French', 'Haiti Creole']