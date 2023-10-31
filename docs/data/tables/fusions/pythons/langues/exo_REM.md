Contrairement à l'exemple de Haïti précédent, on peut ici utiliser une boucle `#!py for` sans avoir recours à l'instruction `#!py break`. En effet, le `return` joue ce rôle.

On a de plus ajouté la ligne `#!py raise ValueError("Le nom n'apparaît pas dans la liste")` afin de gérer les cas où le nom passé en argument ne correspond à aucun pays. On est dans ce cas de figure si l'on a effectué la totalité du parcours (de la boucle `#!py for`) sans avoir renvoyé de résultat.
