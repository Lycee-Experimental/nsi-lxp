class  Rectangle:
    def  __init__(self,  longueur,  largeur):
        self.set_longueur(longueur)
        self.set_largeur(largeur)

    def get_largeur(self):
        return self.largeur

    def get_longueur(self):
        return self.longueur

    def set_longueur(self, nouvel_longueur):
        self.longueur = nouvel_longueur

    def set_largeur(self, nouvel_largeur):
        self.largeur = nouvel_largeur

    def  afficher_perimetre(self):
        p  =  2*(self.get_largeur() + self.get_longueur())
        return  f"le  perimetre  du  rectangle  est  :  {str(p)}"

    def  afficher_aire(self):
        pass

R1  =  Rectangle(4, 3)
R2  =  Rectangle(5, 6)
