!!! danger "Attention"

    La difficulté de cet exercice est qu'il faut prendre soin de ne pas modifier la liste initiale.  


???+ Testez

    Une idée qui vient à l'esprit est la suivante :

    ```python
    def remplacer_naif(valeurs, valeur_cible, nouvelle_valeur):
        valeurs_2 = valeurs
        for i in range(len(valeurs_2)):
            if valeurs_2[i] == valeur_cible:
                valeurs_2[i] = nouvelle_valeur
        return valeurs_2

    valeurs = [3, 8, 7]
    assert remplacer_naif(valeurs, 3, 0) == [0, 8, 7]
    assert valeurs == [3, 8, 7] 
    ```
    
    Recopiez ce script ci-dessus puis testez-le.


!!! info "🌵 🌵 🌵"

    👉 Cela ne répond pas au problème, en effet tout se passe comme si l’instruction `valeurs_2 = valeurs` donnait deux noms différents au 
    même objet. En réalité, `valeurs_2` n’est pas une nouvelle liste.


!!! info "La solution proposée en correction"

    On crée donc une autre liste qui doit être un autre objet, qui sera celle renvoyée par la fonction.

    La solution proposée crée une liste vide que l'on complète au fur et à mesure en parcourant les valeurs de `valeurs`.


!!! info "Autre solution possible"

    ```python
    def remplacer(valeurs, valeur_cible, nouvelle_valeur):
        n = len(valeurs)
        valeurs_2 = [0] * n
        for i in range(n):
            if valeurs[i] == valeur_cible:
                valeurs_2[i] = nouvelle_valeur
            else:
                valeurs_2[i] = valeurs[i]
        return valeurs_2
    ```


!!! info "une solution avec liste en compréhension"

    On aurait aussi pu utiliser une liste par compréhension et un *opérateur ternaire* :

    ```python
    def remplacer(valeurs, valeur_cible, nouvelle_valeur):
        return [valeur if valeur != valeur_cible else nouvelle_valeur for valeur in valeurs]
    ```
