# --- HDR ---#
url_fichier = "nat2021.csv"
encodage = "utf-8"

from js import fetch

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)

prenoms = []
with open(file="nat2021.csv", mode="r", encoding="utf-8") as fichier:
    fichier.readline()
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(";")
        valeurs[2] = int(valeurs[2])
        valeurs[3] = int(valeurs[3])
        prenoms.append(valeurs)
# --- HDR ---#
# adeline est la liste de toutes les entrées correspondant au prénom "Adeline"
adeline = ...

# annee_2007 est la liste de toutes les entrées correspondant à l'année 2007
annne_2007 = ...

# filles est la liste de toutes les entrées correspondant à des prénoms féminins
filles = ...

# courts est la liste de toutes les entrées correspondant
# à des prénoms courts (3 lettres ou moins)
courts = ...

# longs est la liste de toutes les entrées correspondant
# à des prénoms longs (strictement plus de 10 lettres)
longs = ...

# nicolas_2018 est la liste de toutes les entrées correspondant
# au prénom "Nicolas"
# pour l'année 2018
nicolas_2018 = ...

# entre_5_et_10_mille est la liste de toutes les entrées correspondant
# donnés entre 5 000 et 10 000 fois sur une année (inclus l'un et l'autre)
entre_5_et_10_mille = ...

# fille_10_000 est la liste de toutes les entrées correspondant
# à des prénoms féminins
# donnés plus de 10 000 fois sur une année (inclus)
fille_10_000 = ...

# composes est la liste de toutes les entrées correspondant
# à des prénoms composés
# Ces prénoms contiennent un trait d'union
composes = ...

# a_debut est la liste de toutes les entrées correspondant
# à des prénoms débutants par la lettre "A"
a_debut = ...
