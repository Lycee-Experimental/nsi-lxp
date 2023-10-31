??? note "Correction"
    1. Code Capytale : `62e8-1145789`
    2. Départ A, Arrivée E

    ```
    chaine = [A]

    A diff de E

        u = B, F
        E pas dans chaine
            nchemin = TROUVER_CHAINE(G, B, E, chaine)
            chaine = [A, B]
            B diff de E

                u = C, D, G
                E pas dans chaine
                    nchemin = TROUVER_CHAINE(G, C, E, chaine)
                    chaine = [A, B, C]
                    C diff de E

                        u = E, B
                        E pas dans chaine
                            nchemin = TROUVER(G, E, E, chaine)
                            chaine = [A, B, C, E]
                            E = E
                            On renvoie chaine [A, B, C, E]
    ```