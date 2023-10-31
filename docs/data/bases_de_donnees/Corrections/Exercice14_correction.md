??? note "Correction"
    1.
    ```sql
    SELECT Nom_ville
    FROM communes;
    ```
    2.
    ```sql
    SELECT Nom_ville,Population
    FROM communes;
    ```
    3.
    ```sql
    SELECT Nom_ville,Population
    FROM communes  
    ORDER BY Population;
    ```
    4.
    ```sql
    SELECT Nom_ville,Population
    FROM communes  
    ORDER BY Nb_elus_municipaux DESC;
    ```