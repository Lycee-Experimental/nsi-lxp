# Tester et installer Linux 

## Des centaines de distributions

Le noyau GNU-Linux est ditribué dans de très nombreuses versions d'OS. On appelle **distribution** chacune de ces versions, certaines dérivant les unes des autres. Par exemple la distribution utilisée au Lycée Xp, **Linux Mint**, est dérivée d'**Ubuntu**, elle même dérivée de **Debian**.

Le site [Distrowatch](https://distrowatch.com) permet de se tenir au courrant des nouveautés de centaines de distributions.

Cliquer [ici](/assets/images/distro.svg) pour admirer l'arbre généalogiques des principales distributions.

## Avec ou sans interface graphique

Il est possible d'utiliser Linux avec ou sans interface graphique (Graphical User Interface - GUI).

- Sans GUI, on utilise Linux "en lignes de commandes". Le [shell](./commande.md) Linux est une **invite de commande** très puissante qui permet de réaliser toutes sortes d'actions : se déplacer dans l'[arborescence](./dossier.md), créer, supprimer des fichiers, lancer des applications ou des commandes (exemple : convertir un lot d'images d'un format vers un autre), etc. Cette invite de commande est suffisante par exemple quand on doit administrer un serveur Linux, et cela demande moins de ressources qu'une interface graphique. Un des objectifs de ce chapitre est de se familiariser avec quelques [commandes de base du shell](./commande.md).

- Il existe plusieurs interfaces graphiques sous Linux, il y en a pour tous les goûts, avec différentes expériences utilisateur, et plus ou moins gourmandes en ressources. Citons par exemple : Gnome, KDE, Cinnamon, Mate, Xfce, LxQt,  Budgie, Deepin, Unity, Pantheon, Enlightenment...

## Tester Linux

- Il est possible de tester linux directement en ligne à partir du site [Distosea](https://distrosea.com).

## Installer Linux avec Ventoy

Ventoy est un logiciel qui permet de configurer une clé USB pour qu'elle puisse nous permettre d'installer un nouveau système d'exploitation sur nos machines, que ce soit linux ou Windows.  

### Téléchargement de Ventoy.

[Télécharger](https://github.com/ventoy/Ventoy/releases) la dernière version compatible avec votre système d'exploitation.

#### Avec Linux

- Clic droit sur le fichier téléchargé, et faite "extraire ici" (ou en ligne de commande : tar -xzvf ventoy-*-linux.tar.gz)

- Le fichier est décompressé, et un répertoire est créé. On peut déplacer ce répertoire où l'on souhaite le conserver.

### Installation de ExFat

Ventoy a besoin du format de fichier exFat (impératif au cas où des ISO dépassent 4 Gio), qui doit donc être installé sur notre machine.

```bash
sudo apt install exfatprogs
```

### Installation de Ventoy sur une clé USB avec l'interface graphique (GUI)
- Ouvrir le dossier décompressé, clic droit ouvrir dans un terminal.
- Executer le GUI avec la commande suivante : `./VentoyGUI.x86_64`
- Il nous est ensuite demandé le mot de passe de la machine.
- Choisir ensuite la clé USB sur laquelle vous voulez installer Ventoy.

### Téléchargement d'images disque (.iso)
Il suffit ensuite de télécharger des image disque de systèmes d'exploitation (OS) et de les copier sur notre clé USB. Par exemple :

- la dernière version de **Linux Mint** [ici](https://www.linuxmint.com/download.php).

- **Clonezilla Server (DRBL)** pour le clonage d'un système sur plusieurs machines [ici](https://free.nchc.org.tw/osdn//drbl/67430/drbl-live-xfce-2.5.1-16-amd64.iso)

### Démarrage sur la clé USB
Selon la machine, il faut appuyer sur **Echap**, ou **F12** ou autre au démarrage pour indiquer à la machine de **booter** sur la clé USB. 
