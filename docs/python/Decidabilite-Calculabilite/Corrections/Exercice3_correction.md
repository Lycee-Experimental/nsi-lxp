??? note "Correction"
    Si une telle fonction existe :

    ```python
    def div0(A, m) :
        ...
        if division par zero existe :
            return True
        else :
            return False
    ```
    
    Au moment d’exécuter ce programme, il faut passer la ligne if  division par zero existe   , et donc tester dans le programme A  un calcul menant à une division par 0, ce qui mathématiquement renvoie forcément une erreur, et donc interrompt le programme div0.