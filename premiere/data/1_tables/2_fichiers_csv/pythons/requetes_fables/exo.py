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
with open(file="fables.txt", mode="r", encoding="utf-8") as fichier:
    for ligne in fichier:
        ligne_propre = ligne.strip()
        if ligne_propre != "":
            fables.append(ligne_propre)

# liste_1 contient les vers dans lequel apparaît la chaîne "mouton"
liste_1 = ...

# liste_2 contient les vers dans lequel apparaît la chaîne "cigale"
liste_2 = ...

# liste_3 contient les vers dans lequel apparaîssent les chaînes "cigale" et "fourmi"
liste_3 = ...

# liste_4 contient les vers de plus de 5 caractères de long (inclus)
liste_4 = ...

# liste_5 contient les vers dans lesquels on utilise les guillemets (")
liste_5 = ...

# liste_6 contient les noms des fables
# (ils font plus de 6 caractères de long et sont en majuscule)
liste_6 = ...
