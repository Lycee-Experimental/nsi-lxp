### Bases de données (Terminale) - BDD relationnelles
n°1378
<br>
Quel est l'Objet de base du modèle relationnel ?



- [ ] La clef primaire
- [ ] La clef étrangère
- [X] La relation
- [ ] L'union

### Bases de données (Terminale) - BDD relationnelles
n°1379
<br>
Trouvez la phrase qui est correcte:



- [X] Une relation est implémentée dans une base de données par une table.
- [ ] Un tuple contient des lignes
- [ ] Les termes tuple, ligne, vecteur et enregistrement sont tous synonymes.


### Bases de données (Terminale) - Modèle relationel
n°1384
<br>
Une entité est contenue dans



- [X] une relation
- [ ] un attribut
- [ ] un domaine
- [ ] aucune des trois propositions

### Bases de données (Terminale) - Modèle relationel
n°1385
<br>
Une relation est :



- [ ] un ensemble d'attributs
- [ ] un ensemble de domaines
- [X] un ensemble d'entités
- [ ] aucune des trois propositions

### Bases de données (Terminale) - Modèle relationel
n°1386
<br>
Dans le modèle relationnel un objet est représenté par :



- [ ] un attribut
- [ ] un domaine
- [X] un n-uplet
- [ ] aucune des trois propositions

### Bases de données (Terminale) - Modèle relationel
n°1387
<br>
On considère l'ensemble suivant :<br>
```{.quiz}
Joueur = {
('Messi', 'Lionel', 'Argentin', 'FC Barcelone', '33' ),
('Neymar', 'Junior', 'Brésilien', 'PSG', '28'),
('Mbappé', 'Kilian', 'Français', 'PSG', '21')}
```
L'ensemble joueur est :



- [ ] une entité
- [ ] un attribut
- [X] une relation
- [ ] aucune des trois propositions

### Bases de données (Terminale) - Modèle relationel
n°1388
<br>
On considère l'ensemble suivant :<br>
```{.quiz}
Joueur = {
('Messi', 'Lionel', 'Argentin', 'FC Barcelone', '33' ),
('Neymar', 'Junior', 'Brésilien', 'PSG', '28'),
('Mbappé', 'Kilian', 'Français', 'PSG', '21')}
```
Combien d'attributs cet ensemble comporte-t-il ?



- [ ] trois
- [X] cinq
- [ ] un
- [ ] aucune des trois propositions

### Bases de données (Terminale) - Modèle relationel
n°1389
<br>
On considère l'ensemble suivant :<br>
```{.quiz}
*Note* = {
('Fonda', 'James', 'NSI', 16),
('Pierce', 'Nica', 'Philosophie', 13),
('Hanna', 'Vincent', 'Histoire', 11),
('Connor', 'John', 'EPS', 14)}
```
Quel est le schéma associé a cet ensemble ?



- [X] 
```{.quiz}
*Note*(nom  **String**  , prenom  **String**, discipline  **String**, note_sur_vingt **Int**)
```
- [ ] 
```{.quiz}
*Note*(nom  **String**  , prenom  **String**, discipline  **String**, note_sur_vingt **String**)
```
- [ ] 
```{.quiz}
*Note*(nom  **String**  , prenom  **String**, note_sur_vingt **Int**, discipline  **String**)
```
- [ ] aucune des trois propositions

### Bases de données (Terminale) - Modèle relationel
n°1390
<br>
On considère l'ensemble suivant :<br>
```{.quiz}
*Note* = {
('Fonda', 'James', 'NSI', 16),
('Pierce', 'Nica', 'Philosophie', 13),
('Hanna', 'Vincent', 'Histoire', 11),
('Connor', 'John', 'EPS', 14),
('Ripley','Hélène', 'théatre', 16),
('Amy', 'Brenneman', 'Mathématiques', 18)}
```
Combien d'entités cet ensemble possède-t-il ?



- [ ] quatre
- [X] six
- [ ] zéro
- [ ] aucune des trois propositions

### Bases de données (Terminale) - SQL
n°1452
<br>
On considère la base de donnée constituée des relations suivantes :<br>
Les clés primaires sont soulignées, les clés étrangères sont en italique<br>
 Le domaine de chaque attribut est écrit entre parenthèse <br>
```{.quiz}
Pilote (N\_Pil (INT), Nom_Pil (CHAR(15)), Ville_Pil (CHAR(15)))
Avion (N\_Av (INT), Nom_Av (CHAR(15)), Capacite (INT), Ville_Av (CHAR(15)))
Vol (N\_Vol (INT), *N\_Pil* (INT), *N\_Av* (INT), Ville_Dep (CHAR(15)), Ville_Arr (CHAR(15)), H_Dep (TIME), H_Arr (TIME))
```
 Quelle est la requête qui ne rend pas la demande formulée ?



- [ ] Obtenir la liste des noms des pilotes :
```{.quiz}
SELECT DISTINCT Nom_Pil
FROM Pilote
```
- [ ] Obtenir la liste des noms des avions pilotés par le pilote dénommé 'Joe Delle' :
```{.quiz}
SELECT DISTINCT Nom_Av
FROM Avion
JOIN Vol ON Avion.N_Av = Vol.N_Av
JOIN Pilote ON Pilote.N_pil = Vol.N_Pil
WHERE Nom_Pil = 'Joe Delle'
```
- [ ] Obtenir la liste des noms et capacités de tous les avions des vols au départ de 'Rome' :
```{.quiz}
SELECT Nom_Av,Capacite
FROM Avion
JOIN Vol ON Avion.N_Av=Vol.N_Av
WHERE Ville_Dep = 'Rome'
```
- [X] Obtenir les numéros de vols de tous les Airbus A320 :
```{.quiz}
SELECT N_Vol
FROM vols
JOIN Avion ON Avion.Nom_Av = Vol.Nom_Av
WHERE Nom_Av = 'Airbus A320'
```

### Bases de données (Terminale) - SQL
n°1459
<br>
On considère la base de donnée constituée des relations suivantes :<br>
Les clés primaires sont soulignées, les clés étrangères sont en italique<br>
 Le domaine de chaque attribut est écrit entre parenthèse <br>
```{.quiz}
Client (N\_Cli (INT), Nom (CHAR(15)), Adresse (CHAR(150)) )
Facture (Num (INT), *N\_Cli* (INT), Date (DATE), Reglee (CHAR(1)) )
Produit (Ref (INT), Designation (CHAR(50)), *Ref\_Fournisseur* (INT), Prix (REAL), Stock (INT) )
Details_facture (*Num* (INT), *Ref\_Prod* (INT), Quantite (INT))
Fournisseur(Ref (INT), Nom (CHAR(15)) , Adresse (CHAR(150)) )
```
  **L'attribut 'Reglee' de la relation 'Facture' n'a que 2 valeurs possibles : 'O' si la facture est réglée et 'N' sinon** <br>
 Quelle est la requête qui ne rend pas la demande formulée ?



- [ ] Obtenir tous les nom (désignation) et quantité des produits dont le nombre en stock est inférieur à 5 :
```{.quiz}
SELECT Designation, Stock
FROM Produit
WHERE Stock &lt; 5
```
- [ ] Obtenir tous les nom des clients qui n'ont pas réglé au moins une facture :
```{.quiz}
SELECT DISTINCT Nom
FROM Client
JOIN Facture ON Facture.N_Cli = Client.N_Cli
WHERE Reglee = 'N'
```
- [X] Obtenir tous les nom des clients qui ont acheté le produit dénommé 'Disque Dur 1To Sangston' :
```{.quiz}
SELECT DISTINCT Nom
FROM Client
JOIN Facture ON Facture.N_Cli = Client.N_Cli
JOIN Produit ON Facture.Ref_Prod = Produit.Ref
WHERE Produit.Designation = 'Disque Dur 1To Sangston'
```
- [ ] Obtenir le nom du client et le total de la facture référencée sous le numéro 1004006 :
```{.quiz}
SELECT Nom,SUM(Prix*Quantite)
FROM Client
JOIN Facture ON Facture.N_Cli = Client.N_Cli
JOIN Details_facture ON Details_facture.Num = Facture.Num
JOIN Produit ON Details_facture.Ref_Prod = Produit.Ref
WHERE Facture.Num = 1004006
```

### Bases de données (Terminale) - SQL
n°1467
<br>
On considère la base de donnée constituée des relations suivantes :<br>
Les clés primaires sont soulignées, les clés étrangères sont en italique<br>
 Le domaine de chaque attribut est écrit entre parenthèse <br>
```{.quiz}
mes (id (INT), nom (CHAR(15)), prenom (CHAR(15)), annee_naiss (INT) )
film (id (INT), titre_film (CHAR(15)), annee_sortie (INT), *idMES* (INT), genre (CHAR(15)), pays (CHAR(15)) )
```
 \*mes\* est la table des metteurs en scène et \*IdMES\* est l'id du metteur en scène<br>
 Quelle est la requête qui ne rend pas la demande formulée ?



- [ ] Obtenir la liste des différents genres de film :
```{.quiz}
SELECT DISTINCT genre
FROM film
```
- [ ] Obtenir les titres des films d'action sortis entre 1980 et 1990 et le nom de leur réalisateur :
```{.quiz}
SELECT titre_film , nom
FROM mes
JOIN film ON film.idMES=mes.id
WHERE genre='Action' AND annee_sortie BETWEEN 1980 AND 1990
```
- [ ] Obtenir le nombre de comédies :
```{.quiz}
SELECT COUNT(*)
FROM film
WHERE genre='Comedie'
```
- [X] Obtenir le nom et le prénom du metteur en scène du film 'Titanic' :
```{.quiz}
SELECT prenom, nom
FROM mes
WHERE titre_film='Titanic'
```

### Bases de données (Terminale) - SGBD
n°1480
<br>
Système de Gestion des Base de Données (SGBD)!<br>
A quoi ne sert pas un SGBD ?



- [X] A gérer les doublons existants
- [ ] A garantir la cohérence des données (respect des domaines par exemple)
- [ ] A éviter les pertes d'informations lors des pannes
- [ ] A gérer les accès aux données

### Bases de données (Terminale) - SQL
n°1490
<br>
BDD -SQL<br>
La municipalité de Grenoble organise tous les ans un festival de musique classique. Pour la gestion de son festival elle utilise le modèle relationnel suivant :  <br>
ŒUVRE(N°\_de\_l’œuvre, Nom\_de\_l’œuvre, Durée, N°\_du\_concert)  <br>
Clé primaire : N°\_de\_l’œuvre  <br>
Clé étrangère : N°\_du\_concert  <br>
CONCERT(N°\_du\_concert, Nom\_du\_concert, Date\_du\_concert, n°\_du\_lieu)  <br>
Clé primaire : N°\_du\_lieu  <br>
**Quelle est la requête SQL qui permet de donner le nom du concert (Nom, Date) concernant l’œuvre 'Le Beau Danube bleu' ?**



- [X] SELECT Nom\_du\_concert, Date\_du\_concert
FROM CONCERT, ŒUVRE
WHERE CONCERT.N°\_du\_concert = ŒUVRE.N°\_du\_concert
AND Nom\_de\_l'oeuvre = 'Le Beau Danube bleu';
- [ ] SELECT Nom\_du\_concert, Date\_du\_concert
FROM CONCERT
WHERE Nom\_de\_l’œuvre = 'Le Beau Danube bleu';
- [ ] SELECT Nom\_du\_concert, Date\_du\_concert
FROM CONCERT, ŒUVRE
WHERE CONCERT.N°\_du\_concert = ŒUVRE.N°\_du\_concert
AND N°\_de\_l'oeuvre = 'Le Beau Danube bleu';
- [ ] je ne sais pas

### Bases de données (Terminale) - SQL
n°1491
<br>
BDD -SQL<br>
La municipalité de Grenoble organise tous les ans un festival de musique classique. Pour la gestion de son festival elle utilise le modèle relationnel suivant :  <br>
ŒUVRE(N°\_de\_l’œuvre, Nom\_de\_l’œuvre, Durée, N°\_du\_concert)  <br>
Clé primaire : N°\_de\_l’œuvre  <br>
Clé étrangère : N°\_du\_concert  <br>
CONCERT(N°\_du\_concert, Nom\_du\_concert, Date\_du\_concert, n°\_du\_lieu)  <br>
Clé primaire : N°\_du\_lieu  <br>
**Quelle est la requête SQL qui permet de donner les noms des concerts triés par ordre alphabétique ?**



- [ ] SELECT Nom\_du\_concert,
FROM OEUVRE
ORDER BY Nom\_du\_concert ASC;
- [X] SELECT Nom\_du\_concert,
FROM CONCERT
ORDER BY Nom\_du\_concert ASC;
- [ ] SELECT Nom\_du\_concert,
FROM CONCERT
ORDER BY Nom\_du\_concert DESC;
- [ ] SELECT Nom\_du\_concert,
FROM OEUVRE
ORDER BY Nom\_du\_concert DESC;

### Bases de données (Terminale) - SQL
n°1670
<br>
Base de données<br>
Quelle est l'instruction SQL pour modifier une valeur dans une base de données ?



- [ ] SELECT
- [ ] DELETE
- [X] UPDATE
- [ ] INTO

### Bases de données (Terminale) - SQL
n°1773
<br>
Requête SQL complexe<br>
On considère une base avec les tables suivantes :<br>
Comics(comicId: Int, title: CdC, issueNumber: Int, description: CdC)  <br>
Personnages(characterId: Int, name: CdC)  <br>
Contient(#comicId: Int, #characterId: Int)<br>
Quelle est le but de la requête suivante ?<br>
```{.quiz}
SELECT title
FROM Comics NATURAL JOIN Contient
GROUP BY comicID
HAVING COUNT(characterID)&gt;=50
ORDER BY COUNT(characterID) DESC;
```



- [ ] Mise à jour groupée de tous les comics dans lesquels il y a plus de 50 personnages.
- [X] Recherche des titres de comics dans lesquels le nombre de personnages est supérieur ou égal à 50.
- [ ] Recherche des personnages de comics qui apparaissent plus de 50 fois.
- [ ] Recherche des titres de comics dont les personnages ont un identifiant supérieur à 50.

### Bases de données (Terminale) - SQL
n°1774
<br>
Requête SQL<br>
On considère une base avec les tables suivantes :<br>
Comics(comicId: Int, title: CdC, issueNumber: Int, description: CdC)  <br>
Personnages(characterId: Int, name: CdC)  <br>
Contient(#comicId: Int, #characterId: Int)<br>
Quelle requête permet de connaître le nombre d'enregistrements dans la table Contient ?



- [ ] SELECT \* FROM Contient;
- [ ] SELECT \* FROM Contient NATURAL JOIN Comics NATURAL JOIN Personnages;
- [X] SELECT COUNT(\*) FROM Contient;
- [ ] SELECT MAX(\*) FROM Contient;

### Bases de données (Terminale) - SQL
n°1775
<br>
Insertion dans une table<br>
On considère une base avec les tables suivantes :<br>
Comics(comicId: Int, title: CdC, issueNumber: Int, description: CdC)  <br>
Personnages(characterId: Int, name: CdC)  <br>
Contient(#comicId: Int, #characterId: Int)<br>
On souhaite insérer le personnage 'Mister C.' avec l'identifiant 1017584 dans la table Personnages.<br>
Quelle requête est alors correcte ?



- [ ] INSERT 'Mister C.' FROM Comics INTO Personnages WHERE characterId=1017584;
- [ ] UPDATE Personnages SET ('Mister C.', 1017584);
- [ ] INSERT INTO Personnages WHERE characterId=1017584 AND name='Mister C.';
- [X] INSERT INTO Personnages VALUES (1017584,'Mister C.');

### Bases de données (Terminale) - SQL
n°1776
<br>
Requête SQL<br>
On considère une base avec les tables suivantes :<br>
Comics(comicId: Int, title: CdC, issueNumber: Int, description: CdC)  <br>
Personnages(characterId: Int, name: CdC)  <br>
Contient(#comicId: Int, #characterId: Int)<br>
Pourquoi la clé primaire de la table Contient est-elle composée de deux attributs ?



- [X] Un comic peut faire apparaître plusieurs personnages.
- [ ] Un personnage peut apparaître plusieurs fois dans un même comic.
- [ ] Les clés étrangères d'une table font toujours partie de la clé primaire.
- [ ] Chaque comic contient tous les personnages.

### Bases de données (Terminale) - SQL
n°1777
<br>
Mise à jour SQL<br>
On considère une base avec les tables suivantes :<br>
Comics(comicId: Int, title: CdC, issueNumber: Int, description: CdC)  <br>
Personnages(characterId: Int, name: CdC)  <br>
Contient(#comicId: Int, #characterId: Int)<br>
Le personnage 'Mister C.' a été inséré dans la table Personnages avec l'identifiant 1017584.<br>
Mais son nom n'est pas correct, il s'agit en fait de 'Myster C.'.<br>
Quelle requêt permet de rectifier l'enregistrement ?



- [ ] UPDATE 'Mister C.' FROM Personnages WHERE characterId=1017584;
- [ ] UPDATE name FROM Personnages SET 'Myster C.' WHERE characterId=1017584;
- [X] UPDATE Personnages SET name='Myster C.' WHERE characterID=1017584;
- [ ] UPDATE name='Mister C.' FROM Personnages SET 'Myster C.' WHERE characterId=1017584;

### Bases de données (Terminale) - SGBD
n°1778
<br>
Histoire des Bases de Données<br>
Les premiers SGBD sont créés dans les années (19)60. Le modèle relationnel apparaît vers 1970, mais : qui en est l'inventeur ?
<br>
![image](/assets/images/qcm/1778_Edgar_F_Codd.jpg)
<br>


- [ ] Alan TURING
- [ ] Donald KNUTH
- [ ] Dennis RITCHIE
- [X] Edgar F. CODD

### Bases de données (Terminale) - SQL
n°1779
<br>
Une clause particulière<br>
La clause DISTINCT est parfois insérée après la clause de projection SELECT.<br>
À quoi sert-elle ?



- [ ] Elle assure une projection sur des attributs différents en cas de jointure.
- [X] Elle assure que le résultat de la requête ne contient pas de doublons.
- [ ] Elle explicite le nom des attributs à côtés des valeurs sorties dans le résultat de la requête.
- [ ] DISTINCT ne s'utilise pas dans une projection mais dans une sélection. (C'est en fait une question piège ! ou alors cette réponse est un piège...)

### Bases de données (Terminale) - Modèle relationel
n°1894
<br>
Clé primaire<br>
Dans une table, une clé primaire



- [X] sert à éviter le doublons.
- [ ] sert à crypter les données.
- [ ] est une référence à une autre table.
- [ ] permet de gérer l'accès aux données.

### Bases de données (Terminale) - Modèle relationel
n°1895
<br>
Choix d'une clé primaire<br>
On dispose d'une BDD comportant la table suivante :  <br>
patient(nom, prenom, adresse, cp, ville, numero\_secu, tel)<br>
Quel champ pourrait-on utiliser nom comme clé primaire de la table clients :



- [ ] nom
- [ ] prenom
- [X] numero\_secu
- [ ] tel

### Bases de données (Terminale) - BDD relationnelles
n°1926
<br>
Association<br>
 On dispose d'une BDD comportant les tables suivantes :  <br>
clients (idClient,designation,adresse,cp,ville,email,tel)  <br>
produits(idProduit,designation,prix,*#idEntrepot*)  <br>
commandes(idCommande,date,*#idClient*,quantite,total)  <br>
entrepots(idEntrepot,designation,adresse,cp,ville,superficie)  <br>
On veut créer une table qui associe à chaque commande les produit qui la composent.  <br>
Quelle(s) clé(s) pourrait-on utiliser comme clé primaire de cette table articles\_commandés :



- [ ] idCommande
- [ ] idProduit
- [X] idCommande et idProduit
- [ ] Aucune ne convient

### Bases de données (Terminale) - BDD relationnelles
n°1927
<br>
Clé primaire<br>
 Dans la table suivante, quel attribut sert de clé primaire ?  <br>
Livre (titre, auteur, publication, référence)



- [ ] Livre
- [ ] titre
- [X] référence
- [ ] Il n'y a pas de clé primaire

### Bases de données (Terminale) - BDD relationnelles
n°1928
<br>
Problème dans la base<br>
 Dans une même base de données, l'âge associé à Henry est de 7 ans dans une table et de 77 ans dans une autre.  <br>
La base de données a donc avant tout :



- [ ] un problème de redondance
- [X] un problème de cohérence
- [ ] un problème de valeur de domaine
- [ ] un problème d'analyse

### Bases de données (Terminale) - SGBD
n°1939
<br>
SGBD <br>
 Que signifie le terme SGBD ?



- [X] Système de Gestion des Bases de Données
- [ ] Sécurisation Généralisé du Big Data
- [ ] Structure Globale des Base de Données
- [ ] Système Globalisé des Balises Digitales

### Bases de données (Terminale) - SGBD
n°1940
<br>
SGBD  <br>
On parle d'architecture 3-tiers car



- [ ] on utilise trois langages de programmation.
- [ ] Le procesus se fait en trois étapes.
- [ ] la base de données contient trois tables.
- [X] on ajoute un SGBD à l'architecture client-serveur.

### Bases de données (Terminale) - SGBD
n°1941
<br>
SGBD  <br>
A partir d'un programme en Python, comment accède-on à une base de données ?



- [X] Au travers d'une API dédiée à la SGBD.
- [ ] Au travers de la bibliothèque database, valable pour toutes les SGBD.
- [ ] Au travers d'un fichier CSV.
- [ ] On ne peut pas y accéder.

### Bases de données (Terminale) - SGBD
n°1942
<br>
SGBD<br>
 Parmi ces propositions, laquelle ne désigne pas un SGBD ?



- [ ] SQLite
- [X] SQL
- [ ] MySQL
- [ ] Oracle

### Bases de données (Terminale) - SQL
n°1943
<br>
SQL<br>
 Qu'est-ce que SQL ?



- [X] Un langage permettant d'effectuer des recherches dans des bases de données
- [ ] Un langage permettant de débugger des bases de données
- [ ] Un langage permettant de manipuler des fichiers Excel
- [ ] Un langage de programmation

