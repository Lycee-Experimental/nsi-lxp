assert rendu_glouton(67, 0) == [50, 10, 5, 2]
assert rendu_glouton(291, 0) == [100, 100, 50, 20, 20, 1]
assert rendu_glouton(291, 1) == [50, 50, 50, 50, 50, 20, 20, 1]

# Autres tests
assert rendu_glouton(0, 0) == []
assert rendu_glouton(0, 6) == []
assert rendu_glouton(50, 0) == [50]
assert rendu_glouton(50, 2) == [20, 20, 10]

