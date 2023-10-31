??? note "Correction"
    Avec 3 noeuds :

    ```mermaid
    flowchart LR

        subgraph a [Hauteur 2]
            direction TB
            A(( )) --- B(( ))
            A --- C(( ))

        end

        subgraph b [Hauteur 3]
            direction TB
            D(( )) --- E(( ))
            D --- F(( ))
            E --- G(( ))
            E --- H(( ))
            style F opacity:0
            linkStyle 3 stroke-width:0px
            style H opacity:0
            linkStyle 5 stroke-width:0px

        end

        subgraph c [Hauteur 3]
            direction TB
            I(( )) --- J(( ))
            I --- K(( ))
            K --- M(( ))
            K --- L(( ))
            style J opacity:0
            linkStyle 6 stroke-width:0px
            style M opacity:0
            linkStyle 8 stroke-width:0px

        end

        subgraph d [Hauteur 3]
            direction TB
            N(( )) --- O(( ))
            N --- P(( ))
            O --- Q(( ))
            O --- R(( ))
            style P opacity:0
            linkStyle 11 stroke-width:0px
            style Q opacity:0
            linkStyle 12 stroke-width:0px

        end

        subgraph e [Hauteur 3]
            direction TB
            S(( )) --- T(( ))
            S --- U(( ))
            U --- V(( ))
            U --- W(( ))
            style T opacity:0
            linkStyle 14 stroke-width:0px
            style W opacity:0
            linkStyle 17 stroke-width:0px

        end

        a x--x | | b x--x | | c x--x | | d x--x | | e

    ```

    Avec 4 noeuds :

    ```mermaid
    flowchart LR

        subgraph a [Hauteur 4]
            direction TB
            A(( )) --- B(( ))
            A --- C(( ))
            B --- D(( ))
            B --- E(( ))
            D --- F(( ))
            D --- G(( ))

            style C opacity:0
            linkStyle 1 stroke-width:0px
            style E opacity:0
            linkStyle 3 stroke-width:0px
            style G opacity:0
            linkStyle 5 stroke-width:0px

        end

        subgraph b [Hauteur 4]
            direction TB
            A1(( )) --- B1(( ))
            A1 --- C1(( ))
            C1 --- D1(( ))
            C1 --- E1(( ))
            E1 --- F1(( ))
            E1 --- G1(( ))

            style B1 opacity:0
            linkStyle 6 stroke-width:0px
            style D1 opacity:0
            linkStyle 8 stroke-width:0px
            style F1 opacity:0
            linkStyle 10 stroke-width:0px

        end

        subgraph c [Hauteur 4]
            direction TB
            A2(( )) --- B2(( ))
            A2 --- C2(( ))
            B2 --- D2(( ))
            B2 --- E2(( ))
            E2 --- F2(( ))
            E2 --- G2(( ))

            style C2 opacity:0
            linkStyle 13 stroke-width:0px
            style D2 opacity:0
            linkStyle 14 stroke-width:0px
            style G2 opacity:0
            linkStyle 17 stroke-width:0px

        end

        subgraph d [Hauteur 4]
            direction TB
            A3(( )) --- B3(( ))
            A3 --- C3(( ))
            C3 --- D3(( ))
            C3 --- E3(( ))
            D3 --- F3(( ))
            D3 --- G3(( ))

            style B3 opacity:0
            linkStyle 18 stroke-width:0px
            style E3 opacity:0
            linkStyle 21 stroke-width:0px
            style F3 opacity:0
            linkStyle 22 stroke-width:0px

        end

        subgraph e [Hauteur 4]
            direction TB
            A4(( )) --- B4(( ))
            A4 --- C4(( ))
            C4 --- D4(( ))
            C4 --- E4(( ))
            D4 --- F4(( ))
            D4 --- G4(( ))

            style B4 opacity:0
            linkStyle 24 stroke-width:0px
            style E4 opacity:0
            linkStyle 27 stroke-width:0px
            style G4 opacity:0
            linkStyle 29 stroke-width:0px

        end

        subgraph f [Hauteur 4]
            direction TB
            A5(( )) --- B5(( ))
            A5 --- C5(( ))
            B5 --- D5(( ))
            B5 --- E5(( ))
            E5 --- F5(( ))
            E5 --- G5(( ))

            style C5 opacity:0
            linkStyle 31 stroke-width:0px
            style D5 opacity:0
            linkStyle 32 stroke-width:0px
            style F5 opacity:0
            linkStyle 34 stroke-width:0px

        end

        a x--x | | b x--x | | c x--x | | d x--x | | e x--x | | f

    ```

    ```mermaid
    flowchart LR

        subgraph a [Hauteur 3]
            direction TB
            A(( )) --- B(( ))
            A --- C(( ))
            B --- D(( ))
            B --- E(( ))

            style C opacity:0
            linkStyle 1 stroke-width:0px

        end

        subgraph b [Hauteur 3]
            direction TB
            A1(( )) --- B1(( ))
            A1 --- C1(( ))
            C1 --- D1(( ))
            C1 --- E1(( ))

            style B1 opacity:0
            linkStyle 4 stroke-width:0px

        end

        subgraph c [Hauteur 3]
            direction TB
            A4(( )) --- B4(( ))
            A4 --- C4(( ))
            B4 --- F4(( ))
            B4 --- G4(( ))

            style F4 opacity:0
            linkStyle 10 stroke-width:0px

        end

        subgraph d [Hauteur 3]
            direction TB
            A3(( )) --- B3(( ))
            A3 --- C3(( ))
            C3 --- D3(( ))
            C3 --- E3(( ))

            style E3 opacity:0
            linkStyle 15 stroke-width:0px

        end

        subgraph e [Hauteur 3]
            direction TB
            A2(( )) --- B2(( ))
            A2 --- C2(( ))
            B2 --- D2(( ))
            B2 --- E2(( ))

            style E2 opacity:0
            linkStyle 19 stroke-width:0px

        end

        subgraph f [Hauteur 3]
            direction TB
            A5(( )) --- B5(( ))
            A5 --- C5(( ))
            C5 --- D5(( ))
            C5 --- E5(( ))

            style D5 opacity:0
            linkStyle 22 stroke-width:0px

        end

        a x--x | | b x--x | | c x--x | | d x--x | | e x--x | | f

    ```
