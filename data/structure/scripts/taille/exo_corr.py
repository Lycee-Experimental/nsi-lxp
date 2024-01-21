class Noeud :
    """objet Noeud d'un arbre binaire"""
    def __init__(self, val = None, filsG = None, filsD = None) :
        self.set_val(val)
        self.set_filsG(filsG)
        self.set_filsD(filsD)
    
    def get_val(self):
        return self.val
  
    def set_val(self, nouvelle_val):
        self.val = nouvelle_val
    
    def get_filsG(self):
        return self.filsG
  
    def set_filsG(self, nouveau_filsG):
        self.filsG = nouveau_filsG
  
    def get_filsD(self):
        return self.filsD
  
    def set_filsD(self, nouveau_filsD):
        self.filsD = nouveau_filsD
    
    def __str__(self):
        return f"{self.get_val()}, {self.get_filsG()}, {self.get_filsD()}" 
    
def taille(arbre):
    if arbre == None:
        return 0
    else:
        return 1 + taille(arbre.get_filsG()) + taille(arbre.get_filsD())
    
    
# Création de l'arbre
arbre = Noeud(1,Noeud(2, Noeud(4),Noeud(5)), Noeud(3, filsD = Noeud(6)))

print(taille(arbre))