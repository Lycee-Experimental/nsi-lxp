# Populations des communes françaises (Métropole)

On s'intéresse au fichier [pop_hist.csv](../pop_hist.csv) regroupant des informations sur la population des communes de France Métropolitaine à travers l'histoire.

Ce fichier a été adapté à partir de [cette source](https://www.insee.fr/fr/statistiques/3698339). Les adaptations faites sont :

* suppression des données de population pour certaines années,

* suppression des communes pour lesquelles les données sont incomplètes (populations anciennes manquantes). Cette suppression explique que les communes listées soient toutes en métropole (hors Corse).

!!! warning "Fichier volumineux"

    Le fichier comporte 34 496 lignes !
    
    On déconseille vivement d'afficher la totalité du tableau avec Python...

Les premières lignes de ce fichier sont :

```title="📑 Données CSV"
departement;nom;pop_2019;pop_2009;pop_1999;pop_1990;pop_1982;pop_1968;pop_1954;pop_1936;pop_1926;pop_1906;pop_1896;pop_1886;pop_1876
Ain;L'Abergement-Clémenciat;779;787;728;579;477;347;424;506;543;629;572;622;604
```

Les descripteurs sont explicités ci-dessous :

|        Descripteur |    Indice | Type Python |                   Contenu |
| -----------------: | --------: | ----------: | ------------------------: |
| `#!py departement` |  `#!py 0` |  `#!py str` | département de la commune |
|         `#!py nom` |  `#!py 1` |  `#!py str` |         nom de la commune |
|    `#!py pop_2019` |  `#!py 2` |  `#!py int` |        population en 2019 |
|    `#!py pop_2009` |  `#!py 3` |  `#!py int` |        population en 2009 |
|    `#!py pop_1999` |  `#!py 4` |  `#!py int` |        population en 1999 |
|    `#!py pop_1990` |  `#!py 5` |  `#!py int` |        population en 1990 |
|    `#!py pop_1982` |  `#!py 6` |  `#!py int` |        population en 1982 |
|    `#!py pop_1968` |  `#!py 7` |  `#!py int` |        population en 1968 |
|    `#!py pop_1954` |  `#!py 8` |  `#!py int` |        population en 1954 |
|    `#!py pop_1936` |  `#!py 9` |  `#!py int` |        population en 1936 |
|    `#!py pop_1926` | `#!py 10` |  `#!py int` |        population en 1926 |
|    `#!py pop_1906` | `#!py 11` |  `#!py int` |        population en 1906 |
|    `#!py pop_1896` | `#!py 12` |  `#!py int` |        population en 1896 |
|    `#!py pop_1886` | `#!py 13` |  `#!py int` |        population en 1886 |
|    `#!py pop_1876` | `#!py 14` |  `#!py int` |        population en 1876 |

On propose ci-dessous deux versions du même exercice selon le type de listes choisis : liste de listes ou de dictionnaires.


{{exercice(1, titre="Requêtes dans une liste de listes")}}

    Compléter le script ci-dessous afin d'effectuer les requêtes demandées. 
    
    Il faudra tout d'abord importer et typer les données ici sous la forme d'une liste de listes.
    
    La liste reprenant l'ensemble des informations sera `communes`.

    !!! warning "Il y a beaucoup de données : le script met un peu de temps à s'exécuter"
    
    {{ IDE('pythons/population_liste/exo', MAX=10) }}

{{exercice(titre="Requêtes dans une liste de dictionnaires")}}

    Compléter le script ci-dessous afin d'effectuer les requêtes demandées. 
    
    Il faudra tout d'abord importer et typer les données ici sous la forme d'une liste de dictionnaires.
    
    La liste reprenant l'ensemble des informations sera `communes`.

    !!! warning "Il y a beaucoup de données : le script met un peu de temps à s'exécuter"
    
    {{ IDE('pythons/population_dico/exo', MAX=10) }}
    