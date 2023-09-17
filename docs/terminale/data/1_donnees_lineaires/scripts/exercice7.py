"""
Ce module contient les fonctions :
- AFFICHER : fonction afficher la file , sans les elements d'index 0 et 1
- ENFILER : fonction qui enfile l'element e dans la file F
- DEFILER : fonction qui defile dans la file F
"""


#objectif 1: fonction qui affiche le tableau complet
def AFFICHER_tableau(F):
    """
    Cette fonction permet d'afficher les éléments d'une pile à partir de l'indice 3
    param : F(list)
    return msg(str)
    Exemples :
    >>> print(AFFICHER_tableau([3,5,2,4,16,None,None]))
    FILE : 4 16 None None 
    """   
    
    msg = f'FILE : '
    ...
    ...
    return ...

#objectif 2:fonction qui enfile l'element e dans la file F
def ENFILER(F, e):
    """
    Cette fonction permet d'enfiler l'élement e dans la file F
    param : F(list)
            e(float)
    return : msg(str)
    Exemples :
    >>> ENFILER([3, 3, 2, 4, 16], 2)
    'la file est pleine'
    >>> ENFILER([3, 5, 2, 4, 16, None, None], 2)
    'élément enfilé : 2'
    >>> ENFILER([3, 5, 2, 5, 10, None], 2)
    'retour au debut, élément enfilé : 2'
    """
    
    msg = ""
    # test si on peut enfiler
    if ...:
        msg = 'la file est pleine'
    else : 
        # enfiler l'element e dans la file
        ...
        # test si on doit retourner au debut
        if ...:
            ...
            msg = 'retour au debut, '
        else:
            # mise a jour de la position de la place prochaine place disponible
            ...
        # mise a jour du nombre d'elements dans la file
        ...
        msg = msg + f"élément enfilé : {e}"
    return ....


#objectif 3: fonction qui defile dans la file F
def DEFILER(F):
    """
    Cette fonction permet de défiler la file F
    param : F(list)
    return : msg(str)
    Exemples :
    >>> DEFILER([2, 2, 0, None, None, None, None])
    'la file est vide'
    >>> DEFILER([3, 5, 2, 4, 16, None, None])
    'élément retiré : 4'
    >>> DEFILER([3, 3, 1, 5, 10, 15])
    'élément retiré : 5'
    """
    
    msg = ""
    # test si on peut defiler
    if ...:
        msg = 'la file est vide'
    else :
        # defiler et renvoyer l'element retire
        ...
        # mise à jour de la tête
            ...
        # mise a jour du nombre d'elements dans la file
        ...
        msg = msg + f"élément retiré : {elt_retire}"
    return ...