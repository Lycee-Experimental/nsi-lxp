# Programmation de DrumXP

Sur cette page, toutes les infos nécessaires pour programmer nos microcontrolleurs.

## Environnement de développement

L'environnement de développement (IDE) le plus simple d'utilisation dans un premier temps sera l'IDE Arduino.
Pour une utilisation avancée avec un IDE plus polyvalent, on pourra utiliser **VS Code** (ou sa version libre VSCodium)installé sur **Linux**, dans lequel on installera l'extension **PlatformIO** qui permet de programmé de nombreux types de microprocesseurs.


### Installation des IDE

=== "Arduino"

    - Télécharger la dernière version ZIP de l'IDE pour Linux [ici](https://www.arduino.cc/en/software)
    - Décompresser l'archive dans le dossier de votre choix.
    - Pour lancer l'application, double-cliquer sur le fichier **arduino-ide**


=== "VScode"

    ```shell
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
    sudo apt-add-repository 'deb https://packages.microsoft.com/repos/code stable main'
    sudo apt update
    sudo apt install code
    ```
=== "VSCodium"

    ```shell
    wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | sudo apt-key add -
    sudo apt-add-repository 'deb https://paulcarroty.gitlab.io/vscodium-deb-rpm-repo/debs/ vscodium main'
    sudo apt update
    sudo apt install codium
    ```
    Une fois installé, il vous demandera de choisir votre thème préféré et si vous souhaitez installer le pack de langue Français.

#### Installation de PlatformIO sur VScode/VScodium

=== "VSCode"

    L'installation de platformio se fait simplement depuis la librairie du menu Extension.

=== "VSCodium"

    - Télécharger cpptools-linux.vsix : https://github.com/microsoft/vscode-cpptools/releases/download/1.3.1/cpptools-linux.vsix

    - Installer cpptools-linux.vsix dans vscodium Dans le menu extensions / installer à partir de vsix.

    - Télécharger le vsix de PlatformIO : https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide (download dans la colonne de droite)

    - Installer PlatformIO  dans vscodium Dans le menu extensions / installer à partir de vsix.

    - Ajouter les règles udev pour la reconnaissance de nos périphériques USB.
    ```shell
    curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core/master/scripts/99-platformio-udev.rules | sudo tee /etc/udev/rules.d/99-platformio-udev.rules
    ```

    - Ajouter notre utilisateur au groupe ayant droit à utiliser les devices
    ```
    sudo usermod -a -G uucp $USER
    ```

#### Installation de bibliothèques

=== "IDE Arduino"

    Pour installer des librairies sur l'IDE Arduino 2.0, cliquer sur l'icone avec des livres dans le menu de gauche puis rechercher la bibliothèque à installer, par exemple **Hellodrum**.

=== "PlatformIO"

    - Cliquer sur l'icone de PlatformIO puis sur l'icone **Librairies**
    - Rechercher une bibliothèque, par exemple Hellodrum, puis l'ajouter au projet de votre choix.

#### Bibliothèques utiles 

La principale bibliothèque que nous utiliserons est **Hellodrum**, développées par Ryo Kosaka, mais qui n'évolue plus trop depuis deux ans... Davy a créé un fork pour pouvoir faire évoluer la bibliothèque [ici](https://github.com/Lycee-Experimental/HelloDrum-LXP).
 
Une autre bibliothèque incontournable est **MIDI Library** qui nous permettra d'envoyer des messages musicaux au format MIDI. 

D'autres bibliothèques peuvent être utiles selon le matériel utilisé, par exemple : 

- **USBMIDI** pour les cartes qui supportent le MIDI via USB (SAMD21, ESP32-S2...)

- **BLEMIDI** pour celles qui supporte le bluetooth (ESP-32)

- **Adafruit TinyUSB Library** pour le MIDI via USB avec le Raspberry Pico (RP2040)

- **FlashStorage_SAMD** pour pouvoir mettre en mémoire des données sur SAMD21 (EEPROM)

- **U8g2lib** pour utiliser des écrans SSD1306.
- 
U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/SCL, /* data=*/SDA, /* reset=*/U8X8_PIN_NONE);

#### Installation des cartes (boards)

=== "Arduino"

    Cliquer sur l'icone **Gestionnaire de cartes** dans le menu de gauche, puis rechercher et installer les cartes qui vous intéressent.


=== "PlatformIO"

    Cliquer sur l'icone PlatformIO à gauche, puis aller dans le menu **Boards** pour rechercher des cartes dans la base de données. Contrairement à Arduino, les cartes ne s'installent pas mais se renseignent dans le fichier plaformio.ini présent à la création d'un nouveau projet (voir après).

### Création d'un nouveau projet

=== "Arduino"

    A chaque projet correspond un fichier .ino. A l'ouverture d'arduino, un nouveau fichier est créer, à vous de choisir son nom et emplacement à sa sauvegarde.

=== "Platformio"

    Pour créer un nouveau projet, se rendre dans le menu **Project** de **PlatformIO**, puis **Create new project**. Il nous est alors demandé de renseigner le nom de notre projet et la board qui correspond. Ce paramètre est ensuite modifiable dans le fichier platformio.ini présent à la racine du projet.


### A surveiller : edrumulus

## Utilisation de Hellodrum
