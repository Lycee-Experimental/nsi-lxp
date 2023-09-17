??? note "Correction"
    1.
    ```sql
    SELECT titre
    FROM Film 
    ORDER BY titre;
    ```
    2.
    ```sql
    SELECT prenom, nom, anneeNaissance
    FROM artiste 
    WHERE anneeNaissance <= 1950;
    ```
    3.
    ```sql
    SELECT nomCinema
    FROM Cinema 
    WHERE arrondissement = 12;
    ```
    4.
    ```sql
    SELECT prenom, nom
    FROM Artiste 
    WHERE nom LIKE "H %";
    ```
    5.
    ```sql
    SELECT prenom, nom
    FROM Artiste 
    WHERE anneeNaissance IS NULL;
    ```
    6.
    ```sql
    SELECT count(idFilm))
    FROM Role 
    WHERE UPPER(nomRole) = "MCLANE" AND UPPER(nomActeur) = "WILLIS";
    ```