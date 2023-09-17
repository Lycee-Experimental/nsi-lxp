??? note "Correction"
    1.
    ```sql
    SELECT Nom_ville
    FROM communes 
    WHERE Nb_elus_municipaux <10;
    ```
    2.
    ```sql
    SELECT Nom_ville
    FROM communes 
    WHERE Nb_elus_municipaux <10 AND Population<=100;
    ```
    3.
    ```sql
    SELECT Nb_elus_municipaux, Population
    FROM communes 
    WHERE LOWER(Nom_ville) = « cressin-rochefort »;
    ```