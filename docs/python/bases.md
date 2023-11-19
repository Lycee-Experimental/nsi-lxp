# Les bases du langage Python


!!! warning "Attention, ceci n'est pas un cours."
    Cette page ne se substitue pas à un cours de programmation python, ni à l'entraînement que nécessite l'apprentissage d'un nouveau langage.

    Pour apprendre et pratiquer Python, rendez vous sur le site [FutureCoder.io](https://fr.futurecoder.io).

    La suite de cette page constitue un **aide-mémoire** sur les notions au programme de la spé NSI au niveau 1ère.

??? note "Variables : `ma_variable = 49`"
    ??? info "Affectation"

        Une affectation est une instruction de type : 

        `ma_variable = expression`

        L'expression **à  droite** du `=` est d'abord évaluée, puis le résultat est écrit en mémoire, et le nom de la variable permet de réutiliser cette valeur.

    ??? info "Expression"

        Une expression n'est pas à proprement parler une instruction, c'est quelque chose que python peut évaluer (c'est-à-dire donner sa valeur) : 

        Par exemple, dans : `var = expression`, `expression` peut-être : un nombre, un calcul, une chaîne de caractères, un booléen ou des opérations plus complexes que nous verrons plus tard.

    ??? info "Expression booléenne"

        Par exemple : `a == 3` est une expression booléenne.

        Donc l'instruction : `b = a == 3` est l’affectation  à la variable `b` du résultat de l'expression booléenne `a == 3`.


    ??? info "Échange de valeurs entre deux variables"

        Nous désirons échanger le contenu des variables `a` et `b`

        === "Avec une variable temporaire" 

            ```python
            a = valeur_de_a
            b = valeur_de_b
            # problème : échanger les deux valeurs
            temp = valeur_de_a
            a = valeur_de_b
            b = temp
            ```

        === "💡En utilisant des paires de variables💡"
            👉  Il est aisé, en python, de faire cet échange de façon très simple
            

            ```python
            a, b = b, a
            ```


    ??? info "Dérouler un code"
        !!! warning "Lire et comprendre "

            Pour lire et comprendre ce que fait un code, il faut souvent écrire **sur une feuille** le déroulé de ce code.

        !!! example "Exemple"

            Considérons ce code : 

            ```python linenums='1'
            a = 1
            b = 3
            c = a + b
            ```

            On peut décrire le déroulement du code en faisant un tableau.

            |n° ligne|a|b|c|
            |:--|:--|:--|:--|
            |1|1| | | 
            |2|1| 3| |
            |2|1| 3| 4|


??? note "Types de base : `int`,`float`,`str`,`bool`"
    |Type|Description|Exemples
    |:--|:--|:--|
    |`int`|Les nombres entiers|`ma_variable = 3`|
    |`float`|Les nombres à virgule|`ma_variable = 2.5`|
    |`str`|Les chaînes de caractères|`ma_variable = "NSI"`|
    |`bool`|Les booléens|`ma_variable = True`|

    !!! warning "Les flottants"

        1 est un entier, et 1.0 est un `float`. Ils sont égaux (ces deux écritures représentent la même valeur) mais pas identiques :

        ```pycon
        >>> 1 == 1.0
        True
        >>> 1 is 1.0
        False
        >>> type(1)
        <class 'int'>
        >>> type(1.0)
        <class 'float'>
        ```

    !!! info "Remarque"

        Il existe également des types plus complexes de données structurées comme les `tuple`, les `list`, et le type dictionnaire `dict`.


    ??? note "Conversion d'un type à un autre : les transtypages"

        * On peut convertir des `float` en `int`, ou inversement. 

        * On peut également convertir des chaînes `str` en `int` ou en `float` mais seulement si la chaîne contient un nombre compréhensible.

        ```python
        a = int(1.23)   # a vaudra 1
        a = float(1)    # a vaudra 1.0
        a = int("12")   # a vaudra 12 car on a converti la chaine "12" en entier qui vaut 12
        chaine = str(3) # chaine vaudra "3" car on a converti l'entier 3 en str
        ```

        😰 **Mais**

        ```python
        a = int("douze")  # TValueError : int ne sait pas interpréter douze comme un nombre               
        a = int("12.3")   # ValueError : idem, int ne sait pas interpréter 12.3 comme un entier
        a = int("1.0")    # ValueError : idem, int ne sait pas interpréter 1.0 comme un entier
        ```


??? note "Opérateurs : `+`,`-`,`*`,`**`,`/`,`%`,`//`,`or`,`and`,`not`,`==`,`<=`,`!=`"

    !!! info "Opérateur"

        Lorsque l'on fait une opération, on applique un **opérateur** sur un ou plusieurs **opérandes**

        !!! example "`2 + 3`"

            `2 + 3` : l'opérateur est **`+`**, signe de l'addition. Il y a 2 opérandes qui sont **2** et **3**.

    !!! info "Opérandes"

        Lorsqu' il y a deux opérandes, on parle d’opérateurs binaires.
    
        Les opérandes ne sont pas toujours des nombres, ce peut être des `int`, des `float` des `str` ou des `bool`, mais on fait aussi des opérations plus complexes sur d'autres objets .

    === "Opérateurs avec les nombres"

        |Opérations|	Symboles|	Exemples|
        |:--|:--:|:--|
        |addition|	`+`	|`2 + 5` donne 7|
        |soustraction|	`-`	|`8 - 2` donne 6|
        |multiplication	|`*`	|`6 * 7` donne 42|
        |exponentiation (puissance)|	`**`|	`5 ** 3` donne 125|
        |division	|`/`	|`7 / 2` donne 3.5|
        |reste de division entière|	`%`|	`7 % 3` donne 1|
        |quotient de division entière|	`//`|	`7 // 3` donne 2|

        !!! info "modulo (`%`) et division entière (`//`)"

            * L'opérateur modulo donne le **reste** de la division euclidienne.   
            $7=2 \times 3 + 1$ donc `7 % 3` donne 1

            * L'opérateur division entière donne le **quotient**.  
            $7=2 \times 3 + 1$ donc `7 // 3` donne 2


        !!! example "Exemples"

            17 divisé par 8 : "il y va deux fois" et il reste 1. ($17 = 2 \times 8 +1$)  
            👉 `17 % 8` vaut 1  
            👉 `17 // 8` vaut 2

            Alors que : `17 / 8` vaut 2.125

        !!! info "Exponentiation"

            L'exponentiation (`**`) est aussi appelée puissance.

            L'opérateur `**` se lit puissance (c'est l'exponentiation) 

            Exemple :  `3**2` vaut 9

    === "Opérateurs avec les chaînes de caractères"
        |opérande1|	opérateur|	opérande2	|nom de l'opération|	exemple|	résultat|
        |:--:|:--:|:--:|:--|:--|:--|
        |str	|+	|str|	concaténation	|`"bon" + "jour"`|	`"bonjour"`|
        |str|	`*`|	int|	répétition|	`"Aie" * 3`	|`"AieAieAie"`|
        |int|	`*`|	str	|répétition|	`3 * "Aie"`|	`"AieAieAie"`|
        |str|	in	|str|	est dans|	`"a" in "blabla"`|	`True`|
        |str|	in	|str|	est dans|	`"e" in "blabla"`	|`False`|


    === "Opérateurs booléens" 

        ??? note "Opérateurs booléens"
            | nom de l'opération|	syntaxe python|
            NON | not |
            OU | or |
            ET | and |

            !!! warning "Attention aux priorités"

                Le `and` est prioritaire sur le `or` . De même, `not` est prioritaire sur les autres opérations.

                !!! example "Example"
                    ```pycon
                    >>> not False and False
                    False
                    >>> not (False and False)
                    False
                    >>> (not False) and False
                    True
                    ```

        ??? note "Expressions booléennes"
            | nom de l'opération|	syntaxe python|
            Égalité | `==`
            Inégalités | `<`,`>`,`<=`,`>=` |
            Différence | `!=` |
            
            !!! warning "Python paresseux"
                Lorsque Python évalue une expression booléenne, il le fait de façon paresseuse. C’est à dire que si la partie gauche d’un or est vraie, il n’évalue pas la partie droite. De même si la partie gauche d’un and est fausse, la partie droite n’est pas évaluée.

            !!! example "Tester les évaluations paresseuses"
                ```pycon
                >>> x = 0
                >>> x == 0 or 0 < 1/x < 1
                True
                >>> x !=0 and 0 < 1/x < 1
                False
                ```

??? note "Données structurées : `tuple`, `list`, `dict`"

    === "Les listes : `ma_liste=[2,3,4]`"

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

    === "Les tuples : `mon_tuple=(2,3,4)`"

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

            Ces codes sont à connaître **sans aucune hésitation** (ils sont strictement identiques aux parcours d'une liste).

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

            Il est préférable d'utiliser un tuple quand on veut regrouper des valeurs, et qu'on n'aura pas besoin de modifier les éléments ensuite. Les tuples étant immuables on ne risque pas, dans une partie du code, de modifier accidentellement les valeurs (ce qui, dans le cas d'une liste, peut très facilement arriver avec les **effets de bords**, que nous étudierons plus tard).

            !!! example "Exemple"

                * Je souhaite créer une liste de nombres, que je vais ensuite devoir trier dans l'ordre croissant : je choisi une liste.
                * Je souhaite créer une liste de mots constituant un dictionnaire. Je serais amené plus tard à ajouter des mots dans ma liste :  je choisi une liste.
                * Dans un code, je porte sur une carte des villes. Pour chaque ville, j'ai un nom et les coordonnées géographiques. Pour chaque ville je crée un  tuple (par exemple `ville_1 = ("Paris", "48°52'N", "2°19'E")`).


    === "Les dictionnaires : `dico = {'key': value}`"
        !!! info "`mon_dico`"

            On appelle `mon_dico` le dictionnaire qui servira pour expliquer les syntaxes.

        !!! abstract "Ajouts de couples (clé, valeur)"

            Il suffit de faire une nouvelle affectation : `mon_dico[cle] = nouvelle_valeur`


        !!! abstract "Appartenance d'une clé dans un dictionnaire : `in`"

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



??? note "Instructions conditionnelles `if ... elif ... else:`"
    Des instructions sont réalisée à la condition qu'une expression booléennes soit vraie (`if`), ou à l'inverse (`else`).

    ??? abstract "`if ... (else) :`"

        👉 L'instructions `else` n'est pas obligatoire.  
        
        ```python
        # Avec seulement if
        if condition :
            bloc d'instructions à réaliser
        ```

        ```python
        # Avec if et else
        if condition :
            bloc d'instructions à réaliser
        else:
            autre bloc d'instructions à réaliser
        ```


    ??? abstract "`if ... elif ... else :`"

        👉 L'instruction `else` n'est pas obligatoire.  
        
        ```python
        # Avec seulement if et elif
        if condition :
            bloc d'instructions à réaliser
        elif autre condition:
            autre bloc d'instructions à réaliser
        ```

        ```python
        # Avec if ... elif ... else
        if condition :
            bloc d'instructions à réaliser
        elif autre condition:
            autre bloc d'instructions à réaliser
        else:
            encore un autre bloc d'instructions à réaliser
        ```



??? note "Boucles `for` et `while`"

    === "for"

        ??? info "Syntaxe et utilisation"
            
            * La boucle `for ... in ... :` s'utilise lorsque :
                * on veut parcourir un à un les éléments d'un objet itérable (une chaîne de caractère, une liste, un tuple, un dictionnaire...)
                * on veut répéter une action un nombre de fois connu à l'avance. On parle de boucle bornée.

            * Les instructions répétées peuvent **_mais ce n'est pas obligatoire_** faire appel à la variable de boucle, mais il ne faut pas que ces instructions la modifient.

            * Ne pas oublier les **`:`** et l'**indentation** !

            * `range(n)` génère une séquence de `n` nombres entiers: on s'en servira dès qu'on aura besoin de répéter `n` fois des instructions.


        ??? abstract "`for i in range(n)`"

            * `i` prend toutes les valeurs entières de `[0; n[`
            * `i` prend donc `n` valeurs différentes de 0 à `n` - 1.

            !!! example "Exemple"

                ```pycon
                >>>for i in range(3):
                >>>    print(i)
                >>>
                0
                1
                2
                >>>
                ```
                
        ??? abstract "`for i in range(a, b)`"

            * `i` prend toutes les valeurs entières de `[a; b[`.
            * `i` prend donc `b` - `a` valeurs différentes de `a` à `b` - 1.

            !!! example "Exemple"

                ```pycon
                >>>for i in range(3, 7):
                >>>    print(i)
                >>>
                3
                4
                5
                6
                >>> 
                ```

        ??? abstract "`for i in range(a, b, pas)`"

            * `i` prend les valeurs entières de `[a; b[` en commençant à `a`, puis tous les `pas`.

            !!! example "Exemple"

                ```pycon
                >>>for i in range(3, 9, 2):
                >>>    print(i)
                >>>
                3
                5
                7
                >>> 
                ```



    === "while"
        ??? info "Syntaxe"

            ```python
            while condition:
                instructions  # (1)
            ```

            1. bloc d’instructions qui sera exécuté **tant que** `condition` est `True`.


        ??? info "Utilisation"

            La boucle `while` est **non bornée**, utile seulement si on ne sait pas combien de fois un boc sera répété. 

            Elle est utilisée pour traiter des problèmes tels que :  
            > 👉 Faire quelque chose tant qu'une condition est vraie


        ??? warning "Ne pas en abuser"

            Le code ci-dessous, pour afficher les entiers de 0 à `n` est correct mais **à éviter** :

            ```python
            i = 0
            while i < n + 1 :
                print(i)
                i = i + 1
            ```

            Il y a un risque d'oublier d'incrémenter `i` dans la boucle... le code ne se terminerait pas (et c'est très agaçant).

            !!! tip "Boucle `for`"

                Quand on sait à l'avance combien de fois une boucle doit être exécutée, on utilise **de préférence** une boucle `for`.


        ??? info "Ou jusqu’à ce que ????"

            Le problème est parfois proposé de façon un peu différente : faire quelques chose jusqu'à ce que...  
            Par exemple, on demande un mot de passe, et on répète jusqu'à ce que le mot de passe soit le bon.
            Cet exemple est équivalent à celui-ci : 
            > On demande un mot de passe, et on répète  tant que ce n'est pas le bon.

            👉 Dans le 1er cas l'énoncé du problème indique la condition d'arrêt.
            
            👉 dans le second cas il indique la condition de continuation. 
            
            😊 A vous de reformuler avec la bonne condition...

        ??? info "Initialisation"

            Pour exécuter l'instruction `while condition` : il faut que la condition soit un booléen dont la valeur est définie.

            Dans l'exemple suivant, Pour évaluer l'expression `mot_de_passe != "123456"` il faut que la variable `mot_de_passe` ait été initialisée.

            ```python
            mot_de_passe = ""  # (1)
            while mot_de_passe != "123456" :
                mot_de_passe = input("Entrez le mot de passe : ")
            ```

            1. Initialisation de `mot_de_passe`

        ??? error "Les pièges"

            😰 Il est fréquent d'oublier une ligne de code, et d'écrire une boucle while qui ne se termine pas.

            ??? bug "Boucle **infinie**"

                ```python
                n = 0
                while n < 10 :
                    print(n)
                ```

                !!! info "Version correcte"

                    On incrémente `n` dans la boucle, `n` finira donc par atteindre la valeur d'arrêt :

                    ```python
                    n = 0
                    while n < 10 :
                        print(n)
                        n = n + 1
                    ```

            ??? bug "Ne **jamais entrer** dans la boucle"

                ```python
                a = 0
                while a > 10:
                    print("Bonjour !")  # (1)
                    a = a + 1

                print("Au revoir !")  # (2)
                ```

                1. Ce texte ne s'affichera jamais car on ne rentre pas dans la boucle `while`

                2. Il s'affichera directement ce texte.


        ??? INFO "Les drapeaux ou flags"

            Un drapeau (flag en anglais) est une variable qui sert à marquer une situation. 

            Par exemple, dans un jeu, on continue de jouer tant que la partie n'est pas finie. 
        
            👉 On pourra créer un flag booléen `partie_en_cours` :

            ```python
            partie_en_cours = True  # (1)
            while partie_en_cours :  # (2)
                bloc d instructions du jeux

                # quelque part dans ce bloc on aura :
                if quelque chose qui arrête le jeu :
                    partie_en_cours = False  # (3)
            ```

            1. Le drapeau (ou flag)
            
            2. `partie_en_cours` est un booléen qui vaut `True` ou `False`. On rentre dans la boucle si ce booléen est évalué à `True`. Il est donc une mauvaise pratique d'écrire `while partie_en_cours == True`

            3. Le drapeau (flag) passe à `False`, on sort donc de la boucle `while`


	





??? note "Entrées/sorties : `input()`,`print()`"

    Un code effectue des calculs. La plupart du temps, il a besoin de données en **entrée** (sinon il refera toujours la même chose) et il doit nous communiquer un résultat (numérique, texte, dessin ou autre...) en **sortie**.

	* On a de nombreux moyens de fournir des données au programme (fichiers de nos disques durs, clavier, souris sont des périphériques d'entrées)

	* L'écran, l'imprimante, les haut-parleurs, et les fichiers de nos disques durs sont des périphériques de sortie.

    === "`input()`"

        La fonction `input()` permet de saisir une entrée. 

        Cette fonction renvoie toujours une valeur de type **`str`**

        Le message entre parenthèses est facultatif. Il permet à l’utilisateur de savoir ce qu’il doit saisir.

        👉 Par contre, même s’il n’y a rien à l’intérieur, `input()` doit absolument être accompagné de **`()`** : 


        !!! example "Différentes saisies à connaître"

            ```python
            # pour saisir un texte :
            ma_variable = input("entrez quelque chose : ")
            
            # pour saisir un entier :
            ma_variable = int(input("entrez quelque chose : "))
            
            # pour saisir un nombre décimal :
            ma_variable = float(input("entrez quelque chose : "))
            ```

    === "`print()`"
        La fonction `print` permet d'afficher le contenu d'une variable.

        !!! example "Exemple"

            ```pycon
            >>> ma_variable = 1
            >>> print(ma_variable)
            1
            >>> ma_variable = "Hello"
            >>> print(ma_variable)
            Hello
            >>> a = 1
            >>> b = 2
            >>> print("a vaut : ", a, " et b vaut : ", b)
            a vaut :  1  et b vaut :  2
            >>> 
            ```



??? note "Les fonctions : `def ma_fonction(mon_param):`"

    ??? info "Définition"    

        ```python
        def prix(nbre_adultes, nbre_enfants):  # (1)                
            resultat = 37 * nbre_adultes + 28 * nbre_enfants  
            return resultat  # (2) 

        prix(3, 2)  # (3)                                
        ``` 

        1. Une fonction commence par le mot clef **def**, suivie du **nom** de la fonction, puis entre parenthèse, les **paramètres** de la fonction.

        2. `return ` signifie **renvoyer**, c'est cette ligne qui indique **ce que va renvoyer la fonction**. 
            Ici elle renvoie `resultat`, donc elle renvoie **la valeur de la variable resultat**

        3. Cette ligne de code ne fait pas partie de la fonction (Elle n'est pas dans le bloc indenté). Les lignes de codes qui ne sont pas dans une fonction font partie de ce qu'on appelle le **programme principal**.  
        Une fois qu'une fonction est définie, il est possible de l'appeler (l'utiliser) dans le programme principal, mais aussi dans une autre fonction.


    ??? info "Utilisation"
        
        Toutefois, l'appel ci-dessus ne fait qu'appeler la fonction, qui **renvoie** le résultat. Ceci ne sera pas utile si nous ne conservons pas ce résultat (afin de pouvoir l'utiliser dans la suite du programme). Pour cela nous allons en général **affecter** ce résultat à une variable :
            
        ```python
        prix_a_payer = prix(3, 2)
        print("le prix à payer : ", prix_a_payer) 
        ```

        Si on veut seulement afficher le résultat, on peut directement afficher ainsi :

        ```python
        print("le prix à payer : ", prix(3, 2)) 
        ```

    ??? info "Arguments" 
        
        Quand on **« appelle »** `prix(3, 2)` :   
        •	3 est automatiquement affecté au 1er paramètre : la variable  `nbre_adultes`  
        •	2 est automatiquement affecté au second paramètre : la variable  `nbre_enfants`

        3 et 2 sont les valeurs données **en arguments**.
        
    ??? example "Cas particuliers"
        ??? note "Fonction sans paramètres"

            Certaines fonctions n'ont aucun paramètre. Dans ce cas, on met des parenthèses vides aussi bien dans la définition que dans l'appel de la fonction :
            
            ```python
            def ma_fonction() :
                instruction du bloc
            
            ma_variable  = ma_fonction()
            ```
        ??? note "Fonction sans renvoi"

            Certaines fonctions ne renvoient rien.  
            
            Exemple :
            
            ```python
            def ma_fonction(nom) :
                print("Votre nom est :",nom)
                return None # ou simplement return, ou pas de return du tout ...
            
            ma_fonction()
            ```
            Cette fonction **ne renvoie rien** 
                
            De telles fonctions sont, dans certains langages, appelées des procédures. En python, on ne fait pas de différence. Une procédure **fait quelques chose** : ici par exemple, elle sert à afficher (dans la console) un message.
                
            Notez que dans l'appel d'une procédure, on n'affecte pas le résultat à une variable. C'est logique car il n'y a pas de résultat, puisque la fonction ne renvoie rien.

    ??? note "Notion d'espace de noms"
        

        ??? info "Définitions :heart:"

            - Les variables définies dans le corps d'une fonction sont appelées **variables locales**.
            - Les variables définies dans le corps du programme (sous-entendu : pas à l'intérieur d'une fonction) sont appelées **variables globales**.


        ??? info "Règles d'accès aux variables locales et globales :heart:"

            - **règle 1 :** une **variable locale** (définie au cœur d'une fonction) est **inaccessible** hors de cette fonction.
            - **règle 2 :** une **variable globale** (définie à l'extérieur d'une fonction) est **accessible** en **lecture** à l'intérieur d'une fonction.
            - **règle 3 :** une **variable globale** (définie à l'extérieur d'une fonction) **ne peut pas être modifiée** à l'intérieur d'une fonction.

            !!! example "Example de code dysfonctionnel"
                ```python
                def jeu():
                    for k in range(nb_repetitions): # (1)
                        print("hola")
                    valeur = 50               
                    score = score +1 # (2) 

                nb_repetitions = 5
                score = 0
                jeu()
                print(valeur) # (3)                                
                ``` 

                1. **Lecture** d'une variable définie dans le corps du programme : **autorisé**.

                2. **Modification** d'une variable définie dans le corps du programme : **interdit**.

                3. **Lecture** d'une variable définie dans le corps d'une fonction' : **interdit**.

    ??? info "Test de fonctions : `assert`"
            
        Exemple d'utilisation pour une fonction `carre` qui élève au carré: 
            
        ```python
            assert carre(3) == 9, "l'appel carre(3) devrait renvoyer 9"
        ```    

        Si le test est réussi, il ne se passera rien, sinon le code **lève une exception `AssertionError`** et affiche le message.
            
        👉 Remarque : souvent nous n'écrirons pas de message explicatif. Nous nous contenterons par exemple de : 
            
        ```python
            assert carre(3) == 9
        ```  
            
        Dans ce cas-là, si le test est réussi, il ne se passera rien, sinon le code **lève une exception AssertionError** et n'affiche pas de message.




??? note "Les messages d'erreurs"


    === "ValueError"
        !!! info "Utilisation d'une valeur non valide dans une expression"


        !!! example "Exemple"

            ```pycon
            >>> int("Albert")
            Traceback (most recent call last):
            File "<interactive input>", line 1, in <module>
            ValueError: invalid literal for int() with base 10: 'Albert'
            ```

    === "SyntaxError"
        !!! info "Erreur de syntaxe"

            Erreur fréquente, qui peut avoir de nombreuses origines : parenthèse manquante, virgule de trop... ou toute autre syntaxe erronée.

            👉 Vous devez lire les messages d'erreurs et apprendre à les comprendre pour être en mesure de corriger vos codes.

        !!! example "Exemple"

            ```python
            print("Bonjour"
            ```

            Si on exécute ce code on obtient : 

            ```pycon
            SyntaxError: unexpected EOF while parsing
            ```

    === "NameError"
        !!! info "Variable utilisée sans avoir été définie"


        !!! example "Exemple"

            ```pycon
            >>> print(a)
            Traceback (most recent call last):
            File "<interactive input>", line 1, in <module>
            NameError: name 'a' is not defined
            ```
            Cela signifie que vous demandez d'afficher la valeur de `a`, mais il n'y a pas de variable nommée `a` dans votre code.

    === "TypeError"
        !!! info "Opération entre 2 types incompatibles"

        !!! example "Exemple"

            ```pycon
            >>> 1 + "Albert"
            Traceback (most recent call last):
            File "<interactive input>", line 1, in <module>
            TypeError: unsupported operand type(s) for +: 'int' and 'str'
            ```

    === "IndentationError" 
        !!! info "Erreur d'indentation"

        !!! example "Exemples"

            * `unexpected indent` : Une ligne du code est indentée mais ne devrait pas (elle n'est pas dans un nouveau bloc)
            * `expected an indented block` : Une ligne n'est pas indentée et elle devrait. Le plus souvent vous avez simplement oublié de l'indenter.
            * `indent does not match any outer indentation level` : Une ligne n'est pas indentée comme celles qui précède (souvent un espace en plus ou en moins)


## Quiz !

{{quiz('docs/outils/quiz/sources/banque_progra.md', 10)}}

