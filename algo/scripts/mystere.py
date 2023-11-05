#--- HDR ---#

def devine(reponse = None):
    debut = NB_MIN
    fin = NB_MAX
    reussi = False
    while (fin-debut >= 0 or erreur or reponse == None) and not reussi:
        reussi = False
        erreur = False
        milieu = (fin + debut)//2
        reponse = input(f"Si le nombre est strictement plus grand que {milieu} appuyer sur +, s'il est strictement plus petit appuyer sur - ,si c'est le bon appuyer sur =")
        if reponse == '+':
            debut=milieu + 1
        elif reponse == '-':
            fin = milieu - 1
        elif reponse == '=':
            print("Le nombre que vous avez choisi est : ", milieu)
            reussi = True
        else :
            print("Erreur de saisie. Il faut saisir + ou - ou =")
            erreur = True

#--- HDR ---#

"""Vous jouez contre l'ordinateur. Le code de la fonction devine est caché.
Vous devez penser à un nombre compris entre NB_MIN et NB_MAX.
L'ordinateur va tenter de le deviner en vous posant des questions.
Il faut juste cliquer pour exécuter."""

NB_MIN = 1
NB_MAX = 100
devine()








