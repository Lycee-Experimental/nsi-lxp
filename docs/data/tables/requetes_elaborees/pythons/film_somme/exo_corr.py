def somme(donnees, descripteur):
    """Renvoie la somme des valeurs de ce descripteur"""
    total = 0
    for entree in donnees:
        total += entree[descripteur]
    return total
