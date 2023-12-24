# Structure des données

Les **structures de données** sont essentielles pour gérer efficacement de grandes quantités de données, telles que les informations conservées dans des **bases de données** ou des **services d’indexation**. 

La maintenance correcte des systèmes de données nécessite l’identification de l’allocation de la mémoire, des interrelations entre les données et des processus de données, autant d’éléments auxquels les structures de données contribuent.

En outre, il est non seulement important d’utiliser des structures de données, mais aussi de choisir la structure de données appropriée pour chaque tâche. Le choix d’une structure de données inadapté pourrait entraîner des temps d’exécution lents ou un code non réactif. 

Quelques facteurs à prendre en compte lors du choix d’une structure de données incluent le **type d’information** qui sera stocké, l’emplacement des données existantes, la manière dont les données doivent être triées et la quantité de mémoire à réserver pour les données.

## Définitions

Une **structure de données** est une méthode de stockage et d'organisation des données pour en faciliter l'accès et la modification. Elle regroupe des données à gérer et un ensemble d'opérations qu'on peut leur appliquer (ou d’algorithmes pour les manipuler). 

On appelle **interface** d'une structure de donnée l'ensemble de ces opérations propre à la structure de donnée : créer, lire, modifier, supprimer, rechercher...

On a appris à reconnaître différents types construits par leur **aspect** (tuple, liste...), on abordera dans ce chapitre les structures de données non pas par ce qu’elles sont, mais par ce qu’elles permettent de faire grâce à leur interface. C’est ce que l’on appelle une **structure abstraite**.

La spécification de la structure de données par son interface permet de travailler avec une structure de données sans savoir exactement comment elle fonctionne. 

On parlera de **structure linéaire** lorsqu'un seul et unique indice nous permet d'accéder à une donnée. 

A contrario, une **structure non linéaire** permet de relier un élément à plusieurs autres éléments : arbres et graphes (voir chapitres ultérieurs)

Python propose une large collection de structures de données (ensembles, tableaux, piles, etc.), mais pas les listes, qui n’existent pas de façon native en Python. Il faudra les implémenter.

!!! abstract "Plan du cours"
    {% set parent_page = page.parent %}
    {% set child_pages = parent_page.children if parent_page else [] %}
    {% if child_pages %}
    <div class="toc">
    <ul>
    {% for child_page in child_pages %}
    {% if child_page != page %}
    <li><a href="/{{ child_page.url }}">Chapitre {{ loop.index - 1 }}: {{ child_page.title }}</a></li>
    {% endif %}
    {% endfor %}
    </ul>
    </div>
    {% endif %}