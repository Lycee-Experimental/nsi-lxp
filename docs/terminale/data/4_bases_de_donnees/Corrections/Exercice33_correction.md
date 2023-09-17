??? note "Correction"
    1.
    ```sql
    INSERT INTO Departement
    VALUES (3, "14", "Calvados");
    INSERT INTO Ville 
    VALUES (6, "Trouville", 14360, 4675, 3),
    (7, "Mezidon-Canon", 14270, 4838, 3),
    (8, "Crevecoeur-en-Auge", 14240, 480, 3);
    ```
    2.
    ```sql
    UPDATE Ville
    SET nom= "Trouville-sur-Mer"
    WHERE nom= "Trouville";
    ```
    3.
    ```sql
    INSERT INTO Ville
    VALUES (9, "Mezidon-Vallee-d’Auge", 14270, 9712) ;
    DELETE  FROM  Ville 
    WHERE  nom  =  "Mezidon-Canon"  OR  nom  =  "Crevecoeur-en-Auge";
    ```