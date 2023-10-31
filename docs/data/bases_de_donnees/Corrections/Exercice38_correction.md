??? note "Correction"
    1.
    ```sql
    INSERT INTO Artiste
    VALUES(‘Scott’, "Ridley", 1937);
    ```
    2.
    ```sql
    INSERT INTO Film
    VALUES(143, "Blade Runner", 1982, "Scott");
    ```
    3.
    ```sql
    INSERT INTO Artiste
    VALUES("Ford", "Harisson", 1942);
    INSERT INTO Artiste  
    VALUES("Hauer", "Rutger", 1944);
    INSERT INTO Role  
    VALUES("Rick Deckard", 143, "Ford");
    INSERT INTO Role  
    VALUES("Roy Batty", 143, "Hauer");
    ```
    4.
    ```sql
    INSERT INTO Artiste
    VALUES("Hamill", "Mark", 1951) 
    INSERT INTO Artiste  
    VALUES("Fisher", "Carrie", 1956);
    INSERT INTO Artiste  
    VALUES("Kershner", "Irvin", 1923);
    INSERT INTO Film 
    VALUES(144, "L empire contre attaque", 1980, "Kershner");
    INSERT INTO Role 
    VALUES("Luke Skywalker", 144, "Hamill");
    INSERT INTO Role 
    VALUES("Princesse Leia", 144, "Fisher");
    INSERT INTO Role 
    VALUES("Han Solo", 144, "Ford");
    ```
    5. ...