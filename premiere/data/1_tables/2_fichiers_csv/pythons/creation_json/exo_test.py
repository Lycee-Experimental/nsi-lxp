attendu = {
    "jours_fériés": [
        {"motif": "Jour de l'an", "jour": "dimanche", "numero": 1, "mois": "janvier"},
        {"motif": "Lundi de Pâques", "jour": "lundi", "numero": 10, "mois": "avril"},
        {"motif": "Fête du travail", "jour": "lundi", "numero": 1, "mois": "mai"},
        {"motif": "Victoire 1945", "jour": "lundi", "numero": 8, "mois": "mai"},
        {"motif": "Ascension", "jour": "jeudi", "numero": 18, "mois": "mai"},
        {"motif": "Fête Nationale", "jour": "vendredi", "numero": 14, "mois": "juillet"},
        {"motif": "Assomption", "jour": "mardi", "numero": 15, "mois": "août"},
        {"motif": "Toussaint", "jour": "mercredi", "numero": 1, "mois": "novembre"},
        {"motif": "Armistice 1918", "jour": "samedi", "numero": 11, "mois": "novembre"},
        {"motif": "Noël", "jour": "lundi", "numero": 25, "mois": "décembre"},
    ]
}

assert contenu == attendu, "Erreur lors de la création"
