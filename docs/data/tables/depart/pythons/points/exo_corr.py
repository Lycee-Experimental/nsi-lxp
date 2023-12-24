from math import sqrt
from random import random

nb_points = 100_000
points = [(2 * random() - 1, 2 * random() - 1) for _ in range(nb_points)]


def distance_origine(x, y):
    return sqrt(x * x + y * y)


proches = [p for p in points if distance_origine(p[0], p[1]) <= 1]

print(4 * len(proches) / nb_points)
