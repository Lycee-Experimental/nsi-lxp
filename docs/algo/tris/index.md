# Introduction aux algorithmes de tri

??? conclu "Programme"
	|Notions|Compétences|Remarques|
	|--|--|--|
    Tris par insertion, par sélection | Écrire un algorithme de tri.<br> Décrire un invariant de boucle qui prouve la correction des tris par insertion, par sélection. | La terminaison de ces algorithmes est à justifier.<br> On montre que leur coût est quadratique dans le pire cas.




??? info "Intro : Le tri en informatique"
    Dans la vie courante, les deux verbes trier et classer ne sont pas synonymes.
    - **Trier** ou effectuer un tri c’est répartir les éléments en paquets correspondant à un certain critère : par exemple séparer les déchets selon leur nature, les personnes d’une assemblée selon leur sexe ou selon leur langue maternelle.

    ![tri1](images/tri.jpg){ width=80%; : .center }

    - **Classer** ou effectuer un classement c’est mettre des éléments selon un certain ordre : par exemple ranger les personnes d’une assemblée de la plus petite à la plus grande, ou de la plus jeune à la plus âgée.

    ![tri2](images/pokemon.jpg){ width=80%; : .center }

    !!! info "Définition à retenir"
        En informatique le **tri**  est à prendre avec le sens de **classement**.


??? video "Vidéo : Les algorithmes de tri"
    <iframe title="Les algorithmes de tri" width="560" height="315" src="https://peertube.lyceeconnecte.fr/videos/embed/cffa5c51-e0fa-4ef7-9437-743a683fc937" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>


??? example "Animation : Différentes méthodes de tri"

    Changer le *type de tri* et cliquer sur *commencer* pour visualiser les étapes de l'algorithme.

    :warning: Seuls les tris par **insertion** et **sélection** sont au programme en NSI.

    <iframe loading="lazy" src="https://animations.interstices.info/methodes-tri/index.html" width="740" height="410" frameborder="0" scrolling="no" bis_size="{&quot;x&quot;:995,&quot;y&quot;:1284,&quot;w&quot;:740,&quot;h&quot;:410,&quot;abs_x&quot;:995,&quot;abs_y&quot;:1284}"></iframe>


??? python "Astuce Python : tri natif avec `sorted()` et `sort()`"

    === "Nouvelle liste triée avec `sorted()`"
        En Python, nous pouvons utiliser la fonction built-in `sorted()` pour créer une **nouvelle liste** triée.
        === "`help(sorted)`"
            {{ IDE('scripts/help_sorted') }}

        === "`sorted(ma_liste)`"
            {{ IDE('scripts/tri_hello') }}

        === "`sorted(ma_liste, reverse = True)`"
            {{ IDE('scripts/reverse') }}

    === "Tri "en place" avec la méthode `.sort()`" 
        Il est également possible d'utiliser la méthode `.sort()` des objets de type `list` pour les trier **en place**.

        {{ IDE('scripts/sort_liste') }}

??? abstract "Compléments" 
    Pour approfondir : [Interstices](https://interstices.info/les-algorithmes-de-tri/){ .md-button target="_blank" rel="noopener" }


