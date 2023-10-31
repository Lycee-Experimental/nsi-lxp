# module sur les listes

"""
Ce module contient les différentes fonctions sur les listes suivantes:

    - dans_liste: Recherche de la présence d'un élément dans la liste
    - max_liste: Recherche de la valeur maximale (et/ou minimale) des élément d'une liste
    - moy_liste: Calcul de la moyenne des élément d'une liste
    - indice_min_liste: Recherche de l'indice de l'élément minimum 
    - card_val_liste: Recherche du nb d'occurrences d'une valeur 
    - supp_liste: Suppression de la première occurrence d'un élément 
"""


def dans_liste(x, L):
    """
    Cette fonction permet de rechercher si un élément est dans une liste ou non.
    
    param x : Elément recherché (float)
    param L : Liste pour la recherche (list)
    return : présence ou non (bool)
    
    Exemple :
    
    >>> dans_liste(2, [1, 2, 3])
    True
    >>> dans_liste(4, [1, 2, 3])
    False
    """
    msg = False
    
    for e in L:
        if e == x:
            msg = True
    
    return msg


def max_liste(L):
    """
    Cette fonction permet de rechercher le plus grand élément d'une liste.
    
    param L : Liste (list)
    return : valeur max (float)
    
    Exemple :
    
    >>> max_liste([1, 2, 3])
    3
    >>> max_liste([4, 1, 2])
    4
    """
    
    maxi = L[0]
    for i in range(1, len(L)):
        if L[i] > maxi:
            maxi = L[i]
            
    return maxi


def moy_liste(L):
    """
    Cette fonction permet de calculer la moyenne des valeurs d'une liste.
    
    param L : Liste dont on cherche la moyenne (list)
    return : valeur moyenne (float)
    
    Exemple :
    
    >>> moy_liste([1, 2, 3])
    2
    """ 
    
    Somme = 0
    for e in L:
        Somme = Somme + e
        
    moyenne = Somme/len(L)
    
    return moyenne


def indice_min_liste(L):
    """
    Cette fonction permet d'avoir l'indice de la valeur minimum d'une liste.
    
    param L : Liste dont on cherche l'indice du min (list)
    return : indice du min (int)
    
    Exemple :
    
    >>> indice_min_liste([1, 2, 3])
    0
    >>> indice_min_liste([4, 2, 1])
    2
    """ 
    
    i = 0
    indice = 0
    mini = L[0]
    for e in L:
        if L[i] < mini:
            L[i] = mini
            indice = i
        i = i + 1
        
    return indice


def card_val_liste(x, L):
    """
    Cette fonction permet d'avoir le nombre de fois où apparaît une occurence dans une liste.
    
    param x : occurence à compter (float ou str)
    param L : Liste où on compte (list)
    return : nombre d'occurence (int)
    
    Exemple :
    
    >>> card_val_liste(2, [1, 2, 3])
    1
    >>> card_val_liste(2, [2, 2, 2])
    3
    """
    
    nb = 0
    for e in L:
        if e == x:
            nb = nb + 1
    
    return nb


def supp_liste(x, L):
    """
    Cette fonction permet de supprimer la première occurence d'un élément d'une liste.
    
    param x : élément à supprimer
    param L : Liste de départ(list)
    return : Liste sans l'occurence de l'élément (list)
    
    Exemple :
    
    >>> supp_liste(1, [2, 1, 4, 1, 3])
    [2, 4, 1, 3]
    """
    arret = False
    for e in L:
        if e == x and arret == False:
            indice=L.index(e)
            del L[indice]
            arret = True
    return L