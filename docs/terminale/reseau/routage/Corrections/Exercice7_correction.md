??? note "Correction"
    1)

    |Routeur A|Ip de destination|Masque|Passerelle suivante|Interface|Nb Saut|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    ||172.18.0.0|255.255.0.0||eth0|1|
    ||192.168.1.0|255.255.255.0||eth1|1|
    ||192.168.2.0|255.255.255.0||eth2|1|
    ||192.168.3.0|255.255.255.0|192.168.2.2|eth2|2|
    ||172.17.0.0|255.255.0.0|192.168.2.2|eth2|2|
    ||172.16.0.0|255.255.0.0|192.168.1.2|eth1|2|

    2) Chemin : Portable à Gauche, Routeur A, Routeur B, Portable à droite
