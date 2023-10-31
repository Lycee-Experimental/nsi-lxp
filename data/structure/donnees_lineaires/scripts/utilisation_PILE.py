#--- HDR ---#

# Les Piles

def CREER_PILE_VIDE():
    return []

def EMPILER(P, e):
    P.append(e)

def DEPILER(P):
    x=P.pop()
    return x

def PILE_VIDE(P):
    if P==[]:
        return True
    else:
        return False

def PILE_PLEINE(P):
    pass
#--- HDR ---#

P = CREER_PILE_VIDE()
print(P)

print(PILE_VIDE())

EMPILER(P, 2)
EMPILER(P, 5)
EMPILER(P, 3)
EMPILER(P, 7)

print(P)

DEPILER(P)
print(P)

print(PILE_VIDE())