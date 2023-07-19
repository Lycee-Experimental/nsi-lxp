### Représentation de données : Types construits (Première) - Tableau indexé
n°28
<br>
On considère le code suivant :<br>
```{.quiz}
def f(tab):
  for i in range(len(tab)//2):
    tab[i],tab[-i-1] = tab[-i-1],tab[i]
```
Après les lignes suivantes :<br>
```{.quiz}
tab = [2,3,4,5,7,8]
f(tab)
```
quelle est la valeur de tab ?



- [ ] `[2,3,4,5,7,8]`
- [ ] `[5,7,8,2,3,4]`
- [X] `[8,7,5,4,3,2]`
- [ ] `[4,3,2,8,7,5]`

### Représentation de données : Types construits (Première) - Tableau indexé
n°32
<br>
On dispose d'un tableau d'entiers, ordonné en ordre croissant. On désire connaître le nombre de valeurs distinctes contenues dans ce tableau.<br>
Quelle est la fonction qui ne convient pas ?



- [ ] 
```{.quiz}
def compte(t):
  cpt = 1
  for i in range(1,len(t)):
    if t[i] != t[i-1]:
      cpt = cpt + 1
  return cpt
```
- [ ] 
```{.quiz}
def compte(t):
  cpt = 1
  for i in range(0,len(t)-1):
    cpt = cpt + int(t[i] != t[i+1])
  return cpt
```
- [X] 
```{.quiz}
def compte(t):
  cpt = 0
  for i in range(0,len(t)-1):
    cpt = cpt + int(t[i] != t[i+1])
  return cpt
```
- [ ] 
```{.quiz}
def compte(t):
  cpt = 0
  for i in range(0,len(t)-1):
    if t[i] != t[i+1]:
      cpt = cpt + 1
  return cpt+1
```

### Représentation de données : Types construits (Première) - Tableau indexé
n°115
<br>
Qu'affiche le programme python suivant ?   <br>
```{.quiz}
L=[3,2,2]  
M=[1,5,1]  
N=L+M  
print(N)  
```



- [ ] N
- [ ] [4,7,3]
- [ ] [1,5,1,3,2,2]
- [X] [3,2,2,1,5,1]

### Représentation de données : Types construits (Première) - Tableau indexé
n°117
<br>
Soit a = [1,2,3,4,5], lequel des énoncés suivants est correct ?



- [X] print(a[:100]) #Affiche [1,2,3,4,5]
- [ ] print(a[:]) #Affiche [1,2,3,4]
- [ ] print(a[0:]) #Affiche [2,3,4,5]
- [ ] print(a[-1:]) #Affiche [1,2]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°118
<br>
On a saisi le code suivant :  <br>
```{.quiz}
a = [0.5 * x for x in range(0, 4)]  
```
donc a vaut :



- [ ] [0.0, 0.5, 1.0, 1.5, 2.0]
- [ ] [0, 1, 2, 3, 4]
- [X] [0.0, 0.5, 1.0, 1.5]
- [ ] [0, 1, 2, 3]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°119
<br>
Qu'affiche le programme python suivant ?   <br>
```{.quiz}
L=[0,1,2]  
M=[3,4,5]  
N=[L[i]+M[i] for i in range(len(L))]  
print(N)  
```



- [X] [3,5,7]
- [ ] [3,5,7,9]
- [ ] [0,1,2,3,4,5]
- [ ] Erreur

### Représentation de données : Types construits (Première) - Tableau indexé
n°120
<br>
On a saisi le code suivant :  <br>
```{.quiz}
liste = [1,[2,7],3,[4,5,8],9]  
```
Lequel des énoncés suivants est correct ?



- [ ] print(liste[2]) #Affiche 2
- [ ] print(liste[0][0]) #Affiche 1
- [X] print(liste[1][0]) #Affiche 2
- [ ] print(liste[3][1]) #Affiche 4

### Représentation de données : Types construits (Première) - Tableau indexé
n°139
<br>
Combien de tests ('tab[i]==tab[j]') effectue la fonction Python suivante pour trier un tableau de 10 éléments :<br>
```{.quiz}
def recherche_doublons(tab):  
    for i in range(1, len(tab)) :  
         for j in range(len(tab)-i) :  
              if tab[i] == tab[j] :  
                    print('doublon aux rangs ', i, ' et', j)  
```



- [X] 45
- [ ] 100
- [ ] 10
- [ ] 55

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°141
<br>
Quel est le résultat de l'évaluation de l'expression Python suivante ?<br>
 [x \* x for x in range(10)]



- [X] [0,1,4,9,16,25,36,49,64,81]
- [ ] [0,1,4,9,16,25,36,49,64,81,100]
- [ ] [0,2,4,8,16,32,64,128,256,512]
- [ ] [0,2,4,8,16,32,64,128,256,512,1024]

### Représentation de données : Types construits (Première) - Tableau indexé
n°145
<br>
Avec la variable `alphabet` définie par l'affectation suivante, quelle est l'expression Python permettant d'accéder à la lettre `E`<br>
```{.quiz}
alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',  
 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
```



- [X] alphabet[4]
- [ ] alphabet[5]
- [ ] alphabet['E']
- [ ] alphabet.E

### Représentation de données : Types construits (Première) - Tableau indexé
n°146
<br>
Dans la définition suivante de la fonction `somme` en Python, quelle est l'instruction à ajouter pour que la valeur retournée par l'appel `somme([1, 2, 3, 4, 5])` soit `15`?<br>
```{.quiz}
def somme(tab):  
    s = 0  
    for i in range(len(tab)):  
        ...  
    return s  
```



- [ ] s = tab[i]
- [ ] tab[i] = tab[i] + s
- [X] s = s + tab[i]
- [ ] s = s + i

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°147
<br>
Quel est le résultat de l'évaluation de l'expression Python suivante ?<br>
```{.quiz}
[2**n for n in range(4)]  
```



- [ ] [0, 2, 4, 6, 8]
- [X] [1, 2, 4, 8]
- [ ] [0, 1, 4, 9]
- [ ] [1, 2, 4, 8, 16]

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°148
<br>
Quelle est la valeur affichée par l'exécution du script suivant ?<br>
```{.quiz}
ports = {'ftp' : 21, 'http' : 80}  
ports['imap'] = 142  
print(ports['imap'])  
```



- [ ] Key not found
- [X] 142
- [ ] {'imap' : 142}
- [ ] 2

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°150
<br>
Quelle est la valeur de la variable `image` après exécution du script Python suivant ?<br>
```{.quiz}
image = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]  
for i in range(4):  
    for j in range(4):  
        if (i+j) == 3:  
            image[i][j] = 1  
```



- [ ] 
```{.quiz}
[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1]]
```
- [ ] 
```{.quiz}
[[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]]
```
- [X] 
```{.quiz}
[[0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0]]
```
- [ ] 
```{.quiz}
[[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1]]
```

### Représentation de données : Types construits (Première) - Autres
n°215
<br>
Avec la définition de fonction f suivante en Python, quelle est la valeur retournée par l’appel  <br>
f (42 , 21) ?  <br>
```{.quiz}
def f(x,y):  
   if x &gt; y:  
      return y,x  
   else:  
      return x,y  
```



- [X] (21,42)
- [ ] (21,21)
- [ ] (42,42)
- [ ] (42,21)

### Représentation de données : Types construits (Première) - Tableau indexé
n°216
<br>
Dans la déﬁnition suivante de la fonction somme en Python, quelle est l’instruction à ajouter pour  <br>
que la valeur retournée par l’appel somme([10 , 11 , 12 , 13 , 14]) soit 60 ?  <br>
```{.quiz}
def somme (tab):  
   s = 0  
   for ind in range(len(tab)):  
      ...  
   return s  
```



- [ ] s = tab[ind]
- [X] s = s + tab[ind]
- [ ] tab [ind] = tab[ind] + s
- [ ] s = s + ind

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°217
<br>
Quel est le résultat de l’évaluation de l’expression Python suivante?<br>
```{.quiz}
[n * n for n in range(10)]  
```



- [ ] [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
- [ ] [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
- [ ] [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
- [X] [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°218
<br>
Comment peut-on accéder à la valeur associée à une clé dans un dictionnaire?



- [ ] Il faut parcourir le dictionnaire avec une boucle à la recherche de la clé.
- [X] On peut y accéder directement à partir de la clé.
- [ ] On ne peut pas accéder à une valeur contenue dans un dictionnaire à partir d’une clé.
- [ ] Il faut d’abord déchiffrer la clé pour accéder à un dictionnaire.

### Représentation de données : Types construits (Première) - Autres
n°219
<br>
Quelle est la valeur affichée à l’exécution du programme Python suivant?<br>
```{.quiz}
ports = {'http' : 80, 'imap' : 142, 'smtp' : 25}  
ports['ftp'] = 21  
print(ports ['ftp'])  
```



- [ ] Key not found
- [ ] {'ftp' : 21}
- [ ] 3
- [X] 21

### Représentation de données : Types construits (Première) - Tableau indexé
n°222
<br>
On définit un tableau t rempli de 0 en langage Python. Ce tableau est une liste de listes, toutes les  <br>
sous-listes ayant le même nombre d'éléments.<br>
```{.quiz}
t = [ [0, 0, …, 0],  
      [0, 0, …, 0],  
      …  
      [0, 0, …, 0] ]  
```
On appelle h le nombre de listes contenus dans t et l le nombre d'éléments appartenant à ces  <br>
listes. Parmi les propositions suivantes, laquelle permet de calculer h et l ?



- [ ] h, l = len(t[0]), len(t)
- [ ] h, l = len(t[0]), len(t[1])
- [X] h, l = len(t), len(t[0])
- [ ] h, l = len(t[1]), len(t[0])

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°223
<br>
On dispose d’une liste de triplets :<br>
```{.quiz}
t = [ (1,12,250), (1,12,251), (2,12,250),(2,13,250), (2,11,250), (1,12,249) ]  
```
On trie cette liste par ordre croissant des valeurs du second éléments des triplets. En cas d’égalité, on  <br>
trie par ordre croissant du troisième champ. Si les champs 2 et 3 sont égaux, on trie par ordre  <br>
croissant du premier champ. Après ce tri, quel est le contenu de la liste t ?



- [ ] [ (1,12,249), (1,12,250), (1,12,251),(2,11,250), (2,12,250), (2,13,250) ]
- [X] [ (2,11,250), (1,12,249), (1,12,250),(2,12,250), (1,12,251), (2,13,250) ]
- [ ] [ (2,11,250), (1,12,249), (1,12,250),(1,12,251), (2,12,250), (2,13,250) ]
- [ ] [ (1,12,249), (2,11,250), (1,12,250),(2,12,250), (2,13,250), (1,12,251) ]

### Représentation de données : Types construits (Première) - Tableau indexé
n°239
<br>
Laquelle des instructions suivantes définit une liste contenant les valeurs 1,2,3,4 ?



- [X] [1,2,3,4]
- [ ] (1,2,3,4)
- [ ] {1,2,3,4}
- [ ] 1,2,3,4

### Représentation de données : Types construits (Première) - Tableau indexé
n°240
<br>
Soit les déclarations suivantes :  <br>
```{.quiz}
animaux=['Chat','Cochon','Chien','Canard','Vache']  
effectif=[3,8,5,9,1]  
groupe=[animaux,effectif]  
```
Quel sera le résultat de groupe[1][3] ?



- [ ] 'Chien'
- [X] 9
- [ ] 5
- [ ] 'Canard'

### Représentation de données : Types construits (Première) - p-uplet
n°244
<br>
Soit la définition suivante :<br>
```{.quiz}
t = ('foo', 'bar', 'baz')
```
Laquelle des propositions suivantes permet de remplacer l'élément 'bar' par 'qux' ?



- [ ] t[1] = 'qux'
- [ ] t(1) = 'qux'
- [ ] t[1:1] = 'qux'
- [X] Ce n'est pas possible de faire ce remplacement !

### Représentation de données : Types construits (Première) - p-uplet
n°245
<br>
Laquelle des propositions suivantes permet de créer un p-uplet nommé **p** contenant la chaîne 'foo' ?



- [ ] p = puplet('foo')
- [X] p = ('foo',)
- [ ] p = ('foo')
- [ ] On ne peut pas créer un tuple comportant 1 seul élément !

### Représentation de données : Types construits (Première) - p-uplet
n°246
<br>
Soit la suite d'instructions suivantes :<br>
```{.quiz}
fruit = {}  
def addone(index):  
    if index in fruit:  
        fruit[index] += 1  
    else:  
        fruit[index] = 1  
addone('Apple')  
addone('Banana')  
addone('Orange')  
addone('Orange')  
addone('Orange')  
```
Que contient **fruit** suite à l'exécution de ce code ?



- [X] {'Apple': 1, 'Banana': 1, 'Orange': 3}
- [ ] {'Apple', 'Banana' , 'Orange', 'Orange', 'Orange'}
- [ ] {0:'Apple', 1:'Banana', 2:'Orange'}
- [ ] {1:'Apple', 1:'Banana', 3:'Orange'}

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°258
<br>
Quelle est la valeur de la variable **sum** à la fin de l’exécution de ce bloc d'instructions ?<br>
```{.quiz}
arr = {}  
arr[1] = 1  
arr['1'] = 2  
arr[1] += 1  
sum = 0  
for k in arr:  
    sum += arr[k]  
```



- [ ] 1
- [ ] 2
- [ ] 3
- [X] 4

### Représentation de données : Types construits (Première) - Tableau indexé
n°259
<br>
Soit la fonction **foo** suivante :<br>
```{.quiz}
def foo(a):return (a[1],a[-1])
```
Que renvoie ? <br>
```{.quiz}
foo(['chat','chien','cheval'])
```



- [ ] ('chat','cheval')
- [ ] ('chat','chien')
- [X] ('chien','cheval')
- [ ] Error : index -1 out of range

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°266
<br>
On a importé un fichier `csv` contenant les notes d’élèves dans une liste de listes nommée `liste_eleves`.<br>
Le premier élément de chaque ligne est le nom de l’élève, le deuxième est sa note au premier devoir et le troisième sa note au deuxième devoir.<br>
Quel code python permet d’obtenir la liste des noms des élèves ayant eu strictement plus de 15 au deuxième devoir ?



- [ ] `[eleve for eleve in liste_eleves if eleve[2] &gt; 15]`
- [X] `[eleve[0] for eleve in liste_eleves if eleve[2] &gt; 15]`
- [ ] `[eleve for eleve in liste_eleves if eleve[3] &gt; 15]`
- [ ] `[eleve[0] in liste_eleves if eleve[2] &gt; 15]`

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°272
<br>
Soit la liste **lst** suivante :<br>
```{.quiz}
lst = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
Que va renvoyer le code suivant :<br>
```{.quiz}
[a[0] for a in lst if a[1] % 2 == 0]
```



- [ ] [123, 456, 789]
- [ ] [2, 8]
- [X] [1, 7]
- [ ] [1, 4, 7]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°273
<br>
Soit la liste **lst** suivante :<br>
```{.quiz}
lst = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
Que va renvoyer le code suivant :<br>
```{.quiz}
[a[1] + 10 for a in lst]
```



- [ ] [[11, 12, 13], [14, 15, 16], [17, 18, 19]]
- [ ] [[1, 2, 10, 3], [4, 5, 10, 6], [7, 8, 10, 9]]
- [X] [12, 15, 18]
- [ ] [11, 14, 17]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°274
<br>
Soit la liste **lst** suivante :<br>
```{.quiz}
lst = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
Que va renvoyer le code suivant :<br>
```{.quiz}
[lst[i][i] for i in [0, 1, 2]]
```



- [X] [1, 5, 9]
- [ ] [[1], [5], [9]]
- [ ] [2, 5, 8]
- [ ] [[2], [5], [8]]

### Représentation de données : Types construits (Première) - Tableau indexé
n°275
<br>
On considère le programme suivant :<br>
```{.quiz}
liste = [1, 4, 5, 2]  
liste[2] = liste[2] + liste[0] + liste[1]  
liste[0] = liste[1] + liste[2]  
```
Que vaut liste[0]?



- [ ] 9
- [ ] 10
- [ ] 11
- [X] 14

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°276
<br>
Quelle est la valeur de :<br>
```{.quiz}
 [x+1 for x in range(10) if x%3 != 0] ?
```



- [X] [2, 3, 5, 6, 8, 9]
- [ ] [2, 3, 5, 6, 8, 9, 11]
- [ ] [1, 4, 7, 10]
- [ ] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

### Représentation de données : Types construits (Première) - p-uplet
n°277
<br>
On considère un n-uplet `t = (2, 5, 9)`. Quelle commande permet de remplacer la valeur 5 par 10 ?



- [ ] t[1] = 10
- [ ] t(1) = 10
- [ ] t[2] = 10
- [X] Aucune des commandes ci-dessus.

### Représentation de données : Types construits (Première) - Tableau indexé
n°278
<br>
On considère la fonction suivante qui prend une liste de nombre et détermine si elle est ordonnée.<br>
```{.quiz}
def dans_l_ordre(liste):  
    for i in range(len(liste)):  
        if liste[i] &gt; liste[i+1]:  
            return False  
    return True  
```
Laquelle de ces instructions provoque une erreur ?



- [ ] `dans_l_ordre([5, 4, 3, 2, 1])`
- [ ] `dans_l_ordre([])`
- [ ] `dans_l_ordre([1, 2, 3, 5, 4])`
- [X] `dans_l_ordre([1, 2, 3, 4, 5])`

### Représentation de données : Types construits (Première) - Tableau indexé
n°279
<br>
On considère la fonction suivante, qui prend en entrée deux listes de même longueur.<br>
```{.quiz}
**def** inconnu(liste1, liste2):  
    nouvelle_liste = []  
    **for** i in range(len(liste1)):  
        if liste2[i] == 1:  
            nouvelle_liste.append(liste1[i])  
    **return** nouvelle_liste  
```
Lequel des appels suivants donne le résultat [3, 7]?



- [ ] `inconnu([3, 5, 1, 7, 2],[3, 5, 1, 7, 2])`
- [ ] `inconnu([1, 0, 0, 1, 0],[3, 5, 1, 7, 2])`
- [X] `inconnu([3, 5, 1, 7, 2],[1, 0, 0, 1, 0])`
- [ ] `inconnu([3, 5, 1, 7, 2],[1, 0, 7, 0, 0])`

### Représentation de données : Types construits (Première) - Tableau indexé
n°283
<br>
Soit le code suivant :<br>
```{.quiz}
prenom = ['Jean', 'Leon', 'Paul', 'Milo']  
p = prenom[-1][-1]  
```
Quelle valeur est associée à la variable p ?



- [ ] J
- [ ] n
- [ ] M
- [X] o

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°297
<br>
Voici un dictionnaire de langues :  <br>
dico={'anglais':'english','allemand':'deutsch','breton':'brezhoneg'}<br>
```{.quiz}
Quelle est la valeur de dico[1] ?  
```



- [X] rien car l'expression est invalide
- [ ] english
- [ ] allemand
- [ ] deutch

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°298
<br>
Voici un dictionnaire de langues :  <br>
```{.quiz}
dico={'anglais':'english','allemand':'deutsch','breton':'brezhoneg'}
```
on souhaite ajouter une langue en plus et obtenir le dictionnaire suivant :<br>
```{.quiz}
dico={'anglais':'english','allemand':'deutsch','breton':'brezhoneg','espagnol':'español'}
```
Quelle instruction permet d'ajouter le dernier élément 'espagnol':'español' dans le dictionnaire ?



- [ ] Ce n'est pas possible car un dictionnaire n'est pas modifiable
- [ ] dico.append('espagnol':'español')
- [X] dico['espagnol']='español'
- [ ] dico+=['espagnol':'español']

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°299
<br>
Voici un dictionnaire de langues :  <br>
dico={'anglais':'english','allemand':'deutsch','breton':'brezhoneg'}<br>
```{.quiz}
for elem in dico.items():  
    print(elem, end=' ')  
```
Quel est l'affichage lors de l'exécution du code précédent ?



- [ ] anglais allemand breton
- [ ] english deutsch brezhoneg
- [X] ('anglais', 'english') ('allemand', 'deutsch') ('breton', 'brezhoneg')
- [ ] une erreur

### Représentation de données : Types construits (Première) - Tableau indexé
n°301
<br>
On considère le tableau `t` suivant.<br>
```{.quiz}
 t = [('Béatrice', 15), ('Jean', 17), ('Marie', 16)]
```
 Que vaut l'expression `t[2][1]` ?



- [ ] 'Jean'
- [ ] ('Jean', 17)
- [ ] 'Marie'
- [X] 16

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°302
<br>
Quelle est la valeur de `[x+2 for x in range(10) if x%2 !=0]` ?



- [ ] [2, 3, 4, 5, 6, 7 ,8 , 9, 10, 11, 12]
- [ ] [2, 4, 6, 8, 10]
- [X] [3, 5, 7, 9, 11]
- [ ] [1, 3, 5, 7, 9]

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°304
<br>
Qu'affiche le programme suivant ?<br>
```{.quiz}
rep = {'Jean': 123, 'Jenifer': 124, 'Samuel': 125, 'Lisa': 126}  
rep['Clara'] = 127  
for cle in rep.keys():  
    print(cle)  
```



- [ ] 'Clara'
- [X] 'Jean', 'Jenifer', 'Samuel', 'Lisa' et 'Clara'
- [ ] 127
- [ ] 123, 124, 125, 126 et 127

### Représentation de données : Types construits (Première) - Tableau indexé
n°305
<br>
Quel est le tableau `t` construit par les instructions suivantes ?<br>
```{.quiz}
t = [0]*10  
for i in range(10):  
    t[i] = i  
```



- [ ] 
```{.quiz}
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```
- [ ] 
```{.quiz}
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
- [ ] 
```{.quiz}
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
- [X] 
```{.quiz}
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°306
<br>
Quel est le tableau construit par l'instruction suivante ?<br>
```{.quiz}
t = [i%2 for i in range(20)]
```



- [ ] 
```{.quiz}
[0, 1, 2, 3, ..., 20]
```
- [ ] 
```{.quiz}
[0, 2, 4, 6, 8, ..., 18]
```
- [X] 
```{.quiz}
[0, 1, 0, 1, 0, 1, ..., 1]
```
- [ ] 
```{.quiz}
[1, 0, 1, 0, 1, 0, ..., 0]
```

### Représentation de données : Types construits (Première) - p-uplet
n°309
<br>
Qu’affiche le programme suivant ?  <br>
```{.quiz}
tuple=(1,5,7,9,10,15)  
print('tuple[5] = ',tuple[5])  
```



- [ ] tuple[5] = 5
- [ ] tuple[5] = ‘5’
- [X] tuple[5] = 15
- [ ] tuple[5] = 10

### Représentation de données : Types construits (Première) - p-uplet
n°310
<br>
Qu’affiche le programme suivant?  <br>
```{.quiz}
tuple=(1,5,7,9,10,15)  
print('tuple=',Tuple)  
```



- [ ] (1,5,7,9,10,15)
- [X] NameError:name ‘Tuple’ is not defined
- [ ] Tuple
- [ ] 5

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°311
<br>
Qu’affiche le programme suivant ?  <br>
```{.quiz}
tableau=[[0 for i in range(0,10)] for j in range(0,10)]  
print(tableau)  
```



- [ ] tableau
- [X] [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
- [ ] [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
- [ ] Aucune de ces propositions n’est correcte

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°312
<br>
Qu’affiche le programme suivant ?  <br>
```{.quiz}
tableau=[[0 for i in range(0,10)] for j in range(0,10)]  
for i in range(0,10):  
    for j in range(i,10):  
        tableau[i][j]=i*j  
print(tableau[3][1])  
```



- [ ] 6
- [ ] 3
- [X] 0
- [ ] 1

### Représentation de données : Types construits (Première) - p-uplet
n°313
<br>
Qu’affiche le programme suivant ?  <br>
```{.quiz}
tuple=(1,5,7,9,10,15)  
tuple[5]=2  
print('tuple=',tuple)  
```



- [ ] (1,2,7,9,10,15)
- [ ] (1,5,7,9,10,2)
- [X] TypeError :’tuple’ object does not support item assignment
- [ ] (1,5,7,9,2,15)

### Représentation de données : Types construits (Première) - Tableau indexé
n°314
<br>
Combien de valeurs affiche le programme suivant ?  <br>
```{.quiz}
tableau=[[0 for i in range(0,2)] for j in range(0,2)]  
for i in range(0,2):  
    for j in range(i,2):  
        tableau[i][j]=i*j  
for i in range(0,2):  
    #for j in range(i,2):  
    print(tableau[i][j])  
```



- [ ] 4
- [ ] 3
- [X] 2
- [ ] Aucune de ces propositions n’est correcte

### Représentation de données : Types construits (Première) - p-uplet
n°315
<br>
Soit une liste nommée  bizarre = [1,[2,3],[4,5],6,7].Que vaut  len(bizarre) ?



- [ ] 1
- [ ] 3
- [X] 5
- [ ] 7

### Représentation de données : Types construits (Première) - Autres
n°316
<br>
On a saisi le code suivant :<br>
```{.quiz}
lst =[3*n for n in range (4)]   
```
Que contient la liste lst à la fin de l’exécution de ce script ?



- [ ] [0,3,6,9,12,15]
- [ ] [0,3,6,9,12]
- [X] [0,3,6,9]
- [ ] [0,3,6]

### Représentation de données : Types construits (Première) - Autres
n°317
<br>
On a saisi le code suivant :<br>
```{.quiz}
variable = [8,12,-7,52,-5,32]  
lst = [n for n in variable if n &lt;12]   
```
Que contient la liste lst à la fin de l’exécution de ce script ?



- [X] [8, -7, -5]
- [ ] [8,12,-7,52,-5,32]
- [ ] [True, False, True, False, True, False]
- [ ] [8]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°323
<br>
Quel est le résultat de l'évaluation de l'expression suivante en python :<br>
```{.quiz}
[2 * n + 1 for n in range(10)]  
```



- [ ] [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
- [X] [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
- [ ] [21, 31, 41, 51, 61, 71, 81, 101, 121]
- [ ] [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]

### Représentation de données : Types construits (Première) - Tableau indexé
n°324
<br>
Quelle est la valeur de la variable `tab` à l'issue de l'évaluation du code suivant :<br>
```{.quiz}
tab = ['a', 'b', 'c', 'd']  
tab[2] = 'z'
```



- [ ] ['a', 'z', 'c', 'd']
- [X] ['a', 'b', 'z', 'd']
- [ ] ['a', 'z', 'b', 'c', 'd']
- [ ] ['a', 'b', 'z', 'c', 'd']

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°325
<br>
Quel est le tableau construit par l'instruction suivante ?<br>
```{.quiz}
tab = [2**i for i in range(1,5)]   
```



- [ ] 
```{.quiz}
[0, 2, 4, 8, 16]
```
- [ ] 
```{.quiz}
[2, 4, 6, 8]
```
- [X] 
```{.quiz}
[2, 4, 8, 16]
```
- [ ] 
```{.quiz}
[2, 4, 8, 16, 32]
```

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°326
<br>
Quel est le tableau `t` construit par les instructions suivantes ?<br>
```{.quiz}
tab = [1, 2, -3, 7, 4, 10, -1, 0]  
t = [e for e in tab if e &gt;= 0]  
```



- [X] 
```{.quiz}
t = [1, 2, 7, 4, 10, 0]
```
- [ ] 
```{.quiz}
t = [e, e, e, e, e, e]
```
- [ ] 
```{.quiz}
t = [1, 2, 7, 4, 10]
```
- [ ] 
```{.quiz}
t = [-3, -1, 0]
```

### Représentation de données : Types construits (Première) - Tableau indexé
n°337
<br>
On considère la fonction suivante.<br>
```{.quiz}
def mystere(tab):  
    '''tab est un tableau non vide de nombres réels'''  
    n = 0  
    for x in tab:  
        if x &gt;= 10:  
            n = n + 1  
    return n/len(tab)  
```
Que renvoie l'expression `mystere([14.5, 8, 12, 10, 5, 15.5, 17, 7])` ?



- [ ] 
```{.quiz}
[14.5, 12, 10, 15.5, 17]
```
- [X] 
```{.quiz}
0.625
```
- [ ] 
```{.quiz}
8.625
```
- [ ] 
```{.quiz}
5
```

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°338
<br>
On considère le dictionnaire `repertoire` suivant.<br>
```{.quiz}
repertoire = {'Marc':'0101', 'Virginie':'0202', 'Justine':'0303'}
```
Que renvoie l'instruction `'0202' in repertoire` ?



- [X] 
```{.quiz}
False
```
- [ ] 
```{.quiz}
True
```
- [ ] 
```{.quiz}
'Virginie'
```
- [ ] 
```{.quiz}
'Virginie':'0202'
```

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°339
<br>
On considère le tableau `t` suivant.<br>
```{.quiz}
t = [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]]
```
Quelle est la valeur de `t[1][2]` ?



- [ ] 1
- [ ] 3
- [X] 4
- [ ] 2

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°350
<br>
Recherche dans un dictionnaire :  <br>
On dispose d'un dictionnaire et d'un ensemble :<br>
```{.quiz}
T = {'Bill': '06 05 04 03 02', 'Roger': '06 12 11 13 20', 'Marilla': '07 00 01 02 03', 'James': '07 00 70 00 70'}  
ns = {x for x in T if T[x][:2] == '06'}  
```
Que contient ns à la fin de l’exécution de ce script ?



- [ ] {'06'}
- [ ] {'06 05 04 03 02', '06 12 11 13 20'}
- [ ] {'Bill' : '06 05 04 03 02', 'Roger': '06 12 11 13 20'}
- [X] {'Bill', 'Roger'}

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°351
<br>
Recherche dans un dictionnaire :  <br>
On dispose du dictionnaire suivant :<br>
```{.quiz}
Tel = {'Bill': '06 05 04 03 02', 'Roger': '06 12 11 13 20'}  
```
Comment obtenir la liste des numéros de téléphones ?



- [ ] 
```{.quiz}
list(Tel)
```
- [X] 
```{.quiz}
list(Tel.values())
```
- [ ] 
```{.quiz}
list(Tel.keys())
```
- [ ] 
```{.quiz}
list(Tel.items())
```

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°352
<br>
Extraction d'une valeur :  <br>
On a saisi le code suivant :<br>
```{.quiz}
Tel = {'Bill': '06 05 04 03 02', 'Roger': '06 12 11 13 20', 'Marilla': '07 01 02 03 04'}  
```
Quelle est la valeur de <br>
```{.quiz}
Tel[1]
```
 ?



- [ ] 
```{.quiz}
'Bill'
```
- [ ] 
```{.quiz}
'06 05 04 03 02'
```
- [ ] 
```{.quiz}
'B'
```
- [X] Rien

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°353
<br>
Modification d'un dictionnaire :  <br>
On dispose du dictionnaire <br>
```{.quiz}
dico = {'Bill': '06 05 04 03 02', 'Roger': '06 12 11 13 20'}
```
. Quelle instruction permet de modifier le dictionnaire de façon à ce que sa nouvelle valeur soit <br>
```{.quiz}
{'Bill': '06 05 04 03 02', 'Roger': '06 12 11 13 20', 'Marilla': '07 01 02 03 04'}
```
 ?



- [X] 
```{.quiz}
dico['Marilla'] = '07 01 02 03 04'
```
- [ ] 
```{.quiz}
dico.append('Marilla', '07 01 02 03 04')
```
- [ ] 
```{.quiz}
dico['Marilla'] += '07 01 02 03 04'
```
- [ ] ce n'est pas possible car un dictionnaire n'est pas modifiable

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°354
<br>
Boucle et dictionnaire :  <br>
On dispose du dictionnaire suivant :<br>
```{.quiz}
dico = {'Bill': '06 05 04 03 02', 'Roger': '06 12 11 13 20'}  
```
Quels sont les affichages possibles lors de l'exécution de ce code ?  <br>
```{.quiz}
for truc in dico.items():  
    print(truc, end=' ')  
```



- [ ] 
```{.quiz}
Bill Roger  
```
- [ ] 
```{.quiz}
06 05 04 03 02 06 12 11 13 20  
```
- [X] 
```{.quiz}
('Bill', '06 05 04 03 02') ('Roger', '06 12 11 13 20')  
```
- [ ] 
```{.quiz}
Bill end  
Roger end  
```

### Représentation de données : Types construits (Première) - p-uplet
n°356
<br>
Exemple de question :  <br>
On a saisi le code suivant :<br>
```{.quiz}
t = (1, 2, 3, (2, 3, 4), 5, 6)  
len(t)  
```
Que renvoie l’exécution de ce script ?



- [X] 6
- [ ] 8
- [ ] 5
- [ ] 3

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°370
<br>
Liste en compréhension  <br>
Quelle instruction permet d'obtenir une liste contenant les points de code des voyelles de la chaîne de caractères `chaine` ?



- [ ] 
```{.quiz}
[append(ord(c)) for c in chaine if c in 'aeiouy']
```
- [ ] 
```{.quiz}
[append(ord(c)) if c in 'aeiouy' for c in chaine]
```
- [X] 
```{.quiz}
[ord(c) for c in chaine if c in 'aeiouy']
```
- [ ] 
```{.quiz}
[ord(c) if c in 'aeiouy' for c in chaine]
```

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°399
<br>
On a saisi le code suivant :<br>
```{.quiz}
matrice = [3*[0] for i in range (3)]  
for i in range(3):  
    for j in range(3):  
        matrice[i][j] = i + j  
        if (i == j):  
            matrice[i][j]=2 * matrice[i][j]  
```
Que contient la variable matrice à la fin de l’exécution de ce script ?



- [ ] 
```{.quiz}
 [[0, 1, 2], [1, 2, 3], [2, 3, 4]] 
```
- [ ] 
```{.quiz}
 [[1, 2, 3], [2, 3, 4], [3, 4, 5]] 
```
- [X] 
```{.quiz}
 [[0, 1, 2], [1, 4, 3], [2, 3, 8]] 
```
- [ ] 
```{.quiz}
 [[1, 2, 3], [2, 9, 4], [3, 4, 25]] 
```

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°425
<br>
On considère la fonction suivante dont la fin est manquante.<br>
```{.quiz}
def mois(n) :  
    '''  
    Transforme un mois donné sous forme d'un entier en une chaîne de caractères où le mois est écrit en toutes lettres.  
    param n : (int) entier compris entre 1 et 12 correspondant à un mois de l'année  
    return (str) : chaîne de caractères correspondant au mois en toutes lettres  
    '''  
    dico1 = {1: 'Janv.', 2: 'Fév.', 3: 'Mars', 4: 'Avr.', 5: 'Mai', 6: 'Juin',  
             7: 'Juil.', 8: 'Aout', 9: 'Sept.', 10: 'Oct.', 11: 'Nov.', 12: 'Déc.'}  
    dico2 = {'Janv.': 1, 'Fév.': 2,'Mars': 3, 'Avr.': 4, 'Mai': 5, 'Juin': 6,  
             'Juil.': 7, 'Aout': 8, 'Sept.': 9, 'Oct.': 10, 'Nov.': 11, 'Déc.':  12}  
    return ...  
```
Par quel code faut-il remplacer les … après le `return` pour que la fonction soit correcte ?



- [ ] dico1(n)
- [ ] mois
- [X] dico1[n]
- [ ] dico2{n}

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°426
<br>
Liste :  <br>
Voici un programme Python :<br>
```{.quiz}
mat = [[6, 7], [8, 9], [10, 11]]  
for i in range(len(mat)):  
    print(mat[i])  
```
Quelle est la séquence imprimée ?



- [ ] 6     8     10
- [ ] 7     9     11
- [X] [6, 7]     [8, 9]     [10, 11]
- [ ] 6     7     8     9     10     11

### Représentation de données : Types construits (Première) - Tableau indexé
n°430
<br>
Liste et drapeau :  <br>
On a saisi le code suivant :<br>
```{.quiz}
def mystere(liste):  
    drapeau = True  
    for val in liste:  
        if val % 2 == 0:  
            drapeau = False  
    return drapeau  
```
Quels booléens retournent les appels `mystere([11, 7, 13])` et `mystere([8, 6, 1])` ?



- [ ] `mystere([11, 7, 13])` retourne True et  
`mystere([8, 6, 1])` retourne True
- [X] `mystere([11, 7, 13])` retourne True et  
`mystere([8, 6, 1])` retourne False
- [ ] `mystere([11, 7, 13])` retourne False et  
`mystere([8, 6, 1])` retourne True
- [ ] `mystere([11, 7, 13])` retourne False et  
`mystere([8, 6, 1])` retourne False

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°431
<br>
Découverte des listes par compréhension  <br>
Pour créer une liste de 100 éléments de valeur 0 il faut écrire :



- [ ] [0 for i in 100]]
- [X] [0 for i in range(100)]
- [ ] [i for i in range(100)]
- [ ] rien, en python il n'est pas nécessaire de déclarer un liste

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°432
<br>
Que génère cette liste :  <br>
[i+1 for i in range(0,10)]



- [ ] [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- [ ] [1, 2, 3, 4, 5, 6, 7, 8, 9]
- [X] [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- [ ] rien, car on ne peut pas modifier la valeur de i.

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°433
<br>
Que génère cette liste : [i for i in range(0,10,2)] ?



- [ ] [0, 2, 3, 4, 5, 6, 7, 8, 9]
- [X] [0, 2, 4, 6, 8]
- [ ] [10, 8, 6, 4, 2]
- [ ] [2, 3, 4, 5, 6, 7, 8, 9]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°434
<br>
[5, 6, 7, 8, 9]   <br>
Pour générer cette liste que faut-il écrire ?



- [ ] [i for i in range(10,0,2)]
- [X] [i for i in range(5,10)]
- [ ] [i for i in range(5,9)]
- [ ] [i+4 for i in range(1,10)]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°435
<br>
[0, 5, 10, 15, 20]  <br>
Parmi ces trois propositions, laquelle ne génère pas la liste ci-dessus ?



- [ ] [i for i in range(0,25,5)]
- [ ] [i\*4+i for i in range(0,5)]
- [ ] [i\*5 for i in range(0,5)]
- [X] [i//2 for i in range(0,25,10)]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°436
<br>
Si on saisit les lignes suivantes dans la console :  <br>
```{.quiz}
maListe = [10, 5, 8]  
[i*4 for i in maListe]  
```
Que renvoie l’exécution de ce script ?



- [ ] [40, 20]
- [ ] [20, 32, 40]
- [X] [40, 20, 32]
- [ ] [[40, 20, 32]]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°437
<br>
[i for i in range (20) if i &gt; 10 and i % 2 == 1]  <br>
Que génère cette liste ?



- [ ] [9, 11, 13, 15, 17, 19]
- [ ] [10, 12, 14, 16, 18]
- [ ] [11, 12, 13, 14, 15, 16, 17, 18, 19]
- [X] elle génère la même chose que [i for i in range (11,20,2)]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°438
<br>
Les Années Bissextiles<br>
Une année bissextile est divisible par 4 et non par 100 ou est divisible par 400.<br>
Écrire une liste qui génère les années bissextiles de 1890 jusqu'en 2120.



- [X] 
```{.quiz}
[i for i in range(1890, 2121) if i%4==0 and not i%100==0 or i%400==0]
```
- [ ] 
```{.quiz}
[i for i in range(1890, 2121) if i%4==0 and not i%100==0 and i%400==0]
```
- [ ] 
```{.quiz}
[i for i in range(1890, 2121) if i%4==0 or not i%100==0 or i%400==0]
```
- [ ] 
```{.quiz}
[i for i in range(1890, 2121, 4) if not i%100==0 or i%400==0]
```

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°439
<br>
```{.quiz}
def myProg(n):  
    return [d for d in range(1,n+1) if n%d==0]  
```
Que fait ce programme si l'on tape dans la console la commande (plusieurs réponses) :<br>
```{.quiz}
myProg(2020)
```



- [ ] [1, 2, 2, 5, 101]
- [X] [1, 2, 4, 5, 10, 20, 101, 202, 404, 505, 1010, 2020]
- [ ] [1, 2, 4, 5, 10, 20, 101, 202, 404, 505, 1010]
- [ ] [1, 2, 4, 5, 101]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°440
<br>
On a saisi le code suivant :<br>
```{.quiz}
def myProg(aListe,anotherListe):  
    return [x for x in aListe if x in anotherListe]  
```
Que retourne la console lorsqu'on saisit :<br>
```{.quiz}
myProg([i for i in range(10)],[2,3,5,7,11,13,17,19])
```



- [ ] []
- [ ] [1, 2, 4, 5, 7]
- [X] [2, 3, 5, 7]
- [ ] [2, 5, 10]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°441
<br>
[chr(i) for i in range(97,123)]  <br>
Que génère cette liste ?



- [ ] [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]
- [X] ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
- [ ] [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123]
- [ ] ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y']

### Représentation de données : Types construits (Première) - Tableau indexé
n°466
<br>
On définit : L = [1,2,3,4,5,6]<br>
Quelle est la valeur de L[3] ?



- [ ] [1,2,3]
- [ ] 3
- [X] 4
- [ ] [4,5,6]

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°467
<br>
On définit : T = [[1,2,3], [4,5,6], [7,8,9]]<br>
Laquelle des expressions suivantes a pour valeur 7 ?



- [ ] T[3,1]
- [ ] T[3][1]
- [ ] T[2,0]
- [X] T[2][0]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°468
<br>
Quelle est la valeur de l'expression [(i,i+1) for i in range(2)] ?



- [ ] [0,1,1,2]
- [ ] [(1,2),(2,3)]
- [X] [(0,1),(1,2)]
- [ ] [[0,1],[1,2]]

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°469
<br>
Quelle est l'expression qui a pour valeur la liste [1,4,9,16,25,36] ?



- [ ] { n\*n for n in range(1,7) }
- [ ] { n\*n for n in range(6) }
- [X] [ n\*n for n in range(1,7) ]
- [ ] [ n\*n for n in range(6) ]

### Représentation de données : Types construits (Première) - Tableau indexé
n°470
<br>
Si la variable note est définie par  note = ['do','ré','mi','fa','sol','la','si'] alors :



- [ ] l'index de 'sol' est 5
- [ ] l'index de note est 0
- [ ] l'index de 'si' est 7
- [X] l'index de 'mi' est 2

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°471
<br>
On définit une grille G remplie de 0, sous la forme d'une liste de listes, où toutes les sous-listes ont le même nombre d'éléments.<br>
G = [ [0, 0, 0, …, 0],<br>
[0, 0, 0, …, 0],<br>
[0, 0, 0, …, 0],<br>
……<br>
[0, 0, 0, …, 0] ]<br>
On appelle *hauteur* de la grille le nombre de sous-listes contenues dans G et *largeur* de la grille le nombre d'éléments dans chacune de ces sous-listes. Comment peut-on les obtenir ?



- [ ] hauteur = len(G[0])
largeur = len(G)
- [X] hauteur = len(G)
largeur = len(G[0])
- [ ] hauteur = len(G[0])
largeur = len(G[1])
- [ ] hauteur = len(G[1])
largeur = len(G[0])

### Représentation de données : Types construits (Première) - Autres
n°583
<br>
On exécute le script suivant :<br>
```{.quiz}
L = [12,0,8,7,3,1,5,3,8]  
a = [elt for elt in L if elt&lt;4]
```
Quelle est la valeur de a à la fin de son exécution ?



- [ ] 
```{.quiz}
[12,0,8]
```
- [ ] 
```{.quiz}
[12,0,8,7]
```
- [X] 
```{.quiz}
[0,3,1,3]
```
- [ ] 
```{.quiz}
[0,3,1]
```

### Représentation de données : Types construits (Première) - Autres
n°584
<br>
Quelle est la valeur de l'expression suivante ?<br>
```{.quiz}
[ 2*k + 1 for k in range(4) ]
```



- [X] 
```{.quiz}
[1,3,5,7]
```
- [ ] 
```{.quiz}
[0,1,2,3]
```
- [ ] 
```{.quiz}
[3,5,7,9]
```
- [ ] 
```{.quiz}
[1,2,3,4]
```

### Représentation de données : Types construits (Première) - Autres
n°585
<br>
On définit ainsi une liste `M` :<br>
```{.quiz}
M = [['A','B','C','D'], ['E','F','G','H'], ['I','J','K','L']]
```
Que vaut l'expression suivante ?<br>
```{.quiz}
M[2][1]
```



- [ ] 
```{.quiz}
'G'
```
- [X] 
```{.quiz}
'J'
```
- [ ] 
```{.quiz}
'E'
```
- [ ] 
```{.quiz}
'B'
```

### Représentation de données : Types construits (Première) - Autres
n°586
<br>
Quel est le résultat de l'évaluation de l'expression Python suivante ?<br>
```{.quiz}
[ n * n for n in range(10) ]
```



- [X] [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
- [ ] [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
- [ ] [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
- [ ] [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

### Représentation de données : Types construits (Première) - Autres
n°587
<br>
On définit `L = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]`.  <br>
Quelle est la valeur de L[0][2] ?



- [ ] 2
- [X] 3
- [ ] 11
- [ ] 12

### Représentation de données : Types construits (Première) - Autres
n°588
<br>
On définit le tableau `t = [[1,5,7], [8,4,2], [3,9,6]]`<br>
Quel jeu d'indices permet d'obtenir l'élément '9' de ce tableau ?



- [ ] t[3][2]
- [ ] t[2][3]
- [ ] t[1][2]
- [X] t[2][1]

### Représentation de données : Types construits (Première) - Autres
n°625
<br>
On crée la liste suivante :<br>
t = [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ]<br>
Que vaut t[1][2] :



- [ ] 2
- [X] 7
- [ ] 10
- [ ] on obtient un message d'erreur 'indexError : list index out of range'

### Représentation de données : Types construits (Première) - Autres
n°626
<br>
On définit :<br>
dico = {'Herve': 15, 'Kevin':17, 'Fatima':16}<br>
qui associe nom et âge de trois élèves.<br>
Comment accéder à l'âge de Kevin ?



- [ ] dico[1]
- [ ] dico[Kevin]
- [X] dico['Kevin']
- [ ] dico('Kevin')

### Représentation de données : Types construits (Première) - Autres
n°627
<br>
L est une liste d'entiers.<br>
On définit la fonction suivante :<br>
```{.quiz}
def f(L):
    m = L[0]
    for x in L:
        if x &gt; m:
            m = x
    return m
```
Que calcule cette fonction ?



- [X] le maximum de la liste L passée en argument
- [ ] le minimum de la liste L passée en argument
- [ ] le premier terme de la liste L passée en argument
- [ ] le dernier terme de la liste L passée en argument

### Représentation de données : Types construits (Première) - Autres
n°628
<br>
Après l'affectation suivante :<br>
```{.quiz}
alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',  
             'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
```
quelle est l'expression qui permet d'accéder à la lettre E ?



- [ ] alphabet.E
- [ ] alphabet['E']
- [X] alphabet[4]
- [ ] alphabet[5]

### Représentation de données : Types construits (Première) - Autres
n°629
<br>
Parmi les propositions suivantes, laquelle permet de créer en Python la liste des nombres impairs de 1 à 399 (inclus) ?



- [X] `impairs = [1 + nb*2 for nb in range(200)]`
- [ ] 
```{.quiz}
for nb in range(400) :
    impairs = 1 + 2 * nb
```
- [ ] `impairs = [i + 2 for i in range(1,200)]`
- [ ] `impairs = [1, 3, 5, 7, 9] * 40`

### Représentation de données : Types construits (Première) - Autres
n°630
<br>
On définit la liste L ainsi :<br>
L = [ [1], [1,2], [1,2,3] ]<br>
Des égalités suivantes, une seule est fausse. Laquelle ?



- [ ] len(L[0]) == 1
- [X] len(L) == 6
- [ ] len(L[2]) == 3
- [ ] L[2][2] == 3

### Représentation de données : Types construits (Première) - Autres
n°667
<br>
Quelle est la valeur de la variable S à la fin de l'exécution du script suivant ?<br>
```{.quiz}
res = [ [1,2,3], [4,5,6], [7,8,9] ]  
S = 0  
for i in range(3):  
    S = S + res[i][2]
```



- [ ] 12
- [ ] 15
- [X] 18
- [ ] 24

### Représentation de données : Types construits (Première) - Autres
n°668
<br>
On définit la variable suivante : citation = 'Les nombres gouvernent le monde'.<br>
Quelle est la valeur de l'expression citation[5:10] ?



- [X] 'ombre'
- [ ] 'ombres'
- [ ] 'nombre'
- [ ] 'nombres'

### Représentation de données : Types construits (Première) - Autres
n°669
<br>
On définit : t = [2, 8, 9, 2]<br>
Quelle est la valeur de l'expression [ x\*x for x in t ] ?



- [ ] une erreur
- [ ] [[2, 8, 9, 2], [2, 8, 9, 2]]
- [ ] [2, 8, 8, 9, 9, 9, 2, 2, 2, 2]
- [X] [4, 64, 81, 4]

### Représentation de données : Types construits (Première) - Autres
n°670
<br>
On considère le code suivant :<br>
```{.quiz}
def s(tuple1, tuple2):  
    (x1,y1) = tuple1  
    (x2,y2) = tuple2  
    return (x1+x2, y1+y2)
```
Que renvoie l'appel s((1,3), (2,4)) ?



- [X] le tuple (3,7)
- [ ] le tuple (4,6)
- [ ] un entier
- [ ] une erreur

### Représentation de données : Types construits (Première) - Autres
n°671
<br>
Soient n et p deux entiers au moins égaux à 2. On définit une liste de listes t par le code suivant :<br>
```{.quiz}
#n et p sont initialisés dans les lignes précédentes  
t = [ [ 0 for j in range(p) ] for i in range(n) ]  
for k in range(n*p):  
    t[k%n][k%p] = k
```
Une et une seule des affirmations suivantes est **fausse**. Laquelle ?



- [ ] La liste t contient des entiers \(k\) tels que \(0 \leq k &lt; n \times p\).
- [ ] Pour tout \(j\) tel que \(0 \leq j &lt; n - 1\), t[j][0] est un multiple de \(p\).
- [ ] La liste t[0] contient des entiers qui sont tous multiples de \(n\).
- [X] Pour tout \(j\) tel que \(0 \leq j &lt; n - 1\), t[0][j] est un multiple de \(p\).

### Représentation de données : Types construits (Première) - Autres
n°672
<br>
On définit : L = [10,9,8,7,6,5,4,3,2,1].<br>
Quelle est la valeur de L[L[3]] ?



- [X] 3
- [ ] 4
- [ ] 7
- [ ] 8

### Représentation de données : Types construits (Première) - Autres
n°709
<br>
On définit la liste L ainsi :<br>
L = [ [1], [1,2], [1,2,3] ]<br>
Des égalités suivantes, une seule est fausse. Laquelle ?



- [ ] len(L[0]) == 1
- [X] len(L) == 6
- [ ] len(L[2]) == 3
- [ ] L[2][2] == 3

### Représentation de données : Types construits (Première) - Autres
n°710
<br>
Laquelle des expressions suivantes a-t-elle pour valeur la liste des carrés des premiers entiers qui ne sont **pas** multiples de 5 ?



- [ ] [x\*x for x in range (11) if x//5 != 0]
- [ ] [x\*x if x%5 != 0 for x in range (11)]
- [ ] [x\*x if x//5 != 0 for x in range (11)]
- [X] [x\*x for x in range (11) if x%5 != 0]

### Représentation de données : Types construits (Première) - Autres
n°711
<br>
L est une liste d'entiers.<br>
On définit la fonction suivante :<br>
```{.quiz}
def f(L):  
    m = L[0]  
    for x in L:  
        if x &gt; m:  
            m = x  
    return m  
```
Que calcule cette fonction ?



- [X] le maximum de la liste L passée en argument
- [ ] le minimum de la liste L passée en argument
- [ ] le premier terme de la liste L passée en argument
- [ ] le dernier terme de la liste L passée en argument

### Représentation de données : Types construits (Première) - Autres
n°712
<br>
On exécute le code suivant :<br>
```{.quiz}
placard = { 'chemise': 3, 'pantalon': 6, 'tee shirt': 7 }  
placard['chaussette'] = 4  
placard['chemise'] = 5  
L = list(placard.values())  
```
Quelle est la valeur de la variable L à l'issue de cette exécution ?



- [ ] [ 3, 6, 7 ]
- [ ] [ 3, 6, 7, 4 ]
- [ ] [ 5, 6, 7 ]
- [X] [ 5, 6, 7, 4 ]

### Représentation de données : Types construits (Première) - Autres
n°713
<br>
Quelle est la valeur de l'expression [[i,2\*i] for i in range(3)] ?



- [ ] [0,0,1,2,2,4]
- [X] [[0,0],[1,2],[2,4]]
- [ ] [1,2,2,4,3,6]
- [ ] [[1,2],[2,4],[3,6]]

### Représentation de données : Types construits (Première) - Autres
n°714
<br>
On définit le dictionnaire dico par les instructions suivantes :<br>
```{.quiz}
def f(x):  
    return x*x  
def g(x):  
    return x + x  
def h(x):  
    return 3*x  
dico = { 'F': f, 'G': g(6), 'H': h }  
```
Une seule des affirmations suivantes est incorrecte. Laquelle ?



- [ ] dico['F'] est une fonction
- [ ] dico['F'](5) est un entier
- [X] dico['G'] est une fonction
- [ ] dico['G'] est un entier

### Représentation de données : Types construits (Première) - Autres
n°751
<br>
Après l'affectation suivante :<br>
```{.quiz}
alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
```
quelle est l'expression qui permet d'accéder à la lettre E ?



- [ ] alphabet.E
- [ ] alphabet['E']
- [X] alphabet[4]
- [ ] alphabet[5]

### Représentation de données : Types construits (Première) - Autres
n°752
<br>
On définit une liste**:** L = [1, 1, 2, 9, 3, 4, 5, 6, 7].<br>
Quelle expression a-t-elle pour valeur la liste [4, 16, 36] ?



- [ ] [(x \* x) % 2 == 0 for x in liste]
- [ ] [x for x in liste if x % 2 == 0]
- [ ] [x \* x for x in liste]
- [X] [x \* x for x in liste if x % 2 == 0]

### Représentation de données : Types construits (Première) - Autres
n°753
<br>
Que vaut l'expression [ 2\*k for k in range(5) ] ?



- [X] [0,2,4,6,8]
- [ ] [2,4,6,8,10]
- [ ] [1,2,4,8,16]
- [ ] [2,4,8,16,32]

### Représentation de données : Types construits (Première) - Autres
n°793
<br>
On considère le code suivant :<br>
```{.quiz}
def s(tuple1, tuple2):
    (x1,y1) = tuple1
    (x2,y2) = tuple2
    return (x1+x2, y1+y2)
```
Que renvoie l'appel s((1,3), (2,4)) ?



- [X] le tuple (3,7)
- [ ] le tuple (4,6)
- [ ] un entier
- [ ] une erreur

### Représentation de données : Types construits (Première) - Autres
n°794
<br>
Quelle est la valeur de l'expression [[0] \* 3 for i in range(2)] ?



- [ ] [[0,0], [0,0], [0,0]]
- [X] [[0,0,0], [0,0,0]]
- [ ] [[0.000], [0.000]]
- [ ] [[0.00], [0.00], [0.00]]

### Représentation de données : Types construits (Première) - Autres
n°795
<br>
On s'intéresse à la valeur 14 présente dans la liste suivante:<br>
L = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20]].<br>
Quelle expression vaut 14 parmi les suivantes ?



- [X] T[2][3]
- [ ] T[3][4]
- [ ] T[3][2]
- [ ] T[4][3]

### Représentation de données : Types construits (Première) - Autres
n°796
<br>
Quelle est la valeur affichée à l'exécution du programme Python suivant ?<br>
```{.quiz}
ports = { 'http': 80, 'imap': 142, 'smtp': 25 }
ports['ftp'] = 21
print(ports['ftp'])
```



- [ ] 3
- [X] 21
- [ ] { 'ftp': 21 }
- [ ] Key not found

### Représentation de données : Types construits (Première) - Autres
n°797
<br>
On définit : L = [1,2,3,4,5,6]<br>
Quelle est la valeur de L[3] ?



- [ ] [1,2,3]
- [ ] 3
- [X] 4
- [ ] [4,5,6]

### Représentation de données : Types construits (Première) - Autres
n°798
<br>
Que vaut l'expression `[ 2*k for k in range(5) ]` ?



- [X] [0,2,4,6,8]
- [ ] [2,4,6,8,10]
- [ ] [1,2,4,8,16]
- [ ] [2,4,8,16,32]

### Représentation de données : Types construits (Première) - Autres
n°835
<br>
On considère la liste de listes suivante :<br>
```{.quiz}
tictactoe = [['X', 'O', 'O'],  
             ['O', 'O', 'O'],   
             ['O', 'O', 'X']]  
```
Quelle instruction permet d'obtenir une diagonale de 'X' ?



- [ ] tictactoe[3] = 'X'
- [ ] tictactoe[4] = 'X'
- [X] tictactoe[1][1] = 'X'
- [ ] tictactoe[2][2] = 'X'

### Représentation de données : Types construits (Première) - Autres
n°836
<br>
Considérons le tableau suivant :<br>
```{.quiz}
tableau = [[1,2],[3,4],[5,6]]
```
Quelle est la valeur de l'expression tableau[2][1] ?



- [ ] 3
- [X] 6
- [ ] [3,4],[1,2]
- [ ] [5,6],[2,4]

### Représentation de données : Types construits (Première) - Autres
n°837
<br>
Si a vaut False et b vaut True, que vaut l’expression booléenne NOT(a AND b) ?



- [ ] 0
- [ ] False
- [X] True
- [ ] None

### Représentation de données : Types construits (Première) - Autres
n°838
<br>
On définit le dictionnaire suivant d = {'A': 3, 'B': 7, 'C': 2}. Quelle expression permet de récupérer la valeur de la clé 'B' ?



- [X] d['B']
- [ ] d[1]
- [ ] d[7]
- [ ] d[B]

### Représentation de données : Types construits (Première) - Autres
n°839
<br>
On définit : T = [[1,2,3], [4,5,6], [7,8,9]]<br>
Laquelle des expressions suivantes a pour valeur 7 ?



- [ ] T[3,1]
- [ ] T[3][1]
- [ ] T[2,0]
- [X] T[2][0]

### Représentation de données : Types construits (Première) - Autres
n°840
<br>
On considère le code suivant :<br>
```{.quiz}
def feed(t):  
    for i in range(len(t)):  
        t[i] = 0  
    return t  
```
Que renvoie feed([12, 24, 32]) ?



- [ ] [120, 240, 320]
- [X] [0, 0, 0]
- [ ] [ ]
- [ ] [0]

### Représentation de données : Types construits (Première) - Autres
n°877
<br>
Quelle est la valeur de l'expression [ 2\*k + 1 for k in range(4) ] ?



- [X] [1,3,5,7]
- [ ] [0,1,2,3]
- [ ] [3,5,7,9]
- [ ] [1,2,3,4]

### Représentation de données : Types construits (Première) - Autres
n°878
<br>
De quelle expression la liste suivante est-elle la valeur ?<br>
[[0,0,0,0], [1,1,1,1], [2,2,2,2]]



- [ ] [[i] \* 4 for i in range(4)]
- [ ] [[i] \* 3 for i in range(4)]
- [X] [[i] \* 4 for i in range(3)]
- [ ] [[i] \* 3 for i in range(3)]

### Représentation de données : Types construits (Première) - Autres
n°879
<br>
On exécute le script suivant :<br>
```{.quiz}
inventaire = {'pommes': 430, 'bananes': 312, 'oranges' : 274, 'poires' : 137}  
stock = 0  
for fruit in inventaire.keys():  
    if fruit != 'bananes':  
        stock = stock + inventaire[fruit]  
```
Que contient la variable stock à la fin de cette exécution ?



- [ ] {430, 274, 137}
- [ ] 312
- [X] 841
- [ ] { 'pommes', 'oranges', 'poires' }

### Représentation de données : Types construits (Première) - Autres
n°880
<br>
On considère le code suivant :<br>
```{.quiz}
t = [0, 3, 5, 7, 9]
t[9] = 3 + t[5]
```
Que vaut t à la fin de son exécution ?



- [ ] 
```{.quiz}
[0, 3, 5, 7, 9]
```
- [ ] 
```{.quiz}
[0, 3, 5, 7, 9, 3]
```
- [ ] 
```{.quiz}
[0, 3, 5, 7, 9, 8]
```
- [X] l'exécution déclenche une erreur

### Représentation de données : Types construits (Première) - Autres
n°881
<br>
Quelle est la valeur de l'expression [(i,i+1) for i in range(2)] ?



- [ ] [0,1,1,2]
- [ ] [(1,2),(2,3)]
- [X] [(0,1),(1,2)]
- [ ] [[0,1],[1,2]]

### Représentation de données : Types construits (Première) - Autres
n°882
<br>
On définit la variable suivante : citation = 'Les nombres gouvernent le monde'.<br>
Quelle est la valeur de l'expression citation[5:10] ?



- [X] 'ombre'
- [ ] 'ombres'
- [ ] 'nombre'
- [ ] 'nombres'

### Représentation de données : Types construits (Première) - Autres
n°919
<br>
On exécute le script suivant :<br>
```{.quiz}
L = [12,0,8,7,3,1,5,3,8]
a = [elt for elt in L if elt&lt;4]
```
Quelle est la valeur de a à la fin de son exécution ?



- [ ] [12,0,8]
- [ ] [12,0,8,7]
- [X] [0,3,1,3]
- [ ] [0,3,1]

### Représentation de données : Types construits (Première) - Autres
n°920
<br>
On définit une grille G remplie de 0, sous la forme d'une liste de listes, où toutes les sous-listes ont le même nombre d'éléments.<br>
```{.quiz}
G = [ [0, 0, 0, …, 0],
      [0, 0, 0, …, 0],
      [0, 0, 0, …, 0],
       ……
      [0, 0, 0, …, 0] ]
```
On appelle *hauteur* de la grille le nombre de sous-listes contenues dans G et *largeur* de la grille le nombre d'éléments dans chacune de ces sous-listes. Comment peut-on les obtenir ?



- [ ] hauteur = len(G[0])
largeur = len(G)
- [X] hauteur = len(G)
largeur = len(G[0])
- [ ] hauteur = len(G[0])
largeur = len(G[1])
- [ ] hauteur = len(G[1])
largeur = len(G[0])

### Représentation de données : Types construits (Première) - Autres
n°921
<br>
On définit : L = [10,9,8,7,6,5,4,3,2,1].<br>
Quelle est la valeur de L[L[3]] ?



- [X] 3
- [ ] 4
- [ ] 7
- [ ] 8

### Représentation de données : Types construits (Première) - Autres
n°922
<br>
On dispose d’une table patients de personnes décrits par 4 colonnes « Nom », « Prénom », « Age », « Numéro de sécurité sociale » et d’une table affections contenant « Nom », « Prénom », « Numéro de sécurité sociale », « Maladie », « Date d’entrée à l’hôpital ».<br>
On souhaite fusionner ces deux tables pour faciliter la gestion des patients et leur distribution entre les services pédiatriques, gérontologiques et autres. Quelle donnée doit-on utiliser pour unifier ces tables :



- [ ] Le nom du patient
- [ ] Le prénom du patient
- [X] Le numéro de sécurité sociale du patient
- [ ] La maladie du patient

### Représentation de données : Types construits (Première) - Autres
n°923
<br>
Quelle est la valeur de l'expression [[0] \* 3 for i in range(2)] ?



- [ ] [[0,0], [0,0], [0,0]]
- [X] [[0,0,0], [0,0,0]]
- [ ] [[0.000], [0.000]]
- [ ] [[0.00], [0.00], [0.00]]

### Représentation de données : Types construits (Première) - Autres
n°924
<br>
On dispose du dictionnaire regions ci-dessous :<br>
```{.quiz}
regions = { 'Mayotte': 376, 'Pays de la Loire': 32082,
            'La Réunion': 2504, 'Grand Est': 57441,
            'Martinique': 1128, 'Corse': 8680,
            'Bretagne': 27208, 'Nouvelle-Aquitaine': 84036 }
```
Parmi les instructions suivantes, laquelle permet d'ajouter une nouvelle région ?



- [ ] INSERT ''Hauts de France':31806' INTO regions
- [ ] regions = dict(['Hauts de France'] = 31806)
- [ ] regions('Hauts de France') = 31806
- [X] regions['Hauts de France'] = 31806

### Représentation de données : Types construits (Première) - Autres
n°964
<br>
On exécute le script suivant :<br>
```{.quiz}
inventaire = {'pommes':430, 'bananes':312, 'oranges':274, 'poires':137}
stock = 0
for fruit in inventaire.keys():
    if fruit != 'bananes':
        stock = stock + inventaire[fruit]
```
Que contient la variable stock à la fin de cette exécution ?



- [ ] 
```{.quiz}
{430, 274, 137}
```
- [ ] 
```{.quiz}
312
```
- [X] 
```{.quiz}
841
```
- [ ] 
```{.quiz}
{'pommes', 'oranges', 'poires'}
```

### Représentation de données : Types construits (Première) - Autres
n°965
<br>
On définit :<br>
```{.quiz}
L = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
```
Quelle est la valeur de L[0][2] ?



- [ ] 2
- [X] 3
- [ ] 11
- [ ] 12

### Représentation de données : Types construits (Première) - Autres
n°966
<br>
Considérons le tableau suivant :<br>
```{.quiz}
tableau = [[1,2],[3,4],[5,6]]
```
Quelle est la valeur de l'expression tableau[2][1] ?



- [ ] 3
- [X] 6
- [ ] [3,4],[1,2]
- [ ] [5,6],[2,4]

### Représentation de données : Types construits (Première) - Autres
n°967
<br>
On a défini<br>
```{.quiz}
repertoire = [ {'nom': 'Francette', 'poste': 412},
{'nom': 'Jeanne', 'poste': 222},
{'nom': 'Éric', 'poste': 231} ]
```
Quelle expression permet d'accéder au poste d'Éric ?



- [X] repertoire[2]['poste']
- [ ] repertoire['poste'][2]
- [ ] repertoire['Éric']['poste']
- [ ] repertoire['Éric']

### Représentation de données : Types construits (Première) - Autres
n°968
<br>
On définit : T = [[1,2,3], [4,5,6], [7,8,9]]<br>
Laquelle des expressions suivantes a pour valeur 7 ?



- [ ] T[3,1]
- [ ] T[3][1]
- [ ] T[2,0]
- [X] T[2][0]

### Représentation de données : Types construits (Première) - Autres
n°969
<br>
On exécute le code suivant :<br>
```{.quiz}
t = [1,2,3,4,5,6,7,8,9]
v = [c for c in t if c%3 == 0]
```
Quelle est la valeur de la variable v à la fin de cette exécution ?



- [ ] 18
- [ ] [1,4,7]
- [X] [3,6,9]
- [ ] [1,2,3,4,5,6,7,8,9]

### Représentation de données : Types construits (Première) - Autres
n°1005
<br>
On définit en Python la fonction suivante :<br>
```{.quiz}
def f(L):
    S = []
    for i in range(len(L)-1):
        S.append(L[i] + L[i+1])
    return S
```
Quelle est la liste renvoyée par f([1, 2, 3, 4, 5, 6]) ?



- [ ] [3, 5, 7, 9, 11, 13]
- [ ] [1, 3, 5, 7, 9, 11]
- [X] [3, 5, 7, 9, 11]
- [ ] cet appel de fonction déclenche un message d'erreur

### Représentation de données : Types construits (Première) - Autres
n°1006
<br>
Quelle est la valeur de l'expression `[(a,b) for a in range(3) for b in range(3) if a &gt; b]` ?



- [ ] [(a,b),(a,b),(a,b),(a,b),(a,b),(a,b),(a,b),(a,b),(a,b)]
- [ ] [(0,0),(0,1),(0,2),(1,0),(1,1),(1,2),(2,0),(2,1),(2,2)]
- [X] [(1,0),(2,0),(2,1)]
- [ ] [(0,0),(0,1),(0,2),(1,0),(1,1),(1,2),(1,0),(1,1),(1,2)]

### Représentation de données : Types construits (Première) - Autres
n°1007
<br>
On définit : `matrice = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]`.<br>
Quelle est la valeur de matrice[1][2] ?



- [ ] 2
- [ ] 4
- [X] 6
- [ ] 8

### Représentation de données : Types construits (Première) - Autres
n°1008
<br>
On construit une matrice par compréhension :<br>
```{.quiz}
M = [ [i*j for j in range(4)] for i in range(4) ]
```
Laquelle des conditions suivantes est-elle vérifiée ?



- [ ] M[4][4] == 16
- [ ] M[0][1] == 1
- [X] M[2][3] == 6
- [ ] M[1][2] == 3

### Représentation de données : Types construits (Première) - Autres
n°1009
<br>
On définit L = [2,3,5,7,-4].<br>
En demandant la valeur de L[5], qu'obtient-on ?



- [ ] -4
- [ ] 2
- [ ] 3
- [X] une erreur

### Représentation de données : Types construits (Première) - Autres
n°1010
<br>
On définit L = [4,25,10,9,7,13]. Quelle est la valeur de L[2] ?



- [ ] 4
- [ ] 25
- [X] 10
- [ ] 9

### Représentation de données : Types construits (Première) - Autres
n°1047
<br>
On a défini<br>
```{.quiz}
repertoire = [ {'nom': 'Francette', 'poste': 412},
{'nom': 'Jeanne', 'poste': 222},
{'nom': 'Éric', 'poste': 231} ]
```
Quelle expression permet d'accéder au poste d'Éric ?



- [X] repertoire[2]['poste']
- [ ] repertoire['poste'][2]
- [ ] repertoire['Éric']['poste']
- [ ] repertoire['Éric']

### Représentation de données : Types construits (Première) - Autres
n°1048
<br>
Quelle est la valeur de l'expression suivante : [[i, i+1] for i in range(2)] ?



- [X] [[0,1],[1,2]]
- [ ] [[1,2],[2,3]]
- [ ] [0,1,1,2]
- [ ] [1,2,2,3]

### Représentation de données : Types construits (Première) - Autres
n°1049
<br>
De quelle expression la liste suivante est-elle la valeur ?<br>
[[0,0,0,0], [1,1,1,1], [2,2,2,2]]



- [ ] [[i] \* 4 for i in range(4)]
- [ ] [[i] \* 3 for i in range(4)]
- [X] [[i] \* 4 for i in range(3)]
- [ ] [[i] \* 3 for i in range(3)]

### Représentation de données : Types construits (Première) - Autres
n°1050
<br>
On considère le code suivant :<br>
```{.quiz}
D= { 'a': '1', '2': 'a', 'b': 'a', 'c': '3'}
```
Que vaut D['a'] à la fin de son exécution ?



- [X] '1'
- [ ] 2
- [ ] [ '2', 'b' ]
- [ ] [ '1', '3' ]

### Représentation de données : Types construits (Première) - Autres
n°1051
<br>
On définit la variable suivante : citation = 'Les nombres gouvernent le monde'.<br>
Quelle est la valeur de l'expression citation[5:10] ?



- [X] 'ombre'
- [ ] 'ombres'
- [ ] 'nombre'
- [ ] 'nombres'

### Représentation de données : Types construits (Première) - Autres
n°1052
<br>
On exécute l'instruction suivante :<br>
```{.quiz}
T = [[12,13,14,15],
     [24,25,26,27],
     [35,36,49,33],
     [61,53,55,58]]
```
Quelle expression parmi les quatre suivantes a pour valeur 26 ?



- [X] 
```{.quiz}
T[1][2]
```
- [ ] 
```{.quiz}
T[2][1]
```
- [ ] 
```{.quiz}
T[2][3]
```
- [ ] 
```{.quiz}
T[3][2]
```

### Représentation de données : Types construits (Première) - Autres
n°1089
<br>
On définit `L = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]`. Quelle est la valeur de L[0][2] ?



- [ ] 2
- [X] 3
- [ ] 11
- [ ] 12

### Représentation de données : Types construits (Première) - Autres
n°1090
<br>
Quel est le résultat de l'évaluation de l'expression Python suivante ?  <br>
[ n \* n for n in range(10) ]



- [X] [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
- [ ] [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
- [ ] [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
- [ ] [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

### Représentation de données : Types construits (Première) - Autres
n°1091
<br>
On définit :<br>
```{.quiz}
tableau = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
Quelle est la valeur de `tableau[2][1]` ?



- [ ] 2
- [ ] 4
- [ ] 6
- [X] 8

### Représentation de données : Types construits (Première) - Autres
n°1092
<br>
Quelle est l'expression qui a pour valeur la liste [1,4,9,16,25,36] ?



- [ ] { n\*n for n in range(1,7) }
- [ ] { n\*n for n in range(6) }
- [X] [ n\*n for n in range(1,7) ]
- [ ] [ n\*n for n in range(6) ]

### Représentation de données : Types construits (Première) - Autres
n°1093
<br>
On définit une grille G remplie de 0, sous la forme d'une liste de listes, où toutes les sous-listes ont le même nombre d'éléments.<br>
```{.quiz}
G = [ [0, 0, 0, …, 0],
      [0, 0, 0, …, 0],
      [0, 0, 0, …, 0],
      ……
      [0, 0, 0, …, 0] ]
```
On appelle *hauteur* de la grille le nombre de sous-listes contenues dans G et *largeur* de la grille le nombre d'éléments dans chacune de ces sous-listes. Comment peut-on les obtenir ?



- [ ] hauteur = len(G[0])  
largeur = len(G)
- [X] hauteur = len(G)  
largeur = len(G[0])
- [ ] hauteur = len(G[0])  
largeur = len(G[1])
- [ ] hauteur = len(G[1])  
largeur = len(G[0])

### Représentation de données : Types construits (Première) - Autres
n°1094
<br>
On définit :<br>
`L = [ ['lundi',10,0.87], ['mardi',11,0.82], ['mercredi',12,0.91] ]`<br>
Quel est le type de la variable `a` définie par `a = L[1][2]` ?



- [ ] nombre entier
- [ ] liste
- [X] nombre flottant
- [ ] chaîne de caractères

### Représentation de données : Types construits (Première) - Autres
n°1131
<br>
Quelle expression Python a pour valeur la liste [1,3,5,7,9,11] ?



- [ ] [2\*i - 1 for i in range(6)]
- [X] [2\*i + 1 for i in range(6)]
- [ ] [2\*i + 1 for i in range(5)]
- [ ] [2\*i - 1 for i in range(7)]

### Représentation de données : Types construits (Première) - Autres
n°1132
<br>
Quelle expression permet d'accéder à la valeur 'hello' après qu'on a défini :<br>
```{.quiz}
L = [['a','b','c'],['bonjour','hello']]
```



- [ ] L[5]
- [X] L[1][1]
- [ ] L[2][2]
- [ ] L['hello']

### Représentation de données : Types construits (Première) - Autres
n°1133
<br>
On dispose du dictionnaire regions ci-dessous :<br>
```{.quiz}
regions = { 'Mayotte': 376,
    'Pays de la Loire': 32082,
    'La Réunion': 2504,
    'Grand Est': 57441,
    'Martinique': 1128,
    'Corse': 8680,
    'Bretagne': 27208,
    'Nouvelle-Aquitaine': 84036 }
```
Parmi les instructions suivantes, laquelle permet d'ajouter une nouvelle région ?



- [ ] 
```{.quiz}
INSERT ''Hauts de France':31806' INTO regions
```
- [ ] 
```{.quiz}
regions = dict(['Hauts de France'] = 31806)
```
- [ ] 
```{.quiz}
regions('Hauts de France') = 31806
```
- [X] 
```{.quiz}
regions['Hauts de France'] = 31806
```

### Représentation de données : Types construits (Première) - Autres
n°1134
<br>
Quelle est la valeur de l'expression [ 2\*k + 1 for k in range(4) ] ?



- [X] [1,3,5,7]
- [ ] [0,1,2,3]
- [ ] [3,5,7,9]
- [ ] [1,2,3,4]

### Représentation de données : Types construits (Première) - Autres
n°1135
<br>
Quelle est la valeur de :<br>
`[ x - y for x in range(4) for y in range(3) if x &gt; y ]`



- [X] [1, 2, 1, 3, 2, 1]
- [ ] [1, 2, 3, 1, 2, 1]
- [ ] [1, 2, 3, 3, 2, 1]
- [ ] [1, 2, 1, 2, 3, 1]

### Représentation de données : Types construits (Première) - Autres
n°1136
<br>
Quelle est la valeur de l'expression `[2**i for i in range(5)]` ?



- [ ] [0,1,4,9,16]
- [ ] [1,4,9,16,25]
- [ ] [0,2,4,6,8]
- [X] [1,2,4,8,16]

### Représentation de données : Types construits (Première) - Autres
n°1173
<br>
On exécute le script suivant :<br>
```{.quiz}
inventaire = {'pommes': 430, 'bananes': 312, 'oranges' : 274, 'poires' : 137}
stock = 0
for fruit in inventaire.keys():
    if fruit != 'bananes':
        stock = stock + inventaire[fruit]
```
Que contient la variable stock à la fin de cette exécution ?



- [ ] {430, 274, 137}
- [ ] 312
- [X] 841
- [ ] { 'pommes', 'oranges', 'poires' }

### Représentation de données : Types construits (Première) - Autres
n°1174
<br>
On considère la fonction suivante :<br>
```{.quiz}
def h(L,m,n):
    for i in range(m, (m+n)//2 + 1):
        L[i], L[m+n-i] = L[m+n-i],L[i]
```
On exécute les instructions suivantes :<br>
```{.quiz}
L = [ 2, 3, 4, 5, 7, 8 ]
h(L,0,2)
h(L,3,5)
h(L,0,5)
```
Quelle est la valeur de L à la fin de cette exécution ?



- [ ] [8, 7, 5, 4, 3, 2]
- [ ] [2, 3, 4, 5, 7, 8]
- [ ] [4, 3, 2, 8, 7, 5]
- [X] [5, 7, 8, 2, 3, 4]

### Représentation de données : Types construits (Première) - Autres
n°1175
<br>
Quel est le résultat de l'évaluation de l'expression Python suivante ?<br>
[ n \* n for n in range(10) ]



- [X] [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
- [ ] [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
- [ ] [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
- [ ] [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

### Représentation de données : Types construits (Première) - Autres
n°1176
<br>
On a défini<br>
```{.quiz}
repertoire = [ {'nom': 'Francette', 'poste': 412},
               {'nom': 'Jeanne', 'poste': 222},
               {'nom': 'Éric', 'poste': 231} ]
```
Quelle expression permet d'accéder au poste d'Éric ?



- [X] repertoire[2]['poste']
- [ ] repertoire['poste'][2]
- [ ] repertoire['Éric']['poste']
- [ ] repertoire['Éric']

### Représentation de données : Types construits (Première) - Autres
n°1177
<br>
On définit ainsi une liste M :<br>
`M = [['A','B','C','D'], ['E','F','G','H'], ['I','J','K','L']]`<br>
Quelle expression vaut la chaîne de caractères 'H' ?



- [X] M[1][3]
- [ ] M[3][1]
- [ ] M(7)
- [ ] M(8)

### Représentation de données : Types construits (Première) - Autres
n°1178
<br>
Si on tape dans la console d'éxécution la commande :<br>
[1,4,3] + [2,4,5]<br>
qu'obtient-on ?



- [ ] [3, 8, 8]
- [ ] [19]
- [X] [1, 4, 3, 2, 4, 5]
- [ ] un message d'erreur car l'addition n'est pas compatible avec les listes

### Représentation de données : Types construits (Première) - Autres
n°1214
<br>
On définit la liste L ainsi : `L = [ [1], [1,2], [1,2,3] ]`<br>
Des égalités suivantes, une seule est fausse. Laquelle ?



- [ ] len(L[0]) == 1
- [X] len(L) == 6
- [ ] len(L[2]) == 3
- [ ] L[2][2] == 3

### Représentation de données : Types construits (Première) - Autres
n°1215
<br>
On crée la liste suivante :<br>
t = [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ]<br>
Que vaut t[1][2] :



- [ ] 2
- [X] 7
- [ ] 10
- [ ] on obtient un message d'erreur 'indexError : list index out of range'

### Représentation de données : Types construits (Première) - Autres
n°1216
<br>
On définit un dictionnaire : d = { 'couleur': 'vert', 'taille': 42, 'marque': 'le coq sportif' }<br>
Quelle est la valeur de l'expression d.keys() ?



- [X] ['couleur', 'taille', 'marque']
- [ ] [('couleur', 'vert'), ('taille', 42), ('marque', 'le coq sportif')]
- [ ] ['vert', 42, 'le coq sportif']
- [ ] ['couleur': 'vert', 'taille': 42, 'marque': 'le coq sportif']

### Représentation de données : Types construits (Première) - Autres
n°1217
<br>
On s'intéresse à la valeur 14 présente dans la liste suivante:<br>
`T = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20]]`.<br>
Quelle expression vaut 14 parmi les suivantes ?



- [X] T[2][3]
- [ ] T[3][4]
- [ ] T[3][2]
- [ ] T[4][3]

### Représentation de données : Types construits (Première) - Autres
n°1218
<br>
On considère le code suivant :<br>
```{.quiz}
t = [1, 6, 8, 3, 21]
u = [x for x in t if x &gt; 3]
```
Que vaut u à la fin de son exécution ?



- [ ] [1, 6, 8, 21]
- [ ] [6, 8, 3, 21]
- [X] [6, 8, 21]
- [ ] [1, 3, 6, 21]

### Représentation de données : Types construits (Première) - Autres
n°1219
<br>
Après l'affectation suivante :<br>
```{.quiz}
alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
```
quelle est l'expression qui permet d'accéder à la lettre E ?



- [ ] alphabet.E
- [ ] alphabet['E']
- [X] alphabet[4]
- [ ] alphabet[5]

### Représentation de données : Types construits (Première) - Autres
n°1313
<br>
On considère le dictionnaire<br>
D={1: 3, 2: 4, 3: 5, 4: 2, 5: 1}<br>
Quelle est la valeur de D[D[D[2]]] ?



- [ ] 2
- [ ] 3
- [X] 4
- [ ] 5

### Représentation de données : Types construits (Première) - Autres
n°1314
<br>
On considère la liste de listes suivante :<br>
```{.quiz}
tictactoe = [ ['X', 'O', 'O'],
              ['O', 'O', 'O'],
              ['O', 'O', 'X'] ]
```
Quelle instruction permet d'obtenir une diagonale de 'X' ?



- [ ] tictactoe[3] = 'X'
- [ ] tictactoe[4] = 'X'
- [X] tictactoe[1][1] = 'X'
- [ ] tictactoe[2][2] = 'X'

### Représentation de données : Types construits (Première) - Autres
n°1315
<br>
Quelle est la valeur de l'expression [ 2\*k + 1 for k in range(4) ] ?



- [X] [1,3,5,7]
- [ ] [0,1,2,3]
- [ ] [3,5,7,9]
- [ ] [1,2,3,4]

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°1330
<br>
On exécute le code suivant :<br>
```{.quiz}
A = [ [1,2,3], [4,5,6], [7,8,9] ]
B = [ [0,0,0], [0,0,0], [0,0,0] ]
for i in range(3):
    for j in range(3):
        B[i][j] = A[j][i]
```
Que vaut B à la fin de l'exécution ?



- [ ] rien du tout, le programme déclenche une erreur d'exécution
- [ ] 
```{.quiz}
[ [3,2,1], [6,5,4], [9,8,7] ]
```
- [X] 
```{.quiz}
[ [1,4,7], [2,5,8], [3,6,9] ]
```
- [ ] 
```{.quiz}
[ [7,8,9], [4,5,6], [1,2,3] ]
```

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1331
<br>
Les points \(A\), \(B\) et \(C\) sont de coordonnées \(A\,(1,5)\), \(\,B(3,4)\) et \(\,C(-2,1)\).<br>
On veut créer un dictionnaire triangle dont les clés sont les noms des points et les valeurs leur couple de coordonnées.<br>
Comment procéder ?



- [ ] 
```{.quiz}
triangle = ('A': (1,5), 'B': (3,4), 'C': (-2,1))
```
- [ ] 
```{.quiz}
triangle = ['A': (1,5), 'B': (3,4), 'C': (-2,1)]
```
- [X] 
```{.quiz}
triangle = {'A': (1,5), 'B': (3,4), 'C': (-2,1)}
```
- [ ] 
```{.quiz}
triangle = {['A',(1,5)], ['B',(3,4)], ['C',(-2,1)]}
```

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1338
<br>
On définit ainsi une liste P : <br>
```{.quiz}
P = [ {'nom':'Turing','prénom':'Alan','âge':28},
      {'nom':'Lovelace','prénom':'Ada','âge':27} ]
```
Comment accéder à la chaîne de caractères 'Alan' ?



- [ ] 
```{.quiz}
P[0]
```
- [ ] 
```{.quiz}
P[1]
```
- [X] 
```{.quiz}
P[0]['prénom']
```
- [ ] 
```{.quiz}
P[1]['prénom']
```

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1359
<br>
La variable sequence contient une liste de lettres, éventuellement répétées, choisies parmi 'A', 'B', 'C', 'D'. On veut créer un dictionnaire effectifs associant à chaque lettre le nombre de fois qu'elle apparaît dans la liste sequence. <br>
Par exemple si sequence contient ['A', 'B', 'B', 'D', 'B', 'A'],<br>
effectifs doit contenir {'A':2, 'B':3, 'C':0, 'D':1}.<br>
Parmi les scripts suivants, lequel réalise cet objectif ?



- [X] 
```{.quiz}
effectifs = {'A':0, 'B':0, 'C':0, 'D':0}  
for lettre in sequence:  
    effectifs[lettre] = effectifs[lettre] + 1  
```
- [ ] 
```{.quiz}
effectifs = {}  
for lettre in sequence:  
    effectifs[lettre] = effectifs[lettre] + 1  
```
- [ ] 
```{.quiz}
effectifs = {'A':0, 'B':0, 'C':0, 'D':0}  
for lettre in effectifs.keys():  
    effectifs[lettre] = len([lettre in effectifs])  
```
- [ ] 
```{.quiz}
effectifs = {}  
for lettre in effectifs.keys():  
    effectifs[lettre] = len([lettre in effectifs])  
```

### Représentation de données : Types construits (Première) - p-uplet
n°1360
<br>
Quel est le type de l'expression f(4) si la fonction f est définie par :  <br>
```{.quiz}
def f(x):  
    return (x, x**2)  
```



- [ ] un entier
- [ ] un flottant
- [ ] une liste
- [X] un tuple

### Représentation de données : Types construits (Première) - Tableau indexé
n°1361
<br>
On considère la fonction suivante :<br>
```{.quiz}
def somme(tab):  
    s = 0  
    for i in range(len(tab)):  
        ......  
    return s  
```
Par quelle instruction faut-il remplacer les points de suspension pour que l'appel somme([10,11,12,13,14]) renvoie 60 ?



- [ ] `s = tab[i]`
- [X] `s = s + tab[i]`
- [ ] `tab[i] = tab[i] + s`
- [ ] `s = s + i`

### Représentation de données : Types construits (Première) - Tableau indexé
n°1362
<br>
On dispose d'une table tab constituée d'une liste de trois sous-listes contenant chacune quatre caractères.  <br>
```{.quiz}
tab = [['A', 'B', 'C', 'D'],  
       ['E', 'F', 'G', 'H'],  
       ['I', 'J', 'K', 'L'] ]  
```
Parmi les propositions suivantes, laquelle permet de convertir cette table en une liste L contenant dans l'ordre, ligne par ligne, les 12 caractères de tab ?  <br>
```{.quiz}
# à la fin, on a l'égalité :  
L == [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L' ]  
```



- [X] 
```{.quiz}
L = []  
for i in range(3):  
    for j in range(4):  
        L.append(tab[i][j])  
```
- [ ] 
```{.quiz}
L = []  
for i in range(4):  
    for j in range(3):  
        L.append(tab[i][j])  
```
- [ ] 
```{.quiz}
L = []  
for i in range(3):  
    L.append(tab[i])  
```
- [ ] 
```{.quiz}
L = []  
for i in range(4):  
    L.append(tab[i])  
```

### Représentation de données : Types construits (Première) - p-uplet
n°1363
<br>
La fonction ci-dessous prend en argument deux nombres entiers.  <br>
```{.quiz}
def f(n1,n2):  
    etendue = max(n1,n2)-min(n1,n2)  
    moyenne = (n1+n2)/2  
    return etendue,moyenne  
```
Quel est le type de la valeur renvoyée par un appel à cette fonction ?



- [ ] un entier
- [ ] un réel(ou flottant)
- [X] un tuple
- [ ] une liste

### Représentation de données : Types construits (Première) - Tableau indexé
n°1374
<br>
Soit une liste définie de la manière suivante : `liste = [18, 23, 45, 38, 12]`  <br>
On exécute l’instruction `liste.append(45)`, la liste a alors pour valeur :



- [ ] [18, 23, 38, 12, 45]
- [ ] [18, 23, 38, 12]
- [ ] [45, 18, 23, 45, 38, 12]
- [X] [18, 23, 45, 38, 12, 45]

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1375
<br>
On définit ainsi une liste P :   <br>
```{.quiz}
P = [ {'nom':'Turing','prénom':'Alan','âge':28},  
      {'nom':'Lovelace','prénom':'Ada','âge':27} ]  
```
Que fait alors l'instruction `P[1]['âge'] = 25` ?



- [X] elle modifie la valeur de la clé âge du deuxième élément de la liste P
- [ ] elle modifie la valeur de la clé âge du premier élément de la liste P
- [ ] elle donne la longueur de la liste P
- [ ] elle donne la longueur du premier élément de la liste P

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1376
<br>
Quelle est la valeur de :<br>
```{.quiz}
[ x - y for x in range(4) for y in range(3) if x &gt; y ]
```



- [X] [1, 2, 1, 3, 2, 1]
- [ ] [1, 2, 3, 1, 2, 1]
- [ ] [1, 2, 3, 3, 2, 1]
- [ ] [1, 2, 1, 2, 3, 1]

### Représentation de données : Types construits (Première) - p-uplet
n°1377
<br>
Une table d’un fichier client contient le nom, le prénom et l’identifiant des clients sous la forme :<br>
```{.quiz}
clients = [('Dupont', 'Paul', 1),
           ('Durand', 'Jacques', 2),
           ('Dutronc', 'Jean', 3),
           ...]
```
En supposant que plusieurs clients se prénomment Jean, que vaut la liste x après l’exécution du code suivant ?<br>
```{.quiz}
x = []
for i in range(len(clients)):
    if clients[i][1] == 'Jean':
       x = clients[i]
```



- [ ] Une liste de tuples des noms, prénoms et numéros de tous les clients prénommés Jean
- [ ] Une liste des numéros de tous les clients prénommés Jean
- [ ] Un tuple avec le nom, prénom et numéro du premier client prénommé Jean
- [X] Un tuple avec le nom, prénom et numéro du dernier client prénommé Jean

### Représentation de données : Types construits (Première) - Tableau indexé
n°1391
<br>
Pop<br>
Que vaut maliste à l'issue du code ci-dessous<br>
```{.quiz}
maliste=[ 5, 3, 2, 6, 5, 4]
maliste=maliste.pop()
```



- [X] 4
- [ ] [ 5, 3, 2, 6, 5]
- [ ] [ 5, 3, 2, 6, 5, 4]
- [ ] Le code renvoie une erreur

### Représentation de données : Types construits (Première) - Tableau indexé
n°1392
<br>
Remove<br>
Que vaut maliste a l'issue du code ci-dessous :<br>
```{.quiz}
maliste=[ 5, 3, 2, 6, 5, 4]
maliste=maliste.remove(3)
```



- [ ] [ 5, 2, 6, 5, 4]
- [ ] [ 5, 3, 2, 5, 4]
- [X] None
- [ ] le code renvoie une erreur

### Représentation de données : Types construits (Première) - Tableau indexé
n°1393
<br>
Remove<br>
Que vaut truc à l'issue du code ci-dessous :<br>
```{.quiz}
truc=[ 5, 3, 2, 6, 5, 4]
truc.remove(3)
```



- [ ] [ 5, 3, 2, 6, 5, 4]
- [X] [ 5, 2, 6, 5, 4]
- [ ] [ 5, 3, 6, 5, 4]
- [ ] [ 5, 3, 2, 5, 4]

### Représentation de données : Types construits (Première) - Tableau indexé
n°1394
<br>
constructon de liste<br>
Pour créer la liste des entiers de 1 à 7 quel code utiliserez vous ?



- [ ] 
```{.quiz}
lst=[]
for i in range(7) :
    lst+=i
```
- [ ] 
```{.quiz}
lst=[]
for i in range(7) :
    lst=[i+1]
```
- [ ] 
```{.quiz}
lst=[]
for i in range(7) :
    lst.insert(i)
```
- [X] 
```{.quiz}
lst=[]
for i in range(7) :
    lst.append(i+1)
```

### Représentation de données : Types construits (Première) - Tableau indexé
n°1395
<br>
Insert<br>
Que vaut lst à l'issue de ce code :<br>
```{.quiz}
lst=[1,2,3,4,5,6]
lst.insert(2,3)
```



- [X] [1, 2, 3, 3, 4, 5, 6]
- [ ] [1, 2, 3, 4, 5, 6, 3]
- [ ] [1, 2, 3, 2, 4, 5, 6]
- [ ] le code renvoie une erreur

### Représentation de données : Types construits (Première) - Tableau indexé
n°1396
<br>
del<br>
Que vaut lst à l'issue de ce code :<br>
```{.quiz}
lst=[1,2,3,4,5,6]
del lst[2]
```



- [ ] [1, 3, 4, 5, 6]
- [ ] [4, 5, 6]
- [X] [1, 2, 4, 5, 6]
- [ ] le code renvoie une erreur

### Représentation de données : Types construits (Première) - Tableau indexé
n°1427
<br>
Quel est le tableau `t` construit par les instructions suivantes ?<br>
```{.quiz}
t = [0]*5
for i in range(5):
    t[i] = 2 + i
```



- [ ] `[7, 7, 7, 7, 7]`
- [ ] `[5, 5, 5, 5, 5]`
- [ ] `[2, 3, 4, 5, 6, 7]`
- [X] `[2, 3, 4, 5, 6]`

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1428
<br>
Quel est le tableau `tab` défini par compréhension de la façon suivante ?<br>
```{.quiz}
tab = [[i - j for i in range(2)] for j in range(3)]
```



- [X] 
```{.quiz}
[[0, 1], [-1, 0], [-2, -1]]
```
- [ ] 
```{.quiz}
[[0, -1], [1, 0], [2, 1]]
```
- [ ] 
```{.quiz}
[[0, -1, -2], [1, 0, -1]]
```
- [ ] 
```{.quiz}
[0, -1, -2, 1, 0, -1]
```

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°1429
<br>
On considère le tableau `notes` suivant.<br>
```{.quiz}
notes= [['Anne', 15], ['Marie', 16], ['Julie', 13.5]]
```
Quelle série d'instructions permet d'afficher tous les prénoms et toutes les notes du tableau `notes` ?



- [ ] 
```{.quiz}
for i in range(3):
    for j in range(2):
        print(i, j)
```
- [X] 
```{.quiz}
for tab in notes:
    for element in tab:
        print(element)
```
- [ ] 
```{.quiz}
for element in tab:
    print(element)
```
- [ ] 
```{.quiz}
for i in range(3):
    for j in range(2):
        print(notes[j])
```

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1468
<br>
Dictionnaire <br>
Que va afficher la console si on exécute le programme suivant ?<br>
```{.quiz}
info={'nom':'Durand', 'prenom':'Jean','ddn':'12/12/1970'}
for i in info.values():
    print(i)
```



- [ ] [Durand,Jean,12/12/1970]
- [ ] ['Durand','Jean','12/12/1970']
- [ ] ['nom','prenom','ddn']
- [X] Durand
Jean
12/12/1970

### Représentation de données : Types construits (Première) - Tableau indexé
n°1532
<br>
Boucle *for* et liste<br>
On a saisi le code suivant :<br>
```{.quiz}
liste = [1,2,3,4,5]
for i in range(len(liste)-1) :
  liste[i],liste[i+1] = liste[i+1],liste[i]
print(liste)
```
Qu'affichera ce programme ?



- [ ] [5,4,3,2,1]
- [X] [2,3,4,5,1]
- [ ] [3,2,4,5,1]
- [ ] [1,2,3,4,5]

### Représentation de données : Types construits (Première) - p-uplet
n°1665
<br>
La méthode pop de l'objet liste !<br>
que contient la variable lst après exécution du code suivant :<br>
```{.quiz}
lst = [ 2 , 'E' , 4, 'Jean' ]
del lst[2]
```



- [ ] [ 'E' , 4, 'Jean' ]
- [X] [ 2, 'E' , 'Jean' ]
- [ ] le code renvoie une erreur de syntaxe
- [ ] le code renvoie une erreur NameError

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1666
<br>
Liste en compréhension !<br>
On veut écrire en compréhension la liste lst qui est construite par le code ci-dessous :<br>
```{.quiz}
lst = []
for i in range(12) :
    if i%3 == 0 :
        lst.append(i)
```
Quel est le code, parmis ceux ci-dessous, qui donnera le même résultat ?



- [X] lst = [ x for x in range(12) if x%3 == 0]
- [ ] lst = [0 ,3, 6, 9, 12]
- [ ] lst = [ x for i in range(12) if i%3 == 0]
- [ ] il est impossible de créer lst en compréhension

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1728
<br>
On veut affecter à L la valeur [[0, 1], [3, 4], [6, 7]].<br>
Compléter l'instruction suivante:<br>
L = [[... for j in range(2)] for i in range(3)]



- [ ] 2 \* i + j
- [ ] i + j \* j
- [X] 3 \* i + j
- [ ] i \* j

### Représentation de données : Types construits (Première) - p-uplet
n°1729
<br>
Soit la variable t = (1, 2, 4, 8, 10).<br>
Que devient la variable t après l'instruction t[2] = 1 ?



- [ ] (1, 1, 4, 8, 10)
- [ ] (1, 2, 1, 8, 10)
- [X] La variable t est inchangée.
- [ ] (, )

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1730
<br>
Soit le dictionnaire eleve = {'nom': 'Dugarden', 'prenom': 'Jean', 'age': 17}.<br>
Que renvoie l'expression list(eleve.keys'()) ?



- [ ] ['Dugarden', 'Jean', 17]
- [X] ['nom', 'prenom', 'age']
- [ ] [['nom', 'Dugarden'],['prenom', 'Jean'],['age', 17]]
- [ ] ('nom', 'prenom', 'age')

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°1731
<br>
Soit le plateau de jeu suivant:<br>
jeu = [['X', 'O', 'X'], ['X', '', ''], ['', '', '']].<br>
Quelle instruction permet de faire gagner les 'X' en un seul coup ?



- [ ] jeu[1][3] = 'X'
- [ ] jeu[0][2] = 'X'
- [ ] jeu[3][1] = 'X'
- [X] jeu[2][0] = 'X'

### Représentation de données : Types construits (Première) - Autres
n°1732
<br>
De quel type est la variable pommes définie par pommes = {'granny': 6, 'rouge': 15, 'pink': 10, 'canada': 7} ?



- [ ] La variable pommes est un p-uplet
- [ ] La variable pommes est une liste
- [ ] La variable pommes est une liste de listes
- [X] La variable pommes est un dictionnaire

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1733
<br>
Que vaut l'expression [k\*\*2 for k in range(4)] ?



- [ ] [0, 2, 4, 6, 8]
- [ ] [0, 1, 4, 9, 16]
- [X] [0, 1, 4, 9]
- [ ] [0, 2, 4, 6]

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1734
<br>
On a stocké les résultats d'un concours dans la variable<br>
course = {'Tonio': 2,'Nassim': 3,'Chaima': 1,'Lenny': 4}.<br>
Choisir la réponse exacte:



- [ ] course['Nassim'] vaut 2
- [ ] course[1] vaut ['Tonio', 2]
- [X] 'Lenny' est l'une des clés du dictionnaire
- [ ] La variable course est une liste de listes

### Représentation de données : Types construits (Première) - p-uplet
n°1735
<br>
Soit la variable t = (1, 5, 4, 8, 10).<br>
Que renvoie l'instruction t[2] == 5 ?



- [ ] True
- [X] False
- [ ] (1, 5, 5, 8, 10)
- [ ] Une erreur

### Représentation de données : Types construits (Première) - Tableau indexé
n°1736
<br>
Soit la variable L = [5, 2, 4, 1].<br>
Que devient L après l'instruction L.append(2) ?



- [ ] [5, 4, 1]
- [ ] [2, 5, 2, 4, 1]
- [X] [5, 2, 4, 1, 2]
- [ ] [2, 2, 2, 2]

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1737
<br>
Soit la variable suivante:<br>
panier = {'banane': 5, 'mangue': 1, 'orange': 3}.<br>
Quelle instruction permet de savoir si 'mangue' est présent dans panier ?



- [ ] 'mangue' in panier.items()
- [ ] 'mangue' in panier.values()
- [X] 'mangue' in panier.keys()
- [ ] 'mangue' in len(panier)

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1738
<br>
Pour affecter à la variable t la valeur [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].<br>
par quoi doit-on remplacer les pointillés de la 3ème ligne du code ci-dessous ?<br>
```{.quiz}
n = 3
p = 4
t = [[ ... for i in range(p)] for j in range(n)]
```



- [X] p \* j + i
- [ ] i \* j + j
- [ ] i \* (j + 1)
- [ ] p \* i + j

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1739
<br>
On définit le dictionnaire note = {'Chloé': 16,'Fanny': 17,'Robin': 18}.<br>
Quelle expression permet de récupérer la valeur de la clé 'Robin' ?



- [ ] note[18]
- [X] note['Robin']
- [ ] note[2]
- [ ] note[Robin]

### Représentation de données : Types construits (Première) - Tableau indexé
n°1740
<br>
On dispose d'une liste définie par L = [1, 2, 3, 4].<br>
Quelle est la valeur de L après l'instruction L[1] = 2 ?



- [ ] [1, 1, 3, 4]
- [X] [1, 2, 3, 4]
- [ ] [2, 2, 3, 4]
- [ ] [1, 2, 1, 4]

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°1741
<br>
On exécute le code suivant:<br>
```{.quiz}
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
for i in range(2):
    for j in range(2):
        B[i][j]=A[j][i]
```
Que vaut B à la fin de l'exécution ?



- [ ] [[5, 6], [7, 8]]
- [ ] [[4, 3], [2, 1]]
- [X] [[1, 3], [2, 4]]
- [ ] [[1, 2], [3, 4]]

### Représentation de données : Types construits (Première) - Tableau indexé
n°1742
<br>
Après l'affectation suivante:<br>
```{.quiz}
alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
```
Quelle est l'expression qui permet d'accéder à la lettre J ?



- [X] alphabet[9]
- [ ] alphabet.J
- [ ] alphabet['J']
- [ ] alphabet[10]

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1851
<br>
Lecture json<br>
Voici le contenu d'un fichier exemple.json :<br>
```{.quiz}
{
    'greeting': 'Welcome!',
    'query': 'N de NSI',
    'count': 3,
    'start': 0,
    'results': [
        {
            'N': 'numérique',
            'lang': 'French'
        },
        {
            'N': 'digital',
            'lang': 'English'
        },
        {
            'N': 'dixhitale',
            'lang': 'Albanian'
        }
    ]
}
```
Lequel de ces codes permet d'accéder à la valeur 'dixhitale' ?



- [ ] 
```{.quiz}
import json
with open('exemple.json') as fh:
    contenu = json.load(fh)
lecture = contenu['results']['N']
```
- [X] 
```{.quiz}
import json
with open('exemple.json') as fh:
    contenu = json.load(fh)
lecture = contenu['results'][2]['N']
```
- [ ] 
```{.quiz}
import json
import requests
with open('exemple.json') as fh:
    fichier = requests.get(fh)
    contenu = json.load(fichier)
lecture = contenu['results'][2]['N']
```
- [ ] 
```{.quiz}
import json
with open('exemple.json') as fh:
    contenu = json.dump(fh)
lecture = contenu[4][2]['N']
```

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1853
<br>
Dictionnaire<br>
On considère le code Python suivant :<br>
```{.quiz}
def fonction(x):
    return x ** 2 + x + 1
def ma_fonction(une_fonction, x):
    return une_fonction(x) ** 3
dico1 = {'a': 1, 'b': 2}
dico2 = {0: 'le journal du lycée', 'journal': 2, fonction: ma_fonction, dico1: 2}
```
Ce code n'est pas correct, pourquoi ?



- [ ] Trois erreurs : un dictionnaire n'est pas possible comme clé, `ma_fonction` nécessite deux arguments et les types des valeurs doivent être identiques à ceux des clés.
- [ ] Une seule erreur : les types des valeurs doivent être identiques à ceux des clés.
- [X] Une seule erreur : un dictionnaire n'est pas possible comme clé.
- [ ] Deux erreurs : un dictionnaire n'est pas possible comme clé et les types des valeurs doivent être identiques à ceux des clés.

### Représentation de données : Types construits (Première) - Autres
n°1897
<br>
Différents types<br>
Parmi ces types de base, lequel n'est pas un type construit ?



- [ ] Les tableaux
- [ ] Les p-uplets
- [X] Les booléens
- [ ] Les dictionnaires

### Représentation de données : Types construits (Première) - Autres
n°1898
<br>
Longueur<br>
Quelle est la fonction prédéfinie en Python qui permet de connaitre la longueur d’un tableau ou d’une chaine de caractère ?



- [X] len()
- [ ] lenght()
- [ ] ln()
- [ ] long()

### Représentation de données : Types construits (Première) - Autres
n°1899
<br>
Appartenance<br>
Quel mot-clé permet de déterminer l'appartenance d'un élément dans une séquence de valeurs ?



- [ ] between
- [X] in
- [ ] own
- [ ] inside

### Représentation de données : Types construits (Première) - Autres
n°1900
<br>
Parcours d'un type construit<br>
Que doit-on écrire pour parcourir les éléments de la séquence ensemble\_valeurs ?



- [ ] for each valeur in ensemble\_valeurs:
- [X] for valeur in ensemble\_valeurs:
- [ ] foreach ensemble\_valeurs:
- [ ] while valeur in ensemble\_valeurs:

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1954
<br>
Structures imbriquées:<br>
On a saisi le code suivant :<br>
```{.quiz}
x = {'a': 7, 'b': 'Hi'}
t = (
  (1, 2, 3),
  (5, 'OK', 7, True),
  (7, (2, 5, 'Gris')),
  (9, 2, x)
)
```
Que vaut l'expression `t[2][1][2][2] == t[3][2]['b'][1]`



- [ ] Une erreur
- [X] True
- [ ] False
- [ ] Rien

### Représentation de données : Types construits (Première) - Dictionnaire,p-uplets nommés
n°1955
<br>
Accumulateurs<br>
On a saisi le code suivant :<br>
```{.quiz}
t = (
    {'matière': 'maths', 'notes': (15, 13, 13)},
    {'matière': 'français', 'notes': (16, 17, 17)},
    {'matière': 'Science informatique', 'notes': (15, 16.5, 18)}
)
s = 0
cpt = 0
for d in t:
    s += d['notes'][cpt]
    cpt += 1
print(s)
```
Qu'affiche ce programme?



- [X] 50
- [ ] 46
- [ ] Une erreur
- [ ] 49.5

### Représentation de données : Types construits (Première) - Autres
n°1973
<br>
On exécute le code suivant :<br>
```{.quiz}
a = 4
print(id(a))
a = a + 1
print(id(a))
```
Parmi ces propositions, laquelle est vraie?



- [ ] le deuxième print affiche 5
- [ ] Les deux prints affichent la même valeur
- [X] Les deux prints affichent une valeur différente
- [ ] Une erreur se produit

### Représentation de données : Types construits (Première) - Autres
n°1974
<br>
On a saisi le code suivant :<br>
```{.quiz}
a = [1, 5, 9, 7, 2]
print(id(a))
a.append([5,6])
print(id(a))
```
Parmi ces propositions, laquelle est vraie?



- [X] à la fin de l'exécution, a vaut [1, 5, 9, 7, 2, [5, 6]] et les deux prints affichent la même valeur
- [ ] à la fin de l'exécution, a vaut [1, 5, 9, 7, 2, [5, 6]] et les deux prints affichent des valeurs différentes
- [ ] à la fin de l'exécution, a vaut [1, 5, 9, 7, 2, 5, 6] et les deux prints affichent la même valeur
- [ ] à la fin de l'exécution, a vaut [1, 5, 9, 7, 2, 5, 6] et les deux prints affichent des valeurs différentes

### Représentation de données : Types construits (Première) - Autres
n°1975
<br>
On a saisi le code suivant :<br>
```{.quiz}
a = [1, 5, 9, 7, 2]
print(id(a))
a = a + [1, 5]
print(id(a))
```
Quelle affirmation est vraie ?



- [X] a contient [1, 5, 9, 7, 2, 1, 5] et les deux prints affichent des valeurs différentes.
- [ ] a contient [1, 5, 9, 7, 2, 1, 5] et les deux prints affichent des valeurs identiques.
- [ ] a contient [1, 5, 9, 7, 2, [1, 5]] et les deux prints affichent des valeurs différentes.
- [ ] a contient [1, 5, 9, 7, 2, [1, 5]] et les deux prints affichent des valeurs identiques.

### Représentation de données : Types construits (Première) - Autres
n°1976
<br>
On a saisi le code suivant :<br>
```{.quiz}
l = [2, 5, 8]
l.pop(2)
l.extend([4,5,6])
```
Que contient la variable l à la fin de l’exécution de ce programme?



- [ ] [5, 8, [4, 5, 6]]
- [ ] [5, 8, 4, 5, 6]
- [ ] [2, 5, [4, 5, 6]]
- [X] [2, 5, 4, 5, 6]

### Représentation de données : Types construits (Première) - Autres
n°1977
<br>
On exécute le programme suivant :<br>
```{.quiz}
a = [1, 5, 6]
n = a.pop()
```
Quelle affirmation est vraie à la fin du programme?



- [ ] a vaut [5, 6] et n vaut 1
- [X] a vaut [1, 5] et n vaut 6
- [ ] a vaut [] et n vaut [1, 5, 6]
- [ ] une erreur se produit

### Représentation de données : Types construits (Première) - Autres
n°1978
<br>
On a exécuté le code suivant :<br>
```{.quiz}
liste_animes = ['Naruto', 'L'attaque des titans', 'One peace', 'Kimi no na wa']
```
On veut corriger la faute d'orthographe, comment fait-on?



- [ ] On ne peut pas modifier les éléments de cette liste car elle est immuable
- [ ] liste\_animes[3] = 'One piece'
- [ ] 
```{.quiz}
for i, e in enumerate(liste_animes):
    if i==2:
       e = 'One piece'
```
- [X] liste\_animes[2] = 'One piece'

### Représentation de données : Types construits (Première) - Autres
n°1979
<br>
On a saisi le code suivant :<br>
```{.quiz}
maliste=[5, 3, 2, 6, 5, 4]
maliste.remove(3)
```
Que contient la variable maliste à la fin de l’exécution de ce script ?



- [ ] [5, 3, 2, 5, 4]
- [ ] le code renvoie une erreur
- [ ] None
- [X] [5, 2, 6, 5, 4]

### Représentation de données : Types construits (Première) - Tableau bi-dimentionnel
n°1983
<br>
```{.quiz}
L = [[1, 2, 3, 4], [7, 8, 9, 10], [20, 21, 22, 23]]
```
Quelle expression vaut 9 parmi les suivantes ?



- [X] 
```{.quiz}
L[1][2]
```
- [ ] 
```{.quiz}
L[2][3]
```
- [ ] 
```{.quiz}
L[2][1]
```
- [ ] 
```{.quiz}
L[3][2]
```

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1984
<br>
```{.quiz}
ma_liste = [5, 12, 9, 15, 11, 7]
new = [n for n in ma_liste if n &gt; 10]
print(new)
```
Que s'affiche-t-il ?



- [ ] 
```{.quiz}
[11, 12, 15]
```
- [ ] 
```{.quiz}
[False, True, False, True, True, False]
```
- [ ] 
```{.quiz}
[5, 12, 9, 15, 11, 7]
```
- [X] 
```{.quiz}
[12, 15, 11]
```

### Représentation de données : Types construits (Première) - Tableau indexé
n°1985
<br>
Soit la liste :<br>
```{.quiz}
ma_liste = [[1, 2, 3], [4, 5, 6]]
```
Que renvoie :<br>
```{.quiz}
len(ma_liste)
```



- [ ] 1
- [X] 2
- [ ] 3
- [ ] 6

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1986
<br>
```{.quiz}
ma_liste = [5 + i for i in range(3)]
print(ma_liste)
```
Que s'affiche-t-il ?



- [ ] 
```{.quiz}
[0, 5, 10]
```
- [ ] 
```{.quiz}
[5, 10]
```
- [ ] 
```{.quiz}
[5, 6]
```
- [X] 
```{.quiz}
[5, 6, 7]
```

### Représentation de données : Types construits (Première) - Tableau en compréhension
n°1987
<br>
```{.quiz}
ma_liste = [5 for i in range(3)]
print(ma_liste)
```
Que s'affiche-t-il ? ?



- [ ] 
```{.quiz}
[0, 5, 10]
```
- [ ] 
```{.quiz}
[0, 1, 2]
```
- [X] 
```{.quiz}
[5, 5, 5]
```
- [ ] 
```{.quiz}
[5, 5]
```

### Représentation de données : Types construits (Première) - Autres
n°1988
<br>
On a saisi le code suivant :<br>
```{.quiz}
def minimum(a: int, b: int) -&gt; int:
  mini = a
  if b &lt; mini:
    mini = b
  return mini
x = (7, 2, True)
y = [minimum(x[0], x[1]), 'x', 'z']
d = {'a': 55, 'x': x+x, y[y[0]]: y.append(3)}
```
Que renvoie l'instruction d[y[2]] ?



- [ ] (7, 2, True, 7, 2, True)
- [X] None
- [ ] 3
- [ ] [2, 'x', 'z', 3]

