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

print(FILE_VIDE())

EMFILER(F, 2)
EMFILER(F, 5)
EMFILER(F, 3)
EMFILER(F, 7)

print(F)

DEFILER(F)
print(F)

print(FILE_VIDE())