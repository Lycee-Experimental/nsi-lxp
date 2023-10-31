??? note "Correction"
    1.
    ```sql
    SELECT Nom_villes
    FROM communes 
    WHERE exprime_deuxieme_tour IS NOT NULL ;
    ```
    2.
    ```sql
    SELECT Nom_villes
    FROM communes 
    WHERE Population > 5000 AND  exprime_deuxieme_tour IS NOT NULL;
    ```