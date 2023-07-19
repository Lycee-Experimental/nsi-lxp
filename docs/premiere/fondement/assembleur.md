# De l'assembleur au langage machine

## Le langage machine

Revenons sur ces instructions aussi appelées **instructions machines** exécutées par l'**Unité de Commande**. Comme nous l'avons vu, un ordinateur exécute des programmes qui sont des suites d'instructions, elles même réalisables avec une combinaison de **portes logiques**. 

Toutefois, le CPU est incapable d'exécuter directement des programmes écrits, par exemple, en Python. En effet, comme tous les autres constituants d'un ordinateur, le CPU gère uniquement 2 états (toujours symbolisés par un "1" et un "0"), les instructions exécutées au niveau du CPU doivent donc préalablement être codées en binaire. 

!!! conclu "A retenir"
    L'ensemble des instructions binaires, exécutables directement par le microprocesseur, constitue ce que l'on appelle le **langage machine**.

Une **instruction machine** est donc une chaîne binaire composée principalement de 2 parties :

- le champ **code opération** qui indique au processeur le type de traitement à réaliser. Par exemple le code "00100110" donne l'ordre au CPU d'effectuer une multiplication.

- le champ **opérandes** indique la nature des données sur lesquelles l'opération désignée par le code opération doit être effectuée.

|Champ code opération|Champ opérandes|
|:--:|:--:|
|00100110|0110110110110101|

<center>Instructions machine</center>

### Les codes opérations

Les instructions machines sont relativement basiques (on parle d'instructions **de bas niveau**), voici quelques exemples :

- les **instructions arithmétiques** (addition, soustraction, multiplication...). Par exemple, on peut avoir une instruction qui ressemble à "additionne la valeur contenue dans le registre R1 et le nombre 789 et range le résultat dans le registre R0" (l'adresse mémoire est donnée en base 10 pour souci de simplicité, n'oubliez pas qu'en interne elle est codée en binaire)

- les **instructions de transfert de données** qui permettent de transférer une donnée d'un registre du CPU vers la mémoire vive et vice versa. Par exemple, on peut avoir une instruction qui ressemble à "prendre la valeur située à l'adresse mémoire 487 et la placer dans la registre R2" ou encore "prendre la valeur située dans le registre R1 et la placer à l'adresse mémoire 512"

- les instructions de **rupture de séquence** : les instructions machines sont situées en mémoire vive, si, par exemple, l'instruction n°1 est située à l'adresse mémoire 343, l'instruction n°2 sera située à l'adresse mémoire 344, l'instruction n°3 sera située à l'adresse mémoire 345... Au cours de l'exécution d'un programme, le CPU passe d'une instruction à une autre en passant d'une adresse mémoire à l'adresse mémoire immédiatement supérieure : après avoir exécuté l'instruction n°2 (situé à l'adresse mémoire 344), le CPU "va chercher" l'instruction suivante à l'adresse mémoire 344+1=345. 
Les instructions de rupture de séquence d'exécution encore appelées instructions de saut ou de branchement permettent d'interrompre l'ordre initial sous certaines conditions en passant à une instruction située une adresse mémoire donnée, par exemple, nous pouvons avoir une instruction qui ressemble à cela : imaginons qu'à l'adresse mémoire 354 nous avons l'instruction "si la valeur contenue dans le registre R1 est strictement supérieure à 0 alors exécuter l'instruction située à l'adresse mémoire 4521". Si la valeur contenue dans le registre R1 est strictement supérieure à 0 alors la prochaine instruction à exécuter est l'adresse mémoire 4521, dans le contraire, la prochaine instruction à exécuter est à l'adresse mémoire 355.

### Les opérandes

Les opérandes sont donc les données sur lesquelles le code opération de l'instruction doit être réalisée. Un opérande peut être de 3 natures différentes :

1- l'opérande est une **valeur immédiate** : l'opération est effectuée directement sur la valeur donnée dans l'opérande

2- l'opérande est un **registre du CPU** : l'opération est effectuée sur la valeur située dans un des registres (R0,R1, R2,...), l'opérande indique de quel registre il s'agit

3- l'opérande est une donnée située **en mémoire vive** : l'opération est effectuée sur la valeur située en mémoire vive à l'adresse XXXXX. Cette adresse est indiquée dans l'opérande.

Un programme en langage machine est donc une suite très très longue de "1" et de "0", ce qui est quelque peu rébarbatif à programmer : sur les dizaines de milliers de "1" et de "0" qui composent un programme en langage machine de taille modeste, une seule erreur, et votre programme ne fonctionne pas...imaginer la difficulté pour retrouver l'erreur 😅.

??? example "Exemples"
    - Quand on considère l'instruction machine : "additionne le nombre 125 et la valeur située dans le registre R2 , range le résultat dans le registre R1", nous avons 2 valeurs : le "nombre 125" (qui est une valeur immédiate, nous sommes dans le cas n°1) et "la valeur située dans le registre R2" (nous sommes dans le cas n°2)

    - Quand on considère l'instruction machine : "prendre la valeur située dans le registre R1 et la placer à l'adresse mémoire 512", nous avons 2 valeurs : "à l'adresse mémoire 512" (nous sommes dans le cas n°3) et "la valeur située dans le registre R1" (nous sommes toujours dans le cas n°2)


## Le langage Assembleur

### Définition

Il faut donc traduire en langage-machine (binaire)  la phrase "additionne le nombre 125 et la valeur située dans le registre R2 , range le résultat dans le registre R1" pour qu'elle soit utilisable par le CPU. Un programme de bas niveau appelé **assembleur (ou ASM)** assure le passage de symboles mnémoniques de type `addl %eax, %ebx` au langague-machine `11100010100000100001000001111101`. 

Si plus personne n'écrit de programme directement en langage machine, l'écriture de programme en assembleur est habituelle car elle permet d'optimiser d'avantage l'allocation des ressources matérielles qu'un langage de plus haut niveau (python par exemple).

### Exemples de commandes en assembleur Y86

Il existe différents types de langages assembleur, dépendant du type de processeur utilisé (x86-64, ARM...). 

**y86** est un langage assembleur simplifié qui est dédié à l'apprentissage. Il est basé sur l'architecture des processeurs x86 (IA-32), les mémoires sont alignés sur 32 bits et utilise la convention little endian (stockage des octets dans l'ordre inverse, c'est-à-dire en commençant par l'octet de poids faible).

y86 propose un jeu d'instructions réduit :

- instructions **arithmétiques** :
```asm
addl <rA>, <rB> ; Addition : rB = rB + rA
subl <rA>, <rB> ; Soustraction : rB = rB - rA 
andl <rA>, <rB> ; ET bit à bit : rB = rB and rA
xorl <rA>, <rB> ; Ou exclusif : rB = rB xor rA
```

- instructions de **transfert de données** : 
```asm
rrmov1 <rA>, <rB> ; Copie d'une valeur d'un registre à un autre
mrmovl <D>, <rA> ; Copie d'une valeur de l'adresse D de la mémoire au registre rA
rmmovl <rA>, <D> ; Copie d'une valeur du registre rA à l'adresse D de la mémoire
irmovl <V>, <rA> ; Copie d'une valeur immediate V à l'adresse  <rA> de la mémoire
```

- instruction de rupture de séquence (conditionnels ou pas) : jmp, je, jne, jg, jge, jl, jle

- gestion pile : pushl, popl

- appel/retour de fonction : call, ret

- divers : nop, halt

Les registres s'écrivent sous la forme `%eax`, `%ebx`...

!!! note "Remarque"
    - Il n'est pas nécessaire d'apprendre à coder en ASM au niveau NSI, mais il faut en connaitre les principes.


{{exercice(1,titre="Simulation d'un programme en assembleur")}}

    Etudions le programme **python** ci-dessous :

    ```python
    a = 3
    b = 5
    c = a + b
    ```

    Le processeur ne comprend pas directement python : les instructions doivent lui être passées en **langage-machine**. C'est le rôle des **interpréteurs** (pour le Python, par exemple) ou des **compilateurs** (pour le C, par exemple) que de faire le lien entre le langage pratiqué par les humains (Python, C...) et le langage-machine, qui n'est qu'une **succession de chiffres binaires**.

    **Question :** Comment déterminer le langage-machine correspondant à ce code ?
    
    En **assembleur Y86**, notre programme s'écrirait :

    ```asm
    .pos 0
        mrmovl a, %eax ;affecte la valeur a (3) au registre %eax
        mrmovl b, %ebx ;affecte la valeur b (5) au registre %ebx
        addl %eax, %ebx ;affecte la somme %eax + %ebx à %ebx
        rmmovl %ebx, c ;enregistre dans la mémoire du paramètre c la valeur de %ebx
        halt

    .align 4
    a:  .long 3
    b:  .long 5
    c:  .long 0   
    ```

    Copier ce code dans le simulateur ci-dessous, cliquer sur assembler puis sur pas à pas :

    <iframe src="/xtra/y86jsv2/index.html" frameborder="0" scrolling="auto" style="width: 100%; height: 550px;"></iframe>

    !!! info "Explications"
        === "En vidéo"
            ![type:video](https://www.youtube.com/embed/5xABe90yolM)
        === "Résumé"
            - Les registres sont à percevoir comme des zones de travail temporaires, à l'accès très rapide. Les données font l'aller-retour entre la mémoire et le registre : elles sont stockées en mémoire, passent dans le registre pour y être modifiées, et reviennent en mémoire.
            - les données ET les instructions sont stockées ensemble dans la mémoire : c'est le principe fondateur de l'architecture Von Neumann. Ici, l'octet `03` situé à l'adresse `0x000d` signifie qu'il va falloir ajouter (on le sait grâce au `60` qui précède) le registre numéroté `0` (donc `%eax`) au registre numéroté `3` (donc `%ebx`). On retrouve un octet de même valeur `03` à l'adresse `0x0018`. Mais dans ce cas, cet octet n'est pas une instruction mais une simple donnée : c'est la valeur 3 qu'on a donnée à la variable `a` dans notre programme. 
        === "En image"
            ![image](/assets/images/cap_Y86_2.png){: .center}

    **Résultat**

    Sur la partie droite du simulateur, la zone Mémoire contient, après assemblage, la traduction de notre code en langage-machine au format hexadécimal :

    ```hex
    500f1800
    0000503f
    1c000000
    6003403f
    20000000
    00000000
    03000000
    05000000
    ```

    Ce qui correspond correspond au **langage-machine** binnaire suivant (voir chapitre suivant pour conversions hexa-> bin) : 

    ```bin
    01010000 00001111 00011000 00000000
    00000000 00000000 01010000 00111111
    00011100 00000000 00000000 00000000
    01100000 00000011 01000000 00111111
    00100000 00000000 00000000 00000000
    00000000 00000000 00000000 00000000
    00000011 00000000 00000000 00000000
    00000101 00000000 00000000 00000000
    ```



{{exercice(titre="Réaliser un code en assembleur")}}
    === "Énoncé"
        Sur la base de l'activité précédente, coder en assembleur la séquence d'instruction suivante :


        ```python
        w = 10
        x = 3
        y = 5
        z = w - (x + y)
        ```

        !!! tip "Astuce" 
            Vous aurez pour cela besoin de l'instruction `subl rA rB` qui effectue l'opération `rB-rA` et la stocke dans `rB`. (`rA` et `rB` sont les noms des registres).

        <iframe src="/xtra/y86jsv2/index.html" frameborder="0" scrolling="auto" style="width: 100%; height: 550px;"></iframe>

    === "Correction"
        ```asm
        .pos 0
        mrmovl x, %eax
        mrmovl y, %ebx
        mrmovl w, %ecx
        addl %eax, %ebx
        subl %ebx, %ecx
        rmmovl %ecx, z
        halt

        .align 4
        w:  .long 10
        x:  .long 3
        y:  .long 5
        z:  .long 0
        ``` 
         




{{exercice(titre="Cracker un programme par désassemblage")}}
    === "1 - Énoncé"
        On considère le programme en langage C suivant :

        ```c title='crackme.c'
        #include "stdio.h"
        #include "stdlib.h"
        #include "string.h"

        int main()
        {

        char saisie[20];
        printf("Accès restreint : saisissez votre mot de passe \n");
        while (strcmp(saisie,"LYCEEXP")!=0)
        {
        printf("Mot de passe ? \n");
        scanf("%19s",saisie);
        }

        printf("Accès autorisé \n");

        return 0;
        } 
        ```

        **Questions** :

        - Que fait ce programme ?

        - Quel est le mot de passe ?

    === "2 - Compilation et exécution"

        - Dans le terminal ci-dessous, rend toi dans le dossier crackme : `cd crackme` puis tapez l'instruction `gcc crackme.c -o crackme` pour compiler le programme.
        - Tapez `./crackme` pour lancer le programme et jouez avec.

    === "3 - Observation du fichier binaire"

        Avec la commande `hexedit crackme`, il est possible d'observer la valeur des octets directement dans le fichier binaire `crackme`. 
        
        Écrit en langage-machine, il est incompréhensible pour un autre humain... `hexedit` nous aide en affichant notamment (dans la partie droite) la conversion chaînes de caractères... dont notre mot de passe 😱. 
        
        A toi de le trouver !

    === "4 - Modification du fichier binaire"

        Dans notre code C l'instruction `while (strcmp(saisie,"LYCEEXP")!=0)` est le cœur de la vérification du mot de passe. En assembleur, elle va donner naissance à une instruction `JNE` (pour Jump if Not Equal, voir [ici](https://www.gladir.com/LEXIQUE/ASM/jumpif.htm){. target="_blank"} ). Cette instruction est codée en hexadécimal par l'opcode `75 BC`. Nous allons rechercher ces octets et les remplacer par `90 90`, `90` étant l'opcode pour `NOP` (ne rien faire).
        - Lance `hexedit crackme`
        - Recherche `75BC` (CTR+S).
        - Remplace par `90 90`.
        - Sauvegarde le fichier (CTR+O)`.
        - Exécute ce code `./crackme` et constate les changements !

        !!! tip "Cracker des programme grâce au language-machine"
            Le désassemblage d'un programme est une opération très complexe et les opérations et chaînes de caractères qui apparaissent sont souvent incompréhensibles (parfois volontairement, dans le cas d'[obfuscation](https://connect.ed-diamond.com/MISC/mischs-007/obfuscation-de-langage-interprete-cachez-ce-code-que-je-ne-saurais-voir){. target="_blank"}  de code).  
            Néanmoins, il est parfois possible d'agir au niveau le plus bas (le langage-machine) pour modifier un code, comme nous venons de le faire.


    === "5 - Bonus : assembleur"
        Le compilateur `gcc`, avec le paramètre -S, permet de générer le langage ASM correspondant. Ce langage, adapté au processeur de votre machine est un peu plus complexe que le langage Y86 étudié plus haut, mais le principe reste le même.
        - Executer `gcc crackme.c -S -o crackme.asm`
        - Visualiser le fichier généré avec `nano crackme.asm` (CTR+X pour en sortir)

    Utilise le terminal Linux pour cracker ce logiciel :

    !!! debian "Terminal Linux"
        {{debian()}}
