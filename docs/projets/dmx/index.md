
# Controlleurs DMX

Le **DMX512** (Digital Multiplexing) est une norme de transmission de données utilisée pour le contrôle de l'éclairage et des effets de scène dans le spectacle.

Le projet est de fabriquer des contrôleurs DMX pour piloter nos lumières.

## Communications DMX

??? info "Protocole DMX512"

    Le protocole DMX512 est relativement simple. Il s'effectue à un **baudrate** de 250 kbit/s, soit un bit toute les 4 μs.


    ```
    Idle  |       Break       |MAB|  Slot 0  |  Slot 1  |
    ------\                   /---\        /-\ /--------\
          |                   |   |        | | |        |
          |                   |   |        | | |        |
          \-------------------/   \--------/ \-/        \-- - -
    ```


    **Idle** : En l'absence de signal, la sortie digitale est à `1` .

    **Break** : POur prévenir l'arrivée du signal, il faut commencer par envoyer un signal à ``0`` pendant environ **100 μs**.

    **MAB** : Le Mark After Break (MAB) est un signal de **12 μs** à `1` qui suit le **break**.

    **Slots** : Les slots correspondent a un signal de départ (un octet à `0`), suivi des octets qui correspondent au valeurs de chaque canaux DMX (512 au maximum). 

    Exemple d'un slot à une valeur de 152 (`0b10011000`).

    ```
     S 0 1 2 3 4 5 6 7 E E
    \ /-\   /---\      /--
    | | |   |   |      |
    | | |   |   |      |
    \-/ \---/   \------/
    ```
    Chaque octet doit être précédé d'un start à `0` (S), et de 2 stops à `1` (E).

??? info "Câblage"

    Le protocole DMX512 utilise un protocole de type **RS-485** qui permet des communications sur des plus longues distances par le recours à un signal symétrisé (2 pins A + B, plus le GND).

    La puce **MAX485** permet de convertir un signal tx habituel en un signal rs-485.


    ![](http://hobbycomponents.com/images/forum/RS485_Module_HCMODU0081_Diagram.png)

    **Mode Émission**

    - RE & DE -> Gnd

    - RO -> RX


    **Mode Transmission**

    - RE & DE -> 5V

    - DI -> TX


## Programmation d'un signal DMX


### Circuitpython

Circuitpython est un dérivé de micropython, adaptation de python pour les microcontroleurs.

??? info "Installation"
    L'installation se fait en copiant un fichier UF2 sur le microcontroleur démarrer en mode boot.

    Télécharger l'UF2 :

    - pour le [Raspberry Pico](https://circuitpython.org/board/raspberry_pi_pico/)

    - pour le [LOLIN S3](https://circuitpython.org/board/lolin_s3/)


??? info "Utilisation"

    !!! note "Remarque"
        L'IDE [mu-editor](https://codewith.mu/en/) est prévue spécifiquement pour interfacer les boards CIRCUITPY. Une extension Circuitpython est également disponible dans **VScode**.

    - Créer simplement un fichier nommé `code.py` à la racine du système de fichier CIRCUITPY.

??? info "Ajout de librairies"

    - Créer un dossier `lib` qui contiendra les librairies supplémentaires.

    !!! note "Remarque"
        De nombreuses librairies sont diffusées dans les [bundle](https://circuitpython.org/libraries) officiels et communautaires. D'autres se trouvent sur github. Pour un gain de place et de ressources du microcontrolleur, elles sont précompilées dans un format `mpy`.

    - Pour les installer facilement, installer l'outil `circup`
    ```bash
    pip install circup
    ```

    Une fois votre board CIRCUITPY connectée, l'installation d'une librairie se fait en une commande.

    Par exemple, pour installer la librairie `adafruit_ble_radio` :

    ```bash
    circup install adafruit_ble_radio
    ```

### Librairie dmx_transmitter

Une librairie, uniquement valable pour le Raspberry Pico est en cours de développement sur [github](https://github.com/mydana/CircuitPython_DMX_Transmitter)

- Cloner le dépot et copier le dossier `dmx_transmitter` dans le dossier `lib`


!!! python "Exemple d'utilisation"

    ```python
    "Exemple de clignottement d'une lampe DMX."
    import time
    import board
    from dmx_transmitter import dmx_transmitter
    # Piloter le module RS485 avec GP0
    DMX_PIN = board.GP0
    # Instantiation du DMX
    dmx = dmx_transmitter.DMXTransmitter(first_out_pin=DMX_PIN)
    # Clignottement

    while True:
        # Eteint les lampes
        dmx.clear()  
        dmx.show()
        # Attend 1 seconde
        time.sleep(1)
        # Allume la lampe. Canaux DMX : 1, 2, 3
        dmx[0:3] = 255  
        dmx.show()
        # Attend 1 seconde
        time.sleep(1)
    ```


### Périphériques d'entrée

??? note "Joystics analogique à 2 axes"

    ```python
    import time
    import analogio
    ax = analogio.AnalogIn(board.A0)
    ay = analogio.AnalogIn(board.A1)

    def range_map(x, in_min, in_max, out_min, out_max):
        return (x - in_min) * (out_max - out_min) // (in_max - in_min) + out_min

    while True:
        x=range_map(ax.value, 0, 4095, -127, 127)
        y=range_map(ay.value, 0, 4095, -127, 127)
        print("x", x, "y", y)
        time.sleep(0.1)
    ```

    !!! note "Remarque"
        Il n'y a que 4 Analog In avec le RP2040. Il peut être utile d'utiliser un multiplexeur comme le module hc4067.


??? note "Encodeurs rotatifs"

    Contrairement aux potentiomètres et faders, les encodeurs rotatifs permettrons de changer dynamiquement les canaux DMX, en passant d'un preset à l'autre, et sont minis d'une fonction bouton (pour enregistrer la valeur dans le preset ?).

    ![](https://cdn-learn.adafruit.com/assets/assets/000/044/661/original/rotary_encoder_bb.png?1486239862)

    Leur utilisation avec circuitpython est détaillée [ici](https://learn.adafruit.com/rotary-encoder/hardware)

    !!! python "Exemple d'utilisation"
        ```python
        import rotaryio #pour l'ncodeur rotatif
        import digitalio #pour le bouton
        import board

        encoder = rotaryio.IncrementalEncoder(board.D10, board.D9)

        button = digitalio.DigitalInOut(board.D12)
        button.direction = digitalio.Direction.INPUT
        button.pull = digitalio.Pull.UP

        button_state = None
        last_position = None

        while True:
            position = encoder.position
            if last_position is None or position != last_position:
                print(position)
            last_position = position
            if not button.value and button_state is None:
                button_state = "pressed"
            if button.value and button_state == "pressed":
                print("Appui sur le bouton.")
                button_state = None
        ```
### Périphérique de sortie

On peut utiliser un écran pour afficher les valeurs des canaux DMX, et le numéro des présets.

??? note "Ecran SSD1306"

    ```python
    import displayio
    import terminalio
    import adafruit_displayio_ssd1306
    from adafruit_display_text import label

    # On efface le contenu de l'écran
    displayio.release_displays()

    # On déclare un port I2C sur les pins PG0 et GP0
    i2c = busio.I2C(scl=board.GP1, sda=board.GP0)

    # On déclare notre écran de 128x32 pixels sur l'I2C à l'addresse 0x3C
    display_bus = displayio.I2CDisplay(i2c, device_address=0x3C)
    display = adafruit_displayio_ssd1306.SSD1306(display_bus, width=128, height=32)
    # On gère l'affichage du texte sur l'écran
    text_group = displayio.Group(max_size=5)
    # On écrit sur un ligne située à 3 pixel du haut
    text_area = label.Label(terminalio.FONT, text="Mon texte", color=0xFFFFFF, x=0, y=3)
    text_group.append(text_area)
    # On écrit sur un ligne située à 14 pixel du haut
    text_area = label.Label(terminalio.FONT, text="Mon 2ème texte", color=0xFFFFFF, x=0, y=14)
    text_group.append(text_area)
    # On écrit sur une ligne située à 25 pixel du haut
    text_area = label.Label(terminalio.FONT, text="Ma 3ème ligne", color=0xFFFFFF, x=0, y=25)
    text_group.append(text_area)
    display.show(text_group)
    ```