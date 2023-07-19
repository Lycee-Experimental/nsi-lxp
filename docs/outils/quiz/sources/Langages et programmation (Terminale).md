### Langages et programmation (Terminale) - Récursivité
n°1397
<br>
Test récursif<br>
On a saisi le code suivant :<br>
```{.quiz}
def mystere(n):
    if n&gt;0 :
        return mystere(n-2)
    else :
        return n==0
```
Que retourne la commande suivante ?<br>
```{.quiz}
mystere(4)
```



- [ ] 0
- [ ] False
- [X] True
- [ ] L'exécution génère une erreur.

### Langages et programmation (Terminale) - Récursivité
n°1398
<br>
Fonction récursive<br>
Laquelle de ces fonctions retourne True lorsqu'on exécute :<br>
```{.quiz}
f(5)
```



- [ ] 
```{.quiz}
def f(n):
    if n==0 :
        return True
    else :
        return f(n-2)
```
- [ ] 
```{.quiz}
def f(n):
    if n&lt;=0 :
        return True
    else :
        f(n-2)
```
- [X] 
```{.quiz}
def f(n):
    if n&lt;=0 :
        return True
    return f(n-2)
```
- [ ] 
```{.quiz}
def f(n):
    if n==0 :
        return True
    f(n-2)
```

### Langages et programmation (Terminale) - Récursivité
n°1399
<br>
Affichages récursifs<br>
On a saisi le code suivant :<br>
```{.quiz}
def affiche(n):
    print(n)
    if n&gt;=0:
        affiche(n-1)
```
Quel affichage obtient-on en exécutant `affiche(3)`



- [ ] 
```{.quiz}
3
2
1
0
```
- [ ] 
```{.quiz}
0
1
2
3
```
- [X] 
```{.quiz}
3
2
1
0
-1
```
- [ ] 
```{.quiz}
3
```

### Langages et programmation (Terminale) - Récursivité
n°1400
<br>
Fonction récursive de deux variables<br>
Une seule des fonctions définies ci-dessous retourne `'ccccc'` à l'appel de `replique(5,'c')`. Déterminer laquelle.



- [ ] 
```{.quiz}
def replique(a,b):
    if a==1:
        return b
    else :
        return replique( a-1 , b+b)
```
- [ ] 
```{.quiz}
def replique(a,b):
    if a==1:
        return b
    elif a%2 == 0:
        return replique( a-2 , b+b)
    else :
        return b + replique( a-2 , b+b)
```
- [X] 
```{.quiz}
def replique(a,b):
    if a==1:
        return b
    elif a%2 == 0:
        return replique( a//2 , b+b)
    else :
        return b + replique( a//2 , b+b)
```
- [ ] 
```{.quiz}
def replique(a,b):
    if a==1:
        return b
    else :
        replique( a-1 , b+b)
```

### Langages et programmation (Terminale) - Récursivité
n°1401
<br>
Fonction récursive et type str <br>
On a saisi le code suivant :<br>
```{.quiz}
def copy(n,s):
    if n==0:
        return s
    return copy(n-1, s+s)
```
Que retourne l'instruction `copy(3,'A')` ?



- [ ] `'AAA'`
- [ ] `'AAAAAA'`
- [X] `'AAAAAAAA'`
- [ ] `'3A'`

### Langages et programmation (Terminale) - Récursivité
n°1402
<br>
Affichages récursifs<br>
On a saisi le code suivant :<br>
```{.quiz}
def affiche(n):
    if n&gt;0:
        affiche(n-1)
    print(n)
```
Quel affichage obtient-on en exécutant `affiche(3)`



- [ ] 
```{.quiz}
3
2
1
0
```
- [ ] 
```{.quiz}
3
2
1
```
- [X] 
```{.quiz}
0
1
2
3
```
- [ ] 
```{.quiz}
1
2
3
```

### Langages et programmation (Terminale) - Récursivité
n°1403
<br>
Fonction récursive et type str<br>
On a saisi le code suivant :<br>
```{.quiz}
def mystere(n,s):
    if n==0:
        return s
    return s + mystere(n-1, s)
```
Que retourne l'instruction :  `mystere(3,'$')` ?



- [ ] `'$$$'`
- [ ] `'$2$'`
- [X] `'$$$$'`
- [ ] L'exécution déclenche une erreur

### Langages et programmation (Terminale) - Récursivité
n°1404
<br>
Fonction récursive et assertion<br>
On a saisi le code suivant :<br>
```{.quiz}
def g(n):
    assert n&gt;=0
    if n==0 :
        return 1789
    else :
        return g(n-2)
```
Qu'obtient-on en exécutant la commande `g(3)`?



- [ ] `1789`
- [ ] `1`
- [X] `AssertionError`
- [ ] `RecursionError`

### Langages et programmation (Terminale) - Récursivité
n°1405
<br>
Fonction récursive de deux variables<br>
On a saisi le code suivant :<br>
```{.quiz}
def f(a,b):
    if a == 0 :
        return b
    return f(a-1, b+1)
```
Que retourne la commande `f(3,4)` ?



- [ ] 4
- [ ] 5
- [ ] 6
- [X] 7

### Langages et programmation (Terminale) - Récursivité
n°1406
<br>
Test récursif<br>
On a saisi le code suivant :<br>
```{.quiz}
def mystere(n):
    if n&gt;0 :
        return mystere(n-2)
    else :
        return n==0
```
Que retourne la commande : `mystere(3)`



- [ ] True
- [X] False
- [ ] RecursionError
- [ ] 0

### Langages et programmation (Terminale) - Modularité
n°1504
<br>
Modularité<br>
Parmi les lignes suivantes, trouver celle qui ne permet pas d'importer et d'utiliser la totalité du module itertools :



- [ ] import itertools
- [ ] import itertools as itt
- [X] from itertools import cycle
- [ ] Je ne sais pas...

### Langages et programmation (Terminale) - Modularité
n°1505
<br>
Débogage<br>
Quel message d'exception s'affiche si on tente d'exécuter le code suivant ?<br>
```{.quiz}
a = 1
for i in range(3):
    print('i = {}, a = {}'.format(i, a)
    a = 2 * a
```



- [ ] NameError
- [X] SyntaxError
- [ ] IndexError
- [ ] IndentationError

### Langages et programmation (Terminale) - Modularité
n°1506
<br>
Messsage d'erreur<br>
Quel message d'exception s'affiche si on tente d'exécuter le code suivant ?<br>
```{.quiz}
v = 1
while v &lt; 100:
    if v % 7 == 0:
        print(v, 'est un multiple de 7')
    else:
    print(v, 'n'est pas un multiple de 7')
    v = v + 1
```



- [ ] NameError
- [ ] SyntaxError
- [ ] IndexError
- [X] IndentationError

### Langages et programmation (Terminale) - Paradigmes
n°1518
<br>
Auteur G. Conan<br>
On considère la classe Objet\_3D suivante : :<br>
```{.quiz}
class Objet_3D:
    def __init__(self, xVal, yVal, zVal, L, H, P):
        self.x = xVal
        self.y = yVal
        self.z = zVal
        self.Longueur = L
        self.Hauteur = H
        self.Profondeur = P
    def Volume(self):
        return self.Longueur * self.Hauteur * self.Profondeur
     def Translation(self, dx, dy, dz):
        self.x = self.x + dx
        self.y = self.y + dy
        self.z = self.z + dz
```
Si o est une instance de la classe Objet\_3D, pour calculer le volume de o, l'instruction correcte est :



- [ ] Volume(o)
- [ ] o.Volume(self)
- [X] o.Volume()
- [ ] Volume(self)

### Langages et programmation (Terminale) - Paradigmes
n°1521
<br>
On a saisi le code suivant :<br>
```{.quiz}
class Point :
   def __init__(self, x, y) :
   self.px, self.py = x, y
class Segment :
”””Classe conteneur utilisant la classe Point.”””
   def __init__(self, x1, y1, x2, y2) :
      self.orig = Point(x1, y1)
      self.extrem = Point(x2, y2)
   def __str__(self) :
      return (”Segment : [({ :g}, { :g}), ({ :g}, { :g})]”
      .format(self.orig.px, self.orig.py,
      self.extrem.px, self.extrem.py))
s = Segment(1.0, 2.0, 3.0, 4.0)
print(s)
```
Que contient la variable s à la fin de l’exécution de ce script ?



- [X] Segment : [(1, 2), (3, 4)]
- [ ] Segment : [(1.0, 2.0), (3.0, 4.0)]
- [ ] Segment : 1, 2, 3, 4
- [ ] Segment : [(4, 3), (2, 1)]

### Langages et programmation (Terminale) - Paradigmes
n°1522
<br>
On a saisi le code suivant :<br>
```{.quiz}
class Point :
   def __init__(self, x, y) :
   self.px, self.py = x, y
class Segment :
”””Classe conteneur utilisant la classe Point.”””
   def __init__(self, x1, y1, x2, y2) :
      self.orig = Point(x1, y1)
      self.extrem = Point(x2, y2)
   def __str__(self) :
      return (”Segment : [({ :g}, { :g}), ({ :g}, { :g})]”
      .format(self.orig.px, self.orig.py,
      self.extrem.px, self.extrem.py))
s = Segment(4.0, 3.0, 2.0, 1.0)
print(s)
```
Que contient la variable s à la fin de l’exécution de ce script ?



- [ ] Segment : [(1, 2), (3, 4)]
- [X] Segment : [(4, 3), (2, 1)]
- [ ] Segment : [(1.0, 2.0), (3.0, 4.0)]
- [ ] Segment : 1, 2, 3, 4

### Langages et programmation (Terminale) - Récursivité
n°1571
<br>
Compléter la fonction<br>
On propose de créer une fonction récursive permettant de calculer \(x^n\)<br>
Pour compléter la fonction proposée : <br>
```{.quiz}
def puissance(x,n):
    if n &gt; 0 :
        return .......
    return 1
```
Que doit-on écrire à la place des pointillés ?



- [ ] 
```{.quiz}
puissance(x,n-1)
```
- [X] 
```{.quiz}
x*puissance(x,n-1)
```
- [ ] Quoi que l'on écrive, cette fonction ne donnera pas le résultat attendu.
- [ ] 
```{.quiz}
x**(n-1)*puissance(x,n-1)
```

### Langages et programmation (Terminale) - Récursivité
n°1572
<br>
Que fait cette fonction ?<br>
On exécute les lignes suivantes : <br>
```{.quiz}
def ed(L,M=[]):
    if len(L) == 0 : return M
    a=L.pop()
    if a not in M : M.append(a)
    return ed(L,M)
L=[2, 3, 2, 6, 8, 9, 9, 10, 9, 3, 6, 7, 8, 8, 9]
print(ed(L))
```
Que renvoi ce programme en console ?



- [ ] 
```{.quiz}
None
```
- [X] 
```{.quiz}
[9, 8, 7, 6, 3, 10, 2]
```
- [ ] 
```{.quiz}
[9, 8, 8, 7, 6, 3, 9, 10, 9, 9, 8, 6, 2, 3, 2]
```
- [ ] 
```{.quiz}
[2, 10, 3, 6, 7, 8, 9]
```

### Langages et programmation (Terminale) - Récursivité
n°1573
<br>
Que retourne le programme suivant ?<br>
```{.quiz}
def A(x):
    if x &lt;= 1 : return x
    return B(x+1)
def B(x) :
    return A(x-2)+4
print(A(4))
```



- [X] 
```{.quiz}
13
```
- [ ] 
```{.quiz}
1
```
- [ ] 
```{.quiz}
12
```
- [ ] Une erreur de type : 'RecursionError: maximum recursion depth exceeded in comparison '

### Langages et programmation (Terminale) - Autres
n°1605
<br>
Langage C<br>
Quel est le contenu du tableau *tab* à la fin de ce programme ?<br>
```{.quiz}
unsigned int i;
unsigned int tab[5] = {1,2,3,4,5};
for (i=0;i&lt;5;i++) {
  tab[i] = tab[i]*i;
}
```



- [ ] {2,3,4,5,6}
- [X] {0,2,6,12,20}
- [ ] {5,4,3,2,1}
- [ ] {1,2,3,4,5}

### Langages et programmation (Terminale) - Autres
n°1606
<br>
Langage C<br>
Que va afficher ce programme ?<br>
```{.quiz}
unsigned int i, j;
i=0;
j=0;
while (i&lt;3) {
  j=j+i;
  i++;
}
printf('%d',j);
```



- [ ] 6
- [ ] 0
- [X] 3
- [ ] %d,3

### Langages et programmation (Terminale) - Autres
n°1607
<br>
Langage C<br>
Le langage C est un langage ...



- [ ] compliqué.
- [ ] interprété.
- [X] compilé.
- [ ] de l'antiquité.

### Langages et programmation (Terminale) - Autres
n°1615
<br>
On a saisi le code suivant en langage C :<br>
```{.quiz}
unsigned char a;
unsigned char i;
a=5;
for(i=0;i&lt;2;i++)
a=2*a;
a++;
```
Que contient la variable a à la fin de l’exécution de ce programme ?



- [ ] 0
- [X] 21
- [ ] 23
- [ ] 5

### Langages et programmation (Terminale) - Récursivité
n°1743
<br>
Algorithme d'Euclide<br>
Rappel : Cet algorithme permet de déterminer le Plus Grand Diviseur Commun de deux nombres entiers non nuls.<br>
Il agit par divisions euclidiennes successives, par exemple avec 42 et 24 :<br>
\(42=1\times24 + 18\)\(24=1\times18 + 6\)\(18=3\times6 + 0\)<br>
Le dernier reste non nul est le PGCD des deux nombres ; dans l'exemple : 6 est le PGCD de 42 et 24.<br>
Le code suivant est incomplet, il manque l'appel récursif :<br>
```{.quiz}
def pgcd_recursif(a, b):
    if b == 0:
        return a
    else:
        ...
```
Parmi les lignes suivantes, quelle est la correcte ?



- [ ] `return pgcd_recursif(a, b)`
- [X] `return pgcd_recursif(b, a % b)`
- [ ] `return pgcd_recursif(a % b, b)`
- [ ] `return pgcd_recursif(a // b, a % b)`

### Langages et programmation (Terminale) - Récursivité
n°1744
<br>
Pas récursif alors...<br>
Un algorithme contenant des boucles sans appels récursifs est dit :



- [X] itératif
- [ ] instructif
- [ ] impératif
- [ ] peu élégant

### Langages et programmation (Terminale) - Récursivité
n°1745
<br>
À partir de la version récursive<br>
On a créé une fonction récursive mystere :<br>
```{.quiz}
def mystere(T, n=0):
    if n == len(T) // 2: return T
    T[n], T[-1 - n] = T[-1 - n], T[n]
    return mystere(T, n + 1)
```
Parmi les réponses suivantes, quelle est sa version itérative ?



- [X] 
```{.quiz}
def mystere(T):
    n = len(T) // 2
    for i in range(n):
        T[i], T[-1 - i] = T[-1 - i], T[i]
    return T
```
- [ ] 
```{.quiz}
def mystere(T):
    n = len(T) // 2
    for i in range(n):
        T[i], T[-n - i] = T[-n - i], T[i]
    return T
```
- [ ] 
```{.quiz}
def mystere(T):
    n = len(T)
    for i in range(n):
        T[i], T[-1 - i] = T[-1 - i], T[i]
    return T
```
- [ ] 
```{.quiz}
def mystere(T):
    n = len(T) // 2
    for i in range(n):
        T[i], T[n - i] = T[n - i], T[i]
    return T
```

### Langages et programmation (Terminale) - Mise au point
n°1747
<br>
Mutateur d'un attribut<br>
Voici la définition incomplète d'une classe Couleur.<br>
```{.quiz}
class Couleur:
    def __init__(self, t):
        self.r, self.g, self.b = t
    def rgb_vers_hex(self):
        return f'#{self.r:02x}{self.g:02x}{self.b:02x}'
    def change_r(self, nouveau_r):
        '''Permet de changer la composante rouge de la couleur
        précondition: nouveau_r doit être un entier
        '''
        ...
    def __str__(self):
        return f'({self.r}, {self.g}, {self.b})'
```
Parmi les codes suivants lequel est le plus convenable pour la méthode change\_r ?



- [X] 
```{.quiz}
assert isinstance(nouveau_r, int)
if nouveau_r &gt;= 0 and nouveau_r &lt;= 255:
    self.r = nouveau_r
else:
    raise ValueError('Valeur inappropriée')
```
- [ ] 
```{.quiz}
if nouveau_r &gt;= 0 and nouveau_r &lt;= 255 and isinstance(nouveau_r, int):
    self.r = nouveau_r
else:
    raise ValueError('Valeur inappropriée')
```
- [ ] 
```{.quiz}
self.r = nouveau_r
```
- [ ] 
```{.quiz}
if nouveau_r &gt;= 0 and nouveau_r &lt;= 255:
    self.r = nouveau_r
else:
    raise ValueError('Valeur inappropriée')
```

### Langages et programmation (Terminale) - Autres
n°1854
<br>
Algorithme d'Euclide<br>
Rappel : Cet algorithme permet de déterminer le Plus Grand Diviseur Commun de deux nombres entiers non nuls.<br>
Il agit par divisions euclidiennes successives, par exemple avec 42 et 24 :<br>
\(42=1\times24 + 18\)\(24=1\times18 + 6\)\(18=3\times6 + 0\)<br>
Le dernier reste non nul est le PGCD des deux nombres ; dans l'exemple : 6 est le PGCD de 42 et 24.<br>
Le code suivant est incomplet, que manque-til ?:<br>
```{.quiz}
def pgcd(a, b):
    if a &lt; b:
        a, b = b , a
    ...
```
Parmi les lignes suivantes, quelle est la correcte ?



- [ ] 
```{.quiz}
    while b &gt; 0:
        a, b = a // b, a % b
    return a
```
- [ ] 
```{.quiz}
    while b &gt; 0:
        a, b = a, a % b
    return a
```
- [ ] 
```{.quiz}
    while b &lt; 0:
        a, b = a, a % b
    return a
```
- [X] 
```{.quiz}
    while b &gt; 0:
        a, b = b, a % b
    return a
```

### Langages et programmation (Terminale) - Modularité
n°1935
<br>
Module<br>
 Le module module2 contient la fonction ma\_fonction.  <br>
Dans un programme, on trouve l'instruction suivante : `import module2`  <br>
Quelle instruction permet alors d'accéder à ma\_fonction dans le programme ?



- [X] module2.ma\_fonction()
- [ ] ma\_fonction()
- [ ] module2-&gt;ma\_fonction()
- [ ] On ne peut pas y accéder car elle n'est pas dans l'espace de nommage.

### Langages et programmation (Terminale) - Modularité
n°1936
<br>
Module<br>
 En Python, un module :



- [ ] est forcément un programme compilé en C
- [X] peut être n'importe quel fichier d'extension .py
- [ ] doit être installé dans le répertoire de l'interpréteur
- [ ] ne peut contenir que des fonctions

### Langages et programmation (Terminale) - Modularité
n°1937
<br>
Module<br>
 Parmi ces affirmations sur les espaces de noms, laquelle sont vraie ?



- [ ] Ils lient les noms de variables avec leur valeur.
- [ ] Ils ne sont utilisés que pour les fonctions contenues dans les modules.
- [ ] Ils persistent après la fin de l'exécution du programme.
- [X] Ils assurent l'unicité des noms de variables.

