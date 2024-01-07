def remplacer(valeurs, valeur_cible, nouvelle_valeur):
    resultat = []
    for element in valeurs:
        if element == valeur_cible:
            resultat.append(nouvelle_valeur)
        else:
            resultat.append(element)
    return resultat
