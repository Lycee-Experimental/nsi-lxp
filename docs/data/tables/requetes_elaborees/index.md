---
title: Requêtes élaborées
---
# Meilleurs films selon IMDB

À ce stade nous savons :

* ouvrir un fichier `csv` à l'aide de Python,
* lire son contenu dans une liste (de listes ou de dictionnaires),
* typer les données,
* effectuer des requêtes sur ces données à l'aide de listes en compréhension.

## Présentation des données et import

Nous allons pousser notre étude un peu plus loin lors de l'étude du fichier `films.csv`[^1]. Ce [fichier](../films.csv) reprend les 517 films les mieux notés sur le site [IMDB](https://www.imdb.com/).

[^1]: [source](https://www.kaggle.com/datasets/faisaljanjua0555/top-500-movies-of-all-time)

Les descripteurs proposés sont :


|    Descripteur |   Indice |  Type Python |                         Contenu |
| -------------: | -------: | -----------: | ------------------------------: |
| `#!py Ranking` | `#!py 0` |   `#!py int` | rang du film dans le classement |
|    `#!py Name` | `#!py 1` |   `#!py str` |                     nom du film |
|    `#!py Year` | `#!py 2` |   `#!py int` |             année de production |
| `#!py Minutes` | `#!py 3` |   `#!py int` |              durée (en minutes) |
|  `#!py Genres` | `#!py 4` |   `#!py str` | genres associés (voir remarque) |
|  `#!py Rating` | `#!py 5` | `#!py float` |            note moyenne(sur 10) |
|   `#!py Votes` | `#!py 6` |   `#!py int` |                 nombre de votes |
|   `#!py Gross` | `#!py 7` | `#!py float` |         revenus générés (en M$) |

!!! note "Les genres"

    Chaque film est associé à au moins un genre, certains à trois genres...

    Dans le cas où plusieurs genres sont cités, ceux-ci sont séparés par des virgules.


Voici les premières lignes du fichier :

```title="📑 Données CSV"
Ranking;Name;Year;Minutes;Genres;Rating;Votes;Gross
1;Citizen Kane;1941;119;Drama, Mystery;8.3;442770;1.59
2;The Godfather;1972;175;Crime, Drama;9.2;1849989;134.97
3;The Wizard of Oz;1939;102;Adventure, Family, Fantasy;8.1;400883;2.08
```

On importe les données sous la forme d'une liste de dictionnaires. Le code est le suivant :

```python
import csv

films = []
with open("films.csv", "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=";")
    for entree in lecteur:
        entree["Ranking"] = int(entree["Ranking"])
        entree["Year"] = int(entree["Year"])
        entree["Minutes"] = int(entree["Minutes"])
        entree["Rating"] = float(entree["Rating"])
        entree["Votes"] = int(entree["Votes"])
        entree["Gross"] = float(entree["Gross"])
        films.append(entree)
```

!!! tip "Import réalisé !"

    Dans toute la suite du TP, la liste `films` telle qu'importée ci-dessus sera accessible dans chaque éditeur.

## Votes par genre

Le fichier compte 25 films dont l'un des `#!py Genres` est `#!py Family` et 26 avec le genre `#!py Horror`. On précise qu'**aucun film ne possède ces deux genres**.

Parmi ces deux genres, quel est celui qui a reçu le plus de votes au total (en additionnant les votes reçus par chaque film) ?

{{exercice(1, titre="Comparaison de genres")}}

    Compléter le script ci-dessous afin de compter : 
    
    * le nombre total de votes qu'ont reçus les films dont l'un des genres est `#!py Family` (utiliser la variable `#!py total_family`),
    
    * le nombre total de votes qu'ont reçus les films dont l'un des genres est `#!py Horror` (utiliser la variable `#!py total_horror`).

    {{ IDE('pythons/family_horror/exo') }}
    

## Projection(s)

Comment faire pour n'obtenir que les noms des films cités dans le fichier ?

On peut procéder ainsi :

```pycon
>>> [entree["Name"] for entree in films]
['Citizen Kane', 'The Godfather', 'The Wizard of Oz', 'The Shawshank Redemption', 'Pulp Fiction', ...]
```

Afin de généraliser le procédé, on souhaite écrire une fonction `#!py projection` qui :

* prend en argument la liste de dictionnaires à manipuler ainsi que le nom d'un descripteur,

* renvoie la liste ne contenant que les valeurs associées à ce descripteur.

{{exercice( titre="La fonction `projection`")}}


    Compléter le code ci-dessous en saisissant la fonction `projection` telle que décrite.

    Attention, les résultats doivent être **dans le même ordre que dans la liste initiale**.

    {{ IDE('pythons/film_projection/exo') }}

{{exercice( titre="La fonction `projection_multiple`")}}

    On souhaite désormais récupérer les données associées à plusieurs descripteurs : la fonction `#!py projection_multiple` prend en argument la liste des données et un tuple contenant les descripteurs à conserver.

    Par exemple `projection_multiple(films, ("Name", "Year", "Rating"))` renverra la liste des tuples formés du nom, de l'année de production et de la note de de chaque film.

    ```pycon
    >>> projection_multiple(films, ("Name", "Year", "Rating"))
    [('Citizen Kane', 1941, 8.3), ('The Godfather', 1972, 9.2), ('The Wizard of Oz', 1939, 8.1), ...]
    ```

    ??? tip "Aide"

        Nous avons vu comment créer des listes en compréhension. Il est aussi possible de créer des tuples en compréhension :

        ```pycon
        >>> tuple(2 * k for k in range(3))
        (0, 2, 4)
        >>> [tuple(k * lettre for k in range(3)) for lettre in "ab"]
        [('', 'a', 'aa'), ('', 'b', 'bb')]
        ```

    Compléter le code ci-dessous en saisissant la fonction `projection_multiple` telle que décrite.

    {{ IDE('pythons/film_projection_multiple/exo') }}

## Sommes et moyennes

Quel est le montant total rapporté par l'ensemble de ces films ? Et le montant moyen ? Pour le savoir il faut dans un premier temps additionner les revenus générés.

Écrivons une fonction pour cela.

{{exercice( titre="La fonction `somme`")}}

    Compléter le code ci-dessous en saisissant la fonction `somme` qui :

    * prend en argument la liste de dictionnaires à manipuler ainsi que le nom d'un descripteur,

    * renvoie la somme de toutes les valeurs associées à ce descripteur.

    !!! note "Remarque"

        Vous observerez que l'on ne teste pas la stricte égalité des résultats car les valeurs manipulées sont des flottants et qu'il y a des erreurs d'arrondis.

    {{ IDE('pythons/film_somme/exo') }}

Il est désormais possible de calculer la moyenne des valeurs d'un descripteurs. Là encore, écrivons une fonction pour cela.

{{exercice( titre="La fonction `moyenne`")}}

    Compléter le code ci-dessous en saisissant la fonction `moyenne` qui :

    * prend en argument la liste de dictionnaires à manipuler ainsi que le nom d'un descripteur,

    * renvoie la moyenne de toutes les valeurs associées à ce descripteur.

    !!! tip "Remarque"

        Une version de la fonction `somme` précédente est fournie. Vous pouvez l'utiliser dans votre code.

    {{ IDE('pythons/film_moyenne/exo') }}

La fonction `moyenne` est donc valide. Pourtant l'appel `moyenne(films, "Gross")` renvoie un résultat faux !

En effet, pour certains films le revenu total est inconnu. Néanmoins, afin de proposer un fichier `csv` valide, sans valeurs manquantes, la valeur `#!py -1.0` a été ajoutée dans ce cas. C'est le cas par exemple pour le 19ème film du classement (« *Les 400 coups* » de François Truffaut) :

```pycon
>>> projection_multiple(films, ("Name", "Gross"))[18]
('The 400 Blows', -1.0)
```

Pouvez-vous calculer la moyenne des revenus générés par les films pour lesquels les revenus sont connus ?

{{exercice( titre="Revenu moyen des films")}}

    Calculer le revenu moyen des films proposés. Il ne faut pas tenir compte des films pour lesquels cette valeur est inconnue (`#!py -1.0` dans le fichier).

    Votre variable contenant la bonne valeur doit s'appeler `moyenne_valide` afin de pouvoir passer les tests avec succès.

    Les fonctions `somme` et `moyenne` sont déjà chargées.

    {{ IDE('pythons/film_revenus/exo') }}

## La meilleure année ?

Quelle année a vu se produire le plus de films présents dans ce classement ? Nous allons compter le nombre de films produits chaque année.

Une approche naïve consisterait à effectuer de nombreuses requêtes, une par année : « *quels sont les films produits en 1900 ?* », « *quels sont les films produits en 1901 ?* », *etc*.

Cette approche présente plusieurs inconvénients :

* quelles sont les années à chercher ? On a fait l'hypothèse que les films ont été produits à partir de 1900 mais c'est vraisemblablement incorrect...

* Python doit lire l'ensemble des données à **chaque** requête ! Donc 100 lectures des 517 films si l'on teste tout le XX-ème siècle...

Une approche plus efficace consiste à utiliser un dictionnaire dont les clés sont les années et les valeurs le nombre de films produits cette année-ci. On peut procéder ainsi :

* initialement le dictionnaire est vide,
* on parcourt l'ensemble des films. Pour chacun :
  * si son année de production n'est pas présente dans le dictionnaire, on l'ajoute (en tant que clé) avec la valeur `#!py 1` (c'est la première fois que l'on rencontre cette valeur)
  * si l'année est déjà dans le dictionnaire on incrémente simplement la valeur associée.

{{exercice( titre="Films par années")}}

    Compléter le script ci-dessous permettant de compléter le dictionnaire `annee_films` associant à chaque année présente dans la liste des films le nombre de films produits cette année-ci.
    
    {{ IDE('pythons/film_annee/exo') }}

Il reste à déterminer l'année durant laquelle le plus de films ont été produits.

{{exercice( titre="La meilleure année")}}

    On a chargé en mémoire le dictionnaire `annee_films` associant à chaque année le nombre de films produits cette année-ci.

    Déterminer l'année (nommée `annee_maxi`) durant laquelle le plus de films ont été produits.

    !!! tip "Pas d'égalité !"

        Une année sort du lot, il n'y a pas d'*ex-aequo*.

    {{ IDE('pythons/film_annee_max/exo') }}


## Le meilleur genre ?

Quel genre de film est cité le plus de fois ? Facile, il suffit de compter les apparitions de chaque genre comme l'on vient de compter les années.

**Mais** les genres sont mal présentés : chaque film est associé à un, deux ou trois genres, si besoin séparés par des virgules, avec des espaces derrière les virgules...

```pycon
>>> films[3]["Genres"]
'Drama'
>>> films[4]["Genres"]
'Crime, Drama'
>>> films[5]["Genres"]
'Drama, Romance, War'
```
Pouvez-vous déterminer le genre le plus présent ?

{{exercice( titre="Le meilleur genre")}}

    Déterminer le genre le plus représenté dans les films.

    La variable contenant ce genre sera nommée `meilleur_genre`

    !!! tip "Astuce"

        On rappelle que la méthode `#!py str.split` découpe une chaîne de caractères à chaque apparition de l'argument et renvoie la liste des chaînes obtenues.

        Par exemple `#!py "31/5/2007".split("/")` renvoie `#!py ['31', '5', '2007']`.
    
    {{ IDE('pythons/film_genre/exo') }}
