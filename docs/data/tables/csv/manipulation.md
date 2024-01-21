# 📑 Lire un fichier

Le [Projet Gutenberg](https://www.gutenberg.org/) est une bibliothèque en ligne regroupant les versions numériques d'ouvrages libres de droits. On y a récupéré le fichier des [Fables de la Fontaine](../fables.txt) au format `txt`.

??? info "La fonction `#!py open`"

    Pour ouvrir un fichier avec Python, on utilise la fonction `open` présente dans la [bibliothèque native](https://docs.python.org/fr/3/library/functions.html#open).

    ??? abstract "Paramètres"

        Cette fonction prend plusieurs **paramètres**. Retenons les trois suivants (déroulez pour avoir des détails):

        ??? note "`#!py file` : le nom du fichier"
            
            Le nom du fichier (avec son extension donc, au format `#!py str`).
            
            Attention, par « nom » on désigne **l'adresse** du fichier. Cette adresse peut-être :
            
            * *absolue*, depuis la racine du disque, `C:/home/nico/Documents/donnees_en_table/fables.txt` par exemple ;
            
            * ou *relative*, depuis le fichier Python qui ouvre le fichier, `fables.txt` par exemple si les deux fichiers sont dans le même dossier.

            On conseille **très fortement** d'utiliser des adresses relatives.

        ??? note "`#!py mode` : le mode d'ouverture"
            
            Le mode d'ouverture du fichier (au format `#!py str`).
            
            On peut retenir les modes suivants :

            | Caractère  | Signification                                                  |
            | :--------- | :------------------------------------------------------------- |
            | `#!py 'r'` | ouvre en lecture, en mode texte                                |
            | `#!py 'w'` | ouvre en écriture, en effaçant le contenu du fichier           |
            | `#!py 'a'` | ouvre en écriture, en ajoutant les données à la fin du fichier |
            | `#!py 'b'` | mode binaire                                                   |

            On notera que le mode `#!py 'w'` efface directement le contenu du fichier, il n'y a pas de message d'avertissement !

        ??? note "`#!py encoding` : l'encodage utilisé"
            
            Le type d'encodage (au format `#!py str`).
            
            L'encodage d'un fichier correspond à la façon dont le programme qui l'ouvre doit interpréter les données qu'il contient.
            
            Un fichier est stocké en machine sous forme d'une succession de bits. Dans la table ASCII initiale, 7 bits représentent un caractère. Dans la table ASCII étendue, il faut 8 bits pour représenter un caractère. L'encodage `#!py 'utf-8'` est plus subtil : les caractères « courants » (l'alphabet latin par exemple) sont codés sur 8 bits, les caractères moins « courants » sur 16 voire 24 bits.

            Changer l'encodage lors de l'ouverture d'un fichier ne modifie pas les données contenues dans le fichier mais **la façon de les lire**.
            
            Par exemple les bits `#!py 010100110110100101101101011100000110110001100101001000000111010001100101011110000111010001100101` lus :
            
            * avec l'encodage `#!py 'utf-8'` donnent `#!py 'Simple texte'`,
            
            * avec l'encodage `#!py 'utf-16 LE'` donnent `#!py '楓灭敬琠硥整'` !

            L'encodage le plus classique pour nous sera `#!py 'utf-8'`.


    ??? abstract "Utilisation"

        ??? note "Ouverture du fichier"

            La fonction `#!py open` peut être utilisée de deux façons :

            ??? tip "`open` & `close`"
                Utilisation classique, on ouvre **et** on ferme le fichier :

                ```python
                fichier = open(file="fichier.txt", mode="r", encoding="utf-8")
                # Traitement du fichier
                fichier.close()
                ```

                Techniquement, on devrait plutôt utiliser un `#!py try ... except` au cas où le fichier est inaccessible :

                ```python
                try:
                    fichier = open(file="fichier.txt", mode="r", encoding="utf-8")
                    # Traitement du fichier
                    fichier.close()
                except IOError:  # Le fichier est inaccessible
                    print("Le fichier est inaccessible")
                ```

            ??? tip "`with open` (à privilégier)"
                Avec `with`, il est inutile de fermer le fichier et de gérer les erreurs, c'est automatique :

                ```python
                with open(file="fichier.txt", mode="r", encoding="utf-8") as fichier:
                    # Traitement du fichier
                ```


        ??? note "Lecture du fichier"
            Une fois le fichier ouvert, on peut réaliser différentes actions. Si l'objet renvoyé par `#!py open` s'appelle `#!py fichier`, on peut :

            * `#!py fichier.read()` : lit la totalité du fichier. Renvoie une unique chaîne de caractères.
            * `#!py fichier.readlines()` : lit la totalité du fichier **ligne par ligne**. Renvoie la liste contenant les différentes lignes.
            * `#!py fichier.readline()` : lit la prochaine ligne du fichier **ligne par ligne**. Renvoie une chaîne de caractères.

            Les deux scripts ci-dessous sont donc équivalents :

            ```python
            with open(file="fichier.txt", mode="r", encoding="utf-8") as fichier:
                contenu = fichier.readlines()
            ```

            ```python
            contenu = []
            with open(file="fichier.txt", mode="r", encoding="utf-8") as fichier:
                for ligne in fichier:
                    contenu.append(ligne)
            ```

            La seconde permet toutefois de traiter précisément chaque ligne lue. On l'utilisera préférentiellement.

        ??? note "Écriture"

            Si le fichier est ouvert en mode *écriture*, on peut écrire en faisant `#!py fichier.write("texte à écrire")`.

            !!! warning "Attention à ne pas écraser le contenu du fichier !"


{{exercice(1,titre="Lire les fables de la Fontaine")}}

    Un fichier contenant les fables de la Fontaine est nommé `#!py fables.txt`, il est situé dans le même dossier que le fichier Python manipulé par l'éditeur. Il est encodé en `#!py utf-8`.

    Compléter le script afin d'ouvrir ce fichier et charger ses différentes lignes dans une liste.

    {{ IDE('pythons/ouverture/exo', MAX=5) }}


{{exercice(titre="Relire les fables de la Fontaine")}}

    On a supprimé les caractères de retour à la ligne mais il reste désormais des lignes vides dans la liste `#!py fables`.

    Compléter le script afin d'ouvrir ce fichier, charger ses différentes lignes **non vides** dans une liste.

    {{ IDE('pythons/ouverture_propre/exo', MAX=5) }}

{{exercice(titre="Comptons les moutons")}}

    Nous avons donc récupéré l'ensembles des fables dans une liste contenant toutes les lignes. Nous pouvons désormais faire des requêtes sur cette liste.

    Combien de vers contiennent le mot `#!py "mouton"` ? Pour le savoir on fait :

    ```python
    moutons = [vers for vers in fables if "mouton" in vers.lower()]  # tous les vers contenant "mouton"
    print(len(moutons))  # le nombre de vers
    ```

    !!! tip "Astuce"

        On passe le vers en minuscule avec `#!py vers.lower()` afin de trouver en une seule passe les chaînes `#!py "mouton"`, `#!py "Mouton"`, `#!py "MOUTON"`, *etc*

    Compléter le script ci-dessous afin d'effectuer les requêtes demandées.
    
    Toutes les recherches de chaînes de caractères seront insensibles à la casse (utiliser `#!py vers.lower()` comme ci-dessus).

    {{ IDE('pythons/requetes_fables/exo', MAX=10)}}
