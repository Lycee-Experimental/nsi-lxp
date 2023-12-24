#--- HDR ---#
pokemons = [{'Attaque': 105, 'Nom': 'Aligatueur', 'Points de vie': 85, 'Type': 'Eau'},\
 {'Attaque': 92, 'Nom': 'Bargantua', 'Points de vie': 70, 'Type': 'Eau'},\
 {'Attaque': 63, 'Nom': 'Carabaffe', 'Points de vie': 59, 'Type': 'Eau'},\
 {'Attaque': 100, 'Nom': 'Clamiral', 'Points de vie': 95, 'Type': 'Eau'},\
 {'Attaque': 125, 'Nom': 'Crefadet', 'Points de vie': 75, 'Type': 'Psy'},\
 {'Attaque': 80, 'Nom': 'Crocrodil', 'Points de vie': 65, 'Type': 'Eau'},\
 {'Attaque': 70, 'Nom': 'Deoxys', 'Points de vie': 50, 'Type': 'Psy'},\
 {'Attaque': 95, 'Nom': 'Deoxys', 'Points de vie': 50, 'Type': 'Psy'},\
 {'Attaque': 150, 'Nom': 'Deoxys', 'Points de vie': 50, 'Type': 'Psy'},\
 {'Attaque': 180, 'Nom': 'Deoxys', 'Points de vie': 50, 'Type': 'Psy'},\
 {'Attaque': 49, 'Nom': 'Ecayon', 'Points de vie': 49, 'Type': 'Eau'},\
 {'Attaque': 50, 'Nom': 'Eoko', 'Points de vie': 75, 'Type': 'Psy'},\
 {'Attaque': 73, 'Nom': 'Gamblast', 'Points de vie': 71, 'Type': 'Eau'},\
 {'Attaque': 70, 'Nom': 'Gobou', 'Points de vie': 50, 'Type': 'Eau'},\
 {'Attaque': 45, 'Nom': 'Groret', 'Points de vie': 80, 'Type': 'Psy'},\
 {'Attaque': 75, 'Nom': 'Mateloutre', 'Points de vie': 75, 'Type': 'Eau'},\
 {'Attaque': 45, 'Nom': 'Mesmerella', 'Points de vie': 60, 'Type': 'Psy'},\
 {'Attaque': 100, 'Nom': 'Mew', 'Points de vie': 100, 'Type': 'Psy'},\
 {'Attaque': 110, 'Nom': 'Mewtwo', 'Points de vie': 106, 'Type': 'Psy'},\
 {'Attaque': 150, 'Nom': 'Mewtwo', 'Points de vie': 106, 'Type': 'Psy'},\
 {'Attaque': 190, 'Nom': 'Mewtwo', 'Points de vie': 106, 'Type': 'Psy'},\
 {'Attaque': 25, 'Nom': 'Munna', 'Points de vie': 76, 'Type': 'Psy'},\
 {'Attaque': 30, 'Nom': 'Nucleos', 'Points de vie': 45, 'Type': 'Psy'},\
 {'Attaque': 105, 'Nom': 'Octillery', 'Points de vie': 75, 'Type': 'Eau'},\
 {'Attaque': 23, 'Nom': 'Okeoke', 'Points de vie': 95, 'Type': 'Psy'},\
 {'Attaque': 80, 'Nom': 'Phione', 'Points de vie': 80, 'Type': 'Eau'},\
 {'Attaque': 92, 'Nom': 'Poissoroy', 'Points de vie': 80, 'Type': 'Eau'},\
 {'Attaque': 66, 'Nom': 'Prinplouf', 'Points de vie': 64, 'Type': 'Eau'},\
 {'Attaque': 84, 'Nom': 'Rosabyss', 'Points de vie': 55, 'Type': 'Eau'},\
 {'Attaque': 55, 'Nom': 'Siderella', 'Points de vie': 70, 'Type': 'Psy'},\
 {'Attaque': 25, 'Nom': 'Spoink', 'Points de vie': 60, 'Type': 'Psy'},\
 {'Attaque': 65, 'Nom': 'Symbios', 'Points de vie': 110, 'Type': 'Psy'},\
 {'Attaque': 75, 'Nom': 'Tarpaud', 'Points de vie': 90, 'Type': 'Eau'},\
 {'Attaque': 51, 'Nom': 'Tiplouf', 'Points de vie': 53, 'Type': 'Eau'}]
#--- HDR ---#
from math import sqrt

def distance(pokemon, cible):
    return sqrt((cible['Points de vie']-pokemon['Points de vie'])**2
    + (cible['Attaque']-pokemon['Attaque'])**2)

def cree_liste(pokemons, cible):
    ...

def get_distance(donnee):
    return donnee[2]

def cree_liste_triee(pokemons, cible):
    distances_cibles = cree_liste(pokemons, cible)
    ...

def knn(pokemons, cible, k):
    ...

cible_1 = {'Attaque': 25, 'Points de vie' : 65}
cible_2 = {'Attaque': 80, 'Points de vie' : 75}
cible_3 = {'Attaque': 125, 'Points de vie' : 95}

knn(pokemons, cible_1, 3)
knn(pokemons, cible_1, 5)
knn(pokemons, cible_2, 3)
knn(pokemons, cible_2, 5)
knn(pokemons, cible_3, 3)
knn(pokemons, cible_3, 5)