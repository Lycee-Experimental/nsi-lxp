# --- HDR ---#
url_fichier = "nat2021.csv"
encodage = "utf-8"

from js import fetch

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)
# --- HDR ---#
prenoms = []
with open(file=..., mode=..., encoding="utf-8") as fichier:
    fichier.readline()
    for ligne in ...:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(...)
        valeurs[2] = ...
        valeurs[...] = int(...)
        prenoms.append(...)

for i in range(5):
    print(prenoms[i])  # vérification
