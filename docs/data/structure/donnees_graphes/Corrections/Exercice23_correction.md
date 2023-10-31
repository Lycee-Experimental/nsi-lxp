??? note "Correction"
    2) En partant de A :
    ```
    s = A(blanc)
    p = []
    parcours = []

    A(noir)
    p = [A]

    Debut Tant que:
        u = A
        p = []
        parcours = [A]

        Début pour:
            v = B(blanc) ou F(blanc)

            B(noir)
            p = [B]

            F(noir)
            p = [F, B]

        u = F
        p = [B]

        Début pour:
            v = A(noir), G(blanc), H(blanc)
            
            
            G(noir)
            p = [G, B]

            H(noir)
            p = [H, G, B]


        u = H
        p = [G, B]

        Début pour:
            v = F(noir), I(blanc)

            I(noir)
            p = [I, G, B]

        u = I
        p = [G, B]

        Début pour:
            v = E(blanc), D(blanc), G(noir), H(noir)

            E(noir)
            p = [E, G, B]

            D(noir)
            p = [D, E, G, B]

        u = D
        p = [E, G, B]

        Début pour:
            v = B(noir), I(noir)

        u = E
        p = [G, B]

        Début pour:
            v = C(blanc), I(noir)

            C(noir)
            p = [C, G, B]

        u = C
        p = [G, B]

        Début pour:
            v = B(noir), E(noir)

        u = G
        p = [B]

        Début pour:
            v = B(noir), I(noir), F(noir)

        u = B
        p = []
        
        Début pour:
            v = A(noir), C(noir), D(noir), G(noir)


    Fin Tant que
    ```

    Le parcours en largeur à partir de A est donc :  A, F, H, I, D, E, C, G, B.