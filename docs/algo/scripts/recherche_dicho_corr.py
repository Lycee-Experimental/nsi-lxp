def recherche_dichotomique(ma_liste, valeur) :
    indice_debut = 0
    indice_fin = len(ma_liste) - 1
    while indice_debut <= indice_fin :
        indice_centre = (indice_debut + indice_fin) // 2
        valeur_centrale = ma_liste[indice_centre]
        if valeur_centrale == valeur :
            return indice_centre
        if valeur_centrale < valeur :
            indice_debut = indice_centre + 1
        else :
            indice_fin = indice_centre - 1
    return None





