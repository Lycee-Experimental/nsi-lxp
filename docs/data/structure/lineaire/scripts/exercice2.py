"""
Ce module contient les fonctions :
- AFFICHER : fonction afficher la liste , sans l'element d'index 0
- SUPPRIMER : fonction qui supprime un élément de la liste
- INSERER : fonction qui insère un élément dans la liste
"""

#objectif 1: fonction afficher la liste , sans l'element d'index 0
def AFFICHER(L):
    """
    Cette fonction permet d'afficher les éléments d'une liste à partir de l'indice 1
    
    param : L(list)
    return msg(str)
    
    Exemples :
    
    >>> AFFICHER([4, 1, 5, 4, 16, None, None, None, None, None, None])
    'Liste :  1  5  4  16 ' 
    """
    
    ...
    ...
    ...
    ...
    return ...

#objectif 2: fonction supprimer un element
def SUPPRIMER(L, i):
    """
    Cette fonction permet de supprimer un élément à l'indice i d'une liste
    
    param : L(list)
            i(int)
    return : msg(str)
    
    Exemples :
    >>> SUPPRIMER([4, 1, 5, 4, 16, None, None, None, None, None, None], 2)
    'la suppression est possible'
    
    >>> SUPPRIMER([4, 1, 5 ,4, 16, None, None, None, None, None, None], 0)
    'suppression pas possible'
    """
    
    # Test de validite pour l'application de supprimer
    if ...:
        ...
    # Recopie des valeurs gardees
    else:
        ....
        L[k] = L[k+1]
        # mise a jour de la taille de la liste
        L[0] = L[0] - 1
        msg = "la suppression est possible"
    return ...

#objectif 3: fonction inserer un element
def INSERER(L, i, e):
    """
    Cette fonction permet d'insérer un élément à un indice donné dans une liste
    
    param : L(list)
            i(int)
            e(float)
    return : msg(str)
    
    Exemples :
    
    >>> INSERER([4, 1, 5 ,4, 16, None, None, None, None, None, None], 3, 9)
    'insertion possible'
    
    >>> INSERER([4, 1, 5 ,4, 16, None, None, None, None, None, None], 0, 9)
    'insertion pas possible: indice pas correct'
    
    >>> INSERER([10,1,5,4,16,5,6,7,8,9,10],8,3)
    'insertion pas possible: liste pleine'
    """
    
    # Test de validite pour l'application de inserer
    if ...:
        msg = "insertion pas possible: indice pas correct"
    elif ...:    
        msg = "insertion pas possible: liste pleine"
    # Recopie des valeurs deplacees
    else:
        ...
        L[k+1] = L[k]
        # Insertion de la valeur e a la position i
        ...
        # mise a jour de la taille de la liste
        L[0] = L[0] + 1
        msg = "insertion possible"
    return ...