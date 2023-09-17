??? note "Correction"
    1.
    ```sql
    SELECT laureat
    FROM nobel;
    ```
    2.
    ```sql
    SELECT DISTINCT sujet
    FROM nobel;
    ```
    3.
    ```sql
    SELECT sujet
    FROM nobel 
    WHERE laureat LIKE "Wilhelm Conrad R%ntgen";
    ```
    4.
    ```sql
    SELECT sujet
    FROM nobel 
    WHERE laureat = "Paul Krugman";
    ```
    5.
    ```sql
    SELECT annee
    FROM nobel 
    WHERE laureat = "Albert Fert";
    ```
    6.
    ```sql
    SELECT annee
    FROM nobel 
    WHERE laureat = "Pierre Curie";
    ```
    7.
    ```sql
    SELECT annee, sujet
    FROM nobel 
    WHERE laureat = "Bertha von Suttner";
    ```
    8.
    ```sql
    SELECT laureat
    FROM nobel 
    WHERE annee >= 2000;
    ```
    9.
    ```sql
    SELECT laureat
    FROM nobel 
    WHERE annee >= 1939 AND annee <= 1945 AND sujet = "Paix";
    ```
    10.
    ```sql
    SELECT laureat
    FROM nobel 
    WHERE (annee = 1901 OR annee = 2001) AND sujet LIKE "M%decine";
    ```
    11.
    ```sql
    SELECT laureat
    FROM nobel 
    WHERE (sujet = "Physique" OR sujet LIKE "M%decine") AND annee = 2008;
    ```