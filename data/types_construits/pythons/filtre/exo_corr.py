# liste_1 contient les valeurs strictement positives de nombres
liste_1 = [x for x in nombres if x > 0]

# liste_2 contient les valeurs inférieures ou égales à 10 de nombres
liste_2 = [x for x in nombres if x <= 10]

# liste_3 contient les valeurs impaires de nombres
liste_3 = [x for x in nombres if x % 2 == 1]

# liste_4 contient les valeurs divisibles par 7 de nombres
liste_4 = [x for x in nombres if x % 7 == 0]

# liste_5 contient les valeurs non divisibles par 5 de nombres
liste_5 = [x for x in nombres if x % 5 == 1]

# liste_6 contient les valeurs dont le triple est
# inférieur ou égal à 150 de nombres
liste_6 = [x for x in nombres if 3 * x <= 150]

# liste_7 contient les valeurs paires et négatives de nombres
liste_7 = [x for x in nombres if x % 2 == 0 and x <= 0]

# liste_8 contient les valeurs paires ou négatives de nombres
liste_8 = [x for x in nombres if x % 2 == 0 or x <= 0]

# liste_9 contient les valeurs dont le chiffre des unités est 7
# Conseil : Pensez à un modulo (x % ... == ...) de nombres
liste_9 = [x for x in nombres if x % 10 == 7]

# liste_10 contient les valeurs comprises entre 0 (inclus) et 50 (inclus)
# et dont le chiffre des unités est 3 de nombres
liste_10 = [x for x in nombres if 0 <= x <= 50 and x % 10 == 3]
