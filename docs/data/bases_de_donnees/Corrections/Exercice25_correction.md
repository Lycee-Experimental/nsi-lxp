??? note "Correction"
    1.
    ```sql
    SELECT numChambre
    FROM chambre 
    WHERE equipement = "TV";
    ```
    2.
    ```sql
    SELECT numChambre, nbrPers
    FROM chambre;
    ```
    3.
    ```sql
    SELECT SUM(nbrPers)
    FROM chambre;
    ```
    4.
    ```sql
    SELECT prix/nbrpers
    FROM chambre 
    WHERE equipement = "TV";
    ```
    5.
    ```sql
    SELECT numChambre, numClient
    FROM reservation 
    WHERE dateArr = "09/02/2004";
    ```
    6.
    ```sql
    SELECT numChambre
    FROM chambre 
    WHERE prix ≤ 80 OR (confort = "Bain" AND prix ≤ 120);
    ```
    7.
    ```sql
    SELECT nom, prenom, adresse
    FROM client 
    WHERE nom = "D%";
    ```
    8.
    ```sql
    SELECT COUNT(*)
    FROM chambre 
    WHERE 85 ≤ prix ≤ 120;
    ```
    9.
    ```sql
    SELECT nom
    FROM client
    JOIN reservation ON client.numcClient = reservation.numClient 
    WHERE dateDep IS NULL;
    ```