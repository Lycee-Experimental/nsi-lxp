def possibilités(objets, poids):
    prendre = []
    for i1 in range(2):
        for i2 in range(2):
            for i3 in range(2):
                for i4 in range(2):
                    for i5 in range(2):
                        for i6 in range(2):
                            reponse = [i1, i2, i3, i4, i5, i6]
                            poids_reponse = sum([reponse[i]*objets[i][1] for i in range(6)])
                            if poids_reponse < poids:
                                prendre.append([i1, i2, i3, i4, i5, i6])
    return prendre

def butin_brut(objets, poids):
    possibles = possibilités(objets, poids)
    max = 0
    resultat = []
    for liste in possibles:
        argent = sum([liste[i]*objets[i][2] for i in range(6)])
        if argent > max:
            resultat = liste
            max = argent
    return (resultat, max)

