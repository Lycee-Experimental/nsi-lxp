def indice_minimum_depuis(tableau, i):
    i_mini = i
    for j in range(i + 1, len(tableau)):
        if tableau[j] < tableau[i_mini]:
            i_mini = j
    return i_mini