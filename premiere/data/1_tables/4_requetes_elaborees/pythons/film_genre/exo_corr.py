dico_genres = {}
meilleur_genre = None
maxi = 0

for genres in projection(films, "Genres"):
    sous_genres = genres.split(", ")
    for genre in sous_genres:
        if genre not in dico_genres:
            dico_genres[genre] = 1
        else:
            dico_genres[genre] += 1
        if dico_genres[genre] > maxi:
            meilleur_genre = genre
            maxi = dico_genres[meilleur_genre]
