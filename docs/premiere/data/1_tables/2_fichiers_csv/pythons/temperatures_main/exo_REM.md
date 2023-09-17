On peut aussi typer créer un dictionnaire en compréhension :

```python
temperatures = []
with open(file="temperatures_2020.csv", mode="r", encoding="utf-8") as fichier:
    ligne = fichier.readline()
    ligne_propre = ligne.strip()
    descripteurs = ligne_propre.split(",")
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(",")
        dico = {descripteurs[i]: valeurs[i] for i in range(len(descripteurs))}
        temperatures.append(dico)
```