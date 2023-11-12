# module sur les listes

"""

"""


def dans_liste(x, L):
    """

    """
    msg = False
    
    for e in L:
        if e==x:
            msg=True
    
    return msg


def max_liste(L):
    """

    """
    
    maxi = L[0]
    for i in range(1, len(L)):
        if L[i] > maxi:
            maxi=L[i]
            
    return maxi


def moy_liste(L):
    """

    """ 
    
    Somme = 0
    for e in L:
        Somme = Somme + e
        
    moyenne=Somme / len(L)
    
    return moyenne


def indice_min_liste(L):
    """

    """ 
    
    i = 0
    indice = 0
    mini = L[0]
    for e in L:
        if L[i] < mini:
            L[i] = mini
            indice=i
        i = i + 1
        
    return indice


def card_val_liste(x, L):
    """

    """
    
    nb = 0
    for e in L:
        if e == x:
            nb= nb + 1
    
    return nb


def supp_liste(x,L):
    """

    """
    arret = False
    for e in L:
        if e==x and arret is False:
            indice=L.index(e)
            del L[indice]
            arret = True
    return L