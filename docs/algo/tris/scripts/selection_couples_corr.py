def indice_minimum_depuis(tableau, i):
    i_mini = i
    for j in range(i + 1, len(tableau)):
        if tableau[j][0] > tableau[i_mini][0]:
            i_mini = j
        elif tableau[j][0] == tableau[i_mini][0]:
            if tableau[j][1] < tableau[i_mini][1]:
                i_mini = j
    return i_mini


def tri_eleves(tableau):
    for i in range(len(tableau) - 1):
        i_mini = indice_minimum_depuis(tableau, i)
        tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]

