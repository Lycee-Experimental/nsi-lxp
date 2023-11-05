def pre_traitement(motif):
    """Renvoie un dictionnaire avec pour clé la lettre et pour valeur le décalage

    Arguments
    ---------
    mot: str
    
    Returns
    -------
    dict
    """
    n = len(motif)
    decalages = {}
    # Il n'est pas nécéssaire d'inclure la dernière lettre
    for i, lettre in enumerate(motif[:-1]):
        decalages[lettre] = n - i -1
    return decalages

# tests
assert pre_traitement("dab") == {'d': 2, 'a': 1}
assert pre_traitement("maman") == {'m': 2, 'a': 1}

def recherche_mot_boyer(texte, motif):
    """Recherche un mot dans un texte avec l'algo de boyer-moore

    Arguments
    ---------
    texte: str
        le texte dans lequel on effectue la recherche
    mot: str
        le mot recherché

    Returns
    -------
    bool
        renvoie True si le mot est trouvé
    """
    N = len(texte)
    n = len(motif)
    
    # création de notre dictionnaire de décalages
    decalages = pre_traitement(motif)
    
    # on commence à la fin du mot
    i = n - 1
    while i < N:
        lettre = texte[i]
        if lettre == motif[-1]:
            # On vérifie que le mot est là avec un slice sur texte
            # On pourrait faire un while
            if texte[i-n+1:i+1] == motif:
                return True
        # on décale
        if lettre in decalages.keys():
            i = i + decalages[lettre]
        else:
            i = i + n
        
    return False

# Quelques tests
assert recherche_mot_boyer('abracadabra', 'dab')
assert recherche_mot_boyer('abracadabra', 'abra')
assert recherche_mot_boyer('abracadabra', 'obra') == False
assert recherche_mot_boyer('abracadabra', 'bara') == False
assert recherche_mot_boyer('maman est là', 'maman')
assert recherche_mot_boyer('bonjour maman', 'maman')
assert recherche_mot_boyer('bonjour maman', 'papa') == False
