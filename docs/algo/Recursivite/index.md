# La récursivité


??? conclu "Programme"
    |Notions|Compétences|Remarques|
    |--|--|--| 
    Récursivité.|Écrire un programme récursif.<br> Analyser le fonctionnement d’un programme récursif.|Des exemples relevant de domaines variés sont à privilégier.

## Introduction

**Exercice 1**

Implémenter en Python une fonction `puissance1` permettant de calculer $2^{n}$, pour $n$ entier positif, de manière itérative (c'est-à-dire en utilisant une boucle).

On rappelle que $2^{n}$ peut s'écrire : $2\times 2 \times 2 \times 2 \times... \times 2$, $n$ fois.

{{IDE()}}

??? success "Corrigé"
    ```python
    def puissance1(n):
        p=1
        for i in range(n):
            p=2*p
        return p
    ```


!!! abstract "Un peu de math..."
    En mathématiques, il existe des fonctions particulières appelées **suites** qu'on peut définir de deux manières différentes.

    Par exemple :

    1. $u(n)=2^{n}$ est la suite donnant les différentes puissances de 2.<br>
    Avec cette fonction, calculez les 5 premières puissances de 2.<br>
    On dit que cette suite est définie explicitement.
    2. On pourrait aussi l'écrire ainsi : si $n=0$ alors $u(n)=1$, sinon $u(n)=2 \times u(n-1)$.<br>
    Vérifiez que cette deuxième fonction permet d'obtenir les puissances de 2.<br>
    On dit que cette suite est définie par récurrence.


## Définition de la récursivité

**Exercice 2**

Ecrire un **algorithme** permettant de calculer les puissances de 2 avec la deuxième définition de l'exemple précédent. On notera `puissance2` le nom de la fonction.


??? success "Corrigé"
    ```
    Fonction : puissance2(n)
        Si n=0 Alors
            Renvoyer 1
        Sinon
            Renvoyer puissance2(n-1)
    ```

!!! example "Définition"
    Pour $n>0$, la fonction puissance s'appelle elle-même : on parle de définition par **récursivité**.


**Exercice 3**

Implémenter la fonction `puissance2` avec Python.

{{IDE()}}


??? success "Corrigé"
    ```python
    def puissance2(n):
        if n==0:
            return 1
        else:
            return 2*puissance2(n-1)
    ```

**Exercice 4 : Comparaison des vitesses d'éxécutions**

1. Comparez les vitesses d'exécutions des fonctions `puissance1` et `puissance2`. Pour tester la vitesse d'éxécution d'une fonction, on utilise le module `timeit`, comme le montre le code ci-dessous pour une entier naturel N assez grand.<br>
On pourra tester pour des valeurs de N de plus en plus grandes.
```python
from timeit import default_timer as timer

N=5

debut = timer()
print(puissance1(N))
fin = timer()
print(f"temps pour calculer 2^{N} en version itérative : {fin - debut}")

debut = timer()
print(puissance2(N))
fin = timer()
print(f"temps pour calculer 2^{N}en version récursive : {fin - debut}")
```
{{IDE()}}

2) Que pouvez-vous en conclure?


??? success "Corrigé"
    {{jupy_cor('vitesse_exec.ipynb')}}

## Principe de la récursivité : lien avec la notion de pile

Le principe de programmation par récursivité est basé sur le fonctionnement de *"l'empilement-dépilement"* à l'aide d'une pile d'exécution stockant l'adresse mémoire de la prochaine instruction machine à exécuter et conservant une "trace" des valeurs des variables :

![](images/recur1.JPG){: .center}

- L'exécution d'un programme peut être représentée comme le parcours d'un chemin ayant une origine (entrée) et une extrémité (sortie).
- L'appel d'une procédure (ou d'une fonction) se caractérise alors par un circuit, c'est-à-dire un chemin dont l'origine et l'extrémité sont confondus.
- Le processeur a alors besion de stocker différentes informations (adresses mémoire, variables, paramètres, etc...)

!!! example "Propriété"
    Pour réaliser tout cela, le processeur gère une ou plusieurs piles dans lesquelles il stocke les adresses de retour des procédures et les valeurs des différentes variables. La récursivité est donc généralement plus lent en raison des frais généraux liés à la maintenance de la pile.

## Petit piège à éviter

**Exercice 5**

1. Implémentez la procédure récursive suivante et tester la pour $a=4$ :
```python
def fonction(a):
  return a*fonction(a-1)
```
{{IDE()}}
Que se passe-t-il? Quelle explication peut-on en donner?

2)  a) Compléter cette procédure pour obtenir une sortie avec l'entrée $a=4$.<br>
    b) Cette procédure retourne-t-elle alors un résultat pour tout entier $a$?<br>
    c) Quelle règle tirez-vous de cette expérience?


??? success "Corrigé"
    {{jupy_cor('arret_recursion.ipynb')}}

!!! note "En résumé"
    - Une fonction récursive doit avoir un "état trivial", cela permet d'avoir une condition d'arrêt.
    - Un algorithme récursif doit avoir une terminaison, c'est-à-dire conduire vers cet "état trivial" (il ne faut pas une infinité d'appels récursifs).
    - Une fonction récursive doit s'appeler elle-même.


!!! note "A savoir"
    Ces deux paradigmes de programmation sont équivalents, c'est-à-dire que tout algorithme itératif possède une version récursive, et réciproquement.

    Le type de langage de programmation utilisé peut conduire à programmer d'une manière ou d'une autre. Par exemple Caml est un langage conçu pour exploiter la récursivité. A l'inverse, Python, même s'il l'autorise, ne favorise pas l'écriture récursive (limitation basse du nombre d'appels récursifs à 1000 par défaut).

    Enfin, le choix d'écrire une fonction récursive ou itérative peut dépendre du problème à résoudre : certains problèmes se résolvent particulièrement simplement sous forme récursive.

    La version récursive d'un algorithme est souvent plus succinte et plus lisible.


![](images/recur2.JPG){: .center}

## Quelques autres exemples


**Exercice 6**

Soit $n$ un entier naturel. On définit la factorielle de $n$ et on note $n!$ le nombre :

$n!=n \times (n-1) \times (n-2) \times ... \times 3 \times 2 \times 1$

et $0!=1$.

1) Ecrire une fonction itérative permettant de calculer n'importe quelle $n!$.
{{IDE()}}
2) Ecrire une fonction récursive permettant de calculer n'importe quelle $n!$.
{{IDE()}}
3) Comparer l'exécution en temps de ces deux fonctions.
{{IDE()}}


??? success "Corrigé"
    {{jupy_cor('factoriel.ipynb')}}

**Exercice 7**

On définit la suite de Fibonacci par :

$u_{0}=1$

$u_{1}=1$

Pour $n \ge 2$, $u_{n}=u_{n-1}+u_{n-2}$.

Ecrire la fonction récursive permettant de calculer n'importe quelle valeur $u_{n}$.

{{IDE()}}



??? success "Corrigé"
    ```python
    def fibonacci(n):
        if n==0 or n==1:
            return 1
        else:
            return fibonacci(n-1)+fibonacci(n-2)
    print(fibonacci(3))
    ```
**Exercice 8**

1) Ecrire une fonction déterminant le minimum d'une liste d'entier de taille minimale 1 de manière itérative.
{{IDE()}}
2) Ecrire une fonction déterminant le minimum d'une liste d'entier de taille minimale 1 de manière récursive.
{{IDE()}}
3) Comparer l'exécution en temps de ces deux fonctions.
{{IDE()}}


??? success "Corrigé"
    {{jupy_cor('minimum_recursif.ipynb')}}

**Exercice 9**

Implémenter la fonction récursive permettant de calculer la somme des éléments d'une liste de taille minimale 1.

{{IDE()}}


??? success "Corrigé"
    ```python
    def somme(L):
        if len(L)==1:
            return L[0]
        else:
            return L[0]+somme(L[1:])
    somme([1,2,3,4,5])
    ```
## Exercice 10 : Triangle de Pascal

Le triangle de Pascal (Blaise Pascal !) est une présentation des coefficients binomiaux sous la forme d’un triangle :
```
1
1 1
1 2 1 
1 3 3 1
1 4 6 4 1
```

On le définit de manière récursive :

$$
C(n,p) = = \left\{
    \begin{array}{ll}
        \ 0 \mbox{ si p > n}\\
        \ 1 \mbox{ si n = 0 ou p=0}\\
        \ \mbox{C(n-1,p-1) + C(n-1,p) sinon.}\\
    \end{array}
\right.
$$

1) Écrire une fonction récursive C(n, p)  qui renvoie la valeur de C(n,p).
??? success "Corrigé"
    ```python
    def C(n,p):
        if p>n:
            return 0
        elif n==0 or p==0:
            return 1
        else:
            return C(n-1,p-1)+C(n-1,p)
    print(C(4,2))
    ```

2) Écrire une fonction récursive ou itérative qui permet de dessiner le triangle de Pascal

??? success "Corrigé"
    Version itérative :
    ```python
    # Construction d'une ligne du triangle
    def ligne(n):
        l=[]
        for k in range(n+1):
            l.append(C(n,k))
        return l

    # Contruction du triangle entier
    def triangle_pascal(n):
        t=[]
        for i in range(n+1):
            t.append(ligne(i))
        for i in range(len(t)):
            l=t[i]
            T=""
            for j in range(len(l)):
                T=T+str(l[j])+" "
            print(T)
    triangle_pascal(5)
    ```
    Version récursive :
    ```python
    # construction de toutes les lignes du triangle sous forme de listes
    def liste_triangle(n):
        if n == 0:
            return [1]
        elif n == 1:
            return [[1],[1,1]]
        else:
            nouvelle_ligne = [1]
            result = liste_triangle(n-1)
            derniere_ligne = result[-1]
            for i in range(len(derniere_ligne)-1):
                nouvelle_ligne.append(derniere_ligne[i] + derniere_ligne[i+1])
            nouvelle_ligne += [1]
            result.append(nouvelle_ligne)
        return result

    # pour un affichage joli :
    def triangle_pascal(n):
        for i in range(n+1):
            ligne=' '.join(str(elem) for elem in liste_triangle(n)[i])
            print(ligne)
    triangle_pascal(5)
    ```

### ***Bonus Maths*** :

le coefficient binomial C(n,k), noté $\binom{n}{k}$ est le coefficient du terme $a^k b^{n-k}$ dans le développement de $(a+b)^n$
Par exemple :  
$(a+b)^0 = 1$   
$(a+b)^1 = 1 a + 1 b$   
$(a+b)^2 = 1 a^2 + 2 a b + 1 b^2$   
$(a+b)^3 = 1 a^3 + 3 a^2 b + 3 a b^2 + 1 b^3$

3) Ecrire une fonction qui donne le développement de $(a+b)^n$ 

??? success "Corrigé"
    **Pour afficher des vrais puissances :**
    ```python
    def decomposer(i):
        decomp=[]
        d = str(i)
        for e in d:
            decomp.append(e)
        return decomp

    print(decomposer(132))


    def puissance(n):
        p0=['\u2070','\u00B9','\u00B2','\u00B3','\u2074','\u2075','\u2076','\u2077','\u2078','\u2079']
        p=p0
        for i in range(10,n+1):
            d=decomposer(i)
            nouvelle_p=''
            for e in d:
                nouvelle_p=nouvelle_p+p0[int(e)]
            p.append(nouvelle_p)
        return p

    print(puissance(32))
    ```

    **Le programme en tant que tel :**
    ```python
    def developpement(n):
        dev=f'(a+b){puissance(n)[n]} = {C(n,0)} a{puissance(n)[0]} b{puissance(n)[n-0]}'
        for i in range(1,n+1):
            dev=dev+f" + {C(n,i)} a{puissance(n)[i]} b{puissance(n)[n-i]}"       
        return dev
    print(developpement(21))
    ```

{{IDE()}}


## Exercice 11 : Palindromes

On appelle **palindrome** un mot qui se lit dans les deux sens comme "selles" ou "radar".

La fonction itérative ci-dessous renvoie vrai si le mot passé en paramètre est un palindrome.  
Pour le mot "Selles" composé de 6 lettres, on fait 3 comparaisons.  
Pour le mot "Radar" composé de 5 lettres on ne fait que 2 comparaisons (une unique lettre est forcément un palindrome)

```python
def est_palindrome(mot):
    mot=mot.lower()
    for i in range(len(mot)//2):
        if mot[i]!=mot[-i-1]:
            return False
    return True
```

**Une  version récursive...**

1) Dans notre cas quel est "l’état trivial"?
??? success "Réponse"
    Un mot d'une lettre ou aucune lettre
2) Expliquer ce qui va conduire à cet "état trivial"
??? success "Réponse"
    len(mot)$\le$1
3) Ecrivez la version récursive 
??? success "Réponse"
    ```python
    def est_palindrome2(mot):
        mot=mot.lower()
        if len(mot)<=1:
            return True
        if mot[0] == mot[len(mot) - 1] :
            return est_palindrome2(mot[1:len(mot) - 1])
        else :
            return False   
    est_palindrome2('Radar')
    ```

4) Modifier votre programme pour qu'il considère que la phrase "Karine alla en Irak" soit un palindrome.

??? success "Réponse"
    ```python
        def est_palindrome3(mot):
            mot=mot.lower()
            mot=mot.replace(" ","")
            if len(mot)<=1:
                return True
            if mot[0] == mot[len(mot) - 1] :
                return est_palindrome2(mot[1:len(mot) - 1])
            else :
                return False
        est_palindrome3('Karine alla en Irak')
    ```

## Exercice 12  : Figures récursives

{{jupy('figures_recursives.ipynb')}} {{jupy_cor('figures_recursives_corr.ipynb')}}