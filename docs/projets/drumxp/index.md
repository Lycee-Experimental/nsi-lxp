# DrumXP

DrumpXP est un projet de fabrication de batterie électronique.

Des **capteurs piezo** (sensibles aux vibrations) sont connectés à un **microcontroleurs** qui en traite le signal pour envoyer des commandes MIDI à un **ordinateur**. Un logiciel d'émulation de batterie peut alors transformer les signaux MIDI en musique.

``` mermaid
graph LR
  A[Piezo]-->|analogique| B{Microcontroleur};
  B -->|numérique| C{PC};
  C -->|analogique| D{Enceintes};
  D -->|son| E[Oreilles];
  E -->|chimique| F[Youpi !];
  F -->|mécanique| A;
```

## Ce que l'on fait

- Familiarisation avec l'environnement arduino et la [librairie Hello-Drum](https://github.com/Lycee-Experimental/HelloDrum-LXP)

- Démonter le drumpad foutu pour en remplacer l'électronique avec un prototype fait maison.

## En cours

- Remplacer les 2 piezos du drumpad qui sont foutus.

- Concevoir une pédales de charleston (hi-hat) :

   - Pour le charley, le capteur utilisé est le **TCRT5000**. Voici comment le connecter à l'arduino :
   ![](https://camo.githubusercontent.com/5fa9612d58cc175933867b4bec545e009c9d7c6f644c33fd46ddd5a0083524f4/68747470733a2f2f6f70656e2d652d6472756d732e636f6d2f696d616765732f636972637569742f3037342f544352542e706e67)
   - Pour le code adapter celui de [cet example]( https://github.com/Lycee-Experimental/HelloDrum-LXP/blob/master/examples/Basic/hihat/hihat.ino) en n'utilisant que la pédale dans un premier temps.
   - Voir l'example de Ryo Kosaka [ici](https://www.youtube.com/watch?v=LbjRKrvGbME)
   - Ensuite, on n'aura plus qu'à [fabriquer une pédale](https://www.youtube.com/watch?v=gzvlmW26r9w) !