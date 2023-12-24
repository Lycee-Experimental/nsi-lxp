!!! info "Recherche dichotomique itérative : à connaître"

	Il s'agit de l'algorithme de recherche dichotomique classique.

!!! info "La recherche de l'indice du milieu"

	Le calcul de l'indice du milieu mérite toutefois quelques commentaires. Ici on propose `#!py milieu = (debut + fin) // 2`.

	Or, dans certains langages de programmation comme le C, la taille des entiers est limitée. Ce calcul `#!py milieu = (debut + fin) // 2` peut parfois excéder cette taille limite. En effet, si les deux indices `#!py debut` et `#!py fin` sont grands, leur somme `#!py debut + fin` peut dépasser la valeur limite.

	Dans ce cas on calcule l'indice du milieu en utilisant la largeur de l'intervalle : `#!py milieu = debut + (fin - debut) // 2`.

	Dans le cas présent, le problème ne se pose pas car, en Python, les entiers n'ont pas de taille limite. Toutefois, Si l'on avait manipulé des nombres flottants le problème serait apparu :

	!!! example "Exemple"

		```pycon
		>>> debut = 2.0 ** 1023
		>>> fin   = 2.0 ** 1023 + 1
		>>> debut + fin  # dépassement de capacité
		inf
		>>> (debut + fin) / 2  # dépassement de capacité lors de la somme
		inf
		>>> debut + (fin - debut) / 2
		8.98846567431158e+307
		```

