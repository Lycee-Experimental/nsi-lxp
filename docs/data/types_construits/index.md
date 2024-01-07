# Types construits de données

??? conclu "Programme"
    À partir des types de base se constituent des types construits, qui sont introduits au fur et à mesure qu’ils sont nécessaires.  
    Il s’agit de présenter tour à tour les **p-uplets (tuples)**, les enregistrements qui collectent des valeurs de types différents dans des champs nommés et les tableaux qui permettent un accès calculé direct aux éléments. En pratique, on utilise les appellations de Python, qui peuvent être différentes de celles d’autres langages de programmation.

    |Notions|Compétences|Remarques|
    |--|--|--|
    |p-uplets.<br>p-uplets nommés | Écrire une fonction renvoyant un p-uplet de valeurs.||
    Tableau indexé, tableau donné en compréhension. | Lire et modifier les éléments d’un tableau grâce à leurs index.Construire un tableau par compréhension. <br> Utiliser des tableaux de tableaux pour représenter des matrices : notation a [i] [j].<br> Itérer sur les éléments d’un tableau. | Seuls les tableaux dont les éléments sont du même type sont présentés. <br> Aucune connaissance des tranches (slices) n’est exigible. <br> L’aspect dynamique des tableaux de Python n’est pas évoqué.<br> Python identifie listes et tableaux.<br> Il n’est pas fait référence aux tableaux de la bibliothèque NumPy.
    Dictionnaires par clés et valeurs | Construire une entrée de dictionnaire. <br> Itérer sur les éléments d’un dictionnaire. | Il est possible de présenter les données EXIF d’une image sous la forme d’un enregistrement.<br> En Python, les p-uplets nommés sont implémentés par des dictionnaires.<br>Utiliser les méthodes keys(), values () et items ().



!!! info "Définition d'un type construit de donnée ou structures de données"
    Une **donnée** représente une information ou une valeur qui est utilisée, stockée ou traitée par un programme informatique.  
    On a vu que les données peuvent être de différents **types de base** : tels que des booléens (`#!py bool`), des nombres entiers (`#!py int`) ou naturels (`#!py float`), des caractères (`#!py char`), du texte (`#!py string`). Elles peuvent être entrées par l'utilisateur, générées par le programme lui-même ou provenir de sources externes.  
    Les **données construites**, également appelées **structures de données**, sont des regroupements de plusieurs données simples ou de base, combinées pour former une entité plus complexe. Elles permettent de représenter des informations plus riches et structurées dans un programme informatique.



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