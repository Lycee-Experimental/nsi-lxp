def plancher(dictionnaire): 
    for cle, valeur in dictionnaire.items():
        if valeur < 0:
            dictionnaire[cle] = 0
    return dictionnaire

entrees = {'A': 12, 'B': 21, 'C': -2, 'D': 37, 'E': -99, 'F': 6}
print(entrees)
print(plancher(entrees))
print(entrees)

