from math import *

class Fractions:
    # on definit le constructeur de la fraction
    def __init__(self, num, denom):
        self.set_numerateur(num)  # set_numerateur fait référence à une méthode ci-dessous qui permet de rentrer la valeur de l'attribut numerateur
        self.set_denominateur(denom)
             
    # on définit les accesseurs en écriture qui vont permettre de rentrer ou modifier les valeurs des attributs
    def set_numerateur(self, nouveau_numerateur):
        self.numerateur = nouveau_numerateur
     
    def set_denominateur(self, nouveau_denominateur):
        assert nouveau_denominateur != 0, "Attention, le dénominateur ne peut pas être nul"
        self.denominateur = nouveau_denominateur
    
    # on définit les accesseurs en lecture qui vont permettre de récupérer les valeurs des attributs
    def get_numerateur(self):
        return self.numerateur
    
    def get_denominateur(self):
        return self.denominateur
    
    # on définit les différentes méthodes
    def additionner(self, autre):
        num = self.get_numerateur()*autre.get_denominateur() + self.get_denominateur()*autre.get_numerateur()
        denom = self.get_denominateur()*autre.get_denominateur()
        return Fractions(num, denom)
    
    
    def soustraire(self, autre):
        num = self.get_numerateur()*autre.get_denominateur() - self.get_denominateur()*autre.get_numerateur()
        denom=self.get_denominateur()*autre.get_denominateur()
        return Fractions(num, denom)    
    
    
    def multiplier(self, autre):
        num = self.get_numerateur()*autre.get_numerateur()
        denom = self.get_denominateur()*autre.get_denominateur()
        return Fractions(num, denom)
    
    
    def diviser(self, autre):
        assert autre.get_numerateur() != 0, "on ne peut pas diviser par 0"
        num = self.get_numerateur()*autre.get_denominateur()
        denom = self.get_denominateur()*autre.get_numerateur()
        return Fractions(num, denom) 
    
    
    def simplifier(self):
        num = self.get_numerateur()
        denom = self.get_denominateur()
        
        # calcul du pgcd : plus grand commun diviseur (dans le module math)
        pgcd = gcd(num,denom) 
        
        num = num//pgcd
        denom = denom//pgcd
        return Fractions(num, denom)
        
    
    # on définit la méthode permettant l'affichage à l'aide de print
    def __str__(self):
        affiche = f"{str(self.get_numerateur())}/{str(self.get_denominateur())}"
        return affiche   
        
frac1 = Fractions(2, 3)
frac2 = Fractions(4, 5)
print (f"numérateur de frac1 = {frac1.get_numerateur()}")
print (f"frac1 = {frac1}")
print (f"frac2 = {frac2}")
frac2.set_denominateur(7)
print (f"frac2 = {frac2}")
frac3 = frac1.multiplier(frac2)
print(f"frac3 = {frac3}")

frac4 = frac1.diviser(frac2)
print(f"frac4 = {frac4}")


frac5 = frac1.additionner(frac2)
print(f"frac5 = {frac5}")

frac6 = frac1.soustraire(frac2)
print(f"frac6 = {frac6}")

frac7 = Fractions(32, 128)
frac8 = frac7.simplifier()
print(f"La fraction simplifié de {frac7} = {frac8}")