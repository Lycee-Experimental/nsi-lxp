# Traitement et visualisation des données

Ce chapitre est une introduction au traitement et à à l'analyse des données, domaine communément appelé **Data Science** en informatique.

Les données sont d'une importance fondamentale en informatique et plus largement en sciences. De nos données personnelles qu'il faut savoir protéger face des entreprises peu scrupuleuses qui en font le commerce, à des mesures physico-chimiques qu'il faut traiter en masse pour modéliser l'évolution du climat... des **datacenters** fonctionnent aux 4 coins du mondes pour stocker et traiter des milliards d'informations.


!!! python "Prérequis" 

    * Les variables : types élémentaires (`#!py int`, `#!py str`, `#!py float`), affectations, calculs ;
    * Les fonctions : utilisation et définition ;
    * Structures conditionnelles : `#!py if... elif... else` ;
    * Structures itératives : les boucles bornées, les « *Pour* », et non bornées, les « *Tant que* » ;
    * Les listes (création, parcours, lecture et modification d'éléments) ;
    * Les dictionnaires (création, parcours, lecture et modification d'éléments) ;
    * Les tuples (création, parcours).

    Si ces notions ne sont pas claires pour toi, finalise un parcours sur [Futur Coder](https://fr.futurecoder.io/).

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


??? note "Crédits"
    La partie sur les tables a été réalisée par N. Revéret avec l'aide des membre du groupe [e-nsi](https://e-nsi.forge.aeif.fr/), en particulier M. Coilhac et F. Chambon. Les fichiers sources sont disponibles sur ce [dépôt](https://forge.aeif.fr/nreveret/donnees_en_table). 
    Les chapitres de terminale sont issus du [site d'Angélique Beucher](https://infosite27.forge.aeif.fr/informatique-au-lycee-prevert/)
    L'ensemble des documents sont sous licence [CC-BY-NC-SA 4.0 (Attribution, Utilisation Non Commerciale, ShareAlike)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

