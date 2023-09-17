attendu = max([(k, v) for k, v in annee_films.items()], key=lambda couple: couple[1])[0]

assert annee_maxi == attendu, "Erreur de calcul"
