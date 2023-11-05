from copy import deepcopy

def plancher(dictionnaire): 
    dictionnaire2 = deepcopy(dictionnaire)
    for cle, valeur in dictionnaire.items():
        if valeur < 0:
            dictionnaire2[cle] = 0
    return dictionnaire2

entrees= {'A': 12, 'B': 21, 'C': -2, 'D': 37, 'E': -99, 'F': 6}
print(entrees)
print(plancher(entrees))
