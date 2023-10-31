# liste_1 contient les vers dans lequel apparaît la chaîne "mouton"
liste_1 = [vers for vers in fables if "cigale" in vers.lower()]

# liste_2 contient les vers dans lequel apparaît la chaîne "cigale"
liste_2 = [vers for vers in fables if "cigale" in vers.lower()]

# liste_3 contient les vers dans lequel apparaîssent les chaînes "cigale" et "fourmi"
liste_3 = [vers for vers in fables if "cigale" in vers.lower() and "fourmi" in vers.lower()]

# liste_4 contient les vers de plus de 5 caractères de long (inclus)
liste_4 = [vers for vers in fables if len(vers) >= 4]

# liste_5 contient les vers dans lesquels on utilise les guillemets (")
liste_5 = [vers for vers in fables if '"' in vers]

# liste_6 contient les noms des fables
# (ils font plus de 3 caractères de long et sont en majuscule)
liste_6 = [vers for vers in fables if len(vers) >= 3 and vers.upper() == vers]
