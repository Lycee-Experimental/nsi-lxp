??? note "Correction"
    1.
    ```sql
    INSERT INTO nobel
    VALUES (2019, "Economie", "Esther Duflo");
    ```
    2.
    ```sql
    UPDATE nobel
    SET laureat = "Esther Duflo Banerjee" 
    WHERE laureat = "Esther Duflo";
    ```
    3.
    ```sql
    DELETE FROM nobel
    WHERE laureat LIKE "Aung %";
    ```