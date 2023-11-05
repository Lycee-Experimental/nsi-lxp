tableau = [23, 28, 29, 35, 37]

# Tests
assert indice(tableau, 23) == 0, "Erreur dans la recherche de 23"
assert indice(tableau, 29) == 2, "Erreur dans la recherche de 29"
assert indice(tableau, 37) == 4, "Erreur dans la recherche de 37"
assert indice(tableau, 10) is None, "Erreur dans la recherche de 10"
assert indice(tableau, 100) is None, "Erreur dans la recherche de 100"

# Tests supplémentaires
class Tableau(list):
    def __init__(self, longueur, fonction):
        assert longueur > 1_000, "La longueur doit être supérieure à 1000"
        self._longueur = longueur
        self._fonction = fonction
        self._compteur_lectures = 0
        self._lectures_max = 100

    def __len__(self):
        return self._longueur

    def __getitem__(self, i):
        if type(i) is slice:
            indices = range(*i.indices(self._longueur))
            return [self.__getitem__(k) for k in indices]
        self._compteur_lectures += 1
        if self._compteur_lectures > self._lectures_max:
            raise LookupError(f"Il faut réaliser strictement moins de {self._lectures_max} lectures dans le tableau")
        return self._fonction(i)

    def __setitem__(self, i, x):
        raise NotImplementedError("Il est interdit de modifier les valeurs")

    def __str__(self):
        return f"[{self._fonction(0)}, {self._fonction(1)}, ..., {self._fonction(self._longueur - 1)}]"

    def __repr__(self):
        return self.__str__()

    def __iter__(self):
        for i in range(self._longueur):
            yield self.__getitem__(i)


from random import randrange

for test in range(10):
    # Création du grand tableau
    exposant = randrange(6, 10)
    N = 10**exposant
    a = randrange(2, 50)
    b = randrange(-1000, 1001)
    fonction = lambda i: a * i + b
    # Recherche du dernier élément
    tableau = Tableau(N, fonction)
    attendu = N - 1
    cible = fonction(attendu)
    assert (
        indice(tableau, cible) == attendu
    ), f"Erreur lors de la recherche de {cible} dans un tableau de 10**{exposant} valeurs"
    # Recherche d'un élément aléatoire
    tableau = Tableau(N, fonction)
    attendu = randrange(0, N - 1)
    cible = fonction(attendu)
    assert (
        indice(tableau, cible) == attendu
    ), f"Erreur lors de la recherche de {cible} dans un tableau de 10**{exposant} valeurs"

    # Recherche d'un élément absent
    # à gauche
    tableau = Tableau(N, fonction)
    cible = fonction(0) - 1
    assert indice(tableau, cible) is None
    # au centre
    tableau = Tableau(N, fonction)
    cible = fonction(randrange(0, N - 1)) + (a - 1)
    assert indice(tableau, cible) is None
    # à droite
    tableau = Tableau(N, fonction)
    cible = tableau[N + 1]
    assert indice(tableau, cible) is None


