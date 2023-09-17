i_haiti = 0
while pays[i_haiti]["Name"] != "Haiti":
    i_haiti += 1

code = pays[i_haiti]["CountryCode"]

langues_haiti = []
for entree in langues:
    if entree["CountryCode"] == code:
        langues_haiti.append(entree)
