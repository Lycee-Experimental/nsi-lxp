def possibilités(objets, poids):
    prendre = []
    for i1 in range(2):
        for i2 in range(2):
            ...
    return prendre

def butin_brut(objets, poids):
    possibles = possibilités(objets, poids)
    max = 0
    resultat = []
    for ...

    return (resultat, max)


objets = [["A", 13, 700], ["B", 12, 500], ["C", 8, 200],\
 ["D", 10, 300], ["E", 14, 600], ["F", 18, 800]]

# Tests
assert butin_brut(objets, 40) == ([1, 1, 0, 0, 1, 0], 1800)
