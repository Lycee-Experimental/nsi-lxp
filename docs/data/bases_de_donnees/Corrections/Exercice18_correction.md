??? note "Correction"
    1.
    ```sql
    SELECT SUM(Nb_elus_municipaux)
    FROM communes;
    ```
    2.
    ```sql
    SELECT AVG(Population)
    FROM communes;
    ```
    3.
    ```sql
    SELECT Nom_villes, Max(Population)
    FROM communes 
    WHERE  exprime_deuxieme_tour IS NULL;
    ```