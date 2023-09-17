??? note "Correction"
    1.
    ```sql
    UPDATE livres SET titre = "Fondation – Tome 1"
    WHERE titre = "Fondation";
    ```
    2.
    ```sql
    UPDATE livres SET annPubli = 1999
    WHERE titre = "La Zone du Dehors";
    ```