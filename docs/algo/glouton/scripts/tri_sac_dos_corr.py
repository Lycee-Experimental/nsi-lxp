def ratio(objet):
    """renvoie le rapport prix/poids d'un objet"""
    return objet[2] / objet[1]

objets_tries = sorted(OBJETS, key=ratio, reverse=True)
