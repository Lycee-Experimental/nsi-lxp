# 🔎 Algorithmes de recherches naïves, avec parcours séquentiel 🔎

??? conclu "Programme"
	|Notions|Compétences|Remarques|
	|--|--|--|
    Parcours séquentiel d’un tableau | Écrire un algorithme de recherche d’une occurrence sur des valeurs de type quelconque.<br> Écrire un algorithme de recherche d’un extremum, de calcul d’une moyenne. | On montre que le coût est linéaire.



{{exercice(prem=1,titre="Recherche séquentielle")}}
    La recherche d'un élément dans une liste est un problème fréquemment rencontré dans les algorithmes.  

    La façon la plus simple de chercher une valeur dans une liste est de parcourir un à un les éléments de la liste (de manière **séquentielle**). On compare les éléments à la valeur recherchée.

    Compléter la fonction `appartient_1` dont les spécifications sont données.

    !!! danger "Contrainte"

        Il est interdit d'écrire `if element in tableau:`   


    {{ IDE('scripts/appartient_1') }}  


{{exercice(titre="Recherche séquentielle raccourcie")}}

    🌵 Le problème de cette technique, c'est qu'on peut continuer à parcourir le tableau jusqu'au bout, pour rien, si on a trouvé l'élément avant la fin.  

    👉 Il est recommandé de faire une sortie anticipée de la boucle en utilisant le `return`

    Compléter la fonction `appartient_2` dont les spécifications sont données en utilisant une sortie anticipée.

    !!! danger "Contrainte"

        Il est interdit d'écrire `if element in tableau:`   


    {{ IDE('scripts/appartient_2') }} 


??? python "Astuce Python : savoir si un élément est présent dans une liste"
    La fonction `in` de python fait cela :

    {{ IDE('scripts/fct_in') }}





{{exercice(titre="Algorithme de recherche de maximum")}}
    On cherche à coder une fonction `recherche_max` qui prend en paramètre une liste `tab` et qui renvoie le plus grand élément de cette liste. L'usage de la fonction `max` est interdit.

    Utilisation :
    ```python
    >>> recherche_max([4, 3, 8, 1])
    8
    ```

    {{IDE()}}

    ??? tip "Indices"
        ??? note "Code à trous :star: :star: :star: :star:" 
            ```python
            def recherche_max(tab):
                '''renvoie le maximum de la liste tab'''
            ```

        ??? note "Code à trous :star: :star: :star: :octicons-star-24: " 
            ```python
            def recherche_max(tab):
                '''renvoie le maximum de la liste tab'''
                ... = ...                
                for ... in ...:
                    if ... > ...:
                        ... = ...
                return ...
            ```

        ??? note "Code à trous :star: :star: :octicons-star-24: :octicons-star-24:"
            ```python
            def recherche_max(tab):
                '''renvoie le maximum de la liste tab'''
                maxi = ...           
                for elt in ...:
                    if ... > ...:
                        ... = ...
                return ...
            ```

        ??? note "Code à trous :star: :octicons-star-24: :octicons-star-24: :octicons-star-24:"
            ```python
            def recherche_max(tab):
                '''renvoie le maximum de la liste tab'''
                maxi = tab[0]           
                for elt in tab:
                    if ... > ...:
                        maxi = ...
                return ...
            ```
        


{{exercice(titre="Algorithme de calcul de moyenne")}}

    On cherche à coder une fonction `moyenne` qui prend en paramètre une liste `tab` et qui renvoie la moyenne des éléments de cette liste.

    Utilisation :
    ```python
    >>> moyenne([4, 3, 8, 1])
    4.0
    ```
    {{IDE()}}

    ??? tip "Indices"
        ??? note "Code à trous :star: :star: :star: :star:" 
            ```python
            def moyenne(tab):
                ''' renvoie la moyenne de tab'''
            ```

        ??? note "Code à trous :star: :star: :star: :octicons-star-24: " 
            ```python
            def moyenne(tab):
                ''' renvoie la moyenne de tab'''
                ... = ...
                for ... in ...:
                    ... += ...
                return ... / ...
            ```

        ??? note "Code à trous :star: :star: :octicons-star-24: :octicons-star-24:"
            ```python
            def moyenne(tab):
                ''' renvoie la moyenne de tab'''
                somme = 0
                for elt in ...:
                    ... += ...
                return ... / ...
            ```


        ??? note "Code à trous :star: :octicons-star-24: :octicons-star-24: :octicons-star-24:"
            ```python
            def moyenne(tab):
                ''' renvoie la moyenne de tab'''
                somme = 0
                for elt in tab:
                    somme += ...
                return ... / ...
            ```


{{exercice(titre="Algorithme de recherche d'occurrence")}}

    On cherche à coder une fonction `recherche_occurrence` qui prend en paramètre un élément ```elt``` et une liste `tab` et qui renvoie la liste (éventuellement vide) des indices de ```elt``` dans ```tab```.

    Utilisation :
    ```python
    >>> recherche_occurrence(3, [1, 6, 3, 8, 3, 2])
    [2, 4]
    >>> recherche_occurrence(7, [1, 6, 3, 8, 3, 2])
    []

    ```
    {{IDE()}}

    ??? tip "Indices"
        ??? note "Code à trous :star: :star: :star: :star:" 
            ```python
            def recherche_occurrence(elt, tab):
                ''' renvoie la liste (éventuellement vide)
                des indices de elt dans tab'''
            ```


        ??? note "Code à trous :star: :star: :star: :octicons-star-24: " 
            ```python
            def recherche_occurrence(elt, tab):
                ''' renvoie la liste (éventuellement vide)
                des indices de elt dans tab'''
                ... = ...
                for ... in range(...):
                    if ... == ...:
                        ...
                return ...
            ```



        ??? note "Code à trous :star: :star: :octicons-star-24: :octicons-star-24:"
            ```python
            def recherche_occurrence(elt, tab):
                ''' renvoie la liste (éventuellement vide)
                des indices de elt dans tab'''
                liste_indices = ...
                for i in range(...):
                    if ... == ...:
                        ....append(i)
                return ...
            ```


        ??? note "Code à trous :star: :octicons-star-24: :octicons-star-24: :octicons-star-24:"
            ```python
            def recherche_occurrence(elt, tab):
                ''' renvoie la liste (éventuellement vide)
                des indices de elt dans tab'''
                liste_indices = []
                for i in range(len(tab)):
                    if tab[i] == ...:
                        ....append(i)
                return ...
            ```

{{exercice(titre="Algorithme de recherche de maximum avec indice")}}

    On cherche à coder une fonction `recherche_max_et_indice` qui prend en paramètre une liste `tab` et qui renvoie le plus grand élément de cette liste ainsi que l'indice de ce maximum dans la liste (si il est présent plusieurs fois, un seul indice sera renvoyé). L'usage de la fonction `max` est interdit.

    Utilisation :
    ```python
    >>> recherche_max_et_indice([4, 1, 3, 8, 3, 8, 1])
    8, 5
    ```
    {{IDE()}}




??? python "Astuce Python : fonctions min(), max() et sum()"
    Les fonctions `min` et ``max` permettent de déterminer directement minimums et maximum d'une liste, la fonction sum d'en calculer la somme :

    ```pycon
    >>> print(min([23,2,45]))
    2
    >>> print(max([23,2,45]))
    45
    >>> print(sum([23,2,45]))
    70
    >>> liste = [23,2,45]
    >>> moy=sum(liste)/len(liste)
    >>> print(moy)
    23.333333333333332
    ```

    {{ terminal() }}



??? info "Complexité/Coût linéaire d'un parcours séquentiel"  
    On note $n$ la taille des données en entrée. Dans notre cas, la mesure de cette taille correspond à la taille de la liste `n=len(tab)`.

    Le coût/complexité $C(n)$ de ces algorithmes de recherche ou calculs séquentiels correspond au nombre d'opérations réalisées. Dans chacun des cas ci-dessus, cela correspond au nombre nombre d'itérations $C(n)$ dans la boucle `for` de cet algorithme.  
    
    La complexité/coût de l'algorithme de recherche de minimum est **linéaire**, on le note $O(n)$:

    <center><enc>$C(n) = n$</enc></center>

