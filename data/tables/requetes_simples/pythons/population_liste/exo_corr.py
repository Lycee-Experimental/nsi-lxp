communes = []
with open(file="pop_hist.csv", mode="r", encoding="utf-8") as fichier:
    fichier.readline()
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(";")
        for i in range(2, len(valeurs)):
            valeurs[i] = int(valeurs[i])
        communes.append(valeurs)

# thyez est la liste contenant les entrées dont
# le nom de la commune est Thyez (en Haute-Savoie)
thyez = [entree for entree in communes if entree[1] == "Thyez"]

# morbihan est la liste contenant les entrées concernant
# des communes du Morbihan
morbihan = [entree for entree in communes if entree[0] == "Morbihan"]

# grandes_villes est la liste contenant les noms des communes
# dont la population en 2019 dépasse 100 000 habitants (inclus)
gandes_villes = [entree[1] for entree in communes if entree[2] >= 100_000]

# petites_villes est la liste contenant les noms des communes
# dont la population en 2019 est inférieure à 500 habitants (inclus)
petites_villes = [entree[1] for entree in communes if entree[2] <= 500]

# progression est la liste contenant les noms des communes
# dont la population a strictement augmenté entre 2009 et 2019
progression = [entree[1] for entree in communes if entree[2] > entree[3]]

# fois_10 est la liste contenant les noms des communes
# dont la population a été multiplié par 10 (ou plus) entre 1876 et 2019
fois_10 = [entree[1] for entree in communes if entree[2] >= 10 * entree[-1]]

# evolutions est la liste contenant les couples (nom de la commune, evolution)
# où evolution est la différence Population en 2019 - Population en 1876
evolutions = [(entree[1], entree[2] - entree[-1]) for entree in communes]
