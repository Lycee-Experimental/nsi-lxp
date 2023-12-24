Dans le cas présent, on pourrait aussi utiliser le *unpacking* :

```python
niveaux_gris = [0.299 * rouge + 0.587 * vert + 0.114 * bleu for (nom, rouge, vert, bleu) in liste_couleurs]
```

Voire même, dans la mesure où le `#!py nom` n'est pas utilisé :

```python
niveaux_gris = [0.299 * rouge + 0.587 * vert + 0.114 * bleu for (_, rouge, vert, bleu) in liste_couleurs]
```
