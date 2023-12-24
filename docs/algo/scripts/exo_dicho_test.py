ma_liste_amis = sorted(liste_amis)

# Test
assert appartient_dichotomique(ma_liste_amis, "Bob")
assert appartient_dichotomique(ma_liste_amis, "Alice")
assert not appartient_dichotomique(ma_liste_amis, "Gaston")

# Autres tests
for nom in liste_amis :
    assert appartient_dichotomique(ma_liste_amis, nom)
assert not appartient_dichotomique(ma_liste_amis, "Gustave")
