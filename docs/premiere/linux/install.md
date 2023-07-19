# Ventoy

Ventoy est un logiciel qui permet de configurer une clé USB pour qu'elle puisse nous permettre d'installer un nouveau système d'exploitation sur nos machines, que ce soit linux ou Windows.  

## Téléchargement de Ventoy.

Site de téléchargement : https://github.com/ventoy/Ventoy/releases

Télécharger la dernière version, avec la terminaison linux.tar.gz (la version avec la terminaison windows.zip est celle pour Windows).

Clic droit sur le fichier téléchargé, et faite "extraire ici" (ou en ligne de commande : tar -xzvf ventoy-*-linux.tar.gz)

Le fichier est décompressé, et un répertoire est créé. On peut déplacer ce répertoire où l'on souhaite le conserver.

## Installation de ExFat

Ventoy a besoin du format de fichier exFat (impératif au cas où des ISO dépassent 4 Gio), qui doit donc être installé sur notre machine.
-    Linux Mint 20.x (Ubuntu 20.04) installer **exfat-utils**
-    Linux Mint 21.x (Ubuntu 22.04) : installer **exfatprogs**

## Installation de Ventoy sur une clé USB avec l'interface graphique (GUI)
- Ouvrir le dossier décompressé, clic droit ouvrir dans un terminal.
- Executer le GUI avec la commande suivante : `./VentoyGUI.x86_64`
- Il nous est ensuite demandé le mot de passe de la machine.
- Choisir ensuite la clé USB sur laquelle vous voulez installer Ventoy.

## Téléchargement d'images disque (.iso)
Il suffit ensuite de télécharger des image disque de systèmes d'exploitation (OS) et de les copier sur notre clé USB. Par exemple :
- la dernière version de **Linux Mint** [ici](https://mirror.crexio.com/linuxmint/isos/stable/21/linuxmint-21-cinnamon-64bit.iso).

- **Clonezilla Server (DRBL)** pour le clonage d'un système sur plusieurs machines [ici](https://free.nchc.org.tw/osdn//drbl/67430/drbl-live-xfce-2.5.1-16-amd64.iso)

## Démarrage sur la clé USB
Selon la machine, il faut appuyer sur **Echap**, ou **F12** ou autre au démarrage pour indiquer à la machine de **booter** sur la clé USB. 
