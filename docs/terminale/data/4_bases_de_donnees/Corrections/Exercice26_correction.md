??? note "Correction"
    1.
    ```sql
    SELECT * 
    FROM sqlite_master 
    WHERE TYPE ="table";
    ```
    2.
        ```
        CREATE TABLE nobel(
        annee INT,
        sujet VARCHAR(15),
        laureat VARCHAR(50)
        );
        /* No STAT tables available */
        ```
    3. <br>
        a. Il y a une seule relation : `nobel`<br>
        b. Elle possède trois attributs : `annee`, `sujet`, `laureat`<br>
        c. L’attribut `anneev est du type Entier 