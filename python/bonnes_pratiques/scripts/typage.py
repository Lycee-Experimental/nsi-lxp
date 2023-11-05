from random import randint


def fonc(n, liste_notes):
    somme = 0
    for elt in liste_notes :
        somme = somme + elt
    return somme/n

nombre = 10
x="Anatole"
liste_notes = []
liste_notes = [randint(0, 20) for i in range(nombre)]
print(liste_notes, "\t", fonc(x, liste_notes))