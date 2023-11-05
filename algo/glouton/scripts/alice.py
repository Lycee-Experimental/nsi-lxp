PIECES = (4, 3, 1)

def possibilites(montant):
    rendre = []
    for i in range(montant + 1): # au plus montant pièces (de 1 par exemple)
        for j in range(montant + 1):
            for k in range(montant + 1):
                if i*PIECES[0] + j*PIECES[1] + k*PIECES[2] == montant :
                    rendre.append([..., ..., ...])
    return rendre

def monnaie_brute(montant):
    possibles = possibilites(montant)
    min = montant
    for liste in ...:
        if sum(liste) < ...:
            resultat = ... # La liste renvoyée
            min = sum(liste) # Le nombre de pièces
    return (resultat, min)

print(monnaie_brute(6))

# Tests
assert monnaie_brute(6)  == ([0, 2, 0], 2)
assert monnaie_brute(10) == ([1, 2, 0], 3)
