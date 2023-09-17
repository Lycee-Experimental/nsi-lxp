communes_corr = []
with open(file="pop_hist.csv", mode="r", encoding="utf-8") as fichier:
    fichier.readline()
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(";")
        for i in range(2, len(valeurs)):
            valeurs[i] = int(valeurs[i])
        communes_corr.append(valeurs)

# thyez est la liste contenant les entrées dont
# le nom de la commune est Thyez (en Haute-Savoie)
thyez_corr = [entree for entree in communes_corr if entree[1] == "Thyez"]
assert thyez == thyez_corr, "Erreur sur thyez"

# morbihan est la liste contenant les entrées concernant
# des communes du Morbihan
morbihan_corr = [entree for entree in communes_corr if entree[0] == "Morbihan"]
assert morbihan == morbihan_corr, "Erreur sur morbihan"

# grandes_villes est la liste contenant les noms des communes
# dont la population en 2019 dépasse 100 000 habitants (inclus)
gandes_villes_corr = [entree[1] for entree in communes_corr if entree[2] >= 100_000]
assert gandes_villes == gandes_villes_corr, "Erreur sur gandes_villes"

# petites_villes est la liste contenant les noms des communes
# dont la population en 2019 est inférieure à 500 habitants (inclus)
petites_villes_corr = [entree[1] for entree in communes_corr if entree[2] <= 500]
assert petites_villes == petites_villes_corr, "Erreur sur petites_villes"

# progression est la liste contenant les noms des communes
# dont la population a strictement augmenté entre 2009 et 2019
progression_corr = [entree[1] for entree in communes_corr if entree[2] > entree[3]]
assert progression == progression_corr, "Erreur sur progression"

# fois_10 est la liste contenant les noms des communes
# dont la population a été multiplié par 10 (ou plus) entre 1876 et 2019
fois_10_corr = [entree[1] for entree in communes_corr if entree[2] >= 10 * entree[-1]]
assert fois_10 == fois_10_corr, "Erreur sur fois_10"

# evolutions est la liste contenant les couples (nom de la commune, evolution)
# où evolution est la différence Population en 2019 - Population en 1876
evolutions_corr = [(entree[1], entree[2] - entree[-1]) for entree in communes_corr]
assert evolutions == evolutions_corr, "Erreur sur evolutions"
