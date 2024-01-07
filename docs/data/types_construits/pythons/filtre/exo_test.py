# Tests
# liste_1 contient les valeurs strictement positives de nombres
attendu = [x for x in nombres if x > 0]
assert liste_1 == attendu, "Erreur sur la liste 1"

# liste_2 contient les valeurs inférieures ou égales à 10 de nombres
attendu = [x for x in nombres if x <= 10]
assert liste_2 == attendu, "Erreur sur la liste 2"

# liste_3 contient les valeurs impaires de nombres
attendu = [x for x in nombres if x % 2 == 1]
assert liste_3 == attendu, "Erreur sur la liste 3"

# liste_4 contient les valeurs divisibles par 7 de nombres
attendu = [x for x in nombres if x % 7 == 0]
assert liste_4 == attendu, "Erreur sur la liste 4"

# liste_5 contient les valeurs non divisibles par 5 de nombres
attendu = [x for x in nombres if x % 5 == 1]
assert liste_5 == attendu, "Erreur sur la liste 5"

# liste_6 contient les valeurs dont le triple est
# inférieur ou égal à 150 de nombres
attendu = [x for x in nombres if 3 * x <= 150]
assert liste_6 == attendu, "Erreur sur la liste 6"

# liste_7 contient les valeurs paires et négatives de nombres
attendu = [x for x in nombres if x % 2 == 0 and x <= 0]
assert liste_7 == attendu, "Erreur sur la liste 7"

# liste_8 contient les valeurs paires ou négatives de nombres
attendu = [x for x in nombres if x % 2 == 0 or x <= 0]
assert liste_8 == attendu, "Erreur sur la liste 8"

# liste_9 contient les valeurs dont le chiffre des unités est 7
# Conseil : Pensez à un modulo (x % ... == ...) de nombres
attendu = [x for x in nombres if x % 10 == 7]
assert liste_9 == attendu, "Erreur sur la liste 9"

# liste_10 contient les valeurs comprises entre 0 (inclus) et 50 (inclus)
# et dont le chiffre des unités est 3 de nombres
attendu = [x for x in nombres if 0 <= x <= 50 and x % 10 == 3]
assert liste_10 == attendu, "Erreur sur la liste 10"
