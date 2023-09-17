??? note "Correction"
    1. <br>
    ```mermaid
    flowchart TD
            A(( )) --- B(( ))
            A --- C(( ))
            B --- D(( ))
            B --- E((5))
            C --- F((7))
            C --- G((8))
            D --- H((2))
            D --- I((3))
    ```
    2. Nombre de trajets: 2 x 6 + 3 x 6 + 5 x 4 + 7 x 4 + 8 x 4 = 110

    3. Par exemple, si on a les réveils des marmottes suivants : 7; 3; 5; 9; 2; 4; 6
    <br>
        - on créé des terriers en les séparant en deux au bout de chacun, jusqu’à ce qu’il y ait autant de terrier que de marmottes (ici 7)<br>
        ```mermaid
        flowchart TD
            A(( )) --- B(( ))
            A --- C(( ))
            B --- D(( ))
            B --- E(( ))
            C --- F(( ))
            C --- G((9))
            D --- H((2))
            D --- I((3))
            E --- K((4))
            E --- L((5))
            F --- M((6))
            F --- N((7))
        ```
        - On place les marmottes le plus en haut suivant le nombre de réveil le plus haut, puis on descend au niveau inférieur et on recommence…
        (ici, le nombre de trajet est : 2  x 6 +  3 x 6 + 4 x 6 + 5 x 6 + 6 x 6 + 7 x 6 + 9 x 4 = 198