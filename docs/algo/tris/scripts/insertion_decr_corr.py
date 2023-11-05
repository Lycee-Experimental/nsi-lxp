def tri_insertion_decr(tableau):
    for i in range(1, len(tableau)):
        valeur_a_inserer = tableau[i]
        j = i
        while j > 0 and tableau[j - 1] < valeur_a_inserer:
            tableau[j] = tableau[j - 1]
            j = j - 1
        tableau[j] = valeur_a_inserer


