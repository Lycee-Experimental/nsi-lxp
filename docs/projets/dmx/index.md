
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

On se propose donc de réaliser un contrôleur DM en utilisant des microcontrôleur et [CircuitPython](/fondement/ihm/circuitpython)


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

