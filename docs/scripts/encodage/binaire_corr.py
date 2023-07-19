def binaire(n) :
    ''' recompose le mot binaire en mettant dans l'ordre les restes successifs'''
    liste = []
    while n != 0 :
        liste.append(n % 2)
        n = n // 2
    liste.reverse() #permet d'inverser l'ordre des élément d'une liste
    valeur = ""
    for k in liste :
        valeur += str(k)
    return valeur