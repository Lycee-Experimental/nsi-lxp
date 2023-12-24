# Tests
assert indice_panne([True, False]) == 1
assert indice_panne([False, False, False]) == 0
assert indice_panne([True] * 10 + [False] * 100) == 10
assert indice_panne([True, True, False, False, False]) == 2

# Tests supplémentaires
from random import randrange


class Log(list):
    def __init__(self, longueur, premier_faux):
        assert longueur > 1_000, "La longueur doit être supérieure à 1000"
        self._longueur = longueur
        self._premier_faux = premier_faux
        self._compteur_lectures = 0
        self._lectures_max = 500

    def __len__(self):
        return self._longueur

    def __getitem__(self, i):
        if type(i) is slice:
            indices = range(*i.indices(self._longueur))
            return [self.__getitem__(k) for k in indices]
        self._compteur_lectures += 1
        if self._compteur_lectures > self._lectures_max:
            raise LookupError(f"Il faut réaliser strictement moins de {self._lectures_max} lectures dans le tableau")
        return True if i < self._premier_faux else False

    def __setitem__(self, i, x):
        raise NotImplementedError("Il est interdit de modifier les valeurs")

    def __str__(self):
        return f"[{self.__getitem__(0)}, {self.__getitem__(1)}, ..., {self.__getitem__(self._longueur - 1)}]"

    def __repr__(self):
        return self.__str__()

    def __iter__(self):
        for i in range(self._longueur):
            yield self.__getitem__(i)


for test in range(20):
    attendu = randrange(0, 100)
    faux = randrange(1, 100)
    log = [True] * attendu + [False] * faux
    assert indice_panne(log) == attendu, f"Erreur avec {log}"

    exposant = randrange(6, 10)
    N = 10**exposant
    attendu = randrange(1, N)
    grand_log = Log(N, attendu)
    assert (
        indice_panne(grand_log) == attendu
    ), f"Erreur lors de la recherche dans un tableau de 10**{exposant} valeurs"
    
