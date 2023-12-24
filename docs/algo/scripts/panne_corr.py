def indice_panne(log):
    if not log[0]:
        return 0
    
    debut = 0
    fin = len(log) - 1

    while debut <= fin:
        milieu = (debut + fin) // 2
        if log[milieu - 1] and not log[milieu]:
            return milieu
        elif not log[milieu]:
            fin = milieu - 1
        else:
            debut = milieu + 1

            