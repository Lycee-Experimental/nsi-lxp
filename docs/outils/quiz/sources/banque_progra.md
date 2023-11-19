### Langages et programmation (Première)

Quel est le seul langage de programmation parmi les propositions suivantes ?

1. [ ] HTML
1. [ ] CSS
1. [X] C++
1. [ ] WEB


### Langages et programmation (Première)

Parmi ces langages, lequel n'est pas un langage de programmation ?

1. [X] HTML
1. [ ] JavaScript
1. [ ] PHP
1. [ ] Python

### Langages et programmation (Première)

On exécute le script suivant :

```{.quiz}
n = 6
s = 0
while n >= 0:
    s = s + n
    n = n -1
```

Que contient la variable `s` à la fin de cette exécution ?

1. [ ] 0
1. [ ] 6
1. [ ] 15
1. [X] 21


### Langages et programmation (Première)

La documentation de la bibliothèque random de Python précise que 
```{.quiz}
random.randint(a,b)` 
    renvoie un entier aléatoire N tel que a ≤ N ≤ b.  
```
Afin d’obtenir un entier choisi aléatoirement dans l’ensemble `{-4 ; -2 ; 0 ; 2 ; 4}`, après avoir importé la librairie random de Python, on peut utiliser l’instruction :

1. [ ] `random.randint(0,8)/2`
1. [ ] `random.randint(0,8)/2 - 4`
1. [ ] `random.randint(0,4)*2 - 2`
1. [X] `(random.randint(0,4) - 2) * 2`


### Langages et programmation (Première)

On définit la fonction :

```{.quiz}
def f(a,b):
    assert b!=0,'le deuxième argument est nul'
    result = a/b
    return result
```

Qu'obtient-on en exécutant la commande `r = f(4,0)` ?


1. [ ] une erreur ZeroDivisionError: division by zero et l'arrêt de l'exécution
1. [ ] une erreur NameError: name 'b' is not defined et l'arrêt de l'exécution
1. [ ] une erreur AssertionError: le deuxième argument est nul et la variable r prend la valeur 0
1. [X] une erreur AssertionError: le deuxième argument est nul et l'arrêt de l'exécution


### Langages et programmation (Première)

On définit la fonction suivante :

```{.quiz}
def f(x,y):
    x = x + y
    y = x - y
    x = x - y
    return (x,y)
```
Quel est la valeur renvoyée par l'appel `f(2019,2020)` ?

1. [ ] (2019,2019)
1. [ ] (2019,2020)
1. [X] (2020,2019)
1. [ ] (2020,2020)


### Langages et programmation (Première)

T est un tableau de nombres entiers non vide. Que représente la valeur de `s` renvoyée par cette fonction ?

```{.quiz}
def mystere(T):
    s = 0
    for k in T:
        if k % 2 == 0:
            s = s+k
    return s
```

1. [ ] la somme des valeurs du tableau T
1. [ ] la somme des valeurs positives du tableau T
1. [ ] la somme des valeurs impaires du tableau T
1. [X] la somme des valeurs paires du tableau T


### Langages et programmation (Première)
On exécute le script suivant :
```{.quiz}
def calcul(a,b):
    a = a + 2
    b = b + 5
    c = a + b
    return c
a,b = 3,5
calcul(a,b)
```

À la fin de cette exécution :

1. [X] a vaut 3, b vaut 5 et c vaut 15
1. [ ] a vaut 3, b vaut 5 et c n'est pas défini
1. [ ] a vaut 5, b vaut 10 et c vaut 15
1. [ ] a vaut 5, b vaut 10 et c n'est pas défini


### Langages et programmation (Première)
Ce programme ne renvoie pas toujours ses trois arguments dans l’ordre croissant. Parmi les tests suivants, lequel va permettre de détecter l’erreur ?

```{.quiz}
def ranger(a, b, c):
    if a > b :
        a, b = b, a
    if b > c:
        b, c = c, b
    return a, b, c
```

1. [ ] ranger(1,2,3)
1. [X] ranger(3,4,1)
1. [ ] ranger(1,3,2)
1. [ ] ranger(4,2,3)

### Langages et programmation (Première)
On considère le code suivant :

```{.quiz}
if x &lt; 4:
    x = x + 3
else:
    x = x - 3
```

Quelle construction élémentaire peut-on identifier ?

1. [ ] une boucle non bornée
1. [X] une structure conditionnelle
1. [ ] une boucle bornée
1. [ ] un appel de fonction


### Langages et programmation (Première)

La documentation de la fonction floor de la bibliothèque math est : 
`floor(x) : Return the floor of x as an Integral. This is the largest integer <= x.`

Que vaut floor(-2.2) ?

1. [ ] –2
1. [X] –3
1. [ ] on obtient une erreur, car –2.2 n'est pas un entier
1. [ ] 2.2


### Langages et programmation (Première)

On considère la fonction suivante :
```{.quiz}
def comparaison(a,b):
    if a < b:
        return a
    else:
        return b
```

Quel est le type de la valeur renvoyée par l'appel `comparaison(6,5)` ?

1. [ ] un booléen (vrai/faux)
1. [X] un nombre entier
1. [ ] un nombre flottant
1. [ ] une chaîne de caractères



### Langages et programmation (Première)

La fonction `ajoute(n,p)` codée ci-dessous en Python doit calculer la somme de tous les entiers compris entre n et p (n et p compris).

Par exemple, ajoute(2,4) doit renvoyer 2+3+4 = 9.
```{.quiz}
def ajoute(n,p):
    somme = 0
    for i in range(.........): # ligne à modifier
        somme = somme + i
    return somme
```

Quelle est la bonne écriture de la ligne marquée à modifier ?


1. [ ] for i in range(n,1,p):
1. [ ] for i in range(n,p):
1. [X] for i in range(n,p+1):
1. [ ] for i in range(n-1,p):


### Langages et programmation (Première)

On a défini une liste `L` de nombres entiers.
Quelle est la valeur de la variable `m` à la fin de l'exécution du script suivant ?

```{.quiz}
m = L[0]
for j in range(len(L)):
    if m < L[j]:
        m = L[j]
```

1. [ ] la moyenne de la liste L
1. [ ] le minimum de la liste L
1. [X] le maximum de la liste L
1. [ ] la longueur de la liste L


### Langages et programmation (Première)

On exécute le script suivant :

```{.quiz}
a = 4
b = 4
c = 4
while a < 5:
    a = a - 1
    b = b + 1
    c = c * b
```

Que peut-on dire ?

1. [X] ce programme ne termine pas
1. [ ] à la fin de l'exécution, la variable a vaut 5
1. [ ] à la fin de l'exécution, la variable b vaut 34
1. [ ] à la fin de l'exécution, la variable c vaut 42


### Langages et programmation (Première)

Quelle est la valeur de la variable `x` à la fin de l'exécution du script suivant :

```{.quiz}
def f(x):
    x = x + 1
    return x + 1
x = 0
f(x+1)
```

1. [ ] 0
1. [ ] 1
1. [ ] 2
1. [X] 3


### Langages et programmation (Première)

On considère le code suivant :

```{.quiz}
def moyenne(notes):
    somme = 0
    for cpt in range(len(notes)):
        ....
    m = somme/len(notes)
    return m
```

Par quoi remplacer la ligne en pointillée pour que cette fonction calcule la moyenne d'une liste de nombres ?

1. [X] `somme = somme + notes[cpt]`
1. [ ] `somme = notes[cpt]`
1. [ ] `somme = cpt`
1. [ ] `somme = somme + cpt`


### Langages et programmation (Première)

n étant un entier strictement positif, la fonction suivante calcule sa factorielle, c'est-à-dire le produit
1 × 2 × 3 × ⋯ × (n − 1) × n. Comment faut-il écrire la ligne en pointillés ci-dessous pour ce faire ?

```{.quiz}
def factorielle(n):
    f = 1
    .........
        f = f * i
    return f
```

1. [ ] for i in range(1,n):
1. [ ] for i in range(n+1):
1. [ ] for i in range(0,n):
1. [X] for i in range(1,n+1):


### Langages et programmation (Première)

On exécute le code suivant :

```{.quiz}
def f(t):
    n = len(t)
    for i in range(n-1):
        if t[i] > t[i+1]:
            t[i],t[i+1] = t[i+1],t[i]
L = [4, 8, -7, 0, 1]
f(L)
```

Quelle est la valeur de `L` après l'exécution de ce code ?

1. [ ] [4, -7, 8, 0, 1]
1. [ ] [-7, 0, 1, 4, 8]
1. [ ] [4, 8, -7, 0, 1]
1. [X] [4, -7, 0, 1, 8]


### Langages et programmation (Première)

La fonction suivante calcule la racine carrée du double d’un nombre flottant.

```{.quiz}
from math import sqrt
def racine_du_double(x):
    return sqrt(2*x)
```

Quelle est la précondition sur l'argument de cette fonction ?

1. [ ] x < 0
1. [X] x >= 0
1. [ ] 2 * x > 0
1. [ ] sqrt(x) >= 0


### Langages et programmation (Première)

On exécute le code suivant :

```{.quiz}
def essai():
    a = 2
    b = 3
    c = 4
    return a
    return b
    return c
t = essai()
```

Quelle est la valeur de `t` après l'exécution de ce code ?

1. [X] 2
1. [ ] 3
1. [ ] 4
1. [ ] (2,3,4)


### Langages et programmation (Première)

On définit la fonction suivante :

```{.quiz}
def f(x,y,z):
    if x+y == z:
        return True
    else:
        return False
```

Quel type de paramètres est-il déconseillé d'utiliser avec cette fonction ?

1. [ ] les entiers
1. [ ] les chaînes de caractères
1. [X] les flottants
1. [ ] les tableaux


### Langages et programmation (Première)

On exécute le code suivant :

```{.quiz}
def f(t):
    n = len(t)
    tmp = t[0]
    for i in range(1,n-1):
        t[i] = t[i+1]
    t[n-1] = tmp

L = [1, 3, 4, 5, 2]
f(L)
```

Quelle est la valeur de `L` après l'exécution de ce code ?

1. [X] [1, 4, 5, 2, 1]
1. [ ] [2, 1, 3, 4, 5]
1. [ ] [3, 4, 5, 2, 1]
1. [ ] [2, 5, 4, 3, 1]


### Langages et programmation (Première)

On considère l'instruction suivante :

```{.quiz}
resultat = [0] * 7
```

Que contient la variable `resultat` après son exécution ?

1. [ ] 0
1. [ ] [0]
1. [ ] [[0], [0], [0], [0], [0], [0], [0]]
1. [X] [0, 0, 0, 0, 0, 0, 0]


### Langages et programmation (Première)

On exécute le script suivant :

```{.quiz}
resultat = [1 * 7]
```

Que contient la variable `resultat` après son exécution ?

1. [ ] 1
1. [ ] [1]
1. [X] [7]
1. [ ] [7, 7, 7, 7, 7, 7, 7]


### Langages et programmation (Première)

Soit `T` un tableau de flottants, `a` et `b` deux entiers. On considère une fonction nommée `somme` renvoyant la somme des éléments du tableau d'indice compris entre `a` et `b` définie par :

```{.quiz}
def somme(T, a, b):
    S = 0
    for i in range(a, b+1) :
        S = S + T[i]
    return S
```

Quel ensemble de préconditions doit-on prévoir pour cette fonction ?

1. [ ] a < b
1. [ ] a < longueur(T) et b < longueur(T)
1. [X] a <= b < longueur(T)
1. [ ] a <= b < longueur(T) et T est un tableau trié



### Langages et programmation (Première)

On souhaite écrire une fonction qui renvoie le maximum d'une liste d'entiers :

```{.quiz}
def maximum(L):
    m = L[0]
    for i in range(1,len(L)):
        if .........:
            m = L[i]
    return m
```

Par quoi faut-il remplacer les pointillés pour que cette fonction produise bien le résultat attendu ?

1. [ ] i > m
1. [X] L[i] > m
1. [ ] L[i] > L[i-1]
1. [ ] L[i] > L[i+1]

### Langages et programmation (Première)

Un programme Python commence par la ligne :

```{.quiz}
import os
```

À quoi sert cette ligne ?

1. [ ] c'est le début du squelette de tout programme Python
1. [ ] c'est la déclaration du système d'exploitation (operating system)
1. [ ] Python 3.6 exige cette ligne au début de tout programme
1. [X] c'est la déclaration d'une bibliothèque (ou module) que le programme compte utiliser

### Langages et programmation (Première)

On considère la fonction ci-dessous :

```{.quiz}
def maFonction(c):
    if c <= 10:
        p = 12
    if c <= 18:
        p = 15
    if c <= 40:
        p = 19
    else:
        p = 20
    return p
```

Que renvoie `maFonction(18)` ?

1. [ ] 12
1. [ ] 15
1. [X] 19
1. [ ] 20

### Langages et programmation (Première)

On définit la fonction suivante :

```{.quiz}
def f(n):
    c = 0
    while n > 0:
        c = c + 1
        n = n // 2
    return c
```

Quel est la valeur renvoyée par l'appel `f(35)` ?

1. [ ] 1
1. [ ] 5
1. [X] 6
1. [ ] 7

### Langages et programmation (Première)

La fonction Python suivante ne calcule pas toujours correctement le résultat de $x^y$ pour des arguments entiers.

Parmi les tests suivants, lequel va permettre de détecter l’erreur ?

```{.quiz}
def puissance (x,y):
    p = x
    for i in range (y - 1):
        p = p * x
    return p
```

1. [X] puissance(2,0)
1. [ ] puissance(2,1)
1. [ ] puissance(2,2)
1. [ ] puissance(2,10)


### Langages et programmation (Première)

On exécute le script suivant :

```{.quiz}
tableau1 = [1, 2, 3]
tableau2 = [4, 5, 6]
long = len(tableau1 + tableau2)
```

Quelle est la valeur de la variable long à la fin de cette exécution ?

1. [ ] 1
1. [ ] 3
1. [X] 6
1. [ ] rien, car le code engendre une erreur


### Langages et programmation (Première)

On souhaite échanger les contenus de deux variables entières `a` et `b` sans utiliser de variable auxiliaire en écrivant le code suivant :

```{.quiz}
a = a - b
b = a + b
a = ......
```

Que peut-on écrire à la place des pointillés pour réaliser cet échange ?


1. [ ] a - b
1. [ ] a + b
1. [X] b - a
1. [ ] - a - b


### Langages et programmation (Première)

On définit la fonction `f` suivante qui prend en argument une liste `t` d'entiers :

```{.quiz}
def f(t):
    n = len(t)
    for i in range(n-1):
        for j in range(i+1,n):
            if t[i] == t[j]:
                return True
    return False
```

Pour quelle valeur de `t`, `f(t)` vaut-elle `True` ?


1. [X] [[2,3], [3,4], [4,5], [2,3]]
1. [ ] [[2,2], [3,4], [4,5], [2,3]]
1. [ ] [[2,3], [3,2], [4,5], [5,4]]
1. [ ] [[3,3], [4,4], [5,5], [6,6]]


### Langages et programmation (Première)

La fonction `maximum` codée ci-dessous en Python doit renvoyer la plus grande valeur contenue dans le tableau d'entiers passé en argument.

```{.quiz}
def maximum(tableau):
    tmp = tableau[0]
    for i in range(......): # à compléter
        if tableau[i] > tmp:
            tmp = tableau[i]
    return tmp
```

Quelle expression faut-il écrire à la place des pointillés ?

1. [ ] len(tableau) - 1
1. [ ] 1,len(tableau) - 1
1. [X] 1,len(tableau)
1. [ ] 1,len(tableau) + 1


### Langages et programmation (Première)

On considère le code suivant :

```{.quiz}
def puiss(y,x):
    res = 1
    for i in range(x):
        res = res*y
    return res
```

Quelles sont les préconditions sur les arguments ?

1. [X] les arguments doivent être obligatoirement de type entier non nul
1. [ ] les arguments peuvent être de type entier ou flottant
1. [ ] le type des arguments n’a pas d’importance
1. [ ] il n’y a pas de préconditions dans ce cas





### Langages et programmation (Première)

On définit la fonction :

```{.quiz}
def fib(n):
    t = [0] * n
    t[1] = 1
    for i in range(2,n):
        t[i] = t[i-1] + t[i-2]
    return t
```

Quelle est la valeur renvoyée par l'appel `fib(6)` ?

1. [ ] [0, 1, 1, 2, 3]
1. [X] [0, 1, 1, 2, 3, 5]
1. [ ] [0, 1, 1, 2, 3, 5, 8]
1. [ ] [0, 1, 2, 3, 5, 8]


### Langages et programmation (Première)

La documentation de la bibliothèque random de Python précise :

random.randint(a, b)
Renvoie un entier aléatoire N tel que a &lt;= N &lt;= b.

Quelle est l’expression Python permettant de simuler le tirage d’un dé à 6 faces après avoir exécuté import random ?

1. [ ] random.randint(6)
1. [X] random.randint(1,6)
1. [ ] random.randint(1,7)
1. [ ] random.randint(0,6)

### Langages et programmation (Première)

On exécute le script suivant :

```{.quiz}
a = 10
if a 	&lt; 5:
  a = 20
elif a 	&lt; 100:
  a = 500
elif a 	&lt; 1000:
  a = 1
else:
  a = 0
```

Quelle est la valeur de la variable a à la fin de cette exécution ?

1. [ ] `1`
1. [ ] `10`
1. [ ] `20`
1. [X] `500`

### Langages et programmation (Première)

Dans le programme JavaScript suivant, quelle est la notation qui délimite le bloc d’instructions exécuté à chaque passage dans la boucle while ?

```{.quiz}

i = 0
while (i &lt; 10) {
    alert(i)
    i = i + 1
}
alert("Fin")

```

1. [X] le fait que les instructions soient encadrées entre `{` et `}`
1. [ ] le fait que les instructions soient indentées de 4 caractères comme en Python
1. [ ] le fait que les instructions suivent le mot clé `while`
1. [ ] le fait que les instructions suivent la parenthèse `)`

### Langages et programmation (Première)

Quelle est la valeur de la variable `n` à la fin de l'exécution du script ci-dessous ?

```{.quiz}
n = 1
for i in range(4):
    n = n + 2
```

1. [ ] 1
1. [ ] 8
1. [x] 9
1. [ ] 18

### Langages et programmation (Première)

On définit la fonction suivante :

```{.quiz}
def rey(n):
    i = 1
    while i &lt;= n:
        i = 2*i
    return i
```

Quelle valeur renvoie l'appel `rey(100)` ?

1. [ ] 0
1. [ ] 64
1. [ ] 100
1. [X] 128


### Langages et programmation (Première)

Quelle est la valeur de la variable `b` à la fin de l'exécution du script suivant ?

```{.quiz}
a = 2
b = 5
if a > 8:
    b = 10
elif a > 6:
    b = 3
```

1. [ ] 3
1. [X] 5
1. [ ] 6
1. [ ] 10

### Langages et programmation (Première)


La fonction suivante ne calcule pas toujours correctement le maximum des deux nombres donnés en
argument. On rappelle que `abs(z)` calcule la valeur absolue du nombre `z`.

```{.quiz}
def maxi(x,y) :
    m = (x-y+abs(x+y))/2
    return m
```

Parmi les tests suivants, lequel va détecter l'erreur ?

1. [ ] maxi(3,-2)
1. [ ] maxi(2,2)
1. [ ] maxi(3,2)
1. [X] maxi(2,3)

### Langages et programmation (Première)

On construit une liste L de la façon suivante :
```{.quiz}
L = []
for i in range(1, 11, 2):
    L.append(5*i)
```
et on obtient ainsi la liste [5, 15, 25, 35, 45].

On pourrait aussi procéder de la façon suivante :
```{.quiz}
L = []
......... # ligne 1
while i &lt; 11:
    L.append(5*i)
    ......... # ligne 2
```

Que faudrait-il écrire en ligne 1 et en ligne 2 pour obtenir le même résultat ?
Réponses
1. [ ] i = 0 en ligne 1, et i = i + 1 en ligne 2
1. [ ] i = 0 en ligne 1, et i = i + 2 en ligne 2
1. [ ] i = 1 en ligne 1, et i = i + 1 en ligne 2
1. [X] i = 1 en ligne 1, et i = i + 2 en ligne 2

### Langages et programmation (Première)

Quelle est la valeur de la variable b à la fin de l'exécution du script suivant ?

```{.quiz}
a = 3
b = 6
if a > 5 or b != 3:
    b = 4
else:
    b = 2
```

1. [ ] 2
1. [X] 4
1. [ ] 5
1. [ ] 6

### Langages et programmation (Première)

On exécute le script Python suivant :
```{.quiz}
def cube(a):
    a = a*a*a
    return a
a = 2
b = cube(a)
```

Que vaut le couple (a,b) à la fin de l'exécution ?

1. [ ] (8, 8)
1. [ ] (8, 2)
1. [ ] (2, 2)
1. [X] (2, 8)

### Langages et programmation (Première)

On exécute le script Python suivant :

```{.quiz}
def cube(L):
    for i in range(len(L)):
        L[i] = L[i] * L[i] * L[i]
    return L
L = [2, 5]
b = cube(L)
```
Que vaut le couple `(L,b)` à la fin de l'exécution ?

1. [ ] ([2,5], [8,125])
1. [X] ([8,125], [8,125])
1. [ ] ([8,125], [2,5])
1. [ ] ([2,5], [2,5])

### Langages et programmation (Première)

On exécute le code suivant :
```{.quiz}
def ma_fonction(liste : list) -> int:
    valeur = liste[0]
    for i in range (1, len(liste)):
        if liste[i] &lt; valeur :
            valeur = liste[i]
    return valeur
table = [5, 43, 2, 22, 7]
resultat = ma_fonction(table)
```

Quelle est la valeur de `resultat` après l’exécution de ce code ?

1. [ ] 43
1. [X] 2
1. [ ] 22
1. [ ] 7

### Langages et programmation (Première)

On définit deux fonctions :
```{.quiz}
def f(x):
    y = 2*x + 1
    return y
def calcul(x):
    y = x - 1
    return f(y)
```

Quelle est la valeur renvoyée par l'appel `calcul(5)` ?

1. [ ] 4
1. [X] 9
1. [ ] 11
1. [ ] 19

### Langages et programmation (Première)

Quelles sont les valeurs des variables `x` et `y` à la fin de l'exécution du script suivant :

```{.quiz}
x = 4
while x > 0:
    y = 1
    while y &lt; x:
        y = y + 1
        x = x - 1
```

1. [X] l'exécution ne termine pas !
1. [ ] la valeur de x est 0, celle de y est 0
1. [ ] la valeur de x est 0, celle de y est 1
1. [ ] la valeur de x est -1, celle de y est 0


### Langages et programmation (Première)

On exécute le code suivant :

```{.quiz}
def f(t):
    n = len(t)
    for k in range(1,n):
        t[k] = t[k] + t[k-1]
L = [1, 3, 4, 5, 2]
f(L)
```

Quelle est la valeur de `L` après l'exécution de ce code ?

1. [ ] [1, 3, 4, 5, 2]
1. [ ] [1, 4, 7, 9, 7]
1. [X] [1, 4, 8, 13, 15]
1. [ ] [3, 6, 10, 15, 17]

### Langages et programmation (Première)

En Python, quelle est l’instruction permettant de charger la fonction sqrt du module math ?

1. [ ] using math.sqrt
1. [ ] #include math.sqrt
1. [ ] from math include sqrt
1. [X] from math import sqrt

### Langages et programmation (Première)

On exécute le code suivant
```{.quiz}
def calculPourcentage (prix,reduction):
    assert reduction >= 0, 'la réduction doit être un nombre positif'
    assert reduction &lt; 100, 'la réduction doit être inférieure à 100'
    assert prix > 0, 'le prix doit être un nombre strictement positif'
    remise = (reduction*prix)/100
    prix_remise = prix - remise
    return prix_remise
```
Quelle est la valeur renvoyée par l'appel `calcul(30,100)` ?

1. [ ] AssertionError: la réduction doit être un nombre positif
1. [X] AssertionError: la réduction doit être inférieure à 100
1. [ ] AssertionError: le prix doit être un nombre strictement positif
1. [ ] 70