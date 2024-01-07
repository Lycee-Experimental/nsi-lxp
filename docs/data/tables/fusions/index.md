---
title: Fusions
---
# :scissors: Fusionner des tables


On considère dans ce sujet les trois fichiers `csv` décrits ci-dessous :

=== "Les pays"

    [`countries.csv`](countries.csv) contient des informations décrivant les pays :

    * `CountryCode` : le code du pays (texte, clé primaire)

    * `Name` : le nom du pays (texte)

    * `Continent` : le continent du pays (texte)

    * `SurfaceArea` : la surface du pays (nombre décimal)

    * `Population` : la population du pays (entier)

    * `Capital` : la capitale du pays (nombre entier correspondant à un ID dans le fichier `cities.csv`)

    * d'autres descripteurs qui ne nous intéressent pas ici...

=== "Les langues parlées"

    [`languages.csv`](languages.csv) contient les informations sur les langues parlées dans chaque pays :

    * `CountryCode` : le code du pays (texte)

    * `Language` : la langue concernée par cette entrée (texte)

    * `IsOfficial` : cette langue est-elle officielle dans ce pays ? (texte, `T` pour *True*, `F` pour *False*)

    * `Percentage` : le pourcentage de locuteurs dans le pays (nombre décimal)

=== "Les villes"

    [`cities.csv`](cities.csv) contient des informations décrivant des villes :

    * `ID` : l'identifiant de la ville (entier)

    * `Name` : le nom de la ville (texte)

    * `code` : le code du pays dans lequel est situé la ville (texte)

    * `District` : la région d'appartenance de la ville (texte)

    * `Population` : la population de la ville (entier)


!!! tip "Import réalisés !"

    Dans toute la suite du TP, les listes `pays`, `langues` et `villes` contiennent les **dictionnaires** correspondant aux imports de ces différents fichiers.

    Les données sont correctement typées (en particulier les valeurs `isOfficial` de la liste `langues` qui sont des booléens).

    ```python
    pays = [
        {"CountryCode": "ABW", "Name": "Aruba", "Continent": "North America", ...},
        {"CountryCode": "AFG", "Name": "Afghanistan", "Continent": "Asia", ...},
        ...
    ]

    langues = [
        {"CountryCode" : "ABW", "Language": "Dutch", "IsOfficial": True, "Percentage": 5.3},
        {"CountryCode" : "ABW", "Language": "English", "IsOfficial": False, "Percentage": 9.5},
        ...
    ]

    villes = [
        {"ID": 1, "Name": "Kabul", "code": "AFG",, "District": "Kabol", "Population": 1780000},
        {"ID": 2, "Name": "Qandahar", "code": "AFG",, "District": "Qandahar", "Population": 237500},
        ...
    ]
    ```

## Langues parlées dans chaque pays

Quelles sont les langues parlées en Haïti ? Pour le savoir il faut :

* parcourir la liste `pays` jusqu'à trouver le code de Haïti (orthographié `Haiti` dans la liste `pays`),

* parcourir la liste `langues` et en extraire les valeurs correspondant à ce code.

{{exercice(1, titre="Langues parlées en Haïti")}}

    Compléter le code ci-dessous permettant de déterminer les langues parlées en Haïti.

    {{ IDE('pythons/haiti/exo') }}

Le descripteur `CountryCode` permet donc de faire le lien entre les deux listes `pays` et `langues`.

Utilisons cette relation afin de déterminer les langues parlées dans un pays quelconque.


{{exercice(titre="Langues parlées dans un pays")}}

    On demande d'écrire deux fonctions :
    
    * `code_pays` prend en argument la liste des pays ainsi que le nom d'un pays et renvoie son code ;

    * `langues_parlees` prend en argument les listes des données des pays et celle des langues (arguments `pays` et `langues`) ainsi que le nom d'un pays (`nom`) et renvoie la liste **des noms des langues** parlées dans ce pays.

    !!! example "Exemples"

        ```pycon
        >>> code_pays(pays, "Haiti")
        "HTI"
        >>> langues_parlees(pays, langues, "Haiti")
        ['French', 'Haiti Creole']
        ```

    {{ IDE('pythons/langues/exo') }}
    

## Capitales

Quelle est la capitale d'Haïti ? Là encore, il faut :

* parcourir la liste des pays jusqu'à trouver l'entrée correspondant à Haïti,
  
* repérer le code de la capitale correspondante,

* parcourir la liste des villes jusqu'à trouver le code cherché.

Nous allons effectuer ces actions pour chacun des pays présents dans la liste. La capitale étant trouvée, nous ajouterons une nouvelle clé `CapitalName` au dictionnaire du pays. La valeur associée sera le nom de la capitale obtenu.

!!! warning "Pas de capitale ?"

    Certains des « pays » listés n'en sont pas vraiment et n'ont donc pas de capitale. C'est par exemple le cas de l'Antarctique.
    
    Lors de l'import des données, on leur a associé la valeur `#!py -1` à la clé `#!py Capital`.

{{exercice(titre="Liens")}}

    Quels sont les descripteurs permettant de faire le lien entre les listes `pays` et `villes` ?

    === "Cocher l'affirmation correcte"
        
        - [ ] Le descripteur `"Capital"` de `pays` et `"Name"` de `villes`
        - [ ] Le descripteur `"Name"` de `pays` et `"Name"` de `villes`
        - [ ] Le descripteur `"Capital"` de `pays` et `"ID"` de `villes`
        - [ ] Le descripteur `"ID"` de `pays` et `"Capital"` de `villes`

    === "Solution"
        
        - :x: Le descripteur `"Capital"` de `pays` et `"Name"` de `villes`
        - :x: Le descripteur `"Name"` de `pays` et `"Name"` de `villes`
        - :white_check_mark: Le descripteur `"Capital"` de `pays` et `"ID"` de `villes`
        - :x: Le descripteur `"ID"` de `pays` et `"Capital"` de `villes`

{{exercice(titre="Associer les capitales aux pays")}}

    Compléter le code ci-dessous afin d'ajouter à chaque dictionnaire correspondant à un pays une nouvelle entrée `CapitalName` contenant le nom de sa capitale.

    On utilisera la chaîne vide `""` comme valeur pour les « pays » sans capitale.

    Ainsi :
    
    * le dictionnaire correspondant à la France contiendra un nouveau couple `"CapitalName": "Paris"`,
    
    * celui de l'Antarctique `"CapitalName": ""`.

    {{ IDE('pythons/capitales/exo') }}
