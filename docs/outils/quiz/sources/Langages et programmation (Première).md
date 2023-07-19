### Langages et programmation (Première) - Constructions élémentaires
n°17
<br>
Qu'est ce qu'un algorithme ?



- [ ] Un organigramme
- [ ] Un organigramme ou un pseudocode
- [ ] Une Décision
- [X] Instructions pas à pas utilisées pour résoudre un problème

### Langages et programmation (Première) - Constructions élémentaires
n°18
<br>
On souhaite écrire un programme calculant le triple d'un nombre décimal et affichant le résultat. On a saisi le code suivant :<br>
```{.quiz}
nombre = input('Saisir un nombre') 
triple = nombre \* 3 
print(triple) 
```
Un utilisateur saisit le nombre 5 lorsque l'ordinateur lui demande. Quel va être le résultat affiché ?



- [ ] `nombrenombrenombre`
- [X] `555`
- [ ] `15`
- [ ] `15.0`

### Langages et programmation (Première) - Constructions élémentaires
n°19
<br>
On a saisi le code suivant :<br>
```{.quiz}
nombre = int (input('Saisir un nombre') )
double = nombre \* 2
print(double)
```
Quel message affiche l’ordinateur lorsque l'utilisateur saisit 8.5 ?



- [ ] `16`
- [ ] `16.0`
- [ ] `17`
- [X] L'ordinateur affiche une erreur

### Langages et programmation (Première) - Constructions élémentaires
n°20
<br>
On a saisi le code suivant :<br>
```{.quiz}
a = '1 + 1'
b = 1 + 1
c = '2'
d = 2
```
Quelle instruction permet d’afficher le message `1 + 1 = 2` ?



- [X] 
```{.quiz}
print(a + ' = ' + c)
```
- [ ] 
```{.quiz}
print(a + ' = ' + d)
```
- [ ] 
```{.quiz}
print(b + ' = ' + c)
```
- [ ] 
```{.quiz}
print(b + ' = ' + d)
```

### Langages et programmation (Première) - Constructions élémentaires
n°21
<br>
On a saisi le code suivant :<br>
`mot = 'première'`Quelle affirmation est vraie ?



- [ ] `mot[1]` vaut `p`
- [ ] `len(mot)` vaut `7`
- [ ] `len(mot)` vaut `6`
- [X] `mot[7]` vaut `e`

### Langages et programmation (Première) - Constructions élémentaires
n°22
<br>
On a saisi le code suivant :<br>
```{.quiz}
a = 8
b = 5
a = a + b
b = a - b
a = a - b
```
Quelles sont les valeurs de a et b à la fin du programme ?



- [ ] `a = 8` et `b = 5`
- [ ] `a = 8` et `b = 13`
- [X] `a = 5` et `b = 8`
- [ ] `a = 13` et `b = 5`

### Langages et programmation (Première) - Constructions élémentaires
n°23
<br>
On a saisi le code suivant :<br>
```{.quiz}
a = float( input('Saisir un nombre : ') )
if a &lt; 1 :
  print('TIC')
elif a &gt; 8.5 :
  print('TAC')
else :
  print('TOE')
```
Quel message affiche l’ordinateur lorsque l'utilisateur saisit 8.5 ?



- [ ] `TIC`
- [ ] `TAC`
- [X] `TOE`
- [ ] Le code n'affiche aucun message

### Langages et programmation (Première) - Constructions élémentaires
n°24
<br>
On a saisi le code suivant :<br>
```{.quiz}
n = 8.0
while n &gt; 1.0 :
  n = n / 2
```
Quelle est la valeur de n après l’exécution du code ?



- [ ] `4.0`
- [ ] `2.0`
- [X] `1.0`
- [ ] `0.5`

### Langages et programmation (Première) - Constructions élémentaires
n°25
<br>
On souhaite que l’utilisateur saisisse une valeur entière comprise entre 1 et 20 (inclus).<br>
Quel code est correct ?



- [ ] 
```{.quiz}
a = int ( input('Saisir un nombre entre 1 et 20') )
while (a &lt; 1 and a &gt; 20) :
  a = int ( input('Saisir un nombre entre 1 et 20') )
```
- [ ] 
```{.quiz}
while (a &lt; 1 and a &gt; 20) :
  a = int ( input('Saisir un nombre entre 1 et 20') )
```
- [X] 
```{.quiz}
a = int ( input('Saisir un nombre entre 1 et 20') )
while (a &lt; 1 or a &gt; 20) :
  a = int ( input('Saisir un nombre entre 1 et 20') )
```
- [ ] 
```{.quiz}
a = int ( input('Saisir un nombre entre 1 et 20') )
while (a &gt;= 1 and a &gt;= 20) :
  a = int ( input('Saisir un nombre entre 1 et 20') )
```

### Langages et programmation (Première) - Constructions élémentaires
n°26
<br>
On souhaite écrire un programme affichant tous les entiers multiples de 3 entre 6 et 288 inclus.<br>
Quel code est correct ?



- [ ] 
```{.quiz}
for n in range(6, 288, 3) :
  print(n)
```
- [ ] 
```{.quiz}
for n in range(6, 289) :
  print(n / 3)
```
- [ ] 
```{.quiz}
for n in range(6, 289) :
  print(3 \* n)
```
- [X] 
```{.quiz}
for n in range(6, 290, 3) :
  print(n)
```

### Langages et programmation (Première) - Constructions élémentaires
n°27
<br>
On a saisi le code suivant :<br>
```{.quiz}
a = 12
for i in range(3) :
  a = a \* 2
  a = a - 10
```
Quelle est la valeur de a après l’exécution du code ?



- [ ] `18`
- [ ] `18.0`
- [X] `26`
- [ ] `26.0`

### Langages et programmation (Première) - Constructions élémentaires
n°31
<br>
Voici une fonction Python de recherche d'un maximum :<br>
```{.quiz}
def maxi(t):
  m = -1 
  for k in range(len(t)):
    if t[k] &gt; m:
      m = t[k] 
  return m 
```
Avec quelle précondition sur la liste `t`, la postcondition « *m est un élément maximum de la liste s* » n'est-elle pas assurée ?



- [ ] Tout élément de `t` est un entier positif ou nul
- [X] Tout élément de `t` est un entier supérieur ou égal à -2
- [ ] Tout élément de `t` est un entier supérieur ou égal à 11
- [ ] Tout élément de `t` est un entier strictement supérieur à -2

### Langages et programmation (Première) - Constructions élémentaires
n°39
<br>
Quelle est le résultat de : `'orange'[-3] ?`



- [ ] 'e'
- [ ] 'g'
- [X] 'n'
- [ ] Error : Negative index

### Langages et programmation (Première) - Constructions élémentaires
n°40
<br>
Quelle est le résultat de : `[ (a,b) for a in range(3) for b in range(a) ]` ?



- [ ] [(1,0),(2,1),(2,1)]
- [ ] [(1,0),(2,1),(3,2)]
- [X] [(1,0),(2,0),(2,1)]
- [ ] [(0,0),(1,1),(2,2)]

### Langages et programmation (Première) - Constructions élémentaires
n°41
<br>
Que contient la variable a si on execute ce script ?<br>
```{.quiz}
def diff(val1,val2):  
    return val2 - val1   
a = diff(3.0,-2.0)
```



- [ ] 5.0
- [ ] 1.0
- [ ] -1.0
- [X] -5.0

### Langages et programmation (Première) - Constructions élémentaires
n°42
<br>
Que contient la variable `a` si on exécute ce script ?  <br>
```{.quiz}
def carre(val):  
  return val*val  
def inc(val):  
  return val + 1  
a = carre(inc(3.0))
```



- [ ] 9.0
- [ ] 10.0
- [ ] 12.0
- [X] 16.0

### Langages et programmation (Première) - Constructions élémentaires
n°43
<br>
Que contiennent les variables a et b si on execute ce script ?<br>
```{.quiz}
def func(a):  
    a += 2.0  
    return a   
a = 5.0   
b = func(a)
```



- [ ] 5.0 et 5.0
- [X] 5.0 et 7.0
- [ ] 7.0 et 5.0
- [ ] 7.0 et 7.0

### Langages et programmation (Première) - Constructions élémentaires
n°44
<br>
`Pour i allant de 0 à 9` s'écrit



- [ ] `for i in range(8)`
- [ ] `for i in range(9)`
- [X] `for i in range(10)`
- [ ] `for i in range(11)`

### Langages et programmation (Première) - Constructions élémentaires
n°45
<br>
`pour i allant de 1 à 10` s'écrit :



- [ ] `for i in range(10)`
- [X] `for i in range(1,11)`
- [ ] `for i in range(1,10)`
- [ ] `for i in range(0,10)`

### Langages et programmation (Première) - Constructions élémentaires
n°46
<br>
Que taper en Python pour obtenir 38 ?



- [ ] 3^8
- [X] 3\*\*8
- [ ] 3\*8
- [ ] 3&8

### Langages et programmation (Première) - Constructions élémentaires
n°48
<br>
Avec la fonction donnée ci-dessous l'instruction `mystere(0,1)` retourne :<br>
```{.quiz}
def mystere(a,b):  
    reponse=1  
    if a==0:  
        if b==0:  
            reponse=0  
    return reponse
```



- [ ] 0
- [X] 1
- [ ] True
- [ ] False

### Langages et programmation (Première) - Constructions élémentaires
n°54
<br>
Soit le script Python suivant : :<br>
```{.quiz}
import random   
pos = random.randint(2, 9)
```
Quelle valeur est associée à la variable pos ?



- [ ] un nombre entier aléatoire dans l'intervalle [2 ; 9[
- [X] un nombre entier aléatoire dans l'intervalle [2 ; 9]
- [ ] un nombre réel aléatoire dans l'intervalle ]2 ; 9[
- [ ] un nombre réel aléatoire dans l'intervalle [2 ; 9[

### Langages et programmation (Première) - Constructions élémentaires
n°68
<br>
Soit la liste : <br>
```{.quiz}
liste_pays = ['France','Allemagne','Italie','Belgique','Pays Bas']
```
 Que renvoie l'instruction :<br>
```{.quiz}
'Belgique' in liste_pays
```



- [X] True
- [ ] False
- [ ] liste\_pays
- [ ] ['France','Allemagne','Italie','Belgique','Pays Bas']

### Langages et programmation (Première) - Constructions élémentaires
n°71
<br>
Soit la liste suivante :<br>
```{.quiz}
liste_pays = ['France','Allemagne','Italie','Belgique']
```
Que renvoie :<br>
```{.quiz}
liste_pays[2]
```



- [ ] France
- [ ] Allemagne
- [X] Italie
- [ ] Belgique

### Langages et programmation (Première) - Mise au point des programmes
n°109
<br>
La fonction ci-dessous calcule la température en °F à partir d’une température en °C.   <br>
On a saisi le code suivant :<br>
```{.quiz}
def converti_temp(temp_c):      
    temp_f = temp_c *1.8+32  
    return temp_f  
a = .....................................  
Print(“la température en °F est de “, a)  
```
Quelle instruction doit-on choisir pour appeler la fonction avec une température de 20 °C ?



- [ ] a=converti\_temp(20°C)
- [ ] a=converti\_temp('20')
- [ ] a=int(input('saisir la temp en °C'))
- [X] a=converti\_temp(20)

### Langages et programmation (Première) - Constructions élémentaires
n°110
<br>
Suite au programme ci-dessous, il faut afficher le message suivant « je m’appelle prenom et j’ai age ans ».  <br>
```{.quiz}
prenom=input('saisir votre prenom')  
annee-naissance=int(input('saisir votre année de naissance'))  
age= 2019 – annee_naissance  
```
Quelle instruction doit-on choisir ?



- [X] print('je m’appelle '+prenom+' et j’ai '+str(age)+ 'ans ')
- [ ] print('je m’appelle '+int(prenom)+' et j’ai '+int(age)+ 'ans ')
- [ ] print('je m’appelle '+prenom+' et j’ai '+ age+ 'ans ')
- [ ] print('je m’appelle '+prenom+' et j’ai '+int(age)+ 'ans ')

### Langages et programmation (Première) - Constructions élémentaires
n°111
<br>
On a saisi le code suivant :  <br>
```{.quiz}
a = '8'  
b = 5  
a + b  
```
que retourne ce programme ?



- [ ] '13'
- [X] TypeError : must be str, not int.
- [ ] False
- [ ] 13

### Langages et programmation (Première) - Constructions élémentaires
n°114
<br>
On souhaite écrire un programme calculant le triple d'un nombre décimal et affichant le résultat.   <br>
On a saisi le code suivant :<br>
```{.quiz}
nombre = input('Saisir un nombre')   
triple = nombre * 3   
print(triple)   
```
Un utilisateur saisit le nombre 5 lorsque l'ordinateur lui demande. Quel va être le résultat affiché ?



- [X] 555
- [ ] nombrenombrenombre
- [ ] 15
- [ ] 15.0

### Langages et programmation (Première) - Autres
n°116
<br>
Qu'affiche le programme python suivant ?  <br>
```{.quiz}
def f(x):  
    return 2*x-4  
def g(x):  
     return x+3  
print(f(g(0)))  
```



- [ ] f(g(0))
- [X] 2
- [ ] f(3)
- [ ] -1

### Langages et programmation (Première) - Constructions élémentaires
n°121
<br>
On a saisi le code suivant :  <br>
```{.quiz}
s=0  
for i in range(5):  
    s=i  
print(s)  
```
Qu'affiche le programme python ?



- [ ] 5
- [X] 4
- [ ] 10
- [ ] 0  
1  
2  
3  
4

### Langages et programmation (Première) - Constructions élémentaires
n°134
<br>
En python, que fait l'instruction ci-dessous ?<br>
 #print(a,b)



- [ ] elle affiche le texte 'a,b'
- [ ] elle affiche les valeurs de a et b
- [ ] elle génère une erreur
- [X] elle ne fait rien

### Langages et programmation (Première) - Constructions élémentaires
n°135
<br>
En python, combien vaut : 12%5 ?



- [ ] 1
- [X] 2
- [ ] 3
- [ ] ce calcul génère une erreur

### Langages et programmation (Première) - Constructions élémentaires
n°136
<br>
Qu'affiche ce script ?<br>
```{.quiz}
n = 5  
for _ in range (2, 7) :  
    n = n + 2  
print(n)  
```



- [X] 15
- [ ] 6
- [ ] 20
- [ ] 11

### Langages et programmation (Première) - Constructions élémentaires
n°137
<br>
L'instruction 'if...elif...else' : :



- [X] permet de diminuer le temps d'exécution du programme
- [ ] ne présente pas plus d'avantages que plusieurs si... consécutifs
- [ ] ne sert à rien. C'est juste une façon de présenter qui est plus lisible
- [ ] aucune de ces réponses n'est correcte

### Langages et programmation (Première) - Constructions élémentaires
n°138
<br>
On définit la fonction mystère suivante :<br>
```{.quiz}
def mystere (n) :  
    if n % 3 == 0 or n % 5 == 0 :  
        if n % 3 == 0 :  
            resultat = 'A'  
        else :  
            resultat = 'B'  
    else :  
        if n % 5 == 0 :  
            resultat = 'C'  
        else :  
            resultat = 'D'  
    return resultat  
```
Quelle est la valeur de mystere(10) ?



- [ ] 'A'
- [X] 'B'
- [ ] 'C'
- [ ] 'D'

### Langages et programmation (Première) - Constructions élémentaires
n°140
<br>
Après le code Python qui suit, quelles sont les valeurs finales de x et de y ?<br>
```{.quiz}
x = 4  
while x &gt; 0 :  
    y = 0  
    while y &lt; x :  
        y = y + 1  
        x = x - 1  
```



- [ ] La valeur finale de x est -1 et celle de y est 0
- [ ] La valeur finale de x est 0 et celle de y est 0
- [X] La valeur finale de x est 0 et celle de y est 1
- [ ] La boucle externe est une boucle infinie, le programme ne termine pas.

### Langages et programmation (Première) - Mise au point des programmes
n°143
<br>
Le programme Python suivant ne calcule pas toujours correctement le résultat de (x puissance y). Parmi les tests suivants, lequel va permettre de détecter l'erreur ?<br>
```{.quiz}
def puissance(x,y) :  
     p = x  
     for i in range(y-1):  
          p = p * x  
     return p  
```



- [X] puissance(2,0)
- [ ] puissance(2,1)
- [ ] puissance(2,2)
- [ ] puissance(2,10)

### Langages et programmation (Première) - Constructions élémentaires
n°173
<br>
Dans la fonction Mystere ci-dessous, le contenu de la boucle for a été effacé.  <br>
Si Mystere([1, 3, 5, 2]) renvoie [4, 8, 7, 2], quelle est l'instruction manquante?  <br>
```{.quiz}
def Mystere(b):  
  for i in range(len(b)-1):  
       ...  
  return b  
```



- [X] b[i]=b[i]+b[i+1]
- [ ] b[i]=b[i]+b[i-1]
- [ ] b[i]=b[i]\*b[i-1]
- [ ] b[i+1]=b[i]+b[i+1]

### Langages et programmation (Première) - Constructions élémentaires
n°175
<br>
Voici une fonction Mystere où il manque un bloc d'instructions:<br>
```{.quiz}
def Mystere(t,n,p):  
   nb=0  
   for i in range(len(t)):  
     ....  
   return nb  
```
Voici quelques résultats d'exécution:  <br>
  Mystere([1, 2, 3, 4, 5, 7], 2, 5) renvoie 3.  <br>
  Mystere([1, 2, 3, 4, 6, 7], 2,4.1) renvoie 3.  <br>
Parmi les blocs d'instructions suivants, lequel convient?



- [ ] 
```{.quiz}
if n &lt; t[i] and t[i] &lt; p:  
    nb=nb+1  
```
- [ ] 
```{.quiz}
if n &lt; t[i] and t[i] &lt;= p:  
    nb=nb+1  
```
- [X] 
```{.quiz}
if n &lt;= t[i] and t[i] &lt; p :  
    nb=nb+1  
```
- [ ] 
```{.quiz}
if n &lt;= t[i] and t[i] &lt;= p:  
   nb=nb+1  
```

### Langages et programmation (Première) - Constructions élémentaires
n°176
<br>
for i in range(5):  <br>
signifie que i prend les valeurs:



- [X] 0, 1, 2, 3, 4.
- [ ] 1, 2, 3, 4, 5.
- [ ] 5, 4, 3, 2, 1
- [ ] 4, 3, 2, 1, 0

### Langages et programmation (Première) - Constructions élémentaires
n°177
<br>
Quelles sont les valeurs prises successivement par la variable i dans la boucle for ci-dessous ?  <br>
```{.quiz}
res = 1  
for i in range(3) :  
    res =res +i  
```



- [X] 0, 1, 2
- [ ] 0, 1, 2, 3
- [ ] 1, 2, 3
- [ ] 1, 2, 3, 4

### Langages et programmation (Première) - Constructions élémentaires
n°178
<br>
On a saisi le code suivant :<br>
```{.quiz}
def mystere(nombre) :
    while nombre &gt; 5 :
        nombre = nombre – 5
    return nombre
```
Quelle affirmation est vraie dans celles proposées ci-dessous ?



- [ ] On sort de la boucle while dès que nombre &gt; 5
- [ ] On sort de la boucle while dès que nombre &lt; 5
- [X] On sort de la boucle while dès que nombre &lt;= 5
- [ ] On continue la boucle tant que nombre &lt;= 5

### Langages et programmation (Première) - Constructions élémentaires
n°179
<br>
On a saisi le code suivant :<br>
```{.quiz}
debut =  'sous le pont Mirabeau coule la Seine.'  
lettre  = ' u '  
fin =  ' '  
for i in debut : #parcourt la chaine de caractère  
#si la lettre sur laquelle on est est différente de celle   
#stockée dans lettre, alors on concatène ce caractère à ce qui  
#était stocké précédemment dans la variable fin.  
    if i != lettre :  
        fin = fin+i  
print(fin)  
```
Qu'affiche ce script à la fin de son exécution ?



- [X] sos le pont Mirabea cole la Seine
- [ ] souus le pont Mirabeauu couule la Seine
- [ ] sois le pont Mirabeai coile la Seine
- [ ] souis le pont Mirabeaui couile la Seine

### Langages et programmation (Première) - Mise au point des programmes
n°181
<br>
Une fonction test a été programmée pour vérifiée une fonction f dont on a donné une spécification. Quelle proposition est vraie ?



- [ ] La fonction test permet de trouver toutes les éventuelles erreurs de codage de la fonction f.
- [X] La fonction test  peut permettre à l’utilisateur de trouver une éventuelle erreur de codage de la fonction f.
- [ ] La spécification sert à l’interpréteur pour vérifier les paramètres de la fonction f.
- [ ] La spécification sert à l’interpréteur pour vérifier le résultat renvoyé par la fonction f.

### Langages et programmation (Première) - Constructions élémentaires
n°182
<br>
Après le code Python qui suit, quelles sont les valeurs finales de x et de y ?  <br>
```{.quiz}
x = 6  
while x &gt; 3 :  
    y = 3  
    while y &lt; x :  
         y = y + 1   
         x = x - 1    
```



- [ ] La valeur finale de x est 3 et celle de y est 3.
- [X] La valeur finale de x est 3 et celle de y est 4.
- [ ] La valeur finale de x est 4 et celle de y est 3.
- [ ] La boucle externe est une boucle infinie, le programme ne termine pas.

### Langages et programmation (Première) - Constructions élémentaires
n°205
<br>
a et m étant des entiers strictement positifs,la fonction suivante calcule a m :<br>
```{.quiz}
def puissance (a,m) :  
     p = 1  
     n = 0  
     while n &lt; m :  
          p = p * a  
          #  
          n = n + 1  
     return p  
```
A la ligne marquée d'un #, on a, après le # :



- [ ] p = an
- [ ] p = an-1
- [X] p = an+1
- [ ] p = am

### Langages et programmation (Première) - Spécification
n°206
<br>
Voici une fonction Python de recherche d'un maximum :<br>
```{.quiz}
def maxi(t) :  
     m = -1  
     for k in range(len(t)) :  
          if t[k] &gt; m :  
               m = t[k]  
     return m  
```
Avec quelle précondition sur la liste t, la postcondition 'm est un élément maximum de la liste t' n'est-elle pas assurée ?



- [ ] Tout élément de t est un entier positif ou nul
- [X] Tout élément de t est un entier supérieur ou égal à -2
- [ ] Tout élément de t est un entier supérieur ou égal à -1
- [ ] Tout élément de t est un entier strictement supérieur à -2

### Langages et programmation (Première) - Mise au point des programmes
n°207
<br>
La fonction indice\_maxi ci-dessous doit rechercher l'indice de la valeur maximale présente dans une liste de nombres et le renvoyer. Dans le cas où cette valeur maximale est présente plusieurs fois, c'est le plus petit de ces indices qui doit être renvoyé.<br>
```{.quiz}
def indice_maxi(liste) :  
     valeur_max = liste[0]  
     indice = 0  
     for i in range(len(liste)) :  
          if liste[i] &gt; valeur_max :  
               indice = i  
     return indice  
```
Cette fonction a mal été programmée. On souhaite mettre en évidence son incorrection par un test bien choisi. Quelle valeur de test mettra l'erreur en évidence ?



- [ ] [1, 2, 3, 4]
- [ ] [4, 3, 2, 1]
- [X] [1, 3, 3, 2]
- [ ] [1, 1, 1, 1]

### Langages et programmation (Première) - Diversité des langages
n°208
<br>
Dans le programme JavaScript suivant, quelle est la notation qui délimite le bloc d'instructions exécuté à chaque passage dans la boucle while ?<br>
```{.quiz}
i = 0  
while (i &lt; 10) {  
     alert(i)  
     i = i + 1  
}  
alert('Fin')  
```



- [X] Le fait que les instructions soient encadrées entre { et }
- [ ] Le fait que les instructions soient indentées de 4 caractères comme en Python.
- [ ] Le fait que les instructions suivent le mot clé while
- [ ] Le fait que les instructions suivent la parenthèse )

### Langages et programmation (Première) - Spécification
n°209
<br>
La fonction suivante calcule la racine carrée du double d'un nombre flottant.<br>
```{.quiz}
from math import sqrt  
def racine_du_double(x) :  
     return sqrt(2*x)  
```
Quelle est la précondition sur les arguments de cette fonction ?



- [X] x &gt;= 0
- [ ] 2 \* x &gt; 0
- [ ] x &lt; 0
- [ ] sqrt(x) &gt;= 0

### Langages et programmation (Première) - Mise au point des programmes
n°210
<br>
Avec la définition de fonction capital\_double suivante, que peut-on toujours affirmer à propos du résultat n retourné par la fonction ?<br>
```{.quiz}
def capital_double (capital, interet) :  
     montant = capital  
     n = 0  
     while montant &lt;= 2 * capital :  
          montant = montant + interet  
          n = n + 1  
     return n  
```



- [X] capital + n \* interet &gt; 2 \* capital
- [ ] n = capital / interet
- [ ] capital \* n \* interet &gt; 2 \* capital
- [ ] n = 2 \* capital / interet

### Langages et programmation (Première) - Mise au point des programmes
n°211
<br>
On a écrit une fonction qui prend en paramètre une liste non vide et qui renvoie son plus grand élément. Combien de tests faudrait-il écrire pour garantir que la fonction donne un résultat correct pour toute liste ?



- [X] Il faudrait écrire une infinité de tests : on ne peut pas prouver que cette fonction est correcte, simplement en la testant.
- [ ] Deux tests : pour une liste à un élément et pour une liste à deux éléments ou plus.
- [ ] Trois tests : pour une liste vide, pour une liste à un élément et pour une liste à deux éléments ou pus.
- [ ] Deux tests : pour le cas où le plus grand élément est en début de liste, et pour le cas où le plus grand élément n'est pas en début de liste.

### Langages et programmation (Première) - Utilisation de Bibliothèques
n°212
<br>
La documentation de la bibliothèque random de Python précise :<br>
```{.quiz}
random.randint(a,b)  
     renvoie un entier aléatoire N tel que a &lt;= N &lt;= b.  
```
Quelle est l'expression Python permettant de simuler le tirage d'un dé à 6 faces après avoir exécuté import random ?



- [X] random.randint(1,6)
- [ ] random.randint(1,7)
- [ ] random.randint(6)
- [ ] random.randint(0,6)

### Langages et programmation (Première) - Utilisation de Bibliothèques
n°213
<br>
La documentation de la bibliothèque `random` de python précise :<br>
```{.quiz}
random.randint(a, b)  
    Renvoie un entier aléatoire N tel que a &lt;= N &lt;= b.  
```
Quelle expression permet de simuler le tirage d'un dé à 6 faces après avoir exécuté `import random`?



- [ ] random.randint (0,6)
- [ ] random.randint (0,7)
- [X] random.randint (1,6)
- [ ] random.randint (1,7)

### Langages et programmation (Première) - Diversité des langages
n°269
<br>
Parmi les langages suivants, lequel n’est pas un langage de programmation ?



- [ ] le langage C++
- [ ] le langage JavaScript
- [ ] le langage PHP
- [X] le langage HTML

### Langages et programmation (Première) - Constructions élémentaires
n°300
<br>
Quelle valeur est renvoyée par l'appel `mystere(3, 5)` ? <br>
```{.quiz}
def mystere(a, b):  
    if a &lt; b:  
        return a*b  
    else:  
        return 2*a  
```



- [X] 15
- [ ] a\*b
- [ ] 5
- [ ] 6

### Langages et programmation (Première) - Utilisation de Bibliothèques
n°366
<br>
Qu'obtient-on avec le script suivant ?  <br>
```{.quiz}
from turtle import *  
up()  
goto(-200,0)  
down()  
width(5)  
for i in range(10)  
   forward(10)  
   up()  
   forward(40)  
   down()  
mainloop()  
```



- [ ] un carré
- [ ] des flèches
- [ ] un rectangle
- [X] des pointillés

### Langages et programmation (Première) - Mise au point des programmes
n°371
<br>
On considère la fonction suivante :  <br>
```{.quiz}
def recherche_max(liste):  
      max=liste[0]  
      for i in range(1,len(liste)-1):  
          if liste[i]&gt;liste[i-1]:  
              max=liste[i]  
      return max  
```
Quelle liste permet de montrer que cette fonction est erronée ?



- [X] liste=[3,5,1,15]
- [ ] liste=[3,19,18,17]
- [ ] liste=[8,15,5,3]
- [ ] liste=[3,15,2,7]

### Langages et programmation (Première) - Utilisation de Bibliothèques
n°372
<br>
Quelle est la bibliothèque à importer pour utiliser des fonctions qui permettent de réaliser des tracés 2D ?



- [X] matplotlib
- [ ] numpy
- [ ] math
- [ ] random

### Langages et programmation (Première) - Autres
n°373
<br>
Lorsque l'on crée une liste à partir d'un fichier grâce à ce programme<br>
```{.quiz}
with open('file.txt','r') as fichier :  
        annuaire=[]  
        for ligne in fichier:  
            ligne=ligne.replace('\n','')  
            annuaire.append(ligne)  
```
le code ligne=ligne.replace('\n','') permet :



- [ ] de séparer en liste les lignes
- [ ] d'ajouter tous les caractères \n
- [ ] de rendre visible tous les caractères \n du fichier
- [X] d'enlever tous les caractères \n

### Langages et programmation (Première) - Autres
n°374
<br>
lorsque l'on ouvre un fichier à partir de l'instruction suivante :<br>
```{.quiz}
with open('file.txt','r') as fichier :
```



- [ ] l'instruction close() est obligatoire pour éviter une erreur
- [X] l'instruction close() n'est pas à indiquer dans le code
- [ ] l'instruction close() est obligatoire pour refermer l'instruction open
- [ ] l'instruction close() est souhaitable pour éviter que le programme ne prenne trop de mémoire

### Langages et programmation (Première) - Autres
n°375
<br>
A partir de la liste chiffre=['22','29','35','44','56'],  <br>
comment créer le texte suivant : '22-29-35-44-56' ?



- [X] '-'.join(chiffre)
- [ ] tiret.join(chiffre)
- [ ] chiffre.split('-')
- [ ] chiffre.split(tiret)

### Langages et programmation (Première) - Constructions élémentaires
n°381
<br>
Quel est le résultat de ce code?  <br>
On a saisi le code suivant :<br>
```{.quiz}
ingredients='oeufs'  
print(ingredients*3)  
```



- [ ] Ingredientingredientingredient
- [ ] 'ingredientingredientingredient'
- [X] oeufsoeufsoeufs
- [ ] aucune de ces trois propositions

### Langages et programmation (Première) - Constructions élémentaires
n°382
<br>
Quel résultat aura ce code ?  <br>
```{.quiz}
bonjour()  
#bonjour()  
def bonjour():  
    print('Bonjour à tous!')  
```



- [ ] Bonjour à tous!
- [X] Traceback (most recent call last): File '', line 1, in
- [ ] ' Bonjour à tous ! '
- [ ] Aucune de ces trois propositions

### Langages et programmation (Première) - Constructions élémentaires
n°383
<br>
Quel est le résultat de ce code ?  <br>
```{.quiz}
num=7  
if num&gt;3:  
    print('3')  
    if num&lt;5:  
        print('5')  
        if num==7:  
            print('7')  
```



- [X] 3
- [ ] 7
- [ ] '37'
- [ ] Aucune des solutions n’est exacte

### Langages et programmation (Première) - Constructions élémentaires
n°384
<br>
Quel est le résultat de ce code ?  <br>
```{.quiz}
if not True:  
    print('10')  
elif not (10+10==3):  
    print('20')  
else:  
    print('30')  
```



- [ ] File 'input', line 1, in if not true:NameError: name 'true' is not defined
- [X] 20
- [ ] 30
- [ ] aucune de ces propositions n'est exacte

### Langages et programmation (Première) - Constructions élémentaires
n°385
<br>
Quel est le résultat de ce code ?  <br>
```{.quiz}
x=4  
y=2  
if not 1+1==y or x==4 and 7==8:  
    print('OK')  
elif x&gt;y:  
    print('Non')  
```



- [X] Non
- [ ] OK
- [ ] File 'input', line 5 elif x&gt;y ^SyntaxError: invalid syntax
- [ ] aucune de ces propositions n'est exacte

### Langages et programmation (Première) - Constructions élémentaires
n°386
<br>
Sélectionnez le code permettant d’obtenir le résultat suivant  <br>
5  <br>
4  <br>
3  <br>
```{.quiz}
```



- [ ] i=5  
while True:  
 print(i)  
 i=i-1
- [X] i=5  
while i&gt;2:  
 print(i)  
 i=i-1
- [ ] i=2  
while not i&gt;5:  
 i=i+1  
 print(i)
- [ ] Aucune de ces propositions n'est exacte

### Langages et programmation (Première) - Constructions élémentaires
n°387
<br>
Je souhaite définir une fonction qui compare la longueur de deux chaînes de caractères et me renvoie la plus courte. Pour cela, je compléterai le code suivant avec :   <br>
```{.quiz}
def plus_court_string(x,y) :  
    if len(x)&lt;=len(y) :  
        _________  
    else :  
        _________  
```



- [ ] print(x) et print(y)
- [ ] print(x) et return(y)
- [X] return x et return y
- [ ] return x et return

### Langages et programmation (Première) - Spécification
n°396
<br>
On souhaite écrire une fonction Python qui admette comme argument une date et retourne le jour de la semaine (lundi,mardi,...,dimanche).<br>
La date est un argument nommé **donnee** de type liste au format [JJ,MM,AAAA].<br>
Parmi les instructions suivantes, laquelle est correcte pour décrire une pré-condition :



- [ ] 
```{.quiz}
assert donnee[0]&gt;31,'Il n'y a que 31 jours au maximum dans un mois'  
```
- [X] 
```{.quiz}
assert 0&lt; donnee[0]&lt;=31,'Erreur dans la saisie du jour'  
```
- [ ] 
```{.quiz}
assert donnee[1]&lt;0,'Le numéro d'un mois est positif'  
```
- [ ] 
```{.quiz}
assert donnee[1]&gt;12,'Il n'y a que 12 mois dans une année'  
```

### Langages et programmation (Première) - Constructions élémentaires
n°398
<br>
Quel est le résultat de l'instruction seuil(65) ?<br>
```{.quiz}
def seuil(n):  
    i=0  
    resultat=1  
    while resultat &lt; n:  
         i=i+1  
         resultat=resultat*2  
    return i  
```



- [ ] 6
- [ ] 5
- [ ] 8
- [X] 7

### Langages et programmation (Première) - Diversité des langages
n°445
<br>
Un programmeur Java peu scrupuleux a écrit ce code sans commentaires:<br>
```{.quiz}
class Main {  
    public static void main(String[] args) {  
        int i = 1, n = 10, t1 = 0, t2 = 1;  
        while (i &lt;= n) {  
            System.out.print(t1 + ' ; ');  
            int sum = t1 + t2;  
            t1 = t2;  
            t2 = sum;  
            i = i + 1;  
        }  
    }  
}  
```
Qu'affiche son programme ?



- [ ] 0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9 ; 10 ; (c'est-à-dire tous les nombres allant de 0 à 10)
- [ ] 55 ; (c'est-à-dire la somme des nombres allant de 0 à 10)
- [X] 0 ; 1 ; 1 ; 2 ; 3 ; 5 ; 8 ; 13 ; 21 ; 34 ; (c'est-à-dire les 10 premiers nombres de la suite de Fibonacci)
- [ ] 34 ; (c'est-à-dire le 10ième nombre de la suite de Fibonacci)

### Langages et programmation (Première) - Diversité des langages
n°446
<br>
En mathématiques, la factorielle d'un entier naturel *n*, notée *n!*, est le produit des nombres entiers strictement positifs inférieurs ou égaux à *n*.<br>
*n!* = 1 x 2 x 3 x .... x (*n-1*) x *n*<br>
Un programmeur a écrit en PHP le code suivant qui demande un nombre *n* et affiche *n!*, mais son programme ne fonctionne pas.<br>
ligne code  <br>
---- ----  <br>
1 php&lt;br2 echo 'Entrez un nombre\n';  <br>
3 $n = rtrim(fgets(STDIN));  <br>
4 $fact = 0;  <br>
5 for ($i = 1; $i &lt;= $n; $i = $i+1) {   <br>
6 $fact = $fact \* $i;  <br>
7 }  <br>
8 echo $n.'! = '.$fact;  <br>
9 ?&gt;  <br>
Quelle correction faut il apporter à son programme pour qu'il fonctionne correctement ?



- [X] remplacer la ligne 4 par:  
$fact = 1;
- [ ] remplacer la ligne 5 par:  
for ($i = 1; $i &lt; $n; $i = $i+1) {
- [ ] remplacer la ligne 5 par:  
for ($i = 0; $i &lt;= $n; $i = $i+1) {
- [ ] remplacer la ligne 6 par:  
$fact = $i;

### Langages et programmation (Première) - Diversité des langages
n°447
<br>
Un professeur de NSI demande à trois élèves d'écrire un programme Python qui calcule la somme des nombres entiers de 0 à 100. Maxime, Julie et Pablo font trois programmes qui fonctionnent parfaitement mais écrits dans des styles (ou paradigmes) de programmation vraiment différents.<br>
Programme de Maxime :  <br>
```{.quiz}
cent = 100  
somme = 0  
for i in range(cent+1):  
    somme = somme + i  
print(somme)  
```
Programme de Julie:  <br>
```{.quiz}
def somme(n):  
    if n == 0: return 0  
    else: return n + somme(n-1)  
cent = 100  
print(somme(cent))  
```
Programme de Pablo:  <br>
```{.quiz}
class Nombre():  
    def __init__(self, n):  
        self.value = n  
    def somme(self):  
        s = 0  
        for i in range(self.value + 1):  
            s = s + i  
        return s  
cent = Nombre(100)  
print(cent.somme())  
```
Laquelle de ces affirmations est vraie ?



- [ ] Le paradigme de programmation utilisé par Maxime est appelé fonctionnel, celui de Julie est orienté objet et celui de Pablo est impératif.
- [X] Le paradigme de programmation utilisé par Maxime est appelé impératif, celui de Julie est fonctionnel et celui de Pablo est orienté objet.
- [ ] Le paradigme de programmation utilisé par Maxime est appelé fonctionnel, celui de Julie est impératif et celui de Pablo est orienté objet.
- [ ] Le paradigme de programmation utilisé par Maxime est appelé orienté objet, celui de Julie est impératif et celui de Pablo est fonctionnel.

### Langages et programmation (Première) - Utilisation de Bibliothèques
n°490
<br>
La documentation de la bibliothèque random de Python précise :<br>
**random.randint(a, b)  <br>
Renvoie un entier aléatoire N tel que a &lt;= N &lt;= b.**<br>
Quelle est l’expression Python permettant de simuler le tirage d’un dé à 6 faces après avoir exécuté `import random` ?



- [ ] random.randint(6)
- [X] random.randint(1,6)
- [ ] random.randint(1,7)
- [ ] random.randint(0,6)

### Langages et programmation (Première) - Mise au point des programmes
n°491
<br>
On a écrit une fonction qui prend en paramètre une liste non vide et qui renvoie son plus grand élément. Combien de tests faudrait-il écrire pour garantir que la fonction donne un résultat correct pour toute liste ?



- [ ] deux tests : pour une liste à un élément et pour une liste à deux éléments ou plus
- [ ] deux tests : pour le cas où le plus grand élément est en début de liste, et pour le cas où le plus grand élément n’est pas en début de liste
- [ ] trois tests : pour une liste vide, pour une liste à un élément, et pour une liste à deux éléments ou plus
- [X] il faudrait écrire une infinité de tests : on ne peut pas prouver que cette fonction est correcte, simplement en la testant

### Langages et programmation (Première) - Mise au point des programmes
n°492
<br>
La fonction Python suivante ne calcule pas toujours correctement le résultat de *x**y* pour des arguments entiers. Parmi les tests suivants, lequel va permettre de détecter l’erreur ?<br>
```{.quiz}
def puissance (x,y):
    p = x
    for i in range (y - 1):
        p = p * x
    return p
```



- [X] puissance(2,0)
- [ ] puissance(2,1)
- [ ] puissance(2,2)
- [ ] puissance(2,10)

### Langages et programmation (Première) - Utilisation de Bibliothèques
n°493
<br>
En Python, quelle est la méthode pour charger la fonction sqrt du module math ?



- [ ] using math.sqrt
- [ ] include math.sqrt
- [ ] from math include sqrt
- [X] from math import sqrt

### Langages et programmation (Première) - Constructions élémentaires
n°494
<br>
On définit deux fonctions :<br>
```{.quiz}
def f(x):  
    y = 2*x + 1  
    return y  
```
```{.quiz}
def calcul(x):  
    y = x - 1  
    return f(y)  
```
Quelle est la valeur renvoyée par l'appel `calcul(5)` ?



- [ ] 4
- [X] 9
- [ ] 11
- [ ] 19

### Langages et programmation (Première) - Spécification
n°495
<br>
Avec la définition de fonction capital\_double suivante, que peut-on toujours affirmer à propos du résultat n retourné par la fonction ?<br>
```{.quiz}
def capital_double (capital, interet):  
    montant = capital  
    n = 0  
    while montant &lt;= 2 * capital:  
        montant = montant + interet  
        n = n + 1  
    return n  
```



- [ ] `n == capital / interet`
- [ ] `capital * n * interet &gt; 2 * capital`
- [X] `capital + n * interet &gt; 2 * capital`
- [ ] `n == 2 * capital / interet`

### Langages et programmation (Première) - Autres
n°607
<br>
Dans le programme JavaScript suivant, quelle est la notation qui délimite le bloc d’instructions exécuté à chaque passage dans la boucle while ?<br>
```{.quiz}
i = 0  
while (i &lt; 10) {  
    alert(i)  
    i = i + 1  
}  
alert('Fin')  
```



- [X] le fait que les instructions soient encadrées entre { et }
- [ ] le fait que les instructions soient indentées de 4 caractères comme en Python
- [ ] le fait que les instructions suivent le mot clé while
- [ ] le fait que les instructions suivent la parenthèse )

### Langages et programmation (Première) - Autres
n°608
<br>
Soit \(n\) un entier naturel. Sa factorielle est le produit des nombres entiers strictement positifs qui sont plus petits ou égaux à \(n\). Par exemple la factorielle de \(4 \) vaut \(1 \times 2 \times 3 \times 4 = 24\).<br>
Quelle est la fonction correcte parmi les suivantes ?



- [ ] 
```{.quiz}
def factorielle(n):  
    i = 0  
    fact = 1  
    while i &lt;= n:  
        fact = fact * i  
        i = i + 1  
    return fact  
```
- [ ] 
```{.quiz}
def factorielle(n):  
    i = 1  
    fact = 1  
    while i &lt; n:  
         fact = fact * i  
         i = i + 1  
    return fact  
```
- [X] 
```{.quiz}
def factorielle(n):  
    i = 0  
    fact = 1  
    while i &lt; n:  
         i = i + 1  
         fact = fact * i  
    return fact  
```
- [ ] 
```{.quiz}
def factorielle(n):  
    i = 0  
    fact = 1  
    while i &lt;= n:  
         i = i + 1  
         fact = fact * i  
    return fact  
```

### Langages et programmation (Première) - Autres
n°609
<br>
On exécute le script suivant.<br>
```{.quiz}
n = 6  
s = 0  
while n &gt;= 0:  
    s = s + n  
    n = n -1  
```
Que contient la variable s à la fin de cette exécution ?



- [ ] 0
- [ ] 6
- [ ] 15
- [X] 21

### Langages et programmation (Première) - Autres
n°610
<br>
On exécute le script suivant :<br>
```{.quiz}
tableau1 = [1, 2, 3]  
tableau2 = [4, 5, 6]  
long = len(tableau1 + tableau2)  
```
Quelle est la valeur de la variable long à la fin de cette exécution ?



- [ ] 1
- [ ] 3
- [X] 6
- [ ] rien, car le code engendre une erreur

### Langages et programmation (Première) - Autres
n°611
<br>
Soit T un tableau de flottants, a et b deux entiers. On considère une fonction nommée somme renvoyant la somme des éléments du tableau d'indice compris entre a et b définie par :<br>
```{.quiz}
def somme(T, a, b):  
    S = 0  
    for i in range(a, b+1) :  
        S = S + T[i]  
    return S  
```
Quel ensemble de préconditions doit-on prévoir pour cette fonction ?



- [ ] a &lt; b
- [ ] a &lt; longueur(T) et b &lt; longueur(T)
- [X] a &lt;= b &lt; longueur(T)
- [ ] a &lt;= b &lt; longueur(T) et T est un tableau trié

### Langages et programmation (Première) - Autres
n°612
<br>
Quelle est la valeur de la variable x à la fin de l'exécution du script suivant :<br>
```{.quiz}
def f(x):  
    x = x + 1  
    return x + 1  
x = 0  
f(x+1)  
```



- [X] 0
- [ ] 1
- [ ] 2
- [ ] 3

### Langages et programmation (Première) - Autres
n°649
<br>
Parmi ces langages, lequel n'est pas un langage de programmation ?



- [X] HTML
- [ ] JavaScript
- [ ] PHP
- [ ] Python

### Langages et programmation (Première) - Autres
n°650
<br>
Quelle est la valeur de la variable b à la fin de l'exécution du script suivant ?<br>
```{.quiz}
a = 2  
b = 5  
if a &gt; 8:  
    b = 10  
elif a &gt; 6:  
    b = 3
```



- [ ] 3
- [X] 5
- [ ] 6
- [ ] 10

### Langages et programmation (Première) - Autres
n°651
<br>
La fonction ajoute(n,p) codée ci-dessous en Python doit calculer la somme de tous les entiers compris entre n et p (n et p compris).<br>
Par exemple, ajoute(2,4) doit renvoyer 2+3+4 = 9.<br>
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

### Langages et programmation (Première) - Autres
n°652
<br>
La fonction maximum codée ci-dessous en Python doit renvoyer la plus grande valeur contenue dans le tableau d'entiers passé en argument.<br>
```{.quiz}
def maximum(tableau):  
    tmp = tableau[0]  
        for i in range(......): # à compléter  
            if tableau[i] &gt; tmp:  
                tmp = tableau[i]  
    return tmp
```
Quelle expression faut-il écrire à la place des pointillés ?



- [ ] len(tableau) - 1
- [ ] 1,len(tableau) - 1
- [X] 1,len(tableau)
- [ ] 1,len(tableau) + 1

### Langages et programmation (Première) - Autres
n°653
<br>
La documentation de la bibliothèque random de Python précise que  <br>
random.randint(a,b) renvoie un entier aléatoire \(N\) tel que a \(\leq \)N \(\leq\) b.<br>
Afin d’obtenir un entier choisi aléatoirement dans l’ensemble {-4 ; -2 ; 0 ; 2 ; 4}, après avoir importé la librairie random de Python, on peut utiliser l’instruction :



- [ ] random.randint(0,8)/2
- [ ] random.randint(0,8)/2 - 4
- [ ] random.randint(0,4)\*2 - 2
- [X] (random.randint(0,4) - 2) \* 2

### Langages et programmation (Première) - Autres
n°654
<br>
On considère la fonction ci-dessous :<br>
```{.quiz}
def maFonction(c):  
    if c &lt;= 10:  
        p = 12  
    if c &lt;= 18:  
        p = 15  
    if c &lt;= 40:  
        p = 19  
    else:  
        p = 20  
    return p
```
Que renvoie maFonction(18) ?



- [ ] 12
- [ ] 15
- [X] 19
- [ ] 20

### Langages et programmation (Première) - Autres
n°691
<br>
On définit :<br>
```{.quiz}
def f(a,m):  
    i = 1  
    n = 0  
    while n &lt;= m:  
        i = i * a  
        n = n + 1  
    return i  
```
Quelle est la valeur renvoyée par l'appel f(2,4) ?



- [ ] 8
- [ ] 16
- [X] 32
- [ ] 64

### Langages et programmation (Première) - Autres
n°692
<br>
La fonction ajoute(n,p) codée ci-dessous en Python doit calculer la somme de tous les entiers compris entre n et p (n et p compris).<br>
Par exemple, ajoute(2,4) doit renvoyer 2+3+4 = 9.<br>
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

### Langages et programmation (Première) - Autres
n°693
<br>
En voulant programmer une fonction qui calcule la valeur minimale d'une liste d'entiers, on a écrit :<br>
```{.quiz}
def minimum(L):  
    mini = 0  
    for e in L:  
        if e &lt; mini:  
            mini = e  
    return mini
```
Cette fonction a été mal programmée. Pour quelle liste ne donnera-t-elle pas le résultat attendu, c'est-à-dire son minimum ?



- [ ] [-1,-8,12,2,23]
- [ ] [0,18,12,2,3]
- [ ] [-1,-1,12,12,23]
- [X] [1,8,12,2,23]

### Langages et programmation (Première) - Autres
n°694
<br>
On exécute le code suivant :<br>
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

### Langages et programmation (Première) - Autres
n°695
<br>
On définit la fonction suivante :<br>
```{.quiz}
def f(x):  
    for d in range(2,x):  
        if x%d == 0:  
            return d
```
Quelle est la valeur renvoyée par l'appel f(15) ?



- [X] 3
- [ ] 5
- [ ] 3,5
- [ ] 3,5,15

### Langages et programmation (Première) - Autres
n°696
<br>
On exécute le code suivant :<br>
```{.quiz}
def f(t):
    n = len(t)
    for k in range(1,n):
        t[k] = t[k] + t[k-1]
L = [1, 3, 4, 5, 2]
f(L)
```
Quelle est la valeur de L après l'exécution de ce code ?



- [ ] 
```{.quiz}
[1, 3, 4, 5, 2]
```
- [ ] 
```{.quiz}
[1, 4, 7, 9, 7]
```
- [X] 
```{.quiz}
[1, 4, 8, 13, 15]
```
- [ ] 
```{.quiz}
[3, 6, 10, 15, 17]
```

### Langages et programmation (Première) - Autres
n°733
<br>
On exécute le script suivant :<br>
```{.quiz}
a = 4  
b = 4  
c = 4  
while a &lt; 5:  
    a = a - 1  
    b = b + 1  
    c = c * b  
```
Que peut-on dire ?



- [X] ce programme ne termine pas
- [ ] à la fin de l'exécution, la variable a vaut 5
- [ ] à la fin de l'exécution, la variable b vaut 34
- [ ] à la fin de l'exécution, la variable c vaut 42

### Langages et programmation (Première) - Autres
n°734
<br>
On a défini une liste L de nombres entiers.<br>
Quelle est la valeur de la variable m à la fin de l'exécution du script suivant ?<br>
```{.quiz}
m = L[0]  
for j in range(len(L)):  
    if m &lt; L[j]:  
        m = L[j]  
```



- [ ] la moyenne de la liste L
- [ ] le minimum de la liste L
- [X] le maximum de la liste L
- [ ] la longueur de la liste L

### Langages et programmation (Première) - Autres
n°735
<br>
Dans le programme JavaScript suivant, quelle est la notation qui délimite le bloc d’instructions exécuté à chaque passage dans la boucle while ?<br>
```{.quiz}
i = 0  
while (i &lt; 10) {  
    alert(i)  
    i = i + 1  
}  
alert('Fin')  
```



- [X] le fait que les instructions soient encadrées entre { et }
- [ ] le fait que les instructions soient indentées de 4 caractères comme en Python
- [ ] le fait que les instructions suivent le mot clé while
- [ ] le fait que les instructions suivent la parenthèse )

### Langages et programmation (Première) - Autres
n°736
<br>
On souhaite écrire une fonction qui renvoie le maximum d'une liste d'entiers :<br>
```{.quiz}
def maximum(L):  
    m = L[0]  
    for i in range(1,len(L)):  
        if .........:  
            m = L[i]  
    return m  
```
Par quoi faut-il remplacer les pointillés pour que cette fonction produise bien le résultat attendu ?



- [ ] i &gt; m
- [X] L[i] &gt; m
- [ ] L[i] &gt; L[i-1]
- [ ] L[i] &gt; L[i+1]

### Langages et programmation (Première) - Autres
n°737
<br>
On définit la fonction :<br>
```{.quiz}
def f(a,b):  
    assert b!=0,'le deuxième argument est nul'  
    result = a/b  
    return result  
```
Qu'obtient-on en exécutant la commande r = f(4,0) ?



- [ ] une erreur 'ZeroDivisionError: division by zero' et l'arrêt de l'exécution
- [ ] une erreur 'NameError: name 'b' is not defined' et l'arrêt de l'exécution
- [ ] une erreur 'AssertionError: le deuxième argument est nul' et la variable r prend la valeur 0
- [X] une erreur 'AssertionError: le deuxième argument est nul' et l'arrêt de l'exécution

### Langages et programmation (Première) - Autres
n°738
<br>
Quelles sont les valeurs des variables x et y à la fin de l'exécution du script suivant :<br>
```{.quiz}
x = 4  
while x &gt; 0:  
    y = 1  
while y &lt; x:  
    y = y + 1  
    x = x - 1  
```



- [X] l'exécution ne termine pas !
- [ ] la valeur de x est 0, celle de y est 0
- [ ] la valeur de x est 0, celle de y est 1
- [ ] la valeur de x est -1, celle de y est 0

### Langages et programmation (Première) - Autres
n°817
<br>
Parmi ces langages, lequel n'est pas un langage de programmation ?



- [X] HTML
- [ ] JavaScript
- [ ] PHP
- [ ] Python

### Langages et programmation (Première) - Autres
n°818
<br>
On exécute le script Python suivant :<br>
```{.quiz}
def cube(L):
    for i in range(len(L)):
        L[i] = L[i] * L[i] * L[i]
    return L
L = [2, 5]
b = cube(L)
```
Que vaut le couple (L,b) à la fin de l'exécution ?



- [ ] ([2,5], [8,125])
- [X] ([8,125], [8,125])
- [ ] ([8,125], [2,5])
- [ ] ([2,5], [2,5])

### Langages et programmation (Première) - Autres
n°819
<br>
La documentation de la bibliothèque random de Python précise que  <br>
random.randint(a,b) renvoie un entier aléatoire \(N\) tel que a \( \leq \)N \(\leq\) b.<br>
Afin d’obtenir un entier choisi aléatoirement dans l’ensemble {-4 ; -2 ; 0 ; 2 ; 4}, après avoir importé la librairie random de Python, on peut utiliser l’instruction :



- [ ] random.randint(0,8)/2
- [ ] random.randint(0,8)/2 - 4
- [ ] random.randint(0,4)\*2 - 2
- [X] (random.randint(0,4) - 2) \* 2

### Langages et programmation (Première) - Autres
n°820
<br>
En Python, quelle est la méthode pour charger la fonction sqrt du module math ?



- [ ] using math.sqrt
- [ ] include math.sqrt
- [ ] from math include sqrt
- [X] from math import sqrt

### Langages et programmation (Première) - Autres
n°821
<br>
La documentation de la fonction floor de la bibliothèque math est :<br>
```{.quiz}
floor(x)
  Return the floor of x as an Integral. This is the largest integer &lt;= x.
```
Que vaut `floor(-2.2)` ?



- [ ] – 2
- [X] – 3
- [ ] on obtient une erreur, car –2.2 n'est pas un entier
- [ ] 2.2

### Langages et programmation (Première) - Autres
n°822
<br>
Soit \(n\) un entier naturel. Sa factorielle est le produit des nombres entiers strictement positifs qui sont plus petits ou égaux à \(n\). Par exemple la factorielle de 4 vaut \(1 \times 2 \times 3 \times 4 = 24\).<br>
Quelle est la fonction correcte parmi les suivantes ?



- [ ] 
```{.quiz}
def factorielle(n):
    i = 0
    fact = 1
    while i &lt;= n:
        fact = fact * i
        i = i + 1
    return fact
```
- [ ] 
```{.quiz}
def factorielle(n):
    i = 1
    fact = 1
    while i &lt; n:
        fact = fact * i
        i = i + 1
    return fact
```
- [X] 
```{.quiz}
def factorielle(n):
    i = 0
    fact = 1
    while i &lt; n:
        i = i + 1
        fact = fact * i
    return fact
```
- [ ] 
```{.quiz}
def factorielle(n):
    i = 0
    fact = 1
    while i &lt;= n:
        i = i + 1
        fact = fact * i
    return fact
```

### Langages et programmation (Première) - Autres
n°859
<br>
On définit la fonction suivante :<br>
```{.quiz}
def f(x):  
    for d in range(2,x):  
        if x%d == 0:   
            return d  
```
Quelle est la valeur renvoyée par l'appel f(15) ?



- [X] 3
- [ ] 5
- [ ] 3,5
- [ ] 3,5,15

### Langages et programmation (Première) - Autres
n°860
<br>
On considère le code incomplet suivant, où la fonction maximum renvoie le plus grand élément d’une liste de nombres :<br>
```{.quiz}
def maximum(L):
    m = L[0]
    for i in range(1,len(L)):
        ..............
        ..............
    return m
```
Que faut-il écrire à la place des lignes pointillées ?



- [ ] 
```{.quiz}
if m &lt; L[i]:
    L[i] = m
```
- [ ] 
```{.quiz}
if L[i-1] &lt; L[i]:
    m = L[i]
```
- [ ] 
```{.quiz}
if L[i] &lt; L[0]:
    L[i],L[0] = L[0],L[i]
```
- [X] 
```{.quiz}
if L[i] &gt; m:
    m = L[i]
```

### Langages et programmation (Première) - Autres
n°861
<br>
La documentation de la bibliothèque random de Python précise :<br>
```{.quiz}
random.randint(a, b)
  Renvoie un entier aléatoire N tel que a &lt;= N &lt;= b.
```
Quelle est l’expression Python permettant de simuler le tirage d’un dé à 6 faces après avoir exécuté import random ?



- [ ] random.randint(6)
- [X] random.randint(1,6)
- [ ] random.randint(1,7)
- [ ] random.randint(0,6)

### Langages et programmation (Première) - Autres
n°862
<br>
Lequel des langages suivants n'est pas un langage de programmation :



- [ ] PHP
- [ ] Javascript
- [X] HTML
- [ ] Python

### Langages et programmation (Première) - Autres
n°863
<br>
Quelle est la valeur de la variable x à la fin de l'exécution du script suivant :<br>
```{.quiz}
def f(x):  
    x = x + 1  
    return x + 1  
x = 0  
f(x+1)  
```



- [X] 0
- [ ] 1
- [ ] 2
- [ ] 3

### Langages et programmation (Première) - Autres
n°864
<br>
On définit une fonction f de la façon suivante :<br>
```{.quiz}
def f(L,m):  
    R = []  
    for i in range(len(L)):  
        if L[i] &gt; m:  
            R.append(L[i])  
    return R  
```
On définit L = [1, 7, 3, 4, 8, 2, 0, 3, 5].<br>
Que vaut f(L,4) ?



- [ ] [0, 7, 0, 0, 8, 0, 0, 0, 5]
- [ ] [0, 0, 0, 5]
- [X] [7, 8, 5]
- [ ] []

### Langages et programmation (Première) - Autres
n°901
<br>
\(n\) étant un entier strictement positif, la fonction suivante calcule sa factorielle, c'est-à-dire le produit \(1 \times 2 \times 3 \times \cdots \times (n - 1) \times n\). Comment faut-il écrire la ligne en pointillée ci-dessous pour ce faire ?<br>
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

### Langages et programmation (Première) - Autres
n°902
<br>
On exécute le script suivant :<br>
```{.quiz}
a = 4  
b = 4  
c = 4  
while a &lt; 5:  
    a = a - 1  
    b = b + 1  
    c = c * b  
```
Que peut-on dire ?



- [X] ce programme ne termine pas
- [ ] à la fin de l'exécution, la variable a vaut 5
- [ ] à la fin de l'exécution, la variable b vaut 34
- [ ] à la fin de l'exécution, la variable c vaut 42

### Langages et programmation (Première) - Autres
n°903
<br>
On souhaite écrire une fonction qui renvoie le maximum d'une liste d'entiers :<br>
```{.quiz}
def maximum(L):   
    m = L[0]  
    for i in range(1,len(L)):  
        if .........:  
            m = L[i]  
    return m  
```
Par quoi faut-il remplacer les pointillés pour que cette fonction produise bien le résultat attendu ?



- [ ] i &gt; m
- [X] L[i] &gt; m
- [ ] L[i] &gt; L[i-1]
- [ ] L[i] &gt; L[i+1]

### Langages et programmation (Première) - Autres
n°904
<br>
Quel est le seul langage de programmation parmi les propositions suivantes ?



- [ ] HTML
- [ ] CSS
- [X] C++
- [ ] WEB

### Langages et programmation (Première) - Autres
n°905
<br>
La fonction suivante calcule la racine carrée du double d’un nombre flottant.<br>
```{.quiz}
from math import sqrt
def racine_du_double(x):
    return sqrt(2*x)
```
Quelle est la précondition sur l'argument de cette fonction ?



- [ ] x &lt; 0
- [X] x &gt;= 0
- [ ] 2 \* x &gt; 0
- [ ] sqrt(x) &gt;= 0

### Langages et programmation (Première) - Autres
n°906
<br>
La fonction maxi ci-dessous a pour but de renvoyer la valeur maximale présente dans la liste qui lui est passée en argument.<br>
```{.quiz}
def maxi(L):  
    dernier_indice = len(L) - 1  
    valeur_max = L[0]  
    for i in range(1,dernier_indice):  
        if L[i] &gt; valeur_max:  
            valeur_max = L[i]  
    return valeur_max   
```
Cette fonction a été mal programmée. On souhaite réaliser un test pour le démontrer.<br>
Parmi les propositions suivantes, laquelle mettra la fonction maxi en défaut ?



- [X] maxi([1, 2, 3, 4])
- [ ] maxi([4, 3, 2, 1])
- [ ] maxi([1, 3, 3, 2])
- [ ] maxi([1, 1, 1, 1])

### Langages et programmation (Première) - Autres
n°943
<br>
T est un tableau de nombres entiers non vide. Que représente la valeur de s renvoyée par cette fonction ?<br>
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

### Langages et programmation (Première) - Autres
n°944
<br>
Soit \(n\) un entier naturel. Sa factorielle est le produit des nombres entiers strictement positifs qui sont plus petits ou égaux à \(n\). Par exemple la factorielle de 4 vaut \(1 \times 2 \times 3 \times 4 = 24\).<br>
Quelle est la fonction correcte parmi les suivantes ?



- [ ] 
```{.quiz}
def factorielle(n):  
    i = 0  
    fact = 1  
    while i &lt;= n:  
        fact = fact * i  
        i = i + 1  
    return fact  
```
- [ ] 
```{.quiz}
def factorielle(n):  
    i = 1  
    fact = 1  
    while i &lt; n:  
        fact = fact * i  
        i = i + 1  
    return fact  
```
- [X] 
```{.quiz}
def factorielle(n):  
    i = 0  
    fact = 1  
    while i &lt; n:  
        i = i + 1  
        fact = fact * i  
    return fact  
```
- [ ] 
```{.quiz}
def factorielle(n):  
    i = 0  
    fact = 1  
    while i &lt;= n:  
        i = i + 1  
        fact = fact * i  
    return fact  
```

### Langages et programmation (Première) - Autres
n°945
<br>
On définit une fonction f de la façon suivante :<br>
```{.quiz}
def f(L,m):  
    R = []  
    for i in range(len(L)):  
        if L[i] &gt; m:  
            R.append(L[i])  
    return R  
```
On définit L = [1, 7, 3, 4, 8, 2, 0, 3, 5].<br>
Que vaut f(L,4) ?



- [ ] [0, 7, 0, 0, 8, 0, 0, 0, 5]
- [ ] [0, 0, 0, 5]
- [X] [7, 8, 5]
- [ ] []

### Langages et programmation (Première) - Autres
n°946
<br>
On exécute le script suivant :<br>
```{.quiz}
a = 4
b = 4
c = 4
while a &lt; 5:
    a = a - 1
    b = b + 1
    c = c * b
```
Que peut-on dire ?



- [X] ce programme ne termine pas
- [ ] à la fin de l'exécution, la variable a vaut 5
- [ ] à la fin de l'exécution, la variable b vaut 34
- [ ] à la fin de l'exécution, la variable c vaut 42

### Langages et programmation (Première) - Autres
n°947
<br>
En voulant programmer une fonction qui calcule la valeur minimale d'une liste d'entiers, on a écrit :<br>
```{.quiz}
def minimum(L):  
    mini = 0  
    for e in L:  
        if e &lt; mini:  
           mini = e  
    return mini  
```
Cette fonction a été mal programmée. Pour quelle liste ne donnera-t-elle pas le résultat attendu, c'est-à-dire son minimum ?



- [ ] [-1,-8,12,2,23]
- [ ] [0,18,12,2,3]
- [ ] [-1,-1,12,12,23]
- [X] [1,8,12,2,23]

### Langages et programmation (Première) - Autres
n°948
<br>
Quelle est la valeur de la variable n à la fin de l'exécution du script ci-dessous ?<br>
```{.quiz}
n = 1  
while n != 20:  
    n = n + 2  
```



- [ ] 1
- [ ] 20
- [ ] 22
- [X] le programme ne termine pas, la boucle tourne indéfiniment

### Langages et programmation (Première) - Autres
n°987
<br>
T est un tableau de nombres entiers non vide. Que représente la valeur de s renvoyée par cette fonction ?<br>
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

### Langages et programmation (Première) - Autres
n°988
<br>
On définit la fonction :<br>
```{.quiz}
def fib(n):
    t = [0] * n
    t[1] = 1
    for in in range(2,n):
        t[i] = t[i-1] + t[i-2]
    return t
```
Quelle est la valeur renvoyée par l'appel fib(6) ?



- [ ] [0, 1, 1, 2, 3]
- [X] [0, 1, 1, 2, 3, 5]
- [ ] [0, 1, 1, 2, 3, 5, 8]
- [ ] [0, 1, 2, 3, 5, 8]

### Langages et programmation (Première) - Autres
n°989
<br>
On considère le code suivant :<br>
```{.quiz}
if x &lt; 4:
    x = x + 3
else:
    x = x - 3
```
Quelle construction élémentaire peut-on identifier ?



- [ ] une boucle non bornée
- [X] une structure conditionnelle
- [ ] une boucle bornée
- [ ] un appel de fonction

### Langages et programmation (Première) - Autres
n°990
<br>
La fonction `ajoute(n,p)` codée ci-dessous en Python doit calculer la somme de tous les entiers compris entre n et p (n et p compris).<br>
Par exemple, `ajoute(2,4)` doit renvoyer 2+3+4 = 9.<br>
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

### Langages et programmation (Première) - Autres
n°991
<br>
On exécute le code suivant :<br>
```{.quiz}
def f(t):
    n = len(t)
    for k in range(1,n):
        t[k] = t[k] + t[k-1]
L = [1, 3, 4, 5, 2]
f(L)
```
Quelle est la valeur de L après l'exécution de ce code ?



- [ ] [1, 3, 4, 5, 2]
- [ ] [1, 4, 7, 9, 7]
- [X] [1, 4, 8, 13, 15]
- [ ] [3, 6, 10, 15, 17]

### Langages et programmation (Première) - Autres
n°992
<br>
On considère l'instruction suivante :<br>
```{.quiz}
resultat = [0] * 7
```
Que contient la variable resultat après son exécution ?



- [ ] 0
- [ ] [0]
- [ ] [[0], [0], [0], [0], [0], [0], [0]]
- [X] [0, 0, 0, 0, 0, 0, 0]

### Langages et programmation (Première) - Autres
n°1029
<br>
La fonction maxi ci-dessous a pour but de renvoyer la valeur maximale présente dans la liste qui lui est passée en argument.<br>
```{.quiz}
def maxi(L):
    dernier_indice = len(L) - 1
    valeur_max = L[0]
    for i in range(1,dernier_indice):
        if L[i] &gt; valeur_max:
            valeur_max = liste[i]
    return valeur_max
```
Cette fonction a été mal programmée. On souhaite réaliser un test pour le démontrer.<br>
Parmi les propositions suivantes, laquelle mettra la fonction maxi en défaut ?



- [X] maxi([1, 2, 3, 4])
- [ ] maxi([4, 3, 2, 1])
- [ ] maxi([1, 3, 3, 2])
- [ ] maxi([1, 1, 1, 1])

### Langages et programmation (Première) - Autres
n°1030
<br>
La fonction suivante ne calcule pas toujours correctement le maximum des deux nombres donnés en argument. On rappelle que abs(z) calcule la valeur absolue du nombre z.<br>
```{.quiz}
def maxi(x,y):
    m = (x-y+abs(x+y))/2
    return m
```
Parmi les tests suivants, lequel va détecter l'erreur ?



- [ ] maxi(3,-2)
- [ ] maxi(2,2)
- [ ] maxi(3,2)
- [X] maxi(2,3)

### Langages et programmation (Première) - Autres
n°1031
<br>
La fonction maximum codée ci-dessous en Python doit renvoyer la plus grande valeur contenue dans le tableau d'entiers passé en argument.<br>
```{.quiz}
def maximum(tableau):
    tmp = tableau[0]
    for i in range(......): # à compléter
        if tableau[i] &gt; tmp:
            tmp = tableau[i]
    return tmp
```
Quelle expression faut-il écrire à la place des pointillés ?



- [ ] len(tableau) - 1
- [ ] 1,len(tableau) - 1
- [X] 1,len(tableau)
- [ ] 1,len(tableau) + 1

### Langages et programmation (Première) - Autres
n°1032
<br>
Lequel des langages suivants n'est pas un langage de programmation :



- [ ] PHP
- [ ] Javascript
- [X] HTML
- [ ] Python

### Langages et programmation (Première) - Autres
n°1033
<br>
En Python, quelle est la méthode pour charger la fonction sqrt du module math ?



- [ ] using math.sqrt
- [ ] include math.sqrt
- [ ] from math include sqrt
- [X] from math import sqrt

### Langages et programmation (Première) - Autres
n°1034
<br>
Quelle est la valeur de la variable b à la fin de l'exécution du script suivant ?<br>
```{.quiz}
a = 2
b = 5
if a &gt; 8:
    b = 10
elif a &gt; 6:
    b = 3
```



- [ ] 3
- [X] 5
- [ ] 6
- [ ] 10

### Langages et programmation (Première) - Autres
n°1071
<br>
On souhaite écrire une fonction qui renvoie le maximum d'une liste d'entiers :<br>
```{.quiz}
def maximum(L):  
    m = L[0]  
    for i in range(1,len(L)):  
        if .........:  
            m = L[i]  
    return m  
```
Par quoi faut-il remplacer les pointillés pour que cette fonction produise bien le résultat attendu ?



- [ ] i &gt; m
- [X] L[i] &gt; m
- [ ] L[i] &gt; L[i-1]
- [ ] L[i] &gt; L[i+1]

### Langages et programmation (Première) - Autres
n°1072
<br>
On exécute le script suivant :<br>
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



- [ ] a vaut 3, b vaut 5 et c vaut 15
- [X] a vaut 3, b vaut 5 et c n'est pas défini
- [ ] a vaut 5, b vaut 10 et c vaut 15
- [ ] a vaut 5, b vaut 10 et c n'est pas défini

### Langages et programmation (Première) - Autres
n°1073
<br>
On exécute le code suivant :<br>
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

### Langages et programmation (Première) - Autres
n°1074
<br>
On exécute le code suivant :<br>
```{.quiz}
def f(t):  
    n = len(t)  
    for i in range(n-1):  
        if t[i] &gt; t[i+1]:  
            t[i],t[i+1] = t[i+1],t[i]  
L = [4, 8, -7, 0, 1]  
f(L)  
```
Quelle est la valeur de L après l'exécution de ce code ?



- [ ] [4, -7, 8, 0, 1]
- [ ] [-7, 0, 1, 4, 8]
- [ ] [4, 8, -7, 0, 1]
- [X] [4, -7, 0, 1, 8]

### Langages et programmation (Première) - Autres
n°1075
<br>
La fonction suivante calcule la racine carrée du double d’un nombre flottant.<br>
```{.quiz}
from math import sqrt  
def racine_du_double(x):  
    return sqrt(2*x)  
```
Quelle est la précondition sur l'argument de cette fonction ?



- [ ] x &lt; 0
- [X] x &gt;= 0
- [ ] 2 \* x &gt; 0
- [ ] sqrt(x) &gt;= 0

### Langages et programmation (Première) - Autres
n°1076
<br>
Soit T un tableau de flottants, a et b deux entiers. On considère une fonction nommée 'somme' renvoyant la somme des éléments du tableau d'indices compris entre a et b définie par :<br>
```{.quiz}
def somme(T, a, b):
    S = 0
    for i in range(a, b+1) :
        S = S + T[i]
    return S
```
Quel ensemble de préconditions doit-on prévoir pour cette fonction ?



- [ ] a &lt; b
- [ ] a &lt; longueur(T) et b &lt; longueur(T)
- [X] a &lt;= b &lt; longueur(T)
- [ ] a &lt;= b &lt; longueur(T) et T est un tableau trié

### Langages et programmation (Première) - Autres
n°1113
<br>
On exécute le code suivant :<br>
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

### Langages et programmation (Première) - Autres
n°1114
<br>
On considère la fonction suivante :<br>
```{.quiz}
def comparaison(a,b):
if a &lt; b:
    return a
else:
    return b
```
Quel est le type de la valeur renvoyée par l'appel comparaison(6,5) ?



- [ ] un booléen (vrai/faux)
- [X] un nombre entier
- [ ] un nombre flottant
- [ ] une chaîne de caractères

### Langages et programmation (Première) - Autres
n°1115
<br>
Quelle est la valeur de la variable n à la fin de l'exécution du script ci-dessous ?<br>
```{.quiz}
n = 1
for i in range(4):
    n = n + 2
```



- [ ] 1
- [ ] 8
- [X] 9
- [ ] 18

### Langages et programmation (Première) - Autres
n°1116
<br>
On construit une liste L de la façon suivante :<br>
```{.quiz}
L = []
for i in range(1,11,2):
    L.append(5*i)
```
et on obtient ainsi la liste [5, 15, 25, 35, 45].<br>
On pourrait aussi procéder de la façon suivante :<br>
```{.quiz}
L = []
# ligne 1 .......
while i &lt; 11:
    L.append(5*i)
    # ligne 2 .......
```
Que faudrait-il écrire en ligne 1 et en ligne 2 pour obtenir le même résultat ?



- [ ] i = 0 en ligne 1, et i = i + 1 en ligne 2
- [ ] i = 0 en ligne 1, et i = i + 2 en ligne 2
- [ ] i = 1 en ligne 1, et i = i + 1 en ligne 2
- [X] i = 1 en ligne 1, et i = i + 2 en ligne 2

### Langages et programmation (Première) - Autres
n°1117
<br>
La fonction suivante calcule la racine carrée du double d’un nombre flottant.<br>
```{.quiz}
from math import sqrt
def racine_du_double(x):
    return sqrt(2*x)
```
Quelle est la précondition sur l'argument de cette fonction ?



- [ ] x &lt; 0
- [X] x &gt;= 0
- [ ] 2 \* x &gt; 0
- [ ] sqrt(x) &gt;= 0

### Langages et programmation (Première) - Autres
n°1118
<br>
On définit une fonction f de la façon suivante :<br>
```{.quiz}
def f(L,m):
    R = []
    for i in range(len(L)):
        if L[i] &gt; m:
            R.append(L[i])
    return R
```
On définit `L = [1, 7, 3, 4, 8, 2, 0, 3, 5]`.<br>
Que vaut `f(L,4)` ?



- [ ] [0, 7, 0, 0, 8, 0, 0, 0, 5]
- [ ] [0, 0, 0, 5]
- [X] [7, 8, 5]
- [ ] []

### Langages et programmation (Première) - Autres
n°1155
<br>
On définit la fonction :<br>
```{.quiz}
def fib(n):
    t = [0] * n
    t[1] = 1
    for in in range(2,n):
        t[i] = t[i-1] + t[i-2]
    return t
```
Quelle est la valeur renvoyée par l'appel fib(6) ?



- [ ] [0, 1, 1, 2, 3]
- [X] [0, 1, 1, 2, 3, 5]
- [ ] [0, 1, 1, 2, 3, 5, 8]
- [ ] [0, 1, 2, 3, 5, 8]

### Langages et programmation (Première) - Autres
n°1156
<br>
Quelle est la valeur de la variable n à la fin de l'exécution du script ci-dessous ?<br>
```{.quiz}
n = 1
for i in range(4):
    n = n + 2
```



- [ ] 1
- [ ] 8
- [X] 9
- [ ] 18

### Langages et programmation (Première) - Autres
n°1157
<br>
On définit deux fonctions :<br>
```{.quiz}
def f(x):
    y = 2*x + 1
    return y
def calcul(x):
    y = x - 1
    return f(y)
```
Quelle est la valeur renvoyée par l'appel `calcul(5)` ?



- [ ] 4
- [X] 9
- [ ] 11
- [ ] 19

### Langages et programmation (Première) - Autres
n°1158
<br>
On exécute le script Python suivant :<br>
```{.quiz}
def cube(a):
    a = a*a*a
    return a
a = 2
b = cube(a)
```
Que vaut le couple (a,b) à la fin de l'exécution ?



- [ ] (8, 8)
- [ ] (8, 2)
- [ ] (2, 2)
- [X] (2, 8)

### Langages et programmation (Première) - Autres
n°1159
<br>
On définit la fonction f suivante qui prend en argument une liste t d'entiers :<br>
```{.quiz}
def f(t):
    n = len(t)
    for i in range(n-1):
        for j in range(i+1,n):
            if t[i] == t[j]:
                return True
    return False
```
Pour quelle valeur de t, f(t) vaut-elle True ?



- [X] [[2,3], [3,4], [4,5], [2,3]]
- [ ] [[2,2], [3,4], [4,5], [2,3]]
- [ ] [[2,3], [3,2], [4,5], [5,4]]
- [ ] [[3,3], [4,4], [5,5], [6,6]]

### Langages et programmation (Première) - Autres
n°1160
<br>
Lequel des langages suivants n'est pas un langage de programmation :



- [ ] PHP
- [ ] Javascript
- [X] HTML
- [ ] Python

### Langages et programmation (Première) - Autres
n°1197
<br>
On exécute le script suivant :<br>
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



- [ ] a vaut 3, b vaut 5 et c vaut 15
- [X] a vaut 3, b vaut 5 et c n'est pas défini
- [ ] a vaut 5, b vaut 10 et c vaut 15
- [ ] a vaut 5, b vaut 10 et c n'est pas défini

### Langages et programmation (Première) - Autres
n°1198
<br>
Lequel des langages suivants n'est pas un langage de programmation :



- [ ] PHP
- [ ] Javascript
- [X] HTML
- [ ] Python

### Langages et programmation (Première) - Autres
n°1199
<br>
On définit la fonction f suivante qui prend en argument une liste t d'entiers :<br>
```{.quiz}
def f(t):
    n = len(t)
    for i in range(n-1):
        for j in range(i+1,n):
            if t[i] == t[j]:
                return True
    return False
```
Pour quelle valeur de t, f(t) vaut-elle True ?



- [X] [[2,3], [3,4], [4,5], [2,3]]
- [ ] [[2,2], [3,4], [4,5], [2,3]]
- [ ] [[2,3], [3,2], [4,5], [5,4]]
- [ ] [[3,3], [4,4], [5,5], [6,6]]

### Langages et programmation (Première) - Autres
n°1200
<br>
On exécute le script suivant.<br>
```{.quiz}
a,b = 10,3
if a &lt; 10:
    a,b = a+2,b+a
```
Quelle est la valeur de b à la fin de son exécution ?



- [X] 3
- [ ] 12
- [ ] 13
- [ ] 15

### Langages et programmation (Première) - Autres
n°1201
<br>
On souhaite écrire une fonction qui renvoie le maximum d'une liste d'entiers :<br>
```{.quiz}
def maximum(L):
    m = L[0]
    for i in range(1,len(L)):
        if .........:
            m = L[i]
    return m
```
Par quoi faut-il remplacer les pointillés pour que cette fonction produise bien le résultat attendu ?



- [ ] i &gt; m
- [X] L[i] &gt; m
- [ ] L[i] &gt; L[i-1]
- [ ] L[i] &gt; L[i+1]

### Langages et programmation (Première) - Autres
n°1202
<br>
On considère la fonction suivante :<br>
```{.quiz}
def comparaison(a,b):
    if a &lt; b:
        return a
    else:
        return b
```
Quel est le type de la valeur renvoyée par l'appel comparaison(6,5) ?



- [ ] un booléen (vrai/faux)
- [X] un nombre entier
- [ ] un nombre flottant
- [ ] une chaîne de caractères

### Langages et programmation (Première) - Autres
n°1238
<br>
La documentation de la bibliothèque random de Python précise que `random.randint(a,b)` renvoie un entier aléatoire \(N \) tel que \( a \le N \le b \).<br>
Afin d’obtenir un entier choisi aléatoirement dans l’ensemble {-4 ; -2 ; 0 ; 2 ; 4}, après avoir importé la librairie random de Python, on peut utiliser l’instruction :



- [ ] random.randint(0,8)/2
- [ ] random.randint(0,8)/2 - 4
- [ ] random.randint(0,4)\*2 - 2
- [X] (random.randint(0,4) - 2) \* 2

### Langages et programmation (Première) - Autres
n°1239
<br>
On souhaite écrire une fonction qui renvoie le maximum d'une liste d'entiers :<br>
```{.quiz}
def maximum(L):
    m = L[0]
    for i in range(1,len(L)):
        if .........:
            m = L[i]
    return m
```
Par quoi faut-il remplacer les pointillés pour que cette fonction produise bien le résultat attendu ?



- [ ] i &gt; m
- [X] L[i] &gt; m
- [ ] L[i] &gt; L[i-1]
- [ ] L[i] &gt; L[i+1]

### Langages et programmation (Première) - Autres
n°1240
<br>
Quelle est la valeur de la variable b à la fin de l'exécution du script suivant ?<br>
```{.quiz}
a = 2
b = 5
if a &gt; 8:
    b = 10
elif a &gt; 6:
    b = 3
```



- [ ] 3
- [X] 5
- [ ] 6
- [ ] 10

### Langages et programmation (Première) - Autres
n°1241
<br>
On exécute le code suivant<br>
```{.quiz}
def calculPourcentage(prix,reduction):
    assert reduction &gt;= 0, 'la réduction doit être un nombre positif'
    assert reduction &lt; 100, 'la réduction doit être inférieure à 100'
    assert prix &gt; 0, 'le prix doit être un nombre strictement positif'
    remise = (reduction*prix)/100
    prix_remise = prix - remise
    return prix_remise
```
Quelle est la valeur renvoyée par l'appel `calculPourcentage(30,100)` ?



- [ ] AssertionError: la réduction doit être un nombre positif
- [X] AssertionError: la réduction doit être inférieure à 100
- [ ] AssertionError: le prix doit être un nombre strictement positif
- [ ] 70

### Langages et programmation (Première) - Autres
n°1242
<br>
La fonction suivante calcule la racine carrée du double d’un nombre flottant.<br>
```{.quiz}
from math import sqrt
def racine_du_double(x):
    return sqrt(2*x)
```
Quelle est la précondition sur l'argument de cette fonction ?



- [ ] x &lt; 0
- [X] x &gt;= 0
- [ ] 2 \* x &gt; 0
- [ ] sqrt(x) &gt;= 0

### Langages et programmation (Première) - Autres
n°1243
<br>
On considère l'instruction suivante :<br>
resultat = [0] \* 7<br>
Que contient la variable resultat après son exécution ?



- [ ] 0
- [ ] [0]
- [ ] [[0], [0], [0], [0], [0], [0], [0]]
- [X] [0, 0, 0, 0, 0, 0, 0]

### Langages et programmation (Première) - Constructions élémentaires
n°1326
<br>
On considère le code suivant<br>
```{.quiz}
def moyenne(notes) :
   somme=0
   for cpt in range(len(notes)):
      ...
   m=somme/len(notes)
   return m
```
Par quoi faut-il remplacer le ligne en pointillé pour que cette fonction calcule la moyenne de la liste notes ?



- [X] 
```{.quiz}
somme=somme+notes[cpt]
```
- [ ] 
```{.quiz}
somme=notes[cpt]
```
- [ ] 
```{.quiz}
somme=cpt
```
- [ ] 
```{.quiz}
somme=somme+cpt
```

### Langages et programmation (Première) - Autres
n°1352
<br>
Karine écrit une bibliothèque Python, nommée GeomPlan, de géométrie plane dont voici un extrait :<br>
```{.quiz}
import math
def aireDisque(R):
    return math.pi * R**2
```
Gilles utilise cette bibliothèque pour calculer l'aire d'un disque de rayon 8. Laquelle des instructions suivantes renvoie un message d'erreur ?



- [ ] 
```{.quiz}
import GeomPlan
GeomPlan.aireDisque(8)
```
- [X] 
```{.quiz}
import GeomPlan
aireDisque(8)
```
- [ ] 
```{.quiz}
from GeomPlan import *
aireDisque(8)
```
- [ ] 
```{.quiz}
from GeomPlan import aireDisque
aireDisque(8)
```

### Langages et programmation (Première) - Constructions élémentaires
n°1368
<br>
On exécute le script suivant :   <br>
```{.quiz}
a = 10  
if a &lt; 5:  
    a = 20  
elif a &lt; 100:  
    a = 500  
elif a &lt; 1000:  
    a = 1  
else:  
    a = 0  
```
Quelle est la valeur de la variable a à la fin de cette exécution ?



- [ ] 1
- [ ] 10
- [ ] 20
- [X] 500

### Langages et programmation (Première) - Constructions élémentaires
n°1369
<br>
Voici un programme en Python :  <br>
```{.quiz}
tableau = [8, 1, 6, 6, 9, 6, 9, 3, 8, 6, 3, 4, 9, 6, 7, 1]  
m = -1  
rang = -1  
for i in range(len(tableau)):  
    if m &lt;= tableau[i]:  
        m = tableau[i]  
        rang = i  
```
Quelle est la valeur du couple (m,rang) à la fin de l'exécution du programme ?



- [ ] (1,1)
- [ ] (1,15)
- [ ] (9,4)
- [X] (9,12)

### Langages et programmation (Première) - Constructions élémentaires
n°1382
<br>
```{.quiz}
a = '2'
b = '3'
c = a + b
d = 4 * 'a'
```
Que contiennent les variables `c` et `d` à la fin de l’exécution du script Python précédent ?



- [ ] `c` contient 23 et `d` contient 8
- [ ] `c` contient 5 et `d` contient 8
- [X] `c` contient `'23'` et `d` contient `'aaaa'`
- [ ] `c` contient `'23'` et `d` contient `'2222'`

### Langages et programmation (Première) - Constructions élémentaires
n°1383
<br>
```{.quiz}
a = 1
b = 2
c = 3
```
Par quelle séquence d'instructions faut-il compléter le script Python ci-dessus pour obtenir l'état :<br>
|  |  |  |<br>
| --- | --- | --- |<br>
|   a |   b |   c  |<br>
|   2 |   3 |  1 |



- [ ] 
```{.quiz}
a = b
b = c
c = a
```
- [ ] 
```{.quiz}
c = a
b = c
a = b
```
- [ ] 
```{.quiz}
e = b
c = a
b = c
a = e
```
- [X] 
```{.quiz}
c = a + b + c
b = c - (a + b)
a = c - (a + b)
c = c - (a + b)
```

### Langages et programmation (Première) - Constructions élémentaires
n°1421
<br>
Que renvoie machin(7) si la fonction machin, écrite en langage Python est :<br>
```{.quiz}
def machin(a):
    if a &lt; 7:
        return 2 * a
    else:
        return a - 1
```



- [ ] 7
- [ ] 14
- [X] 6
- [ ] 13

### Langages et programmation (Première) - Constructions élémentaires
n°1422
<br>
Combien de fois la fonction ```print``` va-t-elle être appelée dans le script suivant :<br>
```{.quiz}
x=4
while(x &lt; 10):
    print('je fais')
    x=x+2
```



- [ ] 1 fois
- [ ] 2 fois
- [X] 3 fois
- [ ] 4 fois

### Langages et programmation (Première) - Constructions élémentaires
n°1423
<br>
Que renvoie cette fonction ?<br>
```{.quiz}
i = 0
j = 2
while j &gt; 0 :
    j = j - 1
    i = i + 1
return i
```



- [ ] i = 0
- [ ] i = 1
- [X] i = 2
- [ ] i = 3

### Langages et programmation (Première) - Constructions élémentaires
n°1424
<br>
Combien de paramètres sont passés dans cette fonction ?<br>
```{.quiz}
calcul_imc(47,1.60,51)
```



- [ ] 1
- [ ] 2
- [X] 3
- [ ] 4

### Langages et programmation (Première) - Constructions élémentaires
n°1425
<br>
Quel est le sens de la partie '\*\*' dans ce calcul ?<br>
```{.quiz}
calcul = energie / vitesse**2
```



- [ ] une multiplication
- [ ] une division
- [X] une puissance
- [ ] un quotient

### Langages et programmation (Première) - Constructions élémentaires
n°1426
<br>
Que donnera le code suivant :<br>
```{.quiz}
a = 0
while (a &lt; 7):
    a = a + 1
    print (a)
```



- [ ] tous les nombres de 0 à 7 (compris)
- [ ] tous les nombres de 0 à 6 (compris)
- [X] tous les nombres de 1 à 7 (compris)
- [ ] affiche seulement '7'

### Langages et programmation (Première) - Diversité des langages
n°1458
<br>
**Langages et programmes: vocabulaire**<br>
Le langage Python est un langage ?



- [X] interprété
- [ ] compilé
- [ ] binaire
- [ ] machine

### Langages et programmation (Première) - Constructions élémentaires
n°1460
<br>
**Programmation bases Python**<br>
On a saisi le code suivant :<br>
```{.quiz}
def moy(x,y):
    return ((x+y)/2)
moyenne=moy(3,5)
```
Que contient la variable moyenne à la fin de l’exécution de ce script ?



- [ ] 8.0
- [ ] 4
- [X] 4.0
- [ ] Autre réponse

### Langages et programmation (Première) - Constructions élémentaires
n°1461
<br>
**Programmation bases Python**<br>
On a saisi le code suivant :<br>
```{.quiz}
def carre(val):
    return (val*val)
def func(val):
    val=val+1
    return (val)
valeur=carre(func(5))
```
Que contient la variable valeur à la fin de l’exécution de ce script ?



- [ ] 25
- [ ] 26
- [X] 36
- [ ] 37

### Langages et programmation (Première) - Constructions élémentaires
n°1462
<br>
**Programmation bases Python**<br>
On a saisi le code suivant :<br>
```{.quiz}
def func(val):
    if val&gt;0:
        return (1+val)
    else:
        return (1-val)
resultat=func(3)+func(-3)
```
Que contient la variable resultat à la fin de l’exécution de ce script ?



- [ ] 0
- [ ] 2
- [ ] 6
- [X] 8

### Langages et programmation (Première) - Constructions élémentaires
n°1463
<br>
**Programmation bases Python**<br>
On a saisi le code suivant :<br>
```{.quiz}
def operation_1(a,b,c):
    return (a+b*c)
def operation_2(a,b,c):
    return (a*2+b)
def operation_3(a,b,c):
    return (c*3-b)
i=5
j=1
k=2
resultat_1=operation_1(i,j,k)+operation_3(k,i,j)
if i!=resultat_1:
    resultat_2=resultat_1+operation_2(k,j,i)
else:
    resultat_2=resultat_1+operation_2(k,i,j)
```
Que contient la variable resultat\_2 à la fin de l’exécution de ce script ?



- [ ] 10
- [ ] 12
- [X] 14
- [ ] 16

### Langages et programmation (Première) - Constructions élémentaires
n°1464
<br>
**Programmation bases Python**<br>
On a saisi le code suivant :<br>
```{.quiz}
def fonct(x):
    k=1
    for i in range(1,x):
        k=k+k
    return k
resultat=fonct(5)
```
Que contient la variable resultat à la fin de l’exécution de ce script ?



- [ ] 1
- [ ] 5
- [ ] 8
- [X] 16

### Langages et programmation (Première) - Constructions élémentaires
n°1465
<br>
**Programmation bases Python**<br>
On a saisi le code suivant :<br>
```{.quiz}
def func(val):
    if val&gt;0:
        return (1+val)
    else:
        return (1-val)
resultat=func(3,5)
```
Que contient la variable resultat à la fin de l’exécution de ce script ?



- [ ] 0
- [ ] 2
- [ ] 5
- [X] Autre réponse

### Langages et programmation (Première) - Constructions élémentaires
n°1466
<br>
**Programmation bases Python**<br>
On a saisi le code suivant :<br>
```{.quiz}
def operation_1(a,b,c):
    return (a+b*c)
def operation_2(a,b,c):
    return (a*2+b)
def operation_3(a,b,c):
    return (c*3-b)
i=1
j=2
k=7
if i&gt;5:
  resultat=operation_1(i,j,k)
elif j&lt;3:
    resultat=operation_2(j,k,i)
else:
    resultat=operation_3(k,i,j)
```
Que contient la variable resultat à la fin de l’exécution de ce script ?



- [ ] 4
- [X] 11
- [ ] 15
- [ ] 19

### Langages et programmation (Première) - Constructions élémentaires
n°1482
<br>
On a saisi le code suivant :<br>
```{.quiz}
chaine = '56842'
bidule = ''
for element in chaine:
    bidule = bidule + element
```
Que contient la variable bidule à la fin de l’exécution de ce script ?



- [X] 56842
- [ ] 25
- [ ] 5
- [ ] element

### Langages et programmation (Première) - Constructions élémentaires
n°1483
<br>
Boucles imbriquées<br>
On a saisi le code suivant :<br>
```{.quiz}
a = int(input('Saisir la valeur de a : '))
b = int(input('Saisir la valeur de b : '))
for i in range(a):
    print('Début du bloc d'instructions de la première boucle')
    for j in range (b):
        print(f'i = {i} et j = {j}')
```
Que doit saisir l'utilisateur pour que le terminal affiche les lignes suivantes :<br>
```{.quiz}
Début du bloc d'instructions de la première boucle
i = 0 et j = 0
i = 0 et j = 1
Début du bloc d'instructions de la première boucle
i = 1 et j = 0
i = 1 et j = 1
Début du bloc d'instructions de la première boucle
i = 2 et j = 0
i = 2 et j = 1
```



- [ ] Ses deux saisies successives doivent être... 
Saisir la valeur de a : 3
Saisir la valeur de b : 3
- [X] Ses deux saisies successives doivent être... 
Saisir la valeur de a : 3
Saisir la valeur de b : 2
- [ ] Ses deux saisies successives doivent être... 
Saisir la valeur de a : 2
Saisir la valeur de b : 3
- [ ] Ses deux saisies successives doivent être... 
Saisir la valeur de a : 2
Saisir la valeur de b : 2

### Langages et programmation (Première) - Constructions élémentaires
n°1484
<br>
On a saisi le code suivant :<br>
```{.quiz}
phrase1 = 'Quand te reverrai-je, pays merveilleux, '
phrase2 = 'où ceux qui s’aiment vivent à deux ? '
phrase3 = 'dans cette neige y trouverais-je un amoureux ?'
citation = phrase1 + phrase2 + phrase1 + phrase3
compteur = 0
for elt in citation:
    if elt == '-':
        compteur = compteur + 1
print(compteur)
```
Qu'affiche le terminal à la fin de l’exécution de ce script ?



- [ ] 0
- [ ] 1
- [ ] 2
- [X] 3

### Langages et programmation (Première) - Autres
n°1519
<br>
Sachant que a=18 combien valent les variables x et y après l'exécution de l'algorigramme ci-contre ?
<br>
![image](/assets/images/qcm/1519_algo_gecif.PNG)
<br>


- [ ] X = 1; Y = 1
- [X] X = 18; Y = 35
- [ ] X = 17; Y = 33
- [ ] X = A; Y = A + 2

### Langages et programmation (Première) - Autres
n°1541
<br>
Quelle est la commande git qui télécharge votre dépot de GitHub sur votre ordinateur?



- [ ] $ git push
- [ ] $ git commit
- [ ] $ git fork
- [X] $ git clone

### Langages et programmation (Première) - Autres
n°1542
<br>
Quelle commande est utilisé pour transférer votre code et vos modifications dans GitHub?



- [ ] 
```{.quiz}
$ git add
```
- [X] 
```{.quiz}
$ git push
```
- [ ] 
```{.quiz}
$ git upload
```
- [ ] 
```{.quiz}
$ git status
```

### Langages et programmation (Première) - Autres
n°1543
<br>
Comment ajouter un fichier à un commit que l'on vient d'effectuer ?



- [ ] 
```{.quiz}
$ git reset HEAD^
$ git add f1
$ git commit
```
- [ ] 
```{.quiz}
$ git add f1
$ git commit --amend
```
- [ ] 
```{.quiz}
$ git chekout HEAD
$ git add f1
$ git commit
```
- [X] 
```{.quiz}
$ git add f1
$ git commit
```

### Langages et programmation (Première) - Autres
n°1544
<br>
Quelle commande pour afficher tous les paramètres dans git?



- [X] 
```{.quiz}
$ git config --list
```
- [ ] 
```{.quiz}
$ git config -a
```
- [ ] 
```{.quiz}
$ git config --all
```
- [ ] 
```{.quiz}
$ git config --parameters --list
```

### Langages et programmation (Première) - Autres
n°1545
<br>
Une fois que vous avez installé Git et avant d’avoir émis le premier commit, quelles sont les deux propriétés de configuration attendues par l’outil?



- [X] nom d'utilisateur et adresse électronique
- [ ] nom d'utilisateur et mot de passe
- [ ] adresse électronique et mot de passe
- [ ] nom d'utilisateur et adresse IP

### Langages et programmation (Première) - Autres
n°1557
<br>
On définit la fonction :<br>
```{.quiz}
def fib(n):
    t = [0] * n
    t[1] = 1
    for i in range(2,n):
        t[i] = t[i-1] + t[i-2]
    return t
```
Quelle est la valeur renvoyée par l'appel fib(6) ?



- [ ] [0, 1, 1, 2, 3]
- [X] [0, 1, 1, 2, 3, 5]
- [ ] [0, 1, 1, 2, 3, 5, 8]
- [ ] [0, 1, 2, 3, 5, 8]

### Langages et programmation (Première) - Diversité des langages
n°1618
<br>
Langages de programmation<br>
Dans le fichier html d’une page web figurent les instructions programmées en langage Javascript suivantes :<br>
```{.quiz}
var matrice=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] ; var x = matrice.length ; var y = matrice[0].length ;
for( var i = 0 ; i &lt; x ; i++) { for ( var j = 0 ; j &lt; y ; j++) { if ( i + j == 3) { matrice[i][j] = 1;}}}
```
Par rapport au langage de programmation Javascript, laquelle de ces affirmations est correcte ?



- [ ] Le bloc d’instructions qui suit une instruction conditionnelle est délimité par des parenthèses.
- [ ] Le bloc d’instructions exécuté à l’intérieur d’une boucle bornée est délimité par des crochets
- [ ] L’écriture des données d’une table est différente de celle qui se fait en langage Python
- [X] Une instruction d’assignation se termine obligatoirement par un point-virgule

### Langages et programmation (Première) - Mise au point des programmes
n°1620
<br>
Les assertions<br>
On a saisi le code suivant :<br>
```{.quiz}
def sqrt(a):
    racine = 1
    for i in range (10):
          racine = (racine + a / racine) / 2
    return racine
```
Nous souhaitons stopper le programme dans les règles de l'art, c'est à dire en utilisant les outils de vérifications de Python.<br>
Quel code suivant permet de s'assurer qu'une valeur positive est passée en argument et que la fonction renvoie toujours un résultat positif ?<br>
Réponses :



- [X] 
```{.quiz}
def sqrt(a):
    assert a &gt;= 0
    racine = 1
    for i in range (10):
          racine = (racine + a / racine) / 2
    assert racine &gt;= 0
    return racine
```
- [ ] 
```{.quiz}
def sqrt(a):
    racine = 1
    for i in range (10):
          racine = (racine + a / racine) / 2
    return racine
    assert a &gt;= 0
    assert racine &gt;= 0
```
- [ ] 
```{.quiz}
def sqrt(a:int&gt;=0): -&gt;int&gt;=0
    racine = 1
    for i in range (10):
          racine = (racine + a / racine) / 2
    return racine
```
- [ ] 
```{.quiz}
def sqrt(a):
    if a &gt; 0
        racine = 1
        for i in range (10):
             racine = (racine + a / racine) / 2
    if racine &gt;= 0
          return racine
```

### Langages et programmation (Première) - Mise au point des programmes
n°1623
<br>
NameError<br>
On a exécutez le code suivant :<br>
```{.quiz}
nombre_d_invites= 25
nombre_de_courriers = 11
print(nombre_de_courrier)
```
On obtient le message d'erreur suivant :<br>
Traceback (most recent call last):  <br>
 File '', line 3, in   <br>
NameError: name 'nombre\_de\_courrier' is not defined  <br>
 Que signifie ce message d'erreur ?



- [ ] Problème d'indentation du code
- [X] On utilise une variable non définie
- [ ] On a fait une erreur de syntaxe
- [ ] On effectue une opération incorrecte entre deux valeurs de types différents

### Langages et programmation (Première) - Mise au point des programmes
n°1624
<br>
TypeError<br>
On a exécutez le code suivant :<br>
```{.quiz}
cote = input('quel est la longueur du coté du carré ?')
aire = cote**2
print(aire)
```
On obtient le message d'erreur suivant :<br>
Traceback (most recent call last):  <br>
 File '', line 2, in   <br>
TypeError: unsupported operand type(s) for \*\* or pow(): 'str' and 'int'  <br>
 Que signifie ce message d'erreur ?



- [ ] On a utilisé une variable qui n'est pas définie
- [ ] On a mal indenté le code
- [ ] On a fait une erreur de syntaxe
- [X] On effectue une opération impossible entre deux valeurs de types différents

### Langages et programmation (Première) - Mise au point des programmes
n°1625
<br>
IndentError<br>
On a exécutez le code suivant :<br>
```{.quiz}
cote = 5
 aire = cote**2
print(aire)
```
Quel type de message d'erreur va-t-on obtenir ?



- [ ] NameError
- [ ] SyntaxError
- [ ] TypeError
- [X] IndentError

### Langages et programmation (Première) - Constructions élémentaires
n°1676
<br>
boucle FOR<br>
On a saisi le code suivant :<br>
```{.quiz}
for k in range(1,3):
    print(k)
```
Quel affichage obtient-on à l’exécution de ce code ?



- [ ] 
```{.quiz}
1.3
```
- [ ] 
```{.quiz}
1
2
3
```
- [X] 
```{.quiz}
1
2
```
- [ ] 
```{.quiz}
1,3
```

### Langages et programmation (Première) - Constructions élémentaires
n°1697
<br>
On considère la ligne de code suivante :<br>
```{.quiz}
print('Bonjour', 'à', 'vous', 'tous', sep = '-', end = '!')
```
Que va afficher la console si on exécute le programme ?



- [ ] Bonjour-à-vous-tous-
- [X] Bonjour-à-vous-tous !
- [ ] Bonjour à vous tous !
- [ ] Bonjouràvoustous

### Langages et programmation (Première) - Constructions élémentaires
n°1698
<br>
Après exécution, quel code affichera la phrase :  <br>
Ce programme ne contient qu'une seule ligne !



- [ ] print('Ce', 'programme', 'ne', 'contient', 'qu'une', 'seule', 'ligne', end = ' !')
- [ ] print('Ce', 'programme', 'ne', 'contient', 'qu\'une', 'seule', 'ligne', end = '!')
- [X] print('Ce', 'programme', 'ne', 'contient', 'qu\'une', 'seule', 'ligne', end = ' !')
- [ ] print('Ce', 'programme', 'ne', 'contient', 'qu\'', 'une seule', 'ligne', end = '!')

### Langages et programmation (Première) - Constructions élémentaires
n°1699
<br>
Que va afficher le code suivant si on l'exécute ?<br>
```{.quiz}
variable1 = '8'
variable2 = '7'
print(variable1 + variable2)
```



- [ ] 15
- [X] 87
- [ ] Il va afficher une erreur.
- [ ] 42

### Langages et programmation (Première) - Constructions élémentaires
n°1700
<br>
On considère le programme suivant :<br>
```{.quiz}
compteur = 5
compteur = compteur * compteur
compteur = compteur + compteur
print(compteur)
```
Que va afficher la console si on exécute le programme ?



- [ ] 30
- [ ] 20
- [X] 50
- [ ] 35

### Langages et programmation (Première) - Constructions élémentaires
n°1701
<br>
On considère le programme suivant :<br>
```{.quiz}
a = 3
b = 5
a = b
a = a + b
print(a)
```
Que va afficher la console si on exécute ce programme ?



- [ ] 8
- [ ] 6
- [X] 10
- [ ] 15

### Langages et programmation (Première) - Constructions élémentaires
n°1702
<br>
On considère le programme suivant :<br>
```{.quiz}
facile = 10
reponse = 'non'
if facile &lt; 10:
   reponse = 'oui'
print(reponse, '!')
```
Que va afficher la console après exécution de ce programme ?



- [X] non !
- [ ] oui !
- [ ] non !
oui !
- [ ] noui !

### Langages et programmation (Première) - Constructions élémentaires
n°1703
<br>
On considère le programme suivant :<br>
```{.quiz}
a = 9
if a &lt; 5:
   a = 20
elif a &lt; 98:
   a = 697
elif a &lt; 1000:
   a = 1
else:
   a = 0
print(a)
```
Que va afficher la console à l'exécution de ce script ?



- [ ] 0
- [ ] 1
- [ ] 20
- [X] 697

### Langages et programmation (Première) - Constructions élémentaires
n°1704
<br>
On considère le programme suivant :<br>
```{.quiz}
var1 = 5
var2 = 3
var2 = var1
var1 = var1 + var2
print(var1, var2, type(var1))
```
Que va afficher la console après exécution de ce programme ?



- [ ] 8 5 &lt;class 'int'&gt;
- [X] 10 5 &lt;class 'int'&gt;
- [ ] 8 3 &lt;class 'str'&gt;
- [ ] 6 3 &lt;class 'integer'&gt;

### Langages et programmation (Première) - Constructions élémentaires
n°1705
<br>
On considère le programme suivant :<br>
```{.quiz}
varA = 8
varB = 11
if varA &gt;= B:
   varA = varA + 5
if varB &lt; 12:
   varB = varB + varA
print(varA + varB)
```
Que va afficher la console après exécution de ce script ?



- [X] 27
- [ ] 19
- [ ] 24
- [ ] 37

### Langages et programmation (Première) - Constructions élémentaires
n°1706
<br>
On considère le programme suivant :<br>
```{.quiz}
x = 3
y = 8
x = y
y = x
print(x, y)
```
Que va afficher la console après exécution de ce programme ?



- [ ] 8 3
- [ ] 3 3
- [X] 8 8
- [ ] 8, 3

### Langages et programmation (Première) - Constructions élémentaires
n°1707
<br>
Boucle for, module turtle !<br>
 on a saisi le code suivant :<br>
```{.quiz}
from turtle import *
for loop in range(2):
   forward(50)
   left(90)
   forward(50)
   right(90)
```
Quel dessin sera réalisé par la tortue ?
<br>
![image](/assets/images/qcm/1707_QCM3.png)
<br>


- [ ] Le dessin a)
- [X] Le dessin b)
- [ ] Le dessin c)
- [ ] Le dessin d)

### Langages et programmation (Première) - Constructions élémentaires
n°1708
<br>
Boucles for, module turtle<br>
 Parmi les codes suivants, lequel aura tracé le dessin suivant :
<br>
![image](/assets/images/qcm/1708_QCM3-2.png)
<br>


- [X] 
```{.quiz}
from turtle import *
for loop in range(4):
    right(90)
    forward(50)
    left(90)
    forward(50)
    left(90)
    forward(50)
    right(90)
    forward(50)
```
- [ ] 
```{.quiz}
from turtle import *
for loop in range(8):
    right(90)
    forward(50)
    left(90)
    forward(50)
```
- [ ] 
```{.quiz}
from turtle import *
for loop in range(8):
    right(90)
    forward(50)
    left(90)
    forward(50)
    right(90)
```
- [ ] 
```{.quiz}
from turtle import *
for loop in range(4):
    right(90)
    forward(50)
    right(90)
    forward(50)
    left(90)
    forward(50)
    left(90)
    forward(50)
```

### Langages et programmation (Première) - Constructions élémentaires
n°1709
<br>
Boucle for et fonction print()<br>
On utilise la fonction print() pour tracer le motif suivant :<br>
```{.quiz}
******
*    *
*    *
*    *
*    *
******
```
Quel code permet d'obtenir ce motif ?



- [ ] 
```{.quiz}
print('******')
for loop in range(4):
   print('*    *')
   print('******')
```
- [ ] 
```{.quiz}
for loop in range(6):
   print('******')
   print('*    *')
   print('******')
```
- [X] 
```{.quiz}
print('******')
for loop in range(4):
   print('*    *')
print('******')
```
- [ ] 
```{.quiz}
for loop in range(4):
   print('******')
   print('*    *')
print('******')
```

### Langages et programmation (Première) - Constructions élémentaires
n°1710
<br>
Boucle for et fonction print()<br>
Voici un programme qui affiche plusieurs fois le mot 'Bonjour'<br>
```{.quiz}
for loop in range(4):
   for loop in range(3):
      print('Bonjour')
   print('Bonjour')
for loop in range(5):
   print('Bonjour')
```
Combien de fois le mot 'Bonjour' sera-t'il affiché ?



- [ ] 12 fois
- [ ] 13 fois
- [ ] 18 fois
- [X] 21 fois

### Langages et programmation (Première) - Constructions élémentaires
n°1849
<br>
Boucle incomplète<br>
Compléter le script suivant pour que la valeur affichée soit 5.<br>
```{.quiz}
s = 0
for i in range(...):
    s = s+1
print(s)
```



- [ ] 4
- [X] 5
- [ ] 6
- [ ] Impossible, le code retourne une erreur.

### Langages et programmation (Première) - Mise au point des programmes
n°1856
<br>
Gestion des exceptions<br>
Qu'affiche le code suivant ci-dessous ?<br>
```{.quiz}
try:
   msg = 'Hello World'
   char = msg[2]
   print('OK!')
except IndexError:
   print('Block Except!')
else:
   print('Block Else!')
finally:
   print('Block Finally!')
```



- [ ] `l`
- [ ] 
```{.quiz}
OK
Block Else!
```
- [ ] 
```{.quiz}
OK
Block Finally!
```
- [X] Aucune des autres réponses

### Langages et programmation (Première) - Mise au point des programmes
n°1857
<br>
Gestion des exceptions<br>
Qu'affiche le code suivant ci-dessous ?<br>
```{.quiz}
try:
   msg = 'Hello World'
   char = msg[11]
   print('OK!')
except IndexError:
   print('Block Except!')
else:
   print('Block Else!')
finally:
   print('Block Finally!')
```



- [ ] `Block Except!`
- [ ] 
```{.quiz}
Block Except!
Block Else!
```
- [X] 
```{.quiz}
Block Except!
Block Finally!
```
- [ ] 
```{.quiz}
Block Except!
Block Else!
Block Finally!
```

### Langages et programmation (Première) - Constructions élémentaires
n°1859
<br>
Nombre d'arguments dans l'appel d'une fonction<br>
Combien d'arguments ont été renseignés dans l'appel de fonction suivant :<br>
```{.quiz}
somme(12.2,5.4,5.5)
```



- [ ] 6
- [ ] 4
- [X] 3
- [ ] 1

### Langages et programmation (Première) - Constructions élémentaires
n°1860
<br>
Fonctions natives<br>
Parmi les fonctions suivantes, dans le langage Python, laquel n'est pas [native](https://docs.python.org/fr/3.9/library/functions.html) ?



- [ ] 
```{.quiz}
int()
```
- [ ] 
```{.quiz}
isinstance()
```
- [X] 
```{.quiz}
sqrt()
```
- [ ] 
```{.quiz}
dir()
```

### Langages et programmation (Première) - Constructions élémentaires
n°1861
<br>
Appel de l'aide<br>
On souhaite connaître le comportement de l'expression suivante :<br>
```{.quiz}
isinstance('101', str)
```
Quel est la bonne syntaxe pour appeler l'aide sur cette fonction ?



- [ ] 
```{.quiz}
help()
```
- [X] 
```{.quiz}
help(isinstance)
```
- [ ] 
```{.quiz}
help(isinstance())
```
- [ ] 
```{.quiz}
help(isinstance('101', str))
```

### Langages et programmation (Première) - Constructions élémentaires
n°1862
<br>
Evaluation d'une expression<br>
On a saisi le code suivant :<br>
```{.quiz}
a = -1
b = 3
min(abs(a), abs(b))
```
Quelle valeur est renvoyée par la dernière expression?
<br>
![image](/assets/images/qcm/1862_QCM1_min_abs_abs.png)
<br>


- [ ] -3
- [ ] -1
- [X] 1
- [ ] 3

### Langages et programmation (Première) - Constructions élémentaires
n°1863
<br>
Valeur retour de la fonction `print()`<br>
`type(abs(-42))` nous renseigne sur le type de la valeur retour de `abs(-42)`<br>
```{.quiz}
&gt;&gt;&gt; type(abs(-42))
&lt;class 'int'&gt;
```
Quel est le type de la valeur retour de `print(« coucou »)` ?<br>
```{.quiz}
&gt;&gt;&gt; type(print('coucou'))
coucou
&lt;class '???'&gt;
```



- [ ] &lt;class 'int'&gt;
- [ ] &lt;class 'str'&gt;
- [X] &lt;class 'NoneType'&gt;
- [ ] Saisir le code de la réponse D

### Langages et programmation (Première) - Constructions élémentaires
n°1864
<br>
Affectation des valeurs de retour<br>
On a saisi le code suivant :<br>
```{.quiz}
a = pow(2,6)
b = pow(2,2)
c = pow(2,1)
d = bin(a+b+c)
```
Que contient les variables `a` et `d` à la fin de l’exécution de ce script ?<br>
*Remarque :*<br>
La forme à deux arguments `pow(base, exp)` est équivalente à l'opérateur puissance : `base**exp`.``



- [ ] a vaut 12
et d vaut 18
- [X] a vaut 64
et d vaut '0b1000110'
- [ ] a vaut 12
et d vaut 10010
- [ ] a vaut 64
et d vaut 1000110

### Langages et programmation (Première) - Autres
n°1869
<br>
Quelle est la valeur de la variable n à la fin de l'exécution du script ci-dessous ?<br>
```{.quiz}
n = 1
while n &lt; 21 :
    n = n + 3
```



- [ ] 1
- [ ] 20
- [ ] 21
- [X] 22

### Langages et programmation (Première) - Autres
n°1870
<br>
On exécute le script suivant.<br>
```{.quiz}
a = 10
b = 3
if a &lt; 10 :
    a = a + 2
    b = b + a
```
Quelle est la valeur de b à la fin de son exécution ?



- [X] 3
- [ ] 12
- [ ] 13
- [ ] 15

