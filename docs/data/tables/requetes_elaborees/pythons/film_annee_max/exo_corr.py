annee_maxi = None
maxi = 0

for annee in annee_films:
    if annee_films[annee] > maxi:
        maxi = annee_films[annee]
        annee_maxi = annee