# Architecture matérielle des ordinateurs

L'informatique revient donc à réaliser une suite d'**instructions** (combinaisons de portes logiques) sur des **données** binaires initiales.

En 1945, le développement du projet [EDVAC](https://fr.wikipedia.org/wiki/Electronic_Discrete_Variable_Automatic_Computer) amène  John von **Neumann** (mathématicien et physicien américano-hongrois 1903-1957) à imaginer l'utilisation d'une **structure de stockage (mémoire)** pour stocker à la fois les données et les instructions.

Cette **architecture matérielle** porte le nom de son inventeur et est encore à la base des ordinateurs actuels.


## Architecture de von Neumann

!!! tip "Survoler les différentes partie du schéma ci-dessous pour plus d'information."

<style>
.element:hover, .element:hover * {
  cursor: pointer;
}

svg {
   width: 100%;
}
.tooltip {
   color:black;
    position: absolute;
    padding: 6px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 12px;
    pointer-events: none;
  } 

</style>

--8<-- 'assets/images/neumann.svg'


<script>
   $(document).ready( function(event) {
      const elements = document.querySelectorAll('.element');
      elements.forEach(element => {
         // Ajouter le gestionnaire d'événement pour la sortie de la souris
         element.addEventListener('mouseover', function(e) {
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.style.left = (e.pageX+10) + "px";
            tooltip.style.top = (e.pageY+10) + "px";
            tooltip.innerHTML = element.querySelector('.description').innerHTML;
            document.body.appendChild(tooltip);
      });
      element.addEventListener('mousemove', function(e) {
            const tooltip = document.querySelector('.tooltip');
            tooltip.style.left = (e.pageX+10) + "px";
            tooltip.style.top = (e.pageY+10) + "px";
      });
      element.addEventListener('mouseout', function(e) {
            const tooltip = document.querySelector('.tooltip');
            tooltip.remove();
      });
      });
   });

</script>



## Améliorations de l'architecture de von Neumann

### Pérénniser la mémoire
La **mémoire vive** (**RAM** , pour Random Access Memory) de l'ordinateur a besoin d'être alimentée en permanence pour garder les données. À chaque extinction de l'ordinateur, elle est perdue : on la qualifie de mémoire volatile. Mais c'est dans la mémoire vive qu'est chargé le système d'exploitation de l'ordinateur (Windows, Linux, etc) et que sont stockées provisoirement les données dont il a besoin lors de l'exécution de programmes (navigateur Web, outils bureautiques, etc.). C'est en quelque sorte la mémoire à court-terme de l'ordinateur.

Pour résoudre le problème de non persistance de la RAM, on recourt à deux types de mémoires non volatiles :

- La **mémoire morte** est une mémoire qui ne peut être que lue (**ROM** Read Only Memory) : elle contient le micrologiciel (firmware) de l'ordinateur (BIOS ou UEFI) qui est le programme qui se charge à chaque allumage de l'ordinateur, avant même le lancement du système d'exploitation.
- La **mémoire de masse**. Pour stocker les données et les programmes, on ajoute un périphérique appelé mémoire de masse : un disque dur (HDD = Hard Disk Drive) et/ou une mémoire Flash (SSD = Solid State Drive). Cette mémoire est capable de stocker une grande quantité de données, mais à l'inconvénient d'être beaucoup moins rapide que la mémoire vive. C'est pour cela que lors du lancement d'un programme les données nécessaires à son exécution sont généralement transférées vers la RAM pour une exécution plus rapide.


### Accélérer l'accès à la mémoire
Les performances des processeurs augmentant, l'accès à la **RAM** peut être un frein à l'exécution des tâches du processeur.

Pour remédier à ce goulot d'étranglement, les processeurs contiennent maintenant de la **mémoire cache**, une mémoire encore plus rapide que la RAM.

Dans un ordinateur, il y a donc plusieurs niveaux de mémoire, leur capacité (liée à leur coût) étant inversement proportionnelle à leur vitesse.


|Mémoire |	Temps d'accès |	Débit 	| Capacité|
|:--:|:--:|:--:|:--:|  
Registre |	1 ns 	| |≈ Kio
Mémoire cache |	2−3 ns 	| |≈ Mio
RAM |	5−60 ns 	| 1−20 Gio/s |	≈ Gio
Disque dur |	3−20 ms 	| 10−320 Mio/s |	≈ Tio


### Multiplier les processeurs

Pendant des années, pour augmenter les performances des ordinateurs, les constructeurs augmentaient la **fréquence d'horloge des microprocesseurs** : la fréquence d'horloge d'un microprocesseur est liée à sa capacité d'exécuter un nombre plus ou moins important d'instructions machines par seconde. Plus la fréquence d'horloge du CPU est élevée, plus ce CPU est capable d'exécuter un grand nombre d'instructions machines par seconde 

![](/assets/images/clockspeeds.jpg){.center}

Comme vous pouvez le remarquer sur le graphique ci-dessus, à partir de 2006 environ, la fréquence d'horloge a cessé d'augmenter, pourquoi ? À cause d'une contrainte physique : en effet plus on augmente la fréquence d'horloge d'un CPU, plus ce dernier chauffe. Il devenait difficile de refroidir le CPU, les constructeurs de microprocesseurs (principalement Intel et AMD) ont décidé d'arrêter la course à l'augmentation de la fréquence d'horloge, ils ont décidé d'adopter une nouvelle tactique.


Il n'est plus vraiment possible d'augmenter les performances en augmentant la fréquence d'horloge des CPU, et bien augmentons le **nombre de coeurs** présent sur un CPU ! Mais qu'est qu'un coeur dans un microprocesseur ? Dans un microprocesseur, un coeur est principalement composé : d'une UAL, de registres (R0, R1...) et d'une unité de commande, un coeur est donc capable d'exécuter des programmes de façon autonome. La technologie permettant de graver toujours plus de transistors sur une surface donnée, il est donc possible, sur une même puce, d'avoir plusieurs coeurs, alors qu'auparavant on trouvait un seul coeur dans un CPU. Cette technologie a été implémentée dans les ordinateurs grand public à partir de 2006. Aujourd'hui (en 2019) on trouve sur le marché des CPU possédant jusqu'à 18 coeurs ! Même les smartphones possèdent des microprocesseurs multicoeurs : le Snapdragon 845 possède 8 coeurs.

On pourrait se dire que l'augmentation du nombre de coeurs entraîne obligatoirement une augmentation des performances du CPU, en faite, c'est plus que complexe que cela : pour une application qui n'aura pas été conçue pour fonctionner avec un microprocesseur multicoeur, le gain de performance sera très faible, voir même nul. En effet, la conception d'applications capables de tirer profit d'un CPU multicoeur demande la mise en place de certaines techniques de programmation (techniques de programmation qui ne seront pas abordées ici). Il faut aussi avoir conscience que les différents coeurs d'un CPU doivent se "partager" l'accès à la mémoire vive : quand un coeur travaille sur une certaine zone de la RAM, cette même zone n'est pas accessible aux autres coeurs, ce qui, bien évidemment va brider les performances. De plus, on trouve à l'intérieur des microprocesseurs de la mémoire "ultrarapide" appelée mémoire cache (il ne faut pas confondre mémoire cache et registres). Le CPU peut stocker certaines données dans cette mémoire cache afin de pouvoir y accéder très rapidement dans le futur, en effet, l'accès à la mémoire cache est beaucoup plus rapide que l'accès à la RAM. La mémoire cache ayant un coup assez important, la quantité présente au sein d'un CPU est assez limitée, les différents coeurs vont donc devoir se partager cette mémoire cache, ce qui peut aussi provoquer des ralentissements (en faite il existe plusieurs types de mémoire cache appelés L1, L2 et L3, chaque coeur possède son propre cache L1, alors que les caches L2 et L3 sont partagés par les différents coeurs).