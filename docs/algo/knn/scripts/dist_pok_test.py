# Tests
assert knn(pokemons, cible_1, 3) == [['Spoink', 'Psy', 5.0],
 ['Munna', 'Psy', 11.0],
 ['Mesmerella', 'Psy', 20.615528128088304]]
assert knn(pokemons, cible_2, 3) == [['Mateloutre', 'Eau', 5.0],
 ['Phione', 'Eau', 5.0],
 ['Gamblast', 'Eau', 8.06225774829855]]
assert knn(pokemons, cible_3, 3) == [['Mewtwo', 'Psy', 18.601075237738275],
 ['Crefadet', 'Psy', 20.0],
 ['Aligatueur', 'Eau', 22.360679774997898]]
assert knn(pokemons, cible_1, 5) == [['Spoink', 'Psy', 5.0],
 ['Munna', 'Psy', 11.0],
 ['Mesmerella', 'Psy', 20.615528128088304],
 ['Nucleos', 'Psy', 20.615528128088304],
 ['Groret', 'Psy', 25.0]]
assert knn(pokemons, cible_2, 5) == [['Mateloutre', 'Eau', 5.0],
 ['Phione', 'Eau', 5.0],
 ['Gamblast', 'Eau', 8.06225774829855],
 ['Crocrodil', 'Eau', 10.0],
 ['Bargantua', 'Eau', 13.0]]
assert knn(pokemons, cible_3, 5) == [['Mewtwo', 'Psy', 18.601075237738275],
 ['Crefadet', 'Psy', 20.0],
 ['Aligatueur', 'Eau', 22.360679774997898],
 ['Clamiral', 'Eau', 25.0],
 ['Mew', 'Psy', 25.495097567963924]]