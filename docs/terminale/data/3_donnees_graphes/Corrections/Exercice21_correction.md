??? note "Correction"
    2) En partant de A :
    ```
    u = A(noir)

    v = B(blanc), F(blanc)
    parcours(G, B) :
    u = B(noir)
        v = A(noir), C(blanc), D(blanc), G(blanc)
        parcours(G, C)
        u = C(noir)
            v = B(noir), E(blanc)
            parcours(G, E)
            u = E(noir)
                v = C(noir), I(blanc)
                parcours(G, I)
                u = I(noir)
                    v = E(noir), D(blanc), G(blanc), H(blanc)
                    parcours(G, D)
                    u = D(noir)
                        v = B(noir), I(noir)
                    parcours(G, G)
                    u = G(noir)
                        v = B(noir), I(noir), F(blanc)
                        parcours(G, F)
                        u = F(noir)
                            v = A(noir), G(noir), H(blanc)
                            parcours(G, H)
                            u = H(noir)
                                v = F(noir), I(noir)
    ```

    Parcours en profondeur à partir de A : A, B, C, E, I, D, G, F, H.