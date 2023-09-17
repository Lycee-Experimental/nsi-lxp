# adeline est la liste de toutes les entrées correspondant au prénom "Adeline"
adeline = [entree for entree in prenoms if entree[1] == "ADELINE"]

# annee_2007 est la liste de toutes les entrées correspondant à l'année 2007
annne_2007 = [entree for entree in prenoms if entree[2] == 2007]

# filles est la liste de toutes les entrées correspondant à des prénoms féminins
filles = [entree for entree in prenoms if entree[0] == "F"]

# courts est la liste de toutes les entrées correspondant
# à des prénoms courts (3 lettres ou moins)
courts = [entree for entree in prenoms if len(entree[1]) <= 3]

# longs est la liste de toutes les entrées correspondant
# à des prénoms longs (strictement plus de 10 lettres)
longs = [entree for entree in prenoms if len(entree[1]) > 10]

# nicolas_2018 est la liste de toutes les entrées correspondant
# au prénom "Nicolas"
# pour l'année 2018
nicolas_2018 = [entree for entree in prenoms if entree[1] == "NICOLAS" and entree[2] == 2018]

# entre_5_et_10_mille est la liste de toutes les entrées correspondant
# donnés entre 5 000 et 10 000 fois sur une année (inclus l'un et l'autre)
entre_5_et_10_mille = [entree for entree in prenoms if 5_000 <= entree[3] <= 10_000]

# fille_10_000 est la liste de toutes les entrées correspondant
# à des prénoms féminins
# donnés plus de 10 000 fois sur une année (inclus)
fille_10_000 = [entree for entree in prenoms if entree[0] == "F" and entree[3] >= 10_000]

# composes est la liste de toutes les entrées correspondant
# à des prénoms composés
# Ces prénoms contiennent un trait d'union
composes = [entree for entree in prenoms if "-" in entree[1]]

# a_debut est la liste de toutes les entrées correspondant
# à des prénoms débutants par la lettre "A"
a_debut = [entree for entree in prenoms if entree[1][0] == "A"]
