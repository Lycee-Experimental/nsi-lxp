??? note "Correction"
    1. Quand le graphe G contient au moins un cycle : l’algo renvoie vrai<br>
    Quand le graphe G ne contient aucun cycle : l’algo renvoie faux
    2. A partir de A :

    ```
    p = [A]

    u = A(blanc)
    p = []

        v = B(blanc), C(blanc)
        p = [B]
        p = [C,B]
        A(noir)

    u = C
    p = [B]

        v = E(blanc), D(blanc)
        p = [E, B]
        p = [D, E, B]
        C(noir)

    u = D
    p = [E, B]

        v = C(noir)
        D(noir)

    u = E
    p = [B]

        v = C(noir)
        E(noir)

    u = B
    p = []
        
        v = A(noir), F(blanc)
        B(noir)

    Renvoie Faux
    ```
    3. A partir de A :

    ```
    p = [A]

    u = A(blanc)
    p = []

        v = B(blanc), C(blanc)
        p = [B]
        p = [C, B]
        A(noir)

    u = C(blanc)
    p = [B]

        v = E(blanc), D(blanc)
        p = [E, B]
        p = [D, E, B]
        C(noir)

    u = D(blanc)
    p = [E, B]

        v = C(noir), F(blanc)
        p = [F, E, B]
        D(noir)

    u = F(blanc)
    p = [E, B]

        v = D(noir), B(blanc)
        p = [B, E, B]
        F(noir)

    u = B(blanc)
    p = [E, B]
        
        v = A(noir), F(noir)
        B(noir)

    u = E(blanc)
    p = [B]

        v = C(noir)
        E(noir)

    u = B(noir)
    p = []

        v = A(noir), F(noir)

    Renvoie Vraie
    ```