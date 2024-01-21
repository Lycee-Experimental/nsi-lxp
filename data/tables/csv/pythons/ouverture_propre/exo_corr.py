fables = []
with open(file="fables.txt", mode="r", encoding="utf-8") as fichier:
    for ligne in fichier:
        ligne_propre = ligne.strip()
        if ligne_propre != "":
            fables.append(ligne_propre)
