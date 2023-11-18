### Langages et programmation (Première)

Quel est le seul langage de programmation parmi les propositions suivantes ?

- [ ] HTML
- [ ] CSS
- [X] C++
- [ ] WEB


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

- [ ] 0
- [ ] 6
- [ ] 15
- [X] 21


### Langages et programmation (Première)

La documentation de la bibliothèque random de Python précise que `random.randint(a,b)` renvoie un entier aléatoire N tel que a ≤ N ≤ b.  
Afin d’obtenir un entier choisi aléatoirement dans l’ensemble `{-4 ; -2 ; 0 ; 2 ; 4}`, après avoir importé la librairie random de Python, on peut utiliser l’instruction :

- [ ] `random.randint(0,8)/2`
- [ ] `random.randint(0,8)/2 - 4`
- [ ] `random.randint(0,4)*2 - 2`
- [X] `(random.randint(0,4) - 2) * 2`


### Langages et programmation (Première)

On définit la fonction :

```{.quiz}
def f(a,b):
    assert b!=0,'le deuxième argument est nul'
    result = a/b
    return result
```

Qu'obtient-on en exécutant la commande `r = f(4,0)` ?


- [ ] une erreur ZeroDivisionError: division by zero et l'arrêt de l'exécution
- [ ] une erreur NameError: name 'b' is not defined et l'arrêt de l'exécution
- [ ] une erreur AssertionError: le deuxième argument est nul et la variable r prend la valeur 0
- [X] une erreur AssertionError: le deuxième argument est nul et l'arrêt de l'exécution


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

- [ ] (2019,2019)
- [ ] (2019,2020)
- [X] (2020,2019)
- [ ] (2020,2020)


### Langages et programmation (Première)

T est un tableau de nombres entiers non vide. Que représente la valeur de s renvoyée par cette fonction ?

```{.quiz}
def mystere(T):
    s = 0
    for k in T:
        if k % 2 == 0:
            s = s+k
    return s
```

- [ ] la somme des valeurs du tableau T
- [ ] la somme des valeurs positives du tableau T
- [ ] la somme des valeurs impaires du tableau T
- [X] la somme des valeurs paires du tableau T


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

- [X] a vaut 3, b vaut 5 et c vaut 15
- [ ] a vaut 3, b vaut 5 et c n'est pas défini
- [ ] a vaut 5, b vaut 10 et c vaut 15
- [ ] a vaut 5, b vaut 10 et c n'est pas défini


### Langages et programmation (Première)
Ce programme ne renvoie pas toujours ses trois arguments dans l’ordre croissant. Parmi les tests suivants,
lequel va permettre de détecter l’erreur ?

```{.quiz}
def ranger(a, b, c):
    if a > b :
        a, b = b, a
    if b > c:
        b, c = c, b
    return a, b, c
```

- [ ] ranger(1,2,3)
- [X] ranger(3,4,1)
- [ ] ranger(1,3,2)
- [ ] ranger(4,2,3)

### Langages et programmation (Première)
On considère le code suivant :

```{.quiz}
if x < 4:
    x = x + 3
else:
    x = x - 3
```

Quelle construction élémentaire peut-on identifier ?

- [ ] une boucle non bornée
- [X] une structure conditionnelle
- [ ] une boucle bornée
- [ ] un appel de fonction


### Langages et programmation (Première)

La documentation de la fonction floor de la bibliothèque math est : 
`floor(x) : Return the floor of x as an Integral. This is the largest integer <= x.`

Que vaut floor(-2.2) ?

- [ ] –2
- [X] –3
- [ ] on obtient une erreur, car –2.2 n'est pas un entier
- [ ] 2.2


### Langages et programmation (Première)

On considère la fonction suivante :
```{.quiz}
def comparaison(a,b):
    if a < b:
        return a
    else:
        return b
```

Quel est le type de la valeur renvoyée par l'appel comparaison(6,5) ?

- [ ] un booléen (vrai/faux)
- [X] un nombre entier
- [ ] un nombre flottant
- [ ] une chaîne de caractères



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


- [ ] for i in range(n,1,p):
- [ ] for i in range(n,p):
- [X] for i in range(n,p+1):
- [ ] for i in range(n-1,p):


### Langages et programmation (Première)

On a défini une liste L de nombres entiers.
Quelle est la valeur de la variable m à la fin de l'exécution du script suivant ?

```{.quiz}
m = L[0]
for j in range(len(L)):
    if m < L[j]:
        m = L[j]
```

- [ ] la moyenne de la liste L
- [ ] le minimum de la liste L
- [X] le maximum de la liste L
- [ ] la longueur de la liste L


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

- [X] ce programme ne termine pas
- [ ] à la fin de l'exécution, la variable a vaut 5
- [ ] à la fin de l'exécution, la variable b vaut 34
- [ ] à la fin de l'exécution, la variable c vaut 42


### Langages et programmation (Première)

Quelle est la valeur de la variable x à la fin de l'exécution du script suivant :

```{.quiz}
def f(x):
 x = x + 1
 return x + 1
x = 0
f(x+1)
```

- [ ] 0
- [ ] 1
- [ ] 2
- [X] 3


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

- [X] `somme = somme + notes[cpt]`
- [ ] `somme = notes[cpt]`
- [ ] `somme = cpt`
- [ ] `somme = somme + cpt`


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

- [ ] for i in range(1,n):
- [ ] for i in range(n+1):
- [ ] for i in range(0,n):
- [X] for i in range(1,n+1):


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

Quelle est la valeur de L après l'exécution de ce code ?

- [ ] [4, -7, 8, 0, 1]
- [ ] [-7, 0, 1, 4, 8]
- [ ] [4, 8, -7, 0, 1]
- [X] [4, -7, 0, 1, 8]


### Langages et programmation (Première)

La fonction suivante calcule la racine carrée du double d’un nombre flottant.

```{.quiz}
from math import sqrt
def racine_du_double(x):
    return sqrt(2*x)
```

Quelle est la précondition sur l'argument de cette fonction ?

- [ ] x < 0
- [X] x >= 0
- [ ] 2 * x > 0
- [ ] sqrt(x) >= 0


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

Quelle est la valeur de t après l'exécution de ce code ?

- [X] 2
- [ ] 3
- [ ] 4
- [ ] (2,3,4)


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

- [ ] les entiers
- [ ] les chaînes de caractères
- [X] les flottants
- [ ] les tableaux


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
Quelle est la valeur de L après l'exécution de ce code ?

- [X] [1, 4, 5, 2, 1]
- [ ] [2, 1, 3, 4, 5]
- [ ] [3, 4, 5, 2, 1]
- [ ] [2, 5, 4, 3, 1]


### Langages et programmation (Première)

On considère l'instruction suivante :

```{.quiz}
resultat = [0] * 7
```

Que contient la variable resultat après son exécution ?

- [ ] 0
- [ ] [0]
- [ ] [[0], [0], [0], [0], [0], [0], [0]]
- [X] [0, 0, 0, 0, 0, 0, 0]




### Langages et programmation (Première)

On exécute le script suivant :

```{.quiz}
resultat = [1 * 7]
```

Que contient la variable resultat après son exécution ?

- [ ] 1
- [ ] [1]
- [X] [7]
- [ ] [7, 7, 7, 7, 7, 7, 7]


### Langages et programmation (Première)

Soit T un tableau de flottants, a et b deux entiers. On considère une fonction nommée somme renvoyant la
somme des éléments du tableau d'indice compris entre a et b définie par :

```{.quiz}
def somme(T, a, b):
    S = 0
    for i in range(a, b+1) :
        S = S + T[i]
    return S
```

Quel ensemble de préconditions doit-on prévoir pour cette fonction ?

- [ ] a < b
- [ ] a < longueur(T) et b < longueur(T)
- [X] a <= b < longueur(T)
- [ ] a <= b < longueur(T) et T est un tableau trié



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

- [ ] i > m
- [X] L[i] > m
- [ ] L[i] > L[i-1]
- [ ] L[i] > L[i+1]
