# Langages et programmation : Python 🐍

??? conclu "Programme"
    **Première :**
    Les langages de programmation Turing-complets sont caractérisés par un corpus de « constructions élémentaires ». Sans introduire cette terminologie, il s’agit de montrer qu’il existe de nombreux langages de programmation, différents par leur style (impératif, fonctionnel, objet, logique, événementiel, etc.), ainsi que des langages formalisés de description ou de requêtes qui ne sont pas des langages de programmation.  
    L’importance de la spécification, de la documentation et des tests est à présenter, ainsi que l’intérêt de la modularisation qui permet la réutilisation de programmes et la mise à disposition de bibliothèques. Pour les programmes simples écrits par les élèves, on peut se contenter d’une spécification rapide mais précise.  

    |Notions|Compétences|Remarques|
    |--|--|--|
    Constructions élémentaires | Mettre en évidence un corpus de constructions élémentaires.  | Séquences, affectation, conditionnelles, boucles bornées, boucles non bornées, appels de fonction.
    Diversité et unité des langages de programmation | Repérer, dans un nouveau langage de programmation, les traits communs et les traits particuliers à ce langage. | Les manières dont un même programme simple s’écrit dans différents langages sont comparées.
    Spécification | Prototyper une fonction.<br> Décrire les préconditions sur les arguments.<br>Décrire des postconditions sur les résultats.| Des assertions peuvent être utilisées pour garantir des préconditions ou des postconditions.
    Mise au point de programmes | Utiliser des jeux de tests. | L’importance de la qualité et du nombre des tests est mise en évidence.<br> Le succès d’un jeu de tests ne garantit pas la correction d’un programme.
    Utilisation de bibliothèques  | Utiliser la documentation d’une bibliothèque. | Aucune connaissance exhaustive d’une bibliothèque particulière n’est exigible.

    **Terminale :**
    Le travail entrepris en classe de première sur les méthodes de programmation est prolongé.  
    L’accent est mis sur une programmation assurant une meilleure **sûreté**, c’est-à-dire minimisant le nombre d’erreurs. Parallèlement, on montre l’universalité et les limites de la notion de **calculabilité**.  
    La **récursivité** est une méthode fondamentale de programmation. Son introduction permet également de diversifier les algorithmes étudiés. En classe terminale, les élèves s’initient à différents **paradigmes** de programmation pour ne pas se limiter à une démarche impérative.

!!! info "Langages de programmation"
    Comme nous l'avons vu dans le chapitre sur les [fondements de l'informatique](/fondement), le **langage informatique** est un intermédiaire indispensable entre les programmeurs et l'ordinateur, qui n'interprète qu'un **langage machine binaire**. Il existe de nombreux langages, compilés (C, C++, C#, Rust...) ou interprétés (Python, Javascript).

    L'objectif de ce chapitre est d'aborder les bases de la programmation en se focalisant sur l'utilisation d'un des des langages les plus utilisés : **Python**.


!!! abstract "Plan de la partie"
    {{plan()}}

## Outils
??? tool "Terminal Pyodide"
    Si vous avez déjà fait de la programmation en **blocks** (scratch), vous pouvez utiliser l'application [Blockly(/outils/blockly)] pour voir le code converti en **Python**.

??? tool "Terminal Pyodide"
    {{terminal()}}

??? tool "IDE Pyodide"
    {{IDE()}}

??? tool "Jupyter Notebooks"
    Pour aller plus loin et réaliser des taches plus complexe (traitement de données, tracé de graphiques...), vous pouvez créer des **notebooks Jupyter** :
    {{jupyter()}}



{{quiz('docs/outils/quiz/sources/banque_algo.md', 10)}}
