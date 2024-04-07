def tri_selection(tableau):
    for i in range(len(tableau) - 1):
        i_mini = indice_minimum_depuis(tableau, i)
        echange(tableau, i, i_mini)

