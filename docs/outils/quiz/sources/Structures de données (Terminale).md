### Structures de données (Terminale) - Programmation objet
n°295
<br>
On a saisi le code suivant :<br>
```{.quiz}
class Account:  
    def __init__(self, id):  
        self.id = id  
        id = 666   
acc = Account(123)  
num = acc.id  
```
Que contient la variable num à la fin de l’exécution de ce script ?



- [X] 123
- [ ] 666
- [ ] None
- [ ] SyntaxError

### Structures de données (Terminale) - Programmation objet
n°296
<br>
On a saisi le code suivant :<br>
```{.quiz}
class account:  
    def __init__(self, id, balance):  
        self.id = id  
        self.balance = balance  
    def deposit(self, amount):  
        self.balance += amount  
    def withdraw(self, amount):  
        self.balance -= amount  
myac = account('123', 100)  
myac.deposit(800)  
myac.withdraw(500)  
myac.deposit(200)  
```
Que vaut myac.balance à la fin de l’exécution de ce script ?



- [X] 600
- [ ] 100
- [ ] 800
- [ ] 200

### Structures de données (Terminale) - Programmation objet
n°1407
<br>
Attributs d'une instance de classe<br>
On a saisi le code suivant :<br>
```{.quiz}
class Test:
    def __init__(self, a,b):
        self.x = a
        self.y = b
u = Test(4,5)
```
Laquelle des expressions suivantes a pour valeur  `4`  ?



- [ ] `u.a`
- [ ] `u.b`
- [X] `u.x`
- [ ] `u.y`

### Structures de données (Terminale) - Programmation objet
n°1408
<br>
Comparaison entre objets<br>
On a saisi le code suivant :<br>
```{.quiz}
class Coord:
    def __init__(self, a,b):
        self.x = a
        self.y = b
u = Coord(0,5)
v = Coord(0,5)
```
Laquelle de ces expressions est évaluée à `True`?



- [ ] `u == v`
- [ ] `u.a == v.a and u.b == v.b`
- [X] `u.x == v.x and u.y == v.y`
- [ ] `Coord(0,5) == v`

### Structures de données (Terminale) - Programmation objet
n°1409
<br>
instance et attribut<br>
On a saisi le code suivant :<br>
```{.quiz}
class Store:
    def __init__(self, v):
        self.value = v
a = Store(10)
a.value += 2
b = Store(a.value)
a.value += 2
```
Quelle est la valeur de : `b.value`



- [ ] `a.value`
- [ ] `10`
- [X] `12`
- [ ] `14`

### Structures de données (Terminale) - Programmation objet
n°1410
<br>
Attribut d'un objet<br>
On a saisi le code suivant :<br>
```{.quiz}
class Student:
    def __init__(self, name):
        self.name = name
bob = Student('BOB')
name = 'nom'
```
Quelle est la valeur de l'expression : `bob.name`



- [ ] `'name'`
- [ ] `'nom'`
- [X] `'BOB'`
- [ ] `'bob'`

### Structures de données (Terminale) - Programmation objet
n°1411
<br>
Méthode et attribut<br>
On a saisi le code suivant :<br>
```{.quiz}
class Student:
    def __init__(self, name):
        self.name = name
    def mystere(self, x):
        return self.name + x
james = Student('JAMES')
bond = Student('BOND')
```
Laquelle des expressions suivantes a la valeur : `'JAMESBOND'`



- [ ] `mystere(james,bond.name)`
- [ ] `mystere(james,bond)`
- [X] `james.mystere(bond.name)`
- [ ] `james.mystere(bond)`

### Structures de données (Terminale) - Programmation objet
n°1412
<br>
Une méthode, deux instances<br>
On a saisi le code suivant :<br>
```{.quiz}
class Score:
    def __init__(self, value):
        self.value = value
    def mystere(self, a):
        return self.value &gt; a.value
x = Score(100)
y = Score(80)
```
Laquelle des expressions suivantes est évaluée à `True` ?



- [ ] `x.mystere(x)`
- [X] `x.mystere(y)`
- [ ] `y.mystere(x)`
- [ ] `y.mystere(y)`

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1443
<br>
Structures de données <br>
En informatique, une pile (en anglais stack) est :



- [X] une structure de données fondée sur le principe «dernier arrivé, premier sorti» (ou LIFO pour Last In, First Out)
- [ ] une structure de données fondée sur le principe «premier arrivé, premier sorti» (ou FIFO pour First In, First Out)
- [ ] une base de données fondée sur le principe «dernier arrivé, dernier sorti» (ou LILO pour Last In, Last Out)
- [ ] une base de données fondée sur le principe «premier arrivé, dernier sorti» (ou FILO pour First In, Last Out)

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1444
<br>
Structures de données <br>
En informatique, une file (queue en anglais ) est :



- [X] une structure de données basée sur le principe «Premier entré,premier sorti», en anglais FIFO (First In, First Out)
- [ ] une structure de données basée sur le principe «Dernier entré,premier sorti», en anglais LIFO (Last In, First Out)
- [ ] une base de données basée sur le principe «Dernier entré,dernier sorti», en anglais LILO (Last In, Last Out)
- [ ] une base de données basée sur le principe «Premier entré,dernier sorti», en anglais FILO (First In, Last Out)

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1445
<br>
Structure de données<br>
En informatique, un usage courant d'une pile, par exemple, est:



- [X] Dans un navigateur web, une pile sert à mémoriser les pages Web visitées.
- [ ] Les serveurs d’impression, qui doivent traiter les requêtes dans l’ordre dans lequel elles arrivent, et les insèrent dans une pile.
- [ ] On utilise des piles pour mémoriser temporairement des transactions qui doivent attendre pour être traitées.
- [ ] La réalisation d'un répertoire téléphonique.

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1446
<br>
Structure de données<br>
En informatique, l'usage d'une file se fait couramment pour :



- [X] Les serveurs d’impression, qui doivent traiter les requêtes dans l’ordre dans lequel elles arrivent, et les insèrent dans une file d’attente (ou une queue).
- [ ] La fonction «Annuler la frappe» (en anglais «Undo») d’un traitement de texte qui mémorise les modifications apportées au texte dans une file.
- [ ] L’évaluation des expressions mathématiques en notation post-fixée (ou polonaise inverse en file).
- [ ] Mémoriser temporairement des transactions qui doivent attendre dans une file pour être traitées.

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1447
<br>
Structure de données<br>
Voici l'implémentation d'une pile en utilisant une simple liste.<br>
On a saisi le code suivant :<br>
```{.quiz}
def pile():
    return []
def vide(p):
    return p==[]
def empiler(p,x):
    p.append(x)
def depiler(p):
    assert not vide(p)
    return p.pop()
p=pile()
for i in range(7):
    empiler(p,2*i)
a=depiler(p)
print(a)
print(vide(p))
```
Quel affichage obtient-on à la fin de l’exécution de ce script ?



- [X] 12
False
- [ ] 14
None
- [ ] 12
[ ]
- [ ] 7
True

### Structures de données (Terminale) - Programmation objet
n°1448
<br>
Instance et attribut<br>
```{.quiz}
On a saisi le code suivant :
class Bizarre:
    def __init__(self, v):
        self.value = v
    def truc(self,chose):
        return self.value+chose
a = Bizarre(5)
a.value += 2
b = a.truc(3)
b += 4
```
Quelle est la valeur de b?



- [ ] 3
- [ ] 8
- [ ] 12
- [X] 14

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1469
<br>
liste chaînée <br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst, n):
    if n == 0:
        return lst.valeur
    else:
        return mystere(lst.suivant, n-1)
lst0 = Maillon(10,Maillon(20,Maillon(30,None)))
```
Quelle est la valeur de `mystere(lst0, 2)`



- [ ] 10
- [ ] 20
- [X] 30
- [ ] cette commande renvoie une erreur !

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1470
<br>
liste chaînée <br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst, n):
    if n == 0:
        return lst.valeur
    else:
        return mystere(lst.suivant, n-1)
a = Maillon(10,None)
b = Maillon(20,a)
c = Maillon(30,b)
```
Quelle est la valeur de `mystere(c, 2)`



- [X] 10
- [ ] 20
- [ ] 30
- [ ] cette commande renvoie une erreur !

### Structures de données (Terminale) - Programmation objet
n°1471
<br>
liste chaînée <br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
a = Maillon(10,None)
b = Maillon(20,a)
c = Maillon(30,b)
```
Parmi les expressions suivantes, quelle est celle dont la valeur est 20 ?



- [ ] a.suivant.valeur
- [ ] a.valeur.suivant
- [X] c.suivant.valeur
- [ ] c.valeur.suivant

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1472
<br>
liste chaînée <br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst):
    if lst is None:
        return ''
    else:
        return mystere(lst.suivant) + '-' + str(lst.valeur)
lst = Maillon(10,Maillon(20,Maillon(30,None)))
```
Qu'obtient-on en exécutant `mystere(lst)`



- [ ] `-10-20-30`
- [ ] `10-20-30`
- [X] `-30-20-10`
- [ ] `30-20-10`

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1473
<br>
liste chaînée <br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst):
    if lst.suivant is None:
        return str(lst.valeur)
    else:
        return str(lst.valeur) + '-' +mystere(lst.suivant)
lst = Maillon(10,Maillon(20,Maillon(30,None)))
```
Qu'obtient-on en exécutant `mystere(lst)`



- [X] `10-20-30`
- [ ] `-10-20-30`
- [ ] `30-20-10`
- [ ] `-30-20-10`

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1474
<br>
liste chaînée <br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst):
    if lst.suivant is not None:
        mystere(lst.suivant)
        print(lst.valeur)
a = Maillon(10,None)
b = Maillon(20,a)
c = Maillon(30,b)
```
quel affichage obtient-on en exécutant `mystere(c)`



- [ ] 
```{.quiz}
10
20
30
```
- [X] 
```{.quiz}
20
30
```
- [ ] 
```{.quiz}
30
20
10
```
- [ ] 
```{.quiz}
30
20
```

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1475
<br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst):
    if lst is  None:
        return 0
    return lst.valeur + mystere(lst.suivant)
a = Maillon(10,None)
b = Maillon(20,a)
c = Maillon(30,b)
```
quelle est la valeur de `mystere(c)`



- [ ] 30
- [ ] 50
- [X] 60
- [ ] 0

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1476
<br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst):
    if lst.suivant is  None:
        return 0
    return lst.valeur + mystere(lst.suivant)
a = Maillon(10,None)
b = Maillon(20,a)
c = Maillon(30,b)
```
quelle est la valeur de `mystere(c)`



- [ ] 30
- [X] 50
- [ ] 60
- [ ] 0

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1477
<br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst):
    if lst.suivant is None:
        return lst.valeur
    return mystere(lst.suivant)
a = Maillon(10,None)
b = Maillon(20,a)
c = Maillon(30,b)
```
quelle est la valeur de `mystere(c)`



- [ ] 30
- [ ] 20
- [X] 10
- [ ] `None`

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1478
<br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst):
    if lst.suivant is not None:
        return lst.valeur
    else :
        return 0
a = Maillon(10,None)
b = Maillon(20,a)
print(mystere(a), mystere(b) )
```
quel sera l'affichage obtenu à l'exécution de ce code?



- [ ] `10 20`
- [ ] `0 10`
- [X] `0 20`
- [ ] 30

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1479
<br>
On a saisi le code suivant :<br>
```{.quiz}
class Maillon:
    def __init__(self, val, suiv):
        self.valeur = val
        self.suivant = suiv
def mystere(lst):
    if lst.suivant is None:
        return ''
    return str(lst.valeur) + '-' + mystere(lst.suivant)
a = Maillon(10,None)
b = Maillon(20,a)
c = Maillon(30,b)
a.suivant = c
```
quelle est la valeur de `mystere(c)`



- [ ] `'30-20-10'`
- [ ] `'30-20-'`
- [ ] `'30-20'`
- [X] cette commande renvoie une `RecursionError`

### Structures de données (Terminale) - Autres
n°1507
<br>
Programmation fonctionnelle<br>
Quelle est l’issue du code suivant ?<br>
```{.quiz}
mesFonctions = [lambda x : x ** 2, lambda x : x ** 3, lambda x : x ** 4]
for f in mesFonctions :
    print(f(3), end = ' ')
print()
```



- [ ] 27 81 343
- [X] 9 27 81
- [ ] f(3) f(3) f(3)
- [ ] Rien car on ne peut pas créer des listes de fonctions

### Structures de données (Terminale) - Autres
n°1508
<br>
Programmation fonctionnelle<br>
On considère les définitions de fonctions suivantes :<br>
```{.quiz}
def f1(x):
    return x + 3
def f2(x):
    return x ** 2
def c(f, g):
    return lambda x : f(g(x))
```
`Que renvoie c(f1, f2)(3) ?`



- [ ] une erreur
- [ ] l'entier 36
- [X] l'entier 12
- [ ] la chaîne 'f1(f2)(3)'

### Structures de données (Terminale) - Programmation objet
n°1511
<br>
On définit la classe `identité` de la manière suivante :<br>
```{.quiz}
class identite:
    def __init__(self, nom, prenom, annee):
        self.nom = nom
        self.prenom = prenom
        self.annee = annee
    def age(self, a):
        return a - self.annee
```
Que s’affichera-t-il si on exécute les deux instructions suivantes ?<br>
```{.quiz}
theo = identite('Théo', 'Courant', 2001)
print(theo.age(2020))
```



- [ ] `Théo`
- [ ] `Courant`
- [ ] `2001`
- [X] `19`

### Structures de données (Terminale) - Programmation objet
n°1512
<br>
On définit la classe `voiture` de la manière suivante :<br>
```{.quiz}
class voiture:
    def __init__(self, nom, couleur, puissance):
        self.nom = nom
        self.couleur = couleur
        self.puissance = puissance
    def nc(self):
        return nom + couleur
```
Que s’affichera-t-il si on exécute les deux instructions suivantes ?<br>
```{.quiz}
deudeuche = voiture('2CV', 'Mauve', 2)
print(deudeuche.nc())
```



- [ ] `2CVMauve`
- [ ] `2CV Mauve`
- [X] Une erreur
- [ ] `('2CV', 'Mauve')`

### Structures de données (Terminale) - Programmation objet
n°1513
<br>
On définit la classe `tri` de la manière suivante :<br>
```{.quiz}
class tri:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c
    def est_rectangle(self):
        cot = self.a**2 + self.b**2 # Cotés
        hyp = self.c**2 # Hypoténuse
        return cot == hyp
```
Que s’affichera-t-il si on exécute les deux instructions suivantes ?<br>
```{.quiz}
t = tri(3,4,5)
tri.est_rectangle()
```



- [ ] `True`
- [X] Une erreur
- [ ] Rien
- [ ] `False`

### Structures de données (Terminale) - Arbres
n°1514
<br>
Dans quel ordre vont être traîtées<br>
les clés lors d’un parcours infixe ?
<br>
![image](/assets/images/qcm/1514_Capture+d%E2%80%99%C3%A9cran+2020-12-03+%C3%A0+22.02.33.png)
<br>


- [ ] 4, 3, 7, 0, 2, 5, 8
- [ ] 4, 3, 0, 2, 7, 5, 8
- [ ] 3, 0, 2, 4, 7, 5, 8
- [X] 0, 3, 2, 4, 5, 8, 7

### Structures de données (Terminale) - Arbres
n°1516
<br>
Dans les parcours suivants, lequel est faux ?
<br>
![image](/assets/images/qcm/1516_816px-Arbre_binaire_ordonne.svg.png)
<br>


- [X] parcours préfixe : 1, 2, 4, 7, 5, 8, 3, 6, 9
- [ ] Rendu du parcours postfixe : 4, 7, 8, 5, 2, 9, 6, 3, 1
- [ ] Rendu du parcours infixe : 4, 2, 7, 5, 8, 1, 3, 9, 6
- [ ] Rendu du parcours en largeur : 1, 2, 3, 4, 5, 6, 7, 8, 9

### Structures de données (Terminale) - Arbres
n°1517
<br>
La clé à la racine d’un arbre binaire de recherche (ou d’un sous-arbre) est toujours :<br>
*(on rappel que le parcours utilisé dans les ABR est de type profondeur Infixe avec une sortie croissante)*



- [X] • plus grande que les clés présentes dans son fils gauche;
- [ ] • plus grande que les clés présentes dans son fils droit.
- [ ] • plus grande que les racines présentes sous son pied droit.
- [ ] • plus grande que les clés présentes dans sa main droite.

### Structures de données (Terminale) - Programmation objet
n°1523
<br>
Les variables d'une classe sont appelées des méthodes.



- [ ] réponse A
- [ ] réponse B
- [ ] Vrai
- [X] Faux

### Structures de données (Terminale) - Programmation objet
n°1524
<br>
Les fonctions d'une classe sont appelées des méthodes.



- [ ] réponse A
- [ ] réponse B
- [ ] Faux
- [X] Vrai

### Structures de données (Terminale) - Arbres
n°1533
<br>
Arbre binaire de recherche<br>
Quelle peut-être la valeur (ou clé) manquante de cet arbre binaire de recherche ?
<br>
![image](/assets/images/qcm/1533_arbreBinaire.png)
<br>


- [ ] 16
- [X] 18
- [ ] 21
- [ ] 10

### Structures de données (Terminale) - Arbres
n°1535
<br>
Arbre binaire<br>
Quelle est la taille de cet arbre ?
<br>
![image](/assets/images/qcm/1535_arbre2.png)
<br>


- [ ] 2
- [ ] 3
- [X] 7
- [ ] \(2^3\)

### Structures de données (Terminale) - Arbres
n°1536
<br>
Arbre<br>
Quelle séquence correspond au parcours en largeur de cet arbre ?
<br>
![image](/assets/images/qcm/1536_arbre3.png)
<br>


- [ ] ['F', 'K', 'G', 'E', 'A', 'T', 'B']
- [ ] ['G', 'E', 'T', 'B', 'K', 'A', 'F']
- [ ] ['F', 'A', 'B', 'T', 'K', 'E', 'G']
- [X] ['F', 'K', 'A', 'G', 'E', 'T', 'B']

### Structures de données (Terminale) - Programmation objet
n°1539
<br>
Programmation objet<br>
Comment sont appelées les fonctions définies dans une classe ?



- [ ] Des procédures
- [X] Des méthodes
- [ ] Des sous fonctions
- [ ] Des fonctions locales

### Structures de données (Terminale) - Graphes
n°1552
<br>
Quel est le type de ce graph ?
<br>
![image](/assets/images/qcm/1552_localroads.png)
<br>


- [ ] Un graph niveau 18
- [ ] Un graph orienté avec coûts
- [X] un graph non orienté
- [ ] un graph désorienté

### Structures de données (Terminale) - Graphes
n°1553
<br>
Qu'est-ce que l'ordre d'un graph ?



- [X] Le nombre de ses sommets
- [ ] Le nombre de ses arrêtes
- [ ] Le nombre de ses sommets de degré impaire
- [ ] Le nombre de noeuds adjacents maximum.

### Structures de données (Terminale) - Programmation objet
n°1662
<br>
Vocabulaire<br>
Comment s'appellent les fonctions qui sont dans une classe ?



- [X] Des méthodes
- [ ] Des objets
- [ ] Des instances
- [ ] Des fonctions

### Structures de données (Terminale) - Programmation objet
n°1663
<br>
Faire un nouvel objet<br>
On a saisi le code suivant :<br>
```{.quiz}
class Personne:
  def __init__(self, nom, dateNaiss, villeNaiss):
    self.nom = nom
    self.date = dateNaiss
    self.ville = villeNaiss
```
On crée un nouvel objet p en écrivant :



- [ ] p==Personne('Fabien', 1978, 'Paris')
- [X] p=Personne('Fabien', 1978, 'Paris')
- [ ] p.Personne('Fabien', 1978, 'Paris')
- [ ] Personne('Fabien', 1978, 'Paris')=p

### Structures de données (Terminale) - Programmation objet
n°1664
<br>
Vocabulaire <br>
Qu'est-ce qu'un objet en python ?



- [ ] Une méthode
- [X] Une instance de classe
- [ ] Une fonction dans une classe
- [ ] Un type

### Structures de données (Terminale) - Programmation objet
n°1667
<br>
Vocabulaire des classes<br>
On a saisi le code suivant :<br>
```{.quiz}
class Piece:
    def __init__(self,nom,surface):
        self.nom=nom
        self.surface=surface
    def getSurface(self):
        return self.surface
    def getNom(self):
        return self.nom
    def setSurface(self,s):
        self.surface=s
```
Quelle est le type de \_\_init\_\_ ?



- [X] Un constructeur
- [ ] Un accesseur
- [ ] Un mutateur
- [ ] Autre

### Structures de données (Terminale) - Programmation objet
n°1668
<br>
Vocabulaire des classes<br>
On a saisi le code suivant :<br>
```{.quiz}
class Piece:
    def __init__(self,nom,surface):
        self.nom=nom
        self.surface=surface
    def getSurface(self):
        return self.surface
    def getNom(self):
        return self.nom
    def setSurface(self,s):
        self.surface=s
```
Quelle est le type de setSurface ?



- [ ] Un accesseur
- [ ] Un constructeur
- [X] Un mutateur
- [ ] Autre

### Structures de données (Terminale) - Programmation objet
n°1669
<br>
Vocabulaire des classes<br>
On a saisi le code suivant :<br>
```{.quiz}
class Piece:
    def __init__(self,nom,surface):
        self.nom=nom
        self.surface=surface
    def getSurface(self):
        return self.surface
    def getNom(self):
        return self.nom
    def setSurface(self,s):
        self.surface=s
```
Quelle est le type de getSurface ?



- [X] Un accesseur
- [ ] Un constructeur
- [ ] Un mutateur
- [ ] Autre

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1677
<br>
Structure de pile<br>
Pour implémenter une structure de pile on a créé les fonctions suivantes :<br>
 creerPile() -&gt; pile   <br>
 Renvoie une pile vide. pileVide(p) -&gt; booléen   <br>
 Teste si la pile p est vide et renvoie le booléen obtenu. empiler(p,e) -&gt; None   <br>
 Empile l'élément e sur la pile p. depiler(p) -&gt; élément   <br>
 Dépile la pile p et renvoie l'élément dépilé.<br>
Sachant que p est une pile qui contient au moins deux éléments, quel sera l'effet du code suivant ?<br>
```{.quiz}
a=depiler(p)
b=depiler(p)
empiler(p,a)
empiler(p,b)
```



- [ ] La pile p est inchangée.
- [X] Les deux éléments au sommet de la pile p sont échangés.
- [ ] Les deux éléments au sommet de la pile p sont supprimés.
- [ ] Le code va provoquer une erreur.

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1678
<br>
Structure de pile<br>
Pour implémenter une structure de pile on a créé les fonctions suivantes :<br>
 creerPile() -&gt; pile   <br>
 Renvoie une pile vide pileVide(p) -&gt; booléen   <br>
 Teste si la pile p est vide et renvoie le booléen obtenu. empiler(p,e) -&gt; None   <br>
 Empile l'élément e sur la pile p. depiler(p) -&gt; élément   <br>
 Dépile la pile p et renvoie l'élément dépilé.<br>
Sachant que p est une pile qui contient au moins trois éléments, quel sera l'effet du code suivant ?<br>
```{.quiz}
a=depiler(p)
b=depiler(p)
c=depiler(p)
empiler(p,b)
empiler(p,a)
```



- [ ] Les deux éléments au sommet de la pile p sont échangés.
- [X] Le troisième élément à partir du sommet de la pile p est supprimé.
- [ ] Le code provoque une erreur.
- [ ] Les deux éléments au sommet de la pile p sont supprimés.

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1679
<br>
Structure de pile<br>
Pour quelle application utilisera-t'on une structure de pile ?



- [X] Dans un éditeur de texte un bouton de retour arrière de type Ctrl-z.
- [ ] Dans un bloc note une page pour afficher une liste de course.
- [ ] Dans un jeu vidéo une liste pour contenir les meilleurs scores.
- [ ] Pour créer une playlist avec un fournisseur de musique.

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1693
<br>
Structure de pile<br>
Pour implémenter une structure de pile on a créé les fonctions suivantes :<br>
 creerPile() -&gt; pile   <br>
 Renvoie une pile vide pileVide(p) -&gt; booléen   <br>
 Teste si la pile p est vide et renvoie le booléen obtenu. empiler(p,e) -&gt; None   <br>
 Empile l'élément e sur la pile p. depiler(p) -&gt; élément   <br>
 Dépile la pile p et renvoie l'élément dépilé.<br>
On exécute les instructions suivantes ;<br>
```{.quiz}
p1=creerPile()
empiler(p1,17)
empiler(p1,25)
empiler(p1,3)
empiler(p1,8)
a=depiler(p1)
b=depiler(p1)
```
Quelle sera la valeur de la variable b ?



- [ ] 17
- [ ] 25
- [X] 3
- [ ] 8

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1694
<br>
Structure de file<br>
Pour implémenter une structure de file on a créé les fonctions suivantes :<br>
 creerFile() -&gt; file   <br>
 Renvoie une file vide fileVide(f) -&gt; booléen   <br>
 Teste si la file f est vide et renvoie le booléen obtenu. enfiler(f,e) -&gt; None   <br>
 Enfile l'élément e dans la file f. defiler(f) -&gt; élément   <br>
 Défile la file f et renvoie l'élément défilé.<br>
On exécute les instructions suivantes :<br>
```{.quiz}
f1=creerFile()
enfiler(f1,17)
enfiler(f1,25)
enfiler(f1,3)
enfiler(f1,8)
a=defiler(f1)
b=defiler(f1)
```
Quelle sera la valeur de la variable b ?



- [ ] 17
- [X] 25
- [ ] 3
- [ ] 8

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1695
<br>
Structure de pile<br>
Pour implémenter une structure de pile on a créé les fonctions suivantes :<br>
 creerPile() -&gt; pile   <br>
 Renvoie une pile vide pileVide(p) -&gt; booléen   <br>
 Teste si la pile p est vide et renvoie le booléen obtenu. empiler(p,e) -&gt; None   <br>
 Empile l'élément e sur la pile p. depiler(p) -&gt; élément   <br>
 Dépile la pile p et renvoie l'élément dépilé.<br>
Sachant que p est une pile qui contient au moins trois éléments, quel code permet de supprimer le deuxième élément de la pile p en partant du sommet et uniquement celui ci ?



- [X] 
```{.quiz}
a=depiler(p)
b=depiler(p)
empiler(p,a)
```
- [ ] 
```{.quiz}
a=depiler(p)
b=depiler(p)
empiler(p,b)
```
- [ ] 
```{.quiz}
a=depiler(p)
b=depiler(p)
```
- [ ] 
```{.quiz}
a=depiler(p)
empiler(p,a)
b=depiler(p)
```

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1696
<br>
Structure de file<br>
Pour implémenter une structure de file on a créé les fonctions suivantes :<br>
 creerFile() -&gt; file   <br>
 Renvoie une file vide fileVide(f) -&gt; booléen   <br>
 Teste si la file f est vide et renvoie le booléen obtenu. enfiler(f,e) -&gt; None   <br>
 Enfile l'élément e dans la file f. defiler(f) -&gt; élément   <br>
 Défile la file f et renvoie l'élément défilé.<br>
la file f1 contient les nombres entiers suivants :  <br>
&gt; 3, 8, 2, 10, 5 &gt;  <br>
On exécute alors le code ci-dessous<br>
```{.quiz}
f2=creerFile()
while not fileVide(f1):
   a=defiler(f1)
   enfiler(f2,a)
```
Quel sera le contenu de la file f2 ?



- [X] &gt; 3, 8, 2, 10, 5 &gt;
- [ ] &gt; 5, 10, 2, 8, 3 &gt;
- [ ] La file f2 sera vide.
- [ ] &gt; 5, 3, 8, 2, 10 &gt;

### Structures de données (Terminale) - Programmation objet
n°1711
<br>
Vocabulaire<br>
Comment appelle-t-on les variables propres à nos objets?



- [ ] Des variables locales
- [X] Des attributs
- [ ] Des méthodes
- [ ] Des instances

### Structures de données (Terminale) - Programmation objet
n°1746
<br>
Une classe Couleur<br>
Voici la définition d'une classe Couleur.<br>
```{.quiz}
class Couleur:
    def __init__(self, t):
        self.r, self.g, self.b = t
    def rgb_vers_hex(self):
        return f'#{self.r:02x}{self.g:02x}{self.b:02x}'
    def __str__(self):
        return f'({self.r}, {self.g}, {self.b})'
```
 Qu'affiche la commande `print(Couleur(255, 255, 255))` ?



- [ ] `TypeError`
- [ ] `#ffffff`
- [X] `(255, 255, 255)`
- [ ] `SyntaxError`

### Structures de données (Terminale) - Programmation objet
n°1748
<br>
Une classe minimale ?<br>
On considère le code suivant :<br>
```{.quiz}
class Mon_objet:
    pass
o = Mon_objet()
o.attribut = 0
```
À l'exécution :



- [ ] le script s'arrête avec: AttributeError
- [X] l'excécution se déroule normalement : pas d'erreur.
- [ ] le script s'arrête avec : InitError
- [ ] le script s'arrête avec : 'o is not a valid object'

### Structures de données (Terminale) - Arbres
n°1793
<br>
Arbre et abr !<br>
Voici le code qui permet de créer un arbre:<br>
```{.quiz}
Noeud(33,Noeud(15,Noeud(10,None,None),Noeud(20,Noeud(12,None,None),None)),Noeud(40,None,None))
```
Quelle réponse est fausse parmi les propositions suivantes ?
<br>
![image](/assets/images/qcm/1793_arbre.png)
<br>


- [ ] En retirant une valeur de l'arbre donné, on obtient un arbre binaire de recherche.
- [ ] L'algorithme suivant permet de déterminer la plus grande valeur:
```{.quiz}
Début
TantQue fils_droit(x) != None Faire
    x &lt;- fils_droit(x)
FinTantQue
Retourner (x)
Fin
```
- [ ] Dans un arbre binaire de recherche la plus petite valeur est la plus à gauche.
- [X] Le code suivant permet de dire si la valeur x appartient à l'arbre de recherche k
```{.quiz}
ABRRecherche(x,k)
Début
Si x == None Alors
   Retourner Faux
Sinon
   Si k = valeur(x) Alors
      Retourner Vrai
   Sinon
      Si k &lt; cle(x) Alors
         Retourner ABRRecherche(fils_droit(x),k)
      Sinon
         Retourner ABRRecherche(fils_gauche(x),k)
      FinSi
   FinSi
FinSi
Fin
```

### Structures de données (Terminale) - Arbres
n°1806
<br>
Arbres binaires : taille et hauteur<br>
Dans cette question \(n\) désigne la taille d'un arbre binaire et \(h\) sa hauteur (nombre d'arêtes).<br>
Quel encadrement, parmi les suivants, est alors correct ?



- [ ] \(h\leqslant n \leqslant 2^{h+1}\)
- [ ] \(h+1\leqslant n \leqslant 2^{h+1}\)
- [X] \(h+1\leqslant n \leqslant 2^{h+1}-1\)
- [ ] \(h\leqslant n \leqslant 2^{h+1}+1\)

### Structures de données (Terminale) - Arbres
n°1807
<br>
Dans un ABR<br>
On considère un Arbre Binaire de Recherche implémenté par une simple classe Noeud. Chaque objet contient une clé 'cle' et deux attributs 'gauche' et 'droit' qui désignent None ou un objet de type Noeud<br>
On considère le code suivant d'une méthode mystere de la classe Noeud:<br>
```{.quiz}
def mystere(self, noeud):
    # précondition : noeud.cle ne fait pas partie des
    # clés existantes dans l'arbre
    if noeud.cle &lt; self.cle:
        if self.gauche is None:
            self.gauche = noeud
        else:
            self.gauche.mystere(noeud)
    else:
        if self.droit is None:
            self.droit = noeud
        else:
            self.droit.mystere(noeud)
```
Que fait cette fonction ?



- [ ] Elle remplace tous les 'None' de la structure initiale par l'argument noeud.
- [X] Elle insère noeud dans l'arbre.
- [ ] Elle remplace tous les noeuds de l'ABR par le noeud mis en argument.
- [ ] Elle supprime noeud dans l'arbre s'il est rencontré et l'insère à gauche si la place est libre sinon le met à droite.

### Structures de données (Terminale) - Arbres
n°1808
<br>
Dans un ABR<br>
On considère un Arbre Binaire de Recherche implémenté par une simple classe Noeud. Chaque objet contient une clé 'cle' et deux attributs 'gauche' et 'droit' qui désignent None ou un objet de type Noeud<br>
On considère le code suivant d'une méthode mystere de la classe Noeud:<br>
```{.quiz}
def mystere(self, noeud):
    # précondition : noeud.cle ne fait pas partie des
    # clés existantes dans l'arbre
    if noeud.cle &lt; self.cle:
        if self.gauche is None:
            self.gauche = noeud
        else:
            self.gauche.mystere(noeud)
    else:
        if self.droit is None:
            self.droit = noeud
        else:
            self.droit.mystere(noeud)
```
Que fait cette fonction ?



- [ ] Elle remplace tous les 'None' de la structure initiale par l'argument noeud.
- [X] Elle insère noeud dans l'arbre.
- [ ] Elle remplace tous les noeuds de l'ABR par le noeud mis en argument.
- [ ] Elle supprime noeud dans l'arbre s'il est rencontré et l'insère à gauche si la place est libre sinon le met à droite.

### Structures de données (Terminale) - Graphes
n°1833
<br>
Graphe<br>
Dans un graphe non-orienté, qu'est-ce qu'une chaîne ?
<br>
![image](/assets/images/qcm/1833_Chaine.jpg)
<br>


- [ ] Une suite de sommets optimisant le nombre de sauts entre deux sommets choisis.
- [X] Une suite d'arêtes consécutives (chaque arête a une extrêmité commune avec la suivante).
- [ ] Une suite de sommets telle que le premier et le dernier soient identiques.
- [ ] Une suite d'objets de la classe Maillon.

### Structures de données (Terminale) - Graphes
n°1834
<br>
Graphe<br>
On considère le graphe suivant.<br>
Parmi les propositions suivantes, laquelle n'est pas un chemin valide ?
<br>
![image](/assets/images/qcm/1834_graphviz_3.png)
<br>


- [ ] B-A-E
- [ ] B-A-E-B
- [ ] B-D-D-E-B
- [X] C-A-B-D

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1944
<br>
Recherche d'une valeur<br>
 La complexité de la recherche d'une valeur dans un tableau est d'ordre :



- [ ] O(1)
- [X] O(n)
- [ ] O(n²)
- [ ] O(log(n))

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1945
<br>
Recherche d'une valeur<br>
 Dans un dictionnaire, les clés sont stockées en mémoire :



- [ ] Par ordre croissant.
- [ ] Par ordre d'arrivée
- [ ] Par ordre alphabétique
- [X] Selon un algorithme de hachage

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1946
<br>
Recherche d'une valeur<br>
 Dans un dictionnaire, que contient une alvéole ?



- [ ] du miel.
- [X] une paire clé/valeur
- [ ] une clé
- [ ] l'ensemble des éléments

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1947
<br>
Recherche d'une valeur<br>
 Comment peut-on déterminer qu'une clé appartient à un dictionnaire ?



- [ ] On parcourt l'ensemble des clés pour voir si elle existe.
- [ ] On essaye de l'ajouter et une erreur se produit.
- [ ] On vérifie que la clé se trouve entre la précédente et la suivante dans l'ordre croissant.
- [X] On détermine l'adresse en mémoire où la clé doit être stockée et on vérifie sa présence.

### Structures de données (Terminale) - Listes, piles, files, dictionnaires
n°1948
<br>
Recherche d'une valeur<br>
La complexité de la recherche d'une clé dans un dictionnaire est d'ordre :



- [X] O(1)
- [ ] O(n)
- [ ] O(n²)
- [ ] O(log(n))

### Structures de données (Terminale) - Arbres
n°1951
<br>
Arbre<br>
Quel nœud est la racine de cet arbre ?
<br>
![image](/assets/images/qcm/1951_1516_816px-Arbre_binaire_ordonne.svg.png)
<br>


- [X] 1
- [ ] 2
- [ ] 7
- [ ] 9

### Structures de données (Terminale) - Arbres
n°1952
<br>
Arbre<br>
Quel nœud est une feuille de cet arbre ?
<br>
![image](/assets/images/qcm/1952_1516_816px-Arbre_binaire_ordonne.svg.png)
<br>


- [ ] 1
- [ ] 2
- [ ] 5
- [X] 7

### Structures de données (Terminale) - Arbres
n°1953
<br>
Arbre<br>
Quelle est la hauteur de cet arbre ?
<br>
![image](/assets/images/qcm/1953_1516_816px-Arbre_binaire_ordonne.svg.png)
<br>


- [ ] 1
- [X] 3
- [ ] 7
- [ ] 23

