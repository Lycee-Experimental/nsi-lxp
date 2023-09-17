def projection_multiple(donnees, descripteurs):
    """Renvoie les valeurs de ces descripteurs"""
    return [tuple(entree[d] for d in descripteurs) for entree in donnees]