def sac(objets, poids_max):
    butin = []
    poids_sac = 0
    objets_tries = sorted(objets, key=ratio, reverse=True)
    for objet in objets_tries:
        poids_objet = objet[1]
        if poids_objet + poids_sac < poids_max :
            butin.append(objet[0])
            poids_sac += poids_objet
    return butin
