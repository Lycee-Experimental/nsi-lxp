# Les données en tables

??? conclu "Programme"

    Les données organisées en table correspondent à une liste de p-uplets nommés qui partagent les mêmes descripteurs. La mobilisation de ce type de structure de données permet de préparer les élèves à aborder la notion de base de données qui ne sera présentée qu’en classe terminale. Il s’agit d’utiliser un tableau doublement indexé ou un tableau de p-uplets, dans un langage de programmation ordinaire et non dans un système de gestion de bases de données.

    |Notions|Compétences|Remarques|
    |--|--|--|
    Indexation de tables|Importer une table depuis un fichier texte tabulé ou un fichier CSV.|Est utilisé un tableau doublement indexé ou un tableau de p-uplets qui partagent les mêmes descripteurs.
    Recherche dans une table | Rechercher les lignes d’une table vérifiant des critères exprimés en logique propositionnelle. | La recherche de doublons, les tests de cohérence d’une table sont présentés.
    Tri d’une table | Trier une table suivant une colonne. | Une fonction de tri intégrée au système ou à une bibliothèque peut être utilisée.
    Fusion de tables | Construire une nouvelle table en combinant les données de deux tables. | La notion de domaine de valeurs est mise en évidence.


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