def possibilites(montant):
    rendre = []
    for i in range(montant + 1): # au plus montant pièces (de 1 par exemple)
        for j in range(montant + 1):
            for k in range(montant + 1):
                if i*PIECES[0] + j*PIECES[1] + k*PIECES[2] == montant :
                    rendre.append([i, j, k])
    return rendre

def monnaie_brute(montant):
    possibles = possibilites(montant)
    min = montant
    for liste in possibles:
        if sum(liste) < min:
            resultat = liste
            min = sum(liste)
    return (resultat, min)




