def tri_selection_decr(tableau):
    for i in range(len(tableau) - 1):
        i_maxi = i
        for j in range(i + 1, len(tableau)):
            if tableau[j] > tableau[i_maxi]:
                i_maxi = j
        tableau[i], tableau[i_maxi] = tableau[i_maxi], tableau[i]


