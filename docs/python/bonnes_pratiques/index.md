# Bonnes pratiques Logicielles

## Introduction

Le respect de certaines règles plus ou moins explicites permettent à tout programmeur de lire, comprendre et modifier le programme écrit par un autre. Nous allons voir ici quelques unes de ces règles.

## Syntaxe pythonesque !

### Règles explicites du PEP8

Les règles de syntaxe de Python sont définies dans le document PEP8 (Python Enhancement Proposal) rédigé entre autres par **Guido van Rossum** lui-même.

A consulter sur [https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/){:target="_blank" }

=== "Nommage"
    - Le nom des variables, fonctions et méthodes s'écrit toujours en snake_case (ex : `vitesse_voiture`)
    - Le nom des classes (voir séquence 2) s'écrit toujours en CamelCase (ex : `VoitureSport`)
    - Le nom des constantes s'écrit toujours en lettres capitales (ex : `VLUMIERE`)

=== "Espaces"
    - Les opérateurs sont censés être entourés d'un espace (sauf pour le passage de paramètres à une fonction ou pour des questions de lisibilité de grandes expressions mathématiques)
    - Pas d'espace à l'intérieur de `()`, `[]` ou `{}`
    - Pas d'espace avant `:` et `,` mais on en met **après**.

    ```python
    x = 2
    a = x*2 - 1
    b = x*x + y*y
    c = (a+b) * (a-b)

    def puissance(x, puis=3):
        if x == 5:
            return x**puis
        
    print(puissance(5, 2))
    ```

=== "Longueur des lignes"
    La longueur des lignes est limitée en principe à 79 caractères. on peut raccourcir une longue ligne grâce à :

    - L'indentation
    - Des parenthèses

    ```python
    dico {
        0: 'zero',
        1: 'un',
        2: 'deux'
    }

    from module import (package1, package2, package3,
                        package4, package5, package6)
    ```
=== "Indentation"
    4 espaces (ou une tabulation)

=== "Saut de ligne"
    - 2 lignes entre les imports et les fonctions, puis entre chaque définition de fonction
    - Mais une seule ligne entre chaque méthode d'une classe (voir Chapitre 2)

    ```python
    import math


    def f1():
        pass
    
    
    def f2():
        pass
    ```
!!! info "Linter"
    Un **linter** (flake8 ou pylint) est un **analyseur de code** vérifiant la conformité de la syntaxe. Le site 
    [pep8online.com](http://pep8online.com){:target="_blank" } par exemple est très simple d'utilisation. On copie/colle le code à évaluer puis on clique sur le bouton `Check code`.

### Règles implicites

- **Choisir** judicieusement le nom de ses variables : `#!python for x in y:` ou `#!python for lettre in chaine:` ?

- **Documenter** chaque fonction avec un prototype (*docstring*). Ne pas hésiter à inclure un exemple simple et concret pour les fonctions compliquées

```python
def calcul_moyenne(x, y):
  """
  Calcul de la moyenne de x et y
  
  param x: première valeur (int ou float)
  param y: seconde valeur (int ou float)
  return: moyenne de x et y
  
  Exemple:
  
  >>> calcul_moyenne(4, 7)
  5.5
  """
```

- **Anticiper et gérer les bugs** en levant des exceptions et en incluant des test les plus complets possibles de manière à avoir la meilleur couverture de code (pourcentage de code couvert par les tests) possible
- Chercher à **optimiser le temps d'exécution** du programme
- Assurer la mise à jour de son programme

??? note "The zen of Python"
    Le poème "The zen of Python" écrit par Timp Peters résume la philosopie d'un bon programmeur en Python et est accessible par un simple import (surnommé *oeuf de Pâques*)

    ```console
    >>> import this

    The Zen of Python, by Tim Peters

    Beautiful is better than ugly.
    Explicit is better than implicit.
    Simple is better than complex.
    Complex is better than complicated.
    Flat is better than nested.
    Sparse is better than dense.
    Readability counts.
    Special cases aren't special enough to break the rules.
    Although practicality beats purity.
    Errors should never pass silently.
    Unless explicitly silenced.
    In the face of ambiguity, refuse the temptation to guess.
    There should be one-- and preferably only one --obvious way to do it.
    Although that way may not be obvious at first unless you're Dutch.
    Now is better than never.
    Although never is often better than *right* now.
    If the implementation is hard to explain, it's a bad idea.
    If the implementation is easy to explain, it may be a good idea.
    Namespaces are one honking great idea -- let's do more of those!
    ```

    Et la version française pour les non-anglophones :

    [https://fr.wikipedia.org/wiki/Zen_de_Python](https://fr.wikipedia.org/wiki/Zen_de_Python){:target="_blank" }

## Modularité


!!! info "Définition"
    La modularité est le fait qu'un programme est **découpé en modules logiciels** afin de favoriser leur maintenance ou leur réutilisation dans d'autres contextes.

    - Un **module** est un ensemble de fonctions prédéfinies
    - Une **bibliothèque** correspond à un ensemble plus complet puisqu'elle comprend des fonctions, des constantes ET des modules

    Encore faut-il savoir utiliser le module désiré... D'où la nécessité de lire la documentation de ce module en utilisant l'instruction `help()` !

??? python "Instruction `help()`"
    L'instruction `help(nom_de_la_fonction)` ou `help(module)` premet d'obtenir la liste des fonctions contenues dans ce module.

    Testez dans la cellule ci-dessous, les lignes suivantes et analysez-les:

    {{terminal()}}

    ```python
    help(len)
    ```

    ```python
    import math

    help(math)
    ```

??? python "Instruction `dir()`"

    Cette instruction permet de lister les attributs d'un objet (liste, tuple, dictionnaire, classe...).

    ```python
    number1 = [2, 3, 1]

    print(dir(number1))
    ```

    {{terminal()}}

    Ici, une longue liste d'attributs apparaît.

    On s'aperçoit ainsi que l'on peut, entre autres :

    - Ajouter un terme à la liste avec la méthode `append`
    - Trier une liste avec la méthode `sort`

    Vérifiez tout cela avec :

    ```python
    number1.append(4)
    print(number1)
    number1.sort()
    print(number1)
    ```

    {{terminal()}}

!!! info "`help()` et `dir()` en résumé"
    - L'instruction `help()` permet de se documenter sur des instructions, fonctions, modules...
    - L'instruction `dir()` permet de lister les attributs et méthodes d'un objet.

{{exercice(prem=1, titre="Module de gestion de listes")}}
    1. Créez un module personnalisé nommé `algos_classiques_listes.py` dans lequel vous mettrez toutes les fonctions concernant les listes. A savoir :
        - Recherche de la présence d'un élément $e$ dans la liste $L$: `dans_liste(e, L)` 
        - Recherche de la valeur maximale (et/ou minimale) des élément d'une liste $L$: `max_liste(L)`
        - Calcul de la moyenne des éléments d'une liste $L$: `moy_liste(L)`
        - Recherche de l'indice de l'élément minimum: `indice_min_liste(L)` 
        - Recherche du nb d'occurrences d'une valeur: `card_val_liste(e, L)`
        - Suppression de la première occurrence d'un élément: `supp_liste(e, L)`
        - **Vous veillerez à respecter dans la mesure du possible les recommandations de PEP8.**

    2. Créez un nouveau Notebook.

    Dans des nouvelles cellules, copiez/coller le code ci-dessous et testez-le :

    ??? python "Notebook Jupyter"
        {{jupyter()}}

    ```python
    import algos_classiques_listes as al

    help(al.dans_liste)

    print(al.dans_liste(2, [1, 2, 3]))

    print(al.max_liste([1, 2, 3]))

    print(al.moy_liste([1, 2, 3]))

    print(al.indice_min_liste([1, 2, 3]))

    print(al.card_val_liste(2, [2, 2, 2]))

    print(al.supp_liste(1, [2, 1, 4, 1, 3]))
    ```

    {{jupy_cor('algos_classiques_listes.ipynb&fromURL=/scripts/algos_classiques_listes.py')}}



## Gestion des erreurs

L'erreur étant humaine, même les meilleurs programmeurs en commettent. Ce qui peut avoir de grosses conséquences, tant au niveau humain (crash de navette spatiale...), économique (retour de produits défectueux...) ou encore en terme d'image et/ou de crédibilité.

Pour valider un code, il existe deux moments stratégiques :

- à l'écriture : il faut documenter proprement son code
- à l'exécution

C'est ce second point que nous allons développer.

### Erreurs classiques

#### Typage dynamique

Python est un langage à typage dynamique: il n'impose pas que le type des variables soit défini. Le type est alors déterminé à la volée au moment de l'interprétation du code. On peut donc à loisir changer le type de données d'une variable. Cela peut poser problème si on n'est pas prudent. D'autres langages, tels le C, Java ou Pascal sont à typage statique, donc nettement moins permissifs que Python.

Testez et analysez ce programme :

```python
a = "Hello World"
print(type(a))
a = 12
print(type(a))
```

{{terminal()}}

{{exercice(titre="Typage dynamique")}}
    Python est un langage à typage dynamique : il n'impose pas que le type des variables soit défini. Le type est
    alors déterminé à la volée au moment de l'interprétation du code. On peut donc à loisir changer le type de donnée d'une variable. Cela peut poser problème si on n'est pas prudent.

    ```python
    a = 'Hello world'
    print(type(a))
    a = 12
    print(type(a))
    ```

    D'autres langages, tels le C, Java ou Pascal sont à typage statique, donc nettement moins permissifs que Python.

    Corriger le programme ci-dessous :

    {{IDE('scripts/typage')}}

    ??? success "Corrigé"
        ```python
        from random import randint


        def fonc(n, liste_notes):
            somme = 0
            for elt in liste_notes :
                somme = somme + elt
            return somme/n

        nombre = 10
        x="Anatole"
        liste_notes = []
        liste_notes = [randint(0, 20) for i in range(nombre)]
        print(liste_notes, "\t", fonc(nombre, liste_notes))
        ```


#### Effet de bord

On appelle effet de bord la modification de valeurs référencées par des variables. Cela peut poser problème dans le cas de variables mutables, notamment lors de la copie d'une variable par affectation. En effet, lors d'une affectation du type `b = a`, ce n'est pas la valeur de $a$ qui est recopiée, mais son **identifiant**!

- Cas des variables **non mutables**

```python
a = 1961
b = a
print(a, "\t", b)
a = 1935
print(a, "\t", b)
```

{{terminal()}}

Comme les identifiants de `a` et `b` sont identiques, ils définissent la même plage mémoire pour les valeurs de ces deux variables. Autrement dit `a` et `b` ont la même valeur.

Cependant, toute modification de la variable `a` via une affectation créera une autre plage mémoire avec un nouvel identifiant : la variable `b` ne sera donc pas modifiée !

- Cas des variables **mutables**

Les variables mutables peuvent être modifiées par d'autres opérations qu'une affectation. or cela conserve l'identifiant ! Par conséquent, pour une variable de type mutable, l'identifiant ainsi que la plage mémoire allouée à la valeur de cette variable peuvent rester inchangés, même lorsque l'on change la valeur de cette variable.

```python
L1 = [1, 9, 6, 1]
L2 = L1
print(L1, "\t", L2)
L1[2: 4] = [3, 5]
print(L1, "\t", L2)
```

{{terminal()}}

Cette manière de procéder permet un gain de temps (copie rapide) et de mémoire(une seule plage mémoire pour deux variables). Mais elle pose un problème technique : si le contenu de la plage mémoire de la valeur de `L1` est modifié, cela entraîne automatiquement la modification de la valeur de `L2` puisqu'ils sont référencés par le même identifiant!

Pour le programmeur Python non averti, cet **effet de bord** peut provoquer une erreur de programmation difficile à élucider.

On peut néanmoins copier une liste sans provoquer d'effet de bord en utilisant une `deepcopy` :

```python
from copy import deepcopy


L1 = [1, 9, 6, 1]
L2 = deepcopy(L1)
print(L1, "\t", L2)
L1[2: 4] = [3, 5]
print(L1, "\t", L2)
```

{{terminal()}}

Un programme écrit selon le **paradigme fonctionnel** utilise des fonctions dites fonctionnelles (!) et se caractérise essentiellement par une chose : l'absence d'effets de bord. Le code ne dépend pas de données se trouvant à l'extérieur de la fonction courante et il ne modifie pas des données à l'extérieur de cette fonction. Il évite donc l'utilisation de variables globales.

Comparez les deux exemples ci-dessous :

{{IDE('scripts/increment_non_fonctionnel')}}

{{IDE('scripts/increment_fonctionnel')}}

!!! info "Rappel"
    La **portée** d'une variable correspond aux parties du programme pour lesquelles la variable est définie.
    - Une variable définie à l'intérieur d'une fonction est une variable **locale**. Elle ne sera pas reconnue au sein d'une autre fonction ni au sein du programme principal.
    - Une variable définie au niveau du programme principal est une variable **globale**. Elle est reconnue partour dans le programme, même au sein des fonctions.
    On peut faire en sorte qu'une variable déclarée au sein d'une fonction soit malgré tout une variable globale en utilisant l'instruction **global**. Mais c'est à éviter pour cause de confusion.

!!! note "En résumé"
    On appelle effet de bord la modification de valeurs référencées par des variables. Pour les éviter, le code intérieur d'une fonction ne doit pas modifier le code extérieur.
    La copie de variables immutables ne pose pas de souci. Mais la copie de variables mutables (listes, dictionnaires...) provoque un effet de bord. Il faut alors utiliser une copie "profonde".

{{exercice(titre="Effets de bord")}}
    On appelle effet de bord la modification de valeurs référencées par des variables. Pour les éviter, le code intérieur d’une fonction ne doit pas modifier le code extérieur. 

    La copie de variables immutables ne pose pas de souci ! Mais la copie de variables mutables (listes, dictionnaires..) provoque un effet de bord. Il faut alors utiliser une copie « profonde »

    Ex 1:

    ```python
    a = 1961
    b = a
    print(a, "\t", b)
    a = 1935
    print(a, "\t", b)
    ```

    Ex 2:

    ```python
    L1 = [1, 9, 6, 1]
    L2 = L1
    print(L1, "\t", L2)
    L1[2: 4] = [3, 5]
    print(L1, "\t", L2)
    ```

    Ex 3:

    ```python
    from copy import deepcopy


    L1 = [1, 9, 6, 1]
    L2 = deepcopy(L1)
    print(L1, "\t", L2)
    L1[2: 4] = [3, 5]
    print(L1, "\t", L2)
    ```

    Ex 3:

    ```python
    a = 0

    def increment_non_fonctionnel():
    global a
    a = a + 1
    return a

    print(increment_non_fonctionnel())
    print(increment_non_fonctionnel())
    ```
    et

    ```python
    a = 0

    def increment_fonctionnel(a):
    return a + 1
    
    print(increment_fonctionnel(a))
    print(increment_fonctionnel(a))
    ```

    Modifiez le programme ci-dessous pour que la fonction ne provoque pas d'effets de bord :

{{IDE('scripts/effet_bord')}}
    

test

### Débordement

Il existe deux sortes de débordement:

- On peut constater un **débordement négatif** sur une liste si on appelle la méthode `.pop()` sans s'assurer au préalable que la liste contient au moins un élément. 

- On sera confronté à un **débordement positif** lorsqu'on parcourt une liste au-delà de son dernier élément.

En général, la notion de débordement est associée à la notion de pile (voir chapitre 3).

Une pile est un conteneur dans lequel il est possible d'ajouter (empiler) et de retirer (dépiler) des éléments.

{{exercice(titre="Débordements")}}
    Modifiez les programmes ci-dessous pour empêcher tout débordement.
    **Programme 1 :**

    {{IDE('scripts/debordement1')}}

    **Programme 2 :**

    {{IDE('scripts/debordement2')}}


{{exercice(titre="Instruction conditionnelle non exhaustive ou contenant un mauvais choix des inégalités")}}
    Une séquence de `if`, `elif` et `else` peut être incomplète, complète mais construite avec un ordre incorrect des conditions, ou encore contenir un traitement conditionnel d'égalité conduisant à des erreurs.

    Dans les différents programmes ci-dessous, traquez l'erreur et corrigez-là !

    ensuite, vous attribuerez à chacun de ces programmes le type d'erreur adéquat parmi :
    - séquence incomplète
    - séquence complète mais construite avec un ordre incorrect des conditions
    - séquence contenant un traitement conditionnel d’égalité conduisant à des erreurs

    {{jupy('instructions_conditionnelles.ipynb')}}

    {{jupy_cor('instructions_conditionnelles_corr.ipynb')}}


#### Comparaisons

{{exercice(titre="Comparaisons et calculs entre flottants")}}
    De nombreux algorithmes nécessitent de comparer des valeurs entre elles. Il est important de prévoir tous les cas de figure de manière exhaustive et sans commettre d'erreur dans l'ordre des évaluations pour les inégalités. Si l'ordre n'a pas d'importance pour les égalités simples, la notion même d'égalité doit être nuancée.
    ??? warning "Difficile comparaison des réels"
        La comparaison d'entier (type `int`) ne pose pas de problèmes particuliers. Il n'en va pas de même avec les réels (type `float`).

        En effet, certaines valeurs sont seulement des valeurs approchées. Exemple pour la valeur 0.3 affichée avec un très grand nombre de décimales:

        ```python
        print("{:.80f}".format(0.3))
        ```

        {{terminal()}}

        Les tests d'égalité stricte sont donc à éviter entre réels. Il faudra privilégier des comparaisons de valeurs arrondies (instruction `round`) ou tolérer un faible écart.
        Certaines valeurs réelles sont seulement des valeurs approchées. 

        Exemple pour la valeur 0.3 affichée avec un très grand nombre de décimales : 

        ```python
        print("{:.80f}".format(0.3))
        ```
        *donne : 0.29999999999999998889776975374843459576368331909179687500000000000000000000000000*

        Les tests d’égalité stricte sont donc à éviter entre réels. Il faudra privilégier des comparaisons de valeurs arrondies (instruction round) ou tolérer un faible écart.

    - Afficher les deux nombres x et y avec une cinquantaine de décimales puis transformer le test d'égalité stricte en un test de comparaison d'arrondis en utilisant la fonction round (help() est votre amie...). 
    - Ensuite, vous écrirez un test de comparaison tolérant un faible écart (ex : ecart_tolere = 0.01)

    ```python
    x = 0.1 + 0.1 + 0.1
    y = 0.3

    print(x == y)
    ```

    {{IDE()}}

    ??? success "Corrigé"
        ```python
        x = 0.1 + 0.1 + 0.1
        y = 0.3

        print("{:.50f}".format(x))

        print("{:.50f}".format(y))

        print(round(x, 10) == round(y, 10))

        ecart_tolere = 0.01

        print(abs(x-y) <= ecart_tolere)
        ```


{{exercice(titre="Comparaison physique entre variables")}}
    Toute variable peut être considérée comme un objet, défini par différentes caractéristiques telle que leur adresse en mémoire. Des copies simple peuvent alors poser problèmes pour des variables mutables.
        
    Exécutez le programme suivant puis expliquer les résultats obtenus.

    *Remarque : la fonction id() renvoie l'identifiant d'une variable.*

    {{IDE('scripts/variable')}}

    ??? success "Corrigé"
        En affectant l1 à l2, on octroie la même adresse mémoire aux deux listes, donc le == ou le is pointe vers le même endroit.

        Par contre, en créant l3 "manuellement", on le crée à une nouvelle adresse. Donc les valeurs de l1 et l3 sont les mêmes, mais les listes ne pointent pas à la même adresse.

### Les exceptions

Même si un code est syntaxiquement correct, il peut générer des erreurs. Quand Python rencontre une erreur lors de l'exécution d'un code, on dit qu'il **lève une exception**.

Cela génère l'affichage d'un message explicite et l'arrêt du programme si ces exceptions ne sont pas gérées.

**Gérer les exceptions** consiste à **anticiper les erreurs** (hors de contrôle du concepteur) de manière à ce que le programme ne s'arrête pas. Contrairement aux assertions, les exceptions permettent ainsi de ne pas planter le programme en proposant une alternative de traitement des cas problématiques avec les instructions `try/except/else/finally`. Elles doivent **demeurer dans le code final**.

En effet, la plupart des programmes ont vocation à être utilisés par d'autres utilisateurs que leur concepteur, et ceux-ci peuvent entrer des valeurs de variables provoquant des erreurs lors de l'exécution, même si le code du concepteur est initialement correct. Le concepteur doit anticiper ces erreurs dues à l'utilisateur.



{{exercice(titre="Liste non exhaustive d'exceptions")}}
    Il existe un certain nombre de catégories d'exceptions clairement identifiées et repérées par un nom adéquat.

    Dans les lignes ci-dessous, un certain nombre de codes erronés sont écrits. Identifier l'exception correspondante parmi celles proposées ci-dessous et associées les au code.

    ```
    a) SyntaxError: invalid syntax
    b) ZeroDivisionError: division by zero
    c) FileNotFoundError: [Errno 2] No such file or directory: 'mon_fichier'
    d) IndexError: list index out of range
    e) ValueError: invalid literal for int() with base 10: 'seize'
    f) TypeError: unsupported operand type(s) for +: 'int' and 'str'
    g) NameError: name 'z' is not defined
    ```

    Cette liste est non exhaustive...

    1. 
    ```python
    somme = 0
    L = [2, 5, '6', 9]
    for element in L:
        somme = somme + element
    ```
    2. 
    ```python
    def div(x, y):
        return x/y

    for i in range(5):
        print(div(5, i))
    ```
    3. 
    ```python
    x = 2
    y = x + z
    print(y)
    ```
    4. 
    ```python
    l = [1, 2, 3]
    for i in range(5):
        print(l[i])
    ```
    5. 
    ```python
    age = "seize"
    print(int(age))
    ```
    6. 
    ```python
    for i in range(5)
        print(i)
    ```
    7. 
    ```python
    open('mon_fichier')
    ```

    ??? success "Correction"
        - a → 6
        - b → 2
        - c → 7
        - d → 4
        - e → 5
        - f → 1
        - g → 3

??? info "Stack trace"
    Au-dessus du type d'exception (ValueError, IndexError, etc...) se trouve une description de ce qui a causé l'erreur. C'est ce qu'on appelle une stack trace, et ça représente la pile d'appels qui ont amené à cette erreur. Pour comprendre votre erreur, il faut lire ce texte à l'envers, de bas en haut.

    Testez et analysez le programme suivant :

    ```python
    def une_fonction():
        return 1/0
    

    def une_autre_fonction():
        une_fonction()


    une_autre_fonction()
    ```

    {{IDE()}}

??? info "Gestion des exceptions"
    On utilise les instructions `try/except` et éventuellement `else` et `finally`.

    - **Le bloc `try`** permet de tester un bloc de code et ne l'exécute que s'il ne contient aucune erreur. Dans le cas contraire, le programme ignore la totalité du code dans ce bloc et passe au bloc suivant `except`
    - **Le bloc `except`** sera exécuté en cas d'erreur
    - **Le bloc `else`** permet d'exécuter une action si aucune erreur ne survient dans le bloc `try`
    - **Le bloc `finally`** vous permet d'exécuter du code, quel que soit le résultat des blocs `try` et `except`.

    *Exemple* : structure complète possible

    ```python
    try:
        resultat = numerateur/denominateur
    except NameError:
        print("La variable numerateur ou denominateur n'a pas été définie.")
    except TypeError:
        print("La variable numerateur ou denomniateur possède un type incompatible avec la division")
    except ZeroDivisionError:
        print("La variable denominateur est égale à 0.")
    else:
        print("Le résultat est : ", resultat)
    finally:
        print("Vous venez de calculer une division")
    ```

    {{IDE()}}

## Jeux de tests

Afin de vérifier le bon fonctionnement d'un algorithme, il faut aussi tester son programme avec un jeu de tests judicieusement choisi.

Pour cela, on peut:

- Utiliser des assertions dans le programme principal
- Insérer des tests dans le prototype même de la fonction. Cela présente de gros avantages : la fonction peut être transférée à un autre programme, ou données à un autre programmeur : celui-ci aura tous les renseignements nécessaires.

Voyons un exemple de test inséré dans le prototype d'une fonction :

```python
"""
...

Exemples :
>>> indice_maximum_liste([2, 0, 8, -3, 9, 6])
4
"""
```
Pour que ce test tapé dans le prototype de la fonction soit reconnu, exécuté et comparé au résultat souhaité, il faudra toutefois ajouter les trois lignes de code suivantes dans votre prorgamme principal :

```python
if __name__ == '__main__':
  import doctest
  
  
  doctest.testmod()
```

{{exercice(titre="Docstring et Doctests")}}

    Faire la docstring complète de ce module (général et pour chaque fonction), en incluant des exemples à tester avec le module Doctest.
    Ne pas oublier de respecter le PEP8


    {{IDE('scripts/module_liste')}}

    ??? success "Corrigé"
        ```python
        # module sur les listes

        """
        Ce module contient les différentes fonctions sur les listes suivantes:

            - dans_liste: Recherche de la présence d'un élément dans la liste
            - max_liste: Recherche de la valeur maximale (et/ou minimale) des élément d'une liste
            - moy_liste: Calcul de la moyenne des élément d'une liste
            - indice_min_liste: Recherche de l'indice de l'élément minimum 
            - card_val_liste: Recherche du nb d'occurrences d'une valeur 
            - supp_liste: Suppression de la première occurrence d'un élément 
        """


        def dans_liste(x,L):
            """
            Cette fonction permet de rechercher si un élément est dans une liste ou non.
            
            param x : Elément recherché (float)
            param L : Liste pour la recherche (list)
            return : présence ou non (bool)
            
            Exemple :
            
            >>> dans_liste(2, [1, 2, 3])
            True
            >>> dans_liste(4, [1, 2, 3])
            False
            """
            msg = False
            
            for e in L:
                if e == x:
                    msg = True
            
            return msg


        def max_liste(L):
            """
            Cette fonction permet de rechercher le plus grand élément d'une liste.
            
            param L : Liste (list)
            return : valeur max (float)
            
            Exemple :
            
            >>> max_liste([1, 2, 3])
            3
            >>> max_liste([4, 1, 2])
            4
            """
            
            maxi = L[0]
            for i in range(1, len(L)):
                if L[i] > maxi:
                    maxi = L[i]
                    
            return maxi


        def moy_liste(L):
            """
            Cette fonction permet de calculer la moyenne des valeurs d'une liste.
            
            param L : Liste dont on cherche la moyenne (list)
            return : valeur moyenne (float)
            
            Exemple :
            
            >>> moy_liste([1, 2, 3])
            2
            """ 
            
            Somme = 0
            for e in L:
                Somme = Somme + e
                
            moyenne = Somme/len(L)
            
            return moyenne


        def indice_min_liste(L):
            """
            Cette fonction permet d'avoir l'indice de la valeur minimum d'une liste.
            
            param L : Liste dont on cherche l'indice du min (list)
            return : indice du min (int)
            
            Exemple :
            
            >>> indice_min_liste([1, 2, 3])
            0
            >>> indice_min_liste([4, 2, 1])
            2
            """ 
            
            i = 0
            indice = 0
            mini = L[0]
            for e in L:
                if L[i] < mini:
                    L[i] = mini
                    indice = i
                i = i + 1
                
            return indice


        def card_val_liste(x, L):
            """
            Cette fonction permet d'avoir le nombre de fois où apparaît une occurence dans une liste.
            
            param x : occurence à compter (float ou str)
            param L : Liste où on compte (list)
            return : nombre d'occurence (int)
            
            Exemple :
            
            >>> card_val_liste(2, [1, 2, 3])
            1
            >>> card_val_liste(2, [2, 2, 2])
            3
            """
            
            nb = 0
            for e in L:
                if e == x:
                    nb = nb + 1
            
            return nb


        def supp_liste(x, L):
            """
            Cette fonction permet de supprimer la première occurence d'un élément d'une liste.
            
            param x : élément à supprimer
            param L : Liste de départ(list)
            return : Liste sans l'occurence de l'élément (list)
            
            Exemple :
            
            >>> supp_liste(1, [2, 1, 4, 1, 3])
            [2, 4, 1, 3]
            """
            arret = False
            for e in L:
                if e == x and arret == False:
                    indice=L.index(e)
                    del L[indice]
                    arret = True
            return L

        if __name__ == '__main__':
            import doctest
        
        
            doctest.testmod()
        ```