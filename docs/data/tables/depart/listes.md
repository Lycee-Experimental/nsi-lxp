# 🏁 Rappels sur les listes Python

!!! note "Remarque"

    Cette page rappelle rapidement les outils fondamentaux sur les listes Python.

    Il ne s'agit pas d'un cours exhaustif sur ce thème.

## Présentation

Les listes sont des structures de données linéaires : des **valeurs** stockée dans un certain **ordre**.

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

??? question "Manipulations élémentaires"

    Compléter le code ci-dessous afin d'effectuer les actions demandées. Au bout de 10 essais infructueux, le corrigé vous est proposé.

    {{ IDE('pythons/creation/exo', MAX=10) }}

??? question "Recherche d'indice - non guidé"

    Il s'agit de déterminer l'indice de la plus petite valeur dans une liste non-vide.

    [Indice du minimum d'un tableau](https://e-nsi.forge.aeif.fr/pratique/N1/100-ind_min/sujet/){ .md-button target="_blank" rel="noopener" }

??? question "Recherche de valeur - non guidé"

    La recherche de la valeur maximale dans une liste. Classique.
    
    [Maximum](https://e-nsi.forge.aeif.fr/pratique/N1/110-maximum_nombres/sujet/){ .md-button target="_blank" rel="noopener" }

??? question "Modification d'un tableau - non guidé"

    On se donne un tableau, une valeur cible et une valeur de remplacement et il faut parcourir le tableau et remplacer la cible par la nouvelle valeur.

    [Remplacer une valeur](https://e-nsi.forge.aeif.fr/pratique/N1/100-remplacer/sujet/){ .md-button target="_blank" rel="noopener" }

