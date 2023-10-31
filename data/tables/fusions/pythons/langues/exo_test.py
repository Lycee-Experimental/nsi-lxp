# Test public
assert sorted(langues_parlees(pays, langues, "Haiti")) == ['French', 'Haiti Creole']

# Tests supplémentaires
def code_pays_corr(pays, nom):
    for entree in pays:
        if entree["Name"] == nom:
            return entree["CountryCode"]

    raise ValueError("Le nom n'apparaît pas dans la liste")


def langues_corr(pays, langues, nom):
    code = code_pays_corr(pays, nom)
    
    resultat = []
    for entree in langues:
        if entree["CountryCode"] == code:
            resultat.append(entree["Language"])
        
    return resultat


from random import randrange
for _ in range(5):
    indice = randrange(0, len(pays))
    nom = pays[indice]["Name"]
    attendu = pays[indice]["CountryCode"]
    assert code_pays(pays, nom) == attendu, f"Erreur en cherchant le code de {nom}"
    attendu = sorted(langues_corr(pays, langues, nom))
    assert sorted(langues_parlees(pays, langues, nom)) == attendu, f"Erreur pour les langues de {nom}"