??? tip "Et ensuite ?"

    On obtient la liste suivante :

    ```python
    fables = ['LA CIGALE ET LA FOURMI.\n', '\n', '\n', 'La cigale, ayant chanté\n', "Tout l'été,\n", 'Se trouva fort dépourvue\n', 'Quand la bise fut venue:\n', 'Pas un seul petit morceau\n', 'De mouche ou de vermisseau.\n', 'Elle alla crier famine\n', 'Chez la fourmi sa voisine,\n', 'La priant de lui prêter\n', 'Quelque grain pour subsister\n', "Jusqu'à la saison nouvelle:\n", 'Je vous paierai, lui dit-elle,\n', "Avant l'août, foi d'animal,\n", 'Intérêt et principal.\n', "La fourmi n'est pas prêteuse;\n", "C'est là son moindre défaut:\n", 'Que faisiez-vous au temps chaud?\n', 'Dit-elle à cette emprunteuse.--\n', 'Nuit et jour à tout venant\n', 'Je chantais, ne vous déplaise.--\n', "Vous chantiez! j'en suis fort aise.\n", 'Hé bien! dansez maintenant.\n']
    ```

    Le `#!py '\n'` que l'on observe à plusieurs reprises est le caractère de retour à la ligne. On peut le supprimer en faisant `#!py ligne.strip()`. En effet, la méthode `#!py strip` supprime les caractères « blancs » au début ou à la fin d'une chaîne de caractères.

    La lecture du fichier devient alors :

    ```python
    fables = []
    with open(file="fables.txt", mode="r", encoding="utf-8") as fichier:
        for ligne in fichier:
            ligne_propre = ligne.strip()  # suppression des \n
            fables.append(ligne_propre)
    ```

    On obtient :

    ```python
    ['LA CIGALE ET LA FOURMI.', '', '', 'La cigale, ayant chanté', "Tout l'été,", 'Se trouva fort dépourvue', 'Quand la bise fut venue:', 'Pas un seul petit morceau', 'De mouche ou de vermisseau.', 'Elle alla crier famine', 'Chez la fourmi sa voisine,', 'La priant de lui prêter', 'Quelque grain pour subsister', "Jusqu'à la saison nouvelle:", 'Je vous paierai, lui dit-elle,', "Avant l'août, foi d'animal,", 'Intérêt et principal.', "La fourmi n'est pas prêteuse;", "C'est là son moindre défaut:", 'Que faisiez-vous au temps chaud?', 'Dit-elle à cette emprunteuse.--', 'Nuit et jour à tout venant', 'Je chantais, ne vous déplaise.--', "Vous chantiez! j'en suis fort aise.", 'Hé bien! dansez maintenant.']
    ```