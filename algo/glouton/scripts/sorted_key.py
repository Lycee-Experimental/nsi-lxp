def le_deuxieme(elements) :
    return elements[1]

ma_liste = [["A", 3], ["B", 2], ["C", 8]]

for liste in ma_liste:
    print(le_deuxieme(liste))

triee = sorted(ma_liste, key=le_deuxieme, reverse=True)

print(triee)


