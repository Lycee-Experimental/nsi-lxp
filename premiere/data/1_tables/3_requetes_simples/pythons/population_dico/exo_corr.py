import csv
communes = []
with open(file="pop_hist.csv", mode="r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=";")
    for entree in lecteur:
        for descripteur in entree:
            if descripteur not in ["departement", "nom"]:
                entree[descripteur] = int(entree[descripteur])
        communes.append(entree)

# thyez est la liste contenant les entrées dont
# le nom de la commune est Thyez (en Haute-Savoie)
thyez = [entree for entree in communes if entree["nom"] == "Thyez"]

# morbihan est la liste contenant les entrées concernant
# des communes du Morbihan
morbihan = [entree for entree in communes if entree["departement"] == "Morbihan"]

# grandes_villes est la liste contenant les noms des communes
# dont la population en 2019 dépasse 100 000 habitants (inclus)
gandes_villes = [entree["nom"] for entree in communes if entree["pop_2019"] >= 100_000]

# petites_villes est la liste contenant les noms des communes
# dont la population en 2019 est inférieure à 500 habitants (inclus)
petites_villes = [entree["nom"] for entree in communes if entree["pop_2019"] <= 500]

# progression est la liste contenant les noms des communes
# dont la population a strictement augmenté entre 2009 et 2019
progression = [entree["nom"] for entree in communes if entree["pop_2019"] > entree["pop_2009"]]

# fois_10 est la liste contenant les noms des communes
# dont la population a été multiplié par 10 (ou plus) entre 1876 et 2019
fois_10 = [entree["nom"] for entree in communes if entree["pop_2019"] >= 10 * entree["pop_1876"]]

# evolutions est la liste contenant les couples (nom de la commune, evolution)
# où evolution est la différence Population en 2019 - Population en 1876
evolutions = [(entree["nom"], entree["pop_2019"] - entree["pop_1876"]) for entree in communes]
