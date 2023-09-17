# liste_1 contient les vers dans lequel apparaît la chaîne "mouton"
attendu = [vers for vers in fables if "mouton" in vers.lower()]
assert liste_1 == attendu, "Erreur sur la liste 1"

# liste_2 contient les vers dans lequel apparaît la chaîne "cigale"
attendu = [vers for vers in fables if "cigale" in vers.lower()]
assert liste_2 == attendu, "Erreur sur la liste 2"

# liste_3 contient les vers dans lequel apparaîssent les chaînes "cigale" et "fourmi"
attendu = [vers for vers in fables if "cigale" in vers.lower() and "fourmi" in vers.lower()]
assert liste_3 == attendu, "Erreur sur la liste 3"

# liste_4 contient les vers de plus de 5 caractères de long (inclus)
attendu = [vers for vers in fables if len(vers) >= 4]
assert liste_4 == attendu, "Erreur sur la liste 4"

# liste_5 contient les vers dans lesquels on utilise les guillemets (")
attendu = [vers for vers in fables if '"' in vers]
assert liste_5 == attendu, "Erreur sur la liste 5"

# liste_6 contient les noms des fables
# (ils font plus de 3 caractères de long et sont en majuscule)
attendu = [vers for vers in fables if len(vers) >= 3 and vers.upper() == vers]
assert liste_6 == attendu, "Erreur sur la liste 6"
