Il s'agit d'une recherche de maximum classique. La liste étant non-vide, on initialise la variable `maxi` avec la première valeur.


# Variante récursive pour la classe de terminale

```python
def maximum(nombres, i=0):
    """renvoie le maximum parmi les nombres d'indices i jusqu'à la fin"""
    if  i == len(nombres) - 1:
        return nombres[i]
    else:
        maxi = maximum(nombres, i + 1)
        if nombres[i] > maxi:
            return nombres[i]
        else:
            return maxi
```
