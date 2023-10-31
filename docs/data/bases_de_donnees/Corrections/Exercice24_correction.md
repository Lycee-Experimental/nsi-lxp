??? note "Correction"
    1.
    ```sql
    INSERT  INTO  films 
    VALUES  (12, "The Raid");
    ```
    2.
    ```sql
    INSERT  INTO  clients 
    VALUES  (124, "Jean", « Talu »,NULL,NULL,NULL);
    ```
    3.
    ```sql
    DELETE FROM films
    WHERE nomfilm = "Dans la peau de John Malkovitch";
    ```
    4.
    ```sql
    UPDATE films SET nomfilm= « Death Proof »
    WHERE nomfilm = "Boulevard de la Mort";
    ```