#--- HDR ---#
url_fichier = "fables.txt"
encodage = "utf-8"

from js import fetch

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)
#--- HDR ---#
fables = []

# Compléter ici

print(fables[2:25])  # La cigale et la fourmi
