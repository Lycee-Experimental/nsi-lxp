def indice(tableau, cible):
    debut = 0
    fin = len(tableau) - 1
    while debut <= fin:
        milieu = (debut + fin) // 2
        if cible < tableau[milieu]:
            fin = milieu - 1
        elif cible == tableau[milieu]:
            return milieu
        else:
            debut = milieu + 1
    return None


