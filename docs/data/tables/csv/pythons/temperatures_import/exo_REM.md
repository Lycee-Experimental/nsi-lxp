On peut aussi typer les données dès l'importation :

```python
temperatures = []
with open(file="temperatures_2020.csv", mode="r", encoding="utf-8") as fichier:
    fichier.readline()
    for ligne in fichier:
        ligne_propre = ligne.strip()
        valeurs = ligne_propre.split(",")
        # Typage
        valeurs[1] = int(valeurs[1])
        for indice in [3, 4, 5]:
            valeurs[indice] = float(valeurs[indice])
        # Ajout de la nouvelle ligne
        temperatures.append(valeurs)
```