"""
Ce module contient les fonctions :
- AFFICHER : fonction afficher la liste , sans l'element d'index 0
- SUPPRIMER : fonction qui supprime un élément de la liste
- INSERER : fonction qui insère un élément dans la liste
"""

def CREER_LISTE_VIDE():
    return []

def INSERER(L, i, e):
    if i > len(L):
        msg = "insertion pas possible: indice pas correct"
    else:
        L.insert(i, e)
        L.pop()
        msg = "insertion effectuée"
    return msg


def SUPPRIMER(L, i):    
    if  i > len(L):
        msg = "suppression pas possible"
    else :
        del L[i]
        L.append(None)
        msg = "la suppression est possible"
    return msg


def RECHERCHER(L, e):
    if e in L:
        msg = L.index(e)
    else:
        msg = "L'élément n'est pas dans la liste"
    return msg

def LIRE(L, i):
    if  i > len(L):
        msg = "lecture impossible"
    else:
        msg = L[i]
    return msg

def MODIFIER(L, i, e):
    if  i > len(L):
        msg = "modification impossible"
    else:
        L[i] = e
        msg = "modification effectuée"
    return msg

def LONGUEUR(L):
    return len(L)

if __name__ == '__main__':
    import doctest
    doctest.testmod()