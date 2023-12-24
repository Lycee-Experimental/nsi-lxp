# Exercices de tri

{{exercice(prem=1, titre="Quel tri ?")}}
    On considère le tableau $[6,\,1,\,4,\,5,\,2,\,3]$.
    Après la première itération d'un tri, on obtient le tableau : $[1,\,6,\,4,\,5,\,2,\,3]$

    === "Cocher la ou les affirmations correctes"

        - [ ] On a utilisé un tri par insertion
        - [ ] On a utilisé un tri par sélection
        - [ ] On a utilisé un tri par insertion ou par sélection

    === "Solution"

        - :white_check_mark: Lors de la première itération on échange les valeurs d'indices $0$ et $1$
        - :white_check_mark: Lors de la première itération on insère le minimum, a valeur $1$, à sa place correcte à gauche
        - :white_check_mark: C'est juste, voir les deux premières questions

{{exercice(titre="Quel tri ?")}}

    On considère le tableau $[6,\,1,\,4,\,5,\,2,\,3]$.
    Après la première itération d'un tri, on a obtenu le tableau : $[1,\,6,\,4,\,5,\,2,\,3]$.
    Après la deuxième itération du tri :

    === "Cocher la ou les affirmations correctes"

        - [ ] par sélection, on obtient le tableau : $[1,\,2,\,6,\,4,\,5,\,3]$
        - [ ] par sélection, on obtient le tableau : $[1,\,2,\,4,\,5,\,6,\,3]$
        - [ ] par insertion, on obtient le tableau : $[1,\,4,\,6,\,5,\,2,\,3]$
        - [ ] par insertion, on obtient le tableau : $[1,\,2,\,4,\,5,\,3,\,6]$

    === "Solution"

        - :x: On sélectionne la valeur minimale, le $2$ à l'indice $4$ et on l'échange avec le $6$ à l'indice $1$
        - :white_check_mark: Voir réponse ci-dessus
        - :white_check_mark: On insère la valeur d'indice $2$ au bon endroit
        - :x: Voir réponse ci-dessus

{{exercice(titre="Quel tri ?")}}

    On considère le tableau $[5,\,4,\,3,\,2,\,1]$.

    Après deux itérations :

    === "Cocher la ou les affirmations correctes"

        - [ ] du tri par sélection on obtient le tableau : $[1,\,2,\,3,\,4,\,5]$
        - [ ] du tri par sélection on obtient le tableau : $[1,\,2,\,5,\,4,\,3]$
        - [ ] du tri par insertion on obtient le tableau : $[3,\,4,\,5,\,2,\,1]$
        - [ ] du tri par insertion on obtient le tableau : $[1,\,2,\,3,\,5,\,4]$

    === "Solution"

        - :white_check_mark: étape 1 :  $[1,\,4,\,3,\,2,\,5]$, étape 2 :  $[1,\,2,\,3,\,4,\,5]$
        - :x:
        - :white_check_mark: étape 1 :  $[4,\,5,\,3,\,2,\,1]$, étape 2 :  $[3,\,4,\,5,\,2,\,1]$
        - :x:

{{exercice(titre="Quel tri ?")}}

    On considère les fonctions suivantes dont certaines sont incorrectes.

    ```python
    def tri_A(tableau):
        for i in range(len(tableau) - 1):
            i_mini = i
            for j in range(i + 1, len(tableau)):
                if tableau[j] < tableau[i_mini]:
                    i_mini = j
            tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]

    def tri_B(tableau):
        for i in range(len(tableau) - 1):
            i_mini = i
            for j in range(i + 1, len(tableau) - 1):
                if tableau[j] < tableau[i_mini]:
                    i_mini = j
            tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]

    def tri_C(tableau):
        for i in range(1, len(tableau)):
            valeur_a_inserer = tableau[i]
            j = i
            while j > 0 and tableau[j - 1] > valeur_a_inserer:
                tableau[j] = tableau[j - 1]
                j = j + 1 
            tableau[j] = valeur_a_inserer

    def tri_D(tableau):
        for i in range(1, len(tableau)):
            valeur_a_inserer = tableau[i]
            j = i
            while j > 0 and tableau[j - 1] > valeur_a_inserer:
                tableau[j] = tableau[j - 1]
                j = j - 1
            tableau[j] = valeur_a_inserer
    ```

    === "Cocher la ou les affirmations correctes"

        - [ ] La fonction `tri_A` met en œuvre un tri par sélection
        - [ ] La fonction `tri_A` met en œuvre un tri par insertion
        - [ ] La fonction `tri_B` met en œuvre un tri par sélection
        - [ ] La fonction `tri_B` met en œuvre un tri par insertion
        - [ ] La fonction `tri_C` met en œuvre un tri par sélection
        - [ ] La fonction `tri_C` met en œuvre un tri par insertion
        - [ ] La fonction `tri_D` met en œuvre un tri par sélection
        - [ ] La fonction `tri_D` met en œuvre un tri par insertion

    === "Solution"

        - :white_check_mark:
        - :x:
        - :x: Il faudrait `for j in range(i + 1, len(tableau)):` pour lire la dernière valeur du tableau
        - :x:
        - :x:
        - :x: Il faudrait `j = j - 1` car on prend la valeur se trouvant à gauche pour la décaler vers la droite
        - :x:
        - :white_check_mark:


{{exercice(titre="Coût des algorithmes")}}

    On étudie les coûts des algorithmes en fonction de la longueur des données et dans le pire des cas.

    === "Cocher la ou les affirmations correctes"

        - [ ] Le coût du tri par sélection est linéaire
        - [ ] Le coût du tri par sélection est logarithmique
        - [ ] Le coût du tri par sélection est quadratique
        - [ ] Pour une entrée de grande taille, un algorithme de coût linéaire est plus avantageux qu'un algorithme de coût logarithmique
        - [ ] Pour une entrée de grande taille, un algorithme de coût logarithmique est plus avantageux qu'un algorithme de coût quadratique


    === "Solution"

        - :x:
        - :x:
        - :white_check_mark:
        - :x:
        - :white_check_mark:

{{exercice(titre="Combien d'échanges ?")}}

    On considère la fonction suivante triant un tableau. Le pire des cas de l'algorithme mis en œuvre est celui d'un tableau initialement trié dans l'ordre décroissant.

    Combien d'échanges sont effectués pour trier un tableau de taille $10$ dans le pire des cas ?

    ```python
    def tri(tab) :
        for i in range (1, len(tab)) :
            for j in range (len(tab) - i) :
                if tab[j] > tab[j + 1] :
                    tab[j], tab[j + 1] = tab[j + 1], tab[j]
    ```

    === "Cocher la réponse correcte"

        - [ ] $10$
        - [ ] $45$
        - [ ] $55$
        - [ ] $100$

    === "Solution"

        - :x:
        - :white_check_mark:
        - :x:
        - :x:

        Lors de la première itération de la boucle principale il y aura $9$ échanges, $8$ dans la suivante puis $7$, $6$, ... $1$.

        Au total il y aura donc $9+8+7+6+\dots+1=45$ échanges.

{{exercice(titre="Tri par sélection dans l'ordre décroissant")}}

    Compléter la fonction `#!py tri_selection_decr` prenant en argument un `#!py tableau` et le triant **en place** à l'aide du tri par sélection dans l'ordre décroissant.

    {{ IDE('scripts/selection_decr') }}


{{exercice(titre="Tri par insertion dans l'ordre décroissant")}}

    Compléter la fonction `#!py tri_insertion_decr` prenant en argument un `#!py tableau` et le triant **en place** à l'aide du tri par insertion dans l'ordre décroissant.

    {{ IDE('scripts/insertion_decr') }}


{{exercice(titre="Tri de couples de valeurs")}}

    Le secrétariat d'un collège souhaite établir la liste de ses élèves triée par niveau puis par ordre alphabétique.

    Il veut ainsi obtenir une liste dans laquelle :

    * on rencontre tout d'abord les élèves de 6ème puis ceux de 5ème, de 4ème et enfin ceux de 3ème,
    * au sein de chaque niveau, les élèves sont triés dans l'ordre alphabétique de leur nom.

    Chaque élève est décrit par un `#!py tuple` Python dans lequel la première valeur est le niveau dans lequel il est scolarisé (entier allant de `#!py 3` à `#!py 6`) et la seconde son nom (une chaîne de caractères).

    On se propose d'utiliser le **tri par sélection**.

    Par exemple :

    ```pycon
    >>> eleves = [
    ...     (4, "Targeur Samia"),
    ...     (5, "Blennie Aymeric"),
    ...     (5, "Alose Tom"),
    ...     (6, "Targeur Samir"),
    ... ]
    >>> tri_eleves(eleves)
    >>> eleves
    [(6, 'Targeur Samir'), (5, 'Alose Tom'), (5, 'Blennie Aymeric'), (4, 'Targeur Samia')]
    ```

    On rappelle que Python trie nativement les chaînes de caractères dans l'ordre lexicographique :

    ```pycon
    >>> "Alose Tom" < "Blennie Aymeric"
    True
    >>> "Targeur Samia" > "Targeur Samir"
    False
    ```

    Compléter les fonctions `#!py indice_minimum_depuis` et `#!py tri_eleves` ci-dessous afin d'effectuer le tri souhaité à l'aide du tri par sélection.

    {{ IDE('scripts/selection_couples') }}

