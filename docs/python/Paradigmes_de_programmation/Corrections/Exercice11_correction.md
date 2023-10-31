??? note "Correction"

    ```
    route(a,s).
    route(a,d).
    route(a,b).
    route(b,a).
    route(b,e).
    route(b,c).
    route(c,b).
    route(s,a).
    route(s,d).
    route(d,s).
    route(d,a).
    route(d,e).
    route(e,d).
    route(e,b).

    voisines(X,Y):-route(X,Y).
    ```