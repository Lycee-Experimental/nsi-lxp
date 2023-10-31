# Quelques macro pour Mkdocs

??? tool "Numérotation automatique des exercices"
    Pour commencer à partir de l'exo 3 : `{% raw %}{{ exercice(3) }}{% endraw %}`
    et `{% raw %}{{ exercice() }}{% endraw %}` ensuite pour la numérotation automatique.

    Implémenté par la fonction suivante du fichier `main.py`
    ```python
    env.variables["compteur_exo"] = 1

    @env.macro
    def exercice(prem: Union[int, None] = None) -> str:
        # si var == False, alors l'exercice est placé dans une superfence.
        if prem is not None:
            env.variables["compteur_exo"] = prem
        root = f"Exercice { env.variables['compteur_exo']}"
        env.variables["compteur_exo"] += 1
        return root
    ```