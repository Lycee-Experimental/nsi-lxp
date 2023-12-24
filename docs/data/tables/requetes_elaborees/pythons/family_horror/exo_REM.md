On profite ici du fait que les deux genres sont incompatibles (dans cette liste de films *a minima*).

Si l'on souhaite comparer deux genres compatibles, on doit utiliser deux `#!py if` et pas un `#!py if ... elif`. C'est le cas par exemple avec les genres `Adventure` et `Family`

```{.python .annotate}
total_adventure = 0
total_family = 0

for entree in films:
    if "Adventure" in entree["Genres"]:
        total_adventure += entree["Votes"]
    if "Family" in entree["Genres"]:  # (1)
        total_family += entree["Votes"]
```

1. Un second `#!py if` au lieu d'un `#!py elif`