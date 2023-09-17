class  Vehicule:
    def  __init__(self,  marque,  modele,  km,  nbRevisions):
        self.set_marque(marque)
        self.set_modele(modele)
        self.set_km(km)
        self.set_nbRevisions(nbRevisions)
    
    def get_marque(self):
        return self.marque

    def get_modele(self):
        return self.modele

    def get_km(self):
        return self.km

    def get_nbRevisions(self):
        return self.nbRevisions

    def set_marque(self, nouvel_marque):
        self.marque = nouvel_marque

    def set_modele(self, nouveau_modele):
        self.modele = nouveau_modele

    def set_km(self, nouveau_km):
        self.km = nouveau_km
        
    def set_nbRevisions(self, nouvel_nbRevisions):
        self.nbRevisions = nouvel_nbRevisions

    def  bilan(self):
        pass

    def  faire_revision(self):
        pass

    def  ajouter_km(self,  km_parcourus):
        pass