def ratio(objet):
    # renvoie le rapport prix/poids d'un objet
    return objet[2] / objet[1]

def sac(objets, poids_max):
    butin = []
    poids_sac = 0
    objets_tries = sorted(objets, key=ratio, reverse=True)
    for objet in ...:
        poids_objet = ...
        if ... + ... < poids_max :
            ...
            poids_sac = ...
    return butin

objets  = [["A", 13, 700], ["B", 12, 500], ["C", 8, 200],\
              ["D", 10, 300], ["E", 14, 600], ["F", 18, 800]]

# Tests
assert sac(objets, 40) == ['A', 'F', 'C']