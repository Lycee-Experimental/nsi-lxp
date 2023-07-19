### Algorithmique (Terminale) - Arbres
n°1515
<br>
On a saisi le code suivant :<br>
```{.quiz}
def parcours_fixe(arbre):
    if arbre != None:
        parcours_fixe(arbre.gauche)
        print(arbre.clé)
        parcours_fixe(arbre.droit)
```
Quel tri parcours permet ce script ?



- [X] Infixe
- [ ] Postfixe
- [ ] Suffixe
- [ ] Patafixe

### Algorithmique (Terminale) - Autres
n°1537
<br>
Complexité<br>
L'expression de la complexité d'un algorithme traitant \(n \) données est la suivante:<br>
\(T\_n = 4n(n-1) \)<br>
De quelle classe de complexité s'agit-il ?



- [ ] Linaire
- [X] Quadratique
- [ ] Constante
- [ ] Logarithmique

### Algorithmique (Terminale) - Programmation dynamique
n°1540
<br>
En POO qu’est-ce qu’une instance ?



- [ ] C’est un synonyme du terme « classe »
- [X] Une occurrence particulière d’une classe
- [ ] C’est l’état d’une classe à un moment donné
- [ ] C’est l’identifiant d’un objet

### Algorithmique (Terminale) - Graphes
n°1554
<br>
Quelle est la matrice de ce graphe ?
<br>
![image](/assets/images/qcm/1554_matrice_graphebis.png)
<br>


- [X] 
```{.quiz}
  A B C D
A 0 1 0 0
B 1 0 1 1
C 0 1 0 1
D 0 1 1 0
```
- [ ] 
```{.quiz}
  A B C D
A 1 0 1 1
B 0 1 0 0
C 1 0 1 0
D 1 0 0 1
```
- [ ] 
```{.quiz}
  A B C D
A 1 0 0 1
B 1 0 1 0
C 0 1 0 0
D 1 0 1 1
```
- [ ] 
```{.quiz}
  A B C D
A 0 1 1 0
B 0 1 0 1
C 1 0 1 1
D 0 1 0 0
```

### Algorithmique (Terminale) - Graphes
n°1555
<br>
Quel est le type de ce graphe ?
<br>
![image](/assets/images/qcm/1555_doc363_it1.png)
<br>


- [X] complet et connexe.
- [ ] complet et complexe
- [ ] connexe et orienté
- [ ] orienté et complet

### Algorithmique (Terminale) - Graphes
n°1556
<br>
Chaque utilisateur représente un ... du graphe
<br>
![image](/assets/images/qcm/1556_grapheSocial.png)
<br>


- [X] Sommet
- [ ] Noeud
- [ ] Composant
- [ ] élement

### Algorithmique (Terminale) - Recherche textuelle
n°1583
<br>
Boyer-Moore<br>
Dans la chaine suivante :<br>
```{.quiz}
CAATGTCTGCACCAAGACGCCGGCAGGTGCAGACCTTCGTTATAGGCGATGATTTCGAACCTACTAGTGGGTCTC
TTAGGCCGAGCGGTTCCGAGAGATAGTGAAAGATGGCTGGGCTGTGAAGGGAAGGAGTCGTGAAAGCGCGAACAC
GAGTGTGCGCAAGCGCAGCGCCTTAGTATGCTCCAGTGTAGAAGCTCCGGCGTCCCGTCTAACCGTACGCTGTCC
CCGGTACATGGAGCTAATAGGCTTTACTGCCCAATATGACCCCGCGCCGCGACAAAACAATAACAGTT
```
Combien d'étapes faut-il pour trouver la chaine suivante ? (toutes les lettres doivent correspondre)<br>
```{.quiz}
CGGCAG
```



- [ ] 8
- [ ] 9
- [X] 10
- [ ] 11

### Algorithmique (Terminale) - Recherche textuelle
n°1584
<br>
**Boyer-Moore**<br>
*L'algorithme de Boyer-Moore se base sur les caractéristiques suivantes :<br>
L'algorithme effectue un prétraitement du motif. Cela signifie que l'algorithme 'connait' les caractères qui se trouvent dans le motif<br>
on commence la comparaison motif-chaine par la \_\_x\_X\_x\_\_ du motif. Par exemple pour le motif CGGCAG, on compare d'abord le \_\_x\_X\_x\_\_, puis les autres lettres, on parcourt le motif de la \_\_x\_X\_x\_\_ vers la \_\_x\_X\_x\_\_.<br>
Dans la méthode naïve, les décalages du motif vers la droite se faisaient toujours d'un 'cran' à la fois. L'intérêt de l'algorithme de Boyer-Moore, c'est qu'il permet, dans certaines situations, d'effectuer un décalage de plusieurs crans en une seule fois.*<br>
Quels sont les mots manquants ? (\_\_x\_X\_x\_\_)



- [X] droite / G / droite / gauche
- [ ] gauche / C / gauche / droite
- [ ] gauche / C / droite / gauche
- [ ] droite / G / gauche / droite

### Algorithmique (Terminale) - Recherche textuelle
n°1587
<br>
DANS LA MÉTHODE NAÏVE, COMBIEN DE COMPARAISONS NÉCESSAIRES POUR TROUVER LE MOTIF ACG ?
<br>
![image](/assets/images/qcm/1587_Capture+d%E2%80%99%C3%A9cran+2021-05-07+%C3%A0+11.13.06.png)
<br>


- [ ] 1
- [ ] 17
- [ ] 25
- [X] 21

### Algorithmique (Terminale) - Recherche textuelle
n°1588
<br>
QU'EST CE QUI DIFFÉRENCIE L'ALGORITME DE BOYER-MOORE À SA MÉTHODE NAIVE:



- [ ] Les décalages de motifs se font obligatoirement par un
- [ ] Il commence par le motif le plus à gauche
- [ ] Il prend en compte les chiffres/ caractères spéciaux/ lettres/symboles
- [X] L'algorithme effectue un prétraitement du motif

### Algorithmique (Terminale) - Recherche textuelle
n°1589
<br>
L'EFFICACITÉ DE L'ALGORITHME BOYER-MOORE VARIE EN FONCTION DE LA LONGUEUR DU MOTIF



- [X] C'est Vrai
- [ ] C'est Faux
- [ ] Cela dépend du 'type' de motif
- [ ] Cela dépend du type de cellule protéique

### Algorithmique (Terminale) - Recherche textuelle
n°1590
<br>
LE PROBLÈME DE L'ALIGNEMENT DES SÉQUENCES EST UTILISÉ EN BIO-INFORMATIQUE ?



- [X] OUI
- [ ] NON
- [ ] NE PAS SELECTIONNER (Le Bio informatique n'existe pas)
- [ ] NE PAS SELECTIONNER (Je n'aime pas le Bio)

### Algorithmique (Terminale) - Recherche textuelle
n°1591
<br>
QUE FAIT L'ALGORITHME BOYER-MOORE S'IL NE RENCONTRE PAS LE BON SUFFIXE MAIS UNE/DES LETTRE-S QUI SONT DANS LE MOTIF ??<br>
Il décale la recherche du motif de ...



- [ ] ... la largeur du motif, vers la droite
- [ ] ... de un, vers la droite
- [X] ... d'autant de cran que de lettre-s qui sont dans le motif, vers la droite
- [ ] ... de un, vers la gauche

### Algorithmique (Terminale) - Diviser pour régner
n°1592
<br>
POUR UNE LISTE DE HUIT ÉLÉMENTS, AVEC LA MÉTHODE DR, QUELLE EST LA CONDITION D'ARRÊT DE LA RÉCURSIVITÉ AU RÉGNE ?



- [X] l'obtention d'une liste à un seul élément
- [ ] la liste est triée
- [ ] les sous-listes sont triés
- [ ] l'obtention d'une liste à un huit élément

### Algorithmique (Terminale) - Diviser pour régner
n°1593
<br>
LE PARADIGME DIVISER POUR RÉGNER REPOSE SUR TROIS ÉTAPES



- [X] Diviser Régner Combiner
- [ ] Diviser Combiner Régner
- [ ] Régner Combiner Diviser
- [ ] Combiner Diviser Régner

### Algorithmique (Terminale) - Recherche textuelle
n°1596
<br>
QU'EST CE QUI DIFFÉRENCIE L'ALGORITME DE BOYER-MOORE À SA MÉTHODE NAIVE:



- [ ] Les décalages se font obligatoirement par la taille du motif
- [ ] Il prend en compte les chiffres/ caractères spéciaux/ lettres/symboles
- [ ] L'algorithme effectue un post-traitement du motif
- [X] Il commence par la droite du motif

### Algorithmique (Terminale) - Recherche textuelle
n°1597
<br>
DANS LA MÉTHODE NAÏVE, COMBIEN DE COMPARAISONS NÉCESSAIRES POUR TROUVER LE MOTIF **AGA** DANS LA CHAINE SUIVANTE ?<br>
CAAGCGCACAAGACGCGGCAGACCTTC<br>
*Photo illustrative et non contractuelle*
<br>
![image](/assets/images/qcm/1597_Capture+d%E2%80%99%C3%A9cran+2021-05-07+%C3%A0+11.13.06.png)
<br>


- [ ] 10
- [ ] 22
- [ ] 26
- [X] 18

### Algorithmique (Terminale) - Recherche textuelle
n°1598
<br>
QUE FAIT L'ALGORITHME BOYER-MOORE S'IL NE RENCONTRE PAS LE BON SUFFIXE NI AUCUNE LETTRE DU MOTIF ??<br>
Il décale la recherche du motif de ...



- [X] ... la largeur du motif, vers la droite
- [ ] ... de un, vers la droite
- [ ] ... de un, vers la gauche
- [ ] ... d'autant de cran que de lettre-s qui sont dans le motif, vers la droite

### Algorithmique (Terminale) - Diviser pour régner
n°1599
<br>
POUR UNE LISTE DE DIX ÉLÉMENTS, AVEC LA MÉTHODE DR (DIVISER POUR REGNER), QUELLE EST LA CONDITION D'ARRÊT DE LA RÉCURSIVITÉ A L'ETAPE DU RÉGNE ?<br>
Réponses :



- [X] l'obtention de listes à un seul élément
- [ ] les sous-listes sont triés
- [ ] la liste est triée
- [ ] l'obtention d'une liste à dix éléments

### Algorithmique (Terminale) - Autres
n°1802
<br>
Tri par selection<br>
La complexité du tri par sélection est en



- [X] \(O(n^2)\)
- [ ] \(O(nlog\_2n)\)
- [ ] \(O(n)\)
- [ ] \(O(log\_2n)\)

### Algorithmique (Terminale) - Diviser pour régner
n°1803
<br>
Tri fusion<br>
La complexité du tri fusion est en



- [X] \(O(nlog\_2n)\)
- [ ] \(O(n)\)
- [ ] \(O(n^2)\)
- [ ] \(O(log\_2n)\)

### Algorithmique (Terminale) - Programmation dynamique
n°1805
<br>
La programmation dynamique<br>
On a le code suivant pour avoir le terme d'indice n de la suite de Fibonnacci :<br>
```{.quiz}
def fibo_dynamique(n,tab) :
    if n &lt; 2 :
        ...=1
        return ...
    elif ...!=0 :
       return ...
    else:
        ...=fibo_dynamique(n-2,tab) + fibo_dynamique(n-1,tab)
    return ...
```
On complete le code avec



- [ ] tab
- [X] tab[n]
- [ ] tab(n)
- [ ] resultat

### Algorithmique (Terminale) - Diviser pour régner
n°1891
<br>
Implémentation  <br>
Par quoi implémente-on souvent la méthode Diviser pour régner ?



- [ ] Une classe
- [ ] Une fonction itérative
- [X] Une fonction récursive
- [ ] un parcours

### Algorithmique (Terminale) - Diviser pour régner
n°1892
<br>
Comparaison avec l'algorithme glouton<br>
Par rapport, à l'algorithme glouton, la méthode diviser pour régner :



- [ ] consomme moins de ressources.
- [ ] est construit sur le même principe.
- [ ] est plus rapide.
- [X] renvoie une solution toujours optimale.

### Algorithmique (Terminale) - Diviser pour régner
n°1893
<br>
Principe<br>
Sur quel principe est construit la méthode' Diviser pour régner' ?



- [X] Décomposer un problème en problème plus petit
- [ ] Trouver une solution optimale locale pour déterminer une solution optimale globale.
- [ ] Résoudre le problème par apprentissage
- [ ] Vérifier si le problème n'a pas déjà été réalisé

### Algorithmique (Terminale) - Arbres
n°1950
<br>
Parcours des arbres<br>
Dans un arbre généalogique, je souhaite connaitre le nom de tous mes arrières grand-parents, puis de tous mes grand-parents et enfin de tous mes parents.<br>
Dois-je procéder à un parcours :



- [X] en largeur.
- [ ] en profondeur
- [ ] suffixe
- [ ] préfixe

