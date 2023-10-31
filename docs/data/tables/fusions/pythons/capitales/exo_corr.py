for entree in pays:
    capitale = entree["Capital"]
    if capitale == -1:
        entree["CapitalName"] = ""
    else:
        fait = False
        i = 0
        while not fait:
            ville = villes[i]
            if ville["ID"] == capitale:
                entree["CapitalName"] = ville["Name"]
                fait = True
            else:
                i += 1
                