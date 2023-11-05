def appartient_1(nombre: int, tableau: list) -> bool:
    """
    La fonction renvoie True si nombre est dans liste, et False sinon
    :param nombre:  nombre à tester
    :param tableau: liste dans laquelle on veut savoir si nombre se trouve.
    :returns: True si nombre est dans liste, et False sinon

    >>> appartient_1(12, [3, 5, 6, 12, 33, 56, 99])
    True
    >>> appartient_1(22, [3, 5, 6, 12, 33, 56, 99])
    False

    """
    reponse = False
    for element in tableau:
        if element == nombre:
            reponse = True

    return reponse







