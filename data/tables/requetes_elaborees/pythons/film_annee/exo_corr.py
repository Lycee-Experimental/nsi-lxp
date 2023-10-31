annee_films = {}

for entree in films:
    if entree["Year"] not in annee_films:
        annee_films[entree["Year"]] = 1
    else:
        annee_films[entree["Year"]] += 1
