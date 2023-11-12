# Décidabilité et Calculabilité

??? conclu "Programme"
    |Notions|Compétences|Remarques|
    |--|--|--| 
    Notion de programme en tant que donnée.<br> Calculabilité, décidabilité. | Comprendre que tout programme est aussi une donnée.<br> Comprendre que la calculabilité ne dépend pas du langage de programmation utilisé.<br> Montrer, sans formalisme théorique, que le problème de l’arrêt est indécidable.| L’utilisation d’un interpréteur ou d’un compilateur, le téléchargement de logiciel, le fonctionnement des systèmes d’exploitation permettent de comprendre un programme comme donnée d’un autre programme.
    
## Programme en tant que donnée

Les théories de la **calculabilité** et de la **complexité** sont deux pans de la théorie du calcul :

Que veut dire calculer ? Un ordinateur peut-il tout calculer ?

C'est en 1936 que *Allan Turing (1912-1954)* a apporté des réponses à ces questions, et la conclusion de ses travaux... va vous étonner :)

Nous allons tout d'abord expliciter un point important qui sera le fondement de la théorie de la calculabilité : **un programme est aussi une donnée**.

Cela peut paraître étonnant à première vue puisqu'on est habitué à traiter :

- les programmes dans des fonctions
- les données dans des variables

Fonctions et variables sont des objets de nature différente en apparence : si on se raccroche à ce que l'on connaît en python, une fonction se déclare avec le mot clé def et une variable s'initialise avec l'opérateur d'affectation =.

Prenons en exemple l'algorithme d'Euclide, un algorithme vieux de plus de 2500 ans permettant de calculer le PGCD de 2 nombres. On peut l'écrire à l'aide d'une fonction Python:

```python
def euclide(a, b):
    if a < b: 
        a, b = b, a
    while b: 
        a, b = b, a%b
    return a
```

Dans ce programme Python, `euclide` est une fonction et `a` et `b` sont des données. Ils ne semblent pas être de nature comparable :

```python
>>> euclide(35, 49)
7
```

Et pourtant, à y regarder de plus près, notre algorithme programmé dans la fonction `euclide` n'est rien d'autre qu'une succession de caractères. On peut même pousser la réflexion jusqu'à créer une chaîne de caractère contenant ce programme :


```python
mon_programme = "def euclide(a, b):\n\tif a < b: a, b = b, a\n\twhile b: a, b = b, a%b\n\treturn a"
```

Maintenant mon algorithme est devenu une variable. On peut alors construire une machine universelle capable d'évaluer n'importe quelle donnée contenant un algorithme formalisé dans le langage Python :

```python
def universel(algo, *args):
    exec(algo)
    ligne1 = algo.split('\n')[0]
    nom = ligne1.split('(')[0][4:]
    return eval(f"{nom}{args}")
```

A présent je peut invoquer ma machine universelle en lui passant en données :

- la variable contenant mon algorithme
- les arguments sur lequel celui-ci va travailler et obtenir la réponse :
```
>>> universel(mon_programme,35,49)\
7
```

Dans l'exemple ci-dessus, vous pouvez constater que le programme et les données sur lesquelles il agit sont de même nature : ce sont 3 variables passées en paramètres à ma fonction universelle.


!!! note "En conclusion"
    Un programme est aussi une donnée.

{{exercice(prem=1, titre="Le programme comme donnée")}}

    Citez d'autres exemples où un programme est considéré comme une donnée?

    ??? note "Correction"
        Les programmes qui manipulent d'autres programmes en tant que données sont courants. On peut citer :
        
        - Les compilateurs qui prennent en entrée un texte et le transforment en une suite de 0 et 1 exécutable par le microprocesseur de l'ordinateur 
        - L'interpréteur python fait de même, c'est d'ailleurs lui que nous avons mis à contribution dans notre machine universelle 
        - un système d'exploitation peut être vu comme un programme qui fait "tourner" d'autres programmes 
        - pour télécharger un logiciel on utilise un gestionnaire de téléchargement qui est lui-même un logiciel. 
        - Le navigateur internet en est un autre exemple : il reçoit un lot de données d'internet via le protocole http et interprète certaines d'entre elles comme programme (javascript) et d'autres comme données (html) etc... 

## Décidabilité

Une propriété est décidable si l'on peut déterminer en un nombre fini d'étapes si elle est vraie ou fausse quel que soit le contexte de départ. (On parle de problème de décision, à réponse oui ou non) Attention, cela ne veut pas dire que la propriété doit être toujours fausse ou vraie. Donnons, pour illustrer la définition, des problèmes décidables.

- Savoir si un nombre est premier est décidable. La réponse sera soit 'vrai', soit 'faux' et un algorithme simple est de diviser ce nombre par les entiers inférieurs à lui même. Il y a donc un nombre fini d'étapes et une réponse qui est soit vrai soit faux.
- Dire si un nombre est pair (on regarde le reste de la division Euclidienne par 2)

Les exemples ne manquent pas. On peut alors se poser la question: "tout est-il décidable?". La réponse est non. Si c'était le cas, cela voudrait dire que l'on pourrait prouver qu'une propriété mathématique est vraie ou fausse avec un algorithme !

Donnons des exemples de problèmes non décidables. Je parcours un réseau aléatoirement, est-ce que je vais atteindre une cible données en un nombre fini d'étapes? Pas forcément, même si la probabilité d'arriver à destination tend vers 1 quand le nombre d'étapes tend vers l'infini!

Un autre exemple plus connu: le problème de l'arrêt d'un programme est-il décidable? Est-ce que je peux écrire un programme qui me dira si un programme va s'arrêter ou non (selon les valeurs d'entrées)? Nous verrons que l'on peut prouver que ce problème n'est pas décidable: il n'existe pas d’algorithme capable de prédire si n'importe quel programme va s'arrêter ou non. Cela vous plairez bien...n'avez vous jamais fait de boucle infinie?

Je rebondis aussi sur la phrase "écrire un programme qui me dira si un programme va s'arrêter ou non". Cela signifie que je considère que le programme à tester est une donnée du programme testeur. Est-ce choquant? Non, lorsque vous utilisez l'idle de python, vous tapez un programme, qui va s'executer grace au programme de Python (votre programme est déjà une donnée puisque vous l'enregistrez), qui lui même est écrit en C et un programme sert à compiler le C en langage assembleur puis va l'écrire en pur code binaire (suite de 0 et de 1). Autre remarque lorsque qu'un compilateur s'arrête pour vous indiquer une erreur, ou qu'un éditeur de texte destiné à la programmation vous indique qu'il y a une erreur dans votre programme....c'est bien un programme qui vérifié votre programme. Bref des programmes qui ont pour donné des programmes c'est très fréquent !


## Calculabilité

La calculabilité est la branche de l'algorithmique qui s'intéresse aux questions suivantes

- Peut-on tout calculer à l'aide d'un ordinateur ?
- Que signifie calculer à l'aide d'un ordinateur ?

Un programme est aussi une donnée. Il est donc manipulable par des algorithmes. Peut-on concevoir un algorithme permettant de savoir si un programme passé en paramètre :

- va se terminer ? c'est à dire renvoyer un résultat
- va provoquer une erreur ?
- est correct et ne contient pas de bugs ?

Ce sont des questions fondamentales au coeur de l'algorithmique et de l'informatique en général. Imaginez un programme capable de dire si un autre programme est correct ou buggué ! vous commencez à sentir que cela ne va pas être possible, hélas ...

**Théorème fondamental de la calculabilité**

Il existe des problèmes non calculables par des fonctions.

L'argument central pour justifier cette affirmation peut s'énoncer en deux phrases :

- l'ensemble des algorithmes que l'on peut programmer par des fonctions (en python par exemple) est dénombrable puisqu'une fonction est une suite finie de caractères
- l'ensemble des problèmes est un ensemble indénombrable (cela peut être démontré) Il n'y a donc tout simplement pas assez d'algorithmes pour résoudre tous les problèmes.

Pour rappel, un infini dénombrable est un infini que l'on peut compter : $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$ sont dénombrables par opposition à $\mathbb{R}$ qui est indénombrable. Il est impossible de numéroter les nombres réels. L'infini indénombrable des nombres réels est bien plus grand que l'infini dénombrable des entiers.

De même que la majorité des nombres sont des nombres réels (bien plus nombreux que les entiers), la majorité des problèmes ne sont pas calculables !

## Le problème de l'arrêt

Le premièr problème explicite non calculable a été décrit par Turing en 1936 : Il s’agit du **problème de l’arrêt** qui s'énonce ainsi : étant donné un algorithme *A* et une prenant en paramètre *m*, existe t-il un algorithme permettant de décider si *A(m)* s'arrête ou pas.

C'est une question cruciale et pourtant, elle est indécidable : Il n'existe aucun moyen de savoir en général si un algorithme quelconque va s'arrêter ou non.


### La conjecture de Syracuse

Un exemple de cette indécision est la conjecture de Syracuse, encore non résolue par les mathématiciens à ce jour. Et pourtant son énoncé est très simple :

Soit un entier $n$. On définit la suite $u_{n}$ par récurrence ainsi :

- si $n$ est pair, $u_{n+1}=\dfrac{n}{2}$
- si $n$ est impair, $u_{n+1}=3n+1$

$u_{0}$ étant donné, on peut ainsi calculer les termes de proche en proche. Par exemple si on part de 7, on obtient la suite suivante :

7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

Les derniers termes sont 4, 2, 1. On s'arrête ici dans l'énumération des termes car cela constitue un cycle. En effet 1 est impair donc on fait $3 \times 1+1=4$ ce qui tourne en boucle.

A ce jour, tous les nombres essayés conduisent inévitablement à ce cycle 4, 2, 1 mais nul n'a été capable de le démontrer.

S'il existait une solution au problème de l'arrêt, alors la conjecture de Syracuse serait résolue car on saurait prédire l'arrêt de l'algorithme. Ce n'est pas le cas.

{{exercice(titre="Fonction Syracuse")}}
    Programmez cet algorithme en Python. Vous écrirez une fonction *syracuse* prenant en paramètre un nombre et renvoyant la liste des termes de la suite jusqu'à ce qu'elle atteigne 1.

    ??? success "Correction"
        ```python
        def syracuse(n):
            L = [n]
            while n != 1:
                if n%2 == 0:
                    n = n//2
                else:
                    n = 3*n+1
                L.append(n)
            return L

        syracuse(7)
        ```

### Preuve de Turing

Pour prouver que le problème de l'arrêt n'est pas calculable, Turing en 1936 a fait ce raisonnement :

On raisonne par l'absurde et on suppose qu'il existe une fonction arrêt qui prend en paramètres un algorithme *A* et des arguments *m* (on se rappelle qu'un algorithme est une donnée). Cela pourrait prendre cette forme en Python :

```python
def arret(A, m):
   ... # Tout est ici !
   if ...:
      return True 
   else:
      return False
```

Le vrai problème est bien sûr de compléter les ... mais on suppose ici que quelqu’un a su le faire.

On peut alors créer un paradoxe à l'aide de l'algorithme suivant (écrit en pseudo python approximatif...):

```python
def paradoxe():
   if arret(paradoxe): # paradoxe est une donnée passée en paramètre à arrêt
       while True:
          pass # on fait une boucle infinie si paradoxe s’arrête
    else:
       return True # On s'arrête si paradoxe ne s'arrête pas
```

Que donne la fonction `arret(paradoxe)` (on cherche à savoir si paradoxe s'arrête) ?

- Si `paradoxe` s'arrête, alors `paradoxe` ne s'arrête pas car on rentre dans la boucle infinie `while True`.
- Si `paradoxe` ne s'arrête pas, alors `paradoxe` s'arrête car le return True met fin au programme.

Il est donc impossible de connaître le résultat de l'appel `arret(paradoxe, paradoxe)` car il ne peut valoir True et False en même temps !

Cette contradiction montre donc que le **problème de l'arrêt est indécidable**. Il en est de même pour la majorité des problèmes en algorithmique !

Retrouvez cette preuve dans cette vidéo (en anglais, facile à comprendre) :

<iframe title="Preuve_probleme_arret" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/08577162-a889-4591-b9f9-3f03389cb0a1" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups" width="560" height="315" frameborder="0"></iframe>


{{exercice(titre="Division par 0")}}
    Démontrez qu'il est impossible de créer une fonction `div0` qui détecte les divisions par 0 dans une fonction.

    ??? note "Correction"
        Si une telle fonction existe :

        ```python
        def div0(A, m) :
            ...
            if division par zero existe :
                return True
            else :
                return False
        ```
        
        Au moment d’exécuter ce programme, il faut passer la ligne if  division par zero existe   , et donc tester dans le programme A  un calcul menant à une division par 0, ce qui mathématiquement renvoie forcément une erreur, et donc interrompt le programme div0.

## Conclusion

La détection de bugs (comme des boucles infinies par exemple) est une activité cruciale en informatique. Il existe des programmes capables de détecter des erreurs dans d'autres programmes : les environnements de développement modernes comme VScode ou PyCharm sont capable de souligner vos erreurs en python alors même que vous tapez le programme, et cela constitue un grand gain de temps pour le développeur.

En France, depuis l'accident du vol 501 d'Ariane 5 en 1996 dû à une erreur de programmation, le développement de programmes de preuves de correction a connu une forte croissance.

Un bel exemple de progrès réalisé grâce à ces programmes est le logiciel de la ligne de métro automatique 14 (Météor) à Paris: cette ligne a été mise en service sans test en condition réelles : son programme a été mathématiquement prouvé sans faute. Depuis sa mise en service, aucun bugs n'a été à déplorer.

Malheureusement, un algorithme général permettant de prouver qu'un programme fonctionne n'existe pas, cela fait partie des très nombreux problèmes indécidables. Il n'y aura donc jamais de système permettant de s'assurer que n'importe quel programme est fiable, même si c'est réalisable pour quelques exemples particuliers comme le Météor.
