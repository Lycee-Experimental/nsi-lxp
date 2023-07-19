# Codage des entiers négatifs (signés)

|Notions|Compétences|Remarques|
|--|--|--| 
|Représentation binaire d'un entier relatif.|Évaluer le nombre de bits nécessaires à l'écriture en base 2 d'un entier, de la somme ou du produit de deux nombres entiers.<br>Utiliser le complément à 2.|Il s'agit de décrire les tailles courrantes des entiers (8,16,32,64 bits).<br>Il est possible d'évoquer la représentation des entiers de taille arbitraire de Python.|
 

!!! warning "Attention"
    La manière dont les nombres (entiers, non-entiers, positifs, négatifs...) sont traités par un langage de programmation est **spécifique** à chaque langage.

    Dans toute la suite de ce cours, pour simplifier, nous considérerons que les nombres sont codés sur **1 octet** seulement. Ce qui ne correspond pas à la réalité, mais permet de comprendre les notions essentielles.

!!! python "Les entiers en python"
    Depuis la version 3 du langage Python, il n'y a plus de taille maximale pour les entiers en Python.

    Ceci implique que la taille nécessaire au codage de l'entier est allouée dynamiquement par Python (avec pour seule limite celle de la mémoire disponible). 

## Rappels : les nombres entiers en binaire non signé

L'expression **"non signé"** signifie que la contrainte du signe n'existe pas : tous les nombres sont considérés comme étant positifs.
 
Nous avons vu [ici](./entier-positif.md) comment ces nombres se codaient en binaire.  

Sur un octet, le nombre minimal qu'on puisse coder est `00000000`. C'est l'entier naturel 0.  
Le nombre maximal qu'on puisse coder est `11111111`. C'est l'entier naturel 255.

{{exercice(1, "Jusqu'à combien peux-tu compter en binaire ?")}}
    1. Quel est le plus grand entier non signé codable sur 16 bits ?
    2. ... sur 32 bits ?
    3. ... $n$ bits ?
        
    ??? tip "Réponse"
        1. $N=1+2+2^2+2^3+\dots+2^{15}= 65535$
        2. $N=1+2+2^2+2^3+\dots+2^{31}= 4294967295$
        3. Pour tout $n \in \mathbb{N}$, $1+2+2^2+2^3+\dots+2^{n-1}=2^{n}-1$ (formule de la somme des termes d'une suite géométrique de raison 2).
    

{{exercice(titre="Somme de 2 nombres binaire")}}
    L'addition binaire se pose comme celle en décimal (système de retenues).

    1. Effectuer la somme des deux nombres binaires `00001101` et `00001011`.
    2. Vérifier que le résultat est cohérent en base 10.

    ??? tip "Correction"
        1. 
        ```
        retenues:  1111
                00001101
              + 00001011
              ----------
              = 00011000
        ```
        2. Cette addition correspond à $13+11=24$


## Les nombres entiers en binaire signé 

**Question** : comment encoder les entiers négatifs ?

{{exercice(titre="Tentative d'un système de signe binaire")}}

    **Idée**
    L'idée la plus simple est de réserver 1 bit pour le signe, et de coder le reste du nombre «naturellement».

    Par exemple, on peut décréter que le premier bit (appelé **bit de poids fort**) sera le bit de signe :

    - 0 pour un nombre positif
    - 1 pour un nombre négatif

    Dans ce cas, `00000011` serait le nombre $+3$ et `10000011` serait le nombre $-3$.

    **Question**
    
    Calculer $(+3)+(-3)$ dans ce système.

    ??? tip "Résultat"
        ```
        retenues :       11
                    00000011
                +   10000011
                ------------
                    10000110
        ```
        **Problème** : 
        
        - 10000110 = -6 !

        - de plus le zéro serait représenté à la fois par `00000000` et `10000000`, ce qui n'est pas très économe.
    

        **Conclusion**

        Ce système d'écriture n'est pas valable.

{{exercice(titre="À la recherche de l'opposé d'un nombre")}}

    **Idée**

    Plutôt que de chercher à écrire directement le nombre $-3$, que faut-il ajouter au nombre $(+3)$ pour obtenir 0 ?
    ```
      00000011
    + ????????
    ----------
    = 00000000  
    ```
    ??? tip "Réponse"
        Commence par la droite, en essayant de «fabriquer du zéro» en choisissant le bon bit à ajouter :
        ```
          00000011  |    00000011  |   100000011
        + ???????1  |  + ??????01  |  + 11111101
        ----------  |  ----------  |  ----------
        =        0  |  =       00  |  =100000000 
        ```

        On arrive bien à fabriquer des 0 sur tout notre octet, mais une retenue (en anglais *carry*) de 1 déborde de notre octet...
        
        Pas de problème, elle sera perdue et ce nombre sera donc considéré comme un 0 : tu as trouvé que $-3$ s'écrit `11111101` !

!!! conclu "Le complément à 2"    
    On vient de voir que $3$ s'écrit `00000011`et $-3$ `11111101`.

    Comment déterminer rapidement l'inverse d'un entier positif ?

    On peut remarquer qu'en inversant chaque bit du nombre de départ `00000011`, on obtient `11111100`, qui appelé le **complément à 2** du nombre `00000011`.

    Il suffit d'ajouter `1` à ce nombre `11111100` pour obtenir le nombre cherché, `11111101`

    !!! info "Remarque"  
        Les nombres négatifs commenceront donc toujours par le bit 1, et les nombres positifs par le bit 0, très pratique pour savoir qui est positif et qui est négatif !

    !!! warning "Attention"
        Ce nombre `11111101` représente 253 en codage non signé. Il est donc nécessaire, lorsqu'on représente un nombre, de savoir si les nombres manipulés seront des entiers naturels (*non signés*) ou bien relatifs (*signés*).

    **Tableau de conversion en entier signé sur bits**

    |binaire | base 10|
    |:--:|:--:|
    |10000000|-128|
    |10000001|-127|
    |10000010|-126|
    |10000011|-125|
    |10000100|-124|
    |10001001|-123|
    |...|...|
    |11111100|-4|
    |11111101|-3|
    |11111110|-2|
    |11111111|-1|
    |00000000|0|
    |00000001|1|
    |00000010|2|
    |00000011|3|
    |00000100|4|
    |...|...|
    |01111100|124|
    |01111101|125|
    |01111110|126|
    |01111111|127|


{{exercice(titre="Trouver le complément à 2 d'un entier")}}

    Donner l'écriture binaire sur un octet du nombre $-13$.

    ??? tip "Réponse"
        Commençons par écrire le nombre 13 en binaire. Il s'écrit  `00001101`.

        - en prenant le complément à 2 de chaque bit, on obtient `11110010`.
        - en ajoutant 1 à ce dernier nombre, on obtient `11110011`. 

        Le nombre $-13$ s'écrit donc `11110011`.

{{exercice(titre="Déterminer la valeur d'un binaire signé")}}

    Considérons le nombre `11101101`, codé en binaire signé. À quel nombre relatif correspond-il ?

    ??? tip "Réponse"
        1. On observe son bit de poids fort : ici 1, donc ce nombre est négatif. Si ce bit est égal à 0, le nombre codé est positif, il suffit d'opérer une conversion binaire classique.
        2. Comme ce nombre est négatif, il va falloir inverser le protocole précédent. On commence donc par **enlever 1** au nombre proposé. On trouve `11101100`.
        3. On prend ensuite le complément à 2 de chaque bit. On trouve `00010011`.
        4. On convertit en base 10 le nombre obtenu, qui était donc 19.
        5. Le nombre initial était donc $-19$.

{{exercice(titre="Jusqu'à combien compter en signé ?")}}

    1. En binaire signé, à quel nombre correspond `11110001`?
    2. En binaire signé, quel est le plus grand nombre que l'on puisse écrire sur un octet ? 
    3. Quel est le plus petit nombre ?
    4. Au total, combien de nombres différents peuvent être écrits en binaire signé ?

    ??? tip "Réponse"
        1. `11110001` - `1` = `11110000`. En prenant le complément à 2, on trouve `00001111`, qui vaut 15. Le nombre `11110001` représente donc $-15$.
        2. Le plus grand nombre est `01111111`, soit $+127$.
        3. Le plus petit nombre est `10000000`. `10000000` - `1` = `01111111`. Le complément est `10000000`, qui est égal à 128. Donc le nombre minimal est $-128$.
        4. Il y a 128 nombres négatifs (de $-128$ à $-1$), le nombre 0, puis 127 nombres positifs (de 1 à 127). Il y a donc 256 nombres au total, comme en binaire non signé. 


{{exercice(titre="A quand le bug ?")}}  
    
    Lorsqu'on demande à Python l'heure qu'il est, par la fonction ```time()``` du module ```time```, voici ce qu'il répond :

    ```python
    >>> import time
    >>> time.time()
    1653855138.398177
    ```
    
    Il nous renvoie le nombre de secondes écoulées depuis le 1er janvier 1970 à 00h00. On appelle cela l'heure POSIX ou l'heure UNIX [l'heure UNIX](https://fr.wikipedia.org/wiki/Heure_Unix){. target="_blank"}.
    Au 29 mai 2022, il s'en donc écoulé environ 1,6 milliards.

    Dans beaucoup de systèmes informatiques, ce nombre de secondes est codé par **un entier signé sur 32 bits**.
    
    Le nombre maximum de secondes qui peut être représenté est donc ```01111111 11111111 11111111 11111111``` 

    À la seconde d'après, la represéntation binaire du temps sera ```10000000 00000000 00000000 00000000```, qui sera interprété comme le nombre **négatif** −2147483648, et qui ramènera donc les horloges au 13 décembre 1901...

    **Question**

    A l'aide de python, déterminer en quelle année ce bug informatique aura lieu.

    {{terminal()}}

    ??? tip "Réponse"
        ```python
        >>> int('01111111111111111111111111111111', 2)
        2147483647
        >>> 2147483647/60/60/24/365
        68.09625973490614
        >>> 1970+68
        2038
        ```

        Ce nombre représente un peu plus de 2 milliards de secondes... En les comptant depuis le 01/01/1970 00h00m00s, on arrive au 19/01/2038 à 03h14m07s.
        
        ```python
        >>> import datetime
        >>> print(datetime.datetime.fromtimestamp(int('01111111111111111111111111111111', 2)).strftime('Bug le %d-%m-%Y à %H:%M:%S'))
        Bug le 19-01-2038 à 04:14:07
        ```
        
        Plus d'info sur la page Wikipedia [Bug de l'an 2038](https://fr.wikipedia.org/wiki/Bug_de_l%27an_2038)