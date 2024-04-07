# Propriétés des algorithmes


??? note "Terminaison"
    
    !!! def "Terminaison d'un Algorithme"
        On parle de **terminaison** d'un algorithme lorsqu'il se **termine**, c'est à dire qu'il exécute un nombre fini d'étapes.

    ??? info "Terminaison des boucles"

        ??? abstract "Boucle finie *Pour*"

            **Exemple du *parcours séquentiel* d'un tableau, ou recherche de l’occurrence d'une valeur par *force brute*:**

            On se donne un tableau $A$ de $n$ éléments : $A[0],A[1],..., A[n-1]$, dans lequel on recherche l'**occurrence d'une valeur** *cible*, c'est-à-dire que l'on veut savoir si cette valeur appartient aux éléments du tableau, ou PAS.

            ```pseudo
            # Parcours séquentiel d'un tableau A, ou recherche par force brute
            Saisir cible
            Trouve = FAUX
            Pour chaque élément el du tableau A
            Si el = cible
            Alors Trouve = VRAI
            Afficher Trouve
            ```

            Cette ***boucle Pour*** réalise exactement $n$ itérations (tours).
            Le nombre de tours/itérations, est donc toujours connu à l'avance et surtout *fini*: cet algorithme *termine* toujours (quelle que soit la valeur de $n$). 
            De manière générale, **une boucle *Pour* termine toujours**.

        ??? abstract "Boucle *Tant que* finie"
            Une boucle ***Tant que*** (et/ou une boucle ***Repeat***, dans certains langages) *peut terminer*, ou pas.

            ```pseudo
            # affiche tous les nombres de 100 à 1
            i prend la valeur 100
            Tant que i >= 1
            afficher i
            i prend la valeur i-1
            ```

        ??? abstract "Boucle *Tant que* infinie"


            ```pseudo
            # problème posé : afficher tous les nombres entiers pairs positifs
            i prend la valeur 0
            Tant que i>=0
            afficher 2*i
            i prend la valeur i+1
            ```

            $\hookrightarrow$Cet algorithme ne termine pas.

    ??? info "Démonstration de la terminaison avec un **variant de boucle**"

        !!! pte "Algorithmes ne terminant pas"
            Le seul cas où un algorithme *itératif* (donc *non récursif*) **ne termine pas** est lorsqu'il exécute **une boucle infinie** (*boucle Tant que*, ou *boucle Repeat* dans certains langages)

        !!! def "Boucles bornées ou non bornées"
            * Une boucle **finie** s'appelle aussi **boucle bornée**
            * Une boucle **infinie** est aussi appelée **boucle non bornée**, ou **boucle non finie**

        !!! def "Variant de boucle"
            Pour **démontrer la terminaison d'un algorithme**, on utilise la notion de **variant de boucle**, quelquefois appelé **convergent**. C'est une *quantité* $v$, telle que:

            - $v$ est un **nombre entier** (plus généralement un p-uplet d'entiers)
            - $v\gt0$ à l'entrée de la boucle (plus généralement, au sens de l'ordre lexicographique)
            - $v$ décroît strictement à chaque itération (plus généralement, au sens de l'ordre lexicographique)
            - $v\le0$ provoque une sortie de la boucle (plus généralement, au sens de l'ordre lexicographique)

            **Une boucle possédant un variant de boucle se termine.**

        ??? example "Exemple"
            Dans l'algorithme précédent la variable $i$ (que l'on retrouve dans le test du *Tant que*) est le *variant de boucle*. Cela prouve la terminaison de cet algorithme.

    ??? question "Déterminer la terminaison"
        Déterminer les variants de boucles pour les algorithmes suivants:

        1. Algorithme 1:
        ```pseudo
        i prend la valeur 0
        Tant que i <= 100
        afficher i
        i prend la valeur i+1
        ```
        2. Algorithme d'Euclide
        ```pseudo
        # on suppose que a >= b
        Saisir a, b
        Tant que b n'est pas égal à 0
        (a, b) <- (b, a mod b)
        afficher a
        ```

    ??? warning "Remarques"

        - la terminaison **n'assure pas la correction** du résultat : il *peut* calculer autre chose que le problème demandé (bug)
        - la terminaison assure un **arrêt *théorique***: elle ne tient pas compte de la *complexité/coût* de l'algorithme. Une terminaison dans plusieurs milliards d'années n'est d'un intérêt que modeste.


??? note "Correction"

    !!! def "Correction d'un Algorithme"
        On parle de la **correction** d'un algorithme quand il est **correct**, c'est à dire qu'il répond bien au problème posé, s'il fait vraiment ce qu'il est censé faire. 

    ??? note "Déterminer la correction d'un algorithme"

        **Cas simple de correction d'un algorithme:**  
        Lorsque l'algorithme reproduit directement la spécification, on est sûr que celui-ci est correct.
        **Cas général, et de manière plus formelle:**
        C'est plus compliqué lorsque:

        * la spécification est compliquée, ou bien,
        * la spécification ne dit pas comment obtenir le résultat
        il est est plus compliqué de répondre instantanément, 

        On utilise alors la notion d'**invariant de boucle** qui est un outil pour **démontrer la correction d'un algorithme**.


        ??? def "Invariant de Boucle"
            Un **Invariant de Boucle** est une propriété $P$ qui reste inchangée quelle que soit l'itération $i$, càd plus précisément telle que:

            * cette propriété est vraie avant la première itération : on dit dans ce cas que $P(0)$ est vraie
            * Si cette propriété $P$ est vraie **en entrant** dans la $i^{ème}$ itération (on dit "si $P(i)$ est vraie"), Alors $P$ reste encore vraie **en sortant** de la $i^{ème}$ itération, donc la propriété $P$ est encore vraie en entrant dans la $(i+1)^{ème}$ itération (càd que $P(i+1)$ est encore vraie)


        ??? note "En pratique"
            La démonstration de la correction d'un algorithme se fait en $3$ étapes:

            * **Initialisation :** Montrer que l'invariant de boucle est vrai en entrant dans la première itération
            * **Hérédité / Conservation :** Montrer que Si l'invariant de boucle est vrai **en entrant** dans une itération, Alors il reste vrai **en sortant** de l'itération (donc encore vrai en entrant dans l'itération suivante)
            * **Terminaison :** déduire de l'invariant de boucle final la propriété qui répond au problème posé

    ??? example "Exemple 1: Recherche d'un extremum dans un tableau"
        On se donne un tableau $A$ de $n$ éléments, noté $[A[0],A[1],...,A[n-1]]$, constitué de valeurs entières (ou flottants, ou plus généralement des p-uplets de tels nombres avec l'ordre lexicographique, voire des chaînes de caractères)

        ```pseudo
        # Recherche du minimum des valeurs du tableau A
        minimum prend la 1ère valeur du tableau A
        Pour chaque nombre nb du tableau A
        Si nb < minimum
        Alors minimum prend la valeur nb
        afficher minimum
        ```

        1. (Exercice) Implémenter cet algorithme en Python
        2. un **invariant de boucle** possible est la propriété:
        >"En entrant dans la $i^{ème}$ itération, la variable *minimum* contient le minimum parmi les valeurs $i$ premières valeurs du tableau", (c'est-à-dire le minimum du sous-tableau $[A[0],...,A[i-1]]$)

        ??? success "Démonstration de la correction"

            * **Initialisation :** En entrant dans la 1ère itération, la variable minimum contient bien le minimum de l'unique première valeur du tableau
            * **Hérédité / Conservation :** Si, en entrant dans la $i^{ème}$ itération la variable *minimum* contient le minimum du sous-tableau $[A[0],...,A[i-1]]$, Alors :
            * le nombre $nb$ est en fait la $(i+1)^{ème}$ valeur notée $A[i]$
            * Si $nb$ est inférieur au plus petit des $i$ premières valeurs du tableau $A$, alors la variable *minimum* prend cette nouvelle valeur comme étant la plus petite, si bien que la variable *minimum* contiendra le minimum des $(i+1)$ premières valeurs du tableau $A$, (et sinon, rien à faire)
            * en sortant de la $i^{ème}$ itération (donc aussi en entrant dans la $(i+1)^{ème}$ itération) la variable *minimum* contient donc bien le minimum des valeurs $[A[0],...,A[i]]$
            * **Terminaison :** La tableau étant de taille $n$, en sortant de la dernière (la $n^{ème}$) itération la variable *minimum* contient donc le minimum du sous-tableau $[A[0],...,A[n-1]]$, qui est en fait exactement le tableau $A$. 
            Ceci prouve la correction de l'algorithme.

    ??? example "Exemple 2: Algorithme d'Euclide"

        ```pseudo
        # on suppose que a >= b
        Saisir a, b
        Tant que b n'est pas égal à 0
        (a, b) <- (b, a mod b)
        afficher a
        ```

        Notons $d$ le $pgcd$ recherché (pour les valeurs de $a$ et de $b$ initiales). 
        Un **invariant de boucle** possible est la propriété:
        >"$d = pgcd$ de la valeur courante de $a$ et de la valeur courante de $b$"

        ??? success "Démonstration de la correction"

            * **Initialisation :** *trivial*, car avant d'entrer dans la 1ère itération, les variables $a$ et $b$ contiennent leurs valeurs initiales, donc $d = pgcd(a, b)$
            * **Hérédité / Conservation :** Quelles que soient les valeurs courantes prises par $a$ et $b$ en entrant dans une itération:
            Si $d = pgcd(a, b)$ pour ces valeurs courantes $a$ et $b$, Alors puisque (propriété mathématique) $d = pgcd(a,b) = pgcd (b, a \text{ mod } b)$, l'invariant de boucle est encore vrai en sortant de l'itération (donc encore en entrant dans la suivante itération)
            * **Terminaison :** en sortant de la dernière itération, on sait que $d=pgcd(a,b)$ pour les valeurs courantes de $a$ et $b$, et on sait aussi que $b=0$ (car on est sorti de la boucle..), donc $d=pgcd(a,0)=a$ (car $0$ est divisible par tout entier). Donc l'algorithme retourne bien (la valeur courante de $a$, qui est bien) le pgcd des valeurs initiales de $a$ et $b$.
            Ceci prouve la correction de l'algorithme.


??? note "Complétude"
    Il doit pouvoir être utilisé dans tous les cas prévus possibles (exemple : donner le périmètre de n’importe quel rectangle)

??? note "Complexité"

    <center>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AgtOCNCejQ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    !!! def "Notion de complexité"

        La *complexité* d'un algorithme répond à la question suivante:
        Cet algorithme répond-il au problème posée **en un temps raisonnable**?

        En effet, disposer d'un algorithme qui répond au problème posé mais dans un délai de plusieurs milliers/millions d'années n'est d'une utilité que très modeste.

        La **complexité** d'un algorithme mesure donc le **nombre de ressources** nécessaires à l'exécution d'un algorithme.
        On distingue usuellement deux types de ressources:
        
        * Les ressources **temporelles** : **le nombre d'instructions** à exécuter. On parle dans ce cas de **complexité en temps** (ou *temporelle*)
        * Les ressources **spatiales** : **la mémoire** à utiliser. On parle dans ce cas de **complexité en espace** (ou *spatiale*)

    ??? note "Dépendance d'un paramètre $n$"

        La complexité d'un algorithme dépend toujours d'un (ou de plusieurs) paramètre.s donné.s en entrée, qui sont un/des nombres entiers, souvent notés $n$ (ou etc...) : **L'entier $n$ mesure la taille des données en entrée**.
        On note $C(n)$ la complexité de l'algorithme avec un paramètre $n$ en entrée.

        Exemples de paramètre $n$ :  

        * **Entrées données sous forme de liste**: Lorsque les entrées sont une liste de valeurs, alors la taille $n$ des entrées mesure la taille de la liste, donc le nombre de valeurs de la liste
            * Exemple: **Algorithme de tri**:  $n$ est le nombre de valeurs à trier
        * **Entrées sous forme d'un entier $n$:** Lorsque l'entrée est un nombre entier $n$, alors la taille des entrées est le nombre de bits requis pour stocker cet entier $n$ en mémoire. Nous verrons plus tard que, dans ce cas, la taille des entrées vaut $\lceil log_2(n) \rceil$
            * Exemple: **Algorithme de factorisation d'un entier:** $n$ est le nombre de chiffres du nombre à factoriser

    ??? def "Complexité Asymptotique. Notation $O()$"

        La **complexité asymptotique** d'un algorithme s'intéresse à la complexité de l'algorithme :  

        * pour de grandes valeurs de $n$ (on dit que **$n$ tend vers $+\infty$**, ou que **$n$ est proche de $+\infty$**), 
        * et à une (bonne) ***valeur approximative mais néanmoins représentative*** de la complexité de l'algorithme.

        On peut s'intéresser à plusieurs complexités distinctes qui ne sont pas *obligatoirement* égales entre elles (à priori), mais qui peuvent toutes être intéressantes, selon le ou les cas de figure qui nous intéresse(nt). 
        On peut s'intéresser à la complexité:

        * au **pire des cas**
        * au **meilleur des cas**
        * au **cas moyen**

        En général, on s'intéresse au pire des cas.


        Dans certains cas particuliers simples (algorithmes itératifs), on peut tenter de compter manuellement le nombre d'instructions.

        Dans le cas général, il n'y a pas de méthode infaillible pour toutes les situations, mais une méthode pratique utile nommée ***master theorem*** permet de répondre dans certains cas usuels. Elle consiste à:  

        * incrémenter (le paramètre $n$)
        * et compter les (nouvelles) instructions
        * Comparer les deux complexités (avant et après l'incrémentation)
        (par exemple comparer $C(n+1)$ avec $C(n)$, ou bien $C(2\times n)$ avec $C(n)$)
       

        ??? def "Complexité Constante $O(1) : $C(n+1)=C(n)$$"
            Si $C(n+1)=C(n)$, alors la **complexité est constante** : on dit/note aussi que **la complexité est en $O(1)$**
        
            Remarquer que:  

            * Si $f(n)=C^{te}$, alors $f(n+1)=C^{te}=f(n)$
            * Autrement dit, l'équation fonctionnelle sur la complexité est cohérente avec la formule suivante des fonctions constantes: 

            <center>$C^{te} \, \text{pour } f(n+1)=C^{te} \, \text{pour } f(n)$</center>


        ??? def "Complexité Linéaire $O(n)$ :  $C(n+1)=C(n)+a$"
            Si $C(n+1)=C(n)+a$ pour $a$ réel (constant), alors la **complexité est *linéaire*** (ATTENTION: mathématiquement, il faudrait dire *affine*) donc **la complexité est en $O(n)$**

            Remarquer que:  

            * Si $f(n)=an +b$ est une fonction *linéaire* (il faudrait dire *affine*), alors $f(n+1)=a(n+1)+b=an+a+b=(an+b)+a=f(n)+a$
            * Autrement dit, l'équation fonctionnelle précédente sur la complexité $C(n)$ est cohérente avec la formule suivante des fonctions *linéaires* (il faudrait dire *affine*): 

            <center>$a(n+1)+b=(an+b)+a$</center>


        ??? def "Complexité Quadratique  $O(n^2)$ : $C(n+1)=C(n)+an$"
            Si $C(n+1)=C(n)+an$, alors la **complexité est quadratique** donc **la complexité est en $O(n^2)$**

            Remarquer que:  

            * Si $f(n)=an^2$ est une fonction *quadratique* (on pourrait considérer une fonction plus générale $f(n)=an^2+bn+c$), 
            alors $f(n+1)=a(n+1)^2=a(n^2+2n+1)=an^2+2an+a= f(n)+2an+a\approx f(n)+a'n$
            * Autrement dit, l'équation fonctionnelle précédente sur la complexité $C(n)$ est cohérente avec la formule approchée suivante des fonctions *quadratiques*: 

            <center>$a(n+1)^2\approx an^2+a'n$</center>



        ??? def "Complexité Logarithmique $O(log_2(n))$ : $C(2\times n)=C(n)+1$"
            Si $C(2\times n)=C(n)+1$, Alors on dit dans ce cas que **la complexité est Logarithmique** (de base 2), et (notation) que **la complexité est en $O(log_2(n))$**

            Remarquer que :  

            * Si $f(n)=log_2(n)$ est la fonction *logarithme de base $2$*, alors $f(2\times n)=log_2(2\times n)=log_2(n)+1=f(n)+1$
            * Autrement dit, l'équation fonctionnelle précédente sur la complexité $C(n)$ est cohérente avec la formule suivante des fonctions *logarithmes de base $2$*:

            <center>$log_2(2\times n)=log_2(n)+1$</center>

            !!! warning "Intuitivement"
                La **complexité logarithmique (de base 2)** correspond à une situation où la multiplication par $2$ de la taille $n$ des données en entrée, équivaut à l'addition de $1$ *unité* supplémentaire de complexité (classiquement, $1$ itération de boucle supplémentaire)


        ??? def "Complexité Exponentielle $O(2^n)$ : $C(n+1)=2\times C(n)$"
            Si $C(n+1)=2\times C(n)$, alors la **complexité est exponentielle** plus précisément **la complexité est en $O(2^n)$**.
        
            Remarquer que :  

            * Si $f(n)=2^n$ est la fonction *exponentielle de base $2$*, alors $f(n+1)=2^{n+1}=2\times2^n=2\times f(n)$
            * Autrement dit, l'équation fonctionnelle précédente sur la complexité $C(n)$ est cohérente avec la formule suivante des fonctions *exponentielles  de base $2$*:

            <center>$2^{n+1}=2\times2^n$</center>

            !!! warning "Intuitivement"
                La **complexité exponentielle (de base 2)** correspond à une situation où l'augmentation/addition de $1$ pour la taille des données en entrée, équivaut à multiplier par $2$ la complexité.
            
                Remarque: Ces résultats se généralisent parfaitement, en adaptant les passages correspondant, à :  

                * des exponentielles de base $3$: Si $C(n+1)=3\times C(n)$ Alos $C(n)=O(3^n)$
                * des exponentielles de base $4$: Si $C(n+1)=4\times C(n)$ Alos $C(n)=O(4^n)$, etc...


        !!! thm "Résumé : Master Theorem"
            Le tableau suivant résume les complexités des fonctions récursives:

            <center>

            |>|Relation de Récurrence|Complexité|
            |:-:|:-:|:-:|
            |>|$C(n+1)=C(n)$|$O(1)$|
            |>|$C(n+1)=C(n)+O(1)$|$O(n)$|
            |>|$C(n+1)=C(n)+O(n)$|$O(n^2)$|
            |>|$C(n+1)=C(n)+ \varepsilon$<br/>pour $\varepsilon>0$ et variable (avec $n$)|cas plus subtil:<br/>ça dépend (de $\varepsilon$)|
            |Exemple 1|$C(2\times n)=C(n)+ O(1)$ |$O(log_2(n))$|
            |Exemple 2|$C(a\times n)=C(n)+ O(1)$ |$O(log_a(n))$|
            |>|$C(n+1)=2\times C(n)+ O(1)$|$O(2^n)$|
            |>|$C(n+1)=a\times C(n)+ O(1)$|$O(a^n)$|

            </center>

    ??? example "Exemples"
        Soit un algorithme qui demande en entrée le nombre $n$ de jours restant avant le bac, et qui prépare un élève au bac.

        ??? note "Complexité Constante"
            Considérons l'algorithme en pseudo-code suivant:

            ```pseudo
            Saisir n
            faire 100 exercices
            ```

            L'algorithme consiste à préparer 100 exos pour être prêt pour le bac.
            Ainsi le nombre d'exercices à faire est indépendant de $n$, donc $C(n+1)=C(n)$, donc **la complexité en temps est constante: en $O(1)$**

        ??? note "Complexité linéaire"
            Supposons qu'il reste au moins 2 jours avant le bac. Considérons maintenant l'algorithme suivant:

            ```pseudo
            Saisir n
            m prend la valeur n
            Tant que m>=1:
            faire 1 exercice
            m prend la valeur m-1
            ```

            Cet algorithme modélise un élève qui va faire un exercice par jour, tous les jours, jusqu'au jour du bac.

            Ainsi $C(n+1) = C(n)+1$, donc **la complexité en temps est linéaire: en $O(n)**    

        ??? note "Complexité Logarithmique"
            Considérons maintenant l'algorithme:

            ```pseudo
            Saisir n
            m prend la valeur n
            Tant que m>=1:
            faire 1 exercice
            m prend la valeur ⌈m/2⌉        #partie entière supérieure de m/2
            ```

            Un élève fait $1$ exercice, puis il divise le nombre de jours restants par $2$ et il l'arrondit à sa partie entière supérieure, puis il recommence.

            Ainsi $C(2\times n)=C(n)+1$, donc **la complexité en temps est logarithmique: en $O(log_2(n))$**                                            

        ??? note "Complexité Quadratique"
            Supposons qu'il reste au moins 2 jours avant le bac.

            Considérons l'algorithme suivant

            ```pseudo
            Saisir n
            m prend la valeur n
            Tant que m>=1:
            faire n exercices
            m prend la valeur m-1
            ```

            Cet algorithme modélise un élève qui va faire $n$ exercices par jour, tous les jours, jusqu'au jour du bac.

            Ainsi $C(n+1) = C(n)+n$, donc **la complexité en temps est quadratique, en $O(n^2)$**.

            Remarque intuitive:  
            Tout se passe comme si il y avait deux boucles imbriquées:

            * $1$ boucle de $1$ à $n$ pour le nombre $m$ de jours restants
            * $1$ boucle de $1$ à $n$ pour le nombre d'exercices à faire

            et l'on remarque que $n\times n=n^2$
            Si de plus, pour chaque exercice réalisé, l'élève refait $n$ variantes de l'exercice, alors on aurait $3$ boucles imbriquées (de $1$ à $n$) et on aurait **une complexité en temps cubique: en $O(n^3)$** donc **en temps polynômial**.

        ??? note "Complexité Exponentielle"
            Supposons qu'il reste au moins 2 jours avant le bac.

            Considérons l'algorithme suivant

            ```pseudo
            Saisir n
            m prend la valeur n
            m' prend la valeur 1
            Tant que m>=1:
            faire m' exercices
            m' prend la valeur m'*2
            m prend la valeur m-1
            ```

            Cet algorithme utilise une variable supplémentaire $m'$ contenant le nombre d'exercices à faire par jour. Chaque jour, un élève va faire le double d'exercices que le jour précédent, jusqu'au jour du bac.

            Ainsi $C(n+1) = 2\times C(n)$, donc **la complexité en temps est exponentielle, plus précisément en $O(2^n)$**.


