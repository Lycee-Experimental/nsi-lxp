---
author: Nicolas Revéret
title: Dictionnaires
---
# 🏁 Les dictionnaires Python

!!! note "Remarque"

    Cette page rappelle rapidement les outils fondamentaux sur les dictionnaires Python.

    Il ne s'agit pas d'un cours exhaustif sur ce thème.

## Présentation

Un dictionnaire Python est une structure de données organisée sous forme de couples `#!py clé : valeur`.

Contrairement aux listes dans lesquelles les valeurs sont identifiées par leur indice, dans un dictionnaire, une **valeur** est associée à une **clé**. Ces clés peuvent être des entiers, des chaînes de carcactères, des tuples...

Considérons par exemple le dictionnaire suivant qui contient les dates de naissances de *Roméo* et *Juliette* :

```python
naissances= {
    "Roméo": 20040517,
    "Juliette": 20040417
}
```

`#!py "Roméo"` et `#!py "Juliette"` sont les clés du dictionnaire, `#!py 20040517` et `#!py 20040417` les valeurs associées.

??? danger "Des clés *immuables* ?"

    Lors de la construction d'un dictionnaire, Python associe à chaque clé une valeur précise. Cette association repose sur le fait que la clé ne va pas évoluer au fil de l'exécution du programme. Si c'était le cas, l'association deviendrait caduque dès que la clé est modifiée.

    Les clés des dictionnaires Python doivent donc être des objets non modifiables, *immuables*.

    Retenons pour faire simple qu'une liste ne **peut pas** être utilisée comme clé d'un dictionnaire (car on peut la modifier au fil du programme).

## Utilisation

On rappelle les opérations suivantes sur les dictionnaires :

??? tip "Création"

    * Création d'un dictionnaire vide :

    ```python
    vide = { }
    ```
    
    * Création d'un dictionnaire « à la main » :

    ```python
    animal = {"nom": "Oli","espèce": "Chat","jour": 10,"mois": "juin","année": 2020}
    ```

??? tip "Lecture de valeur"

    Les valeurs sont identifiées par leur clé. On accède à une valeur en utilisant des **crochets** :

    ```pycon
    >>> repertoire = {"firstname": "Clarissa","lastname": "Dalloway","day": 14,"month": "May","year": 1925}
    >>> repertoire["firstname"]
    'Clarissa'
    >>> repertoire["day"]
    14
    ```

??? tip "Modification de valeur"

    * On modifie ou l'on ajoute des valeurs avec une simple affectation :
  
    ```pycon
    >>> echiquier = {(0, 0): "Roi blanc", (5, 1): "Roi noir"}
    >>> echiquier[(0, 0)] = None
    >>> echiquier[(0, 1)] = "Roi blanc"
    >>> echiquier
    {(0, 0): None, (5, 1): 'Roi noir', (0, 1): 'Roi blanc'}
    ```

## Exercices

??? question "QCM"

    On considère le dictionnaire ci-dessous décrivant une liste de courses :

    ```python
    courses = {
        "pommes": 1.5,
        "huile": "une bouteille d'huile d'olive",
        "légumes" : {"poireaux": (1, "kg"), "potimarron": (5, "unité")}
    }
    ```

    Cochez la ou les bonnes réponses :

    === "Propositions"
        
        - [ ] Le dictionnaire `#!py courses` contient cinq couples `#!py (clé: valeur)`
        - [ ] `#!py "huile"` est une clé
        - [ ] `#!py "légumes"` est une valeur
        - [ ] `#!py courses[1.5]` vaut `#!py "pommes"`
        - [ ] On accède à la quantité de poireaux en faisant `#!py courses["poireaux"][0]`

    === "Solution"
        
        - :x: Le dictionnaire `#!py courses` ne contient que trois clés : `#!py "pommes"`, `#!py "huile"` et `#!py "légumes"`
        -  :white_check_mark: `#!py "huile"` est une clé
        - :x: `#!py "légumes"` est une clé
        - :x: `#!py courses[1.5]` lève une erreur car `#!py 1.5` n'est pas une clé
        - :x: On accède à la quantité de poireaux en faisant `#!py courses["légumes"]["poireaux"][0]`

??? question "Départements"

    On fournit ci-dessous le dictionnaire dont les clés sont les noms des départements français et les valeurs, la superficie en km² de chacun d'eux.

    ```python
    departements = {
        "Ain": 5762,
        "Aisne": 7362,
        ...
        "Guyane": 83534,
        "La Réunion": 2504,
    }
    ```

    Ces valeurs sont déjà chargées en mémoire et n'apparaissent donc pas dans l'éditeur.

    Il est possible de parcourir les dictionnaires afin de créer des listes en compréhension. Par exemple `#!py [departements[nom] for nom in departements]` renvoie la liste contenant la surface de chaque département.

    Compléter le code ci-dessous afin d'effectuer les requêtes demandées. L'ordre des résultat au sein de chaque liste n'est pas important.

    {{ IDE('/pythons/departements/exo', MAX=10)}}