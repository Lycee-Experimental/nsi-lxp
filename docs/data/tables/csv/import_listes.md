---
author: Nicolas Revéret
title: Import vers listes
---
# Import d'un fichier `csv` dans une liste de listes

On considère le fichier [temperatures_2020.csv](../temperatures_2020.csv). Ce fichier regroupe les températures minimales, maximales et moyennes dans différentes régions françaises pour certains jours de l'année 2020. Il est dans le dossier de travail et est encodé en `#!py utf-8`.

Les premières lignes du fichier sont données ci-dessous :

```title="📑 Données CSV"
mois,jour,région,tmin,tmax,tmoy
août,13,Pays de la Loire,19.25,25.35,22.3
août,13,Occitanie,17.51,26.55,22.03
```

??? question "Repérer les bonnes informations"

    Observez l'extrait proposé et répondez aux questions suivantes :

    1. Quel est le séparateur utilisé ?
    2. Combien y-a-t-il de descripteurs ?
    3. Quels sont les types des descripteurs ? (entier, nombre décimal, chaîne de caractères...)

    ??? success "Solution"

          1. Le séparateur est la virgule
          2. Il y a six descripteurs
          3. `#!py mois` et `#!py région` sont des chaînes de caractères, `#!py jour` est un entier, les trois autres sont des flottants.


Un fichier `csv` est un fichier contenant des données textuelles : son importation avec Python peut se faire facilement avec `#!py open`.

On propose dans un premier temps d'importer les données dans une liste de listes. Voici un code fonctionnel :

!!! warning inline end "Important"

    Prenez le temps de lire les commentaires !
    
    Cliquez sur les +

```{ .python .annotate }
temperatures = []
with open(file="temperatures_2020.csv", mode="r", encoding="utf-8") as fichier:
    fichier.readline()  # (1)
    for ligne in fichier:  # (2)
        ligne_propre = ligne.strip()  # (3)
        valeurs = ligne_propre.split(",")  # (4)
        temperatures.append(valeurs)
```

1. :warning: Les descripteurs ne sont pas utilisés : on lit la première ligne sans l'ajouter au résultat :warning:
2. :eyeglasses: Parcours et lecture de toutes les lignes restantes :eyeglasses:
3. :broom: on ôte le `#!py \n` en fin de ligne :broom:
4. :scissors: on découpe la ligne à chaque caractère `#!py ","` en une liste de valeurs :scissors:

On obtient le résultat suivant :

```python
temperatures = [
    ["août", "13", "Pays de la Loire", "19.25", "25.35", "22.3"],
    ["août", "13", "Occitanie", "17.51", "26.55", "22.03"],
    ["août", "14", "Pays de la Loire", "17.7", "25.7", "21.7"],
    ...
]
```

Les données ont bien été importées mais elles sont mal typées : les températures sont par exemple stockées sous forme des chaînes de caractères. Sous cette forme la somme `#!py "19.25" + "26.55"` renvoie `#!py "19.2526.55"` !

Il reste donc à **typer les données**. Par défaut celles-ci sont toutes au format `#!py str`. Seuls les nombres entiers et les décimaux sont à typer.

On rappelle les indices ci-dessous :

| Descripteur | `#!py mois` | `#!py jour` | `#!py région` | `#!py tmin`  | `#!py tmax`  | `#!py tmoy`  |
| :---------: | :---------: | :---------: | :-----------: | :----------: | :----------: | :----------: |
|   Indice    |  `#!py 0`   |  `#!py 1`   |   `#!py 2`    |   `#!py 3`   |   `#!py 4`   |   `#!py 5`   |
| Type Python | `#!py str`  | `#!py int`  |  `#!py str`   | `#!py float` | `#!py float` | `#!py float` |

Il est possible de typer toutes les valeurs à l'indice `#!py 1` en faisant : 

```python
for entree in temperatures:
    entree[1] = int(entree[1])  # int convertit une chaîne de caractère en un entier
```

???+ question "Import et typage complets"

    Compléter le script ci-dessous permettant d'importer et de typer convenablement les données du fichier `temperatures_2020.csv`.

    On rappelle que `#!py float` permet de convertir une chaîne de caractère en un flottant.

    {{ IDE('pythons/temperatures_import/exo', MAX=10) }}
