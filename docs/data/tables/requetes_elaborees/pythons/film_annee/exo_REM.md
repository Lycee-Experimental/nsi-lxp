On pourrait aussi utiliser la fonction `projection` :

```python
annee_films = {}

for annee in projection(films, "Year"):
    if annee not in annee_films:
        annee_films[annee] = 1
    else:
        annee_films[annee] += 1
```