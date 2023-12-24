La boucle `#!py while` dans la recherche du code d'Haiti pourrait aussi être remplacée par un `#!py for` accompagné de l'instruction `#!py break` qui interrompt la boucle :

```python
for entree in pays:
    if entree["Name"] == "Haiti":
        code = entree["CountryCode"]
        break
```
