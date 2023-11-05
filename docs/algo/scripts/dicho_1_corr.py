def dichotomie(nombres, cible):
    debut = 0
    fin = len(nombres) - 1
    while debut <= fin:
        milieu = (fin + debut)//2
        if cible == nombres[milieu]:
            return True
        elif cible > nombres[milieu]:
            debut = milieu + 1
        else:
            fin = milieu - 1
    return False
