#--- HDR ---#

# Les Files

def CREER_FILE_VIDE():
    return []

def ENFILER(P, e):
    P.insert(0,e)

def DEFILER(P):
    x=P.pop()
    return x

def FILE_VIDE(P):
    if P==[]:
        return True
    else:
        return False

def FILE_PLEINE(P):
    pass
#--- HDR ---#

F = CREER_FILE_VIDE()
print(F)

print(FILE_VIDE(F))

ENFILER(F, 2)
ENFILER(F, 5)
ENFILER(F, 3)
ENFILER(F, 7)

print(F)

DEFILER(F)
print(F)

print(FILE_VIDE(F))