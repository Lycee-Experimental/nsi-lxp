# Tri par sélection

???+ abstract "Le tri par sélection en bref"
    <center>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rXEI25l9RQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </center>

    * On cherche la valeur minimale et on la place au début du tableau.
    * On recommence à partir de la deuxième valeur, et on la place en deuxième position par échange. 
    * Ainsi de suite 

    Le tri par sélection est l'un des plus simples à comprendre. Il est même probable que vous l'ayez déjà mis en application.

    Supposons que vous ayez des cartes à jouer en main et que vous souhaitiez les trier dans l'ordre croissant. Vous pouvez :

    * Parcourir du regard l'ensemble des cartes et déterminer laquelle est la plus petite,
    
    * Échanger cette carte minimale avec la première carte de votre main,
    * Recommencer en cherchant la carte minimale à partir de la deuxième carte et l'échanger avec celle-ci,
    * Recommencer à partir de la troisième carte *etc*.

{{exercice(prem=1, titre="Déroulé « *à la main* »")}}
    === "Principe"
        * On considère le tableau $[3,\,4,\,1,\,2]$.

        * Lors de la première itération de l'algorithme, on cherche la valeur minimale à partir de l'indice $0$. C'est le $1$ placé à l'indice $2$. On échange donc les éléments d'indices $0$ et $2$. Le tableau devient $[1,\,4,\,3,\,2]$.

        * Lors de l'itération suivante on cherche le minimum à partir de l'indice $1$ : c'est le $2$ situé à l'indice $3$. Après échange, le tableau devient $[1,\,2,\,3,\,4]$.

        * On recommence encore une fois la recherche à partir de l'indice $2$ : le minimum est à l'indice $2$, on l'échange avec lui-même.

        * Lorsqu'il ne reste plus qu'un élément à trier (le dernier), il est inutile de chercher le minimum car il est obligatoirement bien placé (en dernière position).
    === "Animation"
        Vous pouvez observer le déroulé de cet algorithme ci-dessous :
        <section onload="initialisation('selection')">
            <canvas id="canvas"></canvas>
            <span id="bouton-melange" onclick="initialisation('selection')">
                Tableau aléatoire
            </span>
            <span id="bouton-melange" onclick="croissant('selection')">
                Tableau croissant
            </span>
            <span id="bouton-melange" onclick="decroissant('selection')">
                Tableau décroissant
            </span>
            <p>
                <span id="bouton-lancer"
                    onclick="initialisation('selection',document.getElementById('tableau').value)">
                    Trier votre tableau
                </span>
                <input type="text" id="tableau" placeholder="[valeur1, valeur2,...]" value="[3,4,1,2]">
            </p>
            <script>
                $().ready(() => {
                    setTimeout(
                        initialisation('selection'),
                        500)
                }
                );
            </script>
        </section>
    === "Questions"
        On considère le tableau $[6,\,1,\,4,\,5,\,2,\,3]$.

        === "Cocher la ou les affirmations correctes"
            
            - [ ] Lors de la première itération on échange les valeurs d'indices $1$ et $6$
            - [ ] Après deux itérations, le tableau est $[1,\,2,\,4,\,5,\,6,\,3]$
            - [ ] La valeur $4$ ne changera de position qu'une seule fois durant l'algorithme
            - [ ] Au total il y a eu $5$ échanges de valeurs

        === "Solution"
            
            - :x: Lors de la première itération on échange les valeurs d'indices $0$ et $1$. $1$ et $6$ sont leurs valeurs !
            - :white_check_mark: La première itération échange $6$ et $1$, la deuxième $6$ et $2$. Ce tableau est donc correct
            - :x: La valeur $4$ sera échangée deux fois : avec le $3$ lors de la troisième itération puis avec le $5$ lors de la quatrième. Elle sera alors bien placée
            - :white_check_mark: On échange au total : $6$ et $1$, $6$ et $2$, $4$ et $3$, $5$ et $4$, $6$ et $5$. Il y a donc bien 5 échanges


{{exercice(titre="Tri par sélection en Python")}}
    L'une des étapes essentielles du tri par sélection est donc de déterminer l'indice de la valeur minimale à partir d'un certain indice `i`.
    Cette recherche ayant lieu à plusieurs reprises, nous allons utiliser une fonction pour la réaliser.
    === "Fonction `#!py indice_minimum_depuis`"

        Compléter la fonction `#!py indice_minimum_depuis` prenant en argument un `#!py tableau` ainsi qu'un indice `#!py i` et renvoyant l'indice de la valeur minimale parmi les éléments situés après celui d'indice `#!py i` (inclus).

        On garantit que `#!py i` est un indice valide.

        Si plusieurs valeurs sont égales au minimum, on renverra l'indice de la première d'entre elles.

        {{ IDE('scripts/mini_depuis') }}

        ??? success "Solution"

            ```python
            def indice_minimum_depuis(tableau, i):
                i_mini = i
                for j in range(i + 1, len(tableau)):
                    if tableau[j] < tableau[i_mini]:
                        i_mini = j
                return i_mini
            ```

            Dans le cas où le minimum apparaît plusieurs fois, on aurait pu aussi retenir la dernière d'entre elles. Le fonctionnement général de l'algorithme aurait été similaire (mais il n'aurait plus été [*stable*](https://fr.wikipedia.org/wiki/Algorithme_de_tri#Tri_stable))

    === "Fonction `#!py tri_selection`"
        On donne les fonctions `#!py echange` et `#!py indice_minimum_depuis`.

        Compléter la fonction `#!py tri_selection` prenant en argument un `#!py tableau` et le triant **en place** à l'aide du tri par sélection.

        On pourra utiliser les fonctions `#!py echange` et `#!py indice_minimum_depuis`.

        {{ IDE('scripts/selection') }}

        ??? success "Solution"

            ```python
            def tri_selection(tableau):
                for i in range(len(tableau) - 1):
                    i_mini = indice_minimum_depuis(tableau, i)
                    echange(tableau, i, i_mini)
            ```

    === "Fonction `#!py tri_selection` (bis)"

        Le code précédent est court et lisible.

        Toutefois le plus souvent le tri par sélection est rédigé en une seule fonction. Terminons notre étude par cette rédaction.

        Compléter la fonction `#!py tri_selection` prenant en argument un `#!py tableau` et le triant **en place** à l'aide du tri par sélection.

        On n'utilisera **pas** les fonctions `#!py echange` et `#!py indice_minimum_depuis`.
    
        {{ IDE('scripts/selection_bis') }}


    === "Utilisation"
        ??? question "Tester le tri par sélection"

            Tester ci-dessous. Que s'est-il passé ?
        
            {{ IDE('scripts/tri_selection') }}

            ??? success "Solution"

                La fonction n'a pas de `return`, c'est une procédure. Elle renvoie donc `None`

        ??? question "Que fait la fonction de tri par sélection ?"

            Tester ci-dessous. Que s'est-il passé ?
        
            {{ IDE('scripts/tri_sel_effet') }}

            ??? success "Solution"

                La liste de départ a été modifiée ...

                C'est ce qu'on appelle un **effet de bord**. La fonction a modifié **"en place"** la liste.


{{exercice(titre="Complexité du tri par sélection")}}
    Nous allons étudier le tri de `[9, 5, 8, -2, 6, 4]`. Nous avons mis en vert la partie triée de la liste. La dernière colonne donne le nombre de comparaisons effectuées par la fonction `rechercher_position_du_min`.  
    Par exemple :   
    -  A l'étape 0, il faut 5 comparaisons pour trouver le minimum -2 :  
    On compare 9 à 5, puis 5 à 8, puis 5 à -2, puis -2 à 6, puis -2 à 4  .
    - A l'étape 1, il faut 4 comparaisons pour trouver le minimum 4 :  
    On compare 5 à 8, puis 5 à 9, puis 5 à 6, puis 5 à 4.


    | Numéro d'étape|liste             |nombre de comparaisons |
    | :------------: | :-------------:     | :-------------:       |
    |0              | [9, 5, 8, -2, 6, 4]|5|
    | 1             | [<font color = green><b>-2</b></font>, 5, 8, 9, 6, 4]|4|
    | 2             | [<font color = green><b>-2, 4</b></font>, 8, 9, 6, 5]|3|
    | 3             | [<font color = green><b>-2, 4, 5</b></font>, 9, 6, 8]|2|
    | 4             | [<font color = green><b>-2, 4, 5, 6</b></font>, 9, 8]|1|
    | 5             | [<font color = green><b>-2, 4, 5, 6, 8</b></font>, 9]|0|  
    
    Pour une liste de taille 6, il faut donc 5 + 4 + 3 + 2 + 1 = 15 comparaisons.


    Dans le cas général, on va compter le nombre de comparaisons : **`if tableau[j] < tableau[i_mini]` :** de la fonction `tri_selection`.  
    Nous désirons trier un tableau de taille `n`

    Dans la fonction `tri_selection`, `i`varie de  <font color="green"><b>0</b></font> à <font color="green"><b>n-2</b></font>

    Dans la boucle on va devoir faire <font color="green"><b>(n-1)-i</b></font> comparaisons

    Au total :

    | indice de boucle dans triSel | nombre de comparaisons |
    |--:--|--|
    |0|n - 1|
    |1|n - 2|
    |2|n - 3|
    |...|...|
    |n - 3|2|
    |n - 2|1|  
    
    (nous n'avons pas écrit la dernière ligne du tableau de l'exemple car elle ne nécessite aucune comparaison).  

    Le nombre total de comparaisons est donc :

    $C(n) = 1 + 2 + 3 + ... + n-1$

    Si vous faites la spécialité maths, vous savez que $C(n)=\dfrac{(n-1)n}{2}$  
    
    👉  Pour trier une liste de taille  il faut donc $C(n)=\dfrac{(n-1)n}{2}$   comparaisons.  
    Si $n$   devient très grand, on a $n-1 \approx n$  et il faut environ $\dfrac{n^2}{2}$ comparaison.  
    On dit que la complexité de l'algorithme de tri par sélection est en : $O(n^2)$

    ??? note "$\mu$ :   Un peu de maths (facultatif...)"

        Nous avons vu que $1 + 2 + 3 + ... + n-1 = \dfrac{(n-1)n}{2}$ 

        Ce n'est pas difficile à comprendre :  

        Il suffit d'écrire en dessous de $C(n)$, le même $C(n)$ en partant de la fin, puis d'additionner les deux lignes : 
    
        |C(n) = |1|+|2|+|3|+|...|+|n-3|+|n-2 |+|n-1|  
        |:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
        |C(n) = |n-1|+|n-2|+|n-3|+|...|+|3|+|2|+|1 |
        |2C(n) = |n|+|n|+|n|+|...|+|n|+|n|+|n |

        La dernière ligne du tableau contient $n-1$ fois le terme  $n$.    
        On a donc $2 \times C(n)=(n-1)n$ , et donc $C(n)=\dfrac{(n-1)n}{2}$ 

!!! abstract "💚 A retenir"

    La complexité du tri par sélection est quadratique : **Le coût est quadratique**.

{{exercice(titre="Mesures du temps de calcul")}}
    ??? question "Quel est le "pire des cas?""
        ??? success "Solution"
            Il n' y a pas de "pire des cas". ou plus exactement, on est toujours dans le pire des cas ! Si la liste de départ est complètement triée, à chaque tour de boucle, il faudra quand même itérer sur le reste de la liste pour chercher l'indice du minimum ... Le fait de mesurer plusieurs fois le tri de la liste triée n'est donc pas gênant.

    ??? question "Vérifions sur une liste de taille 100000 ..."

        Recopier le script ci-dessous dans votre éditeur Python (pas en ligne) 
        
        Il faut attendre un peu, on trie une "grosse" liste ...

        ```python
        from timeit import timeit

        def tri_selection(tableau):
            for i in range(len(tableau) - 1):
                i_mini = i
                for j in range(i + 1, len(tableau)):
                    if tableau[j] < tableau[i_mini]:
                        i_mini = j
                tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]

        liste_croiss = [i for i in range(10000)]
        liste_decroiss = [i for i in range(10000,0,-1)]
        t_croiss = timeit("tri_selection(liste_croiss)", number = 1, globals = globals())
        t_decroi = timeit("tri_selection(liste_decroiss)", number = 1, globals = globals())
        print("t_croiss = ",t_croiss)
        print("t_decroi = ",t_decroi)
        ```

    ??? question "regardons plus précisément"

        Recopier le script ci-dessous dans votre éditeur Python (pas en ligne). Que se passe-t-il ?
    
        ```python
        from timeit import timeit

        def tri_selection(tableau):
            for i in range(len(tableau) - 1):
                i_mini = i
                for j in range(i + 1, len(tableau)):
                    if tableau[j] < tableau[i_mini]:
                        i_mini = j
                tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]

        liste_tailles = [300, 900, 2700]
        liste_ref = [i for i in range(100)]
        tref = timeit("tri_selection(liste_ref)", number = 20, globals = globals())
        print("n = 100 : tref = ",tref)
        for n in liste_tailles :
            print("n =", n, end = '')
            # Création de la liste triée de taille n : [0, 1, ...,n-1]
            liste_cr = [i for i in range(n)]
            # Temps d'éxécution du tri
            temps = timeit("tri_selection(liste_cr)", number = 20, globals = globals())
            # Affichage
            print('\t-> temps = ', round(temps, 2), '\t x', round(temps/tref, 2) )
            # Nouveau temps de référence avant le tour de boucle suivant
            tref = temps
        ```

        ??? success "Solution"

            Lorsque la taille de la liste et multipliée par 3, la temps est multiplié par 9. Or $3^2 = 9$

            Cela correspond bien à une complexité **quadratique**

{{exercice(titre="Visulalisation du temps de calcul du tri par insertion")}}
        {{jupyter('/algo/notebooks/temps_tri_selection.ipynb')}}

??? abstract "Correction de l'algorithme de tri par sélection"
    ??? info "Invariant de boucle"

        On appelle invariant d’une boucle une propriété qui, si elle est vraie avant l’exécution d’une itération, le demeure après l’exécution de l’itération.  

        Un invariant de boucle bien choisi permet de prouver qu’une boucle produit le résultat attendu (correction). 


    ??? info "Correction de l'algorithme"
        **Après la ième itération (boucle en i de l’algorithme fourni) les i premiers éléments sont triés.**

        **a. Vérifions sur l'exemple du tri de  :  `[9, 5, 8, -2, 6, 4] `**
    
        | Numéro d'étape|partie gauche de la liste|reste de la liste |
        | :------------ | :-------------     | :-------------       |
        |liste de départ| []                 | [9, 5, 8, -2, 6, 4]  |
        | 1             | [-2]               | [5, 8, 9, 6, 4]      |
        | 2             | [-2, 4]            | [8, 9, 6, 5]         |
        | 3             | [-2, 4, 5]         | [9, 6, 8]            |
        | 4             | [-2, 4, 5, 6]      | [9, 8]               |
        | 5             | [-2, 4, 5, 6, 8]   | [9]                  |

        **b. Raisonnement « par récurrence »**

        - Après la première itération, le 1er élément étant seul est forcément « trié ».  
        - Supposons qu’après la  ième itération les i premiers éléments soient triés. Par construction le ième élément est plus petit ou égal que tous ceux qui suivent (sinon ce serait un autre qui aurait été le minimum, et donc mis à le place du ième élément).   
        - A l’itération suivante on met au rang i+1 un élément de la liste restante, donc supérieur ou égal au ième élément. La liste des i+1 premiers éléments est donc triée.  
        
        On prouve ainsi de proche en proche que pour n’importe quel entier i, après la ième itération, les i premiers éléments sont triés. Cela prouve la correction de l’algorithme de tri par sélection, car après n itérations une liste de longueur n est donc triée.


??? info "Terminaison de l'algorithme de tri par sélection"
	L’algorithme de tri par sélection se termine car il a un nombre limité de tours de boucles, car il ne comporte que des boucles Pour.

??? abstract "A mémoriser : l'algorithme du tri par sélection"
	```python
    def tri_selection(tableau):
    for i in range(len(tableau) - 1):
        i_mini = i
        for j in range(i + 1, len(tableau)):
            if tableau[j] < tableau[i_mini]:
                i_mini = j
        tableau[i], tableau[i_mini] = tableau[i_mini], tableau[i]
    ```

??? abstract "A mémoriser : la complexité du tri par sélection"
	Le tri par sélection a une complexité **quadratique**, c'est à dire de l'ordre du carré de la taille de la liste à trier.
