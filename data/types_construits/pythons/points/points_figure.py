from math import sqrt
from random import random
import matplotlib.pyplot as plt

nb_points = 3000
points = [(2 * random() - 1, 2 * random() - 1) for _ in range(nb_points)]


def distance_origine(x, y):
    return sqrt(x * x + y * y)

proches = [p for p in points if distance_origine(p[0], p[1]) <= 1]
loins = [p for p in points if distance_origine(p[0], p[1]) > 1]

print(4 * len(proches) / nb_points)

plt.plot([p[0] for p in proches], [p[1] for p in proches], "go")
plt.plot([p[0] for p in loins], [p[1] for p in loins], "ro")
plt.xlim(-1, 1)
plt.ylim(-1, 1)
ax = plt.gca()
ax.set_aspect('equal', adjustable='box')
plt.show()