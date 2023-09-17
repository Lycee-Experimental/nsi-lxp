On pourrait aussi parcourir les *items* du dictionnaire :

```python
annee_maxi = None
maxi = 0

for annee, nombre in annee_films.items():
    if nombre > maxi:
        maxi = nombre
        annee_maxi = annee
```
