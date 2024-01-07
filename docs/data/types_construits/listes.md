# Les listes Python

!!! warning "Remarque"

    Cette page rappelle rapidement les outils fondamentaux sur les listes Python.

    Il ne s'agit pas d'un cours exhaustif sur ce thème.

## Présentation

Les listes sont des **structures de données linéaires** : des **valeurs** stockée dans un certain **ordre**.

Considérons par exemple les données suivantes présentant des informations sur un animal (nom, espèce, date de naissance) :

<table>
    <tr>
        <td style="border:1px solid; font-weight:bold;">Oli</td>
        <td style="border:1px solid; font-weight:bold;">Chat</td>
        <td style="border:1px solid; font-weight:bold;">10</td>
        <td style="border:1px solid; font-weight:bold;">juin</td>
        <td style="border:1px solid; font-weight:bold;">2018</td>
    </tr>
</table>

Ces données sont organisées en colonnes :

* la première contient le nom,
* la deuxième son espèce,
* la troisième son jour de naissance,
* *etc*

Ces données peuvent être représentées dans un objet Python de type `#!py list` :

```python
# indices     0       1   2       3     4
animal = ["Oli", "Chat", 10, "juin", 2018]
```

Dans ce cadre on distingue les indices et les valeurs des éléments :

* l'indice correspond à la position de l'élément dans la liste (un peu comme le numéro de la colonne),

* la valeur est le contenu à proprement parler.

!!! danger "Attention"

    En Python comme dans bien d'autres langages informatiques, les indices débutent à `#!py 0`.

Notons immédiatement que, dans une liste,  les valeurs peuvent être de types variés : ici des chaînes de caractères (`#!py str`) et des entiers (`#!py int`).

## Utilisation

On rappelle les opérations suivantes sur les listes :

??? tip "Création"

    * Création d'une liste vide :

    ```python
    vide = [ ]
    ```
    
    * Création d'une liste « à la main » :

    ```python
    animal = ["Oli", "Chat", 10, "juin", 2018]
    ```

    * Création d'une liste contenant plusieurs fois la même valeur :
    
    ```python
    mille_None = [None] * 1000
    ```

??? tip "Longueur"

    * La longueur d'une liste est données par la fonction `#!py len`:

    ```pycon
    >>> repertoire = ["Clarissa", "Dalloway", 14, "May", 1925]
    >>> len(repertoire)
    5
    ```

??? tip "Lecture de valeur"

    Les valeurs sont repérées par leur indice (la première est à l'indice `#!py 0`).
  
    * On accède à une valeur en utilisant des **crochets** :

    ```pycon
    >>> repertoire = ["Clarissa", "Dalloway", 14, "May", 1925]
    >>> repertoire[0]
    'Clarissa'
    >>> repertoire[2]
    14
    ```

    * La dernière valeur est à l'indice `#!py len(repertoire) - 1` :

    ```pycon
    >>> repertoire[len(repertoire) - 1]
    1925
    ```

    * Python autorise les indices négatifs : la dernière valeur a pour indice `#!py -1`, l'avant-dernière `#!py -2`, *etc*
    
    ```pycon
    >>> repertoire[-1]
    1925
    >>> repertoire[-2]
    'May'
    ```

??? tip "Modification de valeur"

    * On modifie des valeurs avec une simple affectation :
  
    ```pycon
    >>> animaux = ["éléfants", "girafes", "chevals"]
    >>> animaux[0] = "éléphants"
    >>> animaux[2] = "chevaux"
    >>> animaux
    ['éléphants', 'girafes', 'chevaux']
    ```

??? tip "Parcours"

    On considère la liste `#!py animaux = ['éléphants', 'girafes', 'chevaux']`

    * Parcours selon les **indices** :
  
    ```pycon
    >>> for i in range(len(animaux)):
            print("Indice :",i, "; Valeur :", animaux[i])
    Indice : 0 ; Valeur : 'éléphants'
    Indice : 1 ; Valeur : 'girafes'
    Indice : 2 ; Valeur : 'chevaux'
    ```

    * Les parcours selon les **valeurs** :
  
    ```pycon
    >>> for animal in animaux:
            print(animal)
    'éléphants'
    'girafes'
    'chevaux'
    ```

??? tip "Ajout d'éléments"

    On peut ajouter des éléments à la fin d'une liste en utilisant `#!py append` :

    ```pycon
    >>> conjonctions = ["mais", "ou", "et", "donc", "or"]
    >>> conjonctions.append("ni")
    >>> conjonctions.append("car")
    >>> conjonctions
    ['mais', 'ou', 'et', 'donc', 'or', 'ni', 'car']
    ```

## Exercices

{{exercice(1,titre="Manipulations élémentaires")}}
    Compléter le code ci-dessous afin d'effectuer les actions demandées. Au bout de 10 essais infructueux, le corrigé vous est proposé.

    {{ IDE('pythons/creation/exo', MAX=10) }}


{{exercice(titre="Recherche d'indice")}}
    Écrire une fonction `indice_min` qui prend en paramètre un tableau **non vide** de nombres et qui renvoie l'indice de la première occurrence du minimum de ce tableau.

    > - Les tableaux seront représentés sous forme de liste Python.
    > - On n'utilisera pas les fonctions `min` et `index`.

    ???+ example "Exemples"

        ```pycon
        >>> indice_min([5])
        0
        >>> indice_min([2, 4, 1, 1])
        2
        >>> indice_min([5, 3, 2, 5, 2])
        2
        ```

    {{ IDE('pythons/ind_min/exo', SANS="min, index") }}


{{exercice(titre="Recherche de valeur")}}
    Écrire une fonction `maximum` :

    - prenant en paramètre une liste **non vide** de nombres : `nombres`
    - renvoyant le plus grand élément de cette liste.

    Chacun des nombres utilisés est de type `int` ou `float`.

    > :warning: On interdit ici d'utiliser `max`, ainsi que `sort` ou `sorted`.

    ???+ example "Exemples"

        ```pycon
        >>> maximum([98, 12, 104, 23, 131, 9])
        131
        >>> maximum([-27, 24, -3, 15])
        24
        ```

    {{ IDE('pythons/maximum_nombres/exo', SANS = "max, sorted, sort") }}

{{exercice(titre="Modification d'un tableau")}}
    Écrire la fonction `remplacer` prenant en argument :

    * une liste d'entiers `valeurs`
    * un entier `valeur_cible`
    * un entier `nouvelle_valeur`

    et renvoyant une **nouvelle** liste contenant les mêmes valeurs que `valeurs`, dans le même ordre, sauf `valeur_cible` qui a été remplacée par `nouvelle_valeur`. 

    **La liste passée en paramètre ne doit pas être modifiée**.

    ???+ example "Exemples"

        ```pycon
        >>> valeurs = [3, 8, 7]
        >>> remplacer(valeurs, 3, 0)
        [0, 8, 7]
        >>> valeurs
        [3, 8, 7]
        ```

        ```pycon
        >>> valeurs = [3, 8, 3, 5]
        >>> remplacer(valeurs, 3, 0)
        [0, 8, 0, 5]
        >>> valeurs
        [3, 8, 3, 5]
        ```

    {{ IDE('pythons/remplacer/exo') }}