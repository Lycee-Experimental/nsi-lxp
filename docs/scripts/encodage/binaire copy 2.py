def restes_successifs(n):
            ''' renvoie la liste des restes successifs lors des divisions de n par 2'''
            restes = []
            while n != 0 :
                restes.append(n % 2)
                n = n // 2
            return restes

def binaire(n) :
    ''' recompose le mot binaire en mettant dans l'ordre les restes successifs'''
    liste = restes_successifs(n)
    liste.reverse() #permet d'inverser l'ordre des élément d'une liste
    mot = ""
    for k in liste :
        mot += str(k)
    return mot

print(binaire(225))