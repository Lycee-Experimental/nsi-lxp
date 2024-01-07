# Traitement et visualisation des données

Ce chapitre est une introduction au traitement et à à l'analyse des données, domaine communément appelé **Data Science** en informatique.

Les données sont d'une importance fondamentale en informatique et plus largement en sciences. De nos données personnelles qu'il faut savoir protéger face des entreprises peu scrupuleuses qui en font le commerce, à des mesures physico-chimiques qu'il faut traiter en masse pour modéliser l'évolution du climat... des **datacenters** fonctionnent aux 4 coins du mondes pour stocker et traiter des milliards d'informations.


!!! info "Définition d'un type construit de donnée ou structures de données"
    Une **donnée** représente une information ou une valeur qui est utilisée, stockée ou traitée par un programme informatique.  
    On a vu que les données peuvent être de différents **types de base** : tels que des booléens (`#!py bool`), des nombres entiers (`#!py int`) ou naturels (`#!py float`), des caractères (`#!py char`), du texte (`#!py string`). Elles peuvent être entrées par l'utilisateur, générées par le programme lui-même ou provenir de sources externes.  
    Les **données construites**, également appelées **structures de données**, sont des regroupements de plusieurs données simples ou de base, combinées pour former une entité plus complexe. Elles permettent de représenter des informations plus riches et structurées dans un programme informatique.


??? python "Prérequis Python" 

    * Les variables : types élémentaires (`#!py int`, `#!py str`, `#!py float`), affectations, calculs ;
    * Les fonctions : utilisation et définition ;
    * Structures conditionnelles : `#!py if... elif... else` ;
    * Structures itératives : les boucles bornées, les « *Pour* », et non bornées, les « *Tant que* » ;
    * Les listes (création, parcours, lecture et modification d'éléments) ;
    * Les dictionnaires (création, parcours, lecture et modification d'éléments) ;
    * Les tuples (création, parcours).

    Si ces notions ne sont pas claires pour toi, finalise un parcours sur [FutureCoder](https://fr.futurecoder.io/).

!!! abstract "Contenu du chapitre"
    **Pour les premières**

    - Rappel sur des [types construits de données](./types_construits/) que nous avons déjà croisés : [tuples](./types_construits/tuples.md), [listes](./types_construits/listes.md) et [dictionnaires](./types_construits/dictionnaires.md).
    - Introduction aux [tables de données](./tables/) : lecture de [fichiers de données](./tables/csv/manipulation.md), [recherches](./tables/requetes_simples/prenoms.md) et [fusion](./tables/fusions/) de tables de données. 

    **Pour les terminales**

    - Introduction à des [structures de données](./structure/) plus élaborées : [linéaires](./structure/lineaire.md), en [arbre](./structure/arbre.md) ou en [graphes](./structure/graphe.md)
    - Introduction aux [bases de données](./bases_de_donnees/)

??? note "Crédits"
    La partie sur les tables a été réalisée par N. Revéret avec l'aide des membre du groupe [e-nsi](https://e-nsi.forge.aeif.fr/), en particulier M. Coilhac et F. Chambon. Les fichiers sources sont disponibles sur ce [dépôt](https://forge.aeif.fr/nreveret/donnees_en_table). 
    Les chapitres de terminale sont issus du [site d'Angélique Beucher](https://infosite27.forge.aeif.fr/informatique-au-lycee-prevert/)
    L'ensemble des documents sont sous licence [CC-BY-NC-SA 4.0 (Attribution, Utilisation Non Commerciale, ShareAlike)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

