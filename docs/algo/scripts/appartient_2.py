def appartient_2(nombre: int, tableau: list) -> bool:
    """
    La fonction renvoie True si nombre est dans liste, et False sinon
    :param nombre:  nombre à tester
    :param tableau: liste dans laquelle on veut savoir si nombre se trouve.
    :returns: True si nombre est dans liste, et False sinon

    >>> appartient_2(12, [3, 5, 6, 12, 33, 56, 99])
    True
    >>> appartient_2(22, [3, 5, 6, 12, 33, 56, 99])
    False

    """
    pass


# Tests
assert appartient_2(12, [3, 5, 6, 12, 33, 56, 99])
assert appartient_2(22, [3, 5, 6, 12, 33, 56, 99]) == False


