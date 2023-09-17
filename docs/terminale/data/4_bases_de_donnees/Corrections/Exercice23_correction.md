??? note "Correction"
    1.
    ```sql
    SELECT titreRep
    FROM representation; 
    ```
    2.
    ```sql
    SELECT titreRep
    FROM representation  
    WHERE lieu = "théâtre allissa";
    ```
    3.
    ```sql
    SELECT nom, titreRep
    FROM representation
    JOIN musicien ON representation.numRep = musicien.numRep;
    ```
    4.
    ```sql
    SELECT titreRep, lieu, tarif
    FROM representation
    JOIN programmer ON representation.numRep = programmer.numRep 
    WHERE date= "25/07/2008";
    ```
    5.
    ```sql
    SELECT COUNT(*)
    FROM musicien where numRep = 20 ;
    ```
    6.
    ```sql
    SELECT titreRep, date
    FROM representation
    JOIN programmer ON  representation.numRep = programmer.numRep 
    WHERE tarif ≤ 20;
    ```