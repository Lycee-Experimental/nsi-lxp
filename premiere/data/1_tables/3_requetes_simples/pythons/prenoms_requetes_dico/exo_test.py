# adeline est la liste de toutes les entrées correspondant au prénom "Adeline"
adeline_ = [entree for entree in prenoms if entree["prenom"] == "ADELINE"]
assert adeline == adeline_, "Erreur sur adeline"

# annee_2007 est la liste de toutes les entrées correspondant à l'année 2007
annne_2007_ = [entree for entree in prenoms if entree["annee"] == 2007]
assert annne_2007 == annne_2007_, "Erreur sur annne_2007"

# filles est la liste de toutes les entrées correspondant à des prénoms féminins
filles_ = [entree for entree in prenoms if entree["sexe"] == "F"]
assert filles == filles_, "Erreur sur filles"

# courts est la liste de toutes les entrées correspondant
# à des prénoms courts (3 lettres ou moins)
courts_ = [entree for entree in prenoms if len(entree["prenom"]) <= 3]
assert courts == courts_, "Erreur sur courts"

# longs est la liste de toutes les entrées correspondant
# à des prénoms longs (strictement plus de 10 lettres)
longs_ = [entree for entree in prenoms if len(entree["prenom"]) > 10]
assert longs == longs_, "Erreur sur longs"

# nicolas_2018 est la liste de toutes les entrées correspondant
# au prénom "Nicolas"
# pour l'année 2018
nicolas_2018_ = [entree for entree in prenoms if entree["prenom"] == "NICOLAS" and entree["annee"] == 2018]
assert nicolas_2018 == nicolas_2018_, "Erreur sur nicolas_2018"

# entre_5_et_10_mille est la liste de toutes les entrées correspondant
# donnés entre 5 000 et 10 000 fois sur une année (inclus l'un et l'autre)
entre_5_et_10_mille_ = [entree for entree in prenoms if 5_000 <= entree["nombre"] <= 10_000]
assert entre_5_et_10_mille == entre_5_et_10_mille_, "Erreur sur entre_5_et_10_mille"

# fille_10_000 est la liste de toutes les entrées correspondant
# à des prénoms féminins
# donnés plus de 10 000 fois sur une année (inclus)
fille_10_000_ = [entree for entree in prenoms if entree["sexe"] == "F" and entree["nombre"] >= 10_000]
assert fille_10_000 == fille_10_000_, "Erreur sur fille_10_000"

# composes est la liste de toutes les entrées correspondant
# à des prénoms composés
# Ces prénoms contiennent un trait d'union
composes_ = [entree for entree in prenoms if "-" in entree["prenom"]]
assert composes == composes_, "Erreur sur composes"

# a_debut est la liste de toutes les entrées correspondant
# à des prénoms débutants par la lettre "A"
a_debut_ = [entree for entree in prenoms if entree["prenom"][0] == "A"]
assert a_debut == a_debut_, "Erreur sur a_debut"
