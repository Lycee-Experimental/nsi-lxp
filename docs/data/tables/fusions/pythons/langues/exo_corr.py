def code_pays(pays, nom):
    """Renvoie le code d'un pays"""
    for entree in pays:
        if entree["Name"] == nom:
            return entree["CountryCode"]

    raise ValueError("Le nom n'apparaît pas dans la liste")


def langues_parlees(pays, langues, nom):
    """Renvoie la liste des noms des langues parlées dans le pays indiqué par son nom"""
    code = code_pays(pays, nom)
    
    resultat = []
    for entree in langues:
        if entree["CountryCode"] == code:
            resultat.append(entree["Language"])
        
    return resultat