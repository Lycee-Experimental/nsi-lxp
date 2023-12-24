# Codage des caractères

Comment Ã©viter les erreurs d'encodage ?

??? conclu "Programme"
    |Notions|Compétences|Remarques|
    |--|--|--| 
    |Représentation d'un texte en machine.<br>Exemples des encodages ASCII, ISO-8859-1, Unicode |Identifier l’intérêt des différents systèmes d'encodage.<br>Convertir un fichier texte dans différents formats d'encodage | Aucune connaissance précise des normes d'encodage n'est exigible|

??? debian "Terminal Linux"
    {{debian()}}

{{exercice(1,titre="Introduction à l'encodage des caractères")}}
    Dans le terminal Linux ci-dessus :

    - Insert la chaine de caractère "test" dans un fichier `test.txt` :
    ```bash
    echo 'test' > test.txt
    ```
    - Utilise la commande suivante pour connaitre le système d'encodage du fichier créé (charset) :
    ```bash
    file -i test.txt
    ```
    - Effectue les mêmes opérations avec la chaine de caractère "testé".

    **Questions** : 

    - Pourquoi y a-t-il une différence entre l'encodage de ces 2 fichiers ?

    - Quelle différence y a-t-il entre us-ascii et UTF-8 ?



## La norme ASCII

Le standard ACSII pour *American Standard Code for Information Interchange* a été créé en 1960 aux États-Unis.

Les caractères sont codés sur **7 bits**, soit sur 127 *«points de code»* (nombres associés aux caractères). 

![](/assets/images/ascii.png){: .center}


{{exercice(titre="Décodage de textes décodés en ASCII")}}
    Dans le terminal linux en haut de la page :
    
    - Afficher le contenu hexadécimal du fichier `networking.sh` :
    ```bash
    od -t x1 networking.sh
    ```
    - Utiliser le tableau ci-desous pour traduire les 11 premiers caractères (21, 23, ..., 68).
    - Vérifier votre résultat en affichat le contenu du fichier :
    ```bash
    cat networking.sh
    ```


## Les normes ISO 8859-xx
Lorsque d'autres personnes que des americains ou des anglais ont voulu s'échanger des données faisant intervenir du texte, certains caractères (é, è, à, ñ, Ø, Ö, β, 漢...) étaient manquants. Les 127 caractères de l'ASCII étaient largement insuffisants. 
Il a donc été décidé de passer à... 256 caractères ! Il suffisait pour cela de coder les caractères non plus sur 7 bits mais sur 8 bits.

Ainsi naquît, après de nombreuses modifications successives (la dernière en date rajoutant par exemple le symbole €), la célèbre table **ISO 8859-15**, dite aussi **Latin-9** :

![](/assets/images/iso-latin.png){: .center}

### Utilisation :
Les codes sont donnés en hexadécimal :

- le caractère € correspond au code hexadécimal A4, donc au nombre décimal 164.
- le caractère A correspond au code hexadécimal 41, donc au nombre décimal 65.

Les caractères ASCII y ont été inclus avec leur même code, ce qui rendait cette nouvelle norme rétro-compatible.


Parfait, mais comment font les Grecs pour écrire leur alphabet ?
Pas de problème, il leur suffit d'utiliser... une autre table, appelée ISO-8859-7 :

![](/assets/images/isogrec.png){: .center}

On retrouve les caractères universels hérités de l'ASCII, puis des caractères spécifiques à la langue grecque... oui mais les Thaïlandais alors ? 

Pas de problème, ils ont la ISO-8859-11 :

![](/assets/images/isothai.png){: .center}

Évidemment, quand tous ces gens veulent discuter entre eux, les problèmes d'encodage surviennent immédiatement : certains caractères sont remplacés par d'autres.

## Que fait un logiciel à l'ouverture d'un fichier texte ?
Il essaie de deviner l'encodage utilisé... Parfois cela marche, parfois non.
![](/assets/images/erreur_nav.png){: .center}

Normalement, pour un navigateur, une page web correctement codée doit contenir dans une balise `meta` le `charset` utilisé. 
![](/assets/images/source_twitter.png){: .center}

Mais parfois, il n'y a pas d'autre choix pour le logiciel d'essayer de deviner l'encodage qui semble être utilisé.

{{exercice(titre="Identifier un encodage")}}
    === "Énoncé"
        Le fichier texte représenté par les octets ci-dessous est-il encodé en ASCII ou en Latin-9 ?
        ```
        4c 79 63 e9 65 58 50
        ```
    === "Correction"
        C'est du Latin-9, car le point de code `e9` n'existe pas en ASCII. Le fichier texte contient le mot "LycéeXP"

{{exercice(titre="Limites des normes ISO-8859")}}
    Dans le terminal linux :
    
    - Crée le fichier texte contenant "LycéeXP" :
    ```bash
    echo "LycéeXP" > test.txt
    ```
    - Convertis-le en ISO8859-15 :
    ```bash
    iconv -t ISO-8859-15 test.txt -o test.txt
    ```
    - Affiche le : 
    ```bash
    cat test.txt
    ```
    ??? note "Conclusion sur les normes ISO-8859"
        Comme tu peux le constater, les normes ISO-8859 étant multiples, elles sont souvent sources de problèmes d'affichage...

## La normalisation UTF

En 1996, le [Consortium Unicode](https://home.unicode.org/) décide de normaliser tout cela et de créer un système unique qui contiendra l'intégralité des caractères dont les êtres humains ont besoin pour communiquer entre eux.  

Ils créent l'Universal character set Transformation Format : l'UTF. 
Ou plutôt ils en créent... plusieurs  :cry: :

- l'**UTF-8** : les caractères sont codés sur 1, 2, 3 ou 4 octets.
- l'**UTF-16** : les caractères sont codés sur 2 ou 4 octets.
- l'**UTF-32** : les caractères sont codés sur 4 octets.

Pourquoi est-ce encore si compliqué ? En UTF-32, 32 bits sont disponibles, soit $2^{32}=4294967296$ caractères différents encodables. 

C'est largement suffisant, mais c'est surtout très très lourd !  
D'autres encodages plus légers, mais plus complexes, sont donc proposés. 

### Le cas particulier de l'UTF-8

Le principe de l'**UTF-8** est qu'il est **adaptatif** : les caracères les plus fréquents sont codés sur un octet, qui est la taille minimale (et qui donne le 8 de **UTF-8**). Les autres caractères peuvent être codés sur 2, 3 ou 4 octets au maximum.


![](/assets/images/cap_utf8.png){: .center}



!!! python "L'encodage des caractères avec Python"
    - La fonction `ord(caractere)` renvoie le nombre entier Unicode associé au caractère.  
    ```python
    >>> ord('à')
    224
    ```
    - La fonction `chr(nombre)` renvoie le caractère codé par l'entier Unicode nombre.
    ```python
    >>> chr(224)
    'à'
    ```

{{exercice(titre="Réponse à une question existentielle...")}} 
    ** Mais pourquoi donc le caractère `é` en UTF-8 devient-il **Ã©** en ISO 8859-15 ?!


    **Q1.** Grâce à python, écrire en binaire le nombre associé au caractère ```é``` en UTF-8.

    !!! Python "Rappel sur le binaire en python"
        La fonction `bin()` convertit un entier en binaire.

    {{terminal()}}

    ??? tip "Correction"
        ```python
        >>> ord('é')
        233
        >>> bin(233)
        '0b11101001'
        ```
        Donc en UTF-8, ```é``` est associé au nombre ```11101001```.

    **Q2.** D'après l'explication de fonctionnement de l'encodage adaptatif de l'UTF-8 (voir ci-dessus), les 8 bits nécessaires à l'encodage de ```é``` en UTF-8 doivent être «encapsulés» dans 2 octets de la forme ```110XXXXX 10XXXXXX```, où les onze ```X``` représentent les 11 bits d'information disponibles. Écrire ces 2 octets en complétant si nécessaire avec des ```0``` à gauche.

    ??? tip "Correction"
        Sur 11 bits, le nombre ```11101001``` va s'écrire ```00011101001```. En séparant ces 11 bits en deux groupes de 5 bits et 6 bits (```00011```et ```101001```), et en les encapsulant, on obtient les deux octets ```11000011 10101001```.

    **Q3.** Convertir les deux octets obtenus en notation décimale puis en hexadécimal.

    !!! python "Rappel sur le décimal et hexadécimal en Python"
        - La fonction `int('monNombreBinaire', 2)` convertit un binaire en entier.
        ```python
        >>> int('11000011', 2)
        195
        ```
        - La fonction `hex(nombre)` convertit nombre en hexadécimal.
        ```python
        >>> hex(169)
        '0xa9'
        ```
    {{terminal()}}

    ??? tip "Correction"
        ```python
        >>> int('11000011', 2)
        195
        >>> hex(195)
        '0xc3'
        >>> int('10101001', 2)
        169
        >>> hex(169)
        '0xa9'
        ```

    **Q4.** Conclusion : Si un logiciel considère **à tort** que les deux octets servant à encoder le ```é``` en UTF-8 servent à encoder deux caractères en ISO 8859-15, quels seront ces deux caractères ?

    ??? tip "Correction"
        Le premier octet, ```c3``` en hexadécimal, sera perçu en ISO 8859-15 comme le caractère ```Ã```.  
        Le deuxième octet, ```a9``` en hexadécimal, sera perçu en ISO 8859-15 comme la lettre ```©```.  
        
        Finalement, ce qui aurait dû être un ```é``` en UTF-8 se retrouvera être un ```Ã©``` en ISO 8859-15. 

        ![](/assets/images/iso-latin.png){: .center}
        
         
          
{{exercice(titre="Un peu de cryptographie")}}	
    On souhaite chiffrer (*chiffrer* est le mot utilisé en cryptographie pour *crypter*) le mot `"BONJOUR"` avec la clé `"LYCEEXP"`. Le chiffrement retenu est un chiffrement par XOR, ce qui signifie qu'on va effectuer un XOR (^) entre les deux nombres associés aux lettres.

    Exemple :

    - la lettre ```'B'``` va être chiffrée grâce au ```'L'```.
    - Le code ASCII de ```'B'``` est 66. (on le sait car ```ord('B')``` renvoie 66 )
    - Le code ASCII de ```'L'``` est 76. (on le sait car ```ord('L')``` renvoie 76 )
    - 66 ^ 76 vaut 14.
    - Le «caractère» associé à 14 est ```'\x0e'``` (on le sait car ```chr(15)``` renvoie ```'\x0e'``` )


    Le premier caractère du mot chiffré sera donc ```'\x0e'```


    **Q1.** Écrire une fonction ```chiffre``` qui prendra en paramètre un mot ```mot_clair``` et un mot de passe ```cle``` **de même taille** que ```mot_clair``` et qui renvoie la chaîne de caractères obtenue en XORant ```mot_clair``` avec ```cle```.
    
    {{IDE()}}
    
    ??? tip "correction"
        ```python linenums='1'
        def chiffre(mot_clair, cle):
            mot_chiffre = ""
            for i in range(len(mot_clair)):
                code = ord(mot_clair[i]) ^ ord(cle[i])
                mot_chiffre += chr(code)
            return mot_chiffre
    
        ```

    **Q2.** Grâce à la fonction ci-dessus, chiffrer le mot `"BONJOUR"` avec la clé `"LYCEEXP"`.

    ??? tip "correction"
        ```python
        >>> chiffre("BONJOUR", "LYCEEXP")
        '\x0f\x0e\x1b\x18\x06\x14\x11'
        ```

    **Q3.** Reprendre la chaîne de caractères précédemment obtenue et la rechiffrer à nouveau avec la clé `"LYCEEXP"`. Que constate-t-on ? 

    ??? tip "correction"
        ```python
        >>> chiffre('\x0f\x0e\x1b\x18\x06\x14\x11', "LYCEEXP")
        'BONJOUR'
        ```
    
    **Q4.** Montrer que ```(a^b)^b = a``` avec les portes logiques.

    <div style="width: 100%; height: 400px">
			<logic-editor mode="design" showonly="in out and or not xor">
				<script type="application/json">
				{ // JSON5
					v: 6
				}
				</script>
			</logic-editor>
	</div>

    ??? tip "Correction"
        <div style="width: 100%; height: 193.5px">
        <logic-editor mode="design">
            <script type="application/json">
            { // JSON5
                v: 6,
                opts: {showGateTypes: true},
                components: {
                xor0: {type: 'xor', pos: [110, 90], in: [0, 1], out: 2},
                xor1: {type: 'xor', pos: [210, 120], in: [3, 4], out: 5},
                in0: {type: 'in', pos: [30, 25], id: 6, val: 1},
                in1: {type: 'in', pos: [25, 150], id: 7, val: 1},
                out0: {type: 'out', pos: [305, 120], id: 8},
                label0: {type: 'label', pos: [25, 175], text: 'A'},
                label1: {type: 'label', pos: [30, 50], text: 'B'},
                },
                wires: [[6, 0], [7, 1], [6, 3], [2, 4], [5, 8]]
            }
            </script>
        </logic-editor>
        </div>


    **Q4.** :skull: Résoudre le Pydéfi [La clé endommagée](https://pydefis.callicode.fr/defis/MasqueJetable/txt){. target="_blank"}

    ??? tip "correction"
        ```python linenums='1'
        msg = [255, 87, 255, 93, 254, 112, 98, 239, 146, 205, 59, 198, 173, 65, 50, 174, 200, 218, 189, 130, 96, 4, 57, 173, 143, 8, 175, 19, 2, 109, 216, 2, 65, 14, 36, 206, 32, 157, 181, 22, 248, 119, 153, 204, 8, 137, 7, 203, 0, 89, 251, 16, 79, 214, 52, 15, 249, 42, 115, 67, 241, 175, 160, 65, 217, 40, 36, 68, 205, 234, 14, 21, 73, 172, 70, 81, 37, 83, 1, 113, 180, 8, 194, 90, 46, 239, 194, 122, 244, 15, 24, 14, 86, 72, 43, 246, 241, 24, 182, 91, 220, 48, 92, 147, 16, 82, 139, 169, 104, 236, 88, 106, 192, 76, 23, 72, 233, 130, 92, 67, 235, 199, 149, 108, 180, 217, 156, 175, 175, 234, 177, 145, 242, 17, 245, 94, 113, 16, 88, 170, 71, 226, 13, 122, 189, 56, 44, 48, 185, 159, 73, 160, 84, 147, 231, 21, 86, 81, 238, 196, 137, 133, 222, 174, 208, 9, 105, 83, 80, 60, 49, 191, 19, 220, 231, 196, 172, 10, 72, 237, 211, 163, 23, 119, 247, 37, 177, 3, 246, 136, 82, 222, 93, 245, 202, 24, 164, 177, 167, 174, 203, 247, 101, 201, 32, 99, 83, 189, 241, 46, 208, 125, 167, 111, 217, 84, 120, 5, 158, 50, 180, 129, 202, 116, 149, 226, 195, 6, 56, 221, 54, 1, 233, 119, 186, 113, 87, 194, 240, 244, 29, 195, 251, 186, 54, 175, 66, 8, 193, 189, 143, 151, 101, 153, 25, 100, 151, 75, 71, 176, 55, 183, 66, 28, 119, 90, 142, 60, 100, 170, 46, 231, 149, 131, 139, 249, 247, 209, 60, 206, 40, 121, 175, 78, 246, 189, 88, 33, 46, 147, 11, 30, 65, 208, 131, 163, 37, 44, 77, 220, 148, 101, 101, 167, 34, 68, 179, 117, 200, 234, 91, 170, 134, 203, 240, 164, 71, 220, 122, 77, 249, 76, 39, 145, 217, 151, 36, 96, 249, 61, 105, 52, 59, 231, 86, 166, 88, 42, 134, 182, 74, 166, 106, 36, 194, 160, 92, 69, 84, 74, 15, 217, 189, 28, 89, 41, 212, 60, 49, 30, 225, 95, 196, 36, 199, 0, 126, 127, 251, 23, 76, 182, 66, 213, 119, 28, 187, 173, 239, 27, 97, 196, 17, 95, 124, 4, 95, 222, 191, 238, 152, 142, 208, 122, 139, 135, 12, 212, 96, 4, 126, 210, 7, 71, 225, 202, 106, 79, 206, 156, 216, 22, 163, 159, 49, 248, 120, 100, 2, 88, 41, 145, 234, 38, 196, 189, 77, 247, 71, 172, 109, 215, 134, 37, 145, 236, 6, 198, 217, 89, 94, 98, 158, 165, 99, 17, 99, 246, 90, 161, 76, 159, 194, 75, 208, 234, 18, 51, 205, 227, 167, 199, 1, 128, 68, 112, 25, 10, 66, 202, 255, 243, 163, 16, 3, 72, 43, 143, 76, 241, 108, 239, 216, 30, 236, 224, 7, 1, 222, 6, 244, 70, 151, 110, 175, 49, 153, 253, 241, 160, 117, 232, 42, 68, 77, 253, 64, 142, 11, 88, 234, 251, 20, 1, 239, 39, 157, 181, 106, 47, 180, 26, 227, 121, 164, 183, 124, 180, 238, 42, 89, 75, 19, 244, 245, 116, 82, 124, 85, 12, 7, 22, 1, 25, 118, 126, 36, 209, 22, 226, 252, 6, 72, 26, 101, 127, 23, 124, 151, 185, 184, 203, 231, 56, 26, 128, 110, 216, 94, 202, 174, 211, 210, 125, 145, 220, 185, 43, 204, 215, 210, 224, 54, 111, 217, 202, 47, 31, 224, 46, 177, 165, 31, 68, 127, 206, 99, 11, 213, 192, 46, 222, 34, 115, 16, 73, 131, 221, 218, 180, 4, 249, 207, 74, 155, 84, 87, 242, 58, 133, 248, 61, 205, 9, 158, 226, 21, 216, 80, 154, 153, 79, 98, 105, 190, 56, 134, 187, 37, 10, 224, 82, 97, 126, 246, 24, 190, 173, 21, 62, 236, 10, 180, 242, 144, 244, 145, 117, 67, 62, 246, 57, 96, 192, 92, 126, 27, 67, 168, 223, 222, 247, 236, 224, 240, 243, 100, 150, 193, 79, 223, 143, 208, 133, 125, 80, 107, 106, 245, 118, 248, 79, 199, 116, 190, 54, 236, 81, 106, 244, 212, 241, 16, 179, 245, 238, 185, 89, 199, 175, 54, 218, 86, 84, 184, 177, 174, 92, 171, 176, 43, 149, 46, 202, 151, 181, 98, 86, 18, 58, 46, 163, 117, 33, 149, 87, 248, 235, 0, 181, 136, 16, 188, 110, 20, 108, 213, 104, 165, 45, 86, 19, 208, 48, 153, 186, 163, 221, 165, 39, 70, 200, 98, 235, 68, 167, 252, 42, 102, 52, 228, 210, 187, 151, 178, 242, 221, 44, 143, 79, 230, 159, 164, 253, 25, 90, 24, 182, 142, 122, 140, 115, 45, 182, 104, 132, 22, 109, 55, 205, 185, 27, 27, 77, 224, 184, 199, 121, 21, 250, 254, 78, 158, 215, 245, 187, 143, 211, 110, 228, 18, 36, 68, 168, 100, 126, 85, 238, 208, 98, 241, 34, 235, 254, 184, 39, 182, 239, 34, 242, 232, 6, 187, 18, 113, 176, 228, 2, 103, 135, 52, 28, 183, 9, 19, 142, 156, 242, 21, 253, 48, 21, 67, 138, 207, 131, 72, 191, 198, 107, 233, 202, 227, 108, 186, 124, 165, 23, 247]

        cle = [111, 22, 12, 177, 12, 199, 78, 21, 175, 181, 64, 73, 174, 101, 212, 225, 63, 106, 248, 91, 175, 48, 247, 245, 51, 250, 160, 111, 23, 4, 70, 167, 177, 49, 17, 53, 17, 73, 85, 89]

        def decrypt(dec):
            l = ""
            for i in range(len(cle)):
                c = msg[i + dec] ^ cle[i]
                l = l + chr(c)
            return l

        for i in range(0, len(msg)-len(cle)):
            print(decrypt(i))

        ```
        


!!! info "Utilisation grandissante de l'encodage UTF-8"
    La majorité des sites internet utilisent maintenant l'UTF-8, tout comme les systèmes d'exploitation récents.

    
    ![](/assets/images/graph_comparaison.png){: .center}

