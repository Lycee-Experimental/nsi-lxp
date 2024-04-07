def tri_selection(tableau):
    for i in range(len(tableau) - 1):
        i_mini = i
        for j in range(i + 1, len(tableau)):
            if tableau[j] < tableau[i_mini]:
                i_mini = j
        tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]

valeurs = [5, 1, 2]
print("valeurs = ", valeurs)
tri_selection(valeurs) # Appel de la fonction avec l'argument [5, 1, 2]
print("Après appel de la fonction de tri : valeurs = ", valeurs)
