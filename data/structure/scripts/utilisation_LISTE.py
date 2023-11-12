#--- HDR ---#

# Les Listes

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
#--- HDR ---#

L=[2, 4, 7, 1, 9, None, None]

INSERER(L, 2, 9)
print(L)

SUPPRIMER(L, 1)
print(L)

print(RECHERCHER(L, 1))

print(RECHERCHER(L, 10))

print(LIRE(L, 7))

MODIFIER(L, 4, 8)
print(L)


print(LONGUEUR(L))


