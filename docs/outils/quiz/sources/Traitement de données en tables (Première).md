### Traitement de données en tables (Première) - Tri d'une table
n°29
<br>
On dispose d'une liste de triplets: `t = [(1,12,250),(1,12,251), (2,12,250),(2,13,250),(2,11,250),(2,12,249)]`.<br>
On trie cette liste par ordre croissant des valeurs du second élément des triplets. En cas d'égalité, on trie par ordre croissant du troisième champ. Si les champs 2 et 3 sont égaux, on trie par ordre croissant du premier champ.<br>
Après ce tri, quel est le contenu de la liste ?



- [ ] `[(1,12,249),(1,12,250),(1,12,251),(2,11,250),(2,12,250),(2,13,250)]`
- [X] `[(2,11,250),(1,12,249),(1,12,250),(2,12,250),(1,12,251),(2,13,250)]`
- [ ] `[(2,11,250),(1,12,249),(1,12,250),(1,12,251),(2,12,250),(2,13,250)]`
- [ ] `[(1,12,249),(2,11,250),(1,12,250),(2,12,250),(2,13,250),(1,12,251)]`

### Traitement de données en tables (Première) - Indexation de table
n°142
<br>
Quelle est la valeur de la variable image après exécution du programme Python suivant :<br>
```{.quiz}
image = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]  
for i in range(4) :  
     for j in range(4) :  
          if (i+j) == 3 :  
               image[i][j] = 1  
```



- [X] [[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0]]
- [ ] [[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1]]
- [ ] [[0,0,0,1],[0,0,1,1],[0,1,1,1],[1,1,1,1]]
- [ ] [[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,1,1,1]]

### Traitement de données en tables (Première) - Indexation de table
n°149
<br>
Quelle expression permet d'accéder au numéro de Tournesol, sachant que le répertoire a été défini par l'affectation suivante :<br>
```{.quiz}
repertoire = [{'nom' : 'Dupont', 'tel' : 5234}, {'nom' : 'Tournesol', 'tel' : 5248},   
    {'nom' : 'Dupond', 'tel' : 5237}]  
```



- [X] repertoire[1]['tel']
- [ ] repertoire['Tournesol']
- [ ] repertoire['tel'][1]
- [ ] repertoire['Tournesol']['tel']

### Traitement de données en tables (Première) - Indexation de table
n°224
<br>
Quelle est l’expression manquante dans le programme Python suivant, pour que son exécution affiche le numéro de Dupond ?  <br>
```{.quiz}
repertoire = [{‘nom' : ‘Dupont' , ‘tel‘ : '5234'},  
              {'nom' : ‘Tournesol‘ , 'tel' : ‘5248‘},  
              {‘nom‘ : ‘Dupond' , ‘tel‘ : '3452'}]  
for i in range(len(repertoire)):  
    if . . . :  
        print (repertoire [i] ['tel ' ])  
```



- [X] répertoire [i] ['nom'] == 'Dupond‘
- [ ] répertoire ['nom'] == 'Dupond'
- [ ] répertoire [i] == ‘Dupond'
- [ ] nom == ‘Dupond'

### Traitement de données en tables (Première) - Tri d'une table
n°225
<br>
Laquelle de ces listes de chaînes de caractères est triée en ordre croissant ?



- [X] ['Chat' , 'Cheval' , 'Chien' , 'Cochon']
- [ ] ['Cochon' , 'Chat' , 'Cheval' , 'Chien']
- [ ] ['Cheval' , 'Chien‘ , 'Chat' , 'Cochon']
- [ ] ['Chat' , 'Cochon' , 'Cheval' , 'Chien']

### Traitement de données en tables (Première) - Tri d'une table
n°226
<br>
Laquelle de ces listes de chaînes de caractères est triée en ordre croissant ?



- [X] ['12','142','21','8']
- [ ] ['8','12','142','21']
- [ ] ['8','12','21','142']
- [ ] ['12','21','8','142']

### Traitement de données en tables (Première) - Tri d'une table
n°227
<br>
Quelle est la valeur de la variable **table** après exécution du programme Python suivant :<br>
```{.quiz}
table = [12, 43, 6, 22, 37]  
for i in range(len(table) - 1):  
    if table [i] &gt; table [i+1] :  
        table [i] ,table [i+1] = table [i+1] ,table [i]  
```



- [X] [12, 6, 22, 37, 43]
- [ ] [6, 12, 22, 37, 43]
- [ ] [43, 12, 22, 37, 6]
- [ ] [43, 37, 22, 12, 6]

### Traitement de données en tables (Première) - Fusion de tables
n°234
<br>
À partir de fichiers remplis à l’aide de formulaires en ligne, on dispose d’un tableau t1 de numéro de client, nom, âge, ville et d’un tableau t2 de numéro de commande, numéro de client, prix :<br>
```{.quiz}
t1 = [ [3,'Pierre',25,'Ambérieu'], [5,'Gaspe',45,'Lagnieu'], [98,'Abraham',75,'Meximieux'],[24,'Zoé',34,'Lyon'] ]  
t2 = [ [1287,5,1025], [13245,98,234], [23,5,42],[10001,24,53] ]  
```
Que devient t1 après l'exécution du code suivant :<br>
```{.quiz}
for i in range(len(t1)):   
    for c in [ com for com in t2 if com[1]==t1[i][0] ]:  
        t1[i].append( (c[0], c[2]) )  
```



- [ ] [ [5, 'Gaspe', 45, 'Lagnieu', (1287, 1025), (23, 42)]  
[98, 'Abraham', 75, 'Meximieux', (13245, 234)]  
[24, 'Zoé', 34, 'Lyon', (10001, 53)] ]
- [X] [ [3, 'Pierre', 25, 'Ambérieu']  
[5, 'Gaspe', 45, 'Lagnieu', (1287, 1025), (23, 42)]  
[98, 'Abraham', 75, 'Meximieux', (13245, 234)]  
[24, 'Zoé', 34, 'Lyon', (10001, 53)] ]
- [ ] [ [3, 'Pierre', 25, 'Ambérieu', (1287, 1025)]  
[5, 'Gaspe', 45, 'Lagnieu', (13245, 234)]  
[98, 'Abraham', 75, 'Meximieux', (23, 42)]  
[24, 'Zoé', 34, 'Lyon', (10001, 53)] ]
- [ ] [ [3, 'Pierre', 25, 'Ambérieu']  
[5, 'Gaspe', 45, 'Lagnieu']  
[98, 'Abraham', 75, 'Meximieux']  
[24, 'Zoé', 34, 'Lyon'] ]

### Traitement de données en tables (Première) - Recherche dans une table
n°235
<br>
On considère le programme suivant :<br>
```{.quiz}
def maxi(tab):  
   '''  
   tab est une liste de couples (nom, note)  
   où nom est de type str  
   et où note est un entier entre 0 et 20.  
   '''  
   m = tab[0]  
   for x in tab:  
      if x[1] &gt;= m[1]:  
         m = x  
   return m  
L = [('Adrien', 17), ('Barnabé', 17), ('Casimir', 17),  
('Dorian', 17), ('Emilien', 16), ('Fabien', 16)]  
```
Quelle est la valeur de maxi(L) ?



- [ ] ('Adrien',17)
- [X] ('Dorian',17)
- [ ] ('Fabien',16)
- [ ] ('Emilien',16)

### Traitement de données en tables (Première) - Recherche dans une table
n°327
<br>
On considère un fichier `CSV` contenant le prénom et la ville de naissance d'un certain nombre de personnes. On a mémorisé le contenu de ce fichier dans un tableau `personnes` dont on donne le début ci-dessous.<br>
```{.quiz}
personnes = [{'prénom': 'Marius', 'ville': 'Paris'},   
             {'prénom': 'Nassim', 'ville': 'Angers'},   
             {'prénom': 'Eléa', 'ville': 'Nantes'},   
             ...  
            ]  
```
Quelles instructions permettent d'afficher le prénom de toutes les personnes nées à Rouen ?



- [ ] 
```{.quiz}
for p in personnes:  
    if p['ville'] == p['Rouen']:  
        print(p['prénom'])  
```
- [ ] 
```{.quiz}
for p in personnes:  
    if p['ville'] == 'Rouen':  
        print(prénom)  
```
- [X] 
```{.quiz}
for p in personnes:  
    if p['ville'] == 'Rouen':  
        print(p['prénom'])  
```
- [ ] 
```{.quiz}
for p in personnes:  
    if personnes['ville'] == personnes['Rouen']:  
        print(personnes['prénom'])  
```

### Traitement de données en tables (Première) - Recherche dans une table
n°328
<br>
On considère un fichier `CSV` contenant le prénom, la ville de naissance et l'année de naissance d'un groupe de personnes. On a mémorisé le contenu de ce fichier dans un tableau `personnes` dont on donne le début ci-dessous.<br>
```{.quiz}
personnes = [{'prénom': 'Marius', 'ville': 'Paris', 'année': '2004'},   
             {'prénom': 'Nassim', 'ville': 'Angers', 'année': '1972'},   
             {'prénom': 'Eléa', 'ville': 'Nantes', 'année': '1993'},   
             ...  
            ]  
```
Quelle instruction permet de construire un tableau `t` contenant les prénoms de toutes les personnes nées en 2001 ?



- [ ] 
```{.quiz}
t = [personnes if p['année'] == '2001']  
```
- [ ] 
```{.quiz}
t = [p for p in personnes if p['année'] == '2001']  
```
- [ ] 
```{.quiz}
t = [if p['année'] == '2001': p['prénom']]  
```
- [X] 
```{.quiz}
t = [p['prénom'] for p in personnes if p['année'] == '2001']  
```

### Traitement de données en tables (Première) - Recherche dans une table
n°329
<br>
On considère un fichier `CSV` contenant le prénom, la ville de naissance et l'année de naissance d'un groupe de personnes. On a mémorisé le contenu de ce fichier dans un tableau `personnes` dont on donne le début ci-dessous.<br>
```{.quiz}
personnes = [{'prénom': 'Marius', 'ville': 'Paris', 'année': '2004'},   
             {'prénom': 'Nassim', 'ville': 'Angers', 'année': '1972'},   
             {'prénom': 'Eléa', 'ville': 'Nantes', 'année': '1993'},   
             ...  
            ]  
```
Par quoi faut-il remplacer les pointillés dans l'instruction suivante pour construire le tableau `t` contenant uniquement les lignes du tableau `personnes` concernant les individus nés à partir de 2005 à Angers ?<br>
```{.quiz}
t = [p for p in personnes if ...]  
```



- [ ] 
```{.quiz}
'année' &gt;= 2005 and 'ville' == Angers
```
- [X] 
```{.quiz}
p['ville'] == 'Angers' and int(p['année']) &gt;= 2005 
```
- [ ] 
```{.quiz}
p['année'] &gt;= int(2005) and p['ville'] == 'Angers'
```
- [ ] 
```{.quiz}
int(p['année']) &gt;= 2005 or p['ville'] == 'Angers'
```

### Traitement de données en tables (Première) - Indexation de table
n°355
<br>
Table de données :  <br>
On dispose d'une table de données <br>
```{.quiz}
Table
```
 représentée par une liste de dictionnaires. En entrant <br>
```{.quiz}
Table[0]
```
 on obtient:



- [X] Une ligne
- [ ] Une colonne
- [ ] Une cellule
- [ ] Une erreur

### Traitement de données en tables (Première) - Autres
n°376
<br>
Que signifie le sigle CSV ?



- [X] Comma separated Values
- [ ] Common Special Values
- [ ] Clear Special Values
- [ ] Check Specific Values

### Traitement de données en tables (Première) - Autres
n°377
<br>
A quoi correspond l'Open Data ?



- [X] Des données numériques dont l'accès et l'usage sont laissés libres aux usagers.
- [ ] Des données numériques dont l'accès est réservé aux abonnés du service 'Open'
- [ ] Une liste de date correspondant à l'ouverture de sites Internet.
- [ ] Des données correspondants à l'ouverture d'un service en ligne.

### Traitement de données en tables (Première) - Tri d'une table
n°378
<br>
Un algorithme est en complexité quadratique. Codé en python, son exécution pour des données de taille 100 prend 12 millisecondes<br>
Si l'on fournit des données de taille 200 au programme, on peut s'attendre à un temps d'exécution d'environ :



- [X] 48 millisecondes
- [ ] 24 millisecondes
- [ ] 12 millisecondes
- [ ] 96 millisecondes

### Traitement de données en tables (Première) - Tri d'une table
n°379
<br>
On a saisi le code suivant :<br>
```{.quiz}
liste = [0, 1, 2, 3]  
compteur = 0  
for i in range(len(liste)-1) :  
    for j in range(i,len(liste)) :  
        compteur += 1  
```
Que contient la variable compteur à la fin de l’exécution de ce script ?



- [ ] 4
- [X] 9
- [ ] 8
- [ ] 10

### Traitement de données en tables (Première) - Indexation de table
n°472
<br>
On définit :<br>
T = [ {'fruit': 'banane', 'nombre': 25}, {'fruit': 'orange', 'nombre': 124},<br>
{'fruit': 'pomme', 'nombre': 75}, {'fruit': 'kiwi', 'nombre': 51} ]<br>
Quelle expression a-t-elle pour valeur le nombre de pommes ?



- [X] T[2]['nombre']
- [ ] T[2,'nombre']
- [ ] T[3]['nombre']
- [ ] T[3,'nombre']

### Traitement de données en tables (Première) - Autres
n°473
<br>
Que réalise l'instruction suivante :<br>
mon\_fichier = open('exemple.txt', 'r')



- [X] Elle permet d’ouvrir le fichier 'exemple.txt' en mode lecture si le fichier est dans le même dossier que le fichier du programme Python comportant cette instruction.
- [ ] Elle permet d’ouvrir le fichier 'exemple.txt' en mode lecture même si le fichier n’est pas dans le même dossier que le fichier du programme Python comportant cette instruction.
- [ ] Elle permet d’ouvrir le fichier 'exemple.txt' en mode écriture si le fichier est dans le même dossier que le fichier du programme Python comportant cette instruction.
- [ ] Elle permet d’ouvrir le fichier 'exemple.txt' en mode écriture même si le fichier n’est pas dans le même dossier que le fichier du programme Python comportant cette instruction.

### Traitement de données en tables (Première) - Autres
n°474
<br>
Laquelle de ces affirmations est vraie ?



- [ ] on ne peut accéder au contenu d'un fichier CSV que par l'intermédiaire d'un programme Python
- [ ] CSV est un format de chiffrement des données
- [ ] le format CSV a été conçu pour asssurer la confidentialité d'une partie du code d'un programme
- [X] les fichiers CSV sont composés de données séparées par des caractères comme des virgules

### Traitement de données en tables (Première) - Recherche dans une table
n°475
<br>
On considère la table suivant :<br>
`t = [ {'type': 'marteau', 'prix': 17, 'quantité': 32}, {'type': 'scie', 'prix': 24, 'quantité': 3}, {'type': 'tournevis', 'prix': 8, 'quantité': 45} ]`  <br>
Quelle expression permet d'obtenir la quantité de scies ?



- [ ] t[2]['quantité']
- [X] t[1]['quantité']
- [ ] t['quantité'][1]
- [ ] t['scies']['quantité']

### Traitement de données en tables (Première) - Recherche dans une table
n°476
<br>
On considère la liste de p-uplets suivante :<br>
```{.quiz}
table = [ ('Grace', 'Hopper', 'F', 1906),
('Tim', 'Berners-Lee', 'H', 1955),
('Ada', 'Lovelace', 'F', 1815),
('Alan', 'Turing', 'H', 1912) ]
```
où chaque p-uplet représente un informaticien ou une informaticienne célèbre ; le premier élément est son prénom, le deuxième élément son nom, le troisième élément son sexe (‘H’ pour un homme, ‘F’ pour une femme) et le quatrième élément son année de naissance (un nombre entier entre 1000 et 2000).<br>
On définit une fonction :<br>
```{.quiz}
def fonctionMystere(table):  
    mystere = []  
    for ligne in table:  
        if ligne[2] == 'F':  
            mystere.append(ligne[1])  
    return mystere  
```
Que vaut `fonctionMystere(table)`?



- [ ] [‘Grace’, ‘Ada’]
- [ ] [('Grace', 'Hopper', 'F', 1906), ('Ada', 'Lovelace', 'F', 1815)]
- [X] ['Hopper', 'Lovelace']
- [ ] []

### Traitement de données en tables (Première) - Indexation de table
n°477
<br>
Quelle est la valeur de la variable table à la fin de l'exécution du script suivant :<br>
table = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]<br>
table [1][2] = 5



- [ ] [[1, 5, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
- [ ] [[1, 2, 3], [5, 2, 3], [1, 2, 3], [1, 2, 3]]
- [X] [[1, 2, 3], [1, 2, 5], [1, 2, 3], [1, 2, 3]]
- [ ] [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 5, 3]]

### Traitement de données en tables (Première) - Autres
n°589
<br>
Soit le tableau défini de la manière suivante : `tableau = [[1,3,4],[2,7,8],[9,10,6],[12,11,5]]`<br>
On souhaite accéder à la valeur 12, on écrit pour cela :



- [ ] tableau[4][1]
- [ ] tableau[1][4]
- [X] tableau[3][0]
- [ ] tableau[0][3]

### Traitement de données en tables (Première) - Autres
n°590
<br>
On définit la variable suivante : `lettres = {'a': 1, 'b': 2, 'c': 3}`.<br>
Quelle est la valeur de l'expression `list(lettres.keys())` ?



- [ ] [a,b,c]
- [ ] [1,2,3]
- [X] ['a','b','c']
- [ ] {'a': 1, 'b': 2, 'c': 3}

### Traitement de données en tables (Première) - Autres
n°591
<br>
Qu'est-ce qu'un fichier CSV ?



- [ ] une librairie Python permettant l'affichage des images
- [ ] un utilitaire de traitement d'image
- [ ] un format d'image
- [X] un format de données

### Traitement de données en tables (Première) - Autres
n°592
<br>
On exécute le script suivant :<br>
```{.quiz}
a = [1, 2, 3]  
b = [4, 5, 6]  
c = a + b
```
Que contient la variable c à la fin de cette exécution ?



- [ ] [5,7,9]
- [ ] [1,4,2,5,3,6]
- [X] [1,2,3,4,5,6]
- [ ] [1,2,3,5,7,9]

### Traitement de données en tables (Première) - Autres
n°593
<br>
On souhaite construire une table de 4 lignes de 3 éléments que l’on va remplir de 0. Quelle syntaxe Python utilisera-t-on ?



- [X] [ [ 0 ] \* 3 for i in range (4) ]
- [ ] for i in range (4) [ 0 ] \* 3
- [ ] [ 0 ] \* 3 for i in range (4)
- [ ] [ for i in range (4) [ 0 ] \* 3 ]

### Traitement de données en tables (Première) - Autres
n°594
<br>
Soit la table de données suivante :<br>
```{.quiz}
  nom   |  prenom   | date_naissance  
Dupont  |  Pierre   | 17/05/1987  
Dupond  | Catherine | 18/07/1981  
Haddock | Archibald | 23/04/1998
```
Quels sont les descripteurs de ce tableau ?



- [X] nom, prenom et date\_naissance
- [ ] Dupont, Pierre et 17/05/1987
- [ ] Dupont, Dupond et Haddock
- [ ] il n'y en a pas

### Traitement de données en tables (Première) - Autres
n°631
<br>
Dans la plupart des fichiers CSV, que contient la première ligne ?



- [ ] des notes concernant la table de données
- [ ] les sources des données
- [X] les descripteurs des champs de la table de données
- [ ] l'auteur de la table de données

### Traitement de données en tables (Première) - Autres
n°632
<br>
On exécute le code suivant :<br>
```{.quiz}
table = [ ['lovelace', 'ada', 1815, 1852],  
          ['von neumann','john', 1903, 1957],  
          ['turing', 'alan', 1912, 1954],  
          ['mccarthy', 'john', 1927, 2011],  
          ['floyd', 'robert', 1936, 2001] ]  
def age(personnage):  
     return personnage[3] - personnage[2]  
table.sort(key=age, reverse=True)
```
Quelle est la première ligne de la table table à la suite de cette exécution ?



- [ ] ['lovelace', 'ada', 1815, 1852]
- [X] ['mccarthy', 'john', 1927, 2011]
- [ ] ['turing', 'alan', 1912, 1954]
- [ ] ['mccarthy', 'floyd', 'von neumann', 'turing', 'lovelace']

### Traitement de données en tables (Première) - Autres
n°633
<br>
Quelle est la valeur de la variable table à la fin de l'exécution du script suivant :<br>
```{.quiz}
table = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]  
table [1][2] = 5
```



- [ ] [[1, 5, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
- [ ] [[1, 2, 3], [5, 2, 3], [1, 2, 3], [1, 2, 3]]
- [X] [[1, 2, 3], [1, 2, 5], [1, 2, 3], [1, 2, 3]]
- [ ] [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 5, 3]]

### Traitement de données en tables (Première) - Autres
n°634
<br>
On définit les notes des élèves dans le dictionnaire suivant :<br>
```{.quiz}
notes = { 'Pierre' : 9, 'Paule' : 16, 'Claire' : 12,
'Sophie' : 11, 'Yasmine' : 8, 'David' : 17, 'Julie' : 3 }
```
Quelle expression permet d'accéder à la note de l’élève Claire ?



- [ ] notes[12]
- [ ] notes[2]
- [X] notes['Claire']
- [ ] notes.values('Claire')

### Traitement de données en tables (Première) - Autres
n°635
<br>
On a défini :<br>
```{.quiz}
mendeleiev = [ ['H','.', '.','.','.','.','.','He'],  
               ['Li','Be','B','C','N','O','Fl','Ne'],  
               ['Na','Mg','Al','Si','P','S','Cl','Ar'],  
                 ...... ]
```
Une erreur s'est glissée dans le tableau, car le symbole du Fluor est F et non Fl. Quelle instruction permet de rectifier ce tableau ?



- [ ] mendeleiev.append('F')
- [X] mendeleiev[1][6] = 'F'
- [ ] mendeleiev[6][1] = 'F'
- [ ] mendeleiev[-1][-1] = 'F'

### Traitement de données en tables (Première) - Autres
n°636
<br>
On définit ainsi une liste t :<br>
```{.quiz}
 t = [ {'id':1, 'age':23, 'sejour':'PEKIN'},  
       {'id':2, 'age':27, 'sejour':'ISTANBUL'},  
       {'id':3, 'age':53, 'sejour':'LONDRES'},  
       {'id':4, 'age':41, 'sejour':'ISTANBUL'},  
       {'id':5, 'age':62, 'sejour':'RIO'},  
       {'id':6, 'age':28, 'sejour':'ALGER'}]
```
Quelle affirmation est correcte ?



- [ ] t est une liste de listes
- [X] t est une liste de dictionnaires
- [ ] t est un dictionnaire de listes
- [ ] t est une liste de tuples

### Traitement de données en tables (Première) - Autres
n°673
<br>
On exécute le script suivant :<br>
```{.quiz}
a = [1, 2, 3]  
b = [4, 5, 6]  
c = a + b
```
Que contient la variable c à la fin de cette exécution ?



- [ ] [5,7,9]
- [ ] [1,4,2,5,3,6]
- [X] [1,2,3,4,5,6]
- [ ] [1,2,3,5,7,9]

### Traitement de données en tables (Première) - Autres
n°674
<br>
Laquelle de ces affirmations est vraie ?



- [ ] on ne peut accéder au contenu d'un fichier CSV que par l'intermédiaire d'un programme Python
- [ ] CSV est un format de chiffrement des données
- [ ] le format CSV a été conçu pour asssurer la confidentialité d'une partie du code d'un programme
- [X] les fichiers CSV sont composés de données séparées par des caractères comme des virgules

### Traitement de données en tables (Première) - Autres
n°675
<br>
On a défini deux tables de données :<br>
```{.quiz}
data1 = [(‘Bruce’, ‘Wayne’), (‘Chuck’, ‘Norris’), (‘Bruce’, ‘Lee’), (‘Clark’, ‘Kent’)]
data2 = [(‘Diana’, ‘Prince’), (‘Chuck’, ‘Norris’), (‘Peter’, ‘Parker’)]
```
Quelle instruction permet de construire une table data regroupant l'ensemble des informations de data1 et data2 ?



- [X] data = data1 + data2
- [ ] data == data1 + data2
- [ ] data = [element for element in data1 or data2]
- [ ] data = [data1] + [data2]

### Traitement de données en tables (Première) - Autres
n°676
<br>
Quelle est la valeur de la variable table après exécution du programme Python suivant ?<br>
```{.quiz}
table = [12, 43, 6, 22, 37]  
for i in range(len(table) - 1):  
    if table[i] &gt; table[i+1]:  
        table[i],table[i+1] = table[i+1], table[i]
```



- [ ] [6, 12, 22, 37, 43]
- [X] [12, 6, 22, 37, 43]
- [ ] [43, 12, 22, 37, 6]
- [ ] [43, 37, 22, 12, 6]

### Traitement de données en tables (Première) - Autres
n°677
<br>
On considère l’extraction suivante d'une base de données des départements français. Cette extraction a ensuite été sauvegardée dans un fichier texte.<br>
```{.quiz}
'1','01','Ain','AIN','ain','A500'
'2','02','Aisne','AISNE','aisne','A250'
'3','03','Allier','ALLIER','allier','A460'
'4','04','Alpes-de-Haute-Provence','ALPES-DE-HAUTE-PROVENCE','alpes-de-haute-provence','A412316152'
'5','05','Hautes-Alpes','HAUTES-ALPES','hautes-alpes','H32412'
```
Quel est le format de ce fichier ?



- [ ] YML
- [ ] XML
- [X] CSV
- [ ] JSON

### Traitement de données en tables (Première) - Autres
n°678
<br>
On souhaite construire une table de 4 lignes de 3 éléments que l’on va remplir de 0. Quelle syntaxe Python utilisera-t-on ?



- [X] [ [ 0 ] \* 3 for i in range (4) ]
- [ ] for i in range (4) [ 0 ] \* 3
- [ ] [ 0 ] \* 3 for i in range (4)
- [ ] [ for i in range (4) [ 0 ] \* 3 ]

### Traitement de données en tables (Première) - Autres
n°715
<br>
On dispose du fichier « info.csv » donné ci-dessous :<br>
nom, prenom, naissance, deces  <br>
lovelace, ada, 1815, 1852  <br>
von neumann, john, 1903, 1957  <br>
turing, alan, 1912, 1954  <br>
mccarthy, john, 1927, 2011  <br>
floyd, robert, 1936, 2001<br>
Le programme ci-dessous nous permet de créer un tableau à partir de ce fichier.<br>
```{.quiz}
file = open('info.csv', 'r')  
firstLine = file.readline() # chargement de la ligne d’entête  
tableau = [line.split(',') for line in file] # chargement des données  
```
Les index des lignes de ce tableau vont…



- [ ] de 0 à 3
- [ ] de 1 à 4
- [X] de 0 à 4
- [ ] de 0 à 5

### Traitement de données en tables (Première) - Autres
n°716
<br>
On utilise habituellement un fichier d'extension csv pour quel type de données ?



- [ ] des données structurées graphiquement
- [ ] des données sonores
- [ ] des données compressées
- [X] des données structurées en tableau

### Traitement de données en tables (Première) - Autres
n°717
<br>
On considère la table suivante :<br>
```{.quiz}
t = [ {'type': 'marteau', 'prix': 17, 'quantité': 32},  
{'type': 'scie', 'prix': 24, 'quantité': 3},  
{'type': 'tournevis', 'prix': 8, 'quantité': 45} ]  
```
Quelle expression permet d'obtenir la quantité de scies ?



- [ ] t[2]['quantité']
- [X] t[1]['quantité']
- [ ] t['quantité'][1]
- [ ] t['scie']['quantité']

### Traitement de données en tables (Première) - Autres
n°718
<br>
On définit les notes des élèves dans le dictionnaire suivant :<br>
```{.quiz}
notes = { 'Pierre' : 9, 'Paule' : 16, 'Claire' : 12,  
'Sophie' : 11, 'Yasmine' : 8,  
'David' : 17, 'Julie' : 3 }  
```
Quelle expression permet d'accéder à la note de l’élève Claire ?



- [ ] notes[12]
- [ ] notes[2]
- [X] notes['Claire']
- [ ] notes.values('Claire')

### Traitement de données en tables (Première) - Autres
n°719
<br>
Soit la table de données suivante :<br>
nom,prenom,date\_naissance  <br>
Dupont,Pierre,17/05/1987  <br>
Dupond,Catherine,18/07/1981  <br>
Haddock,Archibald,23/04/1998<br>
Quels sont les descripteurs de ce tableau ?



- [X] nom, prenom et date\_naissance
- [ ] Dupont, Pierre et 17/05/1987
- [ ] Dupont, Dupond et Haddock
- [ ] il n'y en a pas

### Traitement de données en tables (Première) - Autres
n°720
<br>
On définit :<br>
```{.quiz}
stock = [ {'nom': 'flageolets', 'quantité': 50, 'prix': 5.68},  
          {'nom': 'caviar', 'quantité': 0, 'prix': 99.99},  
          .........  
          .........  
          {'nom': 'biscuits', 'quantité': 100, 'prix': 7.71} ]  
```
Quelle expression permet d'obtenir la liste des noms des produits effectivement présents dans le stock (c'est-à-dire ceux dont la quantité n'est pas nulle) ?



- [ ] `['nom' for p in stock if 'quantité' != 0]`
- [ ] `[p for p in stock if p['quantité'] != 0]`
- [ ] `[p['nom'] for p in stock if 'quantité' != 0]`
- [X] `[p['nom'] for p in stock if p['quantité'] != 0]`

### Traitement de données en tables (Première) - Autres
n°800
<br>
On définit une table d'élèves et une liste finale de la façon suivante :<br>
```{.quiz}
table_eleves = [ {'prenom': 'Ada', 'nom': 'Lovelace', 'age': 7},
{'prenom': 'Charles', 'nom': 'Babbage', 'age': 18},
......
{'prenom': 'John', 'nom': 'Von Neumann', 'age': 16} ]
liste_finale = [ eleve for eleve in table_eleves if eleve['age'] &gt;= 18 ]
```
Que contient cette liste finale ?



- [ ] La liste des prénoms des élèves majeurs de la table.
- [ ] La liste des âges des élèves majeurs de la table.
- [X] La liste des élèves majeurs de la table, chaque élément de la liste étant représenté par un dictionnaire.
- [ ] La liste des élèves majeurs de la table, chaque élément de la liste étant représenté par une liste.

### Traitement de données en tables (Première) - Autres
n°801
<br>
On exécute le code suivant :<br>
```{.quiz}
a = [5, 4, 3, 4, 7]
a.append(4)
```
Quelle est la valeur de la variable a à la fin de cette exécution ?



- [ ] 2
- [ ] [4, 4]
- [X] [5, 4, 3, 4, 7, 4]
- [ ] True

### Traitement de données en tables (Première) - Autres
n°802
<br>
On exécute le code suivant :<br>
```{.quiz}
def maxi(t):
    m = t[0]
    for x in t:
        if x[1] &gt;= m[1]:
            m = x
    return m
L = [ ('Alice', 17), ('Barnabé', 17),
('Casimir', 17), ('Doriane', 17),
('Emilien', 14), ('Fabienne', 16) ]
```
Quelle est alors la valeur de maxi(L) ?



- [ ] ('Alice',17)
- [X] ('Doriane',17)
- [ ] ('Fabienne',17)
- [ ] ('Emilien',14)

### Traitement de données en tables (Première) - Autres
n°803
<br>
Quelle est la valeur de la variable table à la fin de l'exécution du script suivant :<br>
```{.quiz}
table = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
table [1][2] = 5
```



- [ ] [[1, 5, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
- [ ] [[1, 2, 3], [5, 2, 3], [1, 2, 3], [1, 2, 3]]
- [X] [[1, 2, 3], [1, 2, 5], [1, 2, 3], [1, 2, 3]]
- [ ] [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 5, 3]]

### Traitement de données en tables (Première) - Autres
n°804
<br>
Laquelle de ces affirmations est vraie ?



- [X] on peut ouvrir un fichier CSV à l'aide d'un tableur
- [ ] un fichier CSV permet de gérer l'apparence du code dans l'éditeur
- [ ] un fichier CSV permet de gérer l'apparence d'une page HTML
- [ ] un fichier CSV contient un programme à compiler

### Traitement de données en tables (Première) - Autres
n°841
<br>
Qu'est-ce qu'un fichier CSV ?



- [ ] une librairie Python permettant l'affichage des images
- [ ] un utilitaire de traitement d'image
- [ ] un format d'image
- [X] un format de données

### Traitement de données en tables (Première) - Autres
n°842
<br>
Laquelle de ces listes de chaînes de caractères est triée en ordre croissant ?



- [X] ['112', '19', '27', '45', '8']
- [ ] ['8', '19', '27', '45', '112']
- [ ] ['8', '112', '19', '27', '45']
- [ ] ['19', '112', '27', '45', '8']

### Traitement de données en tables (Première) - Autres
n°843
<br>
Soit le tableau défini de la manière suivante : tableau = [[1,3,4],[2,7,8],[9,10,6],[12,11,5]]<br>
On souhaite accéder à la valeur 12, on écrit pour cela :



- [ ] tableau[4][1]
- [ ] tableau[1][4]
- [X] tableau[3][0]
- [ ] tableau[0][3]

### Traitement de données en tables (Première) - Autres
n°844
<br>
On considère l’extraction suivante d'une base de données des départements français. Cette extraction a ensuite été sauvegardée dans un fichier texte.<br>
```{.quiz}
'1','01','Ain','AIN','ain','A500'
'2','02','Aisne','AISNE','aisne','A250'
'3','03','Allier','ALLIER','allier','A460'
'4','04','Alpes-de-Haute-Provence','ALPES-DE-HAUTE-PROVENCE','alpes-de-haute-provence','A412316152'
'5','05','Hautes-Alpes','HAUTES-ALPES','hautes-alpes','H32412'
```
On considère le code suivant :<br>
```{.quiz}
import csv
with open('departements.csv', newline='') as monFichier:
lesLignes = csv.reader(monFichier)
for uneLigne in lesLignes:
    print(uneLigne[3])
```
Que va produire l'exécution de ce code ?



- [ ] L'affichage de la troisième colonne à savoir le nom du département avec une majuscule initiale
- [ ] L'affichage de tout le contenu du fichier
- [ ] L'affichage du nombre total de départements figurant dans le fichier
- [X] L'affichage de la quatrième colonne, à savoir le nom du département tout en majuscules

### Traitement de données en tables (Première) - Autres
n°845
<br>
Dans la plupart des fichiers CSV, que contient la première ligne ?



- [ ] des notes concernant la table de données
- [ ] les sources des données
- [X] les descripteurs des champs de la table de données
- [ ] l'auteur de la table de données

### Traitement de données en tables (Première) - Autres
n°846
<br>
On considère le code suivant :<br>
```{.quiz}
def clearfield(f):
    for i in range(len(f)):
        fiche[i]['code'] = None
    return f
fiche = [{'nom': 'pierre', 'note': 5.99, 'code': 125},
         {'nom': 'pol', 'note': 2.99, 'code': 82},
         {'nom': 'jack', 'note': 7.99, 'code': 135}]
```
Que renvoie clearfield(fiche) ?



- [ ] 
```{.quiz}
[{'nom': 'pierre', 'note': 5.99, 'code': 125},
{'nom': 'pol', 'note': 2.99, 'code': 82},
{'nom': 'jack', 'note': 7.99, 'code': 135}]
```
- [ ] 
```{.quiz}
[{'nom': 'pierre', 'note': None, 'code': 125},
{'nom': 'pol', 'note': None, 'code': 82},
{'nom': 'jack', 'note': None, 'code': 135}]
```
- [ ] 
```{.quiz}
[{'nom': 'pierre', 'note': 5.99, 'None': 125},
{'nom': 'pol', 'note': 2.99, 'None': 82},
{'nom': 'jack', 'note': 7.99, 'None': 135}]
```
- [X] 
```{.quiz}
[{'nom': 'pierre', 'note': 5.99, 'code': None},
{'nom': 'pol', 'note': 2.99, 'code': None},
{'nom': 'jack', 'note': 7.99, 'code': None}]
```

### Traitement de données en tables (Première) - Autres
n°883
<br>
Qu'affiche le code Python ci-dessous ?<br>
```{.quiz}
notes = {'Paul': 12, 'Jean': 16, 'Clara': 14, 'Aïssa': 18}  
for i in notes:  
    print(notes[i])  
```



- [ ] Les prénoms des élèves
- [X] Les notes des élèves
- [ ] Le prénom puis la note de chaque élève
- [ ] Une erreur

### Traitement de données en tables (Première) - Autres
n°884
<br>
Laquelle de ces affirmations est vraie ?



- [X] on peut ouvrir un fichier CSV à l'aide d'un tableur
- [ ] un fichier CSV permet de gérer l'apparence du code dans l'éditeur
- [ ] un fichier CSV permet de gérer l'apparence d'une page HTML
- [ ] un fichier CSV contient un programme à compiler

### Traitement de données en tables (Première) - Autres
n°885
<br>
On exécute le script suivant :<br>
```{.quiz}
notes = {'Paul': 12, 'Jean': 16, 'Clara': 14, 'Aïssa': 18}
t = list(notes.keys())
```
Quelle est la valeur de t à la fin de cette exécution ?



- [ ] Paul
- [X] ['Paul', ''Jean', 'Clara', ''Aïssa']
- [ ] [12, 16, 14, 18]
- [ ] [ 'Paul': 12, 'Jean': 16, 'Clara': 14, 'Aïssa': 18 ]

### Traitement de données en tables (Première) - Autres
n°886
<br>
On a défini deux tables de données :<br>
```{.quiz}
data1 = [('Bruce', 'Wayne'), ('Chuck', 'Norris'), ('Bruce', 'Lee'), ('Clark', 'Kent')]
data2 = [('Diana', 'Prince'), ('Chuck', 'Norris'), ('Peter', 'Parker')]
```
Quelle instruction permet de construire une table data regroupant l'ensemble des informations de data1 et data2 ?



- [X] data = data1 + data2
- [ ] data == data1 + data2
- [ ] data = [element for element in data1 or data2]
- [ ] data = [data1] + [data2]

### Traitement de données en tables (Première) - Autres
n°887
<br>
Qu'est-ce que le format de fichier CSV ?



- [ ] un format de fichier mis au point par Microsoft pour Excel
- [ ] un format de fichier pour décrire une base de données
- [X] un format de fichier où les données sont séparées par un caractère tel qu'une virgule
- [ ] un format de fichier décrivant une page Web

### Traitement de données en tables (Première) - Autres
n°888
<br>
On a extrait les deux premières lignes de différents fichiers.<br>
Déterminer celui qui est un authentique fichier CSV :



- [X] Nom,Pays,Temps  
Camille Muffat,France,241.45
- [ ] Nom Pays Temps  
Camille Muffat France 241.45
- [ ] [  
{ 'Nom': 'Camille Muffat', 'Pays': 'France', 'Temps': 241.45},
- [ ] [  
{ Nom: 'Camille Muffat', Pays: 'France', Temps: 241.45},

### Traitement de données en tables (Première) - Autres
n°925
<br>
Un fichier CSV …



- [ ] ne peut être lu que par un tableur
- [ ] est l'unique format utilisé pour construire une base de données
- [X] est un fichier texte
- [ ] est un format propriétaire

### Traitement de données en tables (Première) - Autres
n°926
<br>
On exécute le script suivant :<br>
```{.quiz}
a = [1, 2, 3]
b = [4, 5, 6]
c = a + b
```
Que contient la variable c à la fin de cette exécution ?



- [ ] [5,7,9]
- [ ] [1,4,2,5,3,6]
- [X] [1,2,3,4,5,6]
- [ ] [1,2,3,5,7,9]

### Traitement de données en tables (Première) - Autres
n°927
<br>
Qu'est-ce que le format de fichier CSV ?



- [ ] un format de fichier mis au point par Microsoft pour Excel
- [ ] un format de fichier pour décrire une base de données
- [X] un format de fichier où les données sont séparées par un caractère tel qu'une virgule
- [ ] un format de fichier décrivant une page Web

### Traitement de données en tables (Première) - Autres
n°928
<br>
Laquelle de ces listes de chaînes de caractères est triée en ordre croissant ? (l'ordre  <br>
choisi étant l'ordre alphabétique)



- [ ] ['Chat', 'Chien', 'Cheval', 'Cochon']
- [X] ['Chat', 'Cheval', 'Chien', 'Cochon']
- [ ] ['Chien', 'Cheval', 'Cochon', 'Chat']
- [ ] ['Cochon', 'Chien', 'Cheval', 'Chat']

### Traitement de données en tables (Première) - Autres
n°929
<br>
Quelle est la valeur de la variable t1 à la fin de l'exécution du script suivant :<br>
```{.quiz}
t1 = [['Valenciennes', 24],['Lille', 23],['Laon', 31],['Arras', 18]]  
t2 = [['Lille', 62],['Arras', 53],['Valenciennes', 67],['Laon', 48]]  
for i in range(len(t1)):  
    for v in t2:  
        if v[0] == t1[i][0]:  
           t1[i].append(v[1])  
```



- [ ] [['Valenciennes', 67], ['Lille', 62], ['Laon', 48], ['Arras', 53]]
- [X] [['Valenciennes', 24, 67], ['Lille', 23, 62], ['Laon', 31, 48], ['Arras', 18, 53]]
- [ ] [['Arras', 18, 53],['Laon', 31, 48], ['Lille', 23, 62], ['Valenciennes', 24, 67]]
- [ ] [['Valenciennes', 67, 24], ['Lille', 62,23], ['Laon', 48, 31], ['Arras', 53, 18]]

### Traitement de données en tables (Première) - Autres
n°930
<br>
On exécute le script suivant :<br>
```{.quiz}
asso = []  
L =  [ ['marc','marie'], ['marie','jean'], ['paul','marie'], ['marie','marie'], ['marc','anne'] ]  
for c in L :  
    if c[1]=='marie':  
        asso.append(c[0])  
```
Que vaut asso à la fin de l'exécution ?



- [ ] ['marc', 'jean', 'paul']
- [ ] [['marc','marie'], ['paul','marie'], ['marie','marie']]
- [X] ['marc', 'paul', 'marie']
- [ ] ['marie', 'anne']

### Traitement de données en tables (Première) - Autres
n°970
<br>
On considère la table suivante :<br>
```{.quiz}
t = [ {'type': 'marteau', 'prix': 17, 'quantité': 32},
{'type': 'scie', 'prix': 24, 'quantité': 3},
{'type': 'tournevis', 'prix': 8, 'quantité': 45} ]
```
Quelle expression permet d'obtenir la quantité de scies ?



- [ ] t[2]['quantité']
- [X] t[1]['quantité']
- [ ] t['quantité'][1]
- [ ] t['scies']['quantité']

### Traitement de données en tables (Première) - Autres
n°971
<br>
Qu'est-ce que le format de fichier CSV ?



- [ ] un format de fichier mis au point par Microsoft pour Excel
- [ ] un format de fichier pour décrire une base de données
- [X] un format de fichier où les données sont séparées par un caractère tel qu'une virgule
- [ ] un format de fichier décrivant une page Web

### Traitement de données en tables (Première) - Autres
n°972
<br>
On définit :<br>
```{.quiz}
contacts = { 'Toto': 'toto@nsi.fr', 'Chloé': 'chloe@nsi.com',
             'Paul': 'paul@nsi.net', 'Clémence': 'clemence@nsi.org' }
```
Parmi les propositions suivantes, laquelle est exacte ?



- [ ] 'Chloé' est une **valeur** de la variable contacts
- [X] 'Chloé' est une **clé** de la variable contacts
- [ ] 'Chloé' est un **attribut** de la variable contacts
- [ ] 'Chloé' est un **champ** de la variable contacts

### Traitement de données en tables (Première) - Autres
n°973
<br>
Quelle est la valeur de x après exécution du programme ci-dessous ?<br>
```{.quiz}
t = [[3,4,5,1],[33,6,1,2]]
x = t[0][0]
for i in range(len(t)):
    for j in range(len(t[i])):
        if x &lt; t[i][j]:
            x = t[i][j]
```



- [ ] 3
- [ ] 5
- [ ] 6
- [X] 33

### Traitement de données en tables (Première) - Autres
n°974
<br>
On utilise habituellement un fichier d'extension csv pour quel type de données ?



- [ ] des données structurées graphiquement
- [ ] des données sonores
- [ ] des données compressées
- [X] des données structurées en tableau

### Traitement de données en tables (Première) - Autres
n°975
<br>
On souhaite construire une table de 4 lignes de 3 éléments que l’on va remplir de 0. Quelle syntaxe Python utilisera-t-on ?



- [X] [ [ 0 ] \* 3 for i in range (4) ]
- [ ] for i in range (4) [ 0 ] \* 3
- [ ] [ 0 ] \* 3 for i in range (4)
- [ ] [ for i in range (4) [ 0 ] \* 3 ]

### Traitement de données en tables (Première) - Autres
n°1011
<br>
On définit ainsi une liste t puis une liste r :<br>
```{.quiz}
t = [ {'id':1, 'age':23, 'sejour':'PEKIN'},
      {'id':2, 'age':27, 'sejour':'ISTANBUL'},
      {'id':3, 'age':53, 'sejour':'LONDRES'},
      {'id':4, 'age':41, 'sejour':'ISTANBUL'},
      {'id':5, 'age':62, 'sejour':'RIO'},
      {'id':6, 'age':28, 'sejour':'ALGER'} ]
r = [ c for c in t if c['age']&gt;30 and c['sejour']=='ISTANBUL' ]
```
Combien la liste r contient-elle d'éléments ?



- [ ] 0
- [X] 1
- [ ] 2
- [ ] 3

### Traitement de données en tables (Première) - Autres
n°1012
<br>
On exécute le code suivant :<br>
```{.quiz}
table = [ ['lovelace', 'ada', 1815, 1852],
          ['von neumann','john', 1903, 1957],
          ['turing', 'alan', 1912, 1954],
          ['mccarthy', 'john', 1927, 2011],
          ['floyd', 'robert', 1936, 2001] ]
def age(personnage):
    return personnage[3] - personnage[2]
table.sort(key=age, reverse=True)
```
Quelle est la première ligne de la table table à la suite de cette exécution ?



- [ ] ['lovelace', 'ada', 1815, 1852]
- [X] ['mccarthy', 'john', 1927, 2011]
- [ ] ['turing', 'alan', 1912, 1954]
- [ ] ['mccarthy', 'floyd', 'von neumann', 'turing', 'lovelace']

### Traitement de données en tables (Première) - Autres
n°1013
<br>
On exécute le code suivant :<br>
```{.quiz}
collection = [ ('Renault', '4L', 1974, 30),
               ('Peugeot', '504', 1970, 82),
               ('Citroën', 'Traction', 1950, 77) ]
```
Que vaut collection[1][2] ?



- [X] 1970
- [ ] '4L'
- [ ] ('Peugeot', '504', 1970, 82)
- [ ] ('Renault', '4L', 1974, 30)

### Traitement de données en tables (Première) - Autres
n°1014
<br>
Laquelle de ces listes de chaînes de caractères est triée en ordre croissant ?



- [X] ['112', '19', '27', '45', '8']
- [ ] ['8', '19', '27', '45', '112']
- [ ] ['8', '112', '19', '27', '45']
- [ ] ['19', '112', '27', '45', '8']

### Traitement de données en tables (Première) - Autres
n°1015
<br>
On définit ainsi une liste t :<br>
```{.quiz}
t = [ {'id':1, 'age':23, 'sejour':'PEKIN'},
      {'id':2, 'age':27, 'sejour':'ISTANBUL'},
      {'id':3, 'age':53, 'sejour':'LONDRES'},
      {'id':4, 'age':41, 'sejour':'ISTANBUL'},
      {'id':5, 'age':62, 'sejour':'RIO'},
      {'id':6, 'age':28, 'sejour':'ALGER'} ]
```
Quelle affirmation est correcte ?



- [ ] t est une liste de listes
- [X] t est une liste de dictionnaires
- [ ] t est un dictionnaire de listes
- [ ] t est une liste de tuples

### Traitement de données en tables (Première) - Autres
n°1016
<br>
On définit :<br>
```{.quiz}
contacts = { 'Toto': 'toto@nsi.fr', 'Chloé': 'chloe@nsi.com',
             'Paul': 'paul@nsi.net', 'Clémence': 'clemence@nsi.org' }
```
Parmi les propositions suivantes, laquelle est exacte ?



- [ ] 'Chloé' est une **valeur** de la variable contacts
- [X] 'Chloé' est une **clé** de la variable contacts
- [ ] 'Chloé' est un **attribut** de la variable contacts
- [ ] 'Chloé' est un **champ** de la variable contacts

### Traitement de données en tables (Première) - Autres
n°1053
<br>
On utilise habituellement un fichier d'extension csv pour quel type de données ?



- [ ] des données structurées graphiquement
- [ ] des données sonores
- [ ] des données compressées
- [X] des données structurées en tableau

### Traitement de données en tables (Première) - Autres
n°1054
<br>
Parmi les extensions suivantes, laquelle caractérise un fichier contenant des données que l'on peut associer à un tableau de pixels ?



- [ ] pdf
- [ ] xls
- [X] png
- [ ] exe

### Traitement de données en tables (Première) - Autres
n°1055
<br>
On définit ainsi une liste t puis une liste r :<br>
```{.quiz}
t = [{'id':1, 'age':23, 'sejour':'PEKIN'},  
     {'id':2, 'age':27, 'sejour':'ISTANBUL'},  
     {'id':3, 'age':53, 'sejour':'LONDRES'},  
     {'id':4, 'age':41, 'sejour':'ISTANBUL'},  
     {'id':5, 'age':62, 'sejour':'RIO'},  
     {'id':6, 'age':28, 'sejour':'ALGER'}]  
r = [ c for c in t if c['age']&gt;30 and c['sejour']=='ISTANBUL' ]  
```
Combien la liste r contient-elle d'éléments ?



- [ ] 0
- [X] 1
- [ ] 2
- [ ] 3

### Traitement de données en tables (Première) - Autres
n°1056
<br>
On a défini :<br>
```{.quiz}
mendeleiev = [['H','.', '.','.','.','.','.','He'],  
              ['Li','Be','B','C','N','O','Fl','Ne'],  
              ['Na','Mg','Al','Si','P','S','Cl','Ar'],  
              ...... ]  
```
Comment construire la liste des gaz rares, c'est-à-dire la liste des éléments de la dernière colonne ?



- [X] gaz\_rares = [ periode[7] for periode in mendeleiev]
- [ ] gaz\_rares = [ periode for periode in mendeleiev[7]]
- [ ] gaz\_rares = [ periode for periode[7] in mendeleiev]
- [ ] gaz\_rares = [ periode[8] for periode in mendeleiev]

### Traitement de données en tables (Première) - Autres
n°1057
<br>
On souhaite construire une table de 4 lignes de 3 éléments que l’on va remplir de 0. Quelle syntaxe Python utilisera-t-on ?



- [X] [ [ 0 ] \* 3 for i in range (4) ]
- [ ] for i in range (4) [ 0 ] \* 3
- [ ] [ 0 ] \* 3 for i in range (4)
- [ ] [ for i in range (4) [ 0 ] \* 3 ]

### Traitement de données en tables (Première) - Autres
n°1058
<br>
Un fichier CSV …



- [ ] ne peut être lu que par un tableur
- [ ] est l'unique format utilisé pour construire une base de données
- [X] est un fichier texte
- [ ] est un format propriétaire

### Traitement de données en tables (Première) - Autres
n°1095
<br>
Laquelle de ces listes de chaînes de caractères est triée en ordre croissant ?



- [X] ['112', '19', '27', '45', '8']
- [ ] ['8', '19', '27', '45', '112']
- [ ] ['8', '112', '19', '27', '45']
- [ ] ['19', '112', '27', '45', '8']

### Traitement de données en tables (Première) - Autres
n°1096
<br>
On exécute le code suivant :<br>
```{.quiz}
def maxi(t):
    m = t[0]
    for x in t:
        if x[1] &gt;= m[1]:
            m = x
    return m
L = [ ('Alice', 17), ('Barnabé', 17),('Casimir', 17), ('Doriane', 17), ('Emilien', 14), ('Fabienne', 16) ]
```
Quelle est alors la valeur de maxi(L) ?



- [ ] ('Alice',17)
- [X] ('Doriane',17)
- [ ] ('Fabienne',17)
- [ ] ('Emilien',14)

### Traitement de données en tables (Première) - Autres
n°1097
<br>
Soit la table de données suivante :<br>
```{.quiz}
nom,prenom,date_naissance
Dupont,Pierre,17/05/1987
Dupond,Catherine,18/07/1981
Haddock,Archibald,23/04/1998
```
Quels sont les descripteurs de ce tableau ?



- [X] nom, prenom et date\_naissance
- [ ] Dupont, Pierre et 17/05/1987
- [ ] Dupont, Dupond et Haddock
- [ ] il n'y en a pas

### Traitement de données en tables (Première) - Autres
n°1098
<br>
On exécute le code suivant :<br>
```{.quiz}
collection = [('Renault', '4L', 1974, 30),
('Peugeot', '504', 1970, 82),
('Citroën', 'Traction', 1950, 77)]
```
Que vaut collection[1][2] ?



- [X] 1970
- [ ] '4L'
- [ ] ('Peugeot', '504', 1970, 82)
- [ ] ('Renault', '4L', 1974, 30)

### Traitement de données en tables (Première) - Autres
n°1099
<br>
Laquelle de ces listes de chaînes de caractères est triée en ordre croissant ?



- [ ] ['8', '12', '142', '21']
- [ ] ['8', '12', '21', '142']
- [X] ['12', '142', '21', '8']
- [ ] ['12', '21', '8', '142']

### Traitement de données en tables (Première) - Autres
n°1100
<br>
Dans la plupart des fichiers CSV, que contient la première ligne ?



- [ ] des notes concernant la table de données
- [ ] les sources des données
- [X] les descripteurs des champs de la table de données
- [ ] l'auteur de la table de données

### Traitement de données en tables (Première) - Autres
n°1137
<br>
Qu'est-ce que le CSV ?



- [ ] Un langage de programmation
- [X] Un format de fichier permettant de stocker de l’information
- [ ] Un algorithme permettant de rechercher une information dans un fichier
- [ ] Un format de fichier permettant de définir le style d’une page web

### Traitement de données en tables (Première) - Autres
n°1138
<br>
On utilise habituellement un fichier d'extension csv pour quel type de données ?



- [ ] des données structurées graphiquement
- [ ] des données sonores
- [ ] des données compressées
- [X] des données structurées en tableau

### Traitement de données en tables (Première) - Autres
n°1139
<br>
Par quelle expression remplacer les pointillés dans le programme Python suivant, pour que son exécution affiche le numéro de Dupond ?<br>
```{.quiz}
repertoire = [ {'nom':'Dupont', 'tel':'5234'},
{'nom':'Tournesol', 'tel':'5248'},
{'nom':'Dupond', 'tel':'3452'}]
for i in range(len(repertoire)):
    if ...... :
        print(repertoire[i]['tel'])
```



- [ ] nom == 'Dupond'
- [ ] repertoire['nom'] == 'Dupond'
- [ ] repertoire[i] == 'Dupond'
- [X] repertoire[i]['nom'] == 'Dupond'

### Traitement de données en tables (Première) - Autres
n°1140
<br>
On définit une table d'élèves et une liste finale de la façon suivante :<br>
```{.quiz}
table_eleves = [ {'prenom': 'Ada', 'nom': 'Lovelace', 'age': 17},
{'prenom': 'Charles', 'nom': 'Babbage', 'age': 18},
......
{'prenom': 'John', 'nom': 'Von Neumann', 'age': 16} ]
liste_finale = [ eleve for eleve in table_eleves if eleve['age'] &gt;= 18 ]
```
Que contient cette liste finale ?



- [ ] La liste des prénoms des élèves majeurs de la table.
- [ ] La liste des âges des élèves majeurs de la table.
- [X] La liste des élèves majeurs de la table, chaque élément de la liste étant représenté par un dictionnaire.
- [ ] La liste des élèves majeurs de la table, chaque élément de la liste étant représenté par une liste.

### Traitement de données en tables (Première) - Autres
n°1141
<br>
Soit le tableau défini de la manière suivante :  <br>
`tableau = [[1,3,4],[2,7,8],[9,10,6],[12,11,5]]`<br>
On souhaite accéder à la valeur 12, on écrit pour cela :



- [ ] tableau[4][1]
- [ ] tableau[1][4]
- [X] tableau[3][0]
- [ ] tableau[0][3]

### Traitement de données en tables (Première) - Autres
n°1142
<br>
Parmi les extensions suivantes, laquelle caractérise un fichier contenant des données que l'on peut associer à un tableau de pixels ?



- [ ] pdf
- [ ] xls
- [X] png
- [ ] exe

### Traitement de données en tables (Première) - Autres
n°1179
<br>
On a défini :<br>
```{.quiz}
mendeleiev = [ ['H','.', '.','.','.','.','.','He'],
               ['Li','Be','B','C','N','O','Fl','Ne'],
               ['Na','Mg','Al','Si','P','S','Cl','Ar'],
               ...... ]
```
Comment construire la liste des gaz rares, c'est-à-dire la liste des éléments de la dernière colonne ?



- [X] gaz\_rares = [ periode[7] for periode in mendeleiev]
- [ ] gaz\_rares = [ periode for periode in mendeleiev[7]]
- [ ] gaz\_rares = [ periode for periode[7] in mendeleiev]
- [ ] gaz\_rares = [ periode[8] for periode in mendeleiev]

### Traitement de données en tables (Première) - Autres
n°1180
<br>
Laquelle de ces listes de chaînes de caractères est triée en ordre croissant ?



- [X] ['112', '19', '27', '45', '8']
- [ ] ['8', '19', '27', '45', '112']
- [ ] ['8', '112', '19', '27', '45']
- [ ] ['19', '112', '27', '45', '8']

### Traitement de données en tables (Première) - Autres
n°1181
<br>
Qu'est-ce que le CSV ?



- [ ] Un langage de programmation
- [X] Un format de fichier permettant de stocker de l’information
- [ ] Un algorithme permettant de rechercher une information dans un fichier
- [ ] Un format de fichier permettant de définir le style d’une page web

### Traitement de données en tables (Première) - Autres
n°1182
<br>
On considère l’extraction suivante d'une base de données des départements français. Cette extraction a ensuite été sauvegardée dans un fichier texte.<br>
```{.quiz}
'1','01','Ain','AIN','ain','A500'
'2','02','Aisne','AISNE','aisne','A250'
'3','03','Allier','ALLIER','allier','A460'
'4','04','Alpes-de-Haute-Provence','ALPES-DE-HAUTE-PROVENCE','alpes-de-haute-provence','A412316152'
'5','05','Hautes-Alpes','HAUTES-ALPES','hautes-alpes','H32412'
```
Quel est le format de ce fichier ?



- [ ] YML
- [ ] XML
- [X] CSV
- [ ] JSON

### Traitement de données en tables (Première) - Autres
n°1183
<br>
On exécute le script suivant :<br>
```{.quiz}
asso = []
L =  [ ['marc','marie'], ['marie','jean'], ['paul','marie'],
       ['marie','marie'], ['marc','anne'] ]
for c in L :
    if c[1]==‘marie’:
        asso.append(c[0])
```
Que vaut asso à la fin de l'exécution ?



- [ ] ['marc', 'jean', 'paul']
- [ ] [['marc','marie'], ['paul','marie'], ['marie','marie']]
- [X] ['marc', 'paul', 'marie']
- [ ] ['marie', 'anne']

### Traitement de données en tables (Première) - Autres
n°1184
<br>
On exécute le code suivant :<br>
```{.quiz}
collection = [('Renault', '4L', 1974, 30),
              ('Peugeot', '504', 1970, 82),
              ('Citroën', 'Traction', 1950, 77)]
```
Que vaut collection[1][2] ?



- [X] 1970
- [ ] '4L'
- [ ] ('Peugeot', '504', 1970, 82)
- [ ] ('Renault', '4L', 1974, 30)

### Traitement de données en tables (Première) - Autres
n°1220
<br>
Soit le tableau défini de la manière suivante : tableau = [[1,3,4],[2,7,8],[9,10,6],[12,11,5]]<br>
On souhaite accéder à la valeur 12, on écrit pour cela :



- [ ] tableau[4][1]
- [ ] tableau[1][4]
- [X] tableau[3][0]
- [ ] tableau[0][3]

### Traitement de données en tables (Première) - Autres
n°1221
<br>
On utilise habituellement un fichier d'extension csv pour quel type de données ?



- [ ] des données structurées graphiquement
- [ ] des données sonores
- [ ] des données compressées
- [X] des données structurées en tableau

### Traitement de données en tables (Première) - Autres
n°1222
<br>
On définit la variable suivante : lettres = {'a': 1, 'b': 2, 'c': 3}.<br>
Quelle est la valeur de l'expression list(lettres.keys()) ?



- [ ] [a,b,c]
- [ ] [1,2,3]
- [X] ['a','b','c']
- [ ] {'a': 1, 'b': 2, 'c': 3}

### Traitement de données en tables (Première) - Autres
n°1223
<br>
Qu'est-ce que le format de fichier CSV ?



- [ ] un format de fichier mis au point par Microsoft pour Excel
- [ ] un format de fichier pour décrire une base de données
- [X] un format de fichier où les données sont séparées par un caractère tel qu'une virgule
- [ ] un format de fichier décrivant une page Web

### Traitement de données en tables (Première) - Autres
n°1224
<br>
On exécute le code suivant :<br>
```{.quiz}
dict = { 'alexandre' : 17, 'mehdi' : 18,  'jeanne' : 16, 'charlotte' : 19, 'celina' : 18, 'noé' : 19  }
def f(dic):
    for cle, valeur in dic.items():
        if valeur &gt; 18:
            return cle
```
Que renvoie l'appel f(dict) ?



- [ ] 19
- [ ] 19,19
- [X] 'charlotte'
- [ ] 'charlotte','noé'

### Traitement de données en tables (Première) - Autres
n°1225
<br>
On considère l’extraction suivante d'une base de données des départements français. Cette extraction a ensuite été sauvegardée dans un fichier texte.<br>
```{.quiz}
'1','01','Ain','AIN','ain','A500'
'2','02','Aisne','AISNE','aisne','A250'
'3','03','Allier','ALLIER','allier','A460'
'4','04','Alpes-de-Haute-Provence','ALPES-DE-HAUTE-PROVENCE','alpes-de-haute-provence','A412316152'
'5','05','Hautes-Alpes','HAUTES-ALPES','hautes-alpes','H32412'
```
Quel est le format de ce fichier ?



- [ ] YML
- [ ] XML
- [X] CSV
- [ ] JSON

### Traitement de données en tables (Première) - Autres
n°1316
<br>
Qu'est-ce que le CSV ?



- [ ] Un langage de programmation
- [X] Un format de fichier permettant de stocker de l’information
- [ ] Un algorithme permettant de rechercher une information dans un fichier
- [ ] Un format de fichier permettant de définir le style d’une page web

### Traitement de données en tables (Première) - Autres
n°1317
<br>
On a extrait les deux premières lignes de différents fichiers.<br>
Déterminer celui qui est un authentique fichier CSV :



- [X] Nom,Pays,Temps  
Camille Muffat,France,241.45
- [ ] Nom Pays Temps  
Camille Muffat France 241.45
- [ ] [  
{ 'Nom': 'Camille Muffat', 'Pays': 'France', 'Temps': 241.45},
- [ ] [  
{ Nom: 'Camille Muffat', Pays: 'France', Temps: 241.45},

### Traitement de données en tables (Première) - Autres
n°1318
<br>
Quelle expression Python permet d’accéder au numéro de téléphone de Tournesol, sachant que le répertoire a été défini par l’affectation suivante :<br>
```{.quiz}
repertoire = [ {'nom':'Dupont', 'tel':'5234'},
               {'nom':'Tournesol', 'tel':'5248'},
               {'nom':'Dupond', 'tel':'3452'}]
```



- [ ] 
```{.quiz}
repertoire['Tournesol']
```
- [ ] 
```{.quiz}
repertoire['tel'][1]
```
- [X] 
```{.quiz}
repertoire[1]['tel']
```
- [ ] 
```{.quiz}
repertoire['Tournesol'][tel]
```

### Traitement de données en tables (Première) - Autres
n°1319
<br>
On définit la fonction suivante qui prend en argument un tableau non vide d'entiers.<br>
```{.quiz}
def f(T):
    s = 0
    for k in T:
        if k == 8:
            s = s+1
    if s &gt; 1:
        return True
    else:
        return False
```
Dans quel cas cette fonction renvoie-t-elle la valeur True ?



- [ ] dans le cas où 8 est présent au moins une fois dans le tableau T
- [X] dans le cas où 8 est présent au moins deux fois dans le tableau T
- [ ] dans le cas où 8 est présent exactement une fois dans le tableau T
- [ ] dans le cas où 8 est présent exactement deux fois dans le tableau T

### Traitement de données en tables (Première) - Autres
n°1320
<br>
On exécute le script suivant :<br>
```{.quiz}
a = [1, 2, 3]
b = [4, 5, 6]
c = a + b
```
Que contient la variable c à la fin de cette exécution ?



- [ ] [5,7,9]
- [ ] [1,4,2,5,3,6]
- [X] [1,2,3,4,5,6]
- [ ] [1,2,3,5,7,9]

### Traitement de données en tables (Première) - Autres
n°1321
<br>
On définit :<br>
```{.quiz}
T = [ {'fruit': 'banane', 'nombre': 25}, {'fruit': 'orange', 'nombre': 124},
      {'fruit': 'pomme', 'nombre': 75}, {'fruit': 'kiwi', 'nombre': 51} ]
```
Quelle expression a-t-elle pour valeur le nombre de pommes ?



- [X] T[2]['nombre']
- [ ] T[2,'nombre']
- [ ] T[3]['nombre']
- [ ] T[3,'nombre']

### Traitement de données en tables (Première) - Indexation de table
n°1339
<br>
On écrit la fonction suivante :<br>
```{.quiz}
def extreme(t, test):
    m = t[0]
    for x in t:
        if test(x,m):
            m = x
    return m
```
On dispose d'une liste L dont les éléments sont des couples (nom, note).<br>
Par exemple :<br>
```{.quiz}
L = [ ('Alice', 17),('Barnabé', 18),('Casimir', 17),('Doriane', 20),('Emilien', 15), ('Fabienne', 16) ]
```
On aimerait que l'appel de fonction extreme(L, test) renvoie un couple présentant la note maximale.<br>
Quelle définition de la fonction test peut-on utiliser ?



- [ ] 
```{.quiz}
def test(a,b):
    return a[0] &lt; b[0]
```
- [ ] 
```{.quiz}
def test(a,b):
    return a[0] &gt; b[0]
```
- [ ] 
```{.quiz}
def test(a,b):
    return a[1] &lt; b[1]
```
- [X] 
```{.quiz}
def test(a,b):
    return a[1] &gt; b[1]
```

### Traitement de données en tables (Première) - Autres
n°1364
<br>
Un fichier CSV …



- [ ] ne peut être lu que par un tableur
- [ ] est l'unique format utilisé pour construire une base de données
- [X] est un fichier texte
- [ ] est un format propriétaire

### Traitement de données en tables (Première) - Indexation de table
n°1529
<br>
Indexation de table<br>
Pourquoi est-il surtout intéressant d'indexer une table de données ?



- [X] Pour faciliter et accélérer la recherche de données ciblées.
- [ ] Pour atteindre les données d'une table.
- [ ] Pour modifier la table de données et la rendre plus claire et efficace.
- [ ] Pour faciliter et accélérer la recherche de toutes les données de la table.

### Traitement de données en tables (Première) - Indexation de table
n°1530
<br>
Indexation de table<br>
Quel moyen technique est exploité pour créer un index ?



- [ ] Le tri de la table de donnée
- [X] Le choix de clés pertinentes dans un nouveau dictionnaire, crée à partir des données de la table.
- [ ] Le tri d'un nouveau dictionnaire, crée à partir des données de la table.
- [ ] L'optimisation d'un tableau de dictionnaires, crée à partir des données de la table.

### Traitement de données en tables (Première) - Fusion de tables
n°1531
<br>
Fusion de tables<br>
On dispose des deux tables suivantes :<br>
- Les résultats d'élections municipales, pour tous les bureaux de vote d'une ville. On y trouve le numéro et la localisation de tous les bureaux de votes, les noms et les résultats de tous les candidats.<br>
- Les candidats à cette élection municipale, incluant des informations non présentes dans la première table (leur parti politique, leur âge, leur profession, etc)<br>
On souhaite réunir ces informations en une seule table. Est-ce possible ?



- [ ] Non, car les descripteurs sont incompatibles.
- [ ] Oui, on procède à une fusion. Plus précisément, on procède à une réunion de nos deux tables.
- [X] Oui, on procède à une fusion. Plus précisément, on procède à une jointure de nos deux tables.
- [ ] Oui, on procède à une fusion. Plus précisément, on procède à un rassemblement de nos deux tables.

### Traitement de données en tables (Première) - Tri d'une table
n°1538
<br>
Tris<br>
Parmi les propositions suivantes, quelle est celle qui ne correspond pas à une méthode de tri ?



- [ ] Par sélection
- [ ] Par insertion
- [X] Par rotation
- [ ] Par fusion

### Traitement de données en tables (Première) - Indexation de table
n°1754
<br>
Quelle syntaxe Python pourrait-on utiliser pour construire une table de 2 lignes de 4 éléments, remplie de zéros ?



- [ ] [ 2 \* 4 \* [0] ]
- [ ] [0] \* 4 for i in range(2)
- [ ] [ [0] \* 2 for i in range(4)
- [X] [[0] \* 4 for i in range(2)]

### Traitement de données en tables (Première) - Indexation de table
n°1755
<br>
Soit un tableau t défini ainsi :<br>
t = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]<br>
Quelle syntaxe permet d'accéder à la valeur 8 ?



- [ ] t[1][8]
- [ ] t[8]
- [X] t[2][1]
- [ ] t[3][2]

### Traitement de données en tables (Première) - Tri d'une table
n°1756
<br>
Parmi ces listes, laquelle est triée en ordre croissant ?



- [ ] ['21','23','35','117']
- [X] ['11','2','3','4']
- [ ] ['8','32','114','308']
- [ ] ['4','3','2','1']

### Traitement de données en tables (Première) - Fusion de tables
n°1757
<br>
On souhaite fusionner les deux tables suivantes en une seule table appelée t<br>
```{.quiz}
table1 = [('Kover', 'Harry'), ('Eigeri', 'Tom'), ('Caman', 'Mehdi')]
table2 = [('Times', 'Vincent'), ('Peuplus', 'Jean')]
```
Quelle instruction permet de générer t ?



- [ ] 
```{.quiz}
t == table1 + table2
```
- [X] 
```{.quiz}
t = table1 + table2
```
- [ ] 
```{.quiz}
t = [(i, j) for i in table1 for j in table2]
```
- [ ] 
```{.quiz}
t = sorted(table1, table2)
```

### Traitement de données en tables (Première) - Autres
n°1758
<br>
Lequel de ces scripts représente des données au format CSV ?



- [ ] 
```{.quiz}
[['id', 'nom', 'race'], [1, 'Wanita', 'Tigre']]
```
- [ ] 
```{.quiz}
{'id': 1, 'nom': 'Wanita', 'race': 'Tigre'}
```
- [ ] 
```{.quiz}
(('id', 'nom', 'race'), (1, 'Wanita', 'Tigre'))
```
- [X] 
```{.quiz}
id, nom, race
1, Wanita, Tigre
```

### Traitement de données en tables (Première) - Recherche dans une table
n°1759
<br>
Sur un site web de météo, on trouve les hauteurs de précipitations mensuelles moyennes de l'année 2020, en mm d'eau. On exécute le script suivant:<br>
Quel appel de fonction renvoie la liste des mois ayant une pluviométrie mensuelle supérieure à 40 mm d'eau en 2020 ?
<br>
![image](/assets/images/qcm/1759_q6.jpg)
<br>


- [X] 
```{.quiz}
recherche(annee, 40)
```
- [ ] 
```{.quiz}
recherche(mois, 40)
```
- [ ] 
```{.quiz}
recherche(annee, pluvieux, 40)
```
- [ ] 
```{.quiz}
recherche(2020, 40)
```

### Traitement de données en tables (Première) - Autres
n°1760
<br>
Le script suivant permet d'ouvrir un fichier CSV<br>
Quelle instruction permet d'affecter le contenu du fichier data.csv à la variable table ?
<br>
![image](/assets/images/qcm/1760_q7.jpg)
<br>


- [ ] 
```{.quiz}
open('data.csv') as table
```
- [ ] 
```{.quiz}
table = csv.reader('data.csv')
```
- [X] 
```{.quiz}
table = lecture_fichier('data.csv')
```
- [ ] 
```{.quiz}
import data.csv
```

### Traitement de données en tables (Première) - Autres
n°1761
<br>
Laquelle de ces propositions est fausse ?



- [ ] Le format CSV est lisible sans logiciel particulier.
- [ ] Le format CSV facilite l'interopérabilité.
- [X] Le format CSV nécessite un programmé dédié pour être lu.
- [ ] Le format CSV n'est plus utilisé.

### Traitement de données en tables (Première) - Autres
n°1762
<br>
Quel est un des défauts du format CSV :



- [X] Il ne permet pas de stocker simplement des données contenant des virgules.
- [ ] Il ne peut pas être ouvert par un programme de type tableur.
- [ ] Il ne permet pas de stocker des données contenant des accents.
- [ ] Il est difficilement interopérable.

### Traitement de données en tables (Première) - Indexation de table
n°1763
<br>
Deux garages automobiles souhaitent mettre en relation leurs bases de données concernant la réparation des véhicules.<br>
Pour cela, ils exportent leurs bases de données au format CSV, avec entre autres les colonnes suivantes :<br>
« Immatriculation », « Numéro de série », « Nom du propriétaire », « Modèle », ...<br>
Sur quelle information peuvent-ils mettre en relation les réparations faites sur un même véhicule entre les deux garages ?



- [ ] Modèle
- [ ] Immatriculation
- [X] Numéro de série
- [ ] Nom du propriétaire

### Traitement de données en tables (Première) - Indexation de table
n°1764
<br>
Un libraire cherche à fusionner deux listes d'ouvrages.<br>
Les deux listes contiennent les colonnes suivantes : « Titre », « Auteur », « ISBN » (International Standard Book Number), « Description », « Édition ».<br>
Quelle est la donnée qui permet d'identifier les doublons dans ces deux listes ?



- [ ] La description.
- [ ] Le couple titre et auteur.
- [ ] L'édition.
- [X] L'ISBN.

### Traitement de données en tables (Première) - Autres
n°1765
<br>
Quel format de fichier permet d'échanger facilement la liste des communes de France, entre le site https://www.data.gouv.fr/ et un programme que vous avez écrit ?



- [ ] HTML
- [ ] XLS
- [ ] JPEG
- [X] CSV

### Traitement de données en tables (Première) - Fusion de tables
n°1766
<br>
Que contient la variable r à la fin de l'exécution de cet extrait de code Python ci dessous :<br>
```{.quiz}
m = [
 [ 'Tulipe', 'Rouge' ],
 [ 'Tulipe', 'Orange' ],
 [ 'Rose', 'Blanc' ],
 [ 'Jonquille', 'Jaune' ]
]
r = [l for l in m if l[0] != 'Tulipe' or l[1] != 'Blanc']
```



- [ ] L'ensemble des lignes de m dont la première colonne n'est pas Tulipe.
- [X] L'ensemble des lignes de la liste m.
- [ ] Une liste vide.
- [ ] L'ensemble des lignes de m dont la deuxième colonne n'est pas Blanc.

### Traitement de données en tables (Première) - Fusion de tables
n°1767
<br>
Quelle propriété doit être respectée avant de fusionner deux tables ?



- [X] Les tables doivent partager les mêmes descripteurs.
- [ ] Les doublons des deux tables doivent avoir été supprimés.
- [ ] Les tables doivent avoir le même nombre de lignes.
- [ ] Les tables doivent avoir le même nom.

### Traitement de données en tables (Première) - Recherche dans une table
n°1768
<br>
En Python, on a décodé un fichier CSV ayant pour première ligne : « Titre,Auteur,ISBN »<br>
Chaque ligne est découpée au niveau des « , » en une liste, et chacune de ces listes est à son tour stockée dans une liste nommée csv. La première ligne du fichier est ignorée par le décodage.<br>
De quelle façon peut-on récupérer la liste des ISBN de ce fichier CSV ?



- [ ] 
```{.quiz}
[ ligne['ISBN'] for ligne in csv ]
```
- [ ] 
```{.quiz}
[ ISBN for ligne in csv ]
```
- [X] 
```{.quiz}
[ ligne[2] for ligne in csv ]
```
- [ ] 
```{.quiz}
[ ligne[3] for ligne in csv ]
```

### Traitement de données en tables (Première) - Fusion de tables
n°1769
<br>
On veut concaténer deux fichier CSV. Le premier commence par « Titre,Auteur,ISBN », le second par « ISBN,Titre,Auteur ».



- [X] Il faut réorganiser les colonnes d'un des fichiers, et supprimer la ligne d'en-tête du second fichier.
- [ ] Il suffit de mettre un fichier à la suite de l'autre.
- [ ] On ne peut pas.
- [ ] Il faut obligatoirement utiliser un tableur.

### Traitement de données en tables (Première) - Recherche dans une table
n°1770
<br>
Que contient la variable r à la fin de l'exécution de cet extrait de code Python ci dessous :<br>
```{.quiz}
m = [
 [ 'Tulipe', 'Rouge' ],
 [ 'Tulipe', 'Orange' ],
 [ 'Rose', 'Blanc' ],
 [ 'Jonquille', 'Jaune' ]
]
r = [l for l in m if l[0] == 'Tulipe' ]
```



- [X] L'ensemble des lignes de m dont la première colonne est Tulipe.
- [ ] Une liste vide.
- [ ] L'ensemble des lignes de m dont la première colonne n'est pas Tulipe.
- [ ] L'ensemble des lignes de la liste m.

### Traitement de données en tables (Première) - Autres
n°1771
<br>
La première ligne d'un fichier CSV



- [ ] Doit être laissée vide.
- [ ] Représente souvent le nombre de lignes du fichier.
- [X] Représente souvent les descripteurs des colonnes stockées dans le fichier.
- [ ] Représente souvent un commentaire sur le contenu du fichier.

### Traitement de données en tables (Première) - Autres
n°1772
<br>
Le format CSV permet de :



- [ ] Chiffrer des données.
- [ ] Coder un programme en Python.
- [ ] Représenter une page web.
- [X] Représenter des données en tables.

### Traitement de données en tables (Première) - Tri d'une table
n°1901
<br>
Tri d'une table<br>
 Le tri d'une table se fait selon :



- [X] une colonne
- [ ] un domaine de valeurs
- [ ] un critère
- [ ] un enregistrement

### Traitement de données en tables (Première) - Recherche dans une table
n°1902
<br>
Interrogation<br>
 Le résultat de l'interrogation d'une table est :



- [ ] un entier
- [ ] un critère
- [X] une autre table
- [ ] un enregistrement

### Traitement de données en tables (Première) - Fusion de tables
n°1903
<br>
Fusion de tables<br>
 On dispose d’une table patients de personnes décrits par 4 colonnes « Nom », « Prénom », « Age », « Numéro de sécurité sociale » et d’une table affections contenant « Nom », « Prénom », « Numéro de sécurité sociale », « Maladie », « Date d’entrée à l’hôpital ».  <br>
On souhaite fusionner ces deux tables pour faciliter la gestion des patients et leur distribution entre les services pédiatriques, gérontologiques et autres.  <br>
Quelle donnée doit-on utiliser pour fusionner ces tables ?



- [ ] Le nom du patient
- [ ] Le prénom du patient
- [X] Le numéro de sécurité sociale du patient
- [ ] La maladie du patient

### Traitement de données en tables (Première) - Recherche dans une table
n°1904
<br>
Interrogation<br>
 On a récupéré le contenu d'un fichier CSV contenant le nom, le prénom et l'âge de personnes dans une table implémentée par la liste de dictionnaires suivante :   <br>
table = [{'nom': 'dupont','prenom': 'jean','age': 16},  <br>
           {'nom': 'durant','prenom': 'pierre','age': 15},  <br>
              {'nom': 'doe','prenom': 'jane','age': 16}]<br>
Quelle expression représente-t-elle la liste des noms des personnes dont l'âge a pour valeur 16 ?



- [ ] [nom if age==16 for nom,age in table ]
- [ ] [personne['nom'] for personne in table if personne['age']=16]
- [X] [personne['nom'] for personne in table if personne['age']==16]
- [ ] [personne[nom] for personne in table if personne[age]==16]

