"""
Ce module contient les fonctions :
- AFFICHER : fonction afficher la pile verticalement , sans l'element d'index 0
- EMPILER : fonction qui empile l'element e dans la pile P
- DEPILER : fonction qui depile dans la pile P
"""

#objectif 1: fonction qui affiche sous forme d’une pile, les elements de la pile P, excepte celui d'index 0
def AFFICHER(P):
    """
    Cette fonction permet d'afficher les éléments d'une pile verticalement à partir de l'indice 1
    param : L(list)
    return msg(str)
    Exemples :
    >>> print(AFFICHER([5, 1, 5, 4, 16, None, None, None ,None, None, None]))
    Pile :
    16
    4
    5
    1
    """ 
    
    msg=f"Pile : \n"
    ...
    ...
    return ...

#objectif 2:fonction qui empile l'element e dans la pile P
def EMPILER(P, e):
    """
    Cette fonction permet d'empiler l'élement e dans la pile P
    param : L(list)
            e(float)
    return : msg(str)
    Exemples :
    >>> EMPILER([5, 1, 5, 4, 16], 2)
    'la pile est pleine'
    >>> EMPILER([5, 1, 5, 4, 16, None], 2)
    'element empiler : 2'
    """
    
    # test si on peut empiler
    if ...:
        msg = 'la pile est pleine'
    else:
        # empiler l'element e
        ...
        #mise a jour de la prochaine position disponible
        ...
        msg = f"element empiler : {e}"
    return ...

 #objectif 3: fonction qui depile dans la pile P
def DEPILER(P):
    """
    Cette fonction permet de dépiler la pile P
    param : L(list)
    return : msg(str)
    Exemples :
    >>> DEPILER([1, None, None, None, None, None, None])
    'la pile est vide'
    >>> DEPILER([5, 1, 5, 4, 16, None, None, None, None, None, None])
    'element dépilé : 16'
    """
    
    # test si on peut depiler
    if ...:
        msg = 'la pile est vide'
    else:
        # mise a jour de la prochaine position disponible
        ...
        # depiler et renvoyer l'element retire
        ...
        msg = f"element dépilé : {elt_depile}"
    return msg