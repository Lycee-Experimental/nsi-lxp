# La gestion des permissions dans le shell

!!! info "Lecture des droits"

Il est possible d'utiliser la commande `ls` avec l'option `-l` afin d'avoir des informations supplémentaires.



Nous sommes positionnés dans le répertoire `boulot` et nous avons exécuté la commande ls `-l` :

```bash
~/Documents/boulot $ ls -l
total 1
-rw-r--r--  1   luna    luna    0   Feb 20 14:59 TODO.txt
```

Lisons cette ligne de gauche à droite :

1- `-rw-r--r--`

    - le premier symbole `-` signifie que l'on a affaire à un fichier, dans le cas d'un répertoire,nous aurions un `d` (directory)

    - les 3 symboles suivants `rw-` donnent les droits du propriétaire du fichier : lecture autorisée (r), écriture autorisée (w), exécution interdite (- à la place de x)

    - Les 3 symboles suivants `r--` donnent les droits du groupe lié au fichier : lecture autorisée (r), écriture interdite (- à la place de w), exécution interdite (- à la place de x)

    - Les 3 symboles suivants `r--` donnent les droits des autres utilisateurs : lecture autorisée (r), écriture interdite (- à la place de w), exécution interdite (- à la place de x)

2 - Un peu plus loins sur la ligne :

    - Le caractère suivant "1" donne le nombre de liens (nous n'étudierons pas cette notion ici)

    - Le premier `luna` représente le nom du propriétaire du fichier

    - Le second `luna` représente le nom du groupe lié au fichier

    - `0` représente la taille du fichier en octet (ici notre fichier est vide)

    `Feb 20 14:59` donne la date et l'heure de la dernière modification du fichier 
    
    `TODO.txt` est le nom du fichier


<table>
  <tr>
    <td>-</td>
    <td>r</td>
    <td>w</d>
    <td>-</td>
    <td>r</td>
    <td>-</td>
    <td>-</td>
    <td>r</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>type</td>
    <td colspan="3">Propriétaire : u</td>
    <td colspan="3">Groupe : g</td>
    <td colspan="3">Les autres : o</td>    
  </tr>
</table>
