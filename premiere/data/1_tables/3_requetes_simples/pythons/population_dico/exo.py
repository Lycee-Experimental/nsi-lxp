# --- HDR ---#
url_fichier = "pop_hist.csv"
encodage = "utf-8"

from js import fetch

reponse = await fetch(f"../{url_fichier}")
contenu = await reponse.text()

with open(file=url_fichier, mode="w", encoding=encodage) as fichier:
    fichier.write(contenu)
# --- HDR ---#
###########################
# Listes de dictionnaires #
###########################
# Import et Typage
communes = []
...

# Requêtes

# thyez est la liste contenant les entrées dont
# le nom de la commune est Thyez (en Haute-Savoie)
thyez = ...

# morbihan est la liste contenant les entrées concernant
# des communes du Morbihan
morbihan = ...

# grandes_villes est la liste contenant les noms des communes
# dont la population en 2019 dépasse 100 000 habitants (inclus)
gandes_villes = ...

# petites_villes est la liste contenant les noms des communes
# dont la population en 2019 est inférieure à 500 habitants (inclus)
petites_villes = ...

# progression est la liste contenant les noms des communes
# dont la population a strictement augmenté entre 2009 et 2019
progression = ...

# fois_10 est la liste contenant les noms des communes
# dont la population a été multiplié par 10 (ou plus) entre 1876 et 2019
fois_10 = ...

# evolutions est la liste contenant les couples (nom de la commune, evolution)
# où evolution est la différence Population en 2019 - Population en 1876
evolutions = ...
