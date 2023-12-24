# 🔎 Algorithmes de recherches naïves 🔎

??? conclu "Programme"
	|Notions|Compétences|Remarques|
	|--|--|--|
    Parcours séquentiel d’un tableau | Écrire un algorithme de recherche d’une occurrence sur des valeurs de type quelconque.<br> Écrire un algorithme de recherche d’un extremum, de calcul d’une moyenne. | On montre que le coût est linéaire.


La recherche d'un élément dans une liste est un problème fréquemment rencontré dans les algorithmes.  

La façon la plus simple de chercher une valeur dans une liste est de parcourir un à un les éléments de la liste (de manière **séquentielle**). On compare les éléments à la valeur recherchée.

{{exercice(prem=1,titre="Parcours séquentiel version longue")}}

    Compléter la fonction `appartient_1` dont les spécifications sont données.

    !!! danger "Contrainte"

        Il est interdit d'écrire `if element in tableau:`   


    {{ IDE('scripts/appartient_1') }}  


{{exercice(titre="Parcours séquentiel version courte")}}

    🌵 Le problème de cette technique, c'est qu'on peut continuer à parcourir le tableau jusqu'au bout, pour rien, si on a trouvé l'élément avant la fin.  

    👉 Il est recommandé de faire une sortie anticipée de la boucle en utilisant le `return`

    Compléter la fonction `appartient_2` dont les spécifications sont données en utilisant une sortie anticipée.

    !!! danger "Contrainte"

        Il est interdit d'écrire `if element in tableau:`   


    {{ IDE('scripts/appartient_2') }} 


??? python "Astuce : savoir si un élément est présent dans une liste"
    La fonction `in` de python fait cela :

    {{ IDE('scripts/fct_in') }}