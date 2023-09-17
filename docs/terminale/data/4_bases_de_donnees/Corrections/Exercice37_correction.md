??? note "Correction"
    1.
    ```sql
    SELECT nom,prenom
    FROM Artiste
    JOIN Role ON Artiste.nom = Role.nomActeur 
    WHERE UPPER(nomRole) = "TARZAN";
    → Lambert Christophe
    ```
    2.
    ```sql
    SELECT anneeNaissance
    FROM Artiste
    JOIN Film ON Artiste.nom = Film.nomRealisateur 
    WHERE titre = "Reservoir Dogs";
    → 1948
    ```
    3.
    ```sql
    SELECT titre, nomRole
    FROM Film
    JOIN Role ON Film.idFilm = Role.idFilm 
    WHERE nomActeur = "Allen";
    → Manhattan, Davis
    → Annie Hall, Jonas
    ```
    4. ...