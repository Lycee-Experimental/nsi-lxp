# Les prénoms donnés en France

On s'intéresse au fichier [nat2021.csv](../nat2021.csv) regroupant des informations sur les prénoms donnés en France de 1900 à 2021. Ce fichier provient du [site de l'INSEE](https://www.insee.fr/fr/statistiques/2540004?sommaire=4767262#documentation).

!!! warning "Fichier volumineux"

    Le fichier initial comporte 648 616 lignes !
    
    À vrai dire, il est si long que le moteur permettant de faire fonctionner ce site mettrait beaucoup trop de temps à le lire en entier...

    On a donc limité le fichier original aux seules années postérieures à l'an 2000 (inclus).
    
    Même allégé, on déconseille vivement d'afficher la totalité du tableau avec Python...

Les premières lignes de ce fichier sont :

```title="📑 Données CSV"
sexe;prenom;annee;nombre
G;PRENOMS_RARES;2000;12583
G;PRENOMS_RARES;2001;13285
```

!!! note "Remarques"

    `PRENOMS_RARES` correspond à des prénoms donnés moins de 20 fois entre 1900 et 1945 ou entre 1946 et 2021. Tous ces prénoms sont regroupés pour chaque année. On doit donc comprendre qu'en 2000, 12 583 garçons ont reçu un « prénom rare ».

    On remarquera de plus que **tous les prénoms sont saisis en majuscule** (avec potentiellement des accents comme dans `LÉONIE`).

{{exercice(1, titre="Repérer les bonnes informations")}}

    Observez l'extrait proposé et répondez aux questions suivantes :

    1. Quel est le séparateur utilisé ?
    2. Combien y-a-t-il de descripteurs ?
    3. Quels sont les types des descripteurs ? (entier, nombre décimal, chaîne de caractères...)

    ??? success "Solution"

          1. Le séparateur est le point virgule
          2. Il y a quatre descripteurs
          3. `#!py sexe` et `#!py prenom` sont des chaînes de caractères, `#!py annee` et `#!py nombre` des entiers.

## Import(s)

On laisse ici le choix d'importer ce fichier sous forme d'une liste de listes ou d'une liste de dictionnaires. Vous pouvez aussi vous entraîner en réalisant les deux types d'imports !

Quel que soit le choix fait, la liste regroupant l'ensemble des entrées sera nommée `prenoms` et les données seront **typées**.

On rappelle que la structure du fichier est la suivante :

| Descripteur | `#!py sexe` | `#!py prenom` | `#!py annee` | `#!py nombre` |
| :---------: | :---------: | :-----------: | :----------: | :-----------: |
|   Indice    |  `#!py 0`   |   `#!py 1`    |   `#!py 2`   |   `#!py 3`    |
| Type Python | `#!py str`  |  `#!py str`   |  `#!py int`  |  `#!py int`   |


{{exercice(titre="Import dans une liste de listes")}}

    Compléter le script ci-dessous afin d'importer les données dans une liste de listes.

    Les données seront typées.

    !!! warning "Il y a beaucoup de données : le script met un peu de temps à s'exécuter"

    {{ IDE('pythons/prenoms_import_liste/exo', MAX=10) }}

{{exercice(titre="Import dans une liste de dictionnaires")}}

    Compléter le script ci-dessous afin d'importer les données dans une liste de dictionnaires.

    Les données seront typées.

    !!! warning "Il y a beaucoup de données : le script met un peu de temps à s'exécuter"

    {{ IDE('pythons/prenoms_import_dico/exo', MAX=10) }}

## Requêtes

Dans ce qui suit, les imports ont été effectués et la liste `prenoms` est chargée en mémoire. On peut désormais l'interroger afin d'en extraire des résultats.

On propose ci-dessous deux versions du même exercice selon le type de listes choisis : liste de listes ou de dictionnaires.

{{exercice(titre="Requêtes dans une liste de listes")}}

    La première entrée de la liste est :

    ```pycon
    >>> prenoms[0]
    ['G', 'PRENOMS_RARES', 2000, 12583]
    ```
    
    On peut sélectionner les entrées correspondant au prénom `#!py ADELINE` en faisant :

    ```python
    adeline = [entree for entree in prenoms if entree[1] == "ADELINE"]
    ```

    Vous remarquerez que les prénoms sont saisis en majuscule dans le fichier `csv`.

    On peut de la même façon sélectionner les entrées correspondant au prénom `#!py "ANTOINE` en `#!py 2007` :

    ```python
    antoine_2007 = [entree for entree in prenoms if entree[1] == "ANTOINE" and entree[2] == 2007]
    ```

    Compléter le script ci-dessous afin d'effectuer les requêtes demandées. `prenoms` a déjà été chargé  et correctement typé sous forme d'une liste de listes.

    !!! warning "Il y a beaucoup de données : le script met un peu de temps à s'exécuter"
    
    {{ IDE('pythons/prenoms_requetes_liste/exo', MAX=10) }}

{{exercice(titre="Requêtes dans une liste de dictionnaires")}}

    La première entrée de la liste est :

    ```pycon
    >>> prenoms[0]
    {'sexe': 'G', 'prenom': 'PRENOMS_RARES', 'annee': 2000, 'nombre': 12583}
    ```

    On peut sélectionner les entrées correspondant au prénom `#!py ADELINE` en faisant :

    ```python
    adeline = [entree for entree in prenoms if entree["prenom"] == "ADELINE"]
    ```

    Vous remarquerez que les prénoms sont saisis en majuscule dans le fichier `csv`.

    On peut de la même façon sélectionner les entrées correspondant au prénom `#!py "ANTOINE` en `#!py 2007` :

    ```python
    antoine_2007 = [entree for entree in prenoms if entree["prenom"] == "ANTOINE" and entree["annee"] == 2007]
    ```
    
    Compléter le script ci-dessous afin d'effectuer les requêtes demandées. `prenoms` a déjà été chargé  et correctement typé sous forme d'une liste de dictionnaires.

    !!! warning "Il y a beaucoup de données : le script met un peu de temps à s'exécuter"
    
    {{ IDE('pythons/prenoms_requetes_dico/exo', MAX=10) }}
