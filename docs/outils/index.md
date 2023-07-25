---
hide:
  -navigation
---
# Quelques outils pour construire des activités

??? tool "Pyodide"
    🙏🏽 Merci à **Vincent Bouillot** [:material-git:](https://bouillotvincent.gitlab.io/pyodide-mkdocs)

    **IDE**
    {{ IDE() }}

    **Terminal**
    {{ terminal()}}

    Plus d'info sur [Pyodide](./pyodide/index.md), l'[IDE](./pyodide/install_ide.md) et son [utilisation avancée](./pyodide/advanced.md), le [terminal](./pyodide/install_term.md).

??? tool "Terminal Linux v86"
    🙏🏽 Merci à l'équipe autour de **v86** [:material-git:](https://github.com/copy/v86)
    [Plus d'info](./v86.md)

    ??? debian "Ouvrir le terminal"
        {{debian()}}

??? tool "Simulateur assembleur Y86"
    <iframe src="/xtra/y86jsv2/index.html" frameborder="0" scrolling="auto" style="width: 100%; height: 550px;"></iframe>


??? tool "Diaporama avec Reavealjs"
    <iframe src="/premiere/fondement/histoire-diapo" frameborder="0" scrolling="auto" style="max-height: 100%; width: 100%; aspect-ratio: 3 / 2;"></iframe>

??? tool "Des QCMs"
    - Des QCM simples ✅❌ [ici](./qcm/qcm.md)
          
    - Des quiz basés sur QuizDown-JS

    🙏🏽 Big up à **Malte Bonart** [:material-git:](https://github.com/bonartm/quizdown-js) et aux contributeur·ices de [GeNumSI](https://genumsi.inria.fr/accueil.php)

    [:octicons-checklist-16: Accéder aux quiz](quiz.md){ .md-button }

??? tool "Simulateur de portes logiques"

    🙏🏽 Merci à **Jean-Philippe Pellet** pour sa réactivité [:material-git:](https://github.com/jppellet/Logic-Circuit-Simulator)

    <div style="width: 100%; height: 150px">
      <logic-editor mode="design">
        <script type="application/json">
          { // JSON5
            v: 6,
            components: {
              or0: {type: 'or', pos: [105, 35], in: [0, 1], out: 2},
              in0: {type: 'in', pos: [25, 20], id: 3},
              in1: {type: 'in', pos: [25, 50], id: 4},
              out0: {type: 'out', pos: [190, 35], id: 5},
            },
            wires: [[4, 1], [3, 0], [2, 5]]
          }
        </script>
      </logic-editor>
    </div>

??? tool "IDE de développement web"

    Avec Codepen
    <iframe id="cp_embed_PNaGbb" src="https://codepen.io/anon/embed/EVdVpQ?height=450&amp;theme-id=1&amp;slug-hash=PNaGbb&amp;default-tab=result&amp;editable=true" scrolling="no" allowfullscreen="" allowpaymentrequest="" name="CodePen Embed PNaGbb" title="CodePen Embed PNaGbb" class="cp_embed_iframe" style="width:100%;overflow:hidden" height="450" frameborder="0">CodePen Embed Fallback</iframe>

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
  
??? tool "Terminus pour apprendre les commandes linux"
    <iframe src="/xtra/Terminus" frameborder="0" scrolling="auto" style="height: 70vh; width: 100%;"></iframe>