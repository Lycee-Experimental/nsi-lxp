revenus_valides = [entree for entree in films if entree["Gross"] > 0]

moyenne_valide = moyenne(revenus_valides, "Gross")