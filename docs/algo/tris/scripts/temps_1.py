from timeit import timeit

def tri_selection(tableau):
    for i in range(len(tableau) - 1):
        i_mini = i
        for j in range(i + 1, len(tableau)):
            if tableau[j] < tableau[i_mini]:
                i_mini = j
        tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]

liste_croiss = [i for i in range(10000)]
liste_decroiss = [i for i in range(10000,0,-1)]
t_croiss = timeit("tri_selection(liste_croiss)", number = 1, globals = globals())
t_decroi = timeit("tri_selection(liste_decroiss)", number = 1, globals = globals())
print("t_croiss = ",t_croiss)
print("t_decroi = ",t_decroi)

