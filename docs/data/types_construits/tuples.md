# Les tuples : `#!py mon_tuple=(2,3,4)`

!!! info "Définition"
    Les **tuples** (appelés **p-uplets** dans le programme officiel de NSI) sont une collection d'objets ordonnée mais **non modifiable** (syn. : immuables / immutables / non mutables).

!!! info "Syntaxe"

    Un tuple est contient des valeurs, séparées par des virgules, mais encadrée par des parenthèses, ( ) ce qui les différencie des listes.

    !!! example "Exemple"

        ```python
        tuple_1 = (2, 1, 7, 0) # tuple_1 est un tuple de nombres entiers
        tuple_2 = ("albert", "paul", "jacques") # tuple_2 est un tuple de `str`
        tuple_3 = ("1G4","NSI", 22, 13.7, True) # tuple_3 contient des éléments de différents types. 
        ma_liste = [2, 1, 7, 0] # ma_liste est une **liste** de nombres entiers
        ```

!!! info "Les types des tuples"

    Les tuples sont de **type tuple**.

!!! info "Indices"

    Les éléments d'un tuples sont indicés de la même façon que ceux d'une liste (indice **0** pour le premier élément).

!!! info "Les tuples sont immuables"

    !!! bug "Bug"

        Le code ci-dessous lèvera une exception TypeError 

        ```python
        mon_tuple = ("a", "b", "c")
        mon_tuple[1] = "e"
        ```

        On obtiendra en console, après exécution e ce code :

        ```pycon
        TypeError: 'tuple' object does not support item assignment
        ```

!!! info "Longueur"

    La fonction `len()` renvoie la longueur d'un tuple (comme pour les chaînes et les listes) :


!!! info "Parcours 💚"

    Ces codes sont à connaitre **sans aucune hésitation** (ils sont strictement identiques aux parcours d'une liste).

    ```python
    for i in range(len(mon_tuple)) :
        print(mon_tuple[i])
    ```

    ```python
    for element in mon_tuple :
        print(element)
    ```

!!! info "Conversion entre listes et tuples"

    Il est possible de transformer une liste en tuple, et inversement :

    ```python
    mon_tuple = (1, 2, 3)
    ma_liste = list(mon_tuple)  # ma_liste contient les mêmes éléments : [1, 2, 3]
    ```

    ```python
    ma_liste = [1, 2, 3]
    mon_tuple = tuple(ma_liste)  # mon_tuple contient les mêmes éléments : (1, 2, 3)
    ```

!!! info "Choisir la bonne structure"

    Il est préférable d'utiliser un tuple quand on veut regrouper des valeurs, et qu'on n'aura pas besoin de modifier les éléments ensuite. Les tuples étant immuables on ne risque pas, dans une partie du code, de modifier accidentellement les valeurs (ce qui, dans le cas d'une liste, peut très facilement arriver avec les effets de bords, que nous étudierons plus tard).

    !!! example "Exemple"

        * Je souhaite créer une liste de nombres, que je vais ensuite devoir trier dans l'ordre croissant : je choisi une liste.
        * Je souhaite créer une liste de mots constituant un dictionnaire. Je serais amené plus tard à ajouter des mots dans ma liste :  je choisi une liste.
        * Dans un code, je porte sur une carte des villes. Pour chaque ville, j'ai un nom et les coordonnées géographiques. Pour chaque ville je crée un  tuple (par exemple `ville_1 = ("Paris", "48°52'N", "2°19'E")`).
