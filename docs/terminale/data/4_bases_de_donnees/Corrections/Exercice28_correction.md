??? note "Correction"
    1.
    ```sql
    SELECT count(*)
    FROM nobel;
    → 816 
    ```
    2.
    ```sql
    SELECT count(laureat)
    FROM nobel 
    WHERE sujet= "Paix";
    → 119
    ```
    3.
    ```sql
    → 105
    ```
    4.
    ```sql
    → 0
    ```
    5.
    ```sql
    SELECT count(laureat)
    FROM nobel 
    WHERE annee = 1901;
    → 6
    ```
    6.
    ```sql
    SELECT count(laureat)
    FROM nobel 
    WHERE annee = 1939 AND sujet = "Chimie";
    → 2
    ```
    7.
    ```sql
    SELECT MIN(annee)
    FROM nobel 
    WHERE sujet = "Economie";
    → 1969
    ```
    8.
    ```sql
    SELECT count(annee)
    FROM nobel 
    WHERE laureat LIKE "%Marie Curie %";
    → 2
    ```
    9.
    ```sql
    SELECT laureat, sujet, annee
    FROM nobel 
    WHERE UPPER(laureat) LIKE "%COHEN %";
    → Claude Cohen-Tannoudji|Physique|1997
    Stanley Cohen|Médecine|1986
    ```
    10.
    ```sql
    SELECT count(DISTINCT laureat)
    FROM nobel 
    WHERE sujet = "Physique" OR sujet = "Chimie";
    → 335
    ```
    11.
    ```sql
    SELECT count(DISTINCT laureat)
    FROM nobel 
    WHERE (sujet = "Literature" OR sujet LIKE "M%decine") AND annee = 2000;
    → 4
    ```
    12.
    ```sql
    SELECT count(DISTINCT laureat)
    FROM nobel 
    WHERE sujet = "Paix";
    → 116
    ```