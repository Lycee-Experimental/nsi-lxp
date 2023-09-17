??? note "Correction"
    1.
    ```sql
    SELECT nom
    FROM livres
    JOIN auteurs ON livres.idAuteur = auteurs.id 
    WHERE titre = "1984";
    ```
    2.
    ```sql
    SELECT nom
    FROM livres
    JOIN auteurs ON livres.idAuteur = auteurs.id 
    WHERE ann_publi <1960;
    ```
    3.
    ```sql
    SELECT titre
    FROM livres
    JOIN auteurs ON livres.idAuteur = auteurs.id 
    WHERE UPPER(nom)= boulle;
    ```
    4.
    ```sql
    SELECT nom,titre
    FROM livres
    JOIN auteurs ON livres.idAuteur = auteurs.id 
    WHERE ann_publi < 1960;
    ```