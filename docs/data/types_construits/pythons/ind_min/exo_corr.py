def indice_min(nombres):
    mini = nombres[0]
    i_mini = 0
    for i in range(len(nombres)):
        if nombres[i] < mini:
            mini = nombres[i]
            i_mini = i
    return i_mini
