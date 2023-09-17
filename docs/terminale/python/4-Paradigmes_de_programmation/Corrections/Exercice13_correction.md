??? note "Correction"
    1. premier(X,[X|_]).<br>
    Et on teste avec : premier(1,[1,2,3]). Qui donne bien true
    2.
    ```
    dernier(X,[X]).
    dernier(X,[_|Q]):-dernier(X,Q).
    ```
    Et on teste avec : `dernier(1,[2,3,1]).` Qui donne bien true
    3.
    ```
    longueur(0,[]).
    longueur(N,[_|Q]):-longueur(M,Q),N is M+1.
    ```
    Et on teste avec : longueur(N,[1,2,3,4]). Qui donne bien 4