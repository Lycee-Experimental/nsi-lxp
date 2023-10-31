# Test
contenu_ = []
with open(file="fables.txt", mode="r", encoding="utf-8") as fichier:
    for ligne in fichier:
        contenu_.append(ligne)

assert fables == contenu_, "Erreur de lecture"