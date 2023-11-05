from math import sqrt

def distance(pokemon, cible):
    return sqrt((cible['Points de vie']-pokemon['Points de vie'])**2 
    + (cible['Attaque']-pokemon['Attaque'])**2)

def cree_liste(pokemons, cible):
    return [[pokemon['Nom'], pokemon['Type'], distance(pokemon, cible)]
     for pokemon in pokemons]

def get_distance(donnee):
    return donnee[2]

def cree_liste_triee(pokemons, cible):
    distances_cibles = cree_liste(pokemons, cible)
    distances_cibles_triee = sorted(distances_cibles, key=get_distance)
    return distances_cibles_triee

def knn(pokemons, cible, k):
    voisins_tries = cree_liste_triee(pokemons, cible)
    resultat = [voisins_tries[i] for i in range(k)]
    return resultat