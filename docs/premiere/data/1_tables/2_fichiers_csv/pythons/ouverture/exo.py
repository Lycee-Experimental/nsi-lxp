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
with open(file=..., mode=..., encoding=...) as fichier:
    for ligne in ...:
        ....append(...)

print(fables[4:29])  # La cigale et la fourmi
