from timeit import timeit

def tri_selection(tableau):
    for i in range(len(tableau) - 1):
        i_mini = i
        for j in range(i + 1, len(tableau)):
            if tableau[j] < tableau[i_mini]:
                i_mini = j
        tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]

liste_tailles = [300, 900, 2700]
liste_ref = [i for i in range(100)]
tref = timeit("tri_selection(liste_ref)", number = 20, globals = globals())
print("n = 100 : tref = ",tref)
for n in liste_tailles :
    print("n =", n, end = '')
    # Création de la liste triée de taille n : [0, 1, ...,n-1]
    liste_cr = [i for i in range(n)]
    # Temps d'éxécution du tri
    temps = timeit("tri_selection(liste_cr)", number = 20, globals = globals())
    # Affichage
    print('\t-> temps = ', round(temps, 2), '\t x', round(temps/tref, 2) )
    # Nouveau temps de référence avant le tour de boucle suivant
    tref = temps

