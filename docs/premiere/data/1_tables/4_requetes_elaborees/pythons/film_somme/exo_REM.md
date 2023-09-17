Il existe plusieurs solutions alternatives :

* avec la fonction `projection` :

```python
def somme(donnees, descripteur):
    """Renvoie la somme des valeurs de ce descripteur"""
    total = 0
    for valeur in projection(donnees, descripteur):
        total += valeur
    return total
```

* avec la fonction `sum` de Python :

```python
def somme(donnees, descripteur):
    """Renvoie la somme des valeurs de ce descripteur"""
    return sum([entree[descripteur] for entree in donnees])
```

* avec la fonction `projection` et la fonction `sum` :

```python
def somme(donnees, descripteur):
    """Renvoie la somme des valeurs de ce descripteur"""
    return sum(projection(donnees, descripteur))
```