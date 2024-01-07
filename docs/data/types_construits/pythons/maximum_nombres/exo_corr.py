def maximum(nombres):
    maxi = nombres[0]
    for valeur in nombres:
        if valeur > maxi:
            maxi = valeur
    return maxi
