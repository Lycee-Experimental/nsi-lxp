??? note "Correction"
    2) En partant de A :
        ```
        s = A(blanc)
        f = []

        A(noir)
        f = [A]

        Debut Tant que:
            u = A
            f = []

            Début pour:
                v = B(blanc) ou F(blanc)

                B(noir)
                f = [B]

                F(noir)
                f = [B, F]

            u = B
            f = [F]

            Début pour:
                v = A(noir), C(blanc), D(blanc), G(blanc)
                
                
                C(noir)
                f = [F, C]

                D(noir)
                f = [F, C, D]

                G(noir)
                f = [F, C, D, G]

            u = F
            f = [C, D, G]

            Début pour:
                v = A(noir), G(noir), h(blanc)

                H(noir)
                f = [C, D, G, H]

            u = C
            f = [D, G, H]

            Début pour:
                v = B(noir), E(blanc)

                E(noir)
                f = [D, G, H, E]

            u = D
            f = [G, H, E]

            Début pour:
                v = B(noir), I(blanc)

                I(noir)
                f = [G, H, E, I]

            u = G
            f = [H, E, I]

            Début pour:
                v = B(noir), F(noir), I(noir)

            u = H
            f = [E, I]

            Début pour:
                v = F(noir), I(noir)

            u = E
            f = [I]
            
            Début pour:
                v = C(noir), I(noir)

            u = I
            f = []

            Début pour:
                v = E(noir), D(noir), G(noir), H(noir)

        Fin Tant que
        ```


        Le parcours en largeur à partir de A est donc :  A, B, F, C, D, G, H, E, I.