def rendu_glouton(a_rendre, rang):
    if a_rendre == 0:
        return []
    v = VALEURS[rang]
    if v <= a_rendre :
        return [v] + rendu_glouton(a_rendre - v, rang)
    else :
        return rendu_glouton(a_rendre, rang + 1)
