fables = []
with open(file="fables.txt", mode="r", encoding="utf-8") as fichier:
    for ligne in fichier:
        fables.append(ligne)
