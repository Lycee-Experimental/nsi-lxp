---
author: Nicolas Revéret
title: Listes de listes/dictionnaires
---
# 🏁 Listes de listes ou de dictionnaires

Considérons le tableau de couleurs ci-dessous décrivant différentes couleurs à l'aide de quatre descripteurs :

* leur nom,
* leur composante rouge (de 0 à 255),
* leur composante verte (de 0 à 255),
* leur composante bleue (de 0 à 255).

<table>
    <theader>
        <tr>
            <td style="font-weight:bold">Couleur</td>
            <td style="font-weight:bold">Nom</td>
            <td style="font-weight:bold">Rouge</td>
            <td style="font-weight:bold">Vert</td>
            <td style="font-weight:bold">Bleu</td>
        </tr>
    </theader>
    <tbody>
    <tbody>
        <tr><td style="background-color:rgb(0,0,0)">&nbsp</td><td>Noir</td><td>0</td><td>0</td><td>0</td></tr>
        <tr><td style="background-color:rgb(255,255,255)">&nbsp</td><td>Blanc</td><td>255</td><td>255</td><td>255</td></tr>
        <tr><td style="background-color:rgb(255,0,0)">&nbsp</td><td>Rouge</td><td>255</td><td>0</td><td>0</td></tr>
        <tr><td style="background-color:rgb(0,255,0)">&nbsp</td><td>Vert</td><td>0</td><td>255</td><td>0</td></tr>
        <tr><td style="background-color:rgb(0,0,255)">&nbsp</td><td>Bleu</td><td>0</td><td>0</td><td>255</td></tr>
        <tr><td style="background-color:rgb(255,255,0)">&nbsp</td><td>Jaune</td><td>255</td><td>255</td><td>0</td></tr>
        <tr><td style="background-color:rgb(0,255,255)">&nbsp</td><td>Cyan</td><td>0</td><td>255</td><td>255</td></tr>
        <tr><td style="background-color:rgb(255,0,255)">&nbsp</td><td>Magenta</td><td>255</td><td>0</td><td>255</td></tr>
        <tr><td style="background-color:rgb(192,192,192)">&nbsp</td><td>Argent</td><td>192</td><td>192</td><td>192</td></tr>
        <tr><td style="background-color:rgb(128,128,128)">&nbsp</td><td>Gris</td><td>128</td><td>128</td><td>128</td></tr>
        <tr><td style="background-color:rgb(128,0,0)">&nbsp</td><td>Bordeaux</td><td>128</td><td>0</td><td>0</td></tr>
        <tr><td style="background-color:rgb(128,128,0)">&nbsp</td><td>Olive</td><td>128</td><td>128</td><td>0</td></tr>
        <tr><td style="background-color:rgb(128,0,128)">&nbsp</td><td>Violet</td><td>128</td><td>0</td><td>128</td></tr>
        <tr><td style="background-color:rgb(0,0,128)">&nbsp</td><td>Marine</td><td>0</td><td>0</td><td>128</td></tr>
    </tbody>
</table>

## Listes de listes

Il est possible de représenter ces informations dans une liste Python. Chacun des éléments de cette liste est lui-même une liste décrivant une couleur :

```python
liste_couleurs = [
    ["Noir",       0,   0,   0],  # Couleur 0
    ["Blanc",    255, 255, 255],  # Couleur 1
    ["Rouge",    255,   0,   0],  # Couleur 2
    ["Vert",       0, 255,   0],  # Couleur 3
    ["Bleu",       0,   0, 255],  # Couleur 4
    ["Jaune",    255, 255,   0],  # Couleur 5
    ["Cyan",       0, 255, 255],  # Couleur 6
    ["Magenta",  255,   0, 255],  # Couleur 7
    ["Argent",   192, 192, 192],  # Couleur 8
    ["Gris",     128, 128, 128],  # Couleur 9
    ["Bordeaux", 128,   0,   0],  # Couleur 10
    ["Olive",    128, 128,   0],  # Couleur 11
    ["Violet",   128,   0, 128],  # Couleur 12
    ["Marine",     0,   0, 128]   # Couleur 13
]
```

!!! note "Remarque"
    
    On a ajouté des espaces afin de simplifier la lecture. Elles[^1] ne sont pas indispensables.

[^1]: En typographie, « espace » est un nom commun [féminin](https://fr.wikipedia.org/wiki/Espace_(typographie)#Genre_du_mot).

Les informations décrivant une couleur étant décrites dans des sous-listes, elles sont accessibles en utilisant les indices :

|     Indice      |   `#!py 0`   |    `#!py 1`    |   `#!py 2`    |   `#!py 3`    |
| :-------------: | :----------: | :------------: | :-----------: | :-----------: |
| **Descripteur** | `#!py "nom"` | `#!py "rouge"` | `#!py "vert"` | `#!py "bleu"` |

Il est donc possible de récupérer le nom de la troisième couleur de la liste en faisant `#!py liste_couleurs[2][0]` qui renvoie `#!py "rouge"`.

??? question "Liste de listes"

    On considère la liste décrite ci-dessus.

    Cochez la ou les bonnes réponses.

    === "Propositions"
        
        - [ ] On peut accéder à la composante rouge de la première couleur en faisant `#!py liste_couleurs[0][0]`
        - [ ] `#!py liste_couleurs[4]` n'existe pas car il n'y a que quatre descripteurs
        - [ ] `#!py liste_couleurs[5][2]` désigne la composante verte du jaune
        - [ ] `#!py [c[0] for c in liste_couleurs]` permet de récupérer les noms de toutes les couleurs

    === "Solution"
        
        - :x: `#!py liste_couleurs[0][0]` permet de récupérer le nom de la première couleur
        - :x: `#!py liste_couleurs[4]` renvoie toutes les informations décrivant le bleu
        - :white_check_mark: `#!py liste_couleurs[5][2]` désigne la composante verte du jaune
        - :white_check_mark: `#!py [c[0] for c in liste_couleurs]` permet de récupérer les noms de toutes les couleurs

??? question "Requêtes (listes)"

    On travaille toujours avec la liste de listes décrite ci-dessus.

    Compléter le script afin de d'effectuer les requêtes proposées :

    {{ IDE('pythons/couleurs_listes/exo', MAX=10) }}


??? question "Nuances de gris (listes)"

    On travaille toujours avec la liste décrite ci-dessus.

    Il est possible de convertir une couleur en noir et blanc en donnant à chacun de ses canaux la même valeur obtenue par la formule suivante :

    $$Y = 0,299\times Rouge + 0,587 \times Vert + 0,114 \times Bleu$$

    Cette valeur $Y$ est appelée *niveau de gris*.

    Par exemple pour le rouge on obtient : $Y = 0,299 \times 255 + 0,587 \times 0 + 0,114 \times 0 \approx 76$.

    Compléter le code ci-dessous permettant d'obtenir la liste contenant le niveau de gris associé à chaque couleur de `liste_couleurs`.

    {{ IDE('pythons/gris/exo', MAX=10) }}



## Listes de dictionnaires

Une autre approche est possible : au lieu de représenter les données dans une liste de listes, on utilise une liste de dictionnaires. Chaque couleur est décrite par un dictionnaire dont les clés sont les noms des descripteurs et les valeurs la valeur associée.

```python
dico_couleurs = [
    {"nom": "Noir",     "rouge":   0, "vert":   0, "bleu":   0},
    {"nom": "Blanc",    "rouge": 255, "vert": 255, "bleu": 255},
    {"nom": "Rouge",    "rouge": 255, "vert":   0, "bleu":   0},
    {"nom": "Vert",     "rouge":   0, "vert": 255, "bleu":   0},
    {"nom": "Bleu",     "rouge":   0, "vert":   0, "bleu": 255},
    {"nom": "Jaune",    "rouge": 255, "vert": 255, "bleu":   0},
    {"nom": "Cyan",     "rouge":   0, "vert": 255, "bleu": 255},
    {"nom": "Magenta",  "rouge": 255, "vert":   0, "bleu": 255},
    {"nom": "Argent",   "rouge": 192, "vert": 192, "bleu": 192},
    {"nom": "Gris",     "rouge": 128, "vert": 128, "bleu": 128},
    {"nom": "Bordeaux", "rouge": 128, "vert":   0, "bleu":   0},
    {"nom": "Olive",    "rouge": 128, "vert": 128, "bleu":   0},
    {"nom": "Violet",   "rouge": 128, "vert":   0, "bleu": 128},
    {"nom": "Marine",   "rouge":   0, "vert":   0, "bleu": 128},
]
```

Au sein de chaque dictionnaire, les informations sont identifiées par les clés. Il est plus facile de récupérer chaque valeur (sans avoir à compter les indices !).

Il est possible de récupérer le nom de la troisième couleur de la liste en faisant `#!py liste_couleurs[2]["nom"]` qui renvoie là encore `#!py "rouge"`.

??? question "Liste de dictionnaires"

    On considère la liste décrite ci-dessus.

    === "Propositions"
        
        - [ ] On peut accéder à la composante rouge de la première couleur en faisant `#!py dico_couleurs[0][rouge]`
        - [ ] `#!py dico_couleurs[4][2]` renvoie la composante bleue du bleu
        - [ ] `#!py dico_couleurs["jaune"]["vert"]` désigne la composante verte du jaune
        - [ ] `#!py [c["nom"] for c in dico_couleurs]` permet de récupérer les noms de toutes les couleurs

    === "Solution"
        
        - :x: `#!py "rouge"` est une chaîne de caractères, les guillemets sont indispensables
        - :x: Il faut faire `#!py dico_couleurs[4]["bleu"]`
        - :x: La couleur jaune est à l'indice `#!py 5` de la liste
        - :white_check_mark: `#!py [c["nom"] for c in dico_couleurs]` permet bien de récupérer les noms de toutes les couleurs

??? question "Requêtes (dictionnaires)"

    On travaille toujours avec la liste de dictionnaires décrite ci-dessus.

    Compléter le script afin de d'effectuer les requêtes proposées :

    {{ IDE('pythons/couleurs_dico/exo', MAX=10) }}

??? question "Nuances de gris (dictionnaires)"

    On travaille toujours avec la liste de dictionnaires ci-dessus.

    Reprendre l'exercice « Nuances de gris (listes) » avec cette structure de données.
    
    {{ IDE('pythons/gris_dico/exo', MAX=10) }}