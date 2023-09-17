# Test
for entree in pays:
    capitale = entree["Capital"]
    if capitale == -1:
        assert entree["CapitalName"] == "", f"Erreur pour {entree['Name']}"
    else:
        for ville in villes:
            if ville["ID"] == capitale:    
                assert entree["CapitalName"] == ville["Name"], f"Erreur pour {entree['Name']}"
                break