from math import sqrt
from random import random


def distance_origine(x, y):
    return sqrt(x * x + y * y)


nb_points = 100_000
points = [(2 * random() - 1, 2 * random() - 1) for _ in range(nb_points)]

dans_cercle = [p for p in points if distance_origine(p[0], p[1]) <= 1]

# Affiche une valeur approchée de pi
print(4 * len(dans_cercle) / nb_points)