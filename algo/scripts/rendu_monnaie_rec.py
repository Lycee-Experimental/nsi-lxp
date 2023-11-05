def rendu_monnaie_rec(P, X):
    if X==0:
        return 0
    else:
        mini = 1000
    for i in range(len(P)):
        if P[i] <= X:
            nb = 1 + rendu_monnaie_rec(P, X-P[i])
            if nb < mini:
                mini = nb
    return mini
pieces = (2,5,10,50,100)