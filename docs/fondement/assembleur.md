# De l'assembleur au langage machine

## Le langage machine

Comme nous l'avons vu, au chapitre précédent, des **instructions machines** sont exécutées par l'**Unité de Commande**. Ainsi les programmes exécutés par les ordinateurs sont constitués de suites d'instructions, elles même réalisables au moyen de combinaisons de **portes logiques**. 

Toutefois, le CPU est incapable d'exécuter directement des programmes écrits, par exemple, en Python. En effet, comme tous les autres constituants d'un ordinateur, le CPU gère uniquement 2 états (toujours symbolisés par `1` et `0`), les instructions exécutées au niveau du CPU doivent donc préalablement être codées en binaire. 

!!! conclu "A retenir"
    L'ensemble des instructions binaires, exécutables directement par le microprocesseur, constitue ce que l'on appelle le **langage machine**.

Une **instruction machine** est donc une **chaîne binaire** composée principalement de 2 parties :

- le champ **code opération** qui indique au processeur le type de traitement à réaliser. Par exemple le code "00100110" donne l'ordre au CPU d'effectuer une multiplication.

- le champ **opérandes** indique la nature des données sur lesquelles l'opération désignée par le code opération doit être effectuée.

|Champ code opération|Champ opérandes|
|:--:|:--:|
|00100110|0110110110110101|

<center>Exemple d'instruction machine</center>

### Les codes opérations

Les instructions machines sont relativement basiques (on parle d'instructions **de bas niveau**), voici quelques exemples :

- les **instructions arithmétiques** (addition, soustraction, multiplication...). 

Exemple : *additionne la valeur contenue dans le registre R1 et le nombre 789 et range le résultat dans le registre R0*.

- les **instructions de transfert de données** qui permettent de transférer une donnée d'un **registre** du CPU vers la **mémoire vive** et vice versa. 

Exemple : *prendre la valeur située à l'adresse mémoire 487 et la placer dans la registre R2*

- les instructions de **rupture de séquence** : Au cours de l'exécution d'un programme, le CPU passe d'une instruction à une autre dans l'ordre avec lequel elles sont inscrite dans la mémoire vive. Les instructions de **rupture de séquence** d'exécution permettent d'interrompre l'ordre initial sous certaines conditions.

Exemple : *si la valeur contenue dans le registre R1 est strictement supérieure à 0 alors exécuter l'instruction située à l'adresse mémoire 4521*

### Les opérandes

Les opérandes sont les **données** sur lesquelles le code opération de l'instruction doit être réalisée. Un opérande peut être de 3 natures différentes :

1- l'opérande est une **valeur immédiate** : l'opération est effectuée directement sur la valeur donnée dans l'opérande.

2- l'opérande est un **registre du CPU** : l'opération est effectuée sur la valeur située dans le registre indiqué dans l'opérande (R0,R1, R2,...).

3- l'opérande est une donnée située **en mémoire vive** : l'opération est effectuée sur la valeur située en mémoire vive à l'adresse XXXXX indiquée dans l'opérande.


## Le langage Assembleur

Un programme en langage machine est donc une suite très très longue de `1` et de `0`, ce qui est très peu intuitif à programmer : une seule erreur et votre programme ne fonctionne pas. Il faut donc traduire en langage-machine (binaire)  la phrase *additionne le nombre 125 et la valeur située dans le registre R2 , range le résultat dans le registre R1* pour qu'elle soit interprétable par le CPU.

!!! conclu "Définition du langage assembleur"
    Le programme de bas niveau réalisé dans le langage appelé **assembleur (ou ASM)** assure le passage de symboles mnémoniques de type `addl %eax, %ebx` au langague-machine `11100010100000100001000001111101`.  
    
    L'écriture de programme en assembleur plutôt qu'en langage de plus haut niveau (python par exemple) permet d'être au plus proche de l'architecture matérielle et d'en optimiser l'allocation des ressources.

### Exemples de commandes en assembleur Y86

!!! note "Remarque"
    Il n'est pas nécessaire d'apprendre à coder en ASM au niveau NSI, mais il faut en connaître les principes.

Il existe différents types de langages assembleur, qui varient selon le type de processeur utilisé (x86-64, ARM...). 

**y86** est un langage assembleur simplifié qui est dédié à l'apprentissage. Il est basé sur l'architecture des processeurs x86 (IA-32), les mémoires sont donc alignés sur 32 bits.

y86 propose un jeu d'instructions réduit dont les principales sont :

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

- instructions de **rupture de séquence** (conditionnels ou pas). Évalue le résultat de la précédente opération arithmétique, que l'on appellera `r`.
```asm
jmp label ; Se rend au point nommé label (Jump)
je label ; Jump si r = 0 
jne label ; Jump si r != 0
jg label ; Jump si r > 0
jge label ; Jump si r >= 0
jl label ; Jump si r < 0
jle label ; Jump si r <= 0
```

- gestion de la pile :
```asm
pushl %eax    ; Empile la valeur du registre %eax sur la pile
popl %ebx    ; Dépile la valeur du dessus de la pile et la stocke dans le registre %ebx
```

- appel/retour de fonction : 
```asm
call label ; Execute la fonction située au label puis reviens ou il s'était arrêté
ret ; force le retour au point d'où une fonction à été appelée
```

- divers : 
```asm
halt             ; Arrête l'exécution du programme
nop              ; Aucune opération (instruction nulle)
```

- Les registres s'écrivent sous la forme : `%eax`, `%ebx`...




{{exercice(1,titre="Simulation d'un programme en assembleur")}}
    === "Énoncé"
        Étudions le programme **python** ci-dessous :

        ```python
        a = 3
        b = 5
        c = a + b
        ```

        Le processeur ne comprend pas directement python : les instructions doivent lui être passées en **langage-machine**. C'est le rôle des **interpréteurs** (pour le Python, par exemple) ou des **compilateurs** (pour le C, par exemple) que de faire le lien entre le langage pratiqué par les humains (Python, C...) et le langage-machine, qui n'est qu'une **succession de chiffres binaires**.

        **Question :** Comment déterminer le langage-machine correspondant à ce code ?
    
    === "Démarche"

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

        Copier ce code dans le simulateur ci-dessous, cliquer sur assembler, puis sur pas à pas, en observant l'évolution de la valeur en mémoire.

        <iframe src="/xtra/y86jsv2/index.html" frameborder="0" scrolling="auto" style="width: 100%; height: 550px;"></iframe>

    === "Résultat"

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

        Ce qui correspond correspond au **langage-machine** binnaire suivant (voir [chapitre suivant](/premiere/encodage/entier-positif/#le-systeme-hexadecimal) pour conversions hexa-> bin) : 

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

    === "Explications"
        ![type:video](https://www.youtube.com/embed/5xABe90yolM)

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

        - Dans le terminal ci-dessous, rend toi dans le dossier crackme : `cd crackme` puis tape l'instruction `gcc crackme.c -o crackme` pour **compiler** le programme, c'est à dire le convertir en langage machine : le fichier binaire `crackme`.
        - Tape `./crackme` pour lancer le programme et joue avec. 

    === "3 - Observation du fichier binaire"

        Avec la commande `hexedit crackme`, il est possible d'observer la valeur des octets directement dans le fichier binaire `crackme`. Écrit en langage-machine, il est incompréhensible. `hexedit` nous aide en affichant le code hexadécimal, mais aussi la conversion chaînes de caractères (dans la partie droite). 
        
        - Parcours le code (flèche vers le bas) et retrouve notre mot de passe. 
        
    === "4 - Modification du fichier binaire"

        Dans notre code C l'instruction `while (strcmp(saisie,"LYCEEXP")!=0)` est le cœur de la vérification du mot de passe. En assembleur, elle va donner naissance à une instruction `JNE` (pour Jump if Not Equal). Cette instruction est codée en hexadécimal par l'opcode `75 BC`. Nous allons rechercher ces octets et les remplacer par `90 90`, `90` étant l'opcode pour `NOP` (ne rien faire).

        - Lance `hexedit crackme`
        
        - Recherche `75BC` (CTR+S).
        
        - Remplace par `90 90`.
        
        - Sauvegarde le fichier (CTR+O).
        
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
