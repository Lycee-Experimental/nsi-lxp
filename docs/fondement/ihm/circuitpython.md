# Circuitpython


## Généralités 

**Circuitpython** est un dérivé de **micropython**, adaptation de python pour les **microcontroleurs**.


??? info "Installation"
    
    Pour le raspberry **Pico** et les **SAMD21**, l'installation se fait en copiant un fichier UF2 sur le microcontroleur démarré en mode boot.

    Télécharger l'[UF2 du Raspberry Pico](https://circuitpython.org/board/raspberry_pi_pico/)

    Pour les **ESP32**, on peut flasher le fichier bin avec un [outil web](https://adafruit.github.io/Adafruit_WebSerial_ESPTool/)

    Télécharger le `bin` pour le [LOLIN S3](https://circuitpython.org/board/lolin_s3/)


??? info "Utilisation"

    - Créer et modifier simplement un fichier nommé `code.py` à la racine du système de fichier **CIRCUITPY** après avoir branché la board sur votre PC.

    !!! note "Remarque"
        L'IDE [mu-editor](https://codewith.mu/en/) est prévue spécifiquement pour interfacer les boards CIRCUITPY. Une extension Circuitpython est également disponible dans **VScode**.

??? info "Ajout de librairies"

    - Créer un dossier `lib` qui contiendra les librairies supplémentaires.

    !!! note "Remarque"
        De nombreuses librairies sont diffusées dans les [bundle](https://circuitpython.org/libraries) officiels et communautaires. D'autres se trouvent sur github. Pour un gain de place et de ressources du microcontrolleur, elles sont précompilées dans un format `mpy`.

    - Pour les installer facilement, installer l'outil `circup`
    ```bash
    pip install circup
    ```

    - Une fois votre board **CIRCUITPY** connectée, l'installation d'une librairie se fait en une commande.

    - Par exemple, pour installer la librairie `adafruit_ble_radio` :
    ```bash
    circup install adafruit_ble_radio
    ```

## Périphériques d'entrée

??? note "Joystics analogique à 2 axes"


    ![](https://www.aranacorp.com/wp-content/uploads/joystick-module.jpg)

    - Protocole de communication : **2x entrées analogiques**

    ??? python "Exemple d'utilisation"

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

    ![](https://www.elektormagazine.fr/assets/upload/img/public/original/avatar-20190131152614.jpg)


    - [Documentation CircuitPython](https://learn.adafruit.com/rotary-encoder/overview)

    - Protocole de communication : **Entrée digitale**



    ??? python "Exemple d'utilisation"
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




??? note "Capteur de température, humidité, pression, et composés organiques volatils - BME680"

    ![](https://m.media-amazon.com/images/I/61aZJmCCgoL._SL1001_.jpg)

    - [Documentation CircuitPython](https://learn.adafruit.com/adafruit-bme680-humidity-temperature-barometic-pressure-voc-gas/python-circuitpython)

    - Protocole de communication : **I2C**

    - Installation de la librairie :

    ```bash
    circup install adafruit-circuitpython-bme680

    ```

    ??? python "Exemple d'utilisation"

        ```python
        # SPDX-FileCopyrightText: 2021 ladyada for Adafruit Industries
        # SPDX-License-Identifier: MIT

        import time
        import board
        import adafruit_bme680

        # Create sensor object, communicating over the board's default I2C bus
        i2c = board.I2C()  # uses board.SCL and board.SDA
        # i2c = board.STEMMA_I2C()  # For using the built-in STEMMA QT connector on a microcontroller
        bme680 = adafruit_bme680.Adafruit_BME680_I2C(i2c, debug=False)

        # change this to match the location's pressure (hPa) at sea level
        bme680.sea_level_pressure = 1013.25

        # You will usually have to add an offset to account for the temperature of
        # the sensor. This is usually around 5 degrees but varies by use. Use a
        # separate temperature sensor to calibrate this one.
        temperature_offset = -5

        while True:
            print("\nTemperature: %0.1f C" % (bme680.temperature + temperature_offset))
            print("Gas: %d ohm" % bme680.gas)
            print("Humidity: %0.1f %%" % bme680.relative_humidity)
            print("Pressure: %0.3f hPa" % bme680.pressure)
            print("Altitude = %0.2f meters" % bme680.altitude)

            time.sleep(1)

        ```

??? note "Capteur de gaz - MQ2, MQ131..."

    ![](https://m.media-amazon.com/images/I/51xIFN620dS._AC_SL1500_.jpg)

    - [Documentation CircuitPython](https://learn.adafruit.com/gas-sensor-comparison)

    - Protocole de communication : **Analogique et digitale** 

    Une sortie digitale (D0) envoie un signal lorsqu'un seuil est dépassé (réglable sur le potentiomètre).

    - Exemples de capteurs (voir cet [article de seedstudio](https://wiki.seeedstudio.com/Seeed_Gas_Sensor_Selection_Guide/)): 

        - [MQ131](https://cdn.sparkfun.com/assets/9/9/6/e/4/mq131-datasheet-low.pdf) : Capteur d'ozone
        - [MQ135](https://www.olimex.com/Products/Components/Sensors/Gas/SNS-MQ135/resources/SNS-MQ135.pdf) : Qualité de l'air intérieur (NH3,NOx, alcools, benzene, fumée, CO2...)


    ??? python "Exemple de mesure analogique avec moyennage"

        ```python
        import time
        import board
        from analogio import AnalogIn

        capteur = AnalogIn(board.A0)

        samples = 370

        while True:
            t = time.monotonic()
            val = 0
            for repeat in range(samples):
                val += capteur.value
            moy = val / samples
            print("({:f} , {:f})".format(t,moy))
        ```

??? note "Capteur de luminosité - GY302 - BH1750"

    ![](https://www.aerial.net/shop/imageslarge/IOT-GY302_main.jpg)

    - [Documentation CircuitPython](https://learn.adafruit.com/adafruit-bh1750-ambient-light-sensor/python-circuitpython)

    - Protocole de communication : **I2C**

    - Installation de la librairie :

    ```bash
    circup install adafruit-circuitpython-bh1750
    ```

    ??? python "Exemple d'utilisation"

        ```python
        import time
        import board
        import adafruit_bh1750

        i2c = board.I2C()
        sensor = adafruit_bh1750.BH1750(i2c)

        while True:
            print("%.2f Lux"%sensor.lux)
            time.sleep(1)
        ```


??? note "Gyroscope GY-91 - MPU9250 = MPU6500 + AK8963"

    ![](https://m.media-amazon.com/images/I/61MvLrjDlaL._AC_SL1000_.jpg)

    - [Librairie et documentation](https://github.com/wallarug/CircuitPython_MPU9250/tree/master)

    - Protocole de communication : **I2C**

    - Installation : Copier le dossier `robohat_mpu9250` depuis github dans le dossier `lib`

    ??? python "Exemple d'utilisation"

        ```python
        import board
        import busio
        from robohat_mpu9250.mpu9250 import MPU9250
        from robohat_mpu9250.mpu6500 import MPU6500
        from robohat_mpu9250.ak8963 import AK8963

        from time import sleep

        i2c = busio.I2C(board.SCL, board.SDA)

        mpu = MPU6500(i2c, address=0x69)
        ak = AK8963(i2c)

        sensor = MPU9250(mpu, ak)

        print("Reading in data from IMU.")
        print("MPU9250 id: " + hex(sensor.read_whoami()))

        while True:
            print('Acceleration (m/s^2): ({0:0.3f},{1:0.3f},{2:0.3f})'.format(*sensor.read_acceleration()))
            print('Magnetometer (gauss): ({0:0.3f},{1:0.3f},{2:0.3f})'.format(*sensor.read_magnetic()))
            print('Gyroscope (degrees/sec): ({0:0.3f},{1:0.3f},{2:0.3f})'.format(*sensor.read_gyro()))
            print('Temperature: {0:0.3f}C'.format(sensor.read_temperature()))
            sleep(2)
        ```

??? note "GPS GY-NEO6MV2"

    ![](https://m.media-amazon.com/images/I/41WIeSqXfZL._AC_.jpg)

    - [Documentation CircuitPython](https://learn.adafruit.com/adafruit-ultimate-gps/circuitpython-parsing)

    - Protocole de communication : **UART** avec les commandes du [standard NMEA](https://cdn-shop.adafruit.com/datasheets/PMTK_A11.pdf)

    - Installation : 
    ```bash
    circup install adafruit_gps
    ```

    ??? python "Exemple d'utilisation"

        ```python
        import time
        import board
        import busio

        import adafruit_gps

        uart = busio.UART(board.TX, board.RX, baudrate=9600, timeout=10)

        gps = adafruit_gps.GPS(uart, debug=False)  # Use UART/pyserial

        # Turn on the basic GGA and RMC info (what you typically want)
        gps.send_command(b"PMTK314,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0")

        # Turn on just minimum info (RMC only, location):
        # gps.send_command(b'PMTK314,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0')
        # Turn off everything:
        # gps.send_command(b'PMTK314,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0')
        # Turn on everything (not all of it is parsed!)
        # gps.send_command(b'PMTK314,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0')

        # Set update rate to once a second (1hz) which is what you typically want.
        gps.send_command(b"PMTK220,1000")

        # Main loop runs forever printing the location, etc. every second.
        last_print = time.monotonic()
        while True:
            gps.update()
            current = time.monotonic()
            if current - last_print >= 1.0:
                last_print = current
                if not gps.has_fix:
                    print("Waiting for fix...")
                    continue
                print("=" * 40)  # Print a separator line.
                print(
                    "Fix timestamp: {}/{}/{} {:02}:{:02}:{:02}".format(
                        gps.timestamp_utc.tm_mon,  # Grab parts of the time from the
                        gps.timestamp_utc.tm_mday,  # struct_time object that holds
                        gps.timestamp_utc.tm_year,  # the fix time.  Note you might
                        gps.timestamp_utc.tm_hour,  # not get all data like year, day,
                        gps.timestamp_utc.tm_min,  # month!
                        gps.timestamp_utc.tm_sec,
                    )
                )
                print("Latitude: {0:.6f} degrees".format(gps.latitude))
                print("Longitude: {0:.6f} degrees".format(gps.longitude))
                print(
                    "Precise Latitude: {:2.}{:2.4f} degrees".format(
                        gps.latitude_degrees, gps.latitude_minutes
                    )
                )
                print(
                    "Precise Longitude: {:2.}{:2.4f} degrees".format(
                        gps.longitude_degrees, gps.longitude_minutes
                    )
                )
                print("Fix quality: {}".format(gps.fix_quality))
                # Some attributes beyond latitude, longitude and timestamp are optional
                # and might not be present.  Check if they're None before trying to use!
                if gps.satellites is not None:
                    print("# satellites: {}".format(gps.satellites))
                if gps.altitude_m is not None:
                    print("Altitude: {} meters".format(gps.altitude_m))
                if gps.speed_knots is not None:
                    print("Speed: {} knots".format(gps.speed_knots))
                if gps.track_angle_deg is not None:
                    print("Track angle: {} degrees".format(gps.track_angle_deg))
                if gps.horizontal_dilution is not None:
                    print("Horizontal dilution: {}".format(gps.horizontal_dilution))
                if gps.height_geoid is not None:
                    print("Height geoid: {} meters".format(gps.height_geoid))
        
        ```



## Périphérique de sortie

??? note "Ecran SSD1306"

    ![](https://m.media-amazon.com/images/I/517eTutb0GL._SL1084_.jpg)

    - Documentation **CircuitPython** sur les [écrans OLED SSD1306](https://learn.adafruit.com/adafruit-oled-featherwing/python-usage) et l'utilisation plus générale de [DisplayIO](https://learn.adafruit.com/circuitpython-display-support-using-displayio)

    - **Librairies** pour l'utilisation des [écrans SSD1306](https://docs.circuitpython.org/projects/displayio_ssd1306/en/latest/), pour l'affichage de [texte](https://docs.circuitpython.org/projects/display_text/en/latest/) et pour la création de [menus](https://github.com/greatest-gatsby/fruity_menu)

    - Protocole de communication : **I2C** ou **SPI** selon le matériel

    - Installation : 
    ```bash
    circup install adafruit-circuitpython-displayio-ssd1306 adafruit_display_text
    ```

    ??? python "Exemple d'utilisation"


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

??? note "Lecteur de carte SD"

    ![](https://m.media-amazon.com/images/I/61CNHcfrflL._SL1500_.jpg)

    - [Documentation CircuitPython](https://learn.adafruit.com/adafruit-micro-sd-breakout-board-card-tutorial/circuitpython)

    - Protocole de communication : **SPI**

    ??? python "Exemple de code CircuitPython"
        ```python
        # SPDX-FileCopyrightText: 2017 Limor Fried for Adafruit Industries
        #
        # SPDX-License-Identifier: MIT

        import time

        import adafruit_sdcard
        import board
        import busio
        import digitalio
        import microcontroller
        import storage

        # Use any pin that is not taken by SPI
        SD_CS = board.D0

        led = digitalio.DigitalInOut(board.D13)
        led.direction = digitalio.Direction.OUTPUT

        # Connect to the card and mount the filesystem.
        spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
        cs = digitalio.DigitalInOut(SD_CS)
        sdcard = adafruit_sdcard.SDCard(spi, cs)
        vfs = storage.VfsFat(sdcard)
        storage.mount(vfs, "/sd")

        # Use the filesystem as normal! Our files are under /sd

        print("Logging temperature to filesystem")
        # append to the file!
        while True:
            # open file for append
            with open("/sd/temperature.txt", "a") as f:
                led.value = True  # turn on LED to indicate we're writing to the file
                t = microcontroller.cpu.temperature
                print("Temperature = %0.1f" % t)
                f.write("%0.1f\n" % t)
                led.value = False  # turn off LED to indicate we're done
            # file is saved
            time.sleep(1)
        ```


??? note "Communications mobiles avec SIM800L"

    ![](https://m.media-amazon.com/images/I/61PwvRcn50L._AC_SL1010_.jpg)

    Se connecter au Web, envoyer ou recevoir appels ou SMS.

    - [Documentation CircuitPython](https://learn.adafruit.com/cellular-data-for-circuitpython-with-fona)

    - Protocole de communication : **UART**

    - Installation : 
    ```bash
    circup install adafruit_fona
    ```

    ??? python "Exemple d'utilisation : Connection au WEB"

        ```python
        import time
        import board
        import busio
        import digitalio
        import adafruit_requests as requests
        from adafruit_fona.adafruit_fona import FONA
        import adafruit_fona.adafruit_fona_network as network
        import adafruit_fona.adafruit_fona_socket as cellular_socket

        print("FONA Webclient Test")

        TEXT_URL = "http://wifitest.adafruit.com/testwifi/index.html"
        JSON_URL = "http://api.coindesk.com/v1/bpi/currentprice/USD.json"

        try:
            from secrets import secrets
        except ImportError:
            print("GPRS secrets are kept in secrets.py, please add them there!")
            raise

        # Create a serial connection for the FONA connection
        uart = busio.UART(board.TX, board.RX)
        rst = digitalio.DigitalInOut(board.D4)

        # Use this for FONA800 and FONA808
        fona = FONA(uart, rst)

        # Initialize cellular data network
        network = network.CELLULAR(
            fona, (secrets["apn"], secrets["apn_username"], secrets["apn_password"])
        )

        while not network.is_attached:
            print("Attaching to network...")
            time.sleep(0.5)
        print("Attached!")

        while not network.is_connected:
            print("Connecting to network...")
            network.connect()
            time.sleep(0.5)

        print("Network Connected!")

        print("My IP address is:", fona.local_ip)
        print("IP lookup adafruit.com: %s" % fona.get_host_by_name("adafruit.com"))

        # Initialize a requests object with a socket and cellular interface
        requests.set_socket(cellular_socket, fona)

        # fona._debug = True
        print("Fetching text from", TEXT_URL)
        r = requests.get(TEXT_URL)
        print("-" * 40)
        print(r.text)
        print("-" * 40)
        r.close()

        print()
        print("Fetching json from", JSON_URL)
        r = requests.get(JSON_URL)
        print("-" * 40)
        print(r.json())
        print("-" * 40)
        r.close()

        print("Done!")
        ```
