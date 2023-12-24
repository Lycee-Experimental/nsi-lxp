!!! info "Recherche par dichotomie"

    Il s'agit d'un algorithme classique. Le tableau pris en paramètre doit **obligatoirement être trié**.

    À chaque itération, on se demande si la valeur centrale est égale à la `cible` :

    * si oui, on renvoie immédiatement `True`
    * si non, cette cible est soit :
        * supérieure à la valeur centrale : il faut chercher dans la partie droite du tableau (`debut = milieu + 1`)
        * inférieure à la valeur centrale : il faut chercher dans la partie gauche du tableau (`fin = milieu - 1`)

    La zone de recherche (l'écart entre `fin` et `debut`) se réduit à chaque itération : si on finit par avoir `fin < debut`, c'est que la `cible` n'est pas dans le tableau. On sort de la boucle et renvoie `False`.
    

!!! info "Nombre maximal de tours de boucles"

    Prenons un écart d'indice initial `fin - debut` égal à $10^9$, (ce qui est très grand).

    Dans le pire des cas, où la cible n'est pas présente, on réalise tous les tours de boucles possibles.

    * Au premier tour, on a un écart environ de $\frac{10^9}{2}$, c'est à dire de $5 \times 10^8$
    * Au deuxième tour, on a un écart environ de $\frac{5 \times 10^8}{2}$ c'est à dire $25 \times 10^7$
    * Ainsi de suite ...
    * Au trentième tour, on a un écart d'environ $\frac{10^9}{2^{30}}$ c'est à dire d'environ 1.

    Ainsi, dans une liste de taille $10^9$, en au plus environ 30 tours on sait si l'élément `cible` est présent.
