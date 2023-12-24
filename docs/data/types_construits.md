# Représentation des données : types construits


??? conclu "Programme"
    À partir des types de base se constituent des types construits, qui sont introduits au fur et à mesure qu’ils sont nécessaires.  
    Il s’agit de présenter tour à tour les **p-uplets (tuples)**, les enregistrements qui collectent des valeurs de types différents dans des champs nommés et les tableaux qui permettent un accès calculé direct aux éléments. En pratique, on utilise les appellations de Python, qui peuvent être différentes de celles d’autres langages de programmation.

    |Notions|Compétences|Remarques|
    |--|--|--|
    |p-uplets.<br>p-uplets nommés | Écrire une fonction renvoyant un p-uplet de valeurs.||
    Tableau indexé, tableau donné en compréhension. | Lire et modifier les éléments
    d’un tableau grâce à leurs index.Construire un tableau par compréhension. <br> Utiliser des tableaux de tableaux pour représenter des matrices : notation a [i] [j].<br> Itérer sur les éléments d’un tableau. | Seuls les tableaux dont les éléments sont du même type sont présentés. <br> Aucune connaissance des tranches (slices) n’est exigible. <br> L’aspect dynamique des tableaux de Python n’est pas évoqué.<br>
    Python identifie listes et tableaux.<br> Il n’est pas fait référence aux tableaux de la bibliothèque NumPy.
    Dictionnaires par clés et valeurs | Construire une entrée de dictionnaire. <br> Itérer sur les éléments d’un dictionnaire. | Il est possible de présenter les données EXIF d’une image sous la forme d’un enregistrement.<br> En Python, les p-uplets nommés sont implémentés par des dictionnaires.<br>Utiliser les méthodes keys(), values () et items ().



??? abstract "Les tuples : `mon_tuple=(2,3,4)`"

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


??? abstract "Les listes : `ma_liste=[2,3,4]`"

    !!! abstract "Les tableaux"

        En informatique un **tableau** :
        
        - est une structure de données linéaire dans laquelle des **éléments** sont repérés par leur **indice**,
    
        - contient des éléments de même type,
    
        - est de taille *fixe*.

    !!! abstract "Listes Python et indices"

        En Python on utilise le type `#!py list` pour représenter les tableaux.

        On peut **accéder** à un élément en faisant `#!py tableau[indice]`.

        Important : le premier élément d'un tableau correspond à l'indice 0.

        Par exemple : pour `notes = [18, 15, 16]` on accède à la note 18 avec `notes[0]`, et à la note 15 avec `notes[1]`
        
        On peut **modifier** un élément en faisant `#!py tableau[indice] = nouvel_element`.

        La **longueur** du tableau est donnée par `#!py len(tableau)`.


    !!! abstract "Parcours de listes"

        Python permet de parcourir les tableaux, comme `#!py neveux = ["Riri", "Fifi", "Loulou"]` :

        * selon les indices :

            ```pythonon
            for i in range(len(neveux)):
                print("L'élément d'indice", i, "est", neveux[i])
            ```

            Ce script produira l'affichage suivant en console :

            ```pycon
            L'élément d'indice 0 est Riri
            L'élément d'indice 1 est Fifi
            L'élément d'indice 2 est Loulou
            >>>
            ```
        
        * selon les valeurs :

            ```python
            for neveu in neveux:
                print(neveu, "est un élément")
            ```
            Ce script produira l'affichage suivant en console :

            ```pycon
            Riri est un élément
            Fifi est un élément
            Loulou est un élément
            >>>
            ```

    !!! abstract "Échanger des valeurs"

        Pour échanger des valeurs d'un `tableau`, on peut :

        * utiliser une variable tierce :

            ```python
            temporaire = tableau[i]
            tableau[i] = tableau[j]
            tableau[j] = temporaire
            ```
        
        * utiliser l'affectation multiple qui se fait de façon **simultanée**:
            
            ```python
            tableau[i], tableau[j] = tableau[j], tableau[i]
            ```

    !!! abstract "Liste en compréhension"

        ```pycon
        >>> liste_1 = [9*i for i in range (1, 11)]
        >>> liste_1
        [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
        >>> liste_2 = [9*i for i in range (1, 11) if 9*i % 2 == 0]
        >>> liste_2
        [18, 36, 54, 72, 90]
        ```

    !!! abstract "Listes de listes"

        ```pycon
        >>> ma_matrice = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]
        >>> ma_matrice[1]
        ['d', 'e', 'f']
        >>> ma_matrice[1][0]
        'd'
        ```




??? abstract "Les dictionnaires : `dico = {'key': value}`"
    !!! info "`mon_dico`"

        On appelle `mon_dico` le dictionnaire qui servira pour expliquer les syntaxes.

    !!! abstract "Ajouts de couples (clé, valeur)"

        Il suffit de faire une nouvelle affectation : `mon_dico[cle] = nouvelle_valeur`


    !!! abstract "Appartenance d'une clé dans un dictionnaire"

        * `cle in mon_dico` renvoie `True` si la clé `cle` existe dans `mon_dico` et `False` sinon.  
        * `cle not in mon_dico` renvoie `True` si la clé `cle` n'existe pas dans `mon_dico` et `False` sinon. 


    !!! abstract "Accéder à une valeur"

        `mon_dico[cle]` renvoie la valeur associée à `cle` si elle est présente dans le dictionnaire, sinon une erreur `KeyError` se produit.
        

    !!! abstract "Modifier une valeur"
    
        Il suffit de faire une nouvelle affectation : `mon_dico[cle] = nouvelle_valeur`


    !!! abstract "Supprimer une valeur"

        Soit `valeur` la valeur associée à `cle`.

        * `del mon_dico[cle]` supprime le couple (`cle`, `valeur`) de `mon_dico`.
        * `mon_dico.pop(cle)` supprime le couple (`cle`, `valeur`) de `mon_dico` et renvoie la valeur correspondante.
        
    !!! abstract "Ajouter un couple (`cle`, `valeur`)"

        Soit `valeur` la valeur que l'on souhaite associer à `cle`.  

        * Si la clé existe déjà `mon_dico[cle] = valeur` modifie la valeur associée,
        * sinon `mon_dico[cle] = valeur` ajoute la paire (`cle`, `valeur`)
        

    !!! abstract "Longueur d'un dictionnaire"

        `len(mon_dico)` renvoie le nombre de couple (`cle`, `valeur`) du dictionnaire.


    !!! abstract "Parcourir un dictionnaire"

        Le parcours avec la boucle `for element in mon_dico` permet de parcourir les clés de `mon_dico`


    !!! abstract  "Utiliser les méthodes `keys`, `values` et `items`"

        On peut parcourir les vues créées par ces méthodes, de façon analogue à ce que l'on ferait avec d'autres séquences comme des listes :
        
        * `mon_dico.keys()` permet d'accéder à toutes les clés de `mon_dico`
        * `mon_dico.values()` permet d'accéder à toutes les valeurs de `mon_dico`
        * `mon_dico.items()` permet d'accéder à tous les couples (clé, valeur) de `mon_dico`
        

    !!! abstract  "obtenir des listes de clés, valeurs, paires (clé, valeur)"

        On peut créer les listes de clés, de valeurs ou de couples (clé, valeur) :
        
        * `list(mon_dico.keys())` permet d'obtenir une liste des clés de `mon_dico`
        * `list(mon_dico.values())` permet d'obtenir une liste des valeurs de `mon_dico`
        * `list(mon_dico.items())` permet d'obtenir une liste des tuples (clé, valeur) de `mon_dico`
