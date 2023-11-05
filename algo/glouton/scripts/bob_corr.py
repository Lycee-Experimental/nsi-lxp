PIECES = [4, 3, 1]

def monnaie_Glouton(montant):
    a_rendre = montant
    liste = []
    for piece in PIECES:
        while a_rendre >= piece:
            liste.append(piece)
            a_rendre = a_rendre - piece
    return liste
