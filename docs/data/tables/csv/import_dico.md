# Import d'un fichier `csv` dans une liste de dictionnaire

## Avec le module `csv`

On considère à nouveau le fichier [temperatures_2020.csv](../temperatures_2020.csv). Ce fichier regroupe les températures minimales, maximales et moyennes dans différentes régions françaises pour certains jours de l'année 2020. Il est dans le dossier de travail et est encodé en `#!py utf-8`.

Les premières lignes du fichier sont données ci-dessous :

```title="📑 Données CSV"
mois,jour,région,tmin,tmax,tmoy
août,13,Pays de la Loire,19.25,25.35,22.3
août,13,Occitanie,17.51,26.55,22.03
```

{{exercice(1, titre="Repérer les bonnes informations")}}

    Observez l'extrait proposé et répondez aux questions suivantes :

    1. Quel est le séparateur utilisé ?
    2. Combien y-a-t-il de descripteurs ?
    3. Quels sont les types des descripteurs ? (entier, nombre décimal, chaîne de caractères...)

    ??? success "Solution"

          1. Le séparateur est la virgule
          2. Il y a six descripteurs
          3. `#!py mois` et `#!py région` sont des chaînes de caractères, `#!py jour` est un entier, les trois autres sont des flottants.


Le module `csv` de Python permet d'importer facilement des fichiers `csv` vers des listes de dictionnaires. La démarche est la suivante :

* ouvrir le fichier `csv`,
  
* créer un objet de type `csv.DictReader` (voir plus bas),

* l'utiliser pour lire les données du fichier et les convertir en dictionnaire.

Le code alors très concis :

!!! warning inline end "Important"

    Prenez le temps de lire les commentaires !
    
    Cliquez sur les +

```{ .python .annotate }
import csv
with open("temperatures_2020.csv", "r", encoding="utf-8") as fichier:
    lecteur = csv.DictReader(fichier, delimiter=",")  # (1)
    temperatures = [entree for entree in lecteur]  # (2)
```

1. Un objet `csv.DictReader` prend deux arguments : le fichier à lire et le séparateur
2. Les `entree` obtenues lors du parcours du `lecteur` sont des dictionnaires. On crée une liste en compréhension.

??? note "Comment Python connaît-il les descripteurs ?"

    Le comportement par défaut de `csv.DictReader` est de chercher les noms des descripteurs sur la première ligne du fichier. On utilise ce comportement ici.

    Si la première ligne comprend des données et que les descripteurs ont été récupérés ailleurs, on peut les passer en argument (sous forme d'une liste par exemple) en faisant `lecteur = csv.DictReader(fichier, delimiter=",", fieldnames=descripteurs) `

??? danger "Python < 3.8"

    Pour les versions précédentes de Python (avant la 3.8), il faut faire une conversion : `#!py temperatures.append(dict(entree))`


## Typage des données

Le module `csv` nous simplifie grandement la tâche mais il ne fait pas tout : les données ne sont pas typées :

```python
temperatures = [
    {"mois": "août", "jour": "13", "région": "Pays de la Loire", "tmin": "19.25", "tmax": "25.35", "tmoy": "22.3"},
    {"mois": "août", "jour": "13", "région": "Occitanie", "tmin": "17.51", "tmax": "26.55", "tmoy": "22.03"},
    {"mois": "août", "jour": "14", "région": "Pays de la Loire", "tmin": "17.7", "tmax": "25.7", "tmoy": "21.7"},
    ...
]
```

Le typage s'apparente à celui effectué dans le cas d'une liste de listes. Il est néanmoins plus simple sur un point : on peut directement utiliser le nom des descripteurs plutôt que leurs indices.

{{exercice(titre="Import et typage complets")}}

    Compléter le script ci-dessous permettant d'importer et de typer convenablement les données du fichier `temperatures_2020.csv`.

    !!! warning "Ordre de lecture"

        Le test de validation compare votre liste avec la liste obtenue en lisant le fichier dans l'ordre des lignes (comme proposé partout dans ce cours).

        Le test échouera donc si vous ne parcourez pas les lignes du fichier dans l'ordre...

    {{ IDE('pythons/temperatures_import_dict/exo', MAX=10) }}


??? note "Remarque"

    La méthode proposée ici lit deux fois l'ensemble des informations : 

    * une fois lors de l'import, 
    * une fois lors du typage.

    Il est possible de faire ces deux actions en une seule passe :

    ```python
    import csv

    temperatures = []
    with open("temperatures_2020.csv", "r", encoding="utf-8") as fichier:
        lecteur = csv.DictReader(fichier, delimiter=",")
        for entree in lecteur:
            entree["jour"] = int(entree["jour"])
            entree["tmin"] = float(entree["tmin"])
            entree["tmax"] = float(entree["tmax"])
            entree["tmoy"] = float(entree["tmoy"])
            temperatures.append(entree)
    ```
    
## À la main !

Il est possible d'effectuer les mêmes actions sans utiliser le module `csv`. La démarche est un peu plus longue mais permet de bien comprendre le fonctionnement.

L'idée est la suivante :

* ouvrir le fichier,
* récupérer les noms des descripteurs à l'aide de la première ligne du fichier,
* pour chaque ligne restant à lire :
    * la nettoyer et la découper,
    * créer un dictionnaire associant les noms des descripteurs aux valeurs,
    * ajouter ce dictionnaire à la liste générale.

!!! tip "Conseil"

    On pourra (re)lire avec intérêt la page sur [les fichiers](./manipulation.md)

{{exercice(titre="Récupérer les noms des descripteurs")}}

    On considère un fichier `csv` dont le séparateur est le point-virgule.

    Quelle(s) instruction(s) permet(tent) de récupérer les descripteurs ?

    === "Propositions"
        
        - [ ] 
                ```python
                with open("fichier.csv", "r", encoding="utf-8") as fichier:
                    for ligne in fichier:
                        descripteurs = ligne.split(",")
                ```
        - [ ] 
                ```python
                with open("fichier.csv", "r", encoding="utf-8") as fichier:
                    ligne = fichier.readline()
                    ligne_propre = ligne.strip()
                    descripteurs = ligne_propre.split(",")
                ```
        - [ ] 
                ```python
                with open("fichier.csv", "r", encoding="utf-8") as fichier:
                    ligne = fichier.readline()
                    descripteurs = ligne.strip().split(",")
                ```
        - [ ] 
                ```python
                with open("fichier.csv", "r", encoding="utf-8") as fichier:
                    descripteurs = fichier.readline().strip().split(",")
                ```

    === "Solution"
        
        - :x: On récupère ainsi les données de chaque ligne...
                ```python
                with open("fichier.csv", "r", encoding="utf-8") as fichier:
                    for ligne in fichier:
                        descripteurs = ligne.split(",")
                ```
        - :white_check_mark: En trois temps :
                ```python
                with open("fichier.csv", "r", encoding="utf-8") as fichier:
                    ligne = fichier.readline()  # on lit la 1ère ligne
                    ligne_propre = ligne.strip()  # on efface le \n
                    descripteurs = ligne_propre.split(",")  # on découpe à chaque ","
                ```
        - :white_check_mark: En trois temps aussi mais sur deux lignes :
                ```python
                with open("fichier.csv", "r", encoding="utf-8") as fichier:
                    ligne = fichier.readline()  # lecture de la 1ère ligne
                    descripteurs = ligne.strip().split(",")  # nettoyage et découpage
                ```
        - :white_check_mark: Tout en une seule ligne, ce n'est pas très clair !
                ```python
                with open("fichier.csv", "r", encoding="utf-8") as fichier:
                    descripteurs = fichier.readline().strip().split(",")
                ```

{{exercice(titre="Import dans une liste de dictionnaires à la main")}}

    Compléter le script ci-dessous permettant d'importer les données du fichier `temperatures_2020.csv` dans une liste de dictionnaires. On n'utilisera pas le module `csv`.

    !!! warning "Ordre de lecture"

        Le test de validation compare votre liste avec la liste obtenue en lisant le fichier dans l'ordre des lignes (comme proposé partout dans ce cours).

        Le test échouera donc si vous ne parcourez pas les lignes du fichier dans l'ordre...

    {{ IDE('pythons/temperatures_main/exo', MAX=10) }}
